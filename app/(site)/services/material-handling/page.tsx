'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Check, Truck, Package, Layers, Cpu } from 'lucide-react';

export default function MaterialHandling() {
  const salientFeatures = [
    {
      icon: Layers,
      title: "Bulk & Finished Product Handling",
      description: "Handling of bulk and finished products in mining and metal industries with precision and efficiency.",
    },
    {
      icon: Package,
      title: "Intermediate Product Handling",
      description: "Complete intermediate product handling including loading, transportation, unloading, and stacking operations.",
    },
    {
      icon: Truck,
      title: "Own Fleet of 134 Equipment",
      description: "Vaaman owns and operates a large fleet of 134 material handling equipment from top global manufacturers.",
    },
    {
      icon: Cpu,
      title: "Advanced Equipment Brands",
      description: "Fleet sourced from industry leaders — Hitachi, Komatsu, Manitou, Escorts, and Doosan for reliability.",
    },
  ];

  const equipmentList = [
    "Forklifts",
    "Hydra Cranes",
    "JCB Excavators",
    "Excavators",
    "Wheel Loaders",
    "Dozers",
    "Cherry Pickers",
    "Telehandlers",
    "Trucks",
    "Dumpers",
  ];

  const manufacturers = [
    { name: "Hitachi", desc: "Heavy excavators & construction equipment" },
    { name: "Komatsu", desc: "Mining and earthmoving machinery" },
    { name: "Manitou", desc: "Telehandlers & rough-terrain forklifts" },
    { name: "Escorts", desc: "Construction & material handling equipment" },
    { name: "Doosan", desc: "Heavy-duty industrial equipment" },
  ];

  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-[500px] bg-blue-950 text-white flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/hero/hero-3.jpg" alt="Material Handling" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/95 via-blue-900/70 to-transparent"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <p className="text-[rgb(254,94,21)] font-bold uppercase tracking-widest text-sm mb-3">Our Services</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 max-w-xl leading-tight">Bulk Material Handling</h1>
          <p className="text-gray-300 text-lg max-w-lg mb-6">
            Safe, efficient transport of goods — powered by a fleet of 134 equipment.
          </p>
          <p className="text-sm text-gray-400 font-medium">
            <Link href="/" className="hover:text-[rgb(254,94,21)] transition">Home</Link>
            {' / '}
            <span>Services</span>
            {' / '}
            <span className="text-[rgb(254,94,21)]">Material Handling</span>
          </p>
        </div>
      </section>

      {/* Intro + Image Split */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-[rgb(254,94,21)] font-bold text-sm mb-3 uppercase tracking-widest">Overview</p>
              <h2 className="text-4xl font-extrabold text-[#03245a] leading-tight mb-6">
                End-to-End Material Flow Management
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                We specialize in Material Handling, ensuring the safe and efficient transport of goods. Our advanced systems and methodologies cater to diverse industries, streamlining their logistical needs.
              </p>
              <div className="grid grid-cols-3 gap-6 text-center">
                {[
                  { number: "134+", label: "Equipment Fleet" },
                  { number: "5", label: "Top Brands" },
                  { number: "35", label: "Years Experience" },
                ].map((stat, i) => (
                  <div key={i} className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                    <p className="text-3xl font-extrabold text-[rgb(254,94,21)]">{stat.number}</p>
                    <p className="text-gray-500 text-sm mt-1 font-medium">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl h-[420px]">
                {/* <img src="/images/hero/hero-5.jpg" alt="Material Handling Operations" className="w-full h-full object-cover" /> */}
              </div>
              {/* <div className="absolute -bottom-6 -left-6 bg-[rgb(254,94,21)] text-white px-6 py-4 rounded-xl shadow-lg">
                <p className="text-2xl font-extrabold">ISO 9001:2015</p>
                <p className="text-sm opacity-90">& ISO 45001 Certified</p>
              </div> */}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-[rgb(254,94,21)] font-bold text-sm mb-3 uppercase tracking-widest">What We Do</p>
            <h2 className="text-4xl font-extrabold text-[#03245a]">Our Handling Capabilities</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {salientFeatures.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-xl border border-gray-100 hover:shadow-lg transition group"
                >
                  <div className="bg-[rgb(254,94,21)] text-white w-14 h-14 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-[#03245a] mb-3">{feature.title}</h3>
                  <p className="text-gray-500 leading-relaxed">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Equipment List — bg image section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/hero/hero-7.jpeg" alt="Equipment background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#03245a]/88"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-[rgb(254,94,21)] font-bold text-sm mb-3 uppercase tracking-widest">Our Fleet</p>
              <h2 className="text-4xl font-extrabold text-white mb-4">Equipment We Operate</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Vaaman owns and operates a large fleet of 134 equipment mobilised from top manufacturers — ensuring availability, reliability, and safety at every site.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-2 gap-3">
                {equipmentList.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 bg-white/10 border border-white/20 rounded-xl px-4 py-3 backdrop-blur-sm"
                  >
                    <Check className="text-[rgb(254,94,21)] w-5 h-5 flex-shrink-0 stroke-[3px]" />
                    <p className="text-white font-medium text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Manufacturers + Why Vaaman */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-[rgb(254,94,21)] font-bold text-sm mb-3 uppercase tracking-widest">Trusted Brands</p>
            <h2 className="text-4xl font-extrabold text-[#03245a]">Equipment Manufacturers</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 mb-20">
            {manufacturers.map((brand, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-gray-50 rounded-xl border border-gray-100 hover:shadow-md transition"
              >
                <p className="text-xl font-extrabold text-[#03245a] mb-2">{brand.name}</p>
                <p className="text-gray-400 text-sm">{brand.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Why Vaaman */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden shadow-2xl h-[400px]"
            >
              {/* <img src="/images/hero/hero-9.jpeg" alt="Vaaman fleet at work" className="w-full h-full object-cover" /> */}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-[rgb(254,94,21)] font-bold text-sm mb-3 uppercase tracking-widest">Why Us</p>
              <h2 className="text-4xl font-extrabold text-[#03245a] mb-6">Why Choose Vaaman?</h2>
              <ul className="space-y-4">
                {[
                  "One of the largest owned fleets in the industry",
                  "Premium brands — Hitachi, Komatsu, Manitou",
                  "Minimal dependency on third-party contractors",
                  "Faster mobilization & deployment at any site",
                  "Dedicated fleet maintenance team on-site",
                  "Safe, efficient, and cost-effective logistics",
                ].map((point, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
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
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
