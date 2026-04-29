const requiredEnvVars = [
  "FRAPPE_API_BASE_URL",
  "FRAPPE_API_KEY",
  "FRAPPE_API_SECRET",
] as const;

type RequiredEnvVar = (typeof requiredEnvVars)[number];

export function getEnvValue(envVar: RequiredEnvVar) {
  return process.env[envVar]?.trim();
}

export function getMissingEnvVars() {
  return requiredEnvVars.filter((envVar) => !getEnvValue(envVar));
}

export function getApiBaseUrl(rawBaseUrl: string) {
  const normalizedBaseUrl = rawBaseUrl.endsWith("/")
    ? rawBaseUrl
    : `${rawBaseUrl}/`;

  return new URL(normalizedBaseUrl);
}

export function getFrappeHeaders(apiKey: string, apiSecret: string) {
  return {
    Authorization: `token ${apiKey}:${apiSecret}`,
    Accept: "application/json",
    "Content-Type": "application/json",
  };
}

export function getFrappeErrorMessage(error: unknown) {
  if (!(error instanceof Error)) {
    return "Unexpected error";
  }

  const cause = error.cause;

  if (
    cause &&
    typeof cause === "object" &&
    "code" in cause &&
    typeof cause.code === "string"
  ) {
    const hostname =
      "hostname" in cause && typeof cause.hostname === "string"
        ? cause.hostname
        : null;

    if (cause.code === "EAI_AGAIN" || cause.code === "ENOTFOUND") {
      return hostname
        ? `Unable to resolve Frappe host \`${hostname}\`. Check the FRAPPE_API_BASE_URL value and server DNS/network access.`
        : "Unable to resolve the Frappe host. Check the FRAPPE_API_BASE_URL value and server DNS/network access.";
    }

    if (cause.code === "ECONNREFUSED") {
      return "Connection to the Frappe server was refused. Verify the server is reachable and accepting requests.";
    }

    if (cause.code === "ETIMEDOUT") {
      return "Connection to the Frappe server timed out. Verify the server is reachable and responding.";
    }
  }

  return error.message;
}
