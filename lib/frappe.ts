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
