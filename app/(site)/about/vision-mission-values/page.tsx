"use client"; // Required since we are using framer-motion animations

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Check, Mail, Phone } from 'lucide-react';
import AboutHero from '@/components/about/AboutHero';
import { faGlobe, faBullseye, faShieldHalved } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function VisionMissionValuesPage() {
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
    return (
        <>
            <AboutHero title="Vision, Mission Values" />
            {/* --- VISION, MISSION, VALUES SECTION --- */}
            <section id="vision-mission-values" className="py-24 bg-[#fcfcfc] overflow-hidden scroll-mt-32">
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