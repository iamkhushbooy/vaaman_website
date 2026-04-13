'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { BriefcaseBusiness, Factory, HardHat, ShieldCheck, ChevronRight } from 'lucide-react';

const expertiseAreas = [
  'Iron Making: Blast Furnace (BF), RMHS, Stock House, Cast House',
  'Steel Making: SMS, Continuous Casting Machine (CCM)',
  'Rolling Mills: WRM, BRM operations & maintenance',
  'Utilities & Auxiliary Plants: WWTP, compressed air, support systems',
  'Power Plant (Mechanical): Maintenance & operation support',
  'Port Material Handling: Ship loading, unloading systems, and conveyor-side support',
];

const services = [
  'Operation & Maintenance (O&M)',
  'Skilled Manpower Deployment',
  'Shutdown & Breakdown Maintenance',
  'Industrial Housekeeping & Material Handling',
  'Project & Commissioning Support',
];

const strengths = [
  'Expertise in high-temperature & continuous process plants',
  'Strong safety culture and compliance',
  'KPI-driven performance and cost optimization',
  'Proven capability in plant stabilization & shutdowns',
  'Flexible and scalable workforce solutions',
];

const reasonsToChoose = [
  'Experienced & trained workforce',
  'Strong presence in steel operations',
  'Reliable execution & timely delivery',
  'Focus on safety, quality & productivity',
  'Long-term partnership approach',
];

const heroImages = [
  {
    src: '/sector/port-steel-hero-2.png',
    alt: 'Port-side bulk handling equipment and vessel',
    className: 'md:col-span-2 md:row-span-2',
  },
  {
    src: '/sector/port-steel-gallery-1.png',
    alt: 'Bulk storage facility under dramatic sky',
    className: '',
  },
  {
    src: '/sector/port-steel-hero-3.png',
    alt: 'Vaaman team members at the port facility',
    className: '',
  },
];

export default function PortPage() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.14,
        delayChildren: 0.18,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 22 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: 'easeOut' },
    },
  };

  return (
    <div className="min-h-screen bg-white">
      <section className="relative h-[30rem] md:h-[38rem] overflow-hidden bg-blue-950 text-white flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/sector/port-steel-hero-3.png"
            alt="Vaaman team at port site"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/70 via-blue-900/40 to-transparent" />
        <div className="relative z-10 mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl lg:max-w-2xl lg:-ml-8 xl:-ml-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Port</h1>
          <p className="text-lg text-gray-200 font-medium">
            <Link href="/" className="hover:text-[rgb(254,94,21)] transition">
              Home
            </Link>
            {' / '}
            <span className="text-gray-300">Sector</span>
            {' / '}
            <span className="text-[rgb(254,94,21)]">Port</span>
          </p>
          </div>
        </div>
      </section>

      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mx-auto max-w-7xl px-4 py-16 md:py-24 sm:px-6 lg:px-8"
      >
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <motion.div
            variants={itemVariants}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[rgb(3,36,90)] leading-tight">
              Steel Sector O&amp;M Support With
              <br />
              <span className="text-[rgb(254,94,21)]">Proven Port-Side Execution</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-gray-700">
              Vaaman Engineers (I) Ltd. is a trusted engineering services company delivering
              Operation &amp; Maintenance, manpower deployment, and project support across core
              industrial sectors. With strong expertise in the steel industry, we enable clients
              to achieve higher productivity, reliability, and cost efficiency.
            </p>
            <p className="mt-4 text-base leading-relaxed text-gray-600">
              This page now presents your updated site visuals and content in the same color
              treatment used across the other sector pages.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="grid auto-rows-[180px] gap-4 md:grid-cols-2"
          >
            {heroImages.map((image) => (
              <div
                key={image.src}
                className={`relative overflow-hidden rounded-xl shadow-xl ${image.className}`}
              >
                <Image src={image.src} alt={image.alt} fill className="object-cover hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 border-4 border-white/10 rounded-xl pointer-events-none" />
              </div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="bg-gray-50"
      >
        <div className="mx-auto max-w-7xl px-4 py-16 md:py-20 sm:px-6 lg:px-8">
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl md:text-4xl font-bold text-[rgb(3,36,90)]">Our Expertise in Steel Sector</h2>
            <p className="mt-4 max-w-3xl text-base leading-7 text-gray-700">
              We operate across the complete Iron Making and Steel Making value chain.
            </p>
          </motion.div>

          <div className="mt-10 grid md:grid-cols-2 gap-6">
            {expertiseAreas.map((item) => (
              <motion.div
                key={item}
                variants={itemVariants}
                className="bg-white border-l-4 border-[rgb(254,94,21)] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex gap-3">
                  <ChevronRight className="mt-0.5 shrink-0 text-[rgb(254,94,21)]" size={18} />
                  <p className="text-base font-medium leading-7 text-gray-700">{item}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mx-auto max-w-7xl px-4 py-16 md:py-20 sm:px-6 lg:px-8"
      >
        <motion.div variants={itemVariants}>
          <h2 className="text-3xl md:text-4xl font-bold text-[rgb(3,36,90)]">Our Services</h2>
          <p className="mt-3 max-w-3xl text-base leading-7 text-gray-700">
            We deliver field-ready support tailored for continuous industrial operations,
            shutdown windows, and commissioning phases.
          </p>
        </motion.div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {services.map((service, index) => {
            const icons = [BriefcaseBusiness, HardHat, ShieldCheck, Factory, ChevronRight];
            const Icon = icons[index];

            return (
              <motion.div
                key={service}
                variants={itemVariants}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[rgb(254,94,21)] text-white">
                  <Icon size={22} />
                </div>
                <p className="mt-5 text-lg font-semibold leading-7 text-[rgb(3,36,90)]">{service}</p>
              </motion.div>
            );
          })}
        </div>
      </motion.section>

      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mx-auto max-w-7xl px-4 py-16 md:py-20 sm:px-6 lg:px-8"
      >
        <div className="grid gap-8 lg:grid-cols-2">
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg border border-blue-200"
          >
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-[rgb(254,94,21)] text-white">
              <ShieldCheck size={24} />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Our Strengths</h2>
            <div className="mt-7 space-y-4">
              {strengths.map((item) => (
                <div key={item} className="flex gap-4">
                  <span className="mt-1 text-lg text-[rgb(254,94,21)]">✓</span>
                  <p className="text-sm font-medium leading-6 text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-lg border border-orange-200"
          >
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-[rgb(254,94,21)] text-white">
              <Factory size={24} />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Why Choose Us</h2>
            <div className="mt-7 space-y-4">
              {reasonsToChoose.map((item) => (
                <div key={item} className="flex gap-4">
                  <span className="mt-1 text-lg text-[rgb(254,94,21)]">✔</span>
                  <p className="text-sm font-medium leading-6 text-gray-700">{item}</p>
                </div>
              ))}
            </div>

            <Link
              href="/contact"
              className="mt-8 inline-flex items-center justify-center rounded-md bg-[rgb(3,36,90)] px-6 py-3 text-sm font-bold text-white transition hover:bg-[rgb(254,94,21)]"
            >
              Connect With Vaaman
            </Link>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="bg-gray-50"
      >
        <div className="mx-auto max-w-7xl px-4 py-16 md:py-20 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants} className="relative h-72 md:h-96 w-full rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/sector/port-steel-gallery-1.png"
                alt="Port-side bulk handling equipment and vessel"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <h2 className="text-3xl md:text-4xl font-bold text-[rgb(3,36,90)]">Our Commitment</h2>
              <p className="mt-6 text-lg leading-relaxed text-gray-700">
                We are committed to delivering safe, efficient, and performance-driven solutions
                that enhance plant reliability and support our clients&apos; growth.
              </p>
              <p className="mt-4 text-base leading-relaxed text-gray-600">
                Port-integrated execution capability backed by trained teams, equipment familiarity,
                and disciplined maintenance support.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
