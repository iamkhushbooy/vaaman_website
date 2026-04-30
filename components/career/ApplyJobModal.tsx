'use client';

import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { CalendarDays, Phone, Upload, X } from 'lucide-react';
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
    currentLocation: string;
    currentJobTitle: string;
    currentCompany: string;
    totalYearsOfExperience: string;
    relevantExperience: string;
    positionAppliedFor: string;
    sourceOfJobPosting: string;
    noticePeriod: string;
    currentSalary: string;
    expectedSalary: string;
    highestQualification: string;
    isEmployeeReferral: boolean;
    employeeReferralEmail: string;
    employeeReferralCode: string;
    coverLetter: string;
    signature: string;
    applicationDate: string;
    declarationAccepted: boolean;
};

const SOURCE_OF_JOB_POSTING_OPTIONS = [
    'LinkedIn',
    'Company Website',
    'Referral',
    'Job Portal',
    'Other'
] as const;

const NOTICE_PERIOD_OPTIONS = [
    'Immediate',
    '15 Days',
    '30 Days',
    '60 Days',
    '90 Days'
] as const;

const HIGHEST_QUALIFICATION_OPTIONS = [
    { label: 'Diploma', value: 'Diploma' },
    { label: "Bachelor's Degree", value: 'Bachelor’s Degree' },
    { label: "Master's Degree", value: 'Master’s Degree' },
    { label: 'PhD', value: 'PhD' },
    { label: 'Other', value: 'Other' }
] as const;

function getTodayDate() {
    return formatApplicationDate(new Date());
}

function formatApplicationDate(date: Date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    return `${year}/${month}/${day}`;
}

function toDateInputValue(value: string) {
    return value.replace(/\//g, '-');
}

function toApplicationDateValue(value: string) {
    return value.replace(/-/g, '/');
}

function sanitizeSignatureValue(value: string) {
    return value.replace(/[^A-Za-z\s]/g, '');
}

function createInitialFormState(job: JobOpening | null = null): JobApplicationFormState {
    return {
        jobOpening: job?.id ?? '',
        applicantName: '',
        emailAddress: '',
        phoneNumber: '',
        currentLocation: '',
        currentJobTitle: '',
        currentCompany: '',
        totalYearsOfExperience: '',
        relevantExperience: '',
        positionAppliedFor: job?.title ?? '',
        sourceOfJobPosting: '',
        noticePeriod: '',
        currentSalary: '',
        expectedSalary: '',
        highestQualification: '',
        isEmployeeReferral: false,
        employeeReferralEmail: '',
        employeeReferralCode: '',
        coverLetter: '',
        signature: '',
        applicationDate: getTodayDate(),
        declarationAccepted: false
    };
}

interface ApplyJobModalProps {
    isOpen: boolean;
    job: JobOpening | null;
    onClose: () => void;
}

export default function ApplyJobModal({ isOpen, job, onClose }: ApplyJobModalProps) {
    const [formState, setFormState] = useState<JobApplicationFormState>(createInitialFormState());
    const [resumeFile, setResumeFile] = useState<File | null>(null);
    const [isSubmittingApplication, setIsSubmittingApplication] = useState(false);
    const [applicationError, setApplicationError] = useState<string | null>(null);
    const [applicationSuccess, setApplicationSuccess] = useState<string | null>(null);

    useEffect(() => {
        if (isOpen && job) {
            setFormState(createInitialFormState(job));
            setResumeFile(null);
            setApplicationError(null);
            setApplicationSuccess(null);
        }
    }, [isOpen, job]);

    useEffect(() => {
        if (!isOpen) {
            return undefined;
        }

        function handleEscape(event: KeyboardEvent) {
            if (event.key === 'Escape') {
                onClose();
            }
        }

        window.addEventListener('keydown', handleEscape);

        return () => {
            window.removeEventListener('keydown', handleEscape);
        };
    }, [isOpen, onClose]);

    if (!isOpen || !job) {
        return null;
    }

    function handleInputChange(field: keyof JobApplicationFormState, value: string | boolean) {
        setFormState((currentState) => ({
            ...currentState,
            [field]: value
        }));
    }

    function handleResumeChange(event: ChangeEvent<HTMLInputElement>) {
        setResumeFile(event.target.files?.[0] ?? null);
    }

    async function handleApplicationSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        try {
            setIsSubmittingApplication(true);
            setApplicationError(null);
            setApplicationSuccess(null);

            const submissionData = new FormData();

            Object.entries(formState).forEach(([key, value]) => {
                submissionData.append(key, typeof value === 'boolean' ? String(value) : value);
            });

            if (resumeFile) {
                submissionData.append('resume', resumeFile);
            }

            const response = await fetch('/api/job-applications', {
                method: 'POST',
                body: submissionData
            });

            const payload = (await response.json()) as JobApplicationApiResponse;

            if (!response.ok) {
                throw new Error(payload.error ?? 'Unable to submit job application.');
            }

            const successMessage = payload.applicantId
                ? `Application submitted successfully. Applicant ID: ${payload.applicantId}`
                : payload.message ?? 'Application submitted successfully.';

            setApplicationSuccess(successMessage);
            setFormState(createInitialFormState(job));
            setResumeFile(null);
        } catch (submissionError) {
            setApplicationError(
                submissionError instanceof Error
                    ? submissionError.message
                    : 'Unable to submit job application.'
            );
        } finally {
            setIsSubmittingApplication(false);
        }
    }

    const inputClassName =
        'w-full rounded-xl bg-slate-100 px-4 py-3 text-sm text-slate-700 outline-none ring-1 ring-transparent transition-all duration-200 focus:bg-white focus:ring-[#03245a]/25';
    const applicationDateInputValue = toDateInputValue(formState.applicationDate);

    return (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 px-4 py-6 backdrop-blur-sm sm:py-10">
            <div
                className="fixed inset-0"
                onClick={onClose}
                aria-hidden="true"
            />

            <div className="relative mx-auto w-full max-w-5xl">
                <div className="relative overflow-hidden rounded-[2rem] bg-[linear-gradient(180deg,#f8fafc_0%,#eef2f7_100%)] shadow-2xl">
                    <div className="absolute inset-x-0 top-0 h-1.5 bg-[linear-gradient(90deg,#03245a_0%,rgb(254,94,21)_55%,#03245a_100%)]" />

                    <div className="relative p-6 sm:p-8">
                        <button
                            type="button"
                            onClick={onClose}
                            className="absolute right-5 top-5 inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:text-slate-800 hover:shadow-md"
                            aria-label="Close application form"
                        >
                            <X size={18} />
                        </button>

                        <div className="pr-12">
                            <span className="inline-flex rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold tracking-[0.16em] text-[rgb(254,94,21)] uppercase">
                                Job Application
                            </span>
                            <h3 className="mt-4 text-3xl font-bold text-[#03245a]">
                                Apply for {job.title}
                            </h3>
                        </div>

                        <form className="mt-8 space-y-6 rounded-[1.75rem] bg-white/70 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] ring-1 ring-slate-200/70 sm:p-6" onSubmit={handleApplicationSubmit}>
                            <div className="grid gap-5 md:grid-cols-2">
                                <label className="space-y-2 md:col-span-2">
                                    <span className="text-sm font-semibold text-slate-700">Job Opening</span>
                                    <input
                                        value={formState.jobOpening}
                                        readOnly
                                        className="w-full rounded-xl bg-slate-100 px-4 py-3 text-sm text-slate-700 outline-none"
                                    />
                                </label>

                                <label className="space-y-2 md:col-span-2">
                                    <span className="text-sm font-semibold text-slate-700">Applicant Name *</span>
                                    <input
                                        value={formState.applicantName}
                                        onChange={(event) => handleInputChange('applicantName', event.target.value)}
                                        required
                                        className={inputClassName}
                                        placeholder="Enter applicant name"
                                    />
                                </label>

                                <label className="space-y-2">
                                    <span className="text-sm font-semibold text-slate-700">Email Address *</span>
                                    <input
                                        type="email"
                                        value={formState.emailAddress}
                                        onChange={(event) => handleInputChange('emailAddress', event.target.value)}
                                        required
                                        className={inputClassName}
                                        placeholder="name@example.com"
                                    />
                                </label>

                                <label className="space-y-2">
                                    <span className="text-sm font-semibold text-slate-700">Phone Number *</span>
                                    <div className="relative">
                                        <Phone size={16} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                                        <input
                                            type="tel" 
                                            maxLength={10} 
                                            pattern="[0-9]{10}"
                                            title="Please enter a valid 10-digit phone number"
                                            value={formState.phoneNumber}
                                            onChange={(event) => {
                                                const numericValue = event.target.value.replace(/\D/g, '');
                                                if (numericValue.length <= 10) {
                                                    handleInputChange('phoneNumber', numericValue);
                                                }
                                            }}
                                            required
                                            className="w-full rounded-xl bg-slate-100 py-3 pl-11 pr-4 text-sm text-slate-700 outline-none ring-1 ring-transparent transition-all duration-200 focus:bg-white focus:ring-[#03245a]/25"
                                            placeholder="Enter 10-digit phone number"
                                        />
                                    </div>
                                </label>

                                <label className="space-y-2">
                                    <span className="text-sm font-semibold text-slate-700">Current Location *</span>
                                    <input
                                        value={formState.currentLocation}
                                        onChange={(event) => handleInputChange('currentLocation', event.target.value)}
                                        required
                                        className={inputClassName}
                                        placeholder="Enter current location"
                                    />
                                </label>

                                <label className="space-y-2">
                                    <span className="text-sm font-semibold text-slate-700">Current Job Title *</span>
                                    <input
                                        value={formState.currentJobTitle}
                                        onChange={(event) => handleInputChange('currentJobTitle', event.target.value)}
                                        required
                                        className={inputClassName}
                                        placeholder="Enter current job title"
                                    />
                                </label>

                                <label className="space-y-2">
                                    <span className="text-sm font-semibold text-slate-700">Current Company *</span>
                                    <input
                                        value={formState.currentCompany}
                                        onChange={(event) => handleInputChange('currentCompany', event.target.value)}
                                        required
                                        className={inputClassName}
                                        placeholder="Enter current company"
                                    />
                                </label>

                                <label className="space-y-2">
                                    <span className="text-sm font-semibold text-slate-700">Total Years of Experience *</span>
                                    <input
                                        type="number"
                                        min="0"
                                        step="0.1"
                                        value={formState.totalYearsOfExperience}
                                        onChange={(event) => handleInputChange('totalYearsOfExperience', event.target.value)}
                                        required
                                        className={inputClassName}
                                        placeholder="e.g. 7"
                                    />
                                </label>

                                <label className="space-y-2">
                                    <span className="text-sm font-semibold text-slate-700">Relevant Experience (in years) *</span>
                                    <input
                                        type="number"
                                        min="0"
                                        step="0.1"
                                        value={formState.relevantExperience}
                                        onChange={(event) => handleInputChange('relevantExperience', event.target.value)}
                                        required
                                        className={inputClassName}
                                        placeholder="e.g. 4.5"
                                    />
                                </label>

                                <label className="space-y-2">
                                    <span className="text-sm font-semibold text-slate-700">Position Applied For *</span>
                                    <input
                                        value={formState.positionAppliedFor}
                                        onChange={(event) => handleInputChange('positionAppliedFor', event.target.value)}
                                        readOnly
                                        className={inputClassName}
                                        placeholder="Enter position applied for"
                                    />
                                </label>

                                <label className="space-y-2">
                                    <span className="text-sm font-semibold text-slate-700">Source of Job Posting *</span>
                                    <select
                                        value={formState.sourceOfJobPosting}
                                        onChange={(event) => handleInputChange('sourceOfJobPosting', event.target.value)}
                                        required
                                        className={inputClassName}
                                    >
                                        <option value="">Select source</option>
                                        {SOURCE_OF_JOB_POSTING_OPTIONS.map((option) => (
                                            <option key={option} value={option}>
                                                {option}
                                            </option>
                                        ))}
                                    </select>
                                </label>

                                <label className="space-y-2">
                                    <span className="text-sm font-semibold text-slate-700">Notice Period *</span>
                                    <select
                                        value={formState.noticePeriod}
                                        onChange={(event) => handleInputChange('noticePeriod', event.target.value)}
                                        required
                                        className={inputClassName}
                                    >
                                        <option value="">Select notice period</option>
                                        {NOTICE_PERIOD_OPTIONS.map((option) => (
                                            <option key={option} value={option}>
                                                {option}
                                            </option>
                                        ))}
                                    </select>
                                </label>

                                <label className="space-y-2">
                                    <span className="text-sm font-semibold text-slate-700">Current Salary (CTC) *</span>
                                    <input
                                        value={formState.currentSalary}
                                        onChange={(event) => handleInputChange('currentSalary', event.target.value)}
                                        required
                                        className={inputClassName}
                                        placeholder="Enter current CTC"
                                    />
                                </label>

                                <label className="space-y-2">
                                    <span className="text-sm font-semibold text-slate-700">Expected Salary *</span>
                                    <input
                                        value={formState.expectedSalary}
                                        onChange={(event) => handleInputChange('expectedSalary', event.target.value)}
                                        required
                                        className={inputClassName}
                                        placeholder="Enter expected salary"
                                    />
                                </label>

                                <label className="space-y-2">
                                    <span className="text-sm font-semibold text-slate-700">Highest Qualification *</span>
                                    <select
                                        value={formState.highestQualification}
                                        onChange={(event) => handleInputChange('highestQualification', event.target.value)}
                                        required
                                        className={inputClassName}
                                    >
                                        <option value="">Select qualification</option>
                                        {HIGHEST_QUALIFICATION_OPTIONS.map((option) => (
                                            <option key={option.value} value={option.value}>
                                                {option.label}
                                            </option>
                                        ))}
                                    </select>
                                </label>


                                <div className="space-y-2 md:col-span-2">
                                    <span className="text-sm font-semibold text-slate-700">Upload Resume *</span>
                                    <label className="flex cursor-pointer items-center justify-center gap-3 rounded-xl bg-slate-100 px-4 py-5 text-sm text-slate-600 ring-1 ring-transparent transition-all duration-200 hover:bg-slate-200/70 hover:text-[#03245a]">
                                        <Upload size={18} />
                                        <span>{resumeFile?.name ?? 'Choose resume file'}</span>
                                        <input
                                            type="file"
                                            accept=".pdf,.doc,.docx"
                                            required={!resumeFile}
                                            onChange={handleResumeChange}
                                            className="sr-only"
                                        />
                                    </label>
                                </div>

                                <label className="space-y-2 md:col-span-2">
                                    <span className="text-sm font-semibold text-slate-700">Cover Letter</span>
                                    <textarea
                                        value={formState.coverLetter}
                                        onChange={(event) => handleInputChange('coverLetter', event.target.value)}
                                        rows={5}
                                        className="w-full rounded-xl bg-slate-100 px-4 py-3 text-sm leading-6 text-slate-700 outline-none ring-1 ring-transparent transition-all duration-200 focus:bg-white focus:ring-[#03245a]/25"
                                        placeholder="Write a short introduction"
                                    />
                                </label>

                                <label className="space-y-2">
                                    <span className="text-sm font-semibold text-slate-700">Signature (Type Full Name) *</span>
                                    <input
                                        value={formState.signature}
                                        onChange={(event) => handleInputChange('signature', sanitizeSignatureValue(event.target.value))}
                                        pattern="[A-Za-z\s]+"
                                        title="Only alphabets and spaces are allowed"
                                        required
                                        className={inputClassName}
                                        placeholder="Type full name"
                                    />
                                </label>

                                <label className="space-y-2">
                                    <span className="text-sm font-semibold text-slate-700">Date *</span>
                                    <div className="relative">
                                        <button
                                            type="button"
                                            className="flex w-full items-center justify-start gap-3 rounded-xl bg-slate-100 px-4 py-3 text-left text-sm font-medium text-slate-700 outline-none ring-1 ring-transparent transition-all duration-200 hover:bg-slate-200/70 focus:bg-white focus:ring-[#03245a]/25"
                                            tabIndex={-1}
                                        >
                                            <CalendarDays size={16} className="text-slate-500" />
                                            <span>{formState.applicationDate}</span>
                                        </button>
                                        <input
                                            type="date"
                                            value={applicationDateInputValue}
                                            onChange={(event) => handleInputChange('applicationDate', toApplicationDateValue(event.target.value))}
                                            required
                                            aria-label="Application date"
                                            className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
                                        />
                                    </div>
                                </label>

                                 <label className="flex items-start gap-3 rounded-xl bg-slate-100 px-4 py-4 md:col-span-2">
                                    <input
                                        type="checkbox"
                                        checked={formState.isEmployeeReferral}
                                        onChange={(event) => {
                                            const isChecked = event.target.checked;

                                            setFormState((currentState) => ({
                                                ...currentState,
                                                isEmployeeReferral: isChecked,
                                                employeeReferralEmail: isChecked ? currentState.employeeReferralEmail : '',
                                                employeeReferralCode: isChecked ? currentState.employeeReferralCode : ''
                                            }));
                                        }}
                                        className="mt-1 h-4 w-4 rounded border-slate-300 text-[#03245a] focus:ring-[#03245a]"
                                    />
                                    <span className="text-sm font-semibold leading-6 text-slate-700">
                                        Is Employee Referral
                                    </span>
                                </label>

                                {formState.isEmployeeReferral && (
                                    <>
                                        <label className="space-y-2">
                                            <span className="text-sm font-semibold text-slate-700">Referral Employee Email *</span>
                                            <input
                                                type="email"
                                                value={formState.employeeReferralEmail}
                                                onChange={(event) => handleInputChange('employeeReferralEmail', event.target.value)}
                                                required
                                                className={inputClassName}
                                                placeholder="employee@example.com"
                                            />
                                        </label>

                                        <label className="space-y-2">
                                            <span className="text-sm font-semibold text-slate-700">Referral Employee Code *</span>
                                            <input
                                                value={formState.employeeReferralCode}
                                                onChange={(event) => handleInputChange('employeeReferralCode', event.target.value)}
                                                required
                                                className={inputClassName}
                                                placeholder="Enter employee code"
                                            />
                                        </label>
                                    </>
                                )}

                                <label className="flex items-start gap-3 rounded-xl bg-slate-100 px-4 py-4 md:col-span-2">
                                    <input
                                        type="checkbox"
                                        checked={formState.declarationAccepted}
                                        onChange={(event) => handleInputChange('declarationAccepted', event.target.checked)}
                                        required
                                        className="mt-1 h-4 w-4 rounded border-slate-300 text-[#03245a] focus:ring-[#03245a]"
                                    />
                                    <span className="text-sm leading-6 text-slate-700">
                                        I confirm that the information provided is accurate to the best of my knowledge.
                                    </span>
                                </label>
                            </div>

                            {applicationError && (
                                <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                                    {applicationError}
                                </div>
                            )}

                            {applicationSuccess && (
                                <div className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
                                    {applicationSuccess}
                                </div>
                            )}

                            {!applicationSuccess ? (
                                <div className="flex flex-col-reverse gap-3 border-t border-slate-200 pt-6 sm:flex-row sm:justify-end">
                                    <button
                                        type="button"
                                        onClick={onClose}
                                        className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50"
                                    >
                                        Cancel
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
                                        onClick={onClose}
                                        className="inline-flex items-center justify-center rounded-xl bg-[#03245a] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#021a43]"
                                    >
                                        Close
                                    </button>
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
