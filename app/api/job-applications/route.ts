import { NextResponse } from "next/server";

import {
  getApiBaseUrl,
  getEnvValue,
  getMissingEnvVars,
} from "@/lib/frappe";

export const dynamic = "force-dynamic";
export const revalidate = 0;

type FrappeDocField = {
  fieldname?: string;
  fieldtype?: string;
  label?: string;
};

type FrappeDocTypeResponse = {
  data?: {
    fields?: FrappeDocField[];
  };
};

type FrappeUploadResponse = {
  message?:
    | string
    | {
        file_url?: string;
      };
};

function sanitizeValue(value: FormDataEntryValue | null) {
  if (typeof value !== "string") {
    return undefined;
  }

  const trimmed = value.trim();
  return trimmed ? trimmed : undefined;
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidSignature(signature: string) {
  return /^[A-Za-z\s]+$/.test(signature);
}

function parseOptionalNumber(value?: string) {
  if (!value) {
    return undefined;
  }

  const parsedValue = Number(value);
  return Number.isNaN(parsedValue) ? Number.NaN : parsedValue;
}

function normalizeHighestQualification(value?: string) {
  if (!value) {
    return undefined;
  }

  const normalizedValue = value.trim();

  if (normalizedValue === "Bachelor's Degree") {
    return "Bachelor’s Degree";
  }

  if (normalizedValue === "Master's Degree") {
    return "Master’s Degree";
  }

  return normalizedValue;
}

function getAuthHeaders(apiKey: string, apiSecret: string) {
  return {
    Authorization: `token ${apiKey}:${apiSecret}`,
    Accept: "application/json",
  };
}

function normalizeLookupValue(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
}

function resolveFieldName(
  fields: FrappeDocField[],
  candidates: string[],
): string | undefined {
  const normalizedCandidates = candidates.map(normalizeLookupValue);

  for (const field of fields) {
    const fieldLabel = field.label ? normalizeLookupValue(field.label) : "";
    const fieldName = field.fieldname ? normalizeLookupValue(field.fieldname) : "";

    if (
      normalizedCandidates.includes(fieldLabel) ||
      normalizedCandidates.includes(fieldName)
    ) {
      return field.fieldname;
    }
  }

  return undefined;
}

function setMappedValue(
  payload: Record<string, string | number>,
  fields: FrappeDocField[],
  candidates: string[],
  value: string | number | undefined,
) {
  if (value === undefined) {
    return;
  }

  const fieldName = resolveFieldName(fields, candidates);

  if (fieldName) {
    payload[fieldName] = value;
  }
}

async function fetchJobApplicantFields(
  baseUrl: URL,
  apiKey: string,
  apiSecret: string,
) {
  const metaUrl = new URL("api/resource/DocType/Job Applicant", baseUrl);

  const response = await fetch(metaUrl, {
    headers: getAuthHeaders(apiKey, apiSecret),
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(
      `Unable to load Job Applicant metadata. Backend returned ${response.status}.`,
    );
  }

  const payload = (await response.json()) as FrappeDocTypeResponse;
  return payload.data?.fields ?? [];
}

async function updateApplicantRecord(
  baseUrl: URL,
  applicantId: string,
  updates: Record<string, string | number>,
  apiKey: string,
  apiSecret: string,
) {
  if (Object.keys(updates).length === 0) {
    return;
  }

  const applicantRecordUrl = new URL(
    `api/resource/Job Applicant/${encodeURIComponent(applicantId)}`,
    baseUrl,
  );

  const response = await fetch(applicantRecordUrl, {
    method: "PUT",
    headers: {
      ...getAuthHeaders(apiKey, apiSecret),
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updates),
    cache: "no-store",
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(
      errorText ||
        `Failed to update job applicant. Backend returned ${response.status}.`,
    );
  }
}

export async function POST(request: Request) {
  const missingEnvVars = getMissingEnvVars();

  // if (missingEnvVars.length > 0) {
  //   return NextResponse.json(
  //     {
  //       error: `Missing env vars: ${missingEnvVars.join(", ")}`,
  //     },
  //     { status: 500 },
  //   );
  // }

  const formData = await request.formData();

  const applicantName = sanitizeValue(formData.get("applicantName"));
  const emailAddress = sanitizeValue(formData.get("emailAddress"));
  const phoneNumber = sanitizeValue(formData.get("phoneNumber"));
  const currentLocation = sanitizeValue(formData.get("currentLocation"));
  const currentJobTitle = sanitizeValue(formData.get("currentJobTitle"));
  const currentCompany = sanitizeValue(formData.get("currentCompany"));
  const totalYearsOfExperience = sanitizeValue(
    formData.get("totalYearsOfExperience"),
  );
  const relevantExperience = sanitizeValue(formData.get("relevantExperience"));
  const jobOpening = sanitizeValue(formData.get("jobOpening"));
  const positionAppliedFor = sanitizeValue(formData.get("positionAppliedFor"));
  const sourceOfJobPosting = sanitizeValue(formData.get("sourceOfJobPosting"));
  const noticePeriod = sanitizeValue(formData.get("noticePeriod"));
  const currentSalary = sanitizeValue(formData.get("currentSalary"));
  const expectedSalary = sanitizeValue(formData.get("expectedSalary"));
  const highestQualification = normalizeHighestQualification(
    sanitizeValue(formData.get("highestQualification")),
  );
  const coverLetter = sanitizeValue(formData.get("coverLetter"));
  const signature = sanitizeValue(formData.get("signature"));
  const applicationDate = sanitizeValue(formData.get("applicationDate"));
  const declarationAccepted = sanitizeValue(
    formData.get("declarationAccepted"),
  );
  const resumeFile = formData.get("resume");
  const hasResumeFile =
    resumeFile instanceof File && resumeFile.size > 0 && resumeFile.name.trim();

  if (
    !jobOpening ||
    !applicantName ||
    !emailAddress ||
    !phoneNumber ||
    !currentLocation ||
    !currentJobTitle ||
    !currentCompany ||
    !totalYearsOfExperience ||
    !relevantExperience ||
    !positionAppliedFor ||
    !sourceOfJobPosting ||
    !noticePeriod ||
    !currentSalary ||
    !expectedSalary ||
    !highestQualification ||
    !signature ||
    !applicationDate
  ) {
    return NextResponse.json(
      {
        error: "All required application fields must be filled.",
      },
      { status: 400 },
    );
  }

  if (!hasResumeFile) {
    return NextResponse.json(
      {
        error: "Resume upload is required.",
      },
      { status: 400 },
    );
  }

  if (declarationAccepted !== "true") {
    return NextResponse.json(
      {
        error: "You must accept the declaration before submitting.",
      },
      { status: 400 },
    );
  }

  if (!isValidEmail(emailAddress)) {
    return NextResponse.json(
      {
        error: "Enter a valid email address.",
      },
      { status: 400 },
    );
  }

  if (!isValidSignature(signature)) {
    return NextResponse.json(
      {
        error: "Signature can contain only alphabets and spaces.",
      },
      { status: 400 },
    );
  }

  const totalYearsOfExperienceNumber = parseOptionalNumber(
    totalYearsOfExperience,
  );
  const relevantExperienceNumber = parseOptionalNumber(relevantExperience);

  if (
    Number.isNaN(totalYearsOfExperienceNumber) ||
    Number.isNaN(relevantExperienceNumber)
  ) {
    return NextResponse.json(
      {
        error: "Experience fields must be numeric.",
      },
      { status: 400 },
    );
  }

  if (
    typeof totalYearsOfExperienceNumber === "number" &&
    typeof relevantExperienceNumber === "number" &&
    relevantExperienceNumber > totalYearsOfExperienceNumber
  ) {
    return NextResponse.json(
      {
        error: "Relevant experience cannot be greater than total experience.",
      },
      { status: 400 },
    );
  }

  const rawBaseUrl = getEnvValue("FRAPPE_API_BASE_URL")!;
  const apiKey = getEnvValue("FRAPPE_API_KEY")!;
  const apiSecret = getEnvValue("FRAPPE_API_SECRET")!;

  let baseUrl: URL;
  let applicantUrl: URL;
  let uploadUrl: URL;

  try {
    baseUrl = getApiBaseUrl(rawBaseUrl);
    applicantUrl = new URL("api/resource/Job Applicant", baseUrl);
    uploadUrl = new URL("api/method/upload_file", baseUrl);
  } catch {
    return NextResponse.json(
      {
        error:
          "Invalid FRAPPE_API_BASE_URL. Use a full URL such as https://ats.example.com/.",
      },
      { status: 500 },
    );
  }

  try {
    const jobApplicantFields = await fetchJobApplicantFields(
      baseUrl,
      apiKey,
      apiSecret,
    );

    const frappePayload: Record<string, string | number> = {
      doctype: "Job Applicant",
      job_title: jobOpening,
      applicant_name: applicantName,
      email_id: emailAddress,
      phone_number: phoneNumber,
      cover_letter: coverLetter ?? "",
    };

    setMappedValue(
      frappePayload,
      jobApplicantFields,
      ["Current Location", "current_location"],
      currentLocation,
    );
    setMappedValue(
      frappePayload,
      jobApplicantFields,
      ["Current Job Title", "current_job_title"],
      currentJobTitle,
    );
    setMappedValue(
      frappePayload,
      jobApplicantFields,
      ["Current Company", "current_company"],
      currentCompany,
    );
    setMappedValue(
      frappePayload,
      jobApplicantFields,
      ["Total Years of Experience", "total_years_of_experience"],
      totalYearsOfExperienceNumber,
    );
    setMappedValue(
      frappePayload,
      jobApplicantFields,
      [
        "Relevant Experience (in years)",
        "relevant_experience_in_years",
        "relevant_experience",
      ],
      relevantExperienceNumber,
    );
    setMappedValue(
      frappePayload,
      jobApplicantFields,
      ["Position Applied For", "position_applied_for"],
      positionAppliedFor,
    );
    setMappedValue(
      frappePayload,
      jobApplicantFields,
      ["Source of Job Posting", "source_of_job_posting"],
      sourceOfJobPosting,
    );
    setMappedValue(
      frappePayload,
      jobApplicantFields,
      ["Notice Period", "notice_period"],
      noticePeriod,
    );
    setMappedValue(
      frappePayload,
      jobApplicantFields,
      ["Current Salary (CTC)", "current_salary_ctc", "current_salary"],
      currentSalary,
    );
    setMappedValue(
      frappePayload,
      jobApplicantFields,
      ["Expected Salary", "expected_salary"],
      expectedSalary,
    );
    setMappedValue(
      frappePayload,
      jobApplicantFields,
      ["Highest Qualification", "highest_qualification"],
      highestQualification,
    );
    setMappedValue(
      frappePayload,
      jobApplicantFields,
      ["Signature (Type Full Name)", "Signature", "signature"],
      signature,
    );
    setMappedValue(
      frappePayload,
      jobApplicantFields,
      ["Date", "application_date", "date"],
      applicationDate,
    );
    setMappedValue(
      frappePayload,
      jobApplicantFields,
      ["Declaration", "declaration", "declaration_confirmed"],
      1,
    );

    const applicantResponse = await fetch(applicantUrl, {
      method: "POST",
      headers: {
        ...getAuthHeaders(apiKey, apiSecret),
        "Content-Type": "application/json",
      },
      body: JSON.stringify(frappePayload),
      cache: "no-store",
    });

    if (!applicantResponse.ok) {
      const errorText = await applicantResponse.text();

      return NextResponse.json(
        {
          error:
            errorText ||
            `Failed to create job applicant. Backend returned ${applicantResponse.status}.`,
        },
        { status: applicantResponse.status },
      );
    }

    const applicantResult = (await applicantResponse.json()) as {
      data?: {
        name?: string;
      };
    };

    const applicantId = applicantResult.data?.name ?? null;

    if (!applicantId) {
      return NextResponse.json(
        {
          error: "Applicant was created without a valid record ID.",
        },
        { status: 500 },
      );
    }

    const resumeFieldName = resolveFieldName(jobApplicantFields, [
      "Upload Resume",
      "Resume Attachment",
      "resume_attachment",
      "upload_resume",
    ]);

    const uploadFormData = new FormData();
    uploadFormData.append("file", resumeFile);
    uploadFormData.append("is_private", "1");
    uploadFormData.append("doctype", "Job Applicant");
    uploadFormData.append("docname", applicantId);

    if (resumeFieldName) {
      uploadFormData.append("fieldname", resumeFieldName);
    }

    const uploadResponse = await fetch(uploadUrl, {
      method: "POST",
      headers: getAuthHeaders(apiKey, apiSecret),
      body: uploadFormData,
      cache: "no-store",
    });

    if (!uploadResponse.ok) {
      const errorText = await uploadResponse.text();

      return NextResponse.json(
        {
          error:
            errorText ||
            `Applicant created, but resume upload failed with ${uploadResponse.status}.`,
          applicantId,
        },
        { status: uploadResponse.status },
      );
    }

    const uploadResult = (await uploadResponse.json()) as FrappeUploadResponse;
    const fileUrl =
      typeof uploadResult.message === "object"
        ? uploadResult.message.file_url
        : undefined;

    const postCreateUpdates: Record<string, string | number> = {};
    setMappedValue(
      postCreateUpdates,
      jobApplicantFields,
      ["Resume Link", "resume_link"],
      fileUrl,
    );

    await updateApplicantRecord(
      baseUrl,
      applicantId,
      postCreateUpdates,
      apiKey,
      apiSecret,
    );

    return NextResponse.json({
      message: "Application submitted successfully.",
      applicantId,
    });
  } catch (error) {
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : "Unexpected error",
      },
      { status: 500 },
    );
  }
}
