import Image from 'next/image';
import { Check, Play } from 'lucide-react';
import { PRIMARY, DARK, features } from '@/lib/data';

export function WhyChooseUs() {
    return (
        <section className="py-24 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* Left — image with play button on RIGHT EDGE (between columns) */}
                <div className="relative shadow-xl flex-shrink-0" style={{ height: '500px' }}>
                    <div className="relative overflow-hidden h-full">
                        <Image src="/images/hero/hero-2.jpg" alt="Why Choose Us" fill className="object-cover" sizes="600px" />
                    </div>
                    {/* White ring outer — sits behind the orange button */}
                    <div
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 w-28 h-28 rounded-full bg-white"
                    />
                    {/* Orange play button — above the white ring */}
                    <div
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-20 w-16 h-16 rounded-full flex items-center justify-center text-white cursor-pointer transition hover:scale-110 shadow-lg"
                        style={{ backgroundColor: PRIMARY }}
                    >
                        <Play size={22} fill="white" />
                    </div>
                </div>

                {/* Right — features */}
                <div>
                    <p className="text-sm uppercase tracking-widest font-semibold mb-3" style={{ color: PRIMARY }}>
                        Why Choosing Us!
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight" style={{ color: DARK, fontFamily: 'Rubik, sans-serif' }}>
                        Few Reasons Why People<br />Choosing Us!
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-8">
                        With 35+ years of operational expertise, Vaaman Engineers delivers measurable value through a
                        motivated workforce, cutting-edge technology, and an unwavering commitment to safety and quality.
                    </p>
                    <div className="space-y-6">
                        {features.map(({ title, desc }) => (
                            <div key={title} className="flex gap-5">
                                {/* Orange filled circle with white checkmark — exact Industrio style */}
                                <div
                                    className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 shadow-md"
                                    style={{ backgroundColor: PRIMARY }}
                                >
                                    <Check size={24} className="text-white" strokeWidth={3} />
                                </div>
                                <div className="pt-1">
                                    <h4 className="font-bold text-lg mb-1" style={{ color: DARK, fontFamily: 'Rubik, sans-serif' }}>{title}</h4>
                                    <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
