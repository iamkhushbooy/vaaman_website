'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Briefcase, CheckCircle2, Factory, ShieldCheck, Users, Wrench } from 'lucide-react';
import { SectorHero } from '@/components/sector/SectorHero';

export default function SteelPage() {
    const heroMetrics = [
        { value: '24x7', label: 'Operational support model' },
        { value: '5+', label: 'Core steel plant areas' },
        { value: 'O&M', label: 'Execution-led services' },
    ];

    const expertiseAreas = [
        {
            title: 'Iron Making',
            description: 'Blast Furnace (BF), RMHS, Stock House, Cast House',
            icon: Factory,
        },
        {
            title: 'Steel Making',
            description: 'SMS and Continuous Casting Machine (CCM)',
            icon: Wrench,
        },
        {
            title: 'Rolling Mills',
            description: 'WRM and BRM operations & maintenance',
            icon: Briefcase,
        },
        {
            title: 'Utilities & Auxiliary Plants',
            description: 'WWTP, compressed air, and critical support systems',
            icon: ShieldCheck,
        },
        {
            title: 'Power Plant (Mechanical)',
            description: 'Maintenance and operation support for plant reliability',
            icon: Users,
        },
        {
            title: 'Material Handling Systems',
            description: 'Operational support for conveyors, stock movement, and in-plant material flow',
            icon: Briefcase,
        },
    ];

    const services = [
        {
            title: 'Operation & Maintenance (O&M)',
            description: 'End-to-end operational and maintenance support to improve productivity, reliability, and cost efficiency.',
            icon: Wrench,
        },
        {
            title: 'Skilled Manpower Deployment',
            description: 'Deployment of trained manpower tailored to continuous-process and high-temperature steel plant environments.',
            icon: Users,
        },
        {
            title: 'Shutdown & Breakdown Maintenance',
            description: 'Fast-response maintenance support for planned shutdowns and critical breakdown situations.',
            icon: ShieldCheck,
        },
        {
            title: 'Industrial Housekeeping & Material Handling',
            description: 'Structured housekeeping and material movement support for safer and more efficient operations.',
            icon: Factory,
        },
        {
            title: 'Project & Commissioning Support',
            description: 'Execution support during project phases, commissioning, and plant stabilization activities.',
            icon: Briefcase,
        },
        {
            title: 'Mechanical & Structural Fabrication',
            description: 'On-site fabrication, structural repairs, and component refurbishment to ensure long-term asset integrity.',
            icon: Wrench, // or use an appropriate icon like Hammer or Settings
        },
    ];

    const strengths = [
        'Expertise in high-temperature & continuous process plants',
        'Strong safety culture and compliance',
        'KPI-driven performance and cost optimization',
        'Proven capability in plant stabilization & shutdowns',
        'Flexible and scalable workforce solutions',
    ];

    const reasonsToChoose = [
        'Experienced & trained workforce',
        'Strong presence in steel operations',
        'Reliable execution & timely delivery',
        'Focus on safety, quality & productivity',
        'Long-term partnership approach',
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

    const isLastServiceCard = (index: number) => index === services.length - 1;
    const isLastStrengthCard = (index: number) => index === strengths.length - 1;
    const isLastReasonCard = (index: number) => index === reasonsToChoose.length - 1;

    return (
        <main className="bg-white">
            <SectorHero
                badge="Steel Operations"
                title="Performance-Driven Operation & Maintenance Support for Steel Plants"
                description="Vaaman Engineers delivers reliable O&M, manpower deployment, and project support across iron making, steel making, rolling mills, utilities, and power plant systems."
                currentLabel="Steel"
                backgroundImage={{
                    src: '/images-optimized/sector/steel/steel-billet-casting.jpg',
                    alt: 'Steel billet casting operation',
                }}
                collageTopImage={{
                    src: '/images-optimized/sector/steel/steel-sms-operation.jpg',
                    alt: 'Steel SMS operation',
                }}
                collageBottomImage={{
                    src: '/images-optimized/sector/steel/steel-dispatch-unit.jpg',
                    alt: 'Dispatch unit for WRM operations',
                }}
                metrics={heroMetrics}
            />

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
                                Trusted Engineering Support for the 
                                <span className="text-[rgb(254,94,21)]"> Steel Sector</span>
                            </h2>
                            <p className="text-gray-700 text-lg leading-relaxed mb-6">
                                Vaaman Engineers (I) Ltd. is a trusted engineering services company delivering Operation & Maintenance (O&M), manpower deployment, and project support across core industrial sectors. With strong expertise in the steel industry, we enable clients to achieve higher productivity, reliability, and cost efficiency.
                            </p>
                            <p className="text-gray-700 text-lg leading-relaxed">
                                We are committed to delivering safe, efficient, and performance-driven solutions that enhance plant reliability and support our clients&apos; growth.
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
                                    src="/images-optimized/sector/steel/steel-fabrication-erection.jpg"
                                    alt="Steel fabrication and erection work"
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

            <section className="py-12 md:py-16 px-4 md:px-8 bg-white">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="mb-10 text-center"
                    >
                        <span className="inline-flex items-center rounded-full border border-[rgb(254,94,21)]/20 bg-[rgb(254,94,21)]/8 px-4 py-1 text-sm font-semibold uppercase tracking-[0.2em] text-[rgb(254,94,21)]">
                            Field Visuals
                        </span>
                        <h2 className="mt-4 text-3xl font-bold text-[rgb(3,36,90)] md:text-4xl">
                            Steel Plant Activity Snapshots
                        </h2>
                    </motion.div>
                    <div className="grid gap-8 md:grid-cols-2">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="group"
                        >
                            <div className="relative h-[320px] overflow-hidden rounded-[28px] shadow-[0_22px_60px_rgba(15,23,42,0.12)]">
                                <Image
                                    src="/images-optimized/sector/steel/steel-dispatch-unit.jpg"
                                    alt="Dispatch unit for WRM"
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="group"
                        >
                            <div className="relative h-[320px] overflow-hidden rounded-[28px] shadow-[0_22px_60px_rgba(15,23,42,0.12)]">
                                <Image
                                    src="/images-optimized/sector/steel/steel-slag-handling.jpg"
                                    alt="Slag handling operations"
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="py-12 md:py-16 px-4 md:px-8 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-[rgb(3,36,90)] mb-12 text-center"
                    >
                        Our Expertise in Steel Sector
                    </motion.h2>
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid md:grid-cols-2 xl:grid-cols-3 gap-8"
                    >
                        {expertiseAreas.map((area, index) => {
                            const Icon = area.icon;
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
                                        <h3 className="text-xl font-bold text-[rgb(3,36,90)]">{area.title}</h3>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed">{area.description}</p>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </section>

            <section className="py-12 md:py-16 px-4 md:px-8 bg-white">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="mb-12 text-center"
                    >
                        <span className="inline-flex items-center rounded-full border border-[rgb(254,94,21)]/20 bg-[rgb(254,94,21)]/8 px-4 py-1 text-sm font-semibold uppercase tracking-[0.2em] text-[rgb(254,94,21)]">
                            What We Deliver
                        </span>
                        <motion.h2
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="mt-4 text-3xl font-bold text-[rgb(3,36,90)] md:text-4xl"
                        >
                            Our Services
                        </motion.h2>
                        <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-slate-600 md:text-lg">
                            Execution-focused support models designed for steel plants where uptime, safety, and disciplined operations matter every day.
                        </p>
                    </motion.div>
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
                    >
                        {services.map((service, index) => {
                            const Icon = service.icon;
                            return (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    className={`group flex h-full flex-col rounded-[24px] border border-slate-200 bg-white p-7 shadow-[0_16px_40px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(15,23,42,0.12)] ${isLastServiceCard(index) ? 'md:col-span-2 md:max-w-[28rem] md:justify-self-center xl:col-span-1 xl:max-w-none' : ''}`}
                                >
                                    <div className="mb-5 flex items-start gap-4">
                                        <div className="flex h-[3.25rem] w-[3.25rem] flex-shrink-0 items-center justify-center rounded-2xl bg-[rgb(254,94,21)] shadow-lg shadow-[rgb(254,94,21)]/20">
                                            <Icon className="text-white" size={24} />
                                        </div>
                                        <h3 className="text-xl font-bold leading-snug text-[rgb(3,36,90)]">{service.title}</h3>
                                    </div>
                                    <p className="mt-auto text-base leading-8 text-slate-600">{service.description}</p>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </section>

            <section className="py-12 md:py-16 px-4 md:px-8 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="mb-12 text-center"
                    >
                        <span className="inline-flex items-center rounded-full border border-[rgb(3,36,90)]/10 bg-white px-4 py-1 text-sm font-semibold uppercase tracking-[0.2em] text-[rgb(3,36,90)]">
                            Operational Edge
                        </span>
                        <motion.h2
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="mt-4 text-3xl font-bold text-[rgb(3,36,90)] md:text-4xl"
                        >
                            Our Strengths
                        </motion.h2>
                    </motion.div>
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid gap-6 md:grid-cols-2"
                    >
                        {strengths.map((item, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className={`rounded-[22px] border border-slate-200 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-md ${isLastStrengthCard(index) ? 'md:col-span-2 md:max-w-[32rem] md:justify-self-center' : ''}`}
                            >
                                <div className="flex items-start gap-4">
                                    <div className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-[rgb(254,94,21)]/20 bg-[rgb(254,94,21)]/8">
                                        <CheckCircle2 className="text-[rgb(254,94,21)]" size={18} />
                                    </div>
                                    <span className="text-lg leading-8 text-slate-700">{item}</span>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            <section className="py-12 md:py-16 px-4 md:px-8 bg-white">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="mb-12 text-center"
                    >
                        <span className="inline-flex items-center rounded-full border border-[rgb(254,94,21)]/20 bg-[rgb(254,94,21)]/8 px-4 py-1 text-sm font-semibold uppercase tracking-[0.2em] text-[rgb(254,94,21)]">
                            Partnership Value
                        </span>
                        <motion.h2
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="mt-4 text-3xl font-bold text-[rgb(3,36,90)] md:text-4xl"
                        >
                            Why Choose Us
                        </motion.h2>
                    </motion.div>
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="overflow-hidden rounded-[30px] bg-gradient-to-r from-[rgb(3,36,90)] to-[rgb(6,52,126)] p-8 md:p-12"
                    >
                        <div className="mb-8 flex flex-col gap-3 border-b border-white/10 pb-8 md:flex-row md:items-end md:justify-between">
                            <p className="max-w-2xl text-base leading-8 text-white/80 md:text-lg">
                                We align plant-floor execution with measurable outcomes, combining trained teams, response discipline, and sector familiarity.
                            </p>
                            <div className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
                                Steel Sector Focus
                            </div>
                        </div>
                        <ul className="grid gap-5 md:grid-cols-2">
                            {reasonsToChoose.map((item, index) => (
                                <motion.li
                                    key={index}
                                    variants={itemVariants}
                                    className={`rounded-[22px] border border-white/10 bg-white/5 p-5 backdrop-blur-sm ${isLastReasonCard(index) ? 'md:col-span-2 md:max-w-[32rem] md:justify-self-center' : ''}`}
                                >
                                    <div className="flex items-start gap-4 text-white">
                                        <div className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-[rgb(254,94,21)]/15">
                                            <CheckCircle2 className="text-[rgb(254,94,21)]" size={18} />
                                        </div>
                                        <span className="text-lg leading-8">{item}</span>
                                    </div>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </section>
{/* 
            <section className="py-12 md:py-20 px-4 md:px-8 bg-[rgb(3,36,90)]">
                <div className="max-w-4xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-white mb-8 text-center"
                    >
                        Our Commitment
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-lg md:text-xl text-white/90 text-center leading-relaxed"
                    >
                        We are committed to delivering safe, efficient, and performance-driven solutions that enhance plant reliability and support our clients&apos; growth.
                    </motion.p>
                </div>
            </section> */}
        </main>
    );
}
