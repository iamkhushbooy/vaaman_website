import Link from 'next/link';
import { Home, Settings } from 'lucide-react';

export default function ClientsPage() {
    return (
        <div className="w-full min-h-[90vh] py-20 flex items-center justify-center bg-slate-50 px-4 sm:px-6 lg:px-8">
            <div className="max-w-max mx-auto text-center sm:text-left">
                <main className="sm:flex justify-center items-center gap-12">
                    {/* The Big 404 */}
                    <p className="mt-20 text-8xl md:text-[150px] font-extrabold text-[rgb(254,94,21)] tracking-tight drop-shadow-sm">
                        404
                    </p>

                    {/* Divider for desktop */}
                    <div className="hidden sm:block w-px h-48 bg-gray-300 mx-4"></div>

                    <div className="mt-30 sm:mt-0">
                        <div className="flex items-center justify-center sm:justify-start gap-3">
                            <Settings className="w-8 h-8 md:w-10 md:h-10 text-[#03245a] animate-[spin_4s_linear_infinite]" />
                            <h1 className="text-4xl md:text-5xl font-bold text-[#03245a] tracking-tight">
                                Coming Soon!
                            </h1>
                        </div>

                        {/* Acha khasa gap heading aur text ke beech */}
                        <p className="mt-16 text-base md:text-lg text-slate-600 max-w-md mx-auto sm:mx-0 leading-relaxed">
                            Oops! It looks like the page you are looking for is currently under construction.
                        </p>
                        <p>We are working hard to bring this to life.</p>

                        {/* Button container mein proper gap aur smaller button */}
                        <div className="mt-16 flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
                            <Link
                                href="/"
                                // Button ko chhota kiya (px-5 py-2.5 aur text-sm)
                                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 border border-transparent text-sm font-medium rounded shadow-sm text-white bg-[rgb(254,94,21)] hover:bg-orange-600 transition-colors duration-200 w-max"
                            >
                                <Home size={18} />
                                Back to Homepage
                            </Link>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
// 'use client';

// import Image from 'next/image';
// import Link from 'next/link';
// import { motion } from 'framer-motion';
// import { ChevronRight, Zap, Droplets, Settings, Flame } from 'lucide-react';

// export default function ZincPage() {
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//         delayChildren: 0.3,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.8, ease: 'easeOut' },
//     },
//   };

//   const plantLocations = [
//     { name: 'Mines at Rampura Agucha', type: 'Mining Operations' },
//     { name: 'Kayad, SK Mines, RD Mines, Zawar', type: 'Mining Operations' },
//     { name: 'Debari Zinc Smelter', type: 'Smelting' },
//     { name: 'Zinc & Lead Casters at Pantnagar', type: 'Casting' },
//     { name: 'Silver Plant at Pantnagar', type: 'Refining' }
//   ];

//   const outsourcedActivities = [
//     'Loading and unloading of Zinc Concentrate',
//     'O & M of calcination plant',
//     'O & M of Sulphuric Acid (H2SO4) plant',
//     'O & M of Leaching plant',
//     'O & M of Cell House',
//     'O & M of Melting & Casting plant for Zinc Ingots',
//     'O & M Moorke Cake treatment plant'
//   ];

//   const majorEquipment = [
//     'Zinc and Lead Strapping Robots',
//     'Induction furnace for charging and melting',
//     'Jumbo Casting machines',
//     'CGG and TCC furnace for jumbo ingots',
//     'ID fans, Compressors, Driers, and motors',
//     'LPG Vane pumps, HSD pumps, Centrifugal pumps',
//     'Vaporisers'
//   ];

//   const maintenanceActivities = [
//     'EOT Cranes and Fork lifters operations',
//     'Actuators, Valves, and Isolation dampers maintenance',
//     'Kettles operations and cleaning work',
//     'Metal Transfer Pumps operations and repairs',
//     'Bag house operations',
//     'Cables, Transformers, Batteries and Alternators',
//     'HT & LT panels maintenance',
//     'Cooling tower, fans, and motors maintenance',
//     'STP, ETP, and WTP plant maintenance',
//     'Fire pump house maintenance',
//     'Fabrication and modification work'
//   ];

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Navigation Breadcrumb */}
//       <div className="bg-gray-50 py-4">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center gap-2 text-sm text-gray-600">
//             <Link href="/" className="hover:text-[rgb(254,94,21)] transition">
//               Home
//             </Link>
//             <ChevronRight size={16} />
//             <Link href="/" className="hover:text-[rgb(254,94,21)] transition">
//               Services
//             </Link>
//             <ChevronRight size={16} />
//             <span className="text-[rgb(254,94,21)] font-semibold">
//               Zinc
//             </span>
//           </div>
//         </div>
//       </div>

//       {/* Hero Section */}
//       <motion.section
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.8 }}
//         className="relative h-96 md:h-[500px] overflow-hidden"
//       >
//         <Image
//           src="/zinc-banner.jpg"
//           alt="Zinc Manufacturing"
//           fill
//           className="object-cover"
//           priority
//         />
//         <div className="absolute inset-0 bg-black/40"></div>
//         <div className="absolute inset-0 flex items-center justify-center">
//           <motion.div
//             initial={{ y: 20, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ delay: 0.3, duration: 0.8 }}
//             className="text-center text-white px-4"
//           >
//             <h1 className="text-4xl md:text-6xl font-bold mb-4 text-balance">
//               Zinc Processing
//             </h1>
//             <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
//               Excellence in Quality and Purity
//             </p>
//           </motion.div>
//         </div>
//       </motion.section>

//       {/* Introduction Section */}
//       <motion.section
//         variants={containerVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
//       >
//         <motion.div variants={itemVariants} className="mb-12">
//           <p className="text-lg text-gray-700 leading-relaxed mb-4">
//             In the Zinc industry, Vaaman Engineers' services are synonymous with quality and reliability. From mining to processing, our solutions enhance the yield and purity of zinc production, making us a trusted partner in the sector.
//           </p>
//           <p className="text-base text-gray-600 leading-relaxed">
//             We are one of the largest service providers at Hindustan Zinc Limited (HZL) with our presence across mining operations, smelting facilities, and casting plants. The key to our success has been delivering committed performance over many years.
//           </p>
//         </motion.div>
//       </motion.section>

//       {/* Our Presence */}
//       <motion.section
//         variants={containerVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-gray-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8"
//       >
//         <motion.h2
//           variants={itemVariants}
//           className="text-3xl md:text-4xl font-bold mb-12 text-gray-900"
//         >
//           Our Operational Presence
//         </motion.h2>

//         <div className="grid md:grid-cols-2 gap-6">
//           {plantLocations.map((location, idx) => (
//             <motion.div
//               key={idx}
//               variants={itemVariants}
//               className="bg-white border-l-4 border-[rgb(254,94,21)] p-6 rounded-lg shadow-md"
//             >
//               <h3 className="text-lg font-bold text-gray-900 mb-2">
//                 {location.name}
//               </h3>
//               <p className="text-sm text-[rgb(254,94,21)] font-semibold">
//                 {location.type}
//               </p>
//             </motion.div>
//           ))}
//         </div>
//       </motion.section>

//       {/* Outsourced Activities */}
//       <motion.section
//         variants={containerVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
//       >
//         <motion.h2
//           variants={itemVariants}
//           className="text-3xl md:text-4xl font-bold mb-12 text-gray-900"
//         >
//           Activities Outsourced to Vaaman
//         </motion.h2>

//         <div className="grid md:grid-cols-2 gap-8">
//           <motion.div
//             variants={itemVariants}
//             className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg border border-blue-200"
//           >
//             <div className="flex items-center gap-3 mb-6">
//               <div className="w-12 h-12 bg-[rgb(254,94,21)] rounded-lg flex items-center justify-center">
//                 <Droplets size={24} className="text-white" />
//               </div>
//               <h3 className="text-2xl font-bold text-gray-900">Processing Operations</h3>
//             </div>
//             <div className="space-y-3">
//               {outsourcedActivities.map((activity, idx) => (
//                 <div key={idx} className="flex gap-3">
//                   <span className="text-[rgb(254,94,21)] font-bold flex-shrink-0">✓</span>
//                   <p className="text-gray-700">{activity}</p>
//                 </div>
//               ))}
//             </div>
//           </motion.div>

//           <motion.div
//             variants={itemVariants}
//             className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-lg border border-orange-200"
//           >
//             <div className="flex items-center gap-3 mb-6">
//               <div className="w-12 h-12 bg-[rgb(254,94,21)] rounded-lg flex items-center justify-center">
//                 <Zap size={24} className="text-white" />
//               </div>
//               <h3 className="text-2xl font-bold text-gray-900">Key Plants</h3>
//             </div>
//             <div className="space-y-4">
//               <div>
//                 <p className="font-semibold text-gray-900 mb-2">Debari Zinc Smelter</p>
//                 <p className="text-sm text-gray-700">Comprehensive operations and maintenance of primary smelting facilities</p>
//               </div>
//               <div>
//                 <p className="font-semibold text-gray-900 mb-2">Pantnagar Casting & Refining</p>
//                 <p className="text-sm text-gray-700">Zinc & Lead casting, and silver plant refining operations</p>
//               </div>
//               <div>
//                 <p className="font-semibold text-gray-900 mb-2">Mining Operations</p>
//                 <p className="text-sm text-gray-700">Multiple mine sites across Rajasthan and Madhya Pradesh</p>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </motion.section>

//       {/* Major Equipment & Maintenance */}
//       <motion.section
//         variants={containerVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-gray-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8"
//       >
//         <motion.h2
//           variants={itemVariants}
//           className="text-3xl md:text-4xl font-bold mb-12 text-gray-900"
//         >
//           Major O & M Activities
//         </motion.h2>

//         <div className="grid md:grid-cols-2 gap-8">
//           {/* Equipment */}
//           <motion.div variants={itemVariants}>
//             <div className="flex items-center gap-3 mb-6">
//               <Flame size={28} className="text-[rgb(254,94,21)]" />
//               <h3 className="text-2xl font-bold text-gray-900">Equipment Management</h3>
//             </div>
//             <div className="space-y-3">
//               {majorEquipment.map((item, idx) => (
//                 <div key={idx} className="flex gap-3 bg-white p-3 rounded">
//                   <span className="text-[rgb(254,94,21)] font-bold flex-shrink-0">•</span>
//                   <p className="text-gray-700">{item}</p>
//                 </div>
//               ))}
//             </div>
//           </motion.div>

//           {/* Maintenance Activities */}
//           <motion.div variants={itemVariants}>
//             <div className="flex items-center gap-3 mb-6">
//               <Settings size={28} className="text-[rgb(254,94,21)]" />
//               <h3 className="text-2xl font-bold text-gray-900">Maintenance Operations</h3>
//             </div>
//             <div className="space-y-3">
//               {maintenanceActivities.map((item, idx) => (
//                 <div key={idx} className="flex gap-3 bg-white p-3 rounded">
//                   <span className="text-[rgb(254,94,21)] font-bold flex-shrink-0">•</span>
//                   <p className="text-gray-700">{item}</p>
//                 </div>
//               ))}
//             </div>
//           </motion.div>
//         </div>
//       </motion.section>

//       {/* Why Choose Vaaman */}
//       <motion.section
//         variants={containerVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
//       >
//         <motion.h2
//           variants={itemVariants}
//           className="text-3xl md:text-4xl font-bold mb-12 text-gray-900"
//         >
//           Why Choose Vaaman for Zinc Operations?
//         </motion.h2>

//         <div className="grid md:grid-cols-2 gap-8">
//           <motion.div
//             variants={itemVariants}
//             className="space-y-4"
//           >
//             {[
//               'Proven track record with India\'s largest zinc smelter (HZL)',
//               'Multi-site expertise across mining, smelting, and casting operations',
//               'Specialized knowledge in zinc processing chemistry and equipment',
//               'Commitment to quality and purity enhancement',
//               'Skilled workforce trained in zinc operations',
//               'Comprehensive equipment management and maintenance protocols'
//             ].map((item, idx) => (
//               <div key={idx} className="flex gap-4">
//                 <div className="w-8 h-8 bg-[rgb(254,94,21)] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
//                   <ChevronRight size={16} className="text-white" />
//                 </div>
//                 <p className="text-gray-700 font-medium">{item}</p>
//               </div>
//             ))}
//           </motion.div>

//           <motion.div
//             variants={itemVariants}
//             className="bg-gradient-to-br from-blue-900 to-[rgb(254,94,21)] text-white p-8 rounded-lg"
//           >
//             <h4 className="text-xl font-bold mb-4">Our Commitment</h4>
//             <p className="text-gray-100 mb-6 leading-relaxed">
//               Vaaman Engineers is committed to enhancing your zinc production yield and purity through efficient operations, reliable maintenance, and continuous performance optimization across all your facilities.
//             </p>
//             <Link 
//               href="/contact"
//               className="inline-flex items-center justify-center rounded-md px-6 py-3 font-bold bg-white text-[rgb(254,94,21)] hover:bg-gray-100 transition-colors w-full"
//             >
//               Discuss Zinc Solutions
//             </Link>
//           </motion.div>
//         </div>
//       </motion.section>

//       {/* CTA Section */}
//       <motion.section
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 0.8 }}
//         viewport={{ once: true }}
//         className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900 to-[rgb(254,94,21)] text-white"
//       >
//         <div className="max-w-4xl mx-auto text-center">
//           <h2 className="text-3xl md:text-4xl font-bold mb-6">
//             Enhance Your Zinc Production Today
//           </h2>
//           <p className="text-lg text-gray-100 mb-8">
//             Partner with Vaaman for reliable operations and exceptional quality in zinc processing.
//           </p>
//           <Link 
//             href="/contact"
//             className="inline-flex items-center justify-center rounded-md bg-white text-blue-900 hover:bg-gray-100 px-8 py-3 text-lg font-semibold transition-colors"
//           >
//             Get in Touch
//           </Link>
//         </div>
//       </motion.section>
//     </div>
//   );
// }