
'use client';

import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReply, faGlobe, faBullseye, faShieldHalved } from '@fortawesome/free-solid-svg-icons';

import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const teamMembers = [
  { 
    id: 1, 
    name: "S.P. Singh", 
    role: "Managing Director", 
    delay: 0.1, 
    img: "/sp-sing.jpeg", 
    linkedin: "https://www.linkedin.com/in/surendra-singh-3a775bb2/" 
  },
  { 
    id: 2, 
    name: "Rajesh Kundu", 
    role: "Chief Executive Officer", 
    delay: 0.3, 
    img: "/rajesh.jpeg", 
    linkedin: "https://www.linkedin.com/in/rajesh-kundu-67ab62141/" 
  },
  { 
    id: 3, 
    name: "Barun Kumar", 
    role: "Executive Director", 
    delay: 0.5, 
    img: "/barun-kumar.jpg", 
    linkedin: "https://www.linkedin.com/in/barun-kumar-maji-517223225/" 
  },
];

const foundationData = [
  { 
    title: "Our Vision", 
    text: "To become India’s leading service provider with Zero Harm.", 
    icon: faGlobe, 
    color: "text-orange-500",
    bgColor: "bg-orange-50"
  },
  { 
    title: "Our Mission", 
    text: "To focus on productivity, technology and automation with full motivated work force for delivering key results", 
    icon: faBullseye, 
    color: "text-[#002147]",
    bgColor: "bg-blue-50"
  },
  { 
    title: "Our Values", 
    text: "Integrity, Safety First, Excellence, and Client Satisfaction are our core pillars.", 
    icon: faShieldHalved, 
    color: "text-orange-500",
    bgColor: "bg-orange-50"
  }
];

export default function Team() {
  return (
    <>
      {/* --- TEAM SECTION --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mx-auto mb-16 max-w-[600px]">
            <p className="font-bold uppercase text-orange-500 mb-2 tracking-[0.2em] text-sm">Our Team</p>
            <h1 className="text-5xl font-extrabold text-[#002147] mb-5 leading-tight">
              Core Management Team
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {teamMembers.map((member) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: member.delay }}
                viewport={{ once: true }}
                className="group shadow-[0_15px_40px_-15px_rgba(0,0,0,0.1)] rounded-[2rem] overflow-hidden bg-white border border-gray-100"
              >
                <div className="w-full aspect-[4/5] bg-gray-100 overflow-hidden relative">
                   <img 
                      src={member.img} 
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                   /> 
                </div>

                <div className="flex items-stretch h-[95px] relative overflow-hidden">
                  <div className="flex-shrink-0 bg-orange-500 w-[90px] flex items-center justify-center z-30 group-hover:bg-[#002147] transition-colors duration-500">
                    <FontAwesomeIcon icon={faReply} className="fa-2x text-white fa-flip-horizontal" />
                  </div>
                  <div className="relative flex-grow overflow-hidden bg-white">
                    <div className="absolute inset-0 ps-7 flex flex-col justify-center z-10">
                      <h5 className="text-xl font-black text-[#002147] tracking-tight">{member.name}</h5>
                      <span className="text-orange-500 font-bold text-xs uppercase mt-1 tracking-widest">{member.role}</span>
                    </div>

                    {/* LinkedIn Button Overlay */}
                    <div className="absolute inset-0 bg-orange-500 ps-7 flex items-center transition-transform duration-500 -translate-x-full group-hover:translate-x-0 z-20">
                      <a 
                        href={member.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 bg-[#002147] text-white px-6 py-2 rounded-full hover:bg-white hover:text-orange-500 transition-all shadow-lg font-bold"
                      >
                        <FontAwesomeIcon icon={faLinkedinIn} className="w-4 h-4" />
                        <span>View LinkedIn</span>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- VISION, MISSION, VALUES SECTION --- */}
      <section className="py-24 bg-[#fcfcfc] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {foundationData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -12 }}
                className="bg-white p-12 rounded-[2.5rem] shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] hover:shadow-2xl transition-all duration-500 border border-gray-100 border-b-8 border-b-orange-500 group"
              >
                <div className={`mb-8 w-24 h-24 mx-auto rounded-full ${item.bgColor} flex items-center justify-center ${item.color} group-hover:scale-110 group-hover:rotate-[360deg] transition-all duration-700 shadow-inner`}>
                  <FontAwesomeIcon icon={item.icon} className="text-4xl" />
                </div>
                <h3 className="text-2xl font-black text-[#002147] mb-5 text-center tracking-tight">{item.title}</h3>
                <p className="text-gray-500 text-center leading-relaxed font-medium">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}