import Link from 'next/link';
import { Home, Settings } from 'lucide-react';

export default function ClientsPage() {
    return (
        <div className="w-full min-h-[120vh] py-20 flex items-center justify-center bg-slate-50 px-4 sm:px-6 lg:px-8">
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
    );
}