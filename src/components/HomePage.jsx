import { useEffect } from "react";
import { Hero } from "./srit/Hero";
import Healthcare from "./Healthcare";
import IcarKnoSection from "./srit/IcarKnoSection";
import {
  PerformanceDashboard,
  About,
  Features,
  Entertainment,
  CyberSecurity,
  PartnerAndPlans,
  SearchPlans,
  Blogs,
  Testimonials,
  TrustedIndustries,
  Certifications,
} from "./srit/Sections";

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
      <TrustedIndustries />
      <Certifications />
      <Features />
      <About />
      <Healthcare />
      <PerformanceDashboard />
      <IcarKnoSection />
      <Entertainment />
      <CyberSecurity />
      <PartnerAndPlans />
      <SearchPlans />
      <Blogs />
      <Testimonials />
    </main>
  );
}
