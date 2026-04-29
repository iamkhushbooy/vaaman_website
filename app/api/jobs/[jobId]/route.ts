import { NextResponse } from "next/server";

import {
  getApiBaseUrl,
  getFrappeErrorMessage,
  getEnvValue,
  getFrappeHeaders,
} from "@/lib/frappe";
import { mapJobOpening } from "@/lib/jobs";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET(
  _request: Request,
  context: { params: Promise<{ jobId: string }> },
) {
  const { jobId } = await context.params;

  const baseUrl = getEnvValue("FRAPPE_API_BASE_URL")!;
  const apiKey = getEnvValue("FRAPPE_API_KEY")!;
  const apiSecret = getEnvValue("FRAPPE_API_SECRET")!;

  let url: URL;

  try {
    url = new URL(
      `api/resource/Job Opening/${encodeURIComponent(jobId)}`,
      getApiBaseUrl(baseUrl),
    );
  } catch {
    return NextResponse.json(
      {
        error: "Invalid FRAPPE_API_BASE_URL.",
      },
      { status: 500 },
    );
  }

  try {
    const response = await fetch(url, {
      headers: getFrappeHeaders(apiKey, apiSecret),
      cache: "no-store",
    });

    if (!response.ok) {
      const errorText = await response.text();

      return NextResponse.json(
        {
          error:
            errorText ||
            `Failed to fetch job opening details. Backend returned ${response.status}.`,
        },
        { status: response.status },
      );
    }

    const payload = (await response.json()) as {
      data?: Record<string, string | null | undefined>;
    };

    return NextResponse.json({
      job: payload.data ? mapJobOpening(payload.data) : null,
    });
  } catch (error) {
    return NextResponse.json(
      {
        error: getFrappeErrorMessage(error),
      },
      { status: 500 },
    );
  }
}
