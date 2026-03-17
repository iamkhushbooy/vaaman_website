'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Check, Zap, Droplet, Wind } from 'lucide-react';

export default function Aluminium() {
  const equipmentList = [
    "Oil fired / Electrically heated furnaces",
    "Preheated launders",
    "Casting machines for Wire Rod",
    "Wire Rod & Sheet Rolling mills",
    "Ingot casting machines",
    "Billet casting machines",
    "Billet Slicing machines",
    "Hydraulic power packs",
    "Coilers with automatic strapping",
    "Cooling towers & Chillers",
    "Forced lubrication systems",
    "Compressors and piping",
    "EOT Cranes",
    "Effluent Treatment Plant and Water Treatment Plant",
    "Scrubbers",
  ];

  const services = [
    {
      icon: Zap,
      title: "High-Speed Wire Rod Mills",
      description: "Expert operation and maintenance of high-speed wire rod mills ensuring optimal production efficiency",
    },
    {
      icon: Droplet,
      title: "Casting Line Operations",
      description: "Specialized services for ingots, billets, and sheet casting lines with precision control",
    },
    {
      icon: Wind,
      title: "Rolling Line Management",
      description: "Complete maintenance and operation of sheet casting and rolling lines",
    },
  ];

  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-96 bg-blue-950 text-white flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/aluminium-banner.jpg"
            alt="Aluminium production facility"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-900/80 to-transparent"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Aluminium Services</h1>
          <p className="text-lg text-gray-200 font-medium">
            <Link href="/" className="hover:text-[rgb(254,94,21)] transition">Home</Link>
            {' / '}
            <span className="text-gray-300">Services</span>
            {' / '}
            <span className="text-[rgb(254,94,21)]">Aluminium</span>
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-[rgb(254,94,21)] font-bold text-lg mb-3 uppercase tracking-wide">
              Aluminium Excellence
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#03245a] leading-tight mb-6">
              Specialised Aluminium Production Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Vaaman Engineers has carved a niche in the Aluminium sector, offering specialised services that cater to the unique demands of aluminium production and processing. Our expertise ensures efficiency and quality in every project we undertake in this domain.
            </p>
          </motion.div>

          {/* Core Services */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-lg border border-gray-200 hover:shadow-lg transition"
                >
                  <div className="bg-[rgb(254,94,21)] text-white w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-[#03245a] mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Equipment & Expertise */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-[rgb(254,94,21)] font-bold text-lg mb-3 uppercase tracking-wide">
              Our Scope of O & M
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#03245a] leading-tight">
              Major Equipment & Systems
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {equipmentList.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: (idx % 2) * 0.1 }}
                viewport={{ once: true }}
                // items-center for vertical center, justify-center for horizontal
                className="flex items-center justify-center gap-4 p-4 border border-gray-100 rounded-xl bg-white shadow-sm"
              >
                <div className="flex-shrink-0">
                  {/* Removed mt-1 to keep it perfectly centered with the text */}
                  <Check className="text-[rgb(254,94,21)] w-6 h-6 stroke-[3px]" />
                </div>
                <p className="text-gray-700 font-medium text-center">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Details */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-[rgb(254,94,21)] font-bold text-lg mb-3 uppercase tracking-wide">
                Our Expertise
              </p>
              <h2 className="text-4xl font-extrabold text-[#03245a] mb-6">
                End-to-End O&M Solutions
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Our expertise spans the entire aluminium production lifecycle, from initial casting through to final rolling operations. We provide comprehensive operation and maintenance services that ensure:
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Optimal production efficiency and throughput",
                  "Minimal downtime and maximum equipment reliability",
                  "Compliance with industry safety standards",
                  "Quality assurance throughout the process",
                  "Cost-effective maintenance strategies",
                ].map((point, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <Check className="text-[rgb(254,94,21)] w-5 h-5 flex-shrink-0 mt-1 stroke-[3px]" />
                    <span className="text-gray-700 font-medium">{point}</span>
                  </motion.li>
                ))}
              </ul>

              {/* <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md px-6 py-3 font-bold bg-[rgb(254,94,21)] text-white hover:bg-orange-600 transition-colors"
              >
                Get Expert Consultation
              </Link> */}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[rgb(3,36,90)] to-[rgb(3,34,90)] text-white p-8 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-6">Why Choose Vaaman?</h3>
              <ul className="space-y-4">
                {[
                  "25+ years of industrial engineering experience",
                  "Specialized expertise in aluminium processing",
                  "Comprehensive equipment management capabilities",
                  "24/7 operational support and emergency response",
                  "Proven track record with major aluminium producers",
                  "Commitment to safety and environmental standards",
                ].map((reason, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-white rounded-full mt-2 flex-shrink-0"></div>
                    <span>{reason}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="relative py-20 bg-gradient-to-r from-blue-950 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="/aluminium-banner.jpg"
            alt="background"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
              Ready to Optimize Your Aluminium Operations?
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Let our experts develop a customized O&M solution for your facility
            </p>

            <Link 
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-[rgb(254,94,21)] text-white hover:bg-orange-600 text-lg px-8 py-4 font-bold transition-colors"
            >
              Request Consultation
            </Link>
          </motion.div>
        </div>
      </section> */}
    </>
  );
}