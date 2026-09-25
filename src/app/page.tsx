import React from "react";
import FinraHeader from "@/components/FinraHeader";
import HeroSection from "@/components/HeroSection";
import CeoSection from "@/components/CeoSection";
import VisionSection from "@/components/VisionSection";
import ValuesSection from "@/components/ValuesSection";
import PhilosophySection from "@/components/PhilosophySection";
import TeamIntroSection from "@/components/TeamIntroSection";
import LeadersSection from "@/components/LeadersSection";
import EcosystemSection from "@/components/EcosystemSection";
import PartnersSection from "@/components/PartnersSection";
import FinraFooter from "@/components/FinraFooter";
import ScrollToTop from "@/components/ScrollToTop";

export default function HomePage() {
  return (
    <>
      <FinraHeader />
      <main className="about-page common-padding-top">
        <HeroSection />
        <CeoSection />
        <VisionSection />
        <ValuesSection />
        <PhilosophySection />
        <TeamIntroSection />
        <LeadersSection />
        <EcosystemSection />
        <PartnersSection />
      </main>
      <FinraFooter />
      <ScrollToTop />
    </>
  );
}
