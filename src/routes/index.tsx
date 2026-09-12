import { createFileRoute } from "@tanstack/react-router";
import "@/site.css";
import { SiteNav } from "@/components/site/nav";
import { Hero, QuickFacts } from "@/components/site/hero";
import { About, Facilities, Food, Rooms, Safety, WhyUs } from "@/components/site/sections";
import { Gallery, Testimonials } from "@/components/site/gallery";
import {
  Enquiry,
  FinalCallToAction,
  Location,
  MobileActionBar,
  SiteFooter,
} from "@/components/site/contact";
import { useReveal } from "@/hooks/use-reveal";
import { HOSTEL } from "@/lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sri Vinayaka Boys Hostel | ECIL Hyderabad" },
      {
        name: "description",
        content:
          "Comfortable boys hostel in ECIL, Hyderabad with homely food, free Wi-Fi, mineral water, CCTV and lockers.",
      },
      { property: "og:title", content: "Sri Vinayaka Boys Hostel | ECIL Hyderabad" },
      {
        property: "og:description",
        content: "A clean, secure and homely stay for students and working professionals in ECIL.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  useReveal();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Hostel",
    name: HOSTEL.name,
    address: {
      "@type": "PostalAddress",
      streetAddress: "South Kamala Nagar, ECIL, Moula Ali",
      addressLocality: "Hyderabad",
      addressRegion: "Telangana",
      postalCode: "500062",
      addressCountry: "IN",
    },
    telephone: "+91 96182 29417",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <SiteNav />
      <main>
        <Hero />
        <QuickFacts />
        <About />
        <Facilities />
        <Rooms />
        <Food />
        <Safety />
        <WhyUs />
        <Gallery />
        <Testimonials />
        <Location />
        <Enquiry />
        <FinalCallToAction />
      </main>
      <SiteFooter />
      <MobileActionBar />
    </>
  );
}
