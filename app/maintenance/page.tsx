import type { Metadata } from 'next';
import Link from 'next/link';
import { Construction } from 'lucide-react';
import { DARK, PRIMARY } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Under Maintenance | Vaaman Engineers (I) Limited',
  description:
    'Our site is temporarily under maintenance. Please check back soon or contact us for urgent enquiries.',
};

export default function MaintenancePage() {
  return (
    <main>
      <section
        className="relative h-56 sm:h-64 md:h-72 text-white flex items-center overflow-hidden"
        style={{ backgroundColor: DARK }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#02245B] via-[#03245a] to-[#051a40]" />
        <div className="absolute inset-0 opacity-[0.07] bg-[linear-gradient(135deg,#fff_25%,transparent_25%,transparent_50%,#fff_50%,#fff_75%,transparent_75%,transparent)] bg-[length:24px_24px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-3 md:mb-4 tracking-tight"
            style={{ fontFamily: 'Rubik, sans-serif' }}
          >
            Under maintenance
          </h1>
          <p className="text-base sm:text-lg text-gray-200">
            <Link href="/" className="hover:text-white transition">
              Home
            </Link>
            {' / '}
            <span style={{ color: PRIMARY }}>Maintenance</span>
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 min-h-[min(60vh,560px)] flex items-center">
        <div className="max-w-2xl mx-auto w-full text-center">
          <div
            className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full mb-6 sm:mb-8 text-white shadow-lg"
            style={{ backgroundColor: PRIMARY }}
            aria-hidden
          >
            <Construction className="w-8 h-8 sm:w-10 sm:h-10" strokeWidth={1.5} />
          </div>

          <p
            className="text-sm uppercase tracking-[0.2em] font-semibold mb-3"
            style={{ color: PRIMARY }}
          >
            We&apos;ll be back soon
          </p>
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4 md:mb-5 leading-snug"
            style={{ fontFamily: 'Rubik, sans-serif', color: DARK }}
          >
            Scheduled maintenance in progress
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8 md:mb-10 max-w-xl mx-auto">
            Our website is temporarily unavailable while we make improvements. Thank you for your
            patience — please check back shortly, or reach out to us directly for urgent enquiries.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center max-w-md sm:max-w-none mx-auto">
            <a
              href="tel:+912228925400"
              className="inline-flex items-center justify-center px-6 py-3 rounded font-semibold text-white transition hover:opacity-95 shadow-md"
              style={{ backgroundColor: PRIMARY }}
            >
              Call +91 22 28925400
            </a>
            <a
              href="mailto:enquiry@vaaman.in"
              className="inline-flex items-center justify-center px-6 py-3 rounded font-semibold border-2 transition bg-white text-slate-800 border-slate-300 hover:border-[#02245B] hover:text-[#02245B]"
            >
              enquiry@vaaman.in
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
