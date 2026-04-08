import { HeroCarousel } from '@/components/sections/HeroCarousel';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import TeamSection from '@/components/team';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { ClientsSection } from '@/components/sections/ClientsSection';
import AboutFacts from '@/components/about_facts';
import CompanyProfileSection from '@/components/about/CompanyProfileSection';

export default function HomePage() {
    return (
        <>
            <HeroCarousel />
             <CompanyProfileSection />
            <AboutFacts/>
            {/* <WhyChooseUs /> */}
            <ServicesSection />
            {/* <ProjectsSection /> */}
           <TeamSection/>
            <TestimonialsSection />
            <ClientsSection />
        </>
    );
}
