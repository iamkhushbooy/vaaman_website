import { Header } from '@/components/header';
import { HeroCarousel } from '@/components/sections/HeroCarousel';
import { AboutSection } from '@/components/sections/AboutSection';
import { StatsStrip } from '@/components/sections/StatsStrip';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { TeamSection } from '@/components/sections/TeamSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { ClientsSection } from '@/components/sections/ClientsSection';
import { FooterSection } from '@/components/sections/FooterSection';

export default function HomePage() {
    return (
        <>
            <Header />
            <HeroCarousel />
            <AboutSection />
            <StatsStrip />
            <WhyChooseUs />
            <ServicesSection />
            <ProjectsSection />
            <TeamSection />
            <TestimonialsSection />
            <ClientsSection />
            <FooterSection />
        </>
    );
}
