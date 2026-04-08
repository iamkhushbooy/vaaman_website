'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { projectGallery, projectHeroSlides } from '@/lib/project-gallery';

type GalleryState = Record<string, number>;

const initialGalleryState = projectGallery.reduce<GalleryState>((acc, project) => {
  acc[project.slug] = 0;
  return acc;
}, {});

// Project-specific content for Vaaman Engineers
const projectDetails: Record<string, string> = {
  amns: "Specialized EPC services for ArcelorMittal Nippon Steel (AMNS), focusing on heavy industrial structural works and infrastructure development to meet global manufacturing standards.",
  chanderiya: "Execution of mechanical and civil engineering projects at the Chanderiya site, ensuring high-precision assembly and robust maintenance solutions for large-scale operations.",
  mettube: "Tailored engineering and installation projects for Mettube, delivering advanced infrastructure support for precision copper tube manufacturing facilities.",
};

export function ProjectsExperience() {
  const [heroIndex, setHeroIndex] = useState(0);
  const [galleryIndex, setGalleryIndex] = useState<GalleryState>(initialGalleryState);

  const totalImages = useMemo(
    () => projectGallery.reduce((count, project) => count + project.gallery.length, 0),
    []
  );

  useEffect(() => {
    const timer = window.setInterval(() => {
      setHeroIndex((current) => (current + 1) % projectHeroSlides.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  const activeHero = projectHeroSlides[heroIndex];

  const updateProjectSlide = (slug: string, direction: number, total: number) => {
    setGalleryIndex((current) => ({
      ...current,
      [slug]: (current[slug] + direction + total) % total,
    }));
  };

  return (
    <div className="bg-[#f3f5f8] text-slate-900">
      {/* Hero Slider Section - Keeping your original logic/style */}
      <section className="relative min-h-[88vh] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeHero.id}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.9, ease: 'easeInOut' }}
            className="absolute inset-0"
          >
            <Image
              src={activeHero.src}
              alt={activeHero.title}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(2,36,91,0.94),rgba(2,36,91,0.7)_45%,rgba(2,36,91,0.22))]" />
          </motion.div>
        </AnimatePresence>

        <div className="relative z-10 mx-auto flex min-h-[88vh] max-w-7xl flex-col justify-center px-6 py-24 lg:px-8">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.42em] text-[#ff5e14]">Projects</p>
            <h1 className="max-w-3xl text-4xl font-bold leading-tight text-white md:text-7xl">
              Project Services/EPC
            </h1>
            <p className="mt-6 max-w-2xl border-l-4 border-[#ff5e14] pl-5 text-base leading-8 text-slate-200 md:text-lg">
              AMNS, Chanderiya and Mettube project.
            </p>
            <div className="mt-10">
              <Link
                href="#project-showcase"
                className="rounded-full bg-[#ff5e14] px-7 py-3 text-sm font-bold text-white transition hover:bg-orange-600"
              >
                View Project Gallery
              </Link>
            </div>
          </div>

          <div className="mt-14 grid max-w-4xl gap-4 md:grid-cols-3">
            {projectHeroSlides.map((slide, index) => (
              <button
                key={slide.id}
                onClick={() => setHeroIndex(index)}
                className={`rounded-[1.4rem] border p-4 text-left backdrop-blur-sm transition ${
                  heroIndex === index
                    ? 'border-[#ff5e14] bg-white/18'
                    : 'border-white/10 bg-white/8 hover:bg-white/14'
                }`}
              >
                <p className="text-xs uppercase tracking-[0.35em] text-[#ffb38e]">Project</p>
                <p className="mt-3 text-lg font-semibold text-white">{slide.title}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Project Showcase - Increased to 8xl (max-w-[90rem]) */}
      <section id="project-showcase" className="mx-auto max-w-[90rem] px-6 py-24 lg:px-8">
        <div className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.4em] text-[#ff5e14]">Project Gallery</p>
            <h2 className="mt-2 text-3xl font-bold text-[#02245B]">Vaaman Engineers Projects</h2>
          </div>
        </div>

        <div className="space-y-12">
          {projectGallery.map((project) => {
            const activeIndex = galleryIndex[project.slug];
            const activeImage = project.gallery[activeIndex];

            return (
              <div
                key={project.slug}
                // Two columns: Left (Blue Box) and Right (Gallery)
                className="grid gap-8 overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-5 shadow-[0_24px_80px_-35px_rgba(15,23,42,0.35)] lg:grid-cols-[1fr_2.5fr] lg:p-7"
              >
                {/* Left side Blue Box - Content moved to top */}
                <div className="flex flex-col justify-between rounded-[1.6rem] bg-[#02245B] p-8 text-white lg:p-10">
                  <div className="flex flex-col">
                    <p className="text-xs uppercase tracking-[0.34em] text-[#ffb38e]">Project Detail</p>
                    <h3 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">{project.title}</h3>
                    
                    {/* Added project specific content */}
                    <p className="mt-8 text-slate-300 leading-relaxed text-sm md:text-base">
                      {projectDetails[project.slug.toLowerCase()] || 
                       "Delivering high-quality industrial solutions and infrastructure excellence for leading sector partners."}
                    </p>
                  </div>

                  <div className="mt-12">
                    <div className="flex items-center gap-3">
                        <div className="h-[2px] w-8 bg-[#ff5e14]"></div>
                        <span className="text-xs font-bold uppercase tracking-widest text-[#ffb38e]">Vaaman Group</span>
                    </div>
                  </div>
                </div>

                {/* Right side Photos - Remains consistent with your gallery style */}
                <div className="flex flex-col gap-4">
                  <div className="relative h-[320px] overflow-hidden rounded-[1.75rem] bg-slate-100 md:h-[460px]">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeImage}
                        initial={{ opacity: 0, scale: 1.04 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.98 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                        className="absolute inset-0"
                      >
                        <Image
                          src={activeImage}
                          alt={`${project.title} image ${activeIndex + 1}`}
                          fill
                          sizes="(max-width: 1536px) 100vw, 80vw"
                          className="object-cover"
                        />
                      </motion.div>
                    </AnimatePresence>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#02245B]/70 via-[#02245B]/15 to-transparent" />
                    <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
                      <div className="rounded-2xl bg-white/12 px-4 py-3 backdrop-blur-md">
                        <p className="text-xs uppercase tracking-[0.32em] text-[#ffd1bd]">Image</p>
                        <p className="mt-2 text-lg font-semibold text-white">
                          {String(activeIndex + 1).padStart(2, '0')} / {String(project.gallery.length).padStart(2, '0')}
                        </p>
                      </div>
                      <div className="flex gap-3">
                        <button
                          onClick={() => updateProjectSlide(project.slug, -1, project.gallery.length)}
                          className="rounded-full border border-white/20 bg-[#02245B]/70 p-3 text-white transition hover:bg-[#ff5e14]"
                          aria-label={`Previous image`}
                        >
                          <ArrowLeft className="h-5 w-5" />
                        </button>
                        <button
                          onClick={() => updateProjectSlide(project.slug, 1, project.gallery.length)}
                          className="rounded-full border border-white/20 bg-[#02245B]/70 p-3 text-white transition hover:bg-[#ff5e14]"
                          aria-label={`Next image`}
                        >
                          <ArrowRight className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Thumbnail Grid */}
                  <div className={`grid gap-3 ${project.gallery.length <= 4 ? 'grid-cols-2 md:grid-cols-4' : 'grid-cols-2 md:grid-cols-5'}`}>
                    {project.gallery.map((image, imageIndex) => (
                      <button
                        key={image}
                        onClick={() => setGalleryIndex((current) => ({ ...current, [project.slug]: imageIndex }))}
                        className={`group relative overflow-hidden rounded-[1.1rem] border ${
                          activeIndex === imageIndex
                            ? 'border-[#ff5e14] ring-2 ring-[#ff5e14]/30'
                            : 'border-slate-200'
                        }`}
                      >
                        <Image
                          src={image}
                          alt="thumb"
                          width={220}
                          height={120}
                          className="h-24 w-full object-cover transition duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-[#02245B]/10 transition group-hover:bg-[#02245B]/0" />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}