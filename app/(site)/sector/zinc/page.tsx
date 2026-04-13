'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { ChevronRight, Zap, Droplets, Settings, Flame } from 'lucide-react';
import { SectorHero } from '@/components/sector/SectorHero';

export default function ZincPage() {
    // 1. Framer Motion Variants with TypeScript 'Variants' type
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

    // 2. Plant Locations (Exactly 6 items for 3 Left, 3 Right layout)
    const plantLocations = [
        { name: 'Mines at Rampura Agucha', type: 'Mining Operations' },
        { name: 'Zawar Group of Mines', type: 'Mining Operations' },
        { name: 'Kayad, SK Mines, RD Mines', type: 'Mining Operations' },
        { name: 'Debari Zinc Smelter', type: 'Smelting' },
        { name: 'Zinc & Lead Casters at Pantnagar', type: 'Casting' },
        { name: 'Silver Plant at Pantnagar', type: 'Refining' }
    ];

    const outsourcedActivities = [
        'Loading and unloading of Zinc Concentrate',
        'O & M of calcination plant',
        'O & M of Sulphuric Acid (H2SO4) plant',
        'O & M of Leaching plant',
        'O & M of Cell House',
        'O & M of Melting & Casting plant for Zinc Ingots',
        'O & M Moorke Cake treatment plant'
    ];

    const majorEquipment = [
        'Zinc and Lead Strapping Robots',
        'Induction furnace for charging and melting',
        'Jumbo Casting machines',
        'CGG and TCC furnace for jumbo ingots',
        'ID fans, Compressors, Driers, and motors',
        'LPG Vane pumps, HSD pumps, Centrifugal pumps',
        'Vaporisers'
    ];

    const maintenanceActivities = [
        'EOT Cranes and Fork lifters operations',
        'Actuators, Valves, and Isolation dampers maintenance',
        'Kettles operations and cleaning work',
        'Metal Transfer Pumps operations and repairs',
        'Bag house operations',
        'Cables, Transformers, Batteries and Alternators',
        'HT & LT panels maintenance',
    ];

    const heroMetrics = [
        { value: '6+', label: 'Operational locations' },
        { value: 'HZL', label: 'Key strategic client' },
        { value: '24x7', label: 'Plant support readiness' },
    ];

    return (
        <div className="min-h-screen bg-white">
            <SectorHero
                badge="Zinc Operations"
                title="Reliable O&M Support Across Mining, Smelting and Casting"
                description="Vaaman Engineers supports zinc operations from mine-linked activities to smelting and casting, helping clients improve output quality, process discipline, and plant uptime."
                currentLabel="Zinc"
                backgroundImage={{
                    src: '/sector/zinc/zinc.jpeg',
                    alt: 'Zinc processing facility',
                }}
                collageTopImage={{
                    src: '/sector/zinc/zinc2.jpg',
                    alt: 'Zinc processing operations',
                }}
                collageBottomImage={{
                    src: '/sector/zinc/zinc3.jpg',
                    alt: 'Zinc plant infrastructure and process support',
                }}
                metrics={heroMetrics}
            />

            {/* Introduction Section with Image 1 */}
            <motion.section
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
            >
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div variants={itemVariants}>
                        <h2 className="text-3xl font-bold mb-6 text-gray-900">Delivering Excellence in Zinc</h2>
                        <p className="text-lg text-gray-700 leading-relaxed mb-4">
                            In the Zinc industry, Vaaman Engineers&apos; services are synonymous with quality and reliability. From mining to processing, our solutions enhance the yield and purity of zinc production, making us a trusted partner in the sector.
                        </p>
                        <p className="text-base text-gray-600 leading-relaxed">
                            We are one of the largest service providers at Hindustan Zinc Limited (HZL) with our presence across mining operations, smelting facilities, and casting plants. The key to our success has been delivering committed performance over many years.
                        </p>
                    </motion.div>

                    <motion.div variants={itemVariants} className="relative h-72 md:h-96 w-full rounded-xl overflow-hidden shadow-xl">
                        <Image
                            src="/sector/zinc/zinc2.jpg"
                            alt="Zinc Processing Operations"
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-700"
                        />
                    </motion.div>
                </div>
            </motion.section>

            {/* Our Operational Presence - 3 Left, 3 Right */}
            <div className="bg-gray-50">
                <motion.section
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
                >
                    <motion.h2
                        variants={itemVariants}
                        className="text-3xl md:text-4xl font-bold mb-12 text-gray-900"
                    >
                        Our Operational Presence
                    </motion.h2>
                    
                    {/* md:grid-cols-2 with 6 items ensures 3 on the left and 3 on the right */}
                    <div className="grid md:grid-cols-2 gap-6">
                        {plantLocations.map((location, idx) => (
                            <motion.div
                                key={idx}
                                variants={itemVariants}
                                className="bg-white border-l-4 border-[rgb(254,94,21)] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                            >
                                <h3 className="text-lg font-bold text-gray-900 mb-2">
                                    {location.name}
                                </h3>
                                <p className="text-sm text-[rgb(254,94,21)] font-semibold uppercase tracking-wider">
                                    {location.type}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>
            </div>

            {/* Outsourced Activities */}
            <motion.section
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
            >
                <motion.h2
                    variants={itemVariants}
                    className="text-3xl md:text-4xl font-bold mb-12 text-gray-900"
                >
                    Activities Outsourced to Vaaman
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-8">
                    <motion.div
                        variants={itemVariants}
                        className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg border border-blue-200"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 bg-[rgb(254,94,21)] rounded-lg flex items-center justify-center">
                                <Droplets size={24} className="text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900">Processing Operations</h3>
                        </div>
                        <div className="space-y-3">
                            {outsourcedActivities.map((activity, idx) => (
                                <div key={idx} className="flex gap-3">
                                    <span className="text-[rgb(254,94,21)] font-bold flex-shrink-0">✓</span>
                                    <p className="text-gray-700">{activity}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        variants={itemVariants}
                        className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-lg border border-orange-200"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 bg-[rgb(254,94,21)] rounded-lg flex items-center justify-center">
                                <Zap size={24} className="text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900">Key Plants</h3>
                        </div>
                        <div className="space-y-4">
                            <div>
                                <p className="font-semibold text-gray-900 mb-2">Debari Zinc Smelter</p>
                                <p className="text-sm text-gray-700">Comprehensive operations and maintenance of primary smelting facilities</p>
                            </div>
                            <div>
                                <p className="font-semibold text-gray-900 mb-2">Pantnagar Casting & Refining</p>
                                <p className="text-sm text-gray-700">Zinc & Lead casting, and silver plant refining operations</p>
                            </div>
                            <div>
                                <p className="font-semibold text-gray-900 mb-2">Mining Operations</p>
                                <p className="text-sm text-gray-700">Multiple mine sites across Rajasthan and Madhya Pradesh</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.section>

            {/* Major Equipment & Maintenance */}
            <div className="bg-gray-50">
                <motion.section
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
                >
                    <motion.h2
                        variants={itemVariants}
                        className="text-3xl md:text-4xl font-bold mb-12 text-gray-900"
                    >
                        Major O & M Activities
                    </motion.h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Equipment */}
                        <motion.div variants={itemVariants}>
                            <div className="flex items-center gap-3 mb-6">
                                <Flame size={28} className="text-[rgb(254,94,21)]" />
                                <h3 className="text-2xl font-bold text-gray-900">Equipment Management</h3>
                            </div>
                            <div className="space-y-3">
                                {majorEquipment.map((item, idx) => (
                                    <div key={idx} className="flex gap-3 bg-white p-3 rounded shadow-sm">
                                        <span className="text-[rgb(254,94,21)] font-bold flex-shrink-0">•</span>
                                        <p className="text-gray-700">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Maintenance Activities */}
                        <motion.div variants={itemVariants}>
                            <div className="flex items-center gap-3 mb-6">
                                <Settings size={28} className="text-[rgb(254,94,21)]" />
                                <h3 className="text-2xl font-bold text-gray-900">Maintenance Operations</h3>
                            </div>
                            <div className="space-y-3">
                                {maintenanceActivities.map((item, idx) => (
                                    <div key={idx} className="flex gap-3 bg-white p-3 rounded shadow-sm">
                                        <span className="text-[rgb(254,94,21)] font-bold flex-shrink-0">•</span>
                                        <p className="text-gray-700">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </motion.section>
            </div>

            {/* Why Choose Vaaman with Image 2 */}
            <motion.section
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
            >
                <motion.h2
                    variants={itemVariants}
                    className="text-3xl md:text-4xl font-bold mb-12 text-gray-900"
                >
                    Why Choose Vaaman for Zinc Operations?
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-12 mb-12 items-center">
                    <motion.div variants={itemVariants} className="relative h-72 md:h-full min-h-[350px] w-full rounded-xl overflow-hidden shadow-xl order-2 md:order-1">
                        <Image
                            src="/sector/zinc/zinc3.jpg"
                            alt="Zinc Mining and Maintenance"
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-700"
                        />
                    </motion.div>

                    <motion.div
                        variants={itemVariants}
                        className="space-y-4 order-1 md:order-2"
                    >
                        {[
                            'Proven track record with India\'s largest zinc smelter (HZL)',
                            'Multi-site expertise across mining, smelting, and casting operations',
                            'Specialized knowledge in zinc processing chemistry and equipment',
                            'Commitment to quality and purity enhancement',
                            'Skilled workforce trained in zinc operations',
                            'Comprehensive equipment management and maintenance protocols'
                        ].map((item, idx) => (
                            <div key={idx} className="flex gap-4">
                                <div className="w-8 h-8 bg-[rgb(254,94,21)] rounded-full flex items-center justify-center flex-shrink-0 mt-1 shadow-sm">
                                    <ChevronRight size={16} className="text-white" />
                                </div>
                                <p className="text-gray-700 font-medium">{item}</p>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </motion.section>
        </div>
    );
}
