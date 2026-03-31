'use client';

import Link from 'next/link';

type AboutHeroProps = {
    title: string;
    breadcrumbLabel?: string;
    backgroundSrc?: string;
};

export default function AboutHero({
    title,
    breadcrumbLabel,
    backgroundSrc = '/sefty_images/sefty10.jpg',
}: AboutHeroProps) {
    return (
        <section className="relative h-96 bg-blue-950 text-white flex items-center overflow-hidden">
            <div className="absolute inset-0">
                {/* <img
                    src={backgroundSrc}
                    alt={title}
                    className="w-full h-full object-cover"
                /> */}
            </div>

            <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-900/80 to-transparent"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <h1 className="text-5xl md:text-6xl font-bold mb-4">{title}</h1>
                <p className="text-lg text-gray-200">
                    <Link href="/" className="hover:text-white transition">Home</Link>
                    {' / '}
                    <Link href="/about" className="hover:text-white transition">About Us</Link>
                    {' / '}
                    <span>{breadcrumbLabel || title}</span>
                </p>
            </div>
        </section>
    );
}
