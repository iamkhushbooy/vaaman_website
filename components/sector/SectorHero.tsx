'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import type { ReactNode } from 'react';

type HeroMetric = {
  value: string;
  label: string;
};

type HeroImage = {
  src: string;
  alt: string;
};

type SectorHeroProps = {
  badge: string;
  title: ReactNode;
  description: string;
  currentLabel: string;
  backgroundImage: HeroImage;
  collageTopImage: HeroImage;
  collageBottomImage: HeroImage;
  metrics: HeroMetric[];
};

export function SectorHero({
  badge,
  title,
  description,
  currentLabel,
  backgroundImage,
  collageTopImage,
  collageBottomImage,
  metrics,
}: SectorHeroProps) {
  return (
    <section className="relative overflow-hidden bg-[#071a3a] text-white">
      <div className="absolute inset-0">
        <Image
          src={backgroundImage.src}
          alt={backgroundImage.alt}
          fill
          priority
          className="object-cover object-center md:scale-[1.03]"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-900/80 to-transparent" />
      <div className="absolute -left-16 top-24 h-64 w-64 rounded-full bg-orange-400/25 blur-3xl" />
      <div className="absolute -right-24 bottom-12 h-80 w-80 rounded-full bg-blue-400/20 blur-3xl" />

      <div className="relative z-10 mx-auto flex min-h-[30rem] w-full max-w-[92rem] items-center px-4 py-16 sm:px-6 md:min-h-[38rem] lg:min-h-[40rem] lg:px-8">
        <div className="grid w-full gap-10 lg:grid-cols-[1fr_0.86fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-orange-200 backdrop-blur-sm">
              <Sparkles size={14} />
              {badge}
            </div>

            <h1 className="mt-5 max-w-4xl text-3xl font-bold leading-tight md:text-6xl">
              {title}
            </h1>

            <p className="mt-5 max-w-3xl text-base leading-relaxed text-blue-50/90 md:text-xl">
              {description}
            </p>

            <p className="mt-6 text-sm font-medium text-gray-200 md:text-base">
              <Link href="/" className="transition hover:text-[rgb(254,94,21)]">
                Home
              </Link>
              {' / '}
              <span className="text-gray-300">Sector</span>
              {' / '}
              <span className="text-[rgb(254,94,21)]">{currentLabel}</span>
            </p>

            <div className="mt-8 grid max-w-3xl gap-3 sm:grid-cols-3">
              {metrics.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-sm"
                >
                  <p className="text-2xl font-bold text-orange-200 md:text-3xl">{item.value}</p>
                  <p className="mt-1 text-xs text-blue-100/90 md:text-sm">{item.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative hidden min-h-[30rem] lg:block"
          >
            <div className="absolute right-0 top-0 w-[72%] overflow-hidden rounded-[1.7rem] border border-white/20 shadow-[0_30px_55px_rgba(2,6,23,0.35)]">
              <Image
                src={collageTopImage.src}
                alt={collageTopImage.alt}
                width={720}
                height={520}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="absolute bottom-0 left-0 w-[58%] overflow-hidden rounded-[1.5rem] border border-white/20 shadow-[0_24px_44px_rgba(2,6,23,0.35)]">
              <Image
                src={collageBottomImage.src}
                alt={collageBottomImage.alt}
                width={620}
                height={420}
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
