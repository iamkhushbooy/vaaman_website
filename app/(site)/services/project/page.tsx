'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Factory,
  IndianRupee,
  MapPin,
  Settings2,
  TimerReset,
  Zap,
} from 'lucide-react';

const projectStats = [
  {
    label: 'Featured Projects',
    value: '04',
    detail: 'AMNS, Chanderiya, Mettube, and Bokaro.',
    icon: Factory,
  },
  {
    label: 'Bokaro Capacity',
    value: '500 MT/month',
    detail: 'Planned extrusion output from the Bokaro project report.',
    icon: Zap,
  },
  {
    label: 'Execution Scope',
    value: 'Multi-Sector',
    detail: 'Structural, process, production-line, and plant planning work.',
    icon: Settings2,
  },
  {
    label: 'Bokaro Schedule',
    value: '40 weeks',
    detail: 'Documented completion schedule from civil work to commissioning.',
    icon: TimerReset,
  },
];

const bokaroUseCases = [
  'Building facades, curtain walls, windows, and doors',
  'Consumer durables and electrical machinery components',
  'Heat sinks, enclosures, and cable management systems',
  'Solar panel frames and renewable-energy structures',
  'Industrial machinery frames and equipment housings',
  'Automotive and transportation applications',
];

const capexItems = [
  { item: 'Land', value: 'Rs. 1.132 lakhs' },
  { item: 'Building', value: 'Rs. 345.000 lakhs' },
  { item: 'Plant & Machinery', value: 'Rs. 1510.150 lakhs' },
  { item: 'Infrastructure', value: 'Rs. 67.805 lakhs' },
  { item: 'Pollution Control & Rain Water Harvesting', value: 'Rs. 50.000 lakhs' },
];

const scheduleItems = [
  { phase: 'Basic plant civil work', time: '8 to 9 weeks' },
  { phase: 'Shed and accessories', time: '12 weeks' },
  { phase: 'Equipment procurement and delivery', time: '30 weeks' },
  { phase: 'Equipment erection', time: '8 weeks' },
  { phase: 'Services erection', time: '6 weeks' },
  { phase: 'Hot commissioning', time: '2 weeks' },
];

const projectPortfolio = [
  {
    id: 'chanderiya',
    name: 'Chanderiya Project',
    sector: 'Process Plant Systems',
    location: 'Industrial process installation reference',
    summary:
      'A process-plant execution reference showing filtration, cooling, utility piping, and operating-platform integration inside a live industrial shed.',
    points: [
      'Air cooler, tank, hopper, and duct-connected process systems',
      'Utility-linked operating floor with access platforms and structural framing',
      'Four project images documenting the installation zones clearly',
    ],
    images: [
      {
        src: '/project/chanderiya/chanderiya-1.jpeg',
        alt: 'Chanderiya air cooler and process structure',
        title: 'Cooling & Process Area',
      },
      {
        src: '/project/chanderiya/chanderiya-2.jpeg',
        alt: 'Chanderiya tank and hopper line installation',
        title: 'Tank and Hopper Systems',
      },
      {
        src: '/project/chanderiya/chanderiya-3.jpeg',
        alt: 'Chanderiya operating platform and equipment line',
        title: 'Operating Floor Layout',
      },
      {
        src: '/project/chanderiya/chanderiya-4.jpeg',
        alt: 'Chanderiya process line with pumps and piping',
        title: 'Utility-Integrated Line Section',
      },
    ],
  },
  {
    id: 'amns',
    name: 'AMNS Project',
    sector: 'Heavy Structural Erection',
    location: 'Industrial site execution reference',
    summary:
      'A structural execution reference focused on heavy-lift installation, staged erection, and large modular steel assemblies in demanding field conditions.',
    points: [
      'Large structural modules and elevated framework assembly',
      'Day and night erection activity with crane-based lifting support',
      'Industrial execution profile suited to large-scale plant expansion',
    ],
    images: [
      {
        src: '/project/amns/amns-1.png',
        alt: 'AMNS site erection at night with cranes',
        title: 'Night Erection Activity',
      },
      {
        src: '/project/amns/amns-2.jpg',
        alt: 'AMNS steel structure during day installation',
        title: 'Structural Module Installation',
      },
    ],
  },
  {
    id: 'mettube',
    name: 'Mettube Project',
    sector: 'Industrial Production Line Execution',
    location: 'Large-bay manufacturing facility reference',
    summary:
      'A large indoor manufacturing setup showing heavy equipment placement, operator access, material flow, and execution within a high-bay production hall.',
    points: [
      'Machine-line integration across a wide industrial bay',
      'Handling paths, working clearances, and overhead crane coverage',
      'Four project views showing floor layout and equipment integration',
    ],
    images: [
      {
        src: '/project/mettube/mettube-4.jpeg',
        alt: 'Mettube full production hall overview',
        title: 'Production Hall Overview',
      },
      {
        src: '/project/mettube/mettube-2.jpeg',
        alt: 'Mettube heavy industrial line floor view',
        title: 'Line Floor Arrangement',
      },
      {
        src: '/project/mettube/mettube-1.jpeg',
        alt: 'Mettube machinery and process equipment section',
        title: 'Equipment Integration Zone',
      },
      {
        src: '/project/mettube/mettube-3.jpeg',
        alt: 'Mettube interior process area and crane bay',
        title: 'Operational Plant Bay',
      },
    ],
  },
  {
    id: 'bokaro',
    name: 'Bokaro Aluminium Extrusion Plant',
    sector: 'Greenfield Manufacturing Project',
    location: 'Bokaro Industrial Area, Jharkhand',
    summary:
      'A documented aluminium extrusion proposal supported by layout drawings, process planning, execution schedule, and investment structure.',
    points: [
      'Planned facility targeted at 500 MT per month',
      'Layout development, process flow, and equipment definition',
      'Structured progression from civil works through hot commissioning',
    ],
    images: [
      {
        src: '/project/bokaro/layout-preview.jpg',
        alt: 'Detailed Bokaro aluminium extrusion layout drawing',
        title: 'Master Plant Layout',
      },
      {
        src: '/project/bokaro/dpr-image-2.jpeg',
        alt: 'Bokaro site layout drawing',
        title: 'Site Planning Scheme',
      },
      {
        src: '/project/bokaro/dpr-image-3.jpeg',
        alt: 'Bokaro process block arrangement',
        title: 'Process Block Layout',
      },
    ],
  },
];

export default function ProjectPage() {
  const [projectIndex, setProjectIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);

  const activeProject = projectPortfolio[projectIndex];
  const activeImage = activeProject.images[imageIndex] ?? activeProject.images[0];

  const goToProject = (index: number) => {
    setProjectIndex(index);
    setImageIndex(0);
  };

  const nextProject = () => {
    setProjectIndex((prev) => {
      const next = (prev + 1) % projectPortfolio.length;
      setImageIndex(0);
      return next;
    });
  };

  const prevProject = () => {
    setProjectIndex((prev) => {
      const next = (prev - 1 + projectPortfolio.length) % projectPortfolio.length;
      setImageIndex(0);
      return next;
    });
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setProjectIndex((prev) => {
        const next = (prev + 1) % projectPortfolio.length;
        setImageIndex(0);
        return next;
      });
    }, 7000);

    return () => clearInterval(timer);
  }, []);

  return (
    <main className="bg-white">
      <section className="relative flex min-h-[30rem] items-center overflow-hidden bg-blue-950 text-white">
        <div className="absolute inset-0">
          <Image
            src={activeProject.images[0].src}
            alt={activeProject.images[0].alt}
            fill
            priority
            className={activeProject.id === 'bokaro' ? 'object-cover' : 'object-cover'}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-950/85 to-blue-900/35" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-orange-300">
            Services / Project Services
          </p>
          <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
            Industrial Project Portfolio
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-gray-200 md:text-lg">
            A cleaner project presentation with one project shown at a time through a dedicated
            slider, backed by documented Bokaro planning details and field execution visuals.
          </p>
          <p className="mt-6 text-sm font-medium text-gray-200">
            <Link href="/" className="transition hover:text-[rgb(254,94,21)]">
              Home
            </Link>
            {' / '}
            <span className="text-gray-300">Services</span>
            {' / '}
            <span className="text-[rgb(254,94,21)]">Project Services</span>
          </p>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {projectStats.map((stat, index) => {
              const Icon = stat.icon;

              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: index * 0.06 }}
                  viewport={{ once: true }}
                  className="rounded-3xl border border-slate-200 bg-slate-50 p-7 shadow-sm"
                >
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[rgb(3,36,90)] text-white">
                    <Icon size={24} />
                  </div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[rgb(254,94,21)]">
                    {stat.label}
                  </p>
                  <h2 className="mt-3 text-3xl font-bold text-[rgb(3,36,90)]">{stat.value}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-gray-600">{stat.detail}</p>
                </motion.div>
              );
            })}
          </div>

          <div className="rounded-[2rem] bg-slate-50 p-4 shadow-[0_24px_70px_-30px_rgba(2,36,91,0.45)] ring-1 ring-slate-200 md:p-6">
            <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr]">
              <div className="grid gap-5">
                <div className="relative overflow-hidden rounded-[1.6rem] bg-white">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`${activeProject.id}-${imageIndex}`}
                      initial={{ opacity: 0, scale: 1.03 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.45, ease: 'easeInOut' }}
                      className="relative min-h-[340px] md:min-h-[560px]"
                    >
                      <Image
                        src={activeImage.src}
                        alt={activeImage.alt}
                        fill
                        className={`${
                          activeProject.id === 'bokaro' ? 'object-contain p-4' : 'object-cover'
                        }`}
                      />
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-blue-950/88 via-blue-950/35 to-transparent p-6 text-white">
                        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-orange-300">
                          {activeProject.name}
                        </p>
                        <h3 className="mt-2 text-2xl font-bold">{activeImage.title}</h3>
                      </div>
                    </motion.div>
                  </AnimatePresence>

                  <div className="absolute bottom-5 right-5 z-20 flex gap-3">
                    <button
                      onClick={prevProject}
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur hover:bg-[rgb(254,94,21)]"
                      aria-label="Previous project"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button
                      onClick={nextProject}
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur hover:bg-[rgb(254,94,21)]"
                      aria-label="Next project"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                  {activeProject.images.map((image, index) => (
                    <button
                      key={image.src}
                      type="button"
                      onClick={() => setImageIndex(index)}
                      className={`overflow-hidden rounded-3xl text-left ring-1 transition-all duration-300 ${
                        imageIndex === index
                          ? 'bg-[rgb(3,36,90)] text-white ring-[rgb(3,36,90)] shadow-lg'
                          : 'bg-white text-slate-900 ring-slate-200 hover:-translate-y-1 hover:ring-[rgb(254,94,21)]'
                      }`}
                    >
                      <div className="relative min-h-[150px]">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          className={`bg-white ${
                            activeProject.id === 'bokaro' ? 'object-contain p-3' : 'object-cover'
                          }`}
                        />
                      </div>
                      <div className="p-4">
                        <p
                          className={`text-xs font-semibold uppercase tracking-[0.22em] ${
                            imageIndex === index ? 'text-orange-300' : 'text-[rgb(254,94,21)]'
                          }`}
                        >
                          Image 0{index + 1}
                        </p>
                        <h4 className="mt-2 text-sm font-bold">{image.title}</h4>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex flex-col justify-between rounded-[1.6rem] bg-[rgb(3,36,90)] p-8 text-white">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.28em] text-orange-300">
                    One Project At A Time
                  </p>
                  <h2 className="mt-3 text-3xl font-bold">{activeProject.name}</h2>
                  <p className="mt-3 text-lg text-blue-100">{activeProject.sector}</p>
                  <div className="mt-5 flex items-center gap-3 text-blue-100">
                    <MapPin size={18} className="text-orange-300" />
                    <span>{activeProject.location}</span>
                  </div>

                  <div className="mt-6 inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-orange-300 ring-1 ring-white/10">
                    {projectIndex + 1} / {projectPortfolio.length} projects | {activeProject.images.length} images
                  </div>

                  <p className="mt-6 leading-relaxed text-blue-50">{activeProject.summary}</p>

                  <div className="mt-8 space-y-4">
                    {activeProject.points.map((point) => (
                      <div key={point} className="flex items-start gap-3">
                        <ArrowRight className="mt-1 h-5 w-5 flex-shrink-0 text-orange-300" />
                        <p className="text-blue-50">{point}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-10">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-orange-300">
                    Project Navigation
                  </p>
                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    {projectPortfolio.map((project, index) => (
                      <button
                        key={project.id}
                        type="button"
                        onClick={() => goToProject(index)}
                        className={`rounded-2xl border px-4 py-4 text-left transition-all ${
                          projectIndex === index
                            ? 'border-orange-300 bg-white/10 text-white'
                            : 'border-white/10 bg-white/5 text-blue-100 hover:border-orange-300/60 hover:bg-white/10'
                        }`}
                      >
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange-300">
                          Project 0{index + 1}
                        </p>
                        <h3 className="mt-2 text-sm font-bold">{project.name}</h3>
                        <p className="mt-1 text-xs opacity-80">{project.images.length} images</p>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.98fr_1.02fr]">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              viewport={{ once: true }}
            >
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-[rgb(254,94,21)]">
                Bokaro Reference
              </p>
              <h2 className="mb-6 text-3xl font-bold text-[rgb(3,36,90)] md:text-4xl">
                Documented planning layer from the Bokaro project
              </h2>
              <p className="mb-8 text-lg leading-relaxed text-gray-700">
                The Bokaro documentation remains the formal reference set on this page, covering
                planned production, process flow, application sectors, schedule, and investment
                structure for an aluminium extrusion facility.
              </p>

              <div className="space-y-4">
                {bokaroUseCases.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <ArrowRight className="mt-1 h-5 w-5 flex-shrink-0 text-[rgb(254,94,21)]" />
                    <p className="text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.08 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-[1.8rem] bg-white shadow-xl ring-1 ring-slate-200"
            >
              <div className="relative min-h-[560px]">
                <Image
                  src="/project/bokaro/layout-preview.jpg"
                  alt="Detailed Bokaro aluminium extrusion plant layout"
                  fill
                  className="object-contain bg-white p-4"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.02fr_0.98fr]">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              viewport={{ once: true }}
            >
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-[rgb(254,94,21)]">
                Bokaro Schedule
              </p>
              <h2 className="mb-6 text-3xl font-bold text-[rgb(3,36,90)] md:text-4xl">
                Planned rollout and investment structure
              </h2>

              <div className="space-y-4">
                {scheduleItems.map((item) => (
                  <div
                    key={item.phase}
                    className="flex items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4"
                  >
                    <p className="font-medium text-gray-700">{item.phase}</p>
                    <p className="whitespace-nowrap text-sm font-semibold text-[rgb(254,94,21)]">
                      {item.time}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.08 }}
              viewport={{ once: true }}
              className="rounded-[1.8rem] bg-[rgb(3,36,90)] p-8 text-white shadow-xl"
            >
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                  <IndianRupee size={22} />
                </div>
                <h3 className="text-2xl font-bold">Capital Investment Profile</h3>
              </div>

              <div className="space-y-4">
                {capexItems.map((item) => (
                  <div
                    key={item.item}
                    className="flex items-center justify-between gap-4 border-b border-white/10 pb-3 last:border-none last:pb-0"
                  >
                    <p className="text-blue-100">{item.item}</p>
                    <p className="whitespace-nowrap font-semibold text-orange-300">{item.value}</p>
                  </div>
                ))}
              </div>

              <p className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-blue-100">
                Proposed total capital investment noted in the submitted project papers: Rs.
                1974.087 lakhs.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
