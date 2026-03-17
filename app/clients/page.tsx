import Link from 'next/link';
import { Home, Settings } from 'lucide-react';
import {
    ChevronRight,
} from 'lucide-react';
import { ClientsSection } from '@/components/sections/ClientsSection';
export default function ClientsPage() {
    return (
        <div className="w-full min-h-screen bg-slate-50 pb-20">
            <div className="bg-[rgb(3,36,90)] py-20 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    {/* Main Heading */}
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
                        Our Trusted <span className="text-[rgb(254,94,21)]">Clients</span>
                    </h1>

                    {/* Subtext */}
                    <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
                        Partnering with global industry leaders to deliver excellence in engineering and operational management.
                    </p>

                    {/* Breadcrumb */}
                    <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
                        <Link href="/" className="hover:text-white transition-colors">Home</Link>
                        <ChevronRight size={14} />
                        <span className="text-[rgb(254,94,21)] font-medium">Clients</span>
                    </div>
                </div>

                {/* Optional: Background Decoration to match the "overflow-hidden" logic */}
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-[rgb(254,94,21)] opacity-10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-64 h-64 bg-blue-500 opacity-10 rounded-full blur-3xl"></div>
            </div>
            <ClientsSection/>
        </div>
    );
}