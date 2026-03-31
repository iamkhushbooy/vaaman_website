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
                    'Our focus is clear: deliver measurable operating performance, strengthen plant reliability, and build client confidence through consistent execution on the ground.',
                    'As Vaaman grows, we remain committed to quality systems, skilled teams, and a safety-first culture that supports sustainable industrial progress.',
                ]}
            />
        </>
    );
}
