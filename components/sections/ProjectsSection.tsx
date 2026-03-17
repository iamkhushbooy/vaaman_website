import Image from 'next/image';
import { PRIMARY, DARK, projects } from '@/lib/data';

export function ProjectsSection() {
    return (
        <section style={{ backgroundColor: DARK }}>
            {/* Header — padded */}
            <div className="py-16 px-6 text-center">
                <p className="text-sm uppercase tracking-widest font-semibold mb-3" style={{ color: PRIMARY }}>
                    Our Projects
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: 'Rubik, sans-serif' }}>
                    See What We Have<br />Completed Recently
                </h2>
            </div>

            {/* Images — full-width, edge-to-edge, 5 columns, no gap */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
                {projects.slice(0, 5).map(({ src, label, cat }) => (
                    <div key={label} className="group relative overflow-hidden cursor-pointer" style={{ height: '300px' }}>
                        <Image
                            src={src} alt={label} fill
                            className="object-cover transition-transform duration-500 group-hover:-translate-y-4"
                            sizes="300px"
                        />
                        {/* No permanent overlay — only dark label slides up on hover */}
                        <div
                            className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500"
                            style={{ backgroundColor: DARK }}
                        >
                            <p className="text-xs uppercase tracking-widest mb-0.5" style={{ color: PRIMARY }}>{cat}</p>
                            <p className="text-white font-semibold text-sm" style={{ fontFamily: 'Rubik, sans-serif' }}>{label}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
