import { NextResponse } from "next/server";

import {
  getApiBaseUrl,
  getEnvValue,
  getFrappeHeaders,
  getMissingEnvVars,
} from "@/lib/frappe";
import { jobOpeningFields, mapJobOpening } from "@/lib/jobs";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET() {
  const missingEnvVars = getMissingEnvVars();

  // if (missingEnvVars.length > 0) {
  //   return NextResponse.json(
  //     {
  //       jobs: [],
  //       error: `Missing env vars: ${missingEnvVars.join(", ")}`,
  //     },
  //     { status: 500 },
  //   );
  // }

  const baseUrl = getEnvValue("FRAPPE_API_BASE_URL")!;
  const apiKey = getEnvValue("FRAPPE_API_KEY")!;
  const apiSecret = getEnvValue("FRAPPE_API_SECRET")!;

  let url: URL;

  try {
    url = new URL("api/resource/Job Opening", getApiBaseUrl(baseUrl));
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

  url.searchParams.set("fields", JSON.stringify(jobOpeningFields));
  url.searchParams.set(
    "filters",
    JSON.stringify([["status", "=", "Open"]]),
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

    return NextResponse.json({ jobs });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unexpected error";

    return NextResponse.json(
      {
        jobs: [],
        error: message,
      },
      { status: 500 },
    );
  }
}
