'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Phone, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { DesktopNavItem, MobileNavItem, NavItem } from '@/components/nav-menu-item';

export function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Unified navigation structure with Sector as a main menu item
    const isActivePath = (href: string) => {
        const [pathOnly] = href.split('#');
        return pathname === pathOnly;
    };

    const navItems: NavItem[] = [
        { label: 'Home', href: '/' },
        {
            label: 'About Us',
            groupedDropdown: [
                {
                    label: 'Company Profile',
                    href: '/about/company-profile',
                    links: [
                        { label: 'Vision, Mission Values', href: '/about/vision-mission-values' },
                        { label: 'Milestone', href: '/about/milestone' },
                        { label: "MD's Corner", href: '/about/md-corner' },
                        { label: "CEO's Desk", href: '/about/ceos-desk' },
                    ]
                },
                {
                    label: 'Our People',
                    href: '/about/core-management-team',
                    links: [
                        { label: 'Core Management Team', href: '/about/core-management-team' },
                    ]
                },
                {
                    label: 'Safety',
                    href: '/about/initiatives',
                    links: [
                        { label: 'Initiatives', href: '/about/initiatives' },
                    ]
                }
            ]
        },
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
                { label: 'Manufacturing', href: '/sector/manufacturing' },
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
        // { label: 'Contact', href: '/contact' }
    ];

    return (
        <header className="bg-white sticky top-0 z-50">
            {/* Top Bar */}
            <div className="bg-[rgb(3,36,90)] text-white py-3 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-2 text-sm">
                        <Phone size={16} className="text-[rgb(254,94,21)]" />
                        <span>Call Us: +91 22 28925400</span>

                    </div>
                    {/* <div className="flex items-center gap-4">
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
                            <Link
                                href="https://www.linkedin.com/company/vaaman-engineers-india-limited/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-[rgb(254,94,21)] transition"
                            >
                                <Linkedin size={16} />
                            </Link>
                        </div>
                    </div> */}
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
                        <div className="hidden md:flex items-center gap-4 lg:gap-6 xl:gap-8">
                            {navItems.map((item) => (
                                <DesktopNavItem key={item.label} item={item} isActivePath={isActivePath} />
                            ))}
                        </div>

                        {/* CTA Button - Desktop */}
                        <div className="hidden xl:flex gap-4 shrink-0">
                            <Link
                                href="/contact"
                                className="px-6 py-2 bg-[rgb(254,94,21)] text-white font-semibold hover:bg-orange-600 transition rounded"
                            >
                                Contact
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
                        <div className="md:hidden pb-6 space-y-4 border-t border-gray-200 pt-4 max-h-[70vh] overflow-y-auto">
                            {navItems.map((item) => (
                                <MobileNavItem
                                    key={item.label}
                                    item={item}
                                    isActivePath={isActivePath}
                                    onNavigate={() => setIsOpen(false)}
                                />
                            ))}

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
