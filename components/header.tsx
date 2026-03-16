'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Phone, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const navLinks = [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About' },
        { href: '/services', label: 'Services' },
        { href: '/projects', label: 'Projects' },
        { href: '/contact', label: 'Contact' },
    ];

    return (
        <header className="bg-white sticky top-0 z-50">
            {/* Top Bar */}
            <div className="bg-[rgb(3,36,90)] text-white py-3 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-2 text-sm">
                        <Phone size={16} className="text-[rgb(254,94,21)]" />
                        <span>Call Us: +91 9928036938</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <span className="text-sm">Follow Us:</span>
                        <div className="flex gap-3">
                            <Link href="#" className="hover:text-[rgb(254,94,21)] transition">
                                <Facebook size={16} />
                            </Link>
                            <Link href="#" className="hover:text-[rgb(254,94,21)] transition">
                                <Twitter size={16} />
                            </Link>
                            <Link href="#" className="hover:text-[rgb(254,94,21)] transition">
                                <Instagram size={16} />
                            </Link>
                            <Link href="#" className="hover:text-[rgb(254,94,21)] transition">
                                <Linkedin size={16} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Header */}
            <nav className="border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16 md:h-20">
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-2 font-bold text-slate-900">
                            <div className="w-20 h-20 flex items-center justify-center overflow-hidden">
                                <img
                                    src="/logo.jpeg"
                                    alt="Company Logo"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            {/* <span className="hidden sm:inline text-xl md:text-2xl">Manufacturing</span> */}
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="text-slate-600 hover:text-[rgb(254,94,21)] transition font-medium"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>

                        {/* CTA Button - Desktop */}
                        <div className="hidden md:flex gap-4">
                            <Link
                                href="/contact"
                                className="px-6 py-2 bg-[rgb(254,94,21)] text-white font-semibold hover:bg-[rgb(254,94,21)] transition"
                            >
                                Get Quote
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={toggleMenu}
                            className="md:hidden p-2 hover:bg-gray-100 rounded transition text-slate-900"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>

                    {/* Mobile Navigation */}
                    {isOpen && (
                        <div className="md:hidden pb-6 space-y-4 border-t border-gray-200 pt-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="block text-slate-600 hover:text-[rgb(254,94,21)] transition font-medium"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <div className="pt-4 border-t border-gray-200">
                                <Link
                                    href="/contact"
                                    className="block px-6 py-2 bg-[rgb(254,94,21)] text-white rounded font-semibold hover:bg-[rgb(255,90,14)] transition text-center"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Get Quote
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
            </nav>
        </header>
    );
}