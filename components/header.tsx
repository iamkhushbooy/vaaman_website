'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Phone, Facebook, Twitter, Instagram, Linkedin, ChevronDown } from 'lucide-react';
import { usePathname } from 'next/navigation';

type DropdownItem = {
    label: string;
    href: string;
};

type NavItem = {
    label: string;
    href?: string;
    dropdown?: DropdownItem[];
};

export function Header() {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null); 
    const pathname = usePathname();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const navItems: NavItem[] = [
        { label: 'Home', href: '/' },
        { label: 'About Us', href: '/about' },
        {
            label: 'Services',
            dropdown: [
                { label: 'Operation and Maintenance', href: '/services/operation-and-maintenance' },
                { label: 'Material Handling', href: '/services/material-handling' },
                { label: 'Project Services/EPC', href: '/services/project' },
                { label: 'Value Engineering', href: '/services/value-engineering' },
            ]
        },
        {
            label: 'Sector',
            dropdown: [
                { label: 'Aluminum', href: '/sector/aluminum' },
                { label: 'Steel', href: '/sector/steel' },
                { label: 'Cable & Conductor', href: '/sector/cable-conductor' },
                { label: 'Port', href: '/sector/port' },
                { label: 'Zinc', href: '/sector/zinc' },
            ]
        },
        { label: 'Clients', href: '/clients' },
        { label: 'Careers', href: '/careers' },
        {
            label: 'Media',
            dropdown: [
                { label: 'Awards', href: '/media/awards' },
                { label: 'Gallery', href: '/media/gallery' },
            ]
        },
        { label: 'Contact', href: '/contact' }
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
                            <div className="w-30 h-30 flex items-center justify-center overflow-hidden">
                                <img
                                    src="/vaamanLogo.jpeg"
                                    alt="Company Logo"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                        </Link>

                        {/* Desktop & Tablet Navigation */}
                        <div className="hidden md:flex items-center gap-4 lg:gap-6 xl:gap-8">
                            {navItems.map((item) => {
                                // Dropdown Menu Logic
                                if (item.dropdown) {
                                    const isDropdownActive = item.dropdown.some(link => pathname === link.href);
                                    return (
                                        <div 
                                            key={item.label} 
                                            className="relative h-full flex items-center"
                                            onMouseEnter={() => setActiveDropdown(item.label)}
                                            onMouseLeave={() => setActiveDropdown(null)}
                                        >
                                            <button 
                                                onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                                                className={`flex items-center gap-1 transition font-medium py-8 ${
                                                    isDropdownActive ? 'text-[rgb(254,94,21)]' : 'text-[#03245a] hover:text-[rgb(254,94,21)]'
                                                }`}
                                            >
                                                {item.label} <ChevronDown size={18} />
                                            </button>

                                            <div className={`absolute top-full left-0 mt-0 bg-slate-50 border border-gray-200 rounded-sm shadow-lg transition-all duration-200 z-50 w-max min-w-[200px] ${
                                                activeDropdown === item.label ? 'opacity-100 visible' : 'opacity-0 invisible'
                                            }`}>
                                                {item.dropdown.map((link) => {
                                                    const isActive = pathname === link.href;
                                                    return (
                                                        <Link
                                                            key={link.href}
                                                            href={link.href}
                                                            onClick={() => setActiveDropdown(null)} 
                                                            className={`block px-6 py-3 transition-colors duration-150 text-base text-center whitespace-nowrap ${
                                                                isActive
                                                                    ? 'text-[rgb(254,94,21)] font-bold bg-slate-100'
                                                                    : 'text-slate-700 hover:text-white hover:bg-[#ff3000]'
                                                            }`}
                                                        >
                                                            {link.label}
                                                        </Link>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    );
                                }

                                // Standard Link Logic (item.href zaroor hona chahiye yahan)
                                const isActive = item.href ? pathname === item.href : false;
                                return item.href ? (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className={`transition font-medium ${isActive ? 'text-[rgb(254,94,21)]' : 'text-[#03245a] hover:text-[rgb(254,94,21)]'
                                            }`}
                                    >
                                        {item.label}
                                    </Link>
                                ) : null;
                            })}
                        </div>

                        {/* CTA Button - Desktop */}
                        <div className="hidden xl:flex gap-4 shrink-0">
                            <Link
                                href="/contact"
                                className="px-6 py-2 bg-[rgb(254,94,21)] text-white font-semibold hover:bg-orange-600 transition"
                            >
                                Get Quote
                            </Link>
                        </div>

                        {/* Mobile Menu Toggle Button */}
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
                        <div className="md:hidden pb-6 space-y-4 border-t border-gray-200 pt-4 max-h-[70vh] overflow-y-auto">
                            {navItems.map((item) => {
                                if (item.dropdown) {
                                    const isDropdownActive = item.dropdown.some(link => pathname === link.href);
                                    return (
                                        <div key={item.label} className="pl-4 space-y-3 border-l-2 border-orange-100 ml-2 py-2">
                                            <span className={`text-sm font-bold uppercase tracking-wider ${isDropdownActive ? 'text-[rgb(254,94,21)]' : 'text-[#03245a]'
                                                }`}>
                                                {item.label}
                                            </span>
                                            {item.dropdown.map((link) => {
                                                const isActive = pathname === link.href;
                                                return (
                                                    <Link
                                                        key={link.href}
                                                        href={link.href}
                                                        className={`block transition font-medium ${isActive ? 'text-[rgb(254,94,21)]' : 'text-slate-600 hover:text-[rgb(254,94,21)]'
                                                            }`}
                                                        onClick={() => setIsOpen(false)}
                                                    >
                                                        {link.label}
                                                    </Link>
                                                );
                                            })}
                                        </div>
                                    );
                                }

                                const isActive = item.href ? pathname === item.href : false;
                                return item.href ? (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className={`block transition font-medium ${isActive ? 'text-[rgb(254,94,21)]' : 'text-[#03245a] hover:text-[rgb(254,94,21)]'
                                            }`}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {item.label}
                                    </Link>
                                ) : null;
                            })}

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