import Image from 'next/image';
import { Share2 } from 'lucide-react';
import { PRIMARY, DARK, team } from '@/lib/data';

export function TeamSection() {
    return (
        <section className="py-24 px-6 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-14">
                    <p className="text-sm uppercase tracking-widest font-semibold mb-2" style={{ color: PRIMARY }}>
                        Our Team
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold" style={{ color: DARK, fontFamily: 'Rubik, sans-serif' }}>
                        Our Management
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {team.map(({ img, name, role }) => (
                        <div key={name} className="group overflow-hidden shadow-md">
                            {/* Photo */}
                            <div className="relative overflow-hidden" style={{ height: '320px' }}>
                                <Image
                                    src={img}
                                    alt={name}
                                    fill
                                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                                    sizes="400px"
                                />
                            </div>
                            {/* Name bar */}
                            <div className="flex items-center justify-between p-5 bg-white border-t-2" style={{ borderColor: PRIMARY }}>
                                <div>
                                    <h4 className="font-bold text-base" style={{ color: DARK, fontFamily: 'Rubik, sans-serif' }}>{name}</h4>
                                    <p className="text-sm mt-0.5" style={{ color: PRIMARY }}>{role}</p>
                                </div>
                                <div
                                    className="w-10 h-10 rounded-full flex items-center justify-center text-white flex-shrink-0"
                                    style={{ backgroundColor: PRIMARY }}
                                >
                                    <Share2 size={16} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
