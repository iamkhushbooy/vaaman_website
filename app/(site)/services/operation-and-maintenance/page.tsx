'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Check, Clock, Shield, Settings, Wrench, Activity } from 'lucide-react';

export default function OperationAndMaintenance() {
  const salientFeatures = [
    {
      icon: Clock,
      title: "24/7 Operations",
      description: "Round-the-clock O&M activities covering all aspects of maintenance for seamless plant operations in a safe and economical manner.",
    },
    {
      icon: Settings,
      title: "Turnkey Plant Operations",
      description: "Complete operations of manufacturing facilities on a turnkey basis for major clients across Aluminium, Steel, and Zinc sectors.",
    },
    {
      icon: Wrench,
      title: "Comprehensive Maintenance",
      description: "Full suite of maintenance services including Preventive, Predictive, Corrective, and Condition-Based Monitoring (CBM).",
    },
    {
      icon: Activity,
      title: "Shutdown & Overhauling",
      description: "Specialized maintenance for plant shutdowns and annual overhauling to ensure optimal performance and longevity.",
    },
    {
      icon: Shield,
      title: "Repairs & Refurbishment",
      description: "Minor modifications, repairs, and refurbishment of equipment and components to extend asset life.",
    },
  ];

  const maintenanceTypes = [
    "Preventive Maintenance",
    "Predictive Maintenance",
    "Corrective Maintenance",
    "Condition-Based Monitoring (CBM)",
    "Plant Shutdown Maintenance",
    "Annual Overhauling",
    "Minor Modifications & Repairs",
    "Equipment Refurbishment",
  ];

  const sectorScope = [
    {
      sector: "Aluminium",
      image: "/images/hero/hero-5.jpg",
      items: [
        "Oil fired / Electrically heated furnaces",
        "Casting machines for Wire Rod",
        "Wire Rod & Sheet Rolling mills",
        "Ingot & Billet casting machines",
        "Hydraulic power packs & Coilers",
        "Cooling towers & Chillers",
        "Compressors and piping",
        "EOT Cranes",
        "Effluent & Water Treatment Plants",
      ],
    },
    {
      sector: "Steel",
      image: "/images/hero/hero-7.jpeg",
      items: [
        "DE system maintenance (119 systems)",
        "Blast furnace maintenance",
        "COB and Coal area maintenance",
        "Air, gas and liquid piping",
        "Pump and Valves maintenance",
        "Conveyor belt maintenance",
        "Heat exchangers cleaning & reinstallation",
        "RMHS maintenance",
        "Sinter plant area maintenance",
      ],
    },
    {
      sector: "Zinc",
      image: "/images/hero/hero-8.jpeg",
      items: [
        "Zinc and Lead Strapping Robots",
        "Induction furnaces",
        "Jumbo Casting machines",
        "CGG and TCC furnaces",
        "ID fans, Compressors, Driers, Motors",
        "EOT Cranes and Forklifters",
        "HT & LT panels",
        "Cooling towers, STP, ETP, WTP plants",
        "Fire pump house",
      ],
    },
  ];

  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-[500px] bg-blue-950 text-white flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/hero/hero-1.jpeg" alt="Operations and Maintenance" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/95 via-blue-900/70 to-transparent"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <p className="text-[rgb(254,94,21)] font-bold uppercase tracking-widest text-sm mb-3">Our Services</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 max-w-xl leading-tight">Operations & Maintenance</h1>
          <p className="text-gray-300 text-lg max-w-lg mb-6">
            Seamless, safe and economical plant operations — 24/7.
          </p>
          <p className="text-sm text-gray-400 font-medium">
            <Link href="/" className="hover:text-[rgb(254,94,21)] transition">Home</Link>
            {' / '}
            <span>Services</span>
            {' / '}
            <span className="text-[rgb(254,94,21)]">Operations & Maintenance</span>
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
              <p className="text-[rgb(254,94,21)] font-bold text-sm mb-3 uppercase tracking-widest">Who We Are</p>
              <h2 className="text-4xl font-extrabold text-[#03245a] leading-tight mb-6">
                End-to-End O&M Solutions for Heavy Industry
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                At Vaaman Engineers, we excel in offering comprehensive Operations & Maintenance solutions, ensuring seamless and efficient functioning for our clients. Our expertise guarantees longevity and optimal performance of your assets.
              </p>
              <div className="grid grid-cols-3 gap-6 text-center">
                {[
                  { number: "30+", label: "Years Experience" },
                  { number: "12K+", label: "Workforce" },
                  { number: "25%+", label: "YOY Growth" },
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
                <img src="/images/hero/hero-4.jpeg" alt="O&M Operations" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-[rgb(254,94,21)] text-white px-6 py-4 rounded-xl shadow-lg">
                <p className="text-2xl font-extrabold">ISO 9001:2015</p>
                <p className="text-sm opacity-90">& ISO 45001 Certified</p>
              </div>
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
            <p className="text-[rgb(254,94,21)] font-bold text-sm mb-3 uppercase tracking-widest">What We Offer</p>
            <h2 className="text-4xl font-extrabold text-[#03245a]">Our O&M Capabilities</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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

      {/* Maintenance Types — full-width bg image section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/hero/hero-6.jpeg" alt="Maintenance background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#03245a]/88"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-[rgb(254,94,21)] font-bold text-sm mb-3 uppercase tracking-widest">Coverage</p>
            <h2 className="text-4xl font-extrabold text-white">Types of Maintenance Services</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {maintenanceTypes.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 bg-white/10 border border-white/20 rounded-xl px-5 py-4 backdrop-blur-sm"
              >
                <Check className="text-[rgb(254,94,21)] w-5 h-5 flex-shrink-0 stroke-[3px]" />
                <p className="text-white font-medium text-sm">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sector-wise Scope */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-[rgb(254,94,21)] font-bold text-sm mb-3 uppercase tracking-widest">Sector-wise Expertise</p>
            <h2 className="text-4xl font-extrabold text-[#03245a]">O&M Scope Across Industries</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {sectorScope.map((sector, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="rounded-2xl overflow-hidden border border-gray-100 shadow-md hover:shadow-xl transition"
              >
                <div className="h-44 overflow-hidden relative">
                  <img src={sector.image} alt={sector.sector} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#03245a]/80 to-transparent flex items-end p-4">
                    <h3 className="text-white text-xl font-bold">{sector.sector}</h3>
                  </div>
                </div>
                <div className="p-6 bg-white">
                  <ul className="space-y-2">
                    {sector.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="text-[rgb(254,94,21)] w-4 h-4 flex-shrink-0 mt-0.5 stroke-[3px]" />
                        <span className="text-gray-600 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Vaaman — split with dark card */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#03245a] to-[#03245a]/90 text-white p-10 rounded-2xl shadow-xl"
            >
              <h3 className="text-2xl font-bold mb-8">Why Choose Vaaman?</h3>
              <ul className="space-y-5">
                {[
                  "Largest O&M contractor across Aluminium, Steel & Zinc sectors",
                  "Dedicated workforce deployed at each client site",
                  "Preventive approach reduces unplanned downtime",
                  "Condition-Based Monitoring for predictive maintenance",
                  "Complete turnkey plant operations capability",
                  "Safety-first culture with zero-compromise policies",
                ].map((reason, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-[rgb(254,94,21)] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-200 leading-relaxed">{reason}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-[rgb(254,94,21)] font-bold text-sm mb-3 uppercase tracking-widest">Our Clients</p>
              <h2 className="text-4xl font-extrabold text-[#03245a] mb-6">Trusted by Industry Leaders</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Active O&M contracts with some of India's largest industrial conglomerates — delivering excellence day after day, site after site.
              </p>
              <ul className="space-y-4">
                {[
                  "Tata Steel — Jamshedpur & Kalinganagar (750+ manpower)",
                  "Hindustan Zinc Limited — Multiple mine sites",
                  "NALCO — Lanjigarh operations",
                  "JSW Steel — Dolvi plant operations",
                  "Vedanta Ltd — Sesa Iron Ore, Goa",
                ].map((client, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="text-[rgb(254,94,21)] w-5 h-5 flex-shrink-0 mt-1 stroke-[3px]" />
                    <span className="text-gray-700 font-medium">{client}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
