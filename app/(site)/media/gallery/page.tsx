'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faExpandAlt, faImages, faHardHat, faTools, 
  faBuilding, faAward, faShieldAlt 
} from '@fortawesome/free-solid-svg-icons';

// --- DATA ARRANGED FOR PROFESSIONAL LOOK ---
const galleryItems = [
  // ROW 1: Industrial Scale
  
  { id: 3, src: "/gallery/gallery_activity3.jpeg", category: "Safety", size: "small", title: "Standard Protocol Check" },

  // ROW 4: Corporate & Team (Added from your prev request)
 
  
  { id: 4, src: "/gallery/gallery_activity4.jpeg", category: "Training", size: "big", title: "Site Infrastructure" },
 { id: 2, src: "/gallery/gallery_machine.jpg", category: "Machinery", size: "tall", title: "Advanced Industrial Machinery" },
  // ROW 2: Safety & CSR
  { id: 7, src: "/gallery/gallery_activity1.jpg", category: "Safety", size: "small", title: "Emergency Rescue Drill" },
  { id: 8, src: "/gallery/gallery_img1.jpg", category: "Awards", size: "big", title: "CSR: Blood Donation Drive" },
  { id: 6, src: "/gallery/gallery_img3.jpg", category: "Awards", size: "big", title: "Employee Excellence Awards" },
{ id: 1, src: "/gallery/gallery_port.jpeg", category: "Projects", size: "big", title: "Port Operations & Bulk Handling" },
  { id: 5, src: "/gallery/gallery_img2.jpg", category: "Training", size: "big", title: "Safety Induction Seminar" },
  
  // ROW 3: Onsite Work
  { id: 9, src: "/sefty_images/sefty3.jpg", category: "Machinery", size: "tall", title: "Heavy Duty Equipment" },
  { id: 13, src: "/sefty_images/sefty7.jpg", category: "Projects", size: "big", title: "Comprehensive Site Inspection" },
  { id: 10, src: "/sefty_images/sefty4.jpg", category: "Training", size: "small", title: "Corporate Setup" },
  
  // Extra Details
  { id: 11, src: "/sefty_images/sefty5.jpg", category: "Training", size: "small", title: "Technical Workshop" },
  { id: 12, src: "/sefty_images/sefty6.jpg", category: "Training", size: "small", title: "Safety Recognition" },
  { id: 15, src: "/gallery/gallery_activity5.jpeg", category: "Awards", size: "small", title: "Operational Safety" },
  { id: 16, src: "/project/project1.jpeg", category: "Projects", size: "small", title: "Comprehensive Site Inspection" },
  { id: 17, src: "/project/project2.JPG", category: "Projects", size: "small", title: "Comprehensive Site Inspection" },
 
];

const categories = [
  { name: 'All', icon: faImages },
 { name: 'Training', icon: faHardHat },
  { name: 'Safety', icon: faShieldAlt },
  { name: 'Projects', icon: faBuilding },
  { name: 'Machinery', icon: faTools },
 
  { name: 'Awards', icon: faAward },
 
];

export default function CompleteGalleryPage() {
  const [filter, setFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  
  const filteredItems = filter === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  const getGridSpan = (size: string) => {
    switch (size) {
      case 'big': return 'md:col-span-2 md:row-span-2 h-[500px] md:h-auto';
      case 'tall': return 'md:col-span-1 md:row-span-2 h-[400px] md:h-auto';
      default: return 'h-[240px]';
    }
  };

  return (
    <div className="bg-[#F8FAFC] min-h-screen font-sans">
      
    
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <motion.div 
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/gallery/gallery_img3.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#002147]/95 via-[#002147]/70 to-transparent" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-orange-500 font-black uppercase tracking-[0.4em] text-sm mb-4 block">
              Vaaman Engineers Media Archives
            </span>
            <h1 className="text-5xl md:text-5xl font-black text-white leading-tight">
              Visual <span className="text-orange-500 ">Excellence</span> 
              & Site Gallery
            </h1>
            <p className="text-gray-300 max-w-2xl mt-6 text-lg border-l-4 border-orange-500 pl-6">
              Capturing our commitment to industrial safety, precision engineering, and technical innovation across global project sites.
            </p>
          </motion.div>
        </div>
      </section>

   
      <section className="py-8 bg-white sticky top-0 z-40 shadow-sm border-b border-gray-100">
        <div className="max-w-[1500px] mx-auto px-6 flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setFilter(cat.name)}
              className={`flex items-center gap-3 px-6 py-2.5 rounded-full font-bold transition-all duration-300 text-sm border ${
                filter === cat.name 
                ? "bg-orange-500 border-orange-500 text-white shadow-lg scale-105" 
                : "bg-white border-gray-200 text-slate-600 hover:border-orange-500 hover:text-orange-500"
              }`}
            >
              <FontAwesomeIcon icon={cat.icon} className="text-xs" />
              {cat.name}
            </button>
          ))}
        </div>
      </section>

      {/* --- MASONRY GALLERY GRID --- */}
      <section className="py-16 max-w-[1550px] mx-auto px-6">
        <motion.div layout className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[240px]">
          <AnimatePresence mode='popLayout'>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -8 }}
                className={`group relative rounded-[1.5rem] overflow-hidden bg-white shadow-md border-[6px] border-white cursor-pointer ${getGridSpan(item.size)}`}
                onClick={() => setSelectedImage(item.src)}
              >
                <img 
                  src={item.src} 
                  alt={item.title} 
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-[#002147]/70 via-[#002147]/15 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-start p-8">
                  <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md text-white transition-all duration-300 flex items-center justify-center group-hover:bg-orange-500">
                    <FontAwesomeIcon icon={faExpandAlt} className="text-sm" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

     
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-[#002147]/98 z-[9999] p-6 flex items-center justify-center cursor-zoom-out backdrop-blur-xl"
          >
            <motion.img 
              src={selectedImage}
              initial={{ scale: 0.8, y: 50 }} 
              animate={{ scale: 1, y: 0 }} 
              exit={{ scale: 0.8, y: 50 }}
              className="max-w-full max-h-[85vh] rounded-[1.5rem] shadow-2xl border-4 border-white/20"
            />
            <button className="absolute top-10 right-10 text-white text-5xl font-thin hover:text-orange-500 transition-all">×</button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- FOOTER CTA --- */}
      <section className="bg-white py-20 text-center border-t border-gray-100">
        <h3 className="text-[#002147] text-3xl font-black mb-6 tracking-tight">Experience Our Operational Excellence</h3>
        <button className="bg-[#002147] text-white px-10 py-4 rounded-xl font-bold hover:bg-orange-500 transition-all shadow-xl hover:shadow-orange-500/20 active:scale-95">
          Download Company Profile
        </button>
      </section>
    </div>
  );
}
