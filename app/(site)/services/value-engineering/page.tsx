'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Check, TrendingUp, Search, Lightbulb, BarChart2, RefreshCw } from 'lucide-react';

export default function ValueEngineering() {
  const approach = [
    {
      icon: Search,
      step: "01",
      title: "Assessment",
      description: "In-depth study of the client's existing processes, methods, and materials to understand the current state.",
    },
    {
      icon: BarChart2,
      step: "02",
      title: "Analysis",
      description: "Identifying inefficiencies, cost drivers, and areas where performance can be improved without compromising quality.",
    },
    {
      icon: Lightbulb,
      step: "03",
      title: "Solution Design",
      description: "Developing optimized alternatives — better methods, materials, or process configurations tailored to the client.",
    },
    {
      icon: RefreshCw,
      step: "04",
      title: "Implementation",
      description: "Seamless execution of the redesigned solution with minimal disruption to ongoing operations.",
    },
    {
      icon: TrendingUp,
      step: "05",
      title: "Review & Optimization",
      description: "Post-implementation review to measure outcomes and continuously refine for long-term value delivery.",
    },
  ];

  const focusAreas = [
    {
      title: "Process Optimization",
      description: "Streamlining workflows and eliminating bottlenecks to improve overall plant efficiency.",
    },
    {
      title: "Material Substitution",
      description: "Identifying cost-effective alternative materials that maintain or improve performance standards.",
    },
    {
      title: "Method Engineering",
      description: "Redesigning execution methods to reduce time, labour, and resource requirements.",
    },
    {
      title: "Cost Reduction",
      description: "Structured approach to cutting unnecessary expenditure while preserving operational quality.",
    },
    {
      title: "Reliability Engineering",
      description: "Improving asset reliability and reducing unplanned failures through design improvements.",
    },
    {
      title: "Concept to Execution",
      description: "Full ownership of the value engineering cycle — from ideation through to on-site implementation.",
    },
  ];

  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-[500px] bg-blue-950 text-white flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/hero/hero-2.jpg" alt="Value Engineering" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/95 via-blue-900/70 to-transparent"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <p className="text-[rgb(254,94,21)] font-bold uppercase tracking-widest text-sm mb-3">Our Services</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 max-w-xl leading-tight">Value Engineering</h1>
          <p className="text-gray-300 text-lg max-w-lg mb-6">
            Maximising value through smarter methods, better materials, and measurable results.
          </p>
          <p className="text-sm text-gray-400 font-medium">
            <Link href="/" className="hover:text-[rgb(254,94,21)] transition">Home</Link>
            {' / '}
            <span>Services</span>
            {' / '}
            <span className="text-[rgb(254,94,21)]">Value Engineering</span>
          </p>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-[rgb(254,94,21)] font-bold text-sm mb-3 uppercase tracking-widest">Areas of Focus</p>
            <h2 className="text-4xl font-extrabold text-[#03245a]">What We Improve</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {focusAreas.map((area, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl border border-gray-100 hover:shadow-lg transition"
              >
                <div className="w-10 h-1 bg-[rgb(254,94,21)] rounded mb-5"></div>
                <h3 className="text-xl font-bold text-[#03245a] mb-3">{area.title}</h3>
                <p className="text-gray-500 leading-relaxed">{area.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process — bg image section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/hero/hero-6.jpeg" alt="Process background" className="w-full h-full object-cover" />
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
            <p className="text-[rgb(254,94,21)] font-bold text-sm mb-3 uppercase tracking-widest">How We Work</p>
            <h2 className="text-4xl font-extrabold text-white">Our Value Engineering Process</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {approach.map((step, idx) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/10 border border-white/20 backdrop-blur-sm rounded-xl p-6 relative"
                >
                  <span className="absolute top-4 right-4 text-4xl font-extrabold text-white/10 leading-none">{step.step}</span>
                  <div className="bg-[rgb(254,94,21)] text-white w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{step.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits + Why Vaaman split */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-[rgb(254,94,21)] font-bold text-sm mb-3 uppercase tracking-widest">Client Benefits</p>
              <h2 className="text-4xl font-extrabold text-[#03245a] mb-6">What You Gain</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Our Value Engineering practice delivers real, measurable outcomes — not just recommendations. We take ownership from assessment to implementation.
              </p>
              <ul className="space-y-4">
                {[
                  "Significant reduction in operational costs",
                  "Improved process efficiency and throughput",
                  "Extended equipment and asset life",
                  "Better quality without added expenditure",
                  "Reduced material waste and resource consumption",
                  "Faster turnaround on critical processes",
                ].map((point, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: idx * 0.08 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <Check className="text-[rgb(254,94,21)] w-5 h-5 flex-shrink-0 mt-1 stroke-[3px]" />
                    <span className="text-gray-700 font-medium">{point}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-gradient-to-br from-[#03245a] to-[#03245a]/90 text-white p-8 rounded-2xl shadow-xl">
                <h3 className="text-xl font-bold mb-5">Why Choose Vaaman?</h3>
                <ul className="space-y-4">
                  {[
                    "35 years of operational knowledge across industries",
                    "In-house engineering expertise — not outsourced",
                    "Deep understanding of Aluminium, Steel & Zinc processes",
                    "Concept to execution ownership model",
                  ].map((reason, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[rgb(254,94,21)] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-200 text-sm leading-relaxed">{reason}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
