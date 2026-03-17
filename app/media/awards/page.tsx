import React from 'react';
import { Trophy, Award, Star, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function AwardsPage() {
    // Dummy data for awards - replace with your actual data
    const awardsData = [
        {
            id: 1,
            title: "Excellence in Engineering Excellence",
            year: "2025",
            organization: "Industrial Leaders Forum",
            description: "Recognized for outstanding contributions to industrial engineering, safety standards, and sustainable project execution.",
            icon: <Trophy size={40} className="text-[rgb(254,94,21)]" />
        },
        {
            id: 2,
            title: "Best EPC Contractor",
            year: "2024",
            organization: "National Builders Association",
            description: "Awarded for completing complex material handling and port projects ahead of schedule with zero safety incidents.",
            icon: <Award size={40} className="text-[rgb(254,94,21)]" />
        },
        {
            id: 3,
            title: "Safety First Award",
            year: "2023",
            organization: "Global Industrial Safety Council",
            description: "Honored for maintaining over 1 million safe man-hours during the operations and maintenance of major steel plants.",
            icon: <Star size={40} className="text-[rgb(254,94,21)]" />
        },
        {
            id: 4,
            title: "Innovation in Value Engineering",
            year: "2023",
            organization: "Tech & Infrastructure Awards",
            description: "Acknowledged for implementing cost-effective, innovative engineering solutions in the aluminum and zinc sectors.",
            icon: <Trophy size={40} className="text-[rgb(254,94,21)]" />
        },
        {
            id: 5,
            title: "Top 50 Industrial Companies",
            year: "2022",
            organization: "Business Standard",
            description: "Ranked among the top 50 fastest-growing engineering and maintenance firms in the country.",
            icon: <Award size={40} className="text-[rgb(254,94,21)]" />
        },
        {
            id: 6,
            title: "Sustainability Champion",
            year: "2021",
            organization: "Green Environment Initiative",
            description: "Awarded for minimizing environmental impact and promoting green energy usage in heavy industrial sectors.",
            icon: <Star size={40} className="text-[rgb(254,94,21)]" />
        }
    ];

    return (
        <div className="w-full min-h-screen bg-slate-50 pb-20">
            {/* Hero Section */}
            <div className="bg-[rgb(3,36,90)] py-20 relative overflow-hidden">
                {/* Optional background pattern/overlay */}
                <div className="absolute inset-0 opacity-10 bg-[url('/pattern-placeholder.png')] bg-cover bg-center"></div>
                
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
                        Awards & <span className="text-[rgb(254,94,21)]">Recognitions</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
                        Celebrating our commitment to engineering excellence, safety, and innovation across multiple industrial sectors.
                    </p>
                    
                    {/* Breadcrumb */}
                    <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
                        <Link href="/" className="hover:text-white transition-colors">Home</Link>
                        <ChevronRight size={14} />
                        <span>Media</span>
                        <ChevronRight size={14} />
                        <span className="text-[rgb(254,94,21)] font-medium">Awards</span>
                    </div>
                </div>
            </div>

            {/* Awards Grid Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {awardsData.map((award) => (
                        <div 
                            key={award.id} 
                            className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-8 border-t-4 border-[rgb(254,94,21)] group flex flex-col h-full"
                        >
                            <div className="flex justify-between items-start mb-6">
                                <div className="p-3 bg-orange-50 rounded-lg group-hover:scale-110 transition-transform duration-300">
                                    {award.icon}
                                </div>
                                <span className="bg-[rgb(3,36,90)] text-white text-sm font-bold px-4 py-1.5 rounded-full">
                                    {award.year}
                                </span>
                            </div>
                            
                            <h3 className="text-xl font-bold text-[#03245a] mb-2">
                                {award.title}
                            </h3>
                            
                            <p className="text-sm font-semibold text-[rgb(254,94,21)] mb-4 uppercase tracking-wide">
                                {award.organization}
                            </p>
                            
                            <p className="text-slate-600 leading-relaxed flex-grow">
                                {award.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            
            {/* Optional Call to Action at the bottom */}
            <div className="max-w-4xl mx-auto mt-20 text-center px-4">
                <h2 className="text-2xl font-bold text-[#03245a] mb-4">Partner with an Award-Winning Team</h2>
                <Link 
                    href="/contact" 
                    className="inline-flex items-center justify-center px-8 py-3 bg-[rgb(254,94,21)] text-white font-semibold rounded hover:bg-orange-600 transition-colors duration-200"
                >
                    Get in Touch
                </Link>
            </div>
        </div>
    );
}