export type JobOpening = {
  id: string;
  title: string;
  designation: string | null;
  department: string | null;
  company: string | null;
  status: string | null;
  description: string | null;
  publishedOn: string | null;
  route: string | null;
};

type FrappeJobOpening = {
  name?: string;
  job_title?: string;
  designation?: string;
  department?: string;
  company?: string;
  status?: string;
  description?: string;
  published_on?: string;
  route?: string;
};

export const jobOpeningFields = [
  "name",
  "job_title",
  "designation",
  "department",
  "company",
  "status",
  "description",
  "route",
] as const;

export function mapJobOpening(job: FrappeJobOpening): JobOpening {
  return {
    id: job.name ?? "",
    title: job.job_title ?? job.designation ?? job.name ?? "Untitled Role",
    designation: job.designation ?? null,
    department: job.department ?? null,
    company: job.company ?? null,
    status: job.status ?? null,
    description: job.description ?? null,
    publishedOn: job.published_on ?? null,
    route: job.route ?? null,
  };
}

export function stripHtml(html: string) {
  return html
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}
