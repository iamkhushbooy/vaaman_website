'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { PRIMARY, DARK, testimonials } from '@/lib/data';

export function TestimonialsSection() {
    const [tSlide, setTSlide] = useState(0);
    const [tHovered, setTHovered] = useState(false);

    // Testimonial auto-advance — pauses on hover
    useEffect(() => {
        if (tHovered) return;
        const t = setInterval(() => setTSlide(s => (s + 1) % testimonials.length), 4000);
        return () => clearInterval(t);
    }, [tHovered]);

    return (
        <section
            className="py-24 bg-gray-50 overflow-hidden"
            onMouseEnter={() => setTHovered(true)}
            onMouseLeave={() => setTHovered(false)}
        >
            <div className="text-center mb-14 px-6">
                <p className="text-sm uppercase tracking-widest font-semibold mb-2" style={{ color: PRIMARY }}>
                    Testimonial
                </p>
                <h2 className="text-3xl md:text-4xl font-bold" style={{ color: DARK, fontFamily: 'Rubik, sans-serif' }}>
                    What Our Clients Say!
                </h2>
            </div>

            {/* Avatar row: arrows only visible on hover */}
            <div className="flex items-center justify-center gap-16 mb-8">
                <button
                    onClick={() => setTSlide(s => (s - 1 + testimonials.length) % testimonials.length)}
                    className="transition-opacity duration-300"
                    style={{ color: PRIMARY, opacity: tHovered ? 1 : 0 }}
                >
                    <ChevronLeft size={36} strokeWidth={2.5} />
                </button>

                <div className="relative">
                    <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-md flex items-center justify-center transition-all duration-300"
                        style={{ backgroundColor: DARK }}>
                        <span className="text-white text-2xl font-bold" style={{ fontFamily: 'Rubik, sans-serif' }}>
                            {testimonials[tSlide].org.charAt(0)}
                        </span>
                    </div>
                    {/* Quote badge — rounded-full */}
                    <div
                        className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full flex items-center justify-center text-white"
                        style={{ backgroundColor: PRIMARY }}
                    >
                        <Quote size={14} />
                    </div>
                </div>

                <button
                    onClick={() => setTSlide(s => (s + 1) % testimonials.length)}
                    className="transition-opacity duration-300"
                    style={{ color: PRIMARY, opacity: tHovered ? 1 : 0 }}
                >
                    <ChevronRight size={36} strokeWidth={2.5} />
                </button>
            </div>

            {/* Cards strip — always 3 cards (prev, center, next), fixed height for smooth transitions */}
            <div className="flex justify-center gap-6" style={{ paddingTop: '16px' }}>
                {([-1, 0, 1] as const).map(offset => {
                    const idx = (tSlide + offset + testimonials.length) % testimonials.length;
                    const t = testimonials[idx];
                    const isCenter = offset === 0;
                    return (
                        <div
                            key={offset}
                            className="flex-shrink-0 bg-white shadow-md p-8 text-center transition-all duration-300 flex flex-col justify-center"
                            style={{
                                width: '560px',
                                height: '200px',
                                opacity: isCenter ? 1 : 0.4,
                                transform: isCenter ? 'scale(1)' : 'scale(0.9)',
                            }}
                        >
                            <p className="text-gray-600 text-sm leading-relaxed italic mb-4">&ldquo;{t.text}&rdquo;</p>
                            <h5 className="font-bold text-base" style={{ color: DARK, fontFamily: 'Rubik, sans-serif' }}>{t.name}</h5>
                            <p className="text-sm mt-1" style={{ color: PRIMARY }}>{t.org}</p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
