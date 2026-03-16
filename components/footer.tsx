'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram, ArrowUp } from 'lucide-react';

export function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer style={{ backgroundColor: 'rgb(3, 36, 90)' }} className="text-gray-300 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Our Office */}
                    <div>
                        <h4 className="text-lg font-bold text-white mb-6">Our Office</h4>
                        <div className="space-y-4">
                            <div className="flex gap-3">
                                <MapPin size={20} className="text-amber-500 flex-shrink-0 mt-0.5" />
                                <p className="text-gray-300">510, Sai Leela Commercial Complex, S.V.Road, Borivali (West), Mumbai-400092, India</p>
                            </div>
                            <div className="flex gap-3">
                                <Phone size={20} className="text-amber-500 flex-shrink-0 mt-0.5" />
                                <span className="text-gray-300">+91 9928036938</span>
                            </div>
                            <div className="flex gap-3">
                                <Mail size={20} className="text-amber-500 flex-shrink-0 mt-0.5" />
                                <span className="text-gray-300">info@example.com</span>
                            </div>
                        </div>
                        <div className="flex gap-3 mt-6">
                            <a href="#" className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center text-white hover:bg-amber-700 transition">
                                <Twitter size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center text-white hover:bg-amber-700 transition">
                                <Facebook size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center text-white hover:bg-amber-700 transition">
                                <Linkedin size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center text-white hover:bg-amber-700 transition">
                                <Instagram size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold text-white mb-6">Quick Links</h4>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/about" className="text-gray-300 hover:text-amber-500 transition flex items-center gap-2">
                                    <span className="text-amber-500">›</span> About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-gray-300 hover:text-amber-500 transition flex items-center gap-2">
                                    <span className="text-amber-500">›</span> Contact Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/services" className="text-gray-300 hover:text-amber-500 transition flex items-center gap-2">
                                    <span className="text-amber-500">›</span> Our Services
                                </Link>
                            </li>
                            <li>
                                <a href="#" className="text-gray-300 hover:text-amber-500 transition flex items-center gap-2">
                                    <span className="text-amber-500">›</span> Terms & Condition
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-300 hover:text-amber-500 transition flex items-center gap-2">
                                    <span className="text-amber-500">›</span> Support
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Business Hours */}
                    <div>
                        <h4 className="text-lg font-bold text-white mb-6">Business Hours</h4>
                        <div className="space-y-4">
                            <div>
                                <p className="text-white font-semibold">Monday - Friday</p>
                                <p className="text-gray-400">09:00 am - 07:00 pm</p>
                            </div>
                            <div>
                                <p className="text-white font-semibold">Saturday</p>
                                <p className="text-gray-400">09:00 am - 12:00 pm</p>
                            </div>
                            <div>
                                <p className="text-white font-semibold">Sunday</p>
                                <p className="text-gray-400">Closed</p>
                            </div>
                        </div>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="text-lg font-bold text-white mb-6">Newsletter</h4>
                            <p className="text-gray-300 mb-4">
                                Stay updated with the latest industry insights, project milestones, and company news from Vaaman.
                            </p>
                        <form className="flex">
                            <input
                                type="email"
                                placeholder="Your email"
                                className="flex-1 px-4 py-3 bg-transparent border border-gray-500 text-white placeholder-gray-500 focus:outline-none focus:border-white transition"
                            />
                            <button
                                type="submit"
                                className="px-6 py-3 bg-amber-500 text-white font-bold hover:bg-amber-600 transition"
                            >
                                SignUp
                            </button>
                        </form>
                    </div>
                </div>

                {/* Bottom */}
                <div className="border-t border-[rgb(5,47,116)] pt-8 text-center">
                    <p className="text-gray-400 text-sm">
                        Copyright © <span className="text-amber-500 font-semibold">Vaaman Engineers</span>, All Right Reserved. <br />
                    </p>
                </div>
            </div>

            {/* Scroll to top button */}
            <button
                onClick={scrollToTop}
                className="fixed bottom-8 right-8 w-12 h-12 bg-amber-500 text-white rounded-full flex items-center justify-center hover:bg-amber-600 transition shadow-lg z-40"
                aria-label="Scroll to top"
            >
                <ArrowUp size={20} />
            </button>
        </footer>
    );
}
