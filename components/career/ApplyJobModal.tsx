'use client';

import { FormEvent, useEffect, useState } from 'react';
import { Phone, X } from 'lucide-react';
import type { JobOpening } from '@/lib/jobs';

type JobApplicationApiResponse = {
    message?: string;
    applicantId?: string | null;
    error?: string;
};

type JobApplicationFormState = {
    jobOpening: string;
    applicantName: string;
    emailAddress: string;
    phoneNumber: string;
    countryOfResidence: string;
    coverLetter: string;
    resumeLink: string;
    currency: string;
    lowerRange: string;
    upperRange: string;
};

function createInitialFormState(jobOpening = ''): JobApplicationFormState {
    console.log('[createInitialFormState] Called with jobOpening:', jobOpening);
    return {
        jobOpening,
        applicantName: '',
        emailAddress: '',
        phoneNumber: '',
        countryOfResidence: '',
        coverLetter: '',
        resumeLink: '',
        currency: 'INR',
        lowerRange: '',
        upperRange: ''
    };
}

interface ApplyJobModalProps {
    isOpen: boolean;
    job: JobOpening | null;
    onClose: () => void;
}

export default function ApplyJobModal({ isOpen, job, onClose }: ApplyJobModalProps) {
    console.log('[ApplyJobModal Render] isOpen:', isOpen, '| job:', job);

    const [formState, setFormState] = useState<JobApplicationFormState>(createInitialFormState());
    const [isSubmittingApplication, setIsSubmittingApplication] = useState(false);
    const [applicationError, setApplicationError] = useState<string | null>(null);
    const [applicationSuccess, setApplicationSuccess] = useState<string | null>(null);

    useEffect(() => {
        console.log('[useEffect] Triggered. Dependencies - isOpen:', isOpen, '| job:', job);
        if (isOpen && job) {
            console.log('[useEffect] Setting initial state and resetting errors for job ID:', job.id);
            setFormState(createInitialFormState(job.id));
            setApplicationError(null);
            setApplicationSuccess(null);
        }
    }, [isOpen, job]);

    if (!isOpen || !job) {
        console.log('[ApplyJobModal Render] Returning null because isOpen is false or job is null.');
        return null;
    }

    function handleInputChange(field: keyof JobApplicationFormState, value: string) {
        console.log(`[handleInputChange] Field: "${field}" | New Value: "${value}"`);
        setFormState((currentState) => {
            const newState = {
                ...currentState,
                [field]: value
            };
            console.log('[handleInputChange] Updated formState:', newState);
            return newState;
        });
    }

    async function handleApplicationSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        console.log('[handleApplicationSubmit] Form submission started!');
        console.log('[handleApplicationSubmit] Current formState payload:', formState);

        try {
            setIsSubmittingApplication(true);
            setApplicationError(null);
            setApplicationSuccess(null);

            console.log('[handleApplicationSubmit] Sending POST request to /api/job-applications...');
            const response = await fetch('/api/job-applications', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formState)
            });

            console.log('[handleApplicationSubmit] Received response. Status:', response.status);

            const payload = (await response.json()) as JobApplicationApiResponse;
            console.log('[handleApplicationSubmit] Parsed response payload:', payload);

            if (!response.ok) {
                console.error('[handleApplicationSubmit] API returned an error:', payload.error);
                throw new Error(payload.error ?? 'Unable to submit job application.');
            }

            const successMessage = payload.applicantId
                ? `Application submitted successfully. Applicant ID: ${payload.applicantId}`
                : payload.message ?? 'Application submitted successfully.';
            
            console.log('[handleApplicationSubmit] Success message set:', successMessage);
            
            setApplicationSuccess(successMessage);
            console.log('[handleApplicationSubmit] Resetting form fields to initial state.');
            setFormState(createInitialFormState(formState.jobOpening));
        } catch (submissionError) {
            console.error('[handleApplicationSubmit] Caught an error during submission:', submissionError);
            setApplicationError(
                submissionError instanceof Error
                    ? submissionError.message
                    : 'Unable to submit job application.'
            );
        } finally {
            console.log('[handleApplicationSubmit] Finally block executing. Setting isSubmittingApplication to false.');
            setIsSubmittingApplication(false);
        }
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 px-4 py-6">
            <div className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-[2rem] bg-white p-6 shadow-2xl sm:p-8">
                <button
                    type="button"
                    onClick={() => {
                        console.log('[ApplyJobModal] Close icon clicked.');
                        onClose();
                    }}
                    className="absolute right-5 top-5 inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-colors hover:border-slate-300 hover:text-slate-800"
                    aria-label="Close application form"
                >
                    <X size={18} />
                </button>

                <div className="pr-12">
                    <p className="text-sm font-semibold tracking-[0.18em] text-[rgb(254,94,21)] uppercase">
                        Job Application
                    </p>
                    <h3 className="mt-2 text-3xl font-bold text-[#03245a]">
                        Apply for {job.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-slate-600">
                        Fill the form below. On submit, the website sends a POST request to the internal API route and that route creates a `Job Applicant` record in Frappe.
                    </p>
                </div>

                <form className="mt-8 space-y-6" onSubmit={handleApplicationSubmit}>
                    <div className="grid gap-5 md:grid-cols-2">
                        <label className="space-y-2 md:col-span-2">
                            <span className="text-sm font-semibold text-slate-700">
                                Job Opening
                            </span>
                            <input
                                value={formState.jobOpening}
                                readOnly
                                className="w-full rounded-xl border border-slate-200 bg-slate-100 px-4 py-3 text-sm text-slate-700 outline-none"
                            />
                        </label>

                        <label className="space-y-2 md:col-span-2">
                            <span className="text-sm font-semibold text-slate-700">
                                Applicant Name *
                            </span>
                            <input
                                value={formState.applicantName}
                                onChange={(event) => handleInputChange('applicantName', event.target.value)}
                                required
                                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-700 outline-none transition-colors focus:border-[#03245a]"
                                placeholder="Enter applicant name"
                            />
                        </label>

                        <label className="space-y-2">
                            <span className="text-sm font-semibold text-slate-700">
                                Email Address *
                            </span>
                            <input
                                type="email"
                                value={formState.emailAddress}
                                onChange={(event) => handleInputChange('emailAddress', event.target.value)}
                                required
                                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-700 outline-none transition-colors focus:border-[#03245a]"
                                placeholder="name@example.com"
                            />
                        </label>

                        <label className="space-y-2">
                            <span className="text-sm font-semibold text-slate-700">
                                Phone Number
                            </span>
                            <div className="relative">
                                <Phone size={16} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                                <input
                                    value={formState.phoneNumber}
                                    onChange={(event) => handleInputChange('phoneNumber', event.target.value)}
                                    className="w-full rounded-xl border border-slate-200 py-3 pl-11 pr-4 text-sm text-slate-700 outline-none transition-colors focus:border-[#03245a]"
                                    placeholder="Enter phone number"
                                />
                            </div>
                        </label>

                        <label className="space-y-2 md:col-span-2">
                            <span className="text-sm font-semibold text-slate-700">
                                Country of Residence
                            </span>
                            <input
                                value={formState.countryOfResidence}
                                onChange={(event) => handleInputChange('countryOfResidence', event.target.value)}
                                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-700 outline-none transition-colors focus:border-[#03245a]"
                                placeholder="Enter country"
                            />
                        </label>

                        <label className="space-y-2 md:col-span-2">
                            <span className="text-sm font-semibold text-slate-700">
                                Cover Letter
                            </span>
                            <textarea
                                value={formState.coverLetter}
                                onChange={(event) => handleInputChange('coverLetter', event.target.value)}
                                rows={6}
                                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm leading-6 text-slate-700 outline-none transition-colors focus:border-[#03245a]"
                                placeholder="Write a short introduction"
                            />
                        </label>

                        <label className="space-y-2 md:col-span-2">
                            <span className="text-sm font-semibold text-slate-700">
                                Resume Link
                            </span>
                            <input
                                type="url"
                                value={formState.resumeLink}
                                onChange={(event) => handleInputChange('resumeLink', event.target.value)}
                                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-700 outline-none transition-colors focus:border-[#03245a]"
                                placeholder="https://example.com/resume.pdf"
                            />
                        </label>

                        <div className="space-y-2 md:col-span-2">
                            <span className="text-sm font-semibold text-slate-700">
                                Expected Salary Range per Month
                            </span>
                            <div className="grid gap-4 md:grid-cols-3">
                                <label className="space-y-2">
                                    <span className="text-xs font-medium text-slate-500">
                                        Currency
                                    </span>
                                    <input
                                        value={formState.currency}
                                        onChange={(event) => handleInputChange('currency', event.target.value)}
                                        className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-700 outline-none transition-colors focus:border-[#03245a]"
                                        placeholder="INR"
                                    />
                                </label>

                                <label className="space-y-2">
                                    <span className="text-xs font-medium text-slate-500">
                                        Lower Range
                                    </span>
                                    <input
                                        type="number"
                                        min="0"
                                        value={formState.lowerRange}
                                        onChange={(event) => handleInputChange('lowerRange', event.target.value)}
                                        className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-700 outline-none transition-colors focus:border-[#03245a]"
                                        placeholder="25000"
                                    />
                                </label>

                                <label className="space-y-2">
                                    <span className="text-xs font-medium text-slate-500">
                                        Upper Range
                                    </span>
                                    <input
                                        type="number"
                                        min="0"
                                        value={formState.upperRange}
                                        onChange={(event) => handleInputChange('upperRange', event.target.value)}
                                        className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-700 outline-none transition-colors focus:border-[#03245a]"
                                        placeholder="45000"
                                    />
                                </label>
                            </div>
                        </div>
                    </div>

                    {applicationError && (
                        <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                            {applicationError}
                        </div>
                    )}

                    {/* {applicationSuccess && (
                        <div className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
                            {applicationSuccess}
                        </div>
                    )}

                    <div className="flex flex-col-reverse gap-3 border-t border-slate-200 pt-6 sm:flex-row sm:justify-end">
                        <button
                            type="button"
                            onClick={() => {
                                console.log('[ApplyJobModal] Discard button clicked.');
                                onClose();
                            }}
                            className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50"
                        >
                            Cancle
                        </button>
                        <button
                            type="submit"
                            disabled={isSubmittingApplication}
                            className="inline-flex items-center justify-center rounded-xl bg-[#03245a] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#021a43] disabled:cursor-not-allowed disabled:opacity-70"
                        >
                            {isSubmittingApplication ? 'Submitting...' : 'Submit'}
                        </button>
                    </div> */}

                    {applicationSuccess && (
                        <div className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
                            {applicationSuccess}
                        </div>
                    )}

                    {/* conditionally render buttons based on success state */}
                    {!applicationSuccess ? (
                        <div className="flex flex-col-reverse gap-3 border-t border-slate-200 pt-6 sm:flex-row sm:justify-end">
                            <button
                                type="button"
                                onClick={() => {
                                    console.log('[ApplyJobModal] Discard button clicked.');
                                    onClose();
                                }}
                                className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50"
                            >
                                Cancle
                            </button>
                            <button
                                type="submit"
                                disabled={isSubmittingApplication}
                                className="inline-flex items-center justify-center rounded-xl bg-[#03245a] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#021a43] disabled:cursor-not-allowed disabled:opacity-70"
                            >
                                {isSubmittingApplication ? 'Submitting...' : 'Submit'}
                            </button>
                        </div>
                    ) : (
                        <div className="flex flex-col-reverse gap-3 border-t border-slate-200 pt-6 sm:flex-row sm:justify-end">
                            <button
                                type="button"
                                onClick={() => {
                                    console.log('[ApplyJobModal] Close button clicked after success.');
                                    onClose();
                                }}
                                className="inline-flex items-center justify-center rounded-xl bg-[#03245a] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#021a43]"
                            >
                                Close
                            </button>
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
}