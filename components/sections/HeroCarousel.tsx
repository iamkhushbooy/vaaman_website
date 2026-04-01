'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { PRIMARY, heroSlides } from '@/lib/data';

export function HeroCarousel() {
    const [slide, setSlide] = useState(0);
    useEffect(() => {
        const t = setInterval(() => setSlide(s => (s + 1) % heroSlides.length), 5000);
        return () => clearInterval(t);
    }, []);

    const prev = () => setSlide(s => (s - 1 + heroSlides.length) % heroSlides.length);
    const next = () => setSlide(s => (s + 1) % heroSlides.length);

    return (
        <section className="relative w-full overflow-hidden" style={{ height: '100vh', minHeight: '600px' }}>
            <div
                className="absolute inset-0 flex transition-transform duration-700 ease-in-out"
                style={{ width: `${heroSlides.length * 100}%`, transform: `translateX(-${slide * (100 / heroSlides.length)}%)` }}
            >
                {heroSlides.map((s, i) => (
                    <div key={s.src} className="relative flex-shrink-0 h-full" style={{ width: `${100 / heroSlides.length}%` }}>
                        <Image src={s.src} alt={s.alt} fill className="object-cover" priority={i === 0} sizes="100vw" />
                    </div>
                ))}
            </div>
            <div
                className="absolute inset-0 z-10"
                style={{ background: `linear-gradient(to right, rgba(2,36,91,0.88) 0%, rgba(2,36,91,0.55) 45%, rgba(2,36,91,0.18) 100%)` }}
            />
            <div
                className="absolute inset-0 flex transition-transform duration-700 ease-in-out z-20"
                style={{ width: `${heroSlides.length * 100}%`, transform: `translateX(-${slide * (100 / heroSlides.length)}%)` }}
            >
                {heroSlides.map((s) => (
                    <div key={s.src} className="relative flex-shrink-0 flex items-center px-6 h-full" style={{ width: `${100 / heroSlides.length}%` }}>
                        <div className="max-w-7xl mx-auto w-full">
                            <p className="text-sm uppercase tracking-[0.3em] font-semibold mb-4" style={{ color: PRIMARY }}>
                                {s.sub}
                            </p>
                            <h1
                                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight max-w-3xl"
                                style={{ fontFamily: 'Rubik, sans-serif', whiteSpace: 'pre-line' }}
                            >
                                {s.title}
                            </h1>
                            {/* <Link
                                href="/contact"
                                className="mt-8 inline-block px-8 py-4 text-white font-semibold transition hover:brightness-110"
                                style={{ backgroundColor: PRIMARY, fontFamily: 'Rubik, sans-serif' }}
                            >
                                Explore More
                            </Link> */}
                        </div>
                    </div>
                ))}
            </div>

            {/* Arrows — faded white default, orange on hover */}
            <button
                onClick={prev}
                className="absolute left-18 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full flex items-center justify-center border border-white/40 text-white/50 transition-all duration-300 hover:border-transparent hover:text-white"
                style={{ backgroundColor: 'rgba(255, 94, 20, 0.4)' }}
                onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = PRIMARY; }}
                onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'rgba(255, 94, 20, 0.4)'; }}
                aria-label="Previous"
            >
                <ChevronLeft size={22} />
            </button>
            <button
                onClick={next}
                className="absolute right-18 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full flex items-center justify-center border border-white/40 text-white/50 transition-all duration-300 hover:border-transparent hover:text-white"
                style={{ backgroundColor: 'rgba(255, 94, 20, 0.4)' }}
                onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = PRIMARY; }}
                onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'rgba(255, 94, 20, 0.4)'; }}
                aria-label="Next"
            >
                <ChevronRight size={22} />
            </button>
        </section>
    );
}
