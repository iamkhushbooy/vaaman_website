import { NextResponse } from "next/server";

import {
  getApiBaseUrl,
  getFrappeErrorMessage,
  getEnvValue,
  getFrappeHeaders,
} from "@/lib/frappe";
import { jobOpeningListFields, mapJobOpening } from "@/lib/jobs";

export const dynamic = "force-dynamic";
export const revalidate = 0;

function needsFilterFieldHydration(job: ReturnType<typeof mapJobOpening>) {
  return !job.department || !job.designation || !job.location || !job.employmentType;
}

export async function GET() {
  const baseUrl = getEnvValue("FRAPPE_API_BASE_URL")!;
  const apiKey = getEnvValue("FRAPPE_API_KEY")!;
  const apiSecret = getEnvValue("FRAPPE_API_SECRET")!;
  const apiBaseUrl = getApiBaseUrl(baseUrl);

  let url: URL;

  try {
    url = new URL("api/resource/Job Opening", apiBaseUrl);
  } catch {
    return NextResponse.json(
      {
        jobs: [],
        error:
          "Invalid FRAPPE_API_BASE_URL.",
      },
      { status: 500 },
    );
  }

  url.searchParams.set("fields", JSON.stringify(jobOpeningListFields));
  url.searchParams.set(
    "filters",
    JSON.stringify([["status", "=", "Open"],["publish", "=", 1]]),
  );
  url.searchParams.set("limit_page_length", "100");
  url.searchParams.set("order_by", "name asc");

  try {
    const response = await fetch(url, {
      headers: getFrappeHeaders(apiKey, apiSecret),
      cache: "no-store",
    });

    if (!response.ok) {
      const errorText = await response.text();

      return NextResponse.json(
        {
          jobs: [],
          error:
            errorText ||
            `Failed to fetch job openings. Backend returned ${response.status}.`,
        },
        { status: response.status },
      );
    }

    const payload = (await response.json()) as {
      data?: Array<Record<string, string | null | undefined>>;
    };

    const jobs = (payload.data ?? []).map((job) => mapJobOpening(job));
    const jobsNeedingHydration = jobs.filter(needsFilterFieldHydration);

    if (jobsNeedingHydration.length === 0) {
      return NextResponse.json({ jobs });
    }

    const hydratedJobs = await Promise.all(
      jobs.map(async (job) => {
        if (!needsFilterFieldHydration(job)) {
          return job;
        }

        try {
          const detailUrl = new URL(
            `api/resource/Job Opening/${encodeURIComponent(job.id)}`,
            apiBaseUrl,
          );
          const detailResponse = await fetch(detailUrl, {
            headers: getFrappeHeaders(apiKey, apiSecret),
            cache: "no-store",
          });

          if (!detailResponse.ok) {
            return job;
          }

          const detailPayload = (await detailResponse.json()) as {
            data?: Record<string, string | null | undefined>;
          };

          return detailPayload.data ? mapJobOpening(detailPayload.data) : job;
        } catch {
          return job;
        }
      }),
    );

    return NextResponse.json({ jobs: hydratedJobs });
  } catch (error) {
    return NextResponse.json(
      {
        jobs: [],
        error: getFrappeErrorMessage(error),
      },
      { status: 500 },
    );
  }
}
