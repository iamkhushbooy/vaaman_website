import Image from 'next/image';
import Link from 'next/link';
import { PRIMARY, DARK, services } from '@/lib/data';

export function ServicesSection() {
    return (
        <section className="py-24 px-6 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-20">
                    <p className="text-sm uppercase tracking-widest font-semibold mb-2" style={{ color: PRIMARY }}>
                        Our Services
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold" style={{ color: DARK, fontFamily: 'Rubik, sans-serif' }}>
                        We Provide Best<br />Industrial Services
                    </h2>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8" style={{ paddingTop: '65px' }}>
                    {services.map(({ img, title, desc }) => (
                        /* OUTER: positions floating image above + Read More below */
                        <div key={title} className="relative group" style={{ marginTop: '65px', marginBottom: '25px' }}>

                            {/* Floating image — absolute to OUTER, above the inner card */}
                            <div
                                className="absolute left-1/2 -translate-x-1/2 z-10 shadow-lg bg-white"
                                style={{ top: '-65px', width: '130px', height: '130px' }}
                            >
                                <Image src={img} alt={title} fill className="object-cover" sizes="130px" />
                            </div>

                            {/* INNER card — overflow-hidden so dark overlay can slide in */}
                            <div className="relative bg-white shadow-md overflow-hidden" style={{ paddingTop: '80px', paddingBottom: '40px' }}>
                                {/* Normal content */}
                                <div className="px-8 text-center">
                                    <h3 className="text-xl font-bold mb-3" style={{ color: DARK, fontFamily: 'Rubik, sans-serif' }}>{title}</h3>
                                    <div className="w-8 h-0.5 mx-auto mb-4" style={{ backgroundColor: PRIMARY }} />
                                    <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                                </div>

                                {/* Dark overlay — slides DOWN from top on hover */}
                                <div
                                    className="absolute inset-0 flex flex-col items-center justify-center p-8 -translate-y-full group-hover:translate-y-0 transition-transform duration-500"
                                    style={{ backgroundColor: DARK }}
                                >
                                    <h3 className="text-xl font-bold text-white text-center mb-3" style={{ fontFamily: 'Rubik, sans-serif' }}>{title}</h3>
                                    <div className="w-8 h-0.5 mx-auto mb-4" style={{ backgroundColor: PRIMARY }} />
                                    <p className="text-white/75 text-sm text-center leading-relaxed">{desc}</p>
                                </div>
                            </div>

                            {/* Read More button — outside overflow-hidden, at bottom edge */}
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-20">
                                <Link
                                    href="/contact"
                                    className="px-6 py-2 text-sm font-semibold bg-white border border-gray-200 shadow-sm group-hover:bg-orange-500 group-hover:text-white group-hover:border-orange-500 transition-all block"
                                    style={{ color: DARK, whiteSpace: 'nowrap' }}
                                >
                                    Read More
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
