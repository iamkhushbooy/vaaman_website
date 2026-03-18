'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { ChevronRight, Zap, Cable, Shield, Layers } from 'lucide-react';

export default function CableConductorPage() {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: 'easeOut' },
        },
    };

    const wireRodEquipment = [
        'Melting and Holding furnaces',
        'Hot metal casting machines',
        'Wire Rod mills',
        'Coilers',
        'Compressors',
        'Hydraulic power packs',
        'Cooling towers',
        'WTP & ETP',
        'Lubrication systems',
        'Piping and valves',
        'Heat exchangers',
        'Control panels and automation',
        'Switch yards and transformers'
    ];

    const powerConductorEquipment = [
        'High Speed Wire drawing machines',
        'Tubular stranding machine',
        'Rigid stranders',
        'Lapping and coating machines',
        'Taping machines',
        'Associated utilities'
    ];

    const transmissionTowerActivities = [
        'Cut to Length machine operations',
        'Shearing machine operations',
        'Plasma machine operations',
        'Press Break machine operations',
        'Welding machines operations',
        'Laboratory and workshop O & M',
    ];

    return (
        <div className="min-h-screen bg-white">
            <section className="relative h-96 bg-blue-950 text-white flex items-center overflow-hidden">
                <div className="absolute inset-0">
                    {/* Update this src to your actual cable/conductor image if needed */}
                    <img
                        src="/cable-conductor-banner.jpg"
                        alt="Cable and Conductor manufacturing facility"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Gradient to ensure text readability on the left while showing the image on the right */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-900/80 to-transparent"></div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <h1 className="text-5xl md:text-6xl font-bold mb-4">Cable & Conductor</h1>
                    <p className="text-lg text-gray-200 font-medium">
                        <Link href="/" className="hover:text-[rgb(254,94,21)] transition">Home</Link>
                        {' / '}
                        <span className="text-gray-300">Services</span>
                        {' / '}
                        <span className="text-[rgb(254,94,21)]">Cable & Conductor</span>
                    </p>
                </div>
            </section>

            {/* Introduction Section */}
            {/* <motion.section
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
            >
                <motion.div variants={itemVariants} className="mb-12">
                    <p className="text-lg text-gray-700 leading-relaxed mb-4">
                        Navigating the intricate world of Cable & Conductor manufacturing, Vaaman Engineers bring precision and innovation. Our services ensure that cable systems are not only efficient but also adhere to the highest safety standards.
                    </p>
                    <p className="text-base text-gray-600 leading-relaxed">
                        We provide comprehensive Operations and Maintenance of Rolling mills, Power Conductor plants, electrical and telecom cable plants with expertise spanning multiple sectors.
                    </p>
                </motion.div>
            </motion.section> */}

            {/* Core Service Areas */}
            <motion.section
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="py-10 md:py-18 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
            >
                <motion.h2
                    variants={itemVariants}
                    className="text-3xl md:text-4xl font-bold mb-12 text-gray-900"
                >
                    Core Service Areas
                </motion.h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Wire Rod Mills */}
                    <motion.div
                        variants={itemVariants}
                        className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg border border-blue-200"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-12 h-12 bg-[rgb(254,94,21)] rounded-lg flex items-center justify-center">
                                <Cable size={24} className="text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">Wire Rod Mills</h3>
                        </div>
                        <p className="text-gray-700 mb-4">
                            Complete operations and maintenance of Wire Rod production facilities with expertise in all major equipment.
                        </p>
                        <div className="space-y-2">
                            {wireRodEquipment.slice(0, 5).map((item, idx) => (
                                <div key={idx} className="flex items-start gap-2">
                                    <span className="text-[rgb(254,94,21)] mt-1">•</span>
                                    <span className="text-sm text-gray-700">{item}</span>
                                </div>
                            ))}
                            <p className="text-sm text-gray-600 font-semibold pt-2">+ {wireRodEquipment.length - 5} more equipment</p>
                        </div>
                    </motion.div>

                    {/* Power Conductors & OPGW */}
                    <motion.div
                        variants={itemVariants}
                        className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-lg border border-orange-200"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-12 h-12 bg-[rgb(254,94,21)] rounded-lg flex items-center justify-center">
                                <Zap size={24} className="text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">Power Conductors & OPGW</h3>
                        </div>
                        <p className="text-gray-700 mb-4">
                            High-speed wire drawing, stranding, and coating operations for power and optical ground wire applications.
                        </p>
                        <div className="space-y-2">
                            {powerConductorEquipment.map((item, idx) => (
                                <div key={idx} className="flex items-start gap-2">
                                    <span className="text-[rgb(254,94,21)] mt-1">•</span>
                                    <span className="text-sm text-gray-700">{item}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Transmission Tower */}
                    <motion.div
                        variants={itemVariants}
                        className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg border border-blue-200"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-12 h-12 bg-[rgb(254,94,21)] rounded-lg flex items-center justify-center">
                                <Layers size={24} className="text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">Transmission Tower</h3>
                        </div>
                        <p className="text-gray-700 mb-4">
                            Complete manufacturing support including cutting, shearing, plasma, pressing, and welding operations.
                        </p>
                        <div className="space-y-2">
                            {transmissionTowerActivities.map((item, idx) => (
                                <div key={idx} className="flex items-start gap-2">
                                    <span className="text-[rgb(254,94,21)] mt-1">•</span>
                                    <span className="text-sm text-gray-700">{item}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </motion.section>

            {/* Optical Fibre & Material Handling */}
            <motion.section
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="py-10 md:py-18 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
            >
                <div className="grid md:grid-cols-2 gap-8">
                    <motion.div
                        variants={itemVariants}
                        className="bg-white p-8 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
                    >
                        <h3 className="text-2xl font-bold mb-4 flex items-center gap-2 text-[rgb(3,36,90)]">
                            <Shield size={28} className="text-[rgb(254,94,21)]" />
                            Optical Fibre Cables
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                            Operations & Maintenance of Optical Ground Wire plants ensuring highest quality standards and signal integrity for telecommunications infrastructure.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={itemVariants}
                        className="bg-white p-8 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
                    >
                        <h3 className="text-2xl font-bold mb-4 flex items-center gap-2 text-[rgb(3,36,90)]">
                            <Zap size={28} className="text-[rgb(254,94,21)]" />
                            Material Handling
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                            Complete material handling solutions for raw materials and finished products including loading, unloading, stacking, and storage operations with optimized logistics.
                        </p>
                    </motion.div>
                </div>
            </motion.section>

            {/* Why Choose Vaaman */}
            <motion.section
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="py-10 md:py-18 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
            >
                <motion.h2
                    variants={itemVariants}
                    className="text-3xl md:text-4xl font-bold mb-12 text-gray-900"
                >
                    Why Choose Vaaman for Cable & Conductor?
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-8">
                    <motion.div
                        variants={itemVariants}
                        className="space-y-4"
                    >
                        {[
                            'End-to-end technical expertise across all cable manufacturing processes',
                            'Specialized knowledge in high-speed production equipment',
                            'Compliance with international safety and quality standards',
                            'Proven track record with major power and telecom operators'
                        ].map((item, idx) => (
                            <div key={idx} className="flex gap-4">
                                <div className="w-8 h-8 bg-[rgb(254,94,21)] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                    <ChevronRight size={16} className="text-white" />
                                </div>
                                <p className="text-gray-700 font-medium">{item}</p>
                            </div>
                        ))}
                    </motion.div>

                    <motion.div
                        variants={itemVariants}
                        className="bg-gradient-to-br from-blue-900 to-[rgb(254,94,21)] text-white p-8 rounded-lg"
                    >
                        <h4 className="text-xl font-bold mb-4">Our Commitment</h4>
                        <p className="text-gray-100 mb-6 leading-relaxed">
                            Vaaman Engineers is committed to delivering seamless operations across your cable and conductor manufacturing facilities, ensuring optimal efficiency and compliance with industry standards.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center rounded-md px-6 py-3 font-semibold bg-white text-[rgb(254,94,21)] hover:bg-gray-100 transition-colors w-full"
                        >
                            Discuss Your Requirements
                        </Link>
                    </motion.div>
                </div>
            </motion.section>
        </div>
    );
}