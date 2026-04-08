export type ProjectGalleryItem = {
  slug: string;
  title: string;
  summary: string;
  note: string;
  gallery: string[];
};

export const projectGallery: ProjectGalleryItem[] = [
  {
    slug: 'amns',
    title: 'AMNS',
    summary:
      'Project reference aligned with Vaaman project services for structural fabrication, erection, and plant & machinery execution.',
    note: 'The site image indicates heavy-lift steel structure installation in progress.',
    gallery: ['/project/amns/image1.png', '/project/amns/image2.jpg'],
  },
  {
    slug: 'chanderiya',
    title: 'Chanderiya',
    summary:
      'Project reference within Vaaman execution capabilities covering fabrication, erection, and coordinated site work.',
    note: 'The gallery shows active structural work fronts and progressing steel assemblies.',
    gallery: [
      '/project/chanderiya/WhatsApp Image 2026-01-28 at 12.57.07.jpeg',
      '/project/chanderiya/WhatsApp Image 2026-03-30 at 14.43.53.jpeg',
      '/project/chanderiya/WhatsApp Image 2026-03-30 at 14.43.55 (1).jpeg',
      '/project/chanderiya/WhatsApp Image 2026-03-30 at 14.43.56.jpeg',
    ],
  },
  {
    slug: 'mettube',
    title: 'Mettube',
    summary:
      'Project reference presented under Vaaman plant and machinery project services with on-site execution visibility.',
    note: 'The image set captures field activity and installation progress across the work zone.',
    gallery: [
      '/project/mettube/WhatsApp Image 2026-03-30 at 14.52.08.jpeg',
      '/project/mettube/WhatsApp Image 2026-03-30 at 14.52.12 (1).jpeg',
      '/project/mettube/WhatsApp Image 2026-03-30 at 14.52.15 (1).jpeg',
      '/project/mettube/WhatsApp Image 2026-03-30 at 14.52.18 (1).jpeg',
      '/project/mettube/WhatsApp Image 2026-03-30 at 14.52.19.jpeg',
    ],
  },
];

export const projectHeroSlides = projectGallery.map((project, index) => ({
  id: `${project.slug}-${index}`,
  src: project.gallery[0],
  title: project.title,
  count: project.gallery.length,
}));
