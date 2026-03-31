'use client';

type LeadershipMessageSectionProps = {
    eyebrow: string;
    title: string;
    description: string[];
    imageSrc: string;
    imageAlt: string;
    reverse?: boolean;
    backgroundClassName?: string;
};

export default function LeadershipMessageSection({
    eyebrow,
    title,
    description,
    imageSrc,
    imageAlt,
    reverse = false,
    backgroundClassName = 'bg-white',
}: LeadershipMessageSectionProps) {
    return (
        <section className={`py-24 ${backgroundClassName}`}>
            <div className={`max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center ${reverse ? 'lg:[&>*:first-child]:order-2' : ''}`}>
                <div>
                    <p className="text-orange-500 font-semibold uppercase tracking-[0.3em] text-xs mb-4">{eyebrow}</p>
                    <h2 className="text-4xl font-extrabold text-[#002147] mb-6">{title}</h2>
                    <div className="space-y-5">
                        {description.map((paragraph) => (
                            <p key={paragraph} className="text-gray-600 text-lg leading-relaxed">
                                {paragraph}
                            </p>
                        ))}
                    </div>
                </div>

                <div className="rounded-[2rem] overflow-hidden shadow-xl border border-gray-100 bg-white">
                    <img
                        src={imageSrc}
                        alt={imageAlt}
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </section>
    );
}
