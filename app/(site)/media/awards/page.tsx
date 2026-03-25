
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faAward, faTrophy, faCheckCircle, faShieldAlt, 
  faBuilding, faExpand, faUserTie, faProjectDiagram 
} from '@fortawesome/free-solid-svg-icons';


const vaamanAwards = [
  {
    id: 1,
    title: "Best Performer 2024",
    issuedBy: "JSW Steel Ltd. (Bulk Handling)",
    desc: "Recognized for maintaining Zero Harm records and exemplary safety standards in material handling.",
    image: "/award/award_tropy2.jpg", 
    size: "big",
    category: "Safety Excellence"
  },
  {
    id: 2,
    title: "Zero Harm Milestone",
    issuedBy: "Occupational Safety Council",
    desc: "Honored for completing 2 million safe man-hours in high-risk port operations.",
    image: "/award/award_tropy4.jpg", 
    size: "small",
    category: "Operational Safety"
  },
  {
    id: 3,
    title: "Vendor Appreciation",
    issuedBy: "Major Port Authority",
    desc: "Awarded for exceptional efficiency during breakdown maintenance of port cranes.",
    image: "/award/award_tropy6.jpg", 
    size: "tall",
    category: "Technical Service"
  },
  {
    id: 4,
    title: "Service Excellence",
    issuedBy: "Corporate Logistics Partner",
    desc: "Acknowledged for supporting expansion activities in the bulk storage sector.",
    image: "/award/award_tropy1.jpg", 
    size: "small",
    category: "On-site Execution"
  }
];


const vaamanCertificates = [
  {
    id: 1,
    title: "ISO 9001:2015",
    issuedBy: "Quality Management System",
    desc: "International standard for providing high-quality technical and engineering services.",
    image: "/award/award_cert1.jpg", 
    type: "Quality Accreditation"
  },
  {
    id: 2,
    title: "Statutory Compliance",
    issuedBy: "Labor & Safety Dept.",
    desc: "Official certification for adherence to industrial safety norms and labor laws.",
    image: "/award/award_cert3.jpg", 
    type: "Safety Compliance"
  },
  {
    id: 3,
    title: "Technical License",
    issuedBy: "Port Technical Authority",
    desc: "Authorization for operation of heavy-duty machinery and engineering repairs.",
    image: "/award/award_cert2.jpg", 
    type: "Operational License"
  }
];

export default function ProfessionalAwardPage() {
  const [selectedCert, setSelectedCert] = useState<string | null>(null);

  return (
    <div className="bg-white min-h-screen">
      
  
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
  
        <motion.div 
          initial={{ scale: 1.1 }} animate={{ scale: 1 }} transition={{ duration: 10 }}
    className="absolute inset-0 bg-cover bg-center  bg-no-repeat"
    style={{ backgroundImage: "url('/award/award_tropy6.jpg')" }}
        />
        {/* Blue Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#002147]/95 via-[#002147]/70 to-transparent" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-left">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-orange-500 font-black uppercase tracking-[0.3em] text-sm mb-4 block">
              Vaaman Engineers Visual Credibility
            </span>
            <h1 className="text-5xl md:text-6xl font-black text-white leading-tight">
              Company <span className="text-orange-500 ">Achievements</span> <br /> 
              <span className="text-white/40">Hall of Fame</span>
            </h1>
            <p className="text-gray-300 max-w-2xl mt-8 text-xl leading-relaxed border-l-4 border-orange-500 pl-8">
              Capturing our 15+ years of dedication to industrial safety, precision engineering, and technical innovation across global project sites.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- SECTION 2: COMPANY HONORS & TROPHIES --- */}
      <section className="py-28 bg-[#f8f9fa] overflow-hidden">
        <div className="max-w-[1500px] mx-auto px-6">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-3xl">
              <motion.span initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} className="text-orange-500 font-black uppercase tracking-[0.4em] text-xs block mb-4">Honored by Industry Leaders</motion.span>
              <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-5xl md:text-5xl font-black text-[#002147] leading-tight tracking-tighter">Awards <span className="text-orange-500 ">&</span> Recognition</motion.h2>
            </div>
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-slate-500 max-w-sm border-l-2 border-orange-500 pl-4 leading-relaxed mb-2">Every trophy is a testament to our commitment to safety excellence, quality execution, and client satisfaction.</motion.p>
          </div>

          {/* Awards Bento Grid (REAL CONTENT) */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[300px]">
            {vaamanAwards.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -10 }}
                className={`group relative rounded-3xl overflow-hidden bg-white shadow-2xl border-4 border-white cursor-pointer ${
                  item.size === 'big' ? 'md:col-span-2 md:row-span-2' : 
                  item.size === 'tall' ? 'md:row-span-2' : ''
                }`}
              >
                {/* Image Background */}
                <div className="absolute inset-0">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#002147] via-[#002147]/40 to-transparent" />
                </div>

                {/* Content Placement */}
                <div className="relative h-full p-8 flex flex-col justify-between z-8">
                  <div className="w-10 h-10 rounded-3xl bg-orange-500 flex items-center justify-center text-white text-3xl shadow-lg shadow-orange-500/30">
                    <FontAwesomeIcon icon={faTrophy} />
                  </div>

                  <div>
                    <span className="text-orange-500 font-bold uppercase text-[10px] tracking-widest">{item.category}</span>
                    <h3 className="text-white text-xl font-semibold mt-2 leading-tight tracking-tight">{item.title}</h3>
                    <p className="text-orange-500 font-bold text-[10px] mt-1 uppercase tracking-tighter">{item.issuedBy}</p>
                    <div className="h-0 group-hover:h-20 transition-all duration-500 overflow-hidden">
                      <p className="text-gray-300 text-sm mt-4 leading-relaxed border-l-2 border-orange-500 pl-4">{item.desc}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

     
      <section className="py-10 bg-[#002147] text-white">
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
                <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-orange-500 font-black uppercase tracking-[0.4em] text-sm block mb-4">Milestone Overview</motion.span>
                <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-5xl md:text-5xl font-black mb-10 leading-tight">Key Projects <span className="text-orange-500italic text-6xl md:text-6xl">Done</span> & Milestones <span className="text-orange-500italic text-6xl md:text-8xl">Achieved</span></motion.h2>
                <p className="text-gray-300 text-lg Leading-relaxed max-w-xl">From high-rise industrial setups to complex port material handling operations, Vaaman Engineers has a strong history of executing projects with 100% compliance and Zero Harm. Our achievements are reflected in the scale and quality of technical services we provide daily.</p>
            </div>
            
            <div className="grid grid-cols-2 gap-8">
                <div className="bg-white/5 p-8 rounded-3xl border border-white/10 group hover:border-orange-500 transition-all">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-orange-500 text-3xl mb-6" />
                    <h3 className="text-3xl font-black">2M+ Safe Man-Hours</h3>
                    <p className="text-gray-300 text-sm mt-2 uppercase tracking-tight">Zero Harm Record</p>
                </div>
                <div className="bg-white/5 p-8 rounded-3xl border border-white/10 group hover:border-orange-500 transition-all">
                    <FontAwesomeIcon icon={faBuilding} className="text-orange-500 text-3xl mb-6" />
                    <h3 className="text-3xl font-black">ISO Accredited</h3>
                    <p className="text-gray-300 text-sm mt-2 uppercase tracking-tight">9001:2015 Compliance</p>
                </div>
                <div className="bg-white/5 p-8 rounded-3xl border border-white/10 group hover:border-orange-500 transition-all">
                    <FontAwesomeIcon icon={faAward} className="text-orange-500 text-3xl mb-6" />
                    <h3 className="text-3xl font-black">JSW Steel Ltd.</h3>
                    <p className="text-gray-300 text-sm mt-2 uppercase tracking-tight">Best Vendor Award</p>
                </div>
                 <div className="bg-white/5 p-8 rounded-3xl border border-white/10 group hover:border-orange-500 transition-all">
                    <FontAwesomeIcon icon={faProjectDiagram} className="text-orange-500 text-3xl mb-6" />
                    <h3 className="text-3xl font-black">Port Material Handling</h3>
                    <p className="text-gray-300 text-sm mt-2 uppercase tracking-tight">Specialized Services</p>
                </div>
            </div>
        </div>
      </section>

      {/* --- SECTION 4: CERTIFICATES & ACCREDITATIONS  --- */}
      <section className="py-28 bg-white overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-orange-500 font-black uppercase tracking-[0.4em] text-sm block mb-4">Official Accreditations</motion.span>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-5xl md:text-5xl font-black text-[#002147] leading-tight">Certificates <span className="text-orange-500 ">&</span> Compliance</motion.h2>
          </div>

        
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {vaamanCertificates.map((cert) => (
              <motion.div key={cert.id} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} className="group relative rounded-3xl overflow-hidden bg-white shadow-2xl border-4 border-gray-100 cursor-pointer" onClick={() => setSelectedCert(cert.image)}>
                {/* Certificate Image */}
                <div className="relative h-[300px]">
                    <img src={cert.image} alt={cert.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8">
                        <span className="text-orange-500 font-bold uppercase text-xsTracking-widest">{cert.type}</span>
                        <h3 className="text-white text-xl font-black mt-2">{cert.title}</h3>
                        <p className="text-gray-300 text-sm  uppercase tracking-tight mt-1">{cert.issuedBy}</p>
                    </div>
                </div>
                 <button className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center text-xs absolute top-8 right-8 shadow-xl shadow-orange-500/20 group-hover:scale-110 transition-transform"><FontAwesomeIcon icon={faExpand} /></button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 bg-[#f8f9fa] overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-16 items-center">
            <div className="col-span-1 rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl"><img src="/award/CEO'S Corner.jpeg" alt="CEO" /></div>
            <div className="col-span-2">
                
                <h3 className="text-[#002147] text-4xl font-black mb-6 leading-tight">A Message of Trust from the CEO</h3>
                <p className="text-slate-600 text-lg leading-relaxed">Our history of honors is built on a foundation of reliability and zero compromise. We are proud of our milestones, but even prouder of the safe, high-quality engineering standards we set daily for our partners like JSW Steel and major port authorities.</p>
                {/* <div className="mt-10 font-black text-[#002147]">Md. Faruque Ahmed, Founder</div> */}
            </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedCert && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedCert(null)} className="fixed inset-0 bg-black/95 z-[9999] p-6 flex items-center justify-center cursor-zoom-out backdrop-blur-xl">
            <motion.img src={selectedCert} initial={{ scale: 0.8 }} animate={{ scale: 1 }} className="max-w-full max-h-full rounded-xl border-4 border-white/10 shadow-2xl" />
            <button className="absolute top-10 right-10 text-white text-4xl font-thin hover:text-orange-500 Transition-all">×</button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}