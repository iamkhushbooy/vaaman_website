'use client';

import { Mail, Phone, Check } from 'lucide-react';
import { motion } from 'framer-motion';

const highlights = [
    'Bulk Material Handling',
    'Metal Production Services',
    'Industrial Operations',
    'Maintenance Solutions',
    'ISO 9001:2015 Quality Standards',
];

export default function CompanyProfileSection() {
    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* LEFT SIDE: Text Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-orange-500 font-semibold uppercase mb-3 text-sm tracking-widest">
                            About Us
                        </p>
                        <h1 className="text-4xl font-extrabold text-[#002147] mb-2 ">
                            Welcome to Vaaman Engineers
                        </h1>
                        <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                            Established by <strong>Shri Surendra Pratap Singh</strong>, Vaaman Engineers is an esteemed industry service partner dedicated to providing top-tier industrial services. With a focus on bulk material handling and metal production, we bring over three decades of unparalleled expertise to every project.
                        </p>
                        <p className="text-gray-600 mb-10 leading-relaxed text-lg">
                            Our ISO 9001:2015 certification stands as a testament to our unwavering dedication to quality, innovation, and sustainability. As we continue our journey, we remain steadfast in our mission to redefine industry standards and exceed client expectations.
                        </p>

                        <div className="flex items-start gap-10 mb-5">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                className="bg-orange-500 text-white p-8 px-10 text-center rounded-sm flex-shrink-0"
                            >
                                <h2 className="text-6xl font-extrabold mb-1">35</h2>
                                <p className="text-sm font-bold uppercase leading-tight">Years of</p>
                                <p className="text-sm font-bold uppercase leading-tight">Legacy</p>
                            </motion.div>

                            <div className="space-y-3 text-sm text-gray-600">
                                {highlights.map((item, idx) => (
                                    <motion.p
                                        key={item}
                                        initial={{ x: 20, opacity: 0 }}
                                        whileInView={{ x: 0, opacity: 1 }}
                                        transition={{ delay: 0.1 * idx }}
                                        className="flex items-center"
                                    >
                                        <Check className="text-orange-500 w-5 h-5 stroke-[4px] mr-2" />
                                        {item}
                                    </motion.p>
                                ))}
                            </div>
                        </div>

                        {/* Contact Footer */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 pt-6 border-t border-gray-100 mt-6">
                            <div className="flex items-center gap-4">
                                <div className="bg-orange-500 text-white p-3 rounded-full">
                                    <Mail className="w-4 h-4" />
                                </div>
                                <div>
                                    <p className="text-gray-500 text-sm">Email us</p>
                                    <p className="font-bold text-[#002147]">enquiry@vaaman.in</p>
                                    <p className="font-bold text-[#002147]">business.development@vaaman.in</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="bg-orange-500 text-white p-3 rounded-full">
                                    <Phone className="w-4 h-4 fill-current" />
                                </div>
                                <div>
                                    <p className="text-gray-500 text-sm">Call us</p>
                                    <p className="font-bold text-[#002147]">+91 22 28925400</p>
                                    <p className="font-bold text-[#002147]">28625400/28615400/2862501</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <img
                            src="/about_img1.png"
                            alt="Vaaman Engineers Industrial Service"
                            // Fixed height added (h-[450px]) - change this value as needed
                            className="w-full h-[780px] object-cover rounded-md shadow-lg"
                        />

                        {/* Decorative background box */}
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-orange-500/10 -z-10 rounded-md"></div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}


















