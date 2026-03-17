'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Phone, Facebook, Twitter, Instagram, Linkedin, ChevronDown } from 'lucide-react';
import { usePathname } from 'next/navigation';

export function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const mainLinks = [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About' },
        { href: '/services', label: 'Services' },
    ];

    const pageLinks = [
        { href: '/projects', label: 'Projects' },
        { href: '/features', label: 'Features' },
        { href: '/team', label: 'Our Team' },
        { href: '/testimonial', label: 'Testimonial' },
        { href: '/404', label: '404 Page' },
    ];

    const isPagesActive = pageLinks.some(link => pathname === link.href);

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
                            <div className="w-30 h-30 flex items-center justify-center overflow-hidden">
                                <img
                                    src="/vaamanLogo.jpeg"
                                    alt="Company Logo"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-8">
                            {/* 1. Home, About, Services */}
                            {mainLinks.map((link) => {
                                const isActive = pathname === link.href;
                                return (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className={`transition font-medium ${
                                            isActive ? 'text-[rgb(254,94,21)]' : 'text-[#03245a] hover:text-[rgb(254,94,21)]'
                                        }`}
                                    >
                                        {link.label}
                                    </Link>
                                );
                            })}

                            {/* 2. Pages Dropdown */}
                            <div className="relative group h-full flex items-center">
                                <button className={`flex items-center gap-1 transition font-medium py-8 ${
                                    isPagesActive ? 'text-[rgb(254,94,21)]' : 'text-[#03245a] hover:text-[rgb(254,94,21)]'
                                }`}>
                                    Pages <ChevronDown size={18} />
                                </button>
                                {/* Dropdown menu container */}
                                <div className="absolute top-full left-0 mt-0 w-48 bg-slate-50 border border-gray-200 rounded-sm shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                                    {pageLinks.map((link) => {
                                        // Check if this specific dropdown link is active
                                        const isActive = pathname === link.href;
                                        return (
                                            <Link
                                                key={link.href}
                                                href={link.href}
                                                className={`block px-4 py-2.5 transition-colors duration-150 ${
                                                    isActive 
                                                    ? 'text-[rgb(254,94,21)] font-bold bg-slate-100' // Active state styling
                                                    : 'text-slate-700 hover:text-white hover:bg-[#ff3000]' // Default/Hover styling
                                                }`}
                                            >
                                                {link.label}
                                            </Link>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* 3. Contact Link */}
                            <Link 
                                href="/contact" 
                                className={`transition font-medium ${
                                    pathname === '/contact' ? 'text-[rgb(254,94,21)]' : 'text-[#03245a] hover:text-[rgb(254,94,21)]'
                                }`}
                            >
                                Contact
                            </Link>
                        </div>

                        {/* CTA Button - Desktop */}
                        <div className="hidden md:flex gap-4">
                            <Link
                                href="/contact"
                                className="px-6 py-2 bg-[rgb(254,94,21)] text-white font-semibold hover:bg-orange-600 transition"
                            >
                                Get Quote
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={toggleMenu}
                            className="md:hidden p-2 hover:bg-gray-100 rounded transition text-[#03245a]"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>

                    {/* Mobile Navigation */}
                    {isOpen && (
                        <div className="md:hidden pb-6 space-y-4 border-t border-gray-200 pt-4">
                            {/* 1. Home, About, Services */}
                            {mainLinks.map((link) => {
                                const isActive = pathname === link.href;
                                return (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className={`block transition font-medium ${
                                            isActive ? 'text-[rgb(254,94,21)]' : 'text-[#03245a] hover:text-[rgb(254,94,21)]'
                                        }`}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.label}
                                    </Link>
                                );
                            })}
                            
                            {/* 2. Pages links (Mobile view) */}
                            <div className="pl-4 space-y-3 border-l-2 border-orange-100 ml-2 py-2">
                                <span className={`text-sm font-bold uppercase tracking-wider ${
                                    isPagesActive ? 'text-[rgb(254,94,21)]' : 'text-[#03245a]'
                                }`}>
                                    Pages
                                </span>
                                {pageLinks.map((link) => {
                                    const isActive = pathname === link.href;
                                    return (
                                        <Link
                                            key={link.href}
                                            href={link.href}
                                            className={`block transition font-medium ${
                                                isActive ? 'text-[rgb(254,94,21)]' : 'text-slate-600 hover:text-[rgb(254,94,21)]'
                                            }`}
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {link.label}
                                        </Link>
                                    );
                                })}
                            </div>

                            {/* 3. Contact Link */}
                            <Link 
                                href="/contact" 
                                className={`block transition font-medium ${
                                    pathname === '/contact' ? 'text-[rgb(254,94,21)]' : 'text-[#03245a] hover:text-[rgb(254,94,21)]'
                                }`}
                                onClick={() => setIsOpen(false)}
                            >
                                Contact
                            </Link>

                            <div className="pt-4 border-t border-gray-200">
                                <Link
                                    href="/contact"
                                    className="block px-6 py-2 bg-[rgb(254,94,21)] text-white rounded font-semibold hover:bg-orange-600 transition text-center"
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