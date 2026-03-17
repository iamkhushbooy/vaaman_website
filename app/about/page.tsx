'use client'; // Framer motion ke liye zaroori hai

import { Mail, Phone, Check } from 'lucide-react';
import AboutFacts from '@/components/about_facts';
import Team from '@/components/team';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <>

                  <section className="relative h-96 bg-blue-950 text-white flex items-center overflow-hidden">
                    {/* 1. Removed opacity-20 so the image is fully visible */}
                    <div className="absolute inset-0">
                        <img
                            src="/about-benner.jpeg"
                            alt="About banner"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* 2. Updated gradient to fade from dark left to transparent right */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-900/80 to-transparent"></div>

                    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                        <h1 className="text-5xl md:text-6xl font-bold mb-4">About Us</h1>
                        <p className="text-lg text-gray-200">
                            <Link href="/" className="hover:text-white transition">Home</Link>
                            {' / '}
                            <Link href="/about" className="hover:text-white transition">Pages</Link>
                            {' / '}
                            <span>About Us</span>
                        </p>
                    </div>
                </section>






    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Images Section */}
<div className="grid grid-cols-2 gap-5 h-full relative items-start"> 
  
  {/* FIRST IMAGE */}
  <motion.div 
    initial={{ y: 100, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    viewport={{ once: true }}
    className="pt-0" 
  >
    <img
      src="/about_img1.png"
      alt="about man"
      className="w-full object-cover rounded-md shadow-sm"
    />
  </motion.div>

  
  <motion.div 
    initial={{ y: -100, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    viewport={{ once: true }}
    className="mt-[30%]" 
  > 
    <img
      src="/about_img2.png"
      alt="about woman"
      className="w-full object-cover rounded-md shadow-sm"
    />
  </motion.div>
</div>
         
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-orange-500 font-semibold uppercase mb-3 text-sm tracking-widest">
              About Us
            </p>
            <h1 className="text-4xl font-extrabold text-[#002147] mb-2 ">
              Leaders in Engineering Excellence
            </h1>
            <p className="text-gray-600 mb-10 leading-relaxed text-lg">
              A trust-driven leader in industrial engineering, Vaaman Engineering provides expert operation and maintenance solutions. We are committed to safety, 
              excellence, and redefining industry standards through sustainable growth..
            </p>

            
            <div className="flex items-start gap-10 mb-5">
              <motion.div 
                whileHover={{ scale: 1.05 }} 
                className="bg-orange-500 text-white p-8 px-10 text-center rounded-sm flex-shrink-0"
              >
                <h2 className="text-6xl font-extrabold mb-1">25</h2>
                <p className="text-sm font-bold uppercase leading-tight">Years of</p>
                <p className="text-sm font-bold uppercase leading-tight">Experience</p>
              </motion.div>
              
              <div className="space-y-3 text-sm  text-gray-600">
                {["Power & Energy", "Civil Engineering", "Chemical Engineering", "Mechanical Engineering", "Oil & Gas Engineering"].map((item, idx) => (
                  <motion.p 
                    key={item}
                    initial={{ x: 20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 * idx }} 
                    className="flex items-center"
                  >
                    <Check className="text-orange-500 w-5 h-5 stroke-[4px]" />
                    {item}
                  </motion.p>
                ))}
              </div>
            </div>

            {/* Contact Footer */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-2 border-t border-gray-100">
              <div className="flex items-center gap-4">
                <div className="bg-orange-500 text-white p-3 rounded-full">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Email us</p>
                  <p className="font-bold text-[#002147]">info@example.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-orange-500 text-white p-3 rounded-full">
                  <Phone className="w-4 h-4 fill-current" />
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Call us</p>
                  <p className="font-bold text-[#002147]">+012 345 6789</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>

    <AboutFacts />
    <Team />

    </>
  );
}