import { useEffect } from "react";
import { Hero } from "./Hero";
import Healthcare from "./Healthcare";
import IcarKnoSection from "./IcarKnoSection";
import {
  PerformanceDashboard,
  PortalCards,
  About,
  Features,
  //FutureProjects,
  AiNativeEngineering,
  Entertainment,
  CyberSecurity,
  PartnerAndPlans,
  SearchPlans,
  Blogs,
  Testimonials,
  ClientLogoWall,   // <── ADDED
  CareersSection,   // <── ADDED
} from "./Sections";

export default function HomePage() {
  // Handle smooth scroll & highlight when arriving with a hash (e.g. from /management)
  useEffect(() => {
    const handleHashScroll = () => {
      const hash = window.location.hash;
      if (!hash) return;
      const targetId = hash.replace("#", "");

      setTimeout(() => {
        let el = document.getElementById(targetId);

        // Fallback resolver if direct ID is not on container
        if (!el) {
          const sections = Array.from(document.querySelectorAll("section"));
          if (targetId === "investors") {
            el = sections.find((s) => s.textContent?.includes("Investor Relations")) || null;
          } else if (targetId === "certifications") {
            el = sections.find((s) => s.textContent?.includes("CMMI Level 5")) || null;
          } else if (targetId === "testimonials") {
            el = sections.find((s) => s.textContent?.includes("met our expectations")) || null;
          }
        }

        if (el) {
          const headerOffset = 95;
          const elementPosition = el.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: Math.max(0, offsetPosition),
            behavior: "smooth",
          });

          el.classList.add(
            "transition-all",
            "duration-500",
            "ring-4",
            "ring-[#079fdf]",
            "ring-offset-4"
          );
          setTimeout(() => {
            el?.classList.remove("ring-4", "ring-[#079fdf]", "ring-offset-4");
          }, 2400);
        }
      }, 140);
    };

    handleHashScroll();
    window.addEventListener("hashchange", handleHashScroll);
    return () => window.removeEventListener("hashchange", handleHashScroll);
  }, []);

  return (
    <main>
      <Hero />
      <PortalCards />
      <Features />
      <AiNativeEngineering />
      <About />
      <Healthcare />
      <PerformanceDashboard />
      <IcarKnoSection />
      <Entertainment />
      <CyberSecurity />
      <PartnerAndPlans />
      <SearchPlans />
      <Blogs />
      <ClientLogoWall />   {/* <── ADDED */}
      <CareersSection />   {/* <── ADDED */}
      <Testimonials />
    </main>
  );
}