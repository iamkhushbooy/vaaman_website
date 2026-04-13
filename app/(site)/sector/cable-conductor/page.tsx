'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { Cable, Users, Shield, Target, ChevronRight } from 'lucide-react';

const journeyPoints = [
  'Our journey began with Sterlite Electric Ltd, Silvassa in 2002.',
  'We expanded across key industrial hubs including STL Silvassa, Transrail Silvassa, STL JSG, STL Aurangabad, and Polycab.',
  'Today, we operate across India delivering 70 KT per month of wire rod with about 1,000 workforce deployed.',
  'We are also producing 25 KT per month OFC at the Sterlite facility.',
];

const strengths = [
  {
    title: 'Trusted Partnerships',
    description: 'Long-standing collaborations with industry leaders like Sterlite, Vedanta, Bharat Aluminium, and Polycab.',
  },
  {
    title: 'Skilled Workforce',
    description: 'Over 1,900 trained professionals ensuring operational excellence.',
  },
  {
    title: 'Proven Reliability',
    description: 'Continuous O&M services since inception, reflecting our commitment and dependability.',
  },
  {
    title: 'Safety & Sustainability',
    description: 'Adherence to global standards, ensuring safe and eco-friendly operations.',
  },
];

const operatingHighlights = [
  'Aluminium Wire Rod Mills',
  'Overhead Conductor manufacturing operations',
  'Cable manufacturing industries across India',
  'World-class O&M services with strong focus on safety, efficiency, and sustainability',
];

export default function CableConductorPage() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: 'easeOut' },
    },
  };

  return (
    <div className="min-h-screen bg-white">
      <section className="relative h-[30rem] md:h-[38rem] bg-blue-950 text-white flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/sector/cable-conductor/cable-2.jpeg"
            alt="Cable and conductor manufacturing facility"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-900/80 to-transparent" />

        <div className="relative z-10 mx-auto flex h-full w-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Cable &amp; Conductor</h1>
            <p className="text-base md:text-lg text-gray-200 font-medium">
              <Link href="/" className="hover:text-[rgb(254,94,21)] transition">
                Home
              </Link>
              {' / '}
              <span className="text-gray-300">Sector</span>
              {' / '}
              <span className="text-[rgb(254,94,21)]">Cable &amp; Conductor</span>
            </p>
          </div>
        </div>
      </section>

      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl md:text-4xl font-bold text-[rgb(3,36,90)] leading-tight">
              Trusted O&amp;M Expertise in
              <br />
              <span className="text-[rgb(254,94,21)]">Cable &amp; Conductor Industries</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-gray-700">
              We have grown into one of India&apos;s most reputed Operation &amp; Maintenance
              contractors for Aluminium Wire Rod Mills, Overhead Conductor, and Cable
              Manufacturing industries in India.
            </p>
            <p className="mt-4 text-base leading-relaxed text-gray-600">
              Across every location, our focus remains consistent: safe execution, efficient
              operations, dependable manpower deployment, and long-term plant support.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="relative h-72 md:h-96 w-full rounded-xl overflow-hidden shadow-xl">
            <Image
              src="/sector/cable-conductor/cable-1.jpeg"
              alt="Cable manufacturing setup"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
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
        <div className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-[rgb(3,36,90)] mb-12"
          >
            Our Journey &amp; Scale
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6">
            {journeyPoints.map((item) => (
              <motion.div
                key={item}
                variants={itemVariants}
                className="bg-white border-l-4 border-[rgb(254,94,21)] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex gap-3">
                  <ChevronRight className="mt-0.5 shrink-0 text-[rgb(254,94,21)]" size={18} />
                  <p className="text-base leading-7 text-gray-700">{item}</p>
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
        className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
      >
        <motion.h2
          variants={itemVariants}
          className="text-3xl md:text-4xl font-bold text-[rgb(3,36,90)] mb-12"
        >
          Operating Highlights
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg border border-blue-200"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[rgb(254,94,21)] rounded-lg flex items-center justify-center">
                <Cable size={24} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Where We Deliver</h3>
            </div>

            <div className="space-y-4">
              {operatingHighlights.map((item) => (
                <div key={item} className="flex gap-3">
                  <span className="text-[rgb(254,94,21)] font-bold">✓</span>
                  <p className="text-gray-700 leading-7">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="relative h-72 md:h-96 w-full rounded-xl overflow-hidden shadow-xl">
            <Image
              src="/sector/cable-conductor/cable-3.jpeg"
              alt="Conductor and cable line support"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
      >
        <motion.h2
          variants={itemVariants}
          className="text-3xl md:text-4xl font-bold text-[rgb(3,36,90)] mb-12"
        >
          Our Strengths
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {strengths.map((item, index) => {
            const icons = [Target, Users, Shield, Cable];
            const Icon = icons[index];

            return (
              <motion.div
                key={item.title}
                variants={itemVariants}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-[rgb(254,94,21)] rounded-lg flex items-center justify-center">
                    <Icon className="text-white" size={22} />
                  </div>
                  <h3 className="text-xl font-bold text-[rgb(3,36,90)]">{item.title}</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">{item.description}</p>
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
        className="bg-gray-50"
      >
        <div className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              variants={itemVariants}
                  className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg border border-blue-200"
            >
              <h3 className="text-3xl font-bold text-[rgb(3,36,90)] mb-5">Our Vision</h3>
              <p className="text-gray-700 leading-8">
                We aspire to expand our footprint across India, reaching every production line in
                the wire rod, conductor, and cable industry. With innovation, efficiency, and a
                people-first approach, we aim to remain the most trusted O&amp;M partner in the
                sector.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg border border-blue-200"
            >
              <h3 className="text-3xl font-bold text-gray-900 mb-5">Our Commitment</h3>
              <p className="text-gray-700 leading-8">
                We continue to deliver dependable O&amp;M support with a strong focus on safety,
                efficiency, sustainability, and long-term customer partnerships across every site
                we serve.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
