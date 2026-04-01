// 'use client';

// import Link from 'next/link';

// export default function Projects() {
//     const projectImages = [
//         "/project/project1.JPG",
//         "/project/project2.JPG",
//         "/project/project3.JPG",
//         "/project/project4.JPG",
//         "/project/project1.JPG",
//     ];

//     const scrollingImages = [...projectImages, ...projectImages];

//     return (
//         <main>
//             <style dangerouslySetInnerHTML={{
//                 __html: `
//                 @keyframes infinite-scroll {
//                     0% { transform: translateX(0); }
//                     100% { transform: translateX(-50%); }
//                 }
//                 .animate-infinite-scroll {
//                     animation: infinite-scroll 30s linear infinite;
//                     width: max-content;
//                 }
//                 .animate-infinite-scroll:hover {
//                     animation-play-state: paused;
//                 }
//             `}} />

//             <section className="relative h-96 bg-blue-950 text-white flex items-center overflow-hidden">
//                 <div className="absolute inset-0">
//                     <img
//                         src="/project/project4.JPG"
//                         alt="Contact banner"
//                         className="w-full h-full object-cover"
//                     />
//                 </div>

//                 <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-900/80 to-transparent"></div>

//                 <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
//                     <h1 className="text-5xl md:text-6xl font-bold mb-4">Projects</h1>
//                     <p className="text-lg text-gray-200 font-medium">
//                         <Link href="/" className="hover:text-[rgb(254,94,21)] transition">Home</Link>
//                         {' / '}
//                         <span className="text-gray-300">Pages</span>
//                         {' / '}
//                         <span className="text-[rgb(254,94,21)]">Projects</span>
//                     </p>
//                 </div>
//             </section>

//             <section className="py-20 bg-white overflow-hidden">
//                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
//                     <p className="text-[rgb(254,94,21)] font-bold text-lg mb-2 uppercase tracking-wide">
//                         OUR PROJECTS
//                     </p>
//                     <h2 className="text-4xl md:text-5xl font-extrabold text-[#03245a] leading-tight">
//                         See What We Have <br className="hidden md:block" />
//                         Completed Recently
//                     </h2>
//                 </div>

//                 <div className="w-full relative mt-16">
//                     <div className="flex animate-infinite-scroll cursor-pointer">
//                         {scrollingImages.map((src, index) => (
//                             <div 
//                                 key={index} 
//                                 className="w-[300px] md:w-[400px] h-[400px] md:h-[500px] flex-shrink-0 relative group"
//                             >
//                                 <div className="w-full h-full bg-slate-200">
//                                     <img
//                                         src={src}
//                                         alt={`Project ${index + 1}`}
//                                         className="w-full h-full object-cover"
//                                         onError={(e) => {
//                                             e.currentTarget.src = "https://via.placeholder.com/400x500?text=Project+Image";
//                                         }}
//                                     />
//                                 </div>
                            
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>
//         </main>
//     );
// }















import Link from 'next/link';
import { Home, Settings } from 'lucide-react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

export default function ClientsPage() {
    return (
        <div className="w-full overflow-hidden">
            <div className="w-full min-h-[90vh] py-20 flex items-center justify-center bg-slate-50 px-4 sm:px-6 lg:px-8">
            <div className="max-w-max mx-auto text-center sm:text-left">
                <main className="sm:flex justify-center items-center gap-12">
                    {/* The Big 404 */}
                    <p className="mt-20 text-8xl md:text-[150px] font-extrabold text-[rgb(254,94,21)] tracking-tight drop-shadow-sm">
                        404
                    </p>

                    {/* Divider for desktop */}
                    <div className="hidden sm:block w-px h-48 bg-gray-300 mx-4"></div>

                    <div className="mt-30 sm:mt-0">
                        <div className="flex items-center justify-center sm:justify-start gap-3">
                            <Settings className="w-8 h-8 md:w-10 md:h-10 text-[#03245a] animate-[spin_4s_linear_infinite]" />
                            <h1 className="text-4xl md:text-5xl font-bold text-[#03245a] tracking-tight">
                                Coming Soon!
                            </h1>
                        </div>

                        {/* Acha khasa gap heading aur text ke beech */}
                        <p className="mt-16 text-base md:text-lg text-slate-600 max-w-md mx-auto sm:mx-0 leading-relaxed">
                            Oops! It looks like the page you are looking for is currently under construction.
                        </p>
                        <p>We are working hard to bring this to life.</p>

                        {/* Button container mein proper gap aur smaller button */}
                        <div className="mt-16 flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
                            <Link
                                href="/"
                                // Button ko chhota kiya (px-5 py-2.5 aur text-sm)
                                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 border border-transparent text-sm font-medium rounded shadow-sm text-white bg-[rgb(254,94,21)] hover:bg-orange-600 transition-colors duration-200 w-max"
                            >
                                <Home size={18} />
                                Back to Homepage
                            </Link>
                        </div>
                    </div>
                </main>
            </div>
            </div>
        </div>
    );
}