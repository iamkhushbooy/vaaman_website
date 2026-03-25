'use client';

import Link from 'next/link';

export default function Projects() {
    const projectImages = [
        "/project/project1.JPG",
        "/project/project2.JPG",
        "/project/project3.JPG",
        "/project/project4.JPG",
        "/project/project1.JPG",
    ];

    const scrollingImages = [...projectImages, ...projectImages];

    return (
        <main>
            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes infinite-scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-infinite-scroll {
                    animation: infinite-scroll 30s linear infinite;
                    width: max-content;
                }
                .animate-infinite-scroll:hover {
                    animation-play-state: paused;
                }
            `}} />

            <section className="relative h-96 bg-blue-950 text-white flex items-center overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="/project/project4.JPG"
                        alt="Contact banner"
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-900/80 to-transparent"></div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <h1 className="text-5xl md:text-6xl font-bold mb-4">Projects</h1>
                    <p className="text-lg text-gray-200 font-medium">
                        <Link href="/" className="hover:text-[rgb(254,94,21)] transition">Home</Link>
                        {' / '}
                        <span className="text-gray-300">Pages</span>
                        {' / '}
                        <span className="text-[rgb(254,94,21)]">Projects</span>
                    </p>
                </div>
            </section>

            <section className="py-20 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
                    <p className="text-[rgb(254,94,21)] font-bold text-lg mb-2 uppercase tracking-wide">
                        OUR PROJECTS
                    </p>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-[#03245a] leading-tight">
                        See What We Have <br className="hidden md:block" />
                        Completed Recently
                    </h2>
                </div>

                <div className="w-full relative mt-16">
                    <div className="flex animate-infinite-scroll cursor-pointer">
                        {scrollingImages.map((src, index) => (
                            <div 
                                key={index} 
                                className="w-[300px] md:w-[400px] h-[400px] md:h-[500px] flex-shrink-0 relative group"
                            >
                                <div className="w-full h-full bg-slate-200">
                                    <img
                                        src={src}
                                        alt={`Project ${index + 1}`}
                                        className="w-full h-full object-cover"
                                        onError={(e) => {
                                            e.currentTarget.src = "https://via.placeholder.com/400x500?text=Project+Image";
                                        }}
                                    />
                                </div>
                            
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}