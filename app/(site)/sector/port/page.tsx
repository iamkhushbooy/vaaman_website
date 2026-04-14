'use client';

import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { ChevronRight, Ship, Loader, BarChart3 } from 'lucide-react';
import { SectorHero } from '@/components/sector/SectorHero';

const cargoReceiptActivities = [
  'Placement and coordination of Rakes at Track-Hopper including deployment of points men',
  'Coordination with PPT, ECO Railways staff, and BOT operators for timely rake placement/release',
  'Guidance to Loco Pilots and track clearance management',
  'Removal of cargo contaminants (Stones, Boulders, Metal Scraps)',
  'Ensuring contaminant-free cargo conveyance to hopper and belt',
  'Cargo size management - breaking larger pieces for hopper compatibility',
];

const stockyardActivities = [
  'Stack and Reclaim operations from any part of Stockyard',
  'Deployment of equipment (Pay-loaders, Excavators) for non-reachable areas',
  'Day-to-day Stackyard planning based on customer requirements',
  'Plot Management - adjusting and optimizing cargo piles',
  'Accumulation management post vessel loading',
  'Optimal utilization of designated plot storage capacity',
];

const vesselOperationActivities = [
  'Liaison with Vessel Master & Crew for Stowage Plan',
  'Loading Sequence and Trimming requirements coordination',
  'IMSBC (Intermediate Survey) compliance for cargo handling',
  'Distribution and Trimming per Vessel Master satisfaction',
  'Preparation of vessel-related documents (SOF)',
  'Daily reports and manpower/equipment working reports',
];

const heroMetrics = [
  { value: '3', label: 'Core service areas' },
  { value: '24x7', label: 'Operational coordination' },
  { value: 'IMSBC', label: 'Cargo compliance support' },
];

export default function PortPage() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <div className="min-h-screen bg-white">
      <SectorHero
        badge="Port Operations"
        title="Port Operations & Material Handling Excellence"
        description="At the crossroads of trade and transport, Vaaman Engineers ensures smooth port operations, optimized cargo handling, and seamless maritime trade through coordinated execution and logistics support."
        currentLabel="Port"
        backgroundImage={{
          src: '/sector/port/port-steel-hero-3.png',
          alt: 'Vaaman team at port site',
        }}
        collageTopImage={{
          src: '/sector/port/porteam.png',
          alt: 'Vaaman team at port site',
        }}
        metrics={heroMetrics}
        collageTopClassName="inset-0 w-full"
      />

      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl md:text-4xl font-bold text-[rgb(3,36,90)] leading-tight">
              Maritime Expertise With
              <br />
              <span className="text-[rgb(254,94,21)]">Coordinated Port Execution</span>
            </h2>
            <p className="mt-6 text-lg text-gray-700 leading-relaxed mb-4">
              At the crossroads of trade and transport, Vaaman Engineers play a pivotal role in the
              Port sector. Our expertise ensures smooth operations, optimizing cargo handling, and
              facilitating seamless maritime trade.
            </p>
            <p className="text-base text-gray-600 leading-relaxed">
              With comprehensive knowledge of port operations, we manage complex logistics involving
              multiple stakeholders including railway operators, shipping agents, cargo surveyors,
              and port authorities to ensure timely and efficient cargo movement.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="relative h-72 md:h-96 w-full rounded-xl overflow-hidden shadow-xl">
            <Image
              src="/sector/port/b3.jpeg"
              alt="Port Logistics & Cargo Handling"
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
        className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
      >
        <motion.h2
          variants={itemVariants}
          className="text-3xl md:text-4xl font-bold mb-12 text-[rgb(3,36,90)]"
        >
          Core Service Areas
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg border border-blue-200 shadow-sm"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-[rgb(254,94,21)] rounded-lg flex items-center justify-center">
                <Loader size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Cargo Receipts by Rake/Rail</h3>
            </div>
            <p className="text-gray-700 mb-4 text-sm">
              Complete management of railway rake operations from placement to release with contamination control.
            </p>
            <div className="space-y-2">
              {cargoReceiptActivities.slice(0, 3).map((item, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <span className="text-[rgb(254,94,21)] mt-1">✓</span>
                  <span className="text-sm text-gray-700">{item}</span>
                </div>
              ))}
              <p className="text-xs text-gray-600 font-semibold pt-2">+ {cargoReceiptActivities.length - 3} more activities</p>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-lg border border-orange-200 shadow-sm"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-[rgb(254,94,21)] rounded-lg flex items-center justify-center">
                <BarChart3 size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Stock Yard Operations</h3>
            </div>
            <p className="text-gray-700 mb-4 text-sm">
              Strategic stacking, reclamation, and space optimization for efficient cargo management.
            </p>
            <div className="space-y-2">
              {stockyardActivities.slice(0, 3).map((item, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <span className="text-[rgb(254,94,21)] mt-1">✓</span>
                  <span className="text-sm text-gray-700">{item}</span>
                </div>
              ))}
              <p className="text-xs text-gray-600 font-semibold pt-2">+ {stockyardActivities.length - 3} more activities</p>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg border border-blue-200 shadow-sm"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-[rgb(254,94,21)] rounded-lg flex items-center justify-center">
                <Ship size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Vessel Operations</h3>
            </div>
            <p className="text-gray-700 mb-4 text-sm">
              Complete vessel loading management with international compliance and documentation.
            </p>
            <div className="space-y-2">
              {vesselOperationActivities.slice(0, 3).map((item, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <span className="text-[rgb(254,94,21)] mt-1">✓</span>
                  <span className="text-sm text-gray-700">{item}</span>
                </div>
              ))}
              <p className="text-xs text-gray-600 font-semibold pt-2">+ {vesselOperationActivities.length - 3} more activities</p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
      >
        <motion.h2
          variants={itemVariants}
          className="text-3xl md:text-4xl font-bold mb-12 text-[rgb(3,36,90)]"
        >
          Complete Service Activities
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Loader size={24} className="text-[rgb(254,94,21)]" />
              Cargo Receipts by Rake/Rail
            </h3>
            <div className="space-y-3">
              {cargoReceiptActivities.map((item, idx) => (
                <div key={idx} className="flex gap-3 text-sm">
                  <span className="text-[rgb(254,94,21)] font-bold flex-shrink-0">•</span>
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <BarChart3 size={24} className="text-[rgb(254,94,21)]" />
              Stock Yard Operations
            </h3>
            <div className="space-y-3">
              {stockyardActivities.map((item, idx) => (
                <div key={idx} className="flex gap-3 text-sm">
                  <span className="text-[rgb(254,94,21)] font-bold flex-shrink-0">•</span>
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Ship size={24} className="text-[rgb(254,94,21)]" />
              Vessel Operations
            </h3>
            <div className="space-y-3">
              {vesselOperationActivities.map((item, idx) => (
                <div key={idx} className="flex gap-3 text-sm">
                  <span className="text-[rgb(254,94,21)] font-bold flex-shrink-0">•</span>
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-16 md:py-18 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
      >
        <motion.h2
          variants={itemVariants}
          className="text-3xl md:text-4xl font-bold mb-12 text-[rgb(3,36,90)]"
        >
          Why Choose Vaaman for Port Operations?
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 mb-12 items-center">
          <motion.div variants={itemVariants} className="relative h-72 md:h-full min-h-[350px] w-full rounded-xl overflow-hidden shadow-xl order-2 md:order-1">
            <Image
              src="/sector/port/b.jpeg"
              alt="Port Logistics & Coordination"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="space-y-4 order-1 md:order-2"
          >
            {[
              'Multi-stakeholder coordination expertise (Railways, Shippers, Surveyors)',
              'IMSBC and international maritime compliance',
              'Advanced cargo handling and space optimization',
              'Real-time documentation and reporting systems',
              'Equipment deployment and management',
              'Contamination control and quality assurance',
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="w-8 h-8 bg-[rgb(254,94,21)] rounded-full flex items-center justify-center flex-shrink-0 mt-1 shadow-sm">
                  <ChevronRight size={16} className="text-white" />
                </div>
                <p className="text-gray-700 font-medium">{item}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          variants={itemVariants}
          className="bg-gradient-to-br from-blue-900 to-[rgb(254,94,21)] text-white p-8 md:p-12 rounded-xl shadow-lg flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="max-w-3xl">
            <h4 className="text-2xl font-bold mb-4">Our Expertise</h4>
            <p className="text-gray-100 text-lg leading-relaxed">
              Vaaman Engineers brings years of experience in port logistics, equipped with
              technical knowledge and organizational capability to manage complex cargo
              operations while maintaining compliance with international maritime standards
              and regulatory requirements.
            </p>
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
}
