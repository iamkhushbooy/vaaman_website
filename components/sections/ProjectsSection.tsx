import Link from 'next/link';
import Image from 'next/image';
import { projectGallery } from '@/lib/project-gallery';

export function ProjectsSection() {
  const previewProjects = projectGallery;

  return (
    <section className="bg-[#02245B] px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.36em] text-[#ff5e14]">Our Projects</p>
            <h2 className="mt-4 text-4xl font-bold leading-tight text-white md:text-5xl">
              Approved project image references.
            </h2>
          </div>
          <p className="max-w-xl text-base leading-7 text-slate-300">
            AMNS, Chanderiya and Mettube project galleries sourced only from the provided folders.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {previewProjects.map((project) => (
            <article
              key={project.slug}
              className="group overflow-hidden rounded-[1.8rem] border border-white/10 bg-white/6"
            >
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={project.gallery[0]}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                  className="object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#02245B]/88 via-[#02245B]/18 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="text-xs uppercase tracking-[0.35em] text-[#ffb38e]">Project</p>
                  <h3 className="mt-2 text-2xl font-semibold text-white">{project.title}</h3>
                </div>
              </div>
              <div className="p-5">
                <p className="text-sm text-slate-300">{project.gallery.length} approved images</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10">
          <Link
            href="/services/project"
            className="inline-flex rounded-full bg-[#ff5e14] px-7 py-3 text-sm font-bold text-white transition hover:bg-orange-600"
          >
            View Full Project Page
          </Link>
        </div>
      </div>
    </section>
  );
}
