'use client';

import Link from 'next/link';

const aboutPages = [
    {
        title: 'Company Profile',
        description: 'Overview of Vaaman Engineers, our industrial legacy, experience, and operating focus.',
        href: '/about/company-profile',
    },
    {
        title: 'Vision, Mission Values',
        description: 'Our direction, operating philosophy, and the values that guide execution across sites.',
        href: '/about/vision-mission-values',
    },
    {
        title: 'Milestone',
        description: 'A year-wise timeline of the company’s growth, contracts, and industrial expansion.',
        href: '/about/milestone',
    },
    {
        title: 'Chairman’s Corner',
        description: 'Leadership perspective on discipline, trust, and long-term industrial capability building.',
        href: '/about/chairmans-corner',
    },
    {
        title: 'CEO’s Desk',
        description: 'A focused view on operational excellence, delivery standards, and sustainable growth.',
        href: '/about/ceos-desk',
    },
    {
        title: 'Core Management Team',
        description: 'Leadership team profiles and management capability driving Vaaman’s operations.',
        href: '/about/core-management-team',
    },
    {
        title: 'Initiatives',
        description: 'Our safety-first operating culture, compliance commitment, and onsite initiatives.',
        href: '/about/initiatives',
    },
];

export default function AboutOverviewGrid() {
    return (
        <section className="py-20 bg-[#f8f9fa]">
            <div className="max-w-7xl mx-auto px-6">
                <div className="max-w-3xl mb-12">
                    <p className="text-orange-500 font-semibold uppercase tracking-[0.3em] text-xs mb-4">Explore About Us</p>
                    <h2 className="text-4xl font-extrabold text-[#002147] mb-4">Dedicated pages for every company profile section</h2>
                    <p className="text-lg text-gray-600">
                        Each item from the About dropdown now has its own page, so visitors can browse company information in a cleaner structure.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {aboutPages.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="group bg-white border border-gray-100 rounded-[1.75rem] p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                        >
                            <h3 className="text-2xl font-bold text-[#002147] group-hover:text-orange-500 transition-colors mb-4">
                                {item.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">{item.description}</p>
                            <span className="inline-block mt-6 text-sm font-semibold text-orange-500">Open page</span>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
