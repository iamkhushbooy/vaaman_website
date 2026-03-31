import AboutHero from '@/components/about/AboutHero';
import LeadershipMessageSection from '@/components/about/LeadershipMessageSection';

export default function CeosDeskPage() {
    return (
        <>
            <AboutHero title="CEO&apos;s Desk" />
            <LeadershipMessageSection
                eyebrow="CEO&apos;s Desk"
                title="Execution Excellence Across Every Engagement"
                imageSrc="/award/CEO'S Corner.jpeg"
                imageAlt="CEO&apos;s Desk"
                reverse
                backgroundClassName="bg-white"
                description={[
                    "Rajesh Kundu, CEO, Graduate engineer with PGDBM having 32+ years of rich industry experience in the field of operation, maintenance & projects in Dunlop, Usha Martin & Hindustan Zinc. His prime focus is on Safety, productivity, technology & Asset Optimisation to take the company to next phase of growth. The company started its EPC/Project vertical under his guidance. The company has started to build it core technical competency as Centre of Excellence. "
                ]}
            />
        </>
    );
}
