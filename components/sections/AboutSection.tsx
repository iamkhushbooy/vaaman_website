import Image from 'next/image';
import { CheckCircle, Mail, Phone } from 'lucide-react';
import { PRIMARY, DARK, aboutSectors } from '@/lib/data';

export function AboutSection() {
    return (
        <section className="py-24 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* Left — absolute-positioned staggered images (Industrio exact) */}
                <div className="relative" style={{ height: '520px' }}>
                    {/* Right image — starts at TOP */}
                    <div className="absolute overflow-hidden shadow-xl"
                        style={{ top: 0, right: 0, bottom: '80px', width: 'calc(50% - 8px)' }}>
                        <Image src="/images/hero/hero-3.jpg" alt="Plant operations" fill className="object-cover" sizes="280px" />
                    </div>
                    {/* Left image — starts 80px LOWER */}
                    <div className="absolute overflow-hidden shadow-xl"
                        style={{ top: '80px', left: 0, bottom: 0, width: 'calc(50% - 8px)' }}>
                        <Image src="/images/hero/hero-1.jpeg" alt="Industrial site" fill className="object-cover" sizes="280px" />
                    </div>
                    {/* Experience badge — centered at junction */}
                    <div
                        className="absolute z-10 flex flex-col items-center justify-center text-white text-center shadow-xl"
                        style={{
                            backgroundColor: PRIMARY,
                            width: '130px', height: '130px',
                            left: 'calc(50% - 65px)',
                            bottom: '80px',
                        }}
                    >
                        <span className="text-4xl font-bold" style={{ fontFamily: 'Rubik, sans-serif' }}>35</span>
                        <span className="text-xs uppercase tracking-wide mt-1 leading-tight">Years of<br />Experience</span>
                    </div>
                </div>

                {/* Right — text content */}
                <div>
                    <p className="text-sm uppercase tracking-widest font-semibold mb-3" style={{ color: PRIMARY }}>
                        About Us
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold mb-5 leading-snug" style={{ color: DARK, fontFamily: 'Rubik, sans-serif' }}>
                        We Are Leader In<br />Industrial Market
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                        Vaaman Engineers (I) Limited was established in 1990 by Shri S P Singh. Over 35 years,
                        we have grown into one of India's most trusted industrial service companies, delivering
                        excellence in O&M, material handling, and EPC across major industrial plants nationwide.
                    </p>
                    <ul className="space-y-2 mb-8">
                        {aboutSectors.map(s => (
                            <li key={s} className="flex items-center gap-3 text-gray-700">
                                <CheckCircle size={18} style={{ color: PRIMARY, flexShrink: 0 }} />
                                <span>{s}</span>
                            </li>
                        ))}
                    </ul>
                    <div className="flex flex-col sm:flex-row gap-6 border-t border-gray-100 pt-6">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full flex items-center justify-center text-white flex-shrink-0" style={{ backgroundColor: PRIMARY }}>
                                <Mail size={16} />
                            </div>
                            <span className="text-sm text-gray-600">info@vaamanengineers.com</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full flex items-center justify-center text-white flex-shrink-0" style={{ backgroundColor: PRIMARY }}>
                                <Phone size={16} />
                            </div>
                            <span className="text-sm text-gray-600">+91 99280 36938</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
