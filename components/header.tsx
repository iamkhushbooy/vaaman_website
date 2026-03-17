'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Phone, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const PRIMARY = '#FF5E14';
const DARK = '#02245B';

const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
];

export function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50">

            {/* ── Top Bar ── */}
            <div className="hidden lg:flex items-center justify-between px-8 text-white text-sm" style={{ backgroundColor: DARK, height: '45px' }}>

                {/* Left: Follow Us */}
                <div className="flex items-center gap-3">
                    <span>Follow Us:</span>
                    <div className="flex items-center gap-3">
                        <Link href="#" className="hover:text-orange-400 transition"><Facebook size={14} /></Link>
                        <Link href="#" className="hover:text-orange-400 transition"><Twitter size={14} /></Link>
                        <Link href="#" className="hover:text-orange-400 transition"><Instagram size={14} /></Link>
                        <Link href="#" className="hover:text-orange-400 transition"><Linkedin size={14} /></Link>
                    </div>
                </div>

                {/* Right: Phone — orange skewed pill */}
                <div className="relative flex items-center">
                    {/* skewed orange bg */}
                    <div className="absolute inset-0" style={{ backgroundColor: PRIMARY, transform: 'skewX(-30deg)', left: '-15px', right: '-15px' }} />
                    <Link href="tel:+919928036938" className="relative flex items-center gap-2 px-6 font-medium text-white py-3">
                        <Phone size={13} />
                        Call Us: &nbsp;+91 99280 36938
                    </Link>
                </div>
            </div>

            {/* ── Main Navbar ── */}
            <nav className="bg-white shadow-sm">
                <div className="flex items-center" style={{ height: '80px' }}>

                    {/* Brand — orange area with diagonal-cut right edge */}
                    <div className="relative flex items-center h-full flex-shrink-0" style={{ minWidth: '220px', backgroundColor: PRIMARY }}>
                        {/* white diagonal wedge on right to create the angled cut */}
                        <div className="absolute top-0 right-0 h-full bg-white"
                            style={{ width: '45px', transform: 'skewX(-15deg) translateX(22px)' }} />
                        <Link href="/" className="relative z-10 flex items-center px-8 h-full">
                            <span className="text-white font-bold text-2xl tracking-wide" style={{ fontFamily: 'Rubik, sans-serif' }}>
                                VAAMAN
                            </span>
                        </Link>
                    </div>

                    {/* Desktop nav — ml-auto pushes to the right like Industrio */}
                    <div className="hidden lg:flex items-center gap-8 ml-auto pr-0">
                        {navLinks.map(link => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="font-semibold text-base transition-colors hover:text-orange-500"
                                style={{ color: DARK, fontFamily: 'Rubik, sans-serif' }}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* Get A Quote button */}
                    <div className="hidden lg:flex items-center h-full ml-6">
                        <Link
                            href="/contact"
                            className="flex items-center h-full px-8 text-white font-semibold text-sm transition hover:brightness-110"
                            style={{ backgroundColor: PRIMARY, fontFamily: 'Rubik, sans-serif' }}
                        >
                            Get A Quote
                        </Link>
                    </div>

                    {/* Mobile toggle */}
                    <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden ml-auto mr-5 p-2" style={{ color: DARK }}>
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile dropdown */}
                {isOpen && (
                    <div className="lg:hidden px-6 pb-6 pt-2 space-y-1 border-t border-gray-100">
                        {navLinks.map(link => (
                            <Link key={link.href} href={link.href}
                                className="block py-3 font-semibold border-b border-gray-100"
                                style={{ color: DARK }}
                                onClick={() => setIsOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link href="/contact"
                            className="block px-6 py-3 text-white font-semibold text-center mt-3"
                            style={{ backgroundColor: PRIMARY }}
                            onClick={() => setIsOpen(false)}
                        >
                            Get A Quote
                        </Link>
                    </div>
                )}
            </nav>
        </header>
    );
}
