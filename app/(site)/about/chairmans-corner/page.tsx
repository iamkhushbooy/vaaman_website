import AboutHero from '@/components/about/AboutHero';
import LeadershipMessageSection from '@/components/about/LeadershipMessageSection';

export default function ChairmansCornerPage() {
    return (
        <>
            <AboutHero title="Chairman&apos;s Corner" />
            <LeadershipMessageSection
                eyebrow="Chairman&apos;s Corner"
                title="Leadership Built on Trust and Discipline"
                imageSrc="/award/S P Singh.JPG"
                imageAlt="Chairman&apos;s Corner"
                backgroundClassName="bg-[#f8f9fa]"
                description={[
                    'Vaaman Engineers was founded with a clear, long-term industrial vision: to build dependable operations, uphold safety without compromise, and create heavy-duty capabilities that scale alongside the nation’s core sectors. From our early days, we recognized the critical importance of robust infrastructure, particularly in demanding fields like bulk material handling and metal production, which serve as the backbone of industrial growth.',
                    'That founding philosophy continues to guide every site, every team, and every client partnership we take on today. By integrating rigorous discipline with innovative engineering solutions, we ensure that our operations not only meet the high-capacity demands of the present but are fully equipped to drive the industrial advancements of tomorrow. Our commitment to excellence remains unwavering, empowering our partners to achieve new heights in productivity, efficiency, and operational safety.',
                ]}
            />
        </>
    );
}
