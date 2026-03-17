'use client';

import { useRef, useState, useEffect } from 'react';
import { PRIMARY, DARK, stats } from '@/lib/data';
import { useCountUp } from '@/hooks/useCountUp';

function StatCard({ icon: Icon, value, prefix, suffix, label, visible }: {
    icon: React.ElementType; value: number; prefix: string; suffix: string; label: string; visible: boolean;
}) {
    const n = useCountUp(value, visible);
    return (
        <div className="flex flex-col items-center py-12 px-6 border border-white/10">
            <Icon size={52} className="text-white mb-4" />
            <span className="text-4xl md:text-5xl font-bold" style={{ color: PRIMARY, fontFamily: 'Rubik, sans-serif' }}>
                {prefix}{n.toLocaleString()}{suffix}
            </span>
            <span className="mt-2 text-sm uppercase tracking-widest text-white/60 text-center">{label}</span>
        </div>
    );
}

export function StatsStrip() {
    const [statsVis, setStatsVis] = useState(false);
    const statsRef = useRef<HTMLDivElement>(null);

    // Stats intersection
    useEffect(() => {
        const el = statsRef.current;
        if (!el) return;
        const obs = new IntersectionObserver(
            ([e]) => { if (e.isIntersecting) setStatsVis(true); },
            { threshold: 0.3 }
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, []);

    return (
        <section ref={statsRef} className="my-0" style={{ backgroundColor: DARK }}>
            <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4">
                {stats.map(s => (
                    <StatCard key={s.label} {...s} visible={statsVis} />
                ))}
            </div>
        </section>
    );
}
