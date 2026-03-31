'use client';

import AboutHero from '@/components/about/AboutHero';
import AboutOverviewGrid from '@/components/about/AboutOverviewGrid';
import CompanyProfileSection from '@/components/about/CompanyProfileSection';
import LeadershipMessageSection from '@/components/about/LeadershipMessageSection';
import TeamSection from '@/components/team';
import SafetySection from '@/components/SafetySection';
import AboutFacts from '@/components/about_facts';
export default function About() {
  return (
    <>
      <AboutHero title="About Us" />
      <CompanyProfileSection />
      <AboutOverviewGrid />
      <LeadershipMessageSection
        eyebrow="Chairman&apos;s Corner"
        title="Leadership Built on Trust and Discipline"
        imageSrc="/award/S P Singh.JPG"
        imageAlt="Chairman&apos;s Corner"
        backgroundClassName="bg-[#f8f9fa]"
        description={[
          'Vaaman Engineers was founded with a long-term industrial vision: build dependable operations, uphold safety without compromise, and create capability that scales with the nation&apos;s core sectors.',
          'That philosophy continues to guide every site, every team, and every client partnership we take on today.',
        ]}
      />
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
      <AboutFacts />
      <TeamSection />
      <SafetySection />
    </>
  );
}
