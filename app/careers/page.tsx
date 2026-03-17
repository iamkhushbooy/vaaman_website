import React from 'react';
import Link from 'next/link';
import {
    ChevronRight,
    GraduationCap,
    Banknote,
    Users,
    Briefcase,
    HeartPulse,
    Linkedin,
    Mail
} from 'lucide-react';

export default function CareersPage() {
    // Array of benefits to map through for a clean grid layout
    const benefits = [
        {
            title: "Professional Development",
            description: "Comprehensive professional development and training.",
            icon: <GraduationCap size={32} className="text-[rgb(254,94,21)]" />
        },
        {
            title: "Competitive Pay",
            description: "Competitive compensation packages.",
            icon: <Banknote size={32} className="text-[rgb(254,94,21)]" />
        },
        {
            title: "Diversity & Inclusion",
            description: "A culture of diversity and inclusion.",
            icon: <Users size={32} className="text-[rgb(254,94,21)]" />
        },
        {
            title: "Impactful Projects",
            description: "Opportunities to work on challenging and impactful projects.",
            icon: <Briefcase size={32} className="text-[rgb(254,94,21)]" />
        },
        {
            title: "Health & Wellness",
            description: "Health and wellness programs.",
            icon: <HeartPulse size={32} className="text-[rgb(254,94,21)]" />
        }
    ];

    return (
        <div className="w-full min-h-screen bg-slate-50 pb-20">
            {/* Hero Section */}
            <div className="bg-[rgb(3,36,90)] py-20 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
                        Careers at <span className="text-[rgb(254,94,21)]">Vaaman</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
                        Shape the future of bulk material handling and metal production with us.
                    </p>

                    {/* Breadcrumb */}
                    <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
                        <Link href="/" className="hover:text-white transition-colors">Home</Link>
                        <ChevronRight size={14} />
                        <span className="text-[rgb(254,94,21)] font-medium">Careers</span>
                    </div>
                </div>
            </div>

            {/* Why Join Section */}
            <section className="max-w-7xl mx-auto px-6 py-8 ">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#03245a] mb-6">
                        Why Join Vaaman Engineers
                    </h2>
                    <div className="w-16 h-1.5 bg-[rgb(254,94,21)] mx-auto mb-10"></div>
                    {/* Increased line-height and constrained width */}
                    <p className="text-lg text-slate-600 leading-loose ">
                        Embark on a transformative career with Vaaman Engineers, a leader in industrial services. We offer a dynamic environment where innovation, commitment, and excellence are not just valued, they are rewarded. Join us to be a part of a company that is shaping the future of bulk material handling and metal production.
                    </p>
                </div>
            </section>

            {/* Benefits Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#03245a] mb-4">
                        Benefits of Working at Vaaman Engineers
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Discover a world where your talents are acknowledged and your growth is prioritized. At Vaaman Engineers, we offer a vibrant work culture filled with opportunities, ensuring every team member thrives both professionally and personally.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 justify-center">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-4 border-transparent hover:border-[rgb(254,94,21)] flex flex-col items-center text-center group"
                        >
                            <div className="p-4 bg-orange-50 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                                {benefit.icon}
                            </div>
                            <h3 className="text-xl font-bold text-[#03245a] mb-3">
                                {benefit.title}
                            </h3>
                            <p className="text-slate-600">
                                {benefit.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Open Positions & CTA Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 py-8">
                <div className="bg-[#03245a] rounded-2xl p-8 md:p-12 text-center shadow-2xl relative overflow-hidden">
                    {/* Decorative background element */}
                    <div className="absolute top-0 left-0 w-full h-2 bg-[rgb(254,94,21)]"></div>

                    <h2 className="text-3xl md:text-4xl font-bold text-[#03245a] mb-6">
                        Open Positions at Vaaman Engineers
                    </h2>
                    <p className="text-lg text-white max-w-2xl mx-auto mb-5">
                        Ready to make a significant impact in the industrial service sector? Vaaman Engineers is looking for motivated individuals to join our team. We are committed to equal opportunity and welcome candidates from diverse backgrounds. Please check our LinkedIn page or website for current openings and apply with your resume and a cover letter. We look forward to discovering how your skills and passions align with our mission.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                        <a
                            href="https://www.linkedin.com/company/vaaman-engineers"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-[#0A66C2] text-white font-semibold rounded hover:bg-[#004182] transition-colors duration-200"
                        >
                            <Linkedin size={20} />
                            Check LinkedIn
                        </a>

                        <a
                            href="mailto:info@vaaman.com"
                            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 text-white bg-[rgb(254,94,21)] font-semibold transition-colors duration-200"
                        >
                            <Mail size={20} />
                            Email Your Resume
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}