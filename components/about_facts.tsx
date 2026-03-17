

'use client';

import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCertificate, faUsersCog, faUsers, faCheckDouble } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useRef } from 'react';

// Counter Function Component
const Counter = ({ value }: { value: number }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    const controls = animate(count, value, { duration: 2, ease: "easeOut" });
    return controls.stop;
  }, [value, count]);

  return <motion.span>{rounded}</motion.span>;
};

const stats = [
  { id: 1, icon: faCertificate, number: 30, label: "Years Experience" }, 
  { id: 2, icon: faUsersCog, number: 1000, label: "Workforce" },
  { id: 3, icon: faUsers, number: 15, label: "Industry Partners" },
  { id: 4, icon: faCheckDouble, number: 50, label: "Major Projects" },
];

// --- REAL DATA FROM PDF ---
const vaamanMilestones = [
  { year: "1990", desc: "VAAMAN GROUP was established by a visionary leader SHRI S.P. SINGH." },
  { year: "1995", desc: "Won its 1st Erection & Commissioning of Wire Rod Mill & Concast machinery for STERLITE." },
  { year: "2005", desc: "On 31st Jan 2005, Group transformed into Limited company and renamed as Vaaman Engineers India Limited." },
  { year: "2010", desc: "Company made a debut in Steel industry (TATA Steel) for Maintenance activities." },
  { year: "2013", desc: "Extended services to O&M activities for the mining industry and started O&M in Hindustan Zinc Limited." },
  { year: "2015", desc: "Received ISO 9001:2015 accreditation & OHSAS 18001:2007 from DNV GL certification for TATA Steel." },
  { year: "2019", desc: "Received two prestigious contracts for O&M of Alumina Refinery, Lanjigarh and Steel Plant at Goa." },
  { year: "2020", desc: "Bagged single largest contract at JSPL Angul, Odisha for RMHS O&M with 1000+ daily workforce." },
  { year: "2021", desc: "Started operating India's largest Blast Furnace at JSW Steel Dolvi with capacity of 5.5 MMTPA." },
  { year: "2022", desc: "Bagged one of the largest contracts at HZL - Chanderiya for O&M of Lead Zinc smelter - PYRO Plant." },
  { year: "2023", desc: "Bagged O&M Contract for 6.6 MMTPA SK Beneficiation plant at HZL & EPC Contract at Vedanta." },
  { year: "2024", desc: "JSP Angul Sinter plant O&M, JSW WRM 2, and Lanjigarh Complete Maintenance (Mech, E&I)." },
  { year: "2025", desc: "JSW Bellary Cast house operations (BF1-BF5) and Adani Copper Kutch O&M started." }
];


const duplicatedMilestones = [...vaamanMilestones, ...vaamanMilestones];

export default function AboutFacts() {
  return (
    <>
      {/* --- STATS SECTION --- */}
      <section className="bg-[#002147] py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center border border-gray-700 p-10 hover:bg-white/5 transition-colors"
              >
                <div className="flex justify-center mb-4">
                  <FontAwesomeIcon icon={stat.icon} className="fa-3x text-white" />
                </div>
                <h2 className="text-6xl font-extrabold text-orange-500 mb-2">
                  <Counter value={stat.number} />+
                </h2>
                <span className="text-white text-xl font-semibold">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-orange-500 font-bold uppercase tracking-[0.3em] mb-3 text-xs">Innovation & Growth</p>
            <h2 className="text-5xl font-black text-[#002147] tracking-tight">
              Our <span className="text-orange-600">Milestones</span>
            </h2>
            <div className="w-24 h-1.5 bg-orange-500 mx-auto mt-6 rounded-full shadow-lg shadow-orange-200"></div>
          </motion.div>
        </div>

        <div className="relative flex group">
          <motion.div
            className="flex whitespace-nowrap gap-12 py-12"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 45, 
                ease: "linear",
              },
            }}
            whileHover={{ animationPlayState: "paused" }}
          >
            {duplicatedMilestones.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ 
                  scale: 1.05, 
                  y: -15,
                  zIndex: 20 
                }}
                className="flex-shrink-0 w-[380px] bg-white p-8 rounded-[2rem] border border-gray-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] cursor-pointer relative transition-all duration-500 overflow-hidden group/card"
              >
              
                <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-orange-50 rounded-full opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 blur-2xl"></div>

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-4xl font-black text-gray-100 group-hover/card:text-orange-100 transition-colors duration-500">
                      {index % vaamanMilestones.length + 1 < 10 ? `0${(index % vaamanMilestones.length) + 1}` : (index % vaamanMilestones.length) + 1}
                    </span>
                    <div className="bg-[#002147] text-white font-black px-6 py-2 rounded-xl text-xl shadow-lg shadow-blue-900/20 group-hover/card:bg-orange-500 transition-colors duration-500">
                      {item.year}
                    </div>
                  </div>

                  <div className="h-[2px] w-12 bg-orange-500 mb-6 group-hover/card:w-full transition-all duration-700"></div>

                  <p className="text-gray-700 text-[15px] leading-relaxed whitespace-normal font-bold">
                    {item.desc}
                  </p>
                </div>
                
                {/* Card Bottom Accent */}
                <div className="absolute bottom-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#002147] to-orange-500 transform scale-x-0 group-hover/card:scale-x-100 transition-transform duration-500 origin-left"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        
        <div className="flex justify-center items-center gap-3 mt-12">
            <div className="h-1 w-12 bg-gray-200 rounded-full"></div>
            <p className="text-gray-400 text-[10px] uppercase font-bold tracking-[0.2em]">
              Hover to Explore History
            </p>
            <div className="h-1 w-12 bg-gray-200 rounded-full"></div>
        </div>
      </section>
    </>
  );
}