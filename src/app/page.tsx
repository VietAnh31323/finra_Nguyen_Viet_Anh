import React from "react";
import type { Metadata } from "next";
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
import { absoluteUrl, SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/utils/site";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}#organization`,
      name: SITE_NAME,
      legalName: "Công Ty Cổ Phần Công Nghệ Tài Chính Finra Capital",
      url: SITE_URL,
      logo: absoluteUrl("/resource/images/illus/logo-full.svg"),
      email: "info@finra.com.vn",
      telephone: "1900 5082",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Tầng 10, Tòa nhà Hapro, Số 11B Cát Linh, phường Ô Chợ Dừa",
        addressLocality: "Hà Nội",
        addressCountry: "VN",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "1900 5082",
        contactType: "customer service",
        areaServed: "VN",
        availableLanguage: "Vietnamese",
      },
      sameAs: [
        "https://finra.com.vn",
        "https://apps.apple.com/vn/app/finrainvest/id6738405146",
        "https://play.google.com/store/apps/details?id=com.bolt.finracapital",
      ],
    },
    {
      "@type": "AboutPage",
      "@id": `${SITE_URL}#webpage`,
      url: SITE_URL,
      name: "Về chúng tôi | FINRA Capital",
      description: SITE_DESCRIPTION,
      inLanguage: "vi-VN",
      about: { "@id": `${SITE_URL}#organization` },
      primaryImageOfPage: absoluteUrl("/resource/images/og-image.jpg"),
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\u003c"),
        }}
      />
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
