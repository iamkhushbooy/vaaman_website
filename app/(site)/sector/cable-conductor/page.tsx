'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { ChevronRight, Zap, Cable, Shield, Layers, Sparkles } from 'lucide-react';

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

    const showcaseImages = [
        {
            src: '/sector/cable-conductor/cable-1.jpeg',
            alt: 'Wire rod and cable production setup',
            title: 'Wire Rod Mills',
            description: 'Aligned with rolling, coiling, and upstream production support.',
        },
        {
            src: '/sector/cable-conductor/cable-2.jpeg',
            alt: 'Power conductor manufacturing line',
            title: 'Power Conductors & OPGW',
            description: 'Supports drawing, stranding, coating, and conductor line operations.',
        },
        {
            src: '/sector/cable-conductor/cable-3.jpeg',
            alt: 'Fabrication activity for tower and conductor systems',
            title: 'Transmission Tower Support',
            description: 'Mapped to cutting, shearing, pressing, and welding activities.',
        },
    ];

    const highlightMetrics = [
        { value: '35+', label: 'Years in heavy industry support' },
        { value: '3', label: 'Specialized execution segments' },
        { value: '24x7', label: 'Operational readiness model' },
    ];

    return (
        <div className="min-h-screen bg-[linear-gradient(180deg,#f5f9ff_0%,#ffffff_35%,#f9fbff_100%)]">
            <section className="relative min-h-[34rem] bg-blue-950 text-white flex items-center overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="/sector/cable-conductor/cable-2.jpeg"
                        alt="Cable and Conductor manufacturing facility"
                        fill
                        priority
                        className="object-cover scale-[1.05]"
                    />
                </div>

                <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(251,146,60,0.4),transparent_36%),linear-gradient(104deg,rgba(2,6,23,0.88)_22%,rgba(3,36,90,0.7)_58%,rgba(3,36,90,0.2)_100%)]" />
                <div className="absolute -left-20 top-16 h-64 w-64 rounded-full bg-orange-500/25 blur-3xl" />
                <div className="absolute -right-10 bottom-10 h-56 w-56 rounded-full bg-blue-400/30 blur-3xl" />

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-orange-200 backdrop-blur">
                        <Sparkles size={14} />
                        Industrial Precision
                    </div>
                    <h1 className="mt-5 text-5xl md:text-7xl font-bold leading-tight">Cable & Conductor</h1>
                    <p className="mt-4 max-w-2xl text-base md:text-lg text-blue-50/90 font-medium leading-relaxed">
                        End-to-end plant execution with high reliability across wire rod, power conductor,
                        OPGW, and transmission systems.
                    </p>
                    <p className="mt-5 text-sm md:text-base text-gray-200 font-medium">
                        <Link href="/" className="hover:text-[rgb(254,94,21)] transition">Home</Link>
                        {' / '}
                        <span className="text-gray-300">Services</span>
                        {' / '}
                        <span className="text-[rgb(254,94,21)]">Cable & Conductor</span>
                    </p>

                    <div className="mt-8 grid gap-3 sm:grid-cols-3 max-w-3xl">
                        {highlightMetrics.map((item) => (
                            <div
                                key={item.label}
                                className="rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-sm"
                            >
                                <p className="text-2xl md:text-3xl font-bold text-orange-200">{item.value}</p>
                                <p className="mt-1 text-xs md:text-sm text-blue-100/95">{item.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <motion.section
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="py-12 md:py-18 px-4 sm:px-6 lg:px-8 max-w-[92rem] mx-auto"
            >
                <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
                    <motion.div
                        variants={itemVariants}
                        className="rounded-[2rem] bg-white p-8 shadow-[0_20px_50px_rgba(15,23,42,0.08)] ring-1 ring-slate-200 md:p-10"
                    >
                        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[rgb(254,94,21)]">
                            Sector Overview
                        </p>
                        <h2 className="mt-4 text-3xl font-bold text-[rgb(3,36,90)] md:text-4xl">
                            Precision execution across cable and conductor operations
                        </h2>
                        <p className="mt-6 text-lg leading-relaxed text-gray-700">
                            Navigating the intricate world of Cable & Conductor manufacturing,
                            Vaaman Engineers bring precision and innovation. Our services ensure that
                            cable systems are not only efficient but also adhere to the highest
                            safety standards.
                        </p>

                        <div className="mt-8 space-y-4">
                            {showcaseImages.map((image, index) => (
                                <div key={image.title} className="flex items-start gap-4 rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200">
                                    <div className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-xl bg-[linear-gradient(155deg,#fe5e15,#ff8f4d)] text-sm font-bold text-white shadow-md">
                                        0{index + 1}
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-[rgb(3,36,90)]">{image.title}</h3>
                                        <p className="mt-1 text-sm leading-relaxed text-gray-600">{image.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        variants={itemVariants}
                        className="relative grid gap-6 lg:grid-cols-[1.12fr_0.88fr]"
                    >
                        <div className="pointer-events-none absolute -inset-4 rounded-[2.2rem] bg-[radial-gradient(circle_at_10%_10%,rgba(37,99,235,0.18),transparent_45%),radial-gradient(circle_at_90%_80%,rgba(249,115,22,0.2),transparent_40%)]" />
                        <div className="group relative min-h-[520px] md:min-h-[620px] lg:min-h-[760px] overflow-hidden rounded-[2rem] shadow-[0_28px_50px_rgba(15,23,42,0.24)]">
                            <Image
                                src={showcaseImages[0].src}
                                alt={showcaseImages[0].alt}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>

                        <div className="grid gap-6">
                            {showcaseImages.slice(1).map((image) => (
                                <div
                                    key={image.title}
                                    className="group relative min-h-[250px] md:min-h-[300px] lg:min-h-[367px] overflow-hidden rounded-[1.6rem] shadow-[0_20px_38px_rgba(15,23,42,0.2)]"
                                >
                                    <Image
                                        src={image.src}
                                        alt={image.alt}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </motion.section>

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
                        className="bg-gradient-to-br from-white via-blue-50 to-blue-100 p-8 rounded-[1.5rem] border border-blue-200 shadow-sm"
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
                        className="bg-gradient-to-br from-white via-orange-50 to-orange-100 p-8 rounded-[1.5rem] border border-orange-200 shadow-sm"
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
                        className="bg-gradient-to-br from-white via-blue-50 to-blue-100 p-8 rounded-[1.5rem] border border-blue-200 shadow-sm"
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
                        className="bg-white p-8 rounded-[1.4rem] shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
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
                        className="bg-white p-8 rounded-[1.4rem] shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
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
                        className="bg-[linear-gradient(140deg,#0b2a61_0%,#173e88_50%,#fe5e15_100%)] text-white p-8 rounded-[1.5rem] shadow-[0_18px_34px_rgba(2,6,23,0.25)]"
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
