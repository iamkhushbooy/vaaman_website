'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Building2,
  Factory,
  Gauge,
  MapPin,
  ShieldCheck,
  Sparkles,
  SunMedium,
  Thermometer,
  Truck,
} from 'lucide-react';

const plantHighlights = [
  {
    title: 'Plant Location',
    description:
      'Bokaro, Jharkhand, around 4.5 km from Bokaro Steel City Railway Station and 1.2 km from NH 320.',
    icon: MapPin,
  },
  {
    title: 'Phase One Setup',
    description:
      'A 6" extrusion press for 152 mm billet with auxiliary equipment, with core systems sourced from top Indian manufacturers.',
    icon: Factory,
  },
  {
    title: 'Planned Capacity',
    description:
      'Targeted first-phase production capacity of 400 MT per month with a focused rollout for finished profiles.',
    icon: Gauge,
  },
];

const productSegments = [
  {
    title: 'Market Items',
    description: 'Door and window profiles designed for repeat-use market demand.',
    icon: Building2,
  },
  {
    title: 'Architecture',
    description: 'Angle, tube, and round profiles for architectural and fabrication applications.',
    icon: Building2,
  },
  {
    title: 'Solar Panels',
    description: 'Extruded profiles suitable for solar module framing and related structures.',
    icon: SunMedium,
  },
  {
    title: 'Heat Sinks',
    description: 'Precision aluminium sections for thermal management applications.',
    icon: Thermometer,
  },
  {
    title: 'Automobile',
    description: 'Profiles intended for automotive component and mobility-linked use cases.',
    icon: Truck,
  },
];

const qualityPoints = [
  'Dimensional accuracy for finished profiles',
  'Lab reports with chemical composition details',
  'Mechanical property documentation',
  'Application-focused production planning',
  'Support for architecture, solar, thermal, and mobility sectors',
];

const phaseTimeline = [
  {
    phase: 'Phase 01',
    title: 'Trial Plan',
    detail: 'First phase trial scheduled from June.',
  },
  {
    phase: 'Phase 02',
    title: 'Production Start',
    detail: 'Production targeted to start from July in phase one.',
  },
  {
    phase: 'Phase 03',
    title: 'Monthly Output',
    detail: 'Planned first-phase capacity of 400 MT per month.',
  },
];

const headlineMetrics = [
  { value: '400 MT', label: 'Phase one monthly target' },
  { value: '6"', label: 'Extrusion press size' },
  { value: '2025', label: 'Foundation year in Bokaro' },
];

export default function ManufacturingPage() {
  return (
    <main className="bg-[linear-gradient(180deg,#f4f8ff_0%,#ffffff_32%,#f8fbff_100%)]">
      <section className="relative overflow-hidden bg-[#071a3a] text-white">
        <div className="absolute inset-0">
          <Image
            src="/sector/manufacturing/manufacturing-shed.jpeg"
            alt="Manufacturing shed for aluminium extrusion plant"
            fill
            priority
            className="object-cover object-center md:scale-[1.03]"
          />
        </div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-900/80 to-transparent"></div>
        <div className="absolute -left-16 top-24 h-64 w-64 rounded-full bg-orange-400/25 blur-3xl" />
        <div className="absolute -right-24 bottom-12 h-80 w-80 rounded-full bg-blue-400/20 blur-3xl" />

        <div className="relative z-10 mx-auto flex min-h-[34rem] w-full max-w-[92rem] items-center px-4 py-16 sm:px-6 lg:min-h-[40rem] lg:px-8">
          <div className="grid w-full gap-10 lg:grid-cols-[1fr_0.86fr] lg:items-end">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-orange-200 backdrop-blur-sm">
                <Sparkles size={14} />
                Aluminium Manufacturing
              </div>
              <h1 className="mt-5 max-w-4xl text-3xl font-bold leading-tight md:text-6xl">
                First Manufacturing Plant for Aluminium Extrusion
              </h1>
              <p className="mt-5 max-w-3xl text-base leading-relaxed text-blue-50/90 md:text-xl">
                Vaaman Engineers is building manufacturing capability in Bokaro with a phased aluminium
                extrusion setup focused on quality finished goods for multiple industrial applications.
              </p>
              <p className="mt-6 text-sm font-medium text-gray-200 md:text-base">
                <Link href="/" className="transition hover:text-[rgb(254,94,21)]">
                  Home
                </Link>
                {' / '}
                <span className="text-gray-300">Sector</span>
                {' / '}
                <span className="text-[rgb(254,94,21)]">Manufacturing</span>
              </p>

              <div className="mt-8 grid max-w-3xl gap-3 sm:grid-cols-3">
                {headlineMetrics.map((item) => (
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
                  src="/sector/manufacturing/shed-building.jpeg"
                  alt="Shed building aerial infrastructure"
                  width={720}
                  height={520}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute bottom-0 left-0 w-[58%] overflow-hidden rounded-[1.5rem] border border-white/20 shadow-[0_24px_44px_rgba(2,6,23,0.35)]">
                <Image
                  src="/sector/manufacturing/manufacturing-shed.jpeg"
                  alt="Manufacturing shed with structural setup"
                  width={620}
                  height={420}
                  className="h-full w-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto grid max-w-[92rem] gap-10 px-4 sm:px-6 lg:grid-cols-[1.04fr_0.96fr] lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_18px_40px_rgba(15,23,42,0.08)] md:p-10"
          >
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-[rgb(254,94,21)]">
              Plant Overview
            </p>
            <h2 className="mb-6 text-3xl font-bold text-[rgb(3,36,90)] md:text-4xl">
              Manufacturing expansion with a focused extrusion rollout
            </h2>
            <div className="space-y-5 text-base leading-relaxed text-gray-700 md:text-lg">
              <p>
                In 2025, the foundation was laid for the company&apos;s first aluminium extrusion
                manufacturing plant at Bokaro, Jharkhand. The location offers direct access to road
                and rail connectivity, supporting logistics and future scale-up.
              </p>
              <p>
                The first phase is centered on a 6&quot; extrusion press for 152 mm billet along with
                the required auxiliary systems. Part of the equipment is being imported, while other
                primary systems are being procured from leading manufacturers within India.
              </p>
              <p>
                The initial rollout is planned around finished goods for architecture, solar panel
                profiles, heat sinks, automobile applications, and regular market sections.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            viewport={{ once: true }}
            className="rounded-[2rem] bg-[linear-gradient(150deg,#0a2a63_0%,#0a2a63_0%)] p-8 text-white shadow-[0_20px_45px_rgba(2,6,23,0.24)] md:p-10"
          >
            <h3 className="mb-7 text-2xl font-bold">Phase One Snapshot</h3>
            <div className="space-y-4">
              {phaseTimeline.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-sm"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-200">{item.phase}</p>
                  <h4 className="mt-1 text-lg font-bold">{item.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-blue-50/95">{item.detail}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 md:py-24">
        <div className="mx-auto max-w-[92rem] px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-[rgb(254,94,21)]">
              Key Highlights
            </p>
            <h2 className="text-3xl font-bold text-[rgb(3,36,90)] md:text-4xl">
              Core manufacturing strengths in the first phase
            </h2>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3">
            {plantHighlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.08 }}
                  viewport={{ once: true }}
                  className="group rounded-[1.7rem] border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[linear-gradient(155deg,#fe5e15,#ff8f4d)] text-white shadow-md">
                    <Icon size={24} />
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-[rgb(3,36,90)]">{item.title}</h3>
                  <p className="leading-relaxed text-gray-600">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-[92rem] px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-[0.74fr_1.26fr]">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-[rgb(254,94,21)]">
                Manufacturing Infrastructure
              </p>
              <h2 className="mb-6 text-3xl font-bold text-[rgb(3,36,90)] md:text-4xl">
                Large-format visuals for plant clarity
              </h2>
              <p className="mb-6 text-lg leading-relaxed text-gray-700">
                This section is optimized to present infrastructure photos at larger sizes so plant
                details stay clear across desktop and mobile viewports.
              </p>
              <ul className="space-y-4">
                {qualityPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <ShieldCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-[rgb(254,94,21)]" />
                    <span className="text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="relative grid gap-7 md:grid-cols-[1.08fr_0.92fr]"
            >
              <div className="pointer-events-none absolute -inset-4 rounded-[2rem] bg-[radial-gradient(circle_at_8%_14%,rgba(37,99,235,0.18),transparent_46%),radial-gradient(circle_at_92%_80%,rgba(249,115,22,0.24),transparent_42%)]" />

              <div className="group relative min-h-[420px] md:min-h-[560px] lg:min-h-[690px] overflow-hidden rounded-[2rem] shadow-[0_34px_60px_rgba(15,23,42,0.24)] ring-1 ring-slate-200">
                <Image
                  src="/sector/manufacturing/manufacturing-shed.jpeg"
                  alt="Manufacturing shed exterior"
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.06]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/75 via-blue-950/15 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-orange-300">Primary Visual</p>
                  <h3 className="mt-2 text-2xl font-bold">Manufacturing Shed</h3>
                </div>
              </div>

              <div className="grid gap-7">
                <div className="group relative min-h-[250px] md:min-h-[300px] lg:min-h-[332px] overflow-hidden rounded-[1.7rem] shadow-[0_24px_40px_rgba(15,23,42,0.2)] ring-1 ring-slate-200">
                  <Image
                    src="/sector/manufacturing/shed-building.jpeg"
                    alt="Manufacturing building structure"
                    fill
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.06]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-950/75 via-blue-950/15 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-5 text-white">
                    <h3 className="text-xl font-bold">Shed Building</h3>
                  </div>
                </div>

                <div className="rounded-[1.7rem] border border-slate-200 bg-white p-6 shadow-[0_16px_28px_rgba(15,23,42,0.08)]">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[rgb(254,94,21)]">
                    Quality Focus
                  </p>
                  <p className="mt-3 text-lg font-semibold text-[rgb(3,36,90)]">
                    Controlled setup for consistent profile quality and scale.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 md:py-24">
        <div className="mx-auto max-w-[92rem] px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-[rgb(254,94,21)]">
              Product Description
            </p>
            <h2 className="text-3xl font-bold text-[rgb(3,36,90)] md:text-4xl">
              Profiles and finished goods planned for supply
            </h2>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
            {productSegments.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: index * 0.06 }}
                  viewport={{ once: true }}
                  className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[rgb(3,36,90)] text-white">
                    <Icon size={22} />
                  </div>
                  <h3 className="mb-3 text-lg font-bold text-[rgb(3,36,90)]">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-600">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
