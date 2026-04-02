import { NextResponse } from "next/server";

import {
  getApiBaseUrl,
  getEnvValue,
  getFrappeHeaders,
  getMissingEnvVars,
} from "@/lib/frappe";

export const dynamic = "force-dynamic";
export const revalidate = 0;

type JobApplicationRequest = {
  applicantName?: string;
  emailAddress?: string;
  phoneNumber?: string;
  countryOfResidence?: string;
  coverLetter?: string;
  resumeLink?: string;
  currency?: string;
  lowerRange?: string;
  upperRange?: string;
  jobOpening?: string;
};

function sanitizeValue(value?: string) {
  const trimmed = value?.trim();
  return trimmed ? trimmed : undefined;
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  const missingEnvVars = getMissingEnvVars();

  if (missingEnvVars.length > 0) {
    console.error("[job-applications] Missing required env vars", {
      missingEnvVars,
    });
    return NextResponse.json(
      {
        error: `Missing env vars: ${missingEnvVars.join(", ")}`,
      },
      { status: 500 },
    );
  }

  const payload = (await request.json()) as JobApplicationRequest;
  console.log("[job-applications] Raw request payload", payload);

  const applicantName = sanitizeValue(payload.applicantName);
  const emailAddress = sanitizeValue(payload.emailAddress);
  const jobOpening = sanitizeValue(payload.jobOpening);
  const phoneNumber = sanitizeValue(payload.phoneNumber);
  const countryOfResidence = sanitizeValue(payload.countryOfResidence);
  const coverLetter = sanitizeValue(payload.coverLetter);
  const resumeLink = sanitizeValue(payload.resumeLink);
  const currency = sanitizeValue(payload.currency);
  const lowerRange = sanitizeValue(payload.lowerRange);
  const upperRange = sanitizeValue(payload.upperRange);

  console.log("[job-applications] Sanitized incoming values", {
    applicantName,
    emailAddress,
    jobOpening,
    phoneNumber,
    countryOfResidence,
    coverLetter,
    resumeLink,
    currency,
    lowerRange,
    upperRange,
  });

  if (!jobOpening || !applicantName || !emailAddress) {
    console.error("[job-applications] Missing required fields after sanitization", {
      applicantName,
      emailAddress,
      jobOpening,
    });
    return NextResponse.json(
      {
        error: "Job opening, applicant name, and email address are required.",
      },
      { status: 400 },
    );
  }

  if (!isValidEmail(emailAddress)) {
    console.error("[job-applications] Invalid email address", {
      emailAddress,
    });
    return NextResponse.json(
      {
        error: "Enter a valid email address.",
      },
      { status: 400 },
    );
  }

  const lowerRangeNumber = lowerRange ? Number(lowerRange) : undefined;
  const upperRangeNumber = upperRange ? Number(upperRange) : undefined;

  if (
    (lowerRange && Number.isNaN(lowerRangeNumber)) ||
    (upperRange && Number.isNaN(upperRangeNumber))
  ) {
    console.error("[job-applications] Salary range contains non numeric values", {
      lowerRange,
      upperRange,
      lowerRangeNumber,
      upperRangeNumber,
    });
    return NextResponse.json(
      {
        error: "Salary range values must be numeric.",
      },
      { status: 400 },
    );
  }

  if (
    typeof lowerRangeNumber === "number" &&
    typeof upperRangeNumber === "number" &&
    lowerRangeNumber > upperRangeNumber
  ) {
    console.error("[job-applications] Lower range is greater than upper range", {
      lowerRangeNumber,
      upperRangeNumber,
    });
    return NextResponse.json(
      {
        error: "Lower salary range cannot be greater than upper salary range.",
      },
      { status: 400 },
    );
  }

  const baseUrl = getEnvValue("FRAPPE_API_BASE_URL")!;
  const apiKey = getEnvValue("FRAPPE_API_KEY")!;
  const apiSecret = getEnvValue("FRAPPE_API_SECRET")!;

  let url: URL;

  try {
    url = new URL("api/resource/Job Applicant", getApiBaseUrl(baseUrl));
  } catch {
    console.error("[job-applications] Invalid FRAPPE_API_BASE_URL", {
      baseUrl,
    });
    return NextResponse.json(
      {
        error:
          "Invalid FRAPPE_API_BASE_URL. Use a full URL such as https://ats.example.com/.",
      },
      { status: 500 },
    );
  }

  const frappePayload = {
    doctype: "Job Applicant",
    job_title: jobOpening,
    applicant_name: applicantName,
    email_id: emailAddress,
    phone_number: phoneNumber,
    country_of_residence: countryOfResidence,
    cover_letter: coverLetter,
    resume_link: resumeLink,
    currency: currency,
    lower_range: lowerRangeNumber,
    upper_range: upperRangeNumber,
  };

  const sanitizedPayload = Object.fromEntries(
    Object.entries(frappePayload).filter(([, value]) => value !== undefined),
  );

  console.log("[job-applications] Outgoing Frappe payload", sanitizedPayload);
  console.log("[job-applications] Posting to Frappe URL", url.toString());

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: getFrappeHeaders(apiKey, apiSecret),
      body: JSON.stringify(sanitizedPayload),
      cache: "no-store",
    });

    if (!response.ok) {
      const errorText = await response.text();

      console.error("[job-applications] Frappe rejected application", {
        status: response.status,
        errorText,
      });

      return NextResponse.json(
        {
          error:
            errorText ||
            `Failed to create job applicant. Backend returned ${response.status}.`,
        },
        { status: response.status },
      );
    }

    const result = (await response.json()) as {
      data?: {
        name?: string;
      };
    };

    console.log("[job-applications] Frappe application created successfully", {
      applicantId: result.data?.name ?? null,
      result,
    });

    return NextResponse.json({
      message: "Application submitted successfully.",
      applicantId: result.data?.name ?? null,
    });
  } catch (error) {
    console.error("[job-applications] Unexpected error while creating applicant", {
      error,
    });
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : "Unexpected error",
      },
      { status: 500 },
    );
  }
}
