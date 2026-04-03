import AboutHero from '@/components/about/AboutHero';
import LeadershipMessageSection from '@/components/about/LeadershipMessageSection';

export default function ChairmansCornerPage() {
    return (
        <>
            <AboutHero title="MD&apos;s Corner" />
            <LeadershipMessageSection
                eyebrow="MD&apos;s Corner"
                title="Leadership Built on Trust and Discipline"
                imageSrc="/award/S P Singh.JPG"
                imageAlt="MD&apos;s Corner"
                backgroundClassName="bg-[#f8f9fa]"
                description={[
                   "Surendra Pratap Singh, MD, qualification, experience, is a visionary leader. The company was founded by him in 1992. It started with a small venture at conductor plant in Sterlite & his vision & passion for serving his customers seamlessly has been a key factor behind the exponential growth of the company. Under his efficient drive the company has spread its arms in zinc, aluminium, steel, coal handling, port operations under big brands like Vedanta, Tata Steel & JSW."
                ]}
            />
        </>
    );
}
