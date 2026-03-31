'use client';

import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

export type NavLink = {
    label: string;
    href: string;
};

export type NavGroup = {
    label: string;
    href?: string;
    links: NavLink[];
};

export type NavItem = {
    label: string;
    href?: string;
    dropdown?: NavLink[];
    groupedDropdown?: NavGroup[];
};

type DesktopNavItemProps = {
    item: NavItem;
    isActivePath: (href: string) => boolean;
};

type MobileNavItemProps = {
    item: NavItem;
    isActivePath: (href: string) => boolean;
    onNavigate: () => void;
};

export function DesktopNavItem({ item, isActivePath }: DesktopNavItemProps) {
    if (item.groupedDropdown) {
        const isGroupedActive = item.groupedDropdown.some((group) =>
            (group.href ? isActivePath(group.href) : false) || group.links.some((link) => isActivePath(link.href))
        );

        return (
            <div key={item.label} className="relative group h-full flex items-center">
                <button
                    type="button"
                    className={`flex items-center gap-1 transition font-medium py-8 ${isGroupedActive ? 'text-[rgb(254,94,21)]' : 'text-[#03245a] hover:text-[rgb(254,94,21)]'
                        }`}
                >
                    {item.label} <ChevronDown size={18} />
                </button>

                <div className="absolute top-full left-0 mt-0 bg-slate-50 border border-gray-200 rounded-sm shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 min-w-[720px] p-6">
                    <div className="grid grid-cols-3 gap-6">
                        {item.groupedDropdown.map((group) => (
                            <div key={group.label} className="min-w-0">
                                <Link
                                    href={group.href || group.links[0].href}
                                    className="block text-lg font-bold text-[#03245a] hover:text-[rgb(254,94,21)] transition-colors mb-4"
                                >
                                    {group.label}
                                </Link>
                                <div className="space-y-2">
                                    {group.links.map((link) => {
                                        const isActive = isActivePath(link.href);
                                        return (
                                            <Link
                                                key={link.href}
                                                href={link.href}
                                                className={`block px-4 py-2 rounded-sm transition-colors duration-150 text-sm whitespace-nowrap ${isActive
                                                    ? 'text-[rgb(254,94,21)] font-semibold bg-slate-100'
                                                    : 'text-slate-700 hover:text-white hover:bg-[#ff3000]'
                                                    }`}
                                            >
                                                {link.label}
                                            </Link>
                                        );
                                    })}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    if (item.dropdown) {
        const isDropdownActive = item.dropdown.some((link) => isActivePath(link.href));

        return (
            <div key={item.label} className="relative group h-full flex items-center">
                <button
                    type="button"
                    className={`flex items-center gap-1 transition font-medium py-8 ${isDropdownActive ? 'text-[rgb(254,94,21)]' : 'text-[#03245a] hover:text-[rgb(254,94,21)]'
                        }`}
                >
                    {item.label} <ChevronDown size={18} />
                </button>

                <div className="absolute top-full left-0 mt-0 bg-slate-50 border border-gray-200 rounded-sm shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 w-max min-w-[200px]">
                    {item.dropdown.map((link) => {
                        const isActive = isActivePath(link.href);
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`block px-6 py-3 transition-colors duration-150 text-base text-center whitespace-nowrap ${isActive
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

    const isActive = item.href ? isActivePath(item.href) : false;
    return (
        <Link
            key={item.href}
            href={item.href || '#'}
            className={`transition font-medium ${isActive ? 'text-[rgb(254,94,21)]' : 'text-[#03245a] hover:text-[rgb(254,94,21)]'
                }`}
        >
            {item.label}
        </Link>
    );
}

export function MobileNavItem({ item, isActivePath, onNavigate }: MobileNavItemProps) {
    if (item.groupedDropdown) {
        const isGroupedActive = item.groupedDropdown.some((group) =>
            (group.href ? isActivePath(group.href) : false) || group.links.some((link) => isActivePath(link.href))
        );

        return (
            <div key={item.label} className="pl-4 space-y-4 border-l-2 border-orange-100 ml-2 py-2">
                <span className={`text-sm font-bold uppercase tracking-wider ${isGroupedActive ? 'text-[rgb(254,94,21)]' : 'text-[#03245a]'
                    }`}>
                    {item.label}
                </span>
                {item.groupedDropdown.map((group) => (
                    <div key={group.label} className="space-y-2">
                        <Link
                            href={group.href || group.links[0].href}
                            className="block font-semibold text-[#03245a] hover:text-[rgb(254,94,21)] transition"
                            onClick={onNavigate}
                        >
                            {group.label}
                        </Link>
                        <div className="pl-3 space-y-2 border-l border-orange-100">
                            {group.links.map((link) => {
                                const isActive = isActivePath(link.href);
                                return (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className={`block transition font-medium text-sm ${isActive ? 'text-[rgb(254,94,21)]' : 'text-slate-600 hover:text-[rgb(254,94,21)]'
                                            }`}
                                        onClick={onNavigate}
                                    >
                                        {link.label}
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>
        );
    }

    if (item.dropdown) {
        const isDropdownActive = item.dropdown.some((link) => isActivePath(link.href));

        return (
            <div key={item.label} className="pl-4 space-y-3 border-l-2 border-orange-100 ml-2 py-2">
                <span className={`text-sm font-bold uppercase tracking-wider ${isDropdownActive ? 'text-[rgb(254,94,21)]' : 'text-[#03245a]'
                    }`}>
                    {item.label}
                </span>
                {item.dropdown.map((link) => {
                    const isActive = isActivePath(link.href);
                    return (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`block transition font-medium ${isActive ? 'text-[rgb(254,94,21)]' : 'text-slate-600 hover:text-[rgb(254,94,21)]'
                                }`}
                            onClick={onNavigate}
                        >
                            {link.label}
                        </Link>
                    );
                })}
            </div>
        );
    }

    const isActive = item.href ? isActivePath(item.href) : false;
    return (
        <Link
            key={item.href}
            href={item.href || '#'}
            className={`block transition font-medium ${isActive ? 'text-[rgb(254,94,21)]' : 'text-[#03245a] hover:text-[rgb(254,94,21)]'
                }`}
            onClick={onNavigate}
        >
            {item.label}
        </Link>
    );
}
