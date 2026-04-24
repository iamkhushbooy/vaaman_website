
'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import {
    BriefcaseBusiness,
    Building2,
    CalendarDays,
    ChevronRight,
    HeartPulse,
    Lightbulb,
    Linkedin,
    Mail,
    RefreshCcw,
    ShieldCheck,
    TrendingUp,
    Users,
    Wallet,
    X
} from 'lucide-react';

import type { JobOpening } from '@/lib/jobs';
import { stripHtml } from '@/lib/jobs';
import ApplyJobModal from '@/components/career/ApplyJobModal';

type JobsApiResponse = {
    jobs: JobOpening[];
    error?: string;
};

const JOBS_PER_BATCH = 10;

const benefits = [
    {
        title: 'Professional Growth',
        description: 'Continuous learning opportunities, skill development programs, and clear career progression paths.',
        icon: <TrendingUp className="text-[rgb(254,94,21)]" size={32} />
    },
    {
        title: 'Health & Wellness',
        description: 'Comprehensive medical insurance and wellness programs to keep you and your family secure.',
        icon: <HeartPulse className="text-[rgb(254,94,21)]" size={32} />
    },
    {
        title: 'Competitive Pay',
        description: 'Attractive remuneration packages, performance bonuses, and rewards for outstanding contributions.',
        icon: <Wallet className="text-[rgb(254,94,21)]" size={32} />
    },
    {
        title: 'Job Security & Safety',
        description: 'A stable work environment with the highest standards of occupational health and safety.',
        icon: <ShieldCheck className="text-[rgb(254,94,21)]" size={32} />
    },
    {
        title: 'Innovative Projects',
        description: "Work on cutting-edge engineering projects and operations for India's largest metal and mining giants.",
        icon: <Lightbulb className="text-[rgb(254,94,21)]" size={32} />
    },
    {
        title: 'Inclusive Culture',
        description: 'A diverse, collaborative, and supportive workplace where every voice is heard and valued.',
        icon: <Users className="text-[rgb(254,94,21)]" size={32} />
    }
];

function formatPublishedOn(date: string | null) {
    if (!date) {
        return 'Recently updated';
    }

    const parsedDate = new Date(date);

    if (Number.isNaN(parsedDate.getTime())) {
        return 'Recently updated';
    }

    return new Intl.DateTimeFormat('en-IN', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
    }).format(parsedDate);
}

function formatSequence(index: number) {
    return String(index + 1).padStart(2, '0');
}

function getJobSummary(job: JobOpening) {
    if (!job.description) {
        return 'Share your profile with us and our team will connect if your experience matches this role.';
    }

    const summary = stripHtml(job.description);

    if (summary.length <= 220) {
        return summary;
    }

    return `${summary.slice(0, 217).trim()}...`;
}

function sortJobsSequenceWise(jobs: JobOpening[]) {
    return [...jobs].sort((firstJob, secondJob) => {
        const idComparison = firstJob.id.localeCompare(secondJob.id, 'en', {
            numeric: true,
            sensitivity: 'base'
        });

        if (idComparison !== 0) {
            return idComparison;
        }

        return firstJob.title.localeCompare(secondJob.title, 'en', {
            sensitivity: 'base'
        });
    });
}

function JobRow({
    job,
    sequence,
    onApply,
    onViewDetails
}: {
    job: JobOpening;
    sequence: number;
    onApply: (job: JobOpening) => void;
    onViewDetails: (job: JobOpening) => void;
}) {
    return (
        <article className="flex h-full flex-col rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="flex gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#03245a] text-lg font-bold text-white">
                    {formatSequence(sequence)}
                </div>

                <div className="min-w-0 flex-1">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                            <p className="text-xs font-semibold tracking-[0.18em] text-slate-400 uppercase">
                                Job Opening ID
                            </p>
                            <h3 className="mt-1 line-clamp-2 text-xl font-bold text-[#03245a]">
                                {job.title}
                            </h3>
                            <p className="mt-1 text-sm font-medium text-[rgb(254,94,21)]">
                                {job.id}
                            </p>
                        </div>

                        <span className="inline-flex shrink-0 rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold tracking-[0.14em] text-[rgb(254,94,21)] uppercase">
                            {job.status ?? 'Open'}
                        </span>
                    </div>
                </div>
            </div>

            <div className="mb-6 mt-6 grid grid-cols-1 gap-3 text-sm text-slate-600 sm:grid-cols-2">
                {(job.designation || job.department) && (
                    <div className="flex items-center gap-2">
                        <Users size={16} className="shrink-0 text-[rgb(254,94,21)]" />
                        <span className="truncate">{[job.designation, job.department].filter(Boolean).join(' • ')}</span>
                    </div>
                )}

                {job.company && (
                    <div className="flex items-center gap-2">
                        <Building2 size={16} className="shrink-0 text-[rgb(254,94,21)]" />
                        <span className="truncate">{job.company}</span>
                    </div>
                )}

                <div className="flex items-center gap-2">
                    <CalendarDays size={16} className="shrink-0 text-[rgb(254,94,21)]" />
                    <span>Published {formatPublishedOn(job.publishedOn)}</span>
                </div>

                <div className="flex items-center gap-2">
                    <BriefcaseBusiness size={16} className="shrink-0 text-[rgb(254,94,21)]" />
                    <span>Sequence #{formatSequence(sequence)}</span>
                </div>
            </div>

            <p className="mb-6 line-clamp-3 text-sm leading-7 text-slate-600">
                {getJobSummary(job)}
            </p>

            <div className="mt-auto flex flex-col gap-3 pt-2 sm:flex-row">
                <button
                    type="button"
                    onClick={() => onApply(job)}
                    className="inline-flex flex-1 items-center justify-center rounded-xl bg-[rgb(254,94,21)] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[rgb(220,80,15)]"
                >
                    Apply Now
                </button>

                <button
                    type="button"
                    onClick={() => onViewDetails(job)}
                    className="inline-flex flex-1 items-center justify-center rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold text-[#03245a] transition-colors hover:border-[#03245a] hover:bg-slate-50"
                >
                    View Details
                </button>
            </div>
        </article>
    );
}

export default function CareersPage() {
    const [jobs, setJobs] = useState<JobOpening[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [visibleCount, setVisibleCount] = useState(JOBS_PER_BATCH);
    const [reloadKey, setReloadKey] = useState(0);
    const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
    const [selectedJob, setSelectedJob] = useState<JobOpening | null>(null);
    const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
    const [detailsJob, setDetailsJob] = useState<JobOpening | null>(null);

    useEffect(() => {
        let isMounted = true;

        async function loadJobs() {
            try {
                setIsLoading(true);
                setError(null);

                const response = await fetch('/api/jobs', { cache: 'no-store' });
                const payload = (await response.json()) as JobsApiResponse;

                if (!response.ok) {
                    throw new Error(payload.error ?? 'Unable to load job openings.');
                }

                if (isMounted) {
                    setJobs(sortJobsSequenceWise(payload.jobs ?? []));
                    setVisibleCount(JOBS_PER_BATCH);
                }
            } catch (requestError) {
                if (isMounted) {
                    setError(
                        requestError instanceof Error
                            ? requestError.message
                            : 'Unable to load job openings.'
                    );
                }
            } finally {
                if (isMounted) {
                    setIsLoading(false);
                }
            }
        }

        void loadJobs();

        return () => {
            isMounted = false;
        };
    }, [reloadKey]);

    useEffect(() => {
        if (!isDetailsModalOpen) {
            return undefined;
        }

        function handleEscape(event: KeyboardEvent) {
            if (event.key === 'Escape') {
                closeDetailsModal();
            }
        }

        window.addEventListener('keydown', handleEscape);

        return () => {
            window.removeEventListener('keydown', handleEscape);
        };
    }, [isDetailsModalOpen]);

    const visibleJobs = jobs.slice(0, visibleCount);
    const hasMoreJobs = jobs.length > visibleCount;

    function openApplyModal(job: JobOpening) {
        setSelectedJob(job);
        setIsApplyModalOpen(true);
    }

    function closeApplyModal() {
        setIsApplyModalOpen(false);
        setTimeout(() => setSelectedJob(null), 150);
    }

    function openDetailsModal(job: JobOpening) {
        setDetailsJob(job);
        setIsDetailsModalOpen(true);
    }

    function closeDetailsModal() {
        setIsDetailsModalOpen(false);
        setDetailsJob(null);
    }

    return (
        <div className="min-h-screen w-full bg-slate-50 pb-20">
            <div className="relative overflow-hidden bg-[linear-gradient(135deg,#03245a_0%,#0a3d91_50%,#03245a_100%)] py-20">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute left-[-8rem] top-[-4rem] h-56 w-56 rounded-full bg-[rgb(254,94,21)] blur-3xl"></div>
                    <div className="absolute bottom-[-6rem] right-[-4rem] h-64 w-64 rounded-full bg-cyan-400 blur-3xl"></div>
                </div>

                <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
                    <h1 className="mb-6 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
                        Careers at <span className="text-[rgb(254,94,21)]">Vaaman</span>
                    </h1>
                    <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-200 md:text-xl">
                        Shape the future of bulk material handling and metal production with us.
                    </p>

                    <div className="flex items-center justify-center gap-2 text-sm text-slate-300">
                        <Link href="/" className="transition-colors hover:text-white">Home</Link>
                        <ChevronRight size={14} />
                        <span className="font-medium text-[rgb(254,94,21)]">Careers</span>
                    </div>
                </div>
            </div>

            <section className="mx-auto mt-12 max-w-7xl px-6 py-8">
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="mb-6 text-3xl font-bold text-[#03245a] md:text-4xl">
                        Why Join Vaaman Engineers
                    </h2>
                    <div className="mx-auto mb-10 h-1.5 w-16 bg-[rgb(254,94,21)]"></div>
                    <p className="text-lg leading-relaxed text-slate-600">
                        Embark on a transformative career with Vaaman Engineers, a leader in industrial services. We offer a dynamic environment where innovation, commitment, and excellence are valued and rewarded across every project site and corporate function.
                    </p>
                </div>
            </section>

            <section className="mx-auto mt-12 max-w-375 px-4 sm:px-6 lg:px-8">
                <div className="mb-12 text-center">
                    <h2 className="mb-4 text-3xl font-bold text-[#03245a] md:text-4xl">
                        Benefits of Working at Vaaman Engineers
                    </h2>
                    <p className="mx-auto max-w-2xl text-lg text-slate-600">
                        Discover a workplace where your contribution is visible, your growth is supported, and your work directly powers industrial operations at scale.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {benefits.map((benefit) => (
                        <div
                            key={benefit.title}
                            className="group flex flex-col items-center rounded-xl border-t-4 border-transparent bg-white p-8 text-center shadow-md transition-all duration-300 hover:border-[rgb(254,94,21)] hover:shadow-xl"
                        >
                            <div className="mb-6 rounded-full bg-orange-50 p-4 transition-transform duration-300 group-hover:scale-110">
                                {benefit.icon}
                            </div>
                            <h3 className="mb-3 text-xl font-bold text-[#03245a]">
                                {benefit.title}
                            </h3>
                            <p className="leading-relaxed text-slate-600">
                                {benefit.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="mx-auto mt-24 max-w-375 px-4 sm:px-6 lg:px-8">
                <div className="rounded-4xl border border-slate-200 bg-[linear-gradient(180deg,#fff_0%,#f8fafc_100%)] p-8 shadow-xl md:p-12">
                    <div className="flex flex-col gap-5 border-b border-slate-200 pb-8 md:flex-row md:items-end md:justify-between">
                        <div className="max-w-3xl">
                            <span className="inline-flex rounded-full bg-[#03245a] px-4 py-1 text-xs font-semibold tracking-[0.2em] text-white uppercase">
                                Open Positions
                            </span>
                            <h2 className="mt-4 text-3xl font-bold text-[#03245a] md:text-3xl">
                                Current Job Openings
                            </h2>
                        </div>

                        {/* <button
                            type="button"
                            onClick={() => setReloadKey((currentKey) => currentKey + 1)}
                            className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold text-[#03245a] transition-colors hover:border-[#03245a] hover:bg-white"
                        >
                            <RefreshCcw size={16} />
                            Refresh Jobs
                        </button> */}
                    </div>

                    {isLoading && (
                        <div className="mt-10 space-y-4">
                            {Array.from({ length: 4 }).map((_, index) => (
                                <div
                                    key={index}
                                    className="h-44 animate-pulse rounded-3xl bg-slate-200/70"
                                />
                            ))}
                        </div>
                    )}

                    {!isLoading && error && (
                        <div className="mt-10 rounded-3xl border border-red-200 bg-red-50 p-8 text-center">
                            <h3 className="text-2xl font-bold text-red-700">
                                Unable to load openings
                            </h3>
                            <p className="mt-3 text-sm leading-7 text-red-600">
                                {error}
                            </p>
                            <p className="mt-5 text-sm text-slate-600">
                                Verify your `FRAPPE_API_BASE_URL`, `FRAPPE_API_KEY`, and `FRAPPE_API_SECRET` values in the env file.
                            </p>
                        </div>
                    )}

                    {!isLoading && !error && jobs.length === 0 && (
                        <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-10 text-center">
                            <h3 className="text-2xl font-bold text-[#03245a]">
                                No active openings right now
                            </h3>
                            <p className="mx-auto mt-4 max-w-2xl text-slate-600">
                                There are currently no published `Job Opening` records with open status. You can still share your resume and our recruitment team will reach out when a suitable opportunity opens up.
                            </p>
                        </div>
                    )}

                    {!isLoading && !error && jobs.length > 0 && (
                        <>
                            <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
                                {visibleJobs.map((job, index) => (
                                    <JobRow
                                        key={job.id}
                                        job={job}
                                        sequence={index}
                                        onApply={openApplyModal}
                                        onViewDetails={openDetailsModal}
                                    />
                                ))}
                            </div>

                            <div className="mt-10 flex flex-col items-center gap-4">
                                <p className="text-sm text-slate-500">
                                    Showing {visibleJobs.length} of {jobs.length} open job openings.
                                </p>

                                {hasMoreJobs && (
                                    <button
                                        type="button"
                                        onClick={() => setVisibleCount((currentCount) => currentCount + JOBS_PER_BATCH)}
                                        className="inline-flex items-center justify-center rounded-xl border border-[#03245a] px-6 py-3 text-sm font-semibold text-[#03245a] transition-colors hover:bg-[#03245a] hover:text-white"
                                    >
                                        See More
                                    </button>
                                )}
                            </div>
                        </>
                    )}
                </div>
            </section>

            <section className="mx-auto mt-24 max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="relative overflow-hidden rounded-2xl bg-[#03245a] p-8 text-center shadow-2xl md:p-12">
                    <div className="absolute left-0 top-0 h-2 w-full bg-[rgb(254,94,21)]"></div>

                    <h2 className="relative z-10 mb-6 text-3xl font-bold text-white md:text-4xl">
                        Ready to Apply?
                    </h2>
                    <p className="relative z-10 mx-auto mb-10 max-w-3xl text-lg leading-relaxed text-slate-300">
                        Use the Apply Now action on any listed job to open the application form popup and submit your details directly into the recruitment system.
                    </p>

                    <div className="relative z-10 flex flex-col items-center justify-center gap-6 sm:flex-row">
                        <a
                            href="https://www.linkedin.com/company/vaaman-engineers"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#0A66C2] px-8 py-4 font-bold text-white shadow-lg transition-colors duration-200 hover:bg-[#004182] hover:shadow-xl sm:w-auto"
                        >
                            <Linkedin size={20} />
                            Check LinkedIn
                        </a>

                        <button
                            type="button"
                            onClick={() => {
                                const firstVisibleJob = jobs[0];
                                if (firstVisibleJob) {
                                    openApplyModal(firstVisibleJob);
                                }
                            }}
                            className="flex w-full items-center justify-center gap-2 rounded-lg bg-[rgb(254,94,21)] px-8 py-4 font-bold text-white shadow-lg transition-colors duration-200 hover:bg-[rgb(220,80,15)] hover:shadow-xl sm:w-auto"
                        >
                            <Mail size={20} />
                            Open Application Form
                        </button>
                    </div>
                </div>
            </section>

            <ApplyJobModal
                isOpen={isApplyModalOpen}
                job={selectedJob}
                onClose={closeApplyModal}
            />

            {isDetailsModalOpen && detailsJob && (
                <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 px-4 py-6 backdrop-blur-sm sm:py-10">
                    <div
                        className="fixed inset-0"
                        onClick={closeDetailsModal}
                        aria-hidden="true"
                    />

                    <div className="relative mx-auto w-full max-w-5xl">
                        <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-white shadow-2xl">
                            <div className="absolute inset-x-0 top-0 h-1.5 bg-[linear-gradient(90deg,#03245a_0%,rgb(254,94,21)_55%,#03245a_100%)]" />

                            <div className="relative p-6 sm:p-8">
                                <button
                                    type="button"
                                    onClick={closeDetailsModal}
                                    className="absolute right-5 top-5 inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:text-slate-800 hover:shadow-md"
                                    aria-label="Close job details"
                                >
                                    <X size={18} />
                                </button>

                                <div className="pr-12">
                                    <span className="inline-flex rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold tracking-[0.16em] text-[rgb(254,94,21)] uppercase">
                                        Job Details
                                    </span>
                                    <h3 className="mt-4 text-3xl font-bold text-[#03245a]">
                                        {detailsJob.title}
                                    </h3>
                                    <p className="mt-2 text-sm font-medium text-[rgb(254,94,21)]">
                                        {detailsJob.id}
                                    </p>
                                </div>

                                <div className="mt-6 grid gap-3 text-sm text-slate-600 sm:grid-cols-2 xl:grid-cols-4">
                                    {(detailsJob.designation || detailsJob.department) && (
                                        <div className="flex items-center gap-2">
                                            <Users size={16} className="text-[rgb(254,94,21)]" />
                                            <span>{[detailsJob.designation, detailsJob.department].filter(Boolean).join(' • ')}</span>
                                        </div>
                                    )}

                                    {detailsJob.company && (
                                        <div className="flex items-center gap-2">
                                            <Building2 size={16} className="text-[rgb(254,94,21)]" />
                                            <span>{detailsJob.company}</span>
                                        </div>
                                    )}

                                    <div className="flex items-center gap-2">
                                        <CalendarDays size={16} className="text-[rgb(254,94,21)]" />
                                        <span>Published {formatPublishedOn(detailsJob.publishedOn)}</span>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <BriefcaseBusiness size={16} className="text-[rgb(254,94,21)]" />
                                        <span>{detailsJob.status ?? 'Open'}</span>
                                    </div>
                                </div>

                                <div className="mt-8 rounded-3xl border border-slate-200 bg-slate-50 p-5 sm:p-6">
                                    <h4 className="text-lg font-semibold text-[#03245a]">
                                        Description
                                    </h4>

                                    {detailsJob.description ? (
                                        <div
                                            className="prose prose-slate mt-4 max-w-none text-sm leading-7"
                                            dangerouslySetInnerHTML={{ __html: detailsJob.description }}
                                        />
                                    ) : (
                                        <p className="mt-4 text-sm leading-7 text-slate-600">
                                            Description is not available for this job opening.
                                        </p>
                                    )}
                                </div>

                                <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
                                    {/* {detailsJob.route && (
                                <a
                                    href={detailsJob.route}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold text-[#03245a] transition-colors hover:border-[#03245a] hover:bg-slate-50"
                                >
                                    Open Original Link
                                </a>
                            )} */}

                                    <button
                                        type="button"
                                        onClick={() => {
                                            closeDetailsModal();
                                            openApplyModal(detailsJob);
                                        }}
                                        className="inline-flex items-center justify-center rounded-xl bg-[rgb(254,94,21)] px-5 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[rgb(220,80,15)] hover:shadow-lg"
                                    >
                                        Apply Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
