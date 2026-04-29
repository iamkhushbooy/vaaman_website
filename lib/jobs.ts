export type JobOpening = {
  id: string;
  title: string;
  designation: string | null;
  department: string | null;
  company: string | null;
  employmentType: string | null;
  location: string | null;
  status: string | null;
  description: string | null;
  publishedOn: string | null;
  closesOn: string | null;
  route: string | null;
};

type FrappeJobOpening = {
  name?: string;
  job_title?: string;
  designation?: string;
  department?: string;
  company?: string;
  employment_type?: string;
  location?: string;
  status?: string;
  description?: string;
  published_on?: string;
  closes_on?: string;
  route?: string;
};

export const jobOpeningListFields = [
  "name",
  "job_title",
  "designation",
  "department",
  "company",
  "employment_type",
  "location",
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
    employmentType: job.employment_type ?? null,
    location: job.location ?? null,
    status: job.status ?? null,
    description: job.description ?? null,
    publishedOn: job.published_on ?? null,
    closesOn: job.closes_on ?? null,
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
