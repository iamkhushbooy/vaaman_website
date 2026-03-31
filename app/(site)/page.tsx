import { Header } from '@/components/header';
import { HeroCarousel } from '@/components/sections/HeroCarousel';
import { AboutSection } from '@/components/sections/AboutSection';
import { StatsStrip } from '@/components/sections/StatsStrip';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import TeamSection from '@/components/team';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { ClientsSection } from '@/components/sections/ClientsSection';
import { FooterSection } from '@/components/sections/FooterSection';
import AboutFacts from '@/components/about_facts';

export default function HomePage() {
    return (
        <>
            <HeroCarousel />
            <AboutSection />
            <AboutFacts/>
            {/* <StatsStrip /> */}
            <WhyChooseUs />
            <ServicesSection />
            <ProjectsSection />
            {/* <TeamSection /> */}
           <TeamSection/>
            <TestimonialsSection />
            <ClientsSection />
        </>
    );
}
