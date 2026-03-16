// 'use client';

// import { motion } from 'framer-motion';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faReply } from '@fortawesome/free-solid-svg-icons';
// import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

// // Data array - Ensure file names exactly match what's in your public folder
// const teamMembers = [
//   { id: 1, name: "Rob Miller", role: "CEO & Founder", delay: 0.1, img: "/team1.jpeg" },
//   { id: 2, name: "Adam Crew", role: "Project Manager", delay: 0.3, img: "/team2.jpeg" },
//   { id: 3, name: "Peter Farel", role: "Engineer", delay: 0.5, img: "/team3.jpeg" },
// ];

// export default function Team() {
//   return (
//     <section className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-6">
        
//         <div className="text-center mx-auto mb-16 max-w-[600px]">
//           <p className="font-medium uppercase text-orange-500 mb-2 tracking-wider">Our Team</p>
//           <h1 className="text-5xl font-bold text-[#002147] mb-5 leading-tight">
//             Dedicated Team Members
//           </h1>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {teamMembers.map((member) => (
//             <motion.div
//               key={member.id}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: member.delay }}
//               viewport={{ once: true }}
//               className="group"
//             >
//               {/* Image Box */}
//               <div className="w-full aspect-[4/5] bg-gray-100 overflow-hidden relative">
//                  <img 
//                     src={member.img} 
//                     alt={member.name}
//                     className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
//                  /> 
//               </div>

//               {/* Bottom Section */}
//               <div className="flex items-stretch h-[90px] relative overflow-hidden">
                
//                 {/* 1. ARROW ICON BOX */}
//                 <div className="flex-shrink-0 bg-orange-500 w-[90px] flex items-center justify-center z-30">
//                   <FontAwesomeIcon icon={faReply} className="fa-2x text-white fa-flip-horizontal" />
//                 </div>

//                 {/* 2. RIGHT CONTENT AREA */}
//                 <div className="relative flex-grow overflow-hidden bg-[#f8f9fa]">
                  
//                   {/* STATIC NAME & ROLE */}
//                   <div className="absolute inset-0 ps-6 flex flex-col justify-center z-10">
//                     <h5 className="text-xl font-bold text-[#002147]">{member.name}</h5>
//                     <span className="text-orange-500 font-medium">{member.role}</span>
//                   </div>

//                   {/* HOVER OVERLAY: Social Icons */}
//                   <div className="absolute inset-0 bg-orange-500 ps-6 flex items-center gap-3 transition-transform duration-500 -translate-x-full group-hover:translate-x-0 z-20">
//                     <button className="w-10 h-10 rounded-full bg-[#002147] text-white flex items-center justify-center hover:bg-white hover:text-orange-500 transition-all">
//                       <FontAwesomeIcon icon={faFacebookF} className="w-4 h-4" />
//                     </button>
//                     <button className="w-10 h-10 rounded-full bg-[#002147] text-white flex items-center justify-center hover:bg-white hover:text-orange-500 transition-all">
//                       <FontAwesomeIcon icon={faTwitter} className="w-4 h-4" />
//                     </button>
//                     <button className="w-10 h-10 rounded-full bg-[#002147] text-white flex items-center justify-center hover:bg-white hover:text-orange-500 transition-all">
//                       <FontAwesomeIcon icon={faInstagram} className="w-4 h-4" />
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


'use client';

import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReply, faGlobe, faBullseye, faShieldHalved } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const teamMembers = [
  { id: 1, name: "Rob Miller", role: "CEO & Founder", delay: 0.1, img: "/team1.jpeg" },
  { id: 2, name: "Adam Crew", role: "Project Manager", delay: 0.3, img: "/team2.jpeg" },
  { id: 3, name: "Peter Farel", role: "Engineer", delay: 0.5, img: "/team3.jpeg" },
];

// Foundation Data
const foundationData = [
  { 
    title: "Our Vision", 
    text: "To be the world's most trusted partner for industrial services, setting global standards.", 
    icon: faGlobe, 
    color: "text-orange-500" 
  },
  { 
    title: "Our Mission", 
    text: "Delivering exceptional results through innovative engineering and sustainable practices.", 
    icon: faBullseye, 
    color: "text-[#002147]" 
  },
  { 
    title: "Our Values", 
    text: "Integrity, Safety First, Excellence, and Client Satisfaction are our core pillars.", 
    icon: faShieldHalved, 
    color: "text-orange-500" 
  }
];

export default function Team() {
  return (
    <>
      {/* --- TEAM SECTION --- */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mx-auto mb-16 max-w-[600px]">
            <p className="font-medium uppercase text-orange-500 mb-2 tracking-wider">Our Team</p>
            <h1 className="text-5xl font-bold text-[#002147] mb-5 leading-tight">
              Dedicated Team Members
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: member.delay }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="w-full aspect-[4/5] bg-gray-100 overflow-hidden relative">
                   <img 
                      src={member.img} 
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                   /> 
                </div>

                <div className="flex items-stretch h-[90px] relative overflow-hidden">
                  <div className="flex-shrink-0 bg-orange-500 w-[90px] flex items-center justify-center z-30">
                    <FontAwesomeIcon icon={faReply} className="fa-2x text-white fa-flip-horizontal" />
                  </div>
                  <div className="relative flex-grow overflow-hidden bg-[#f8f9fa]">
                    <div className="absolute inset-0 ps-6 flex flex-col justify-center z-10">
                      <h5 className="text-xl font-bold text-[#002147]">{member.name}</h5>
                      <span className="text-orange-500 font-medium">{member.role}</span>
                    </div>
                    <div className="absolute inset-0 bg-orange-500 ps-6 flex items-center gap-3 transition-transform duration-500 -translate-x-full group-hover:translate-x-0 z-20">
                      <button className="w-10 h-10 rounded-full bg-[#002147] text-white flex items-center justify-center hover:bg-white hover:text-orange-500 transition-all">
                        <FontAwesomeIcon icon={faFacebookF} className="w-4 h-4" />
                      </button>
                      <button className="w-10 h-10 rounded-full bg-[#002147] text-white flex items-center justify-center hover:bg-white hover:text-orange-500 transition-all">
                        <FontAwesomeIcon icon={faTwitter} className="w-4 h-4" />
                      </button>
                      <button className="w-10 h-10 rounded-full bg-[#002147] text-white flex items-center justify-center hover:bg-white hover:text-orange-500 transition-all">
                        <FontAwesomeIcon icon={faInstagram} className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- VISION, MISSION, VALUES SECTION --- */}
      <section className="py-20 bg-[#f8f9fa] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {foundationData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white p-10 rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 border-b-4 border-orange-500 group"
              >
                <div className={`mb-6 flex justify-center ${item.color} group-hover:scale-110 transition-transform duration-300`}>
                  <FontAwesomeIcon icon={item.icon} className="text-5xl" />
                </div>
                <h3 className="text-2xl font-bold text-[#002147] mb-4 text-center">{item.title}</h3>
                <p className="text-gray-600 text-center leading-relaxed">
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