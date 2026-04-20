'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const sliderImages = [
  "/sefty_images/safty1.jpg",
  "/sefty_images/sefty2.jpg",
  "/sefty_images/sefty3.jpg",
  "/sefty_images/sefty4.jpg",
  "/sefty_images/sefty5.jpg",
  "/sefty_images/sefty6.jpg",
  "/sefty_images/sefty7.jpg",
  "/sefty_images/sefty8.jpg",
  "/sefty_images/sefty9.jpg",
  "/sefty_images/sefty10.jpg",


];
type SafetySectionProps = {
  variant?: 'default' | 'initiatives';
};

const safetyTools = [
  'Open Reporting',
  'Behaviour Based Safety',
  'Visible Felt Leadership',
  'Reward & Recognition',
  'Roko Toko',
  'Right to Refuse',
  'Regular Audit',
  'Score Card & Quarterly Award',
];

export default function SafetyModule({ variant = 'default' }: SafetySectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === sliderImages.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? sliderImages.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="safety" className=" bg-white overflow-hidden scroll-mt-32">
      {/* slider */}
      <div className="max-w-[1800px] mx-auto px-3 mb-28">
        <div className="relative w-full h-[600px] md:h-[750px] bg-gray-100 rounded-2xl overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] border-[12px] border-white">

          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <img
                src={sliderImages[currentIndex]}
                className="w-full h-full object-cover"
                alt={`Safety Phase ${currentIndex + 1}`}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent" />
            </motion.div>
          </AnimatePresence>

          {/* Slider Content Overlay */}
          <div className="absolute inset-0 flex flex-col justify-center px-16 z-10 pointer-events-none">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              key={`text-${currentIndex}`}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              {/* <p className="text-orange-500 font-black tracking-[0.4em] uppercase text-sm mb-4">Safety Initiative Gallery</p> */}
              {/* <h3 className="text-white text-6xl font-black leading-tight">Onsite Excellence <br/> <span className="text-orange-500 text-4xl">Phase 0{currentIndex + 1}</span></h3> */}
            </motion.div>
          </div>

          {/* Professional Controls */}
          <div className="absolute bottom-12 right-12 flex gap-4 z-20">
            <button
              onClick={prevSlide}
              className="w-12 h-12 bg-white/10 hover:bg-orange-500 backdrop-blur-xl text-white rounded-full flex items-center justify-center transition-all border border-white/20"
            >
              <FontAwesomeIcon icon={faChevronLeft} className="text-xl" />
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 bg-white/10 hover:bg-orange-500 backdrop-blur-xl text-white rounded-full flex items-center justify-center transition-all border border-white/20"
            >
              <FontAwesomeIcon icon={faChevronRight} className="text-xl" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="absolute bottom-12 left-16 flex gap-3 z-20">
            {sliderImages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-1.5 transition-all duration-500 rounded-full ${idx === currentIndex ? "w-16 bg-orange-500" : "w-6 bg-white/30 hover:bg-white/50"}`}
              />
            ))}
          </div>
        </div>
      </div>

      <div id="initiatives" className="max-w-[1800px] mx-auto px-6 mb-24 text-center flex flex-col items-center scroll-mt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-8xl w-full"
        >

          {/* Main Large Heading */}
          <h2 className="text-2xl md:text-3xl font-black text-orange-500 mb-6 leading-[1.1]">
            Safety is our core value.
          </h2>

          {/* Minimalist Professional Divider */}
          <div className="w-24 h-1.5 bg-orange-500 mx-auto mb-12 rounded-full"></div>

          {/* Single Column Professional Content */}
          <div className="bg-[#f8f9fa] p-10 md:p-16 rounded-[3rem] border border-gray-100 shadow-sm relative overflow-hidden group">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-bl-full transition-all group-hover:scale-110" />

            <div className="relative z-10">
              {variant === 'initiatives' ? (
                <div className="max-w-5xl mx-auto">

                  <div className="space-y-6">
                    <p className="text-gray-600 text-xl leading-relaxed">
                      We have zero tolerance and practice <span className="text-orange-600 font-bold">Zero Harm</span>.
                    </p>

                    <div className="rounded-[1.5rem] border border-gray-200/80 bg-white px-5 py-5 shadow-[0_20px_45px_-38px_rgba(15,23,42,0.45)] sm:px-7">
                      <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-gray-500">
                        We preach
                      </p>
                      <div className="relative mt-4 overflow-hidden rounded-[1.2rem] bg-[#fafafa] py-4">
                        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-[#fafafa] to-transparent sm:w-20" />
                        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-[#fafafa] to-transparent sm:w-20" />
                        <div className="safety-marquee-track safety-marquee-track-fast">
                          <span className="safety-marquee-text font-semibold tracking-[0.08em] text-[#1f2937]">
                            My Safety My Responsibility
                          </span>
                          <span className="safety-marquee-text font-semibold tracking-[0.08em] text-gray-400" aria-hidden="true">
                            My Safety My Responsibility
                          </span>
                          <span className="safety-marquee-text font-semibold tracking-[0.08em] text-[#1f2937]" aria-hidden="true">
                            My Safety My Responsibility
                          </span>
                          <span className="safety-marquee-text font-semibold tracking-[0.08em] text-gray-400" aria-hidden="true">
                            My Safety My Responsibility
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 pt-8">
                      <p className="text-[#002147] text-lg md:text-xl font-bold uppercase tracking-[0.2em] mb-6">
                        Our Tools
                      </p>
                      <div className="grid gap-4 md:grid-cols-2 text-left">
                        {safetyTools.map((tool) => (
                          <div
                            key={tool}
                            className="rounded-2xl border border-orange-100 bg-white px-5 py-4 text-gray-700 text-base md:text-lg shadow-sm"
                          >
                            <span className="text-orange-500 font-bold mr-3" aria-hidden="true">
                              O
                            </span>
                            {tool}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  <p className="text-[#002147] text-2xl md:text-3xl font-bold leading-tight mb-8">
                    At Vaaman Engineers, safety is the foundation of our operations.
                  </p>

                  <div className="space-y-6 max-w-4xl mx-auto">
                    <p className="text-gray-600 text-xl leading-relaxed">
                      We believe that a safe workplace is the fundamental right of every worker. Our <span className="text-orange-600 font-bold">&quot;Zero Harm&quot;</span> policy ensures that everyone returns home safely, every single day. We uphold stringent site safety standards and provide advanced technical training to our team.
                    </p>

                    <p className="text-gray-500 text-lg leading-relaxed border-t border-gray-200 pt-6">
                      Each employee is covered under all applicable statutory requirements with <span className="text-[#002147] font-bold">no deviations</span>. Selection via cross-functional interview panels ensures we only hire people who value safety as a core principle.
                    </p>
                  </div>

                  <div className="mt-10 flex items-center justify-center gap-4">
                    <div className="h-[2px] w-12 bg-gray-200"></div>
                    <span className="text-orange-500 font-black uppercase text-sm tracking-widest">100% Statutory Compliance</span>
                    <div className="h-[2px] w-12 bg-gray-200"></div>
                  </div>
                </>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
