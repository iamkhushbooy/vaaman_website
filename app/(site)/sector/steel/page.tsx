'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Zap, Wrench, Users, Award, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function SteelPage() {
    const mainServices = [
        {
            title: 'DE System Maintenance',
            description: 'Comprehensive maintenance of dust extraction systems with expertise in emission norms compliance and stabilization.',
            icon: Zap,
        },
        {
            title: 'Blast Furnace & COB',
            description: 'Specialized maintenance of blast furnaces and coal area operations with preventive and breakdown maintenance support.',
            icon: Wrench,
        },
        {
            title: 'Mechanical Systems',
            description: 'Complete maintenance of pumps, valves, conveyors, heat exchangers, and structural components across steel plants.',
            icon: Zap,
        },
    ];

    const equipmentCategories = [
        {
            category: 'Dust Extraction (DE) Systems',
            items: ['119 DE systems maintained', 'Emission norms compliance', 'System stabilization & operation', 'Preventive maintenance programs']
        },
        {
            category: 'Conveyor Systems',
            description: 'Comprehensive conveyor maintenance including:',
            items: ['Belt replacement and repairs', 'Head and tail pulley maintenance', 'Idler replacement and servicing', 'Dismantling and re-erection']
        },
        {
            category: 'Piping & Ducting',
            description: 'Air, gas and liquid piping fabrication, erection:',
            items: ['Fabrication and erection', 'Repairs and replacement', 'Jointing and welding', 'Lapping and insulation']
        },
        {
            category: 'Valves & Pumps',
            description: 'Critical equipment maintenance:',
            items: ['Valve repairs and replacement', 'Actuator maintenance', 'Pump overhauling', 'Motor conditioning & replacement']
        },
        // {
        //     category: 'Plant Areas',
        //     items: ['Sinter plant maintenance', 'RMHS (Rolling Mill Hot Strip)', 'Raw material bedling & blending', 'Lime calcine plant', 'By-product plant operations']
        // },
    ];

    const clients = [
        {
            name: 'TATA Steel - Jamshedpur',
            details: '750+ manpower | 110 engineers deployed',
            specialization: 'Complete DE systems, preventive & breakdown maintenance'
        },
        {
            name: 'TATA Steel - Kalinganagar',
            details: '750+ manpower | 110 engineers deployed',
            specialization: 'Integrated maintenance across all plant areas'
        },
        {
            name: 'Vedanta Ltd - Sesa Iron Ore (Goa)',
            details: 'Specialized operations team',
            specialization: 'Vibration feeders, coke conveyors, material loading'
        },
    ];

    const capabilities = [
        'DE System Operation & Maintenance with emission compliance',
        'Preventive, Breakdown & Shutdown Maintenance Programs',
        '24/7 Operational Support with skilled workforce',
        'Complete Conveyor Belt System Management',
        'Piping, Ducting & Structural Fabrication',
        'Heat Exchanger Cleaning & Reinstallation',
        'Pump, Valve & Motor Maintenance Excellence',
        'Total Plant Area Coverage & Coordination'
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 },
        },
    };

    return (
        <main className="bg-white">
            <section className="relative h-[30rem] md:h-[38rem] bg-blue-950 text-white flex items-center overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="/sector/hero.jpeg"
                        alt="Steel manufacturing facility"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Gradient to ensure text readability on the left while showing the image on the right */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-900/80 to-transparent"></div>

                <div className="relative z-10 mx-auto flex h-full w-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <h1 className="text-5xl md:text-6xl font-bold mb-4">Steel</h1>
                        <p className="text-base md:text-lg text-gray-200 font-medium">
                            <Link href="/" className="hover:text-[rgb(254,94,21)] transition">Home</Link>
                            {' / '}
                            <span className="text-gray-300">Services</span>
                            {' / '}
                            <span className="text-[rgb(254,94,21)]">Steel</span>
                        </p>
                    </div>
                </div>
            </section>

            {/* Introduction */}
            <section className="py-16 md:py-24 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">

                        {/* Left Side: Text Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-3xl lg:text-4xl font-bold text-[rgb(3,36,90)] mb-6 leading-tight">
                                Our Expertise in <br />
                                <span className="text-[rgb(254,94,21)]">Steel Manufacturing</span>
                            </h2>
                            <p className="text-gray-700 text-lg leading-relaxed mb-6">
                                In the Steel industry, Vaaman Engineers stands as a beacon of excellence. Partnering with industry giants, we deliver maintenance and operational solutions that enhance the robustness and productivity of steel plants.
                            </p>
                            <p className="text-gray-700 text-lg leading-relaxed">
                                Our business is driven by skilled people with similar backgrounds from the reputed steel manufacturing sector. With deployment at major TATA Steel plants and other leading facilities, we bring decades of combined experience to every project.
                            </p>
                        </motion.div>

                        {/* Right Side: Image */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="relative group"
                        >
                            <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl">
                                <Image
                                    src="/sector/hero.jpeg" // Update this path to your actual image
                                    alt="Steel manufacturing process"
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                {/* Decorative overlay border */}
                                <div className="absolute inset-0 border-8 border-white/10 rounded-2xl pointer-events-none"></div>
                            </div>

                            {/* Decorative background element */}
                            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[rgb(254,94,21)]/10 rounded-full -z-10 blur-2xl"></div>
                        </motion.div>

                    </div>
                </div>
            </section>
            {/* Core Services */}
            <section className="py-12 md:py-16 px-4 md:px-8 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-[rgb(3,36,90)] mb-12 text-center"
                    >
                        Core Service Areas
                    </motion.h2>
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid md:grid-cols-3 gap-8"
                    >
                        {mainServices.map((service, index) => {
                            const Icon = service.icon;
                            return (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                                >
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="w-12 h-12 bg-[rgb(254,94,21)] rounded-lg flex items-center justify-center">
                                            <Icon className="text-white" size={24} />
                                        </div>
                                        <h3 className="text-xl font-bold text-[rgb(3,36,90)]">{service.title}</h3>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </section>
                        {/* Client Partnerships */}
            {/* <section className="py-12 md:py-16 px-4 md:px-8 bg-[rgb(3,36,90)]">
                <div className="max-w-6xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-white mb-12 text-center"
                    >
                        Strategic Client Partnerships
                    </motion.h2>
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid md:grid-cols-3 gap-8"
                    >
                        {clients.map((client, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20 hover:border-[rgb(254,94,21)]/50 transition-all duration-300"
                            >
                                <h3 className="text-xl font-bold text-[rgb(254,94,21)] mb-3">{client.name}</h3>
                                <p className="text-white/80 text-sm mb-4 flex items-center gap-2">
                                    <Users size={16} />
                                    {client.details}
                                </p>
                                <p className="text-white/70 text-sm leading-relaxed">{client.specialization}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section> */}


            {/* Equipment & Activities */}
            <section className="py-12 md:py-16 px-4 md:px-8 bg-white">
                <div className="max-w-6xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-[rgb(3,36,90)] mb-12 text-center"
                    >
                        Major Activities & Equipment Scope
                    </motion.h2>
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid md:grid-cols-2 gap-8"
                    >
                        {equipmentCategories.map((cat, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-lg border-l-4 border-[rgb(254,94,21)]"
                            >
                                <h3 className="text-xl font-bold text-[rgb(3,36,90)] mb-4">{cat.category}</h3>
                                {cat.description && <p className="text-gray-600 text-sm mb-3">{cat.description}</p>}
                                <ul className="space-y-3">
                                    {cat.items.map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <CheckCircle2 className="text-[rgb(254,94,21)] flex-shrink-0 mt-0.5" size={18} />
                                            <span className="text-gray-700">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Capabilities Highlight */}
            {/* <section className="py-12 md:py-16 px-4 md:px-8 bg-white">
                <div className="max-w-4xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-[rgb(3,36,90)] mb-12 text-center"
                    >
                        Why Choose Vaaman for Steel Operations?
                    </motion.h2>
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-[rgb(3,36,90)] to-[rgb(3,36,90)] p-8 md:p-12 rounded-lg"
                    >
                        <ul className="grid md:grid-cols-2 gap-6">
                            {capabilities.map((capability, index) => (
                                <motion.li
                                    key={index}
                                    variants={itemVariants}
                                    className="flex items-start gap-4 text-white"
                                >
                                    <Award className="flex-shrink-0 mt-1" size={20} />
                                    <span className="text-lg">{capability}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </section> */}
        </main>
    );
}
