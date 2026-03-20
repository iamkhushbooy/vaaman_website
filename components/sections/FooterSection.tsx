import Link from 'next/link';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram, ChevronRight as Chevron } from 'lucide-react';
import { PRIMARY, DARK } from '@/lib/data';

export function FooterSection() {
    return (
        <footer className="pt-20 pb-6 px-6" style={{ backgroundColor: DARK }}>
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-white/10">

                {/* Col 1 — Office */}
                <div>
                    <h5 className="text-white font-bold text-lg mb-6" style={{ fontFamily: 'Rubik, sans-serif' }}>Our Office</h5>
                    <div className="space-y-3 text-white/60 text-sm">
                        <div className="flex gap-3">
                            <MapPin size={16} className="flex-shrink-0 mt-0.5" style={{ color: PRIMARY }} />
                            <span>Vaaman Engineers (I) Limited,<br />Pan-India Operations</span>
                        </div>
                        <div className="flex gap-3 items-center">
                            <Phone size={16} className="flex-shrink-0" style={{ color: PRIMARY }} />
                            <span>+91 22 28925400</span>
                        </div>
                        <div className="flex gap-3 items-center">
                            <Mail size={16} className="flex-shrink-0" style={{ color: PRIMARY }} />
                            <span>info@vaamanengineers.com</span>
                        </div>
                    </div>
                    <div className="flex gap-3 mt-6">
                        {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                            <Link key={i} href="#" className="w-9 h-9 rounded-full flex items-center justify-center text-white transition hover:opacity-80" style={{ backgroundColor: PRIMARY }}>
                                <Icon size={14} />
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Col 2 — Quick Links */}
                <div>
                    <h5 className="text-white font-bold text-lg mb-6" style={{ fontFamily: 'Rubik, sans-serif' }}>Quick Links</h5>
                    <div className="space-y-2">
                        {[
                            { href: '/', label: 'Home' },
                            { href: '/about', label: 'About Us' },
                            { href: '/contact', label: 'Contact Us' },
                        ].map(link => (
                            <Link key={link.href} href={link.href} className="flex items-center gap-2 text-sm text-white/60 hover:text-orange-400 transition">
                                <Chevron size={14} style={{ color: PRIMARY }} />
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Col 3 — Business Hours */}
                <div>
                    <h5 className="text-white font-bold text-lg mb-6" style={{ fontFamily: 'Rubik, sans-serif' }}>Business Hours</h5>
                    <div className="space-y-3 text-sm text-white/60">
                        <div>
                            <p>Monday – Friday</p>
                            <p className="font-semibold text-white">09:00 am – 06:00 pm</p>
                        </div>
                        <div>
                            <p>Saturday</p>
                            <p className="font-semibold text-white">09:00 am – 02:00 pm</p>
                        </div>
                        <div>
                            <p>Sunday</p>
                            <p className="font-semibold text-white">Closed</p>
                        </div>
                    </div>
                </div>

                {/* Col 4 — Newsletter */}
                <div>
                    <h5 className="text-white font-bold text-lg mb-6" style={{ fontFamily: 'Rubik, sans-serif' }}>Newsletter</h5>
                    <p className="text-white/60 text-sm mb-4">Stay updated with our latest projects and news.</p>
                    <div className="flex">
                        <input
                            type="email"
                            placeholder="Your email"
                            className="flex-1 px-4 py-2 text-sm bg-white/10 text-white placeholder-white/40 border border-white/20 outline-none focus:border-orange-400"
                        />
                        <button
                            className="px-4 py-2 text-white text-sm font-semibold transition hover:brightness-110"
                            style={{ backgroundColor: PRIMARY, fontFamily: 'Rubik, sans-serif' }}
                        >
                            SignUp
                        </button>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="max-w-7xl mx-auto pt-8 text-center text-white/40 text-sm">
                © {new Date().getFullYear()} Vaaman Engineers (I) Limited. All Rights Reserved.
            </div>
        </footer>
    );
}
