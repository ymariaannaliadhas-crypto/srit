import { useEffect } from "react";
import { Hero } from "./srit/Hero";
import { HeroSolutionCards } from "./srit/HeroSolutionCards";
import { TheThinkingEdge } from "./srit/TheThinkingEdge";
import { FutureProjectsCarousel } from "./srit/FutureProjectsCarousel";
import { AiNativeEngineering } from "./srit/AiNativeEngineering";
import { IndustriesAndServices } from "./srit/IndustriesAndServices";
import { NewsroomGrid } from "./srit/NewsroomGrid";
import { ClientLogoWall } from "./srit/ClientLogoWall";
import { CitizenTouchpoints } from "./srit/CitizenTouchpoints";
import { CareersBanner } from "./srit/CareersBanner";
import IcarKnoSection from "./srit/IcarKnoSection";
import { Certifications } from "./srit/Sections";

export default function HomePage() {
  // Smooth scroll handler for anchor navigation
  useEffect(() => {
    const handleHashScroll = () => {
      const hash = window.location.hash;
      if (!hash) return;
      const targetId = hash.replace("#", "");

      setTimeout(() => {
        let el = document.getElementById(targetId);

        if (!el) {
          const sections = Array.from(document.querySelectorAll("section"));
          if (targetId === "investor" || targetId === "investors") {
            el = sections.find((s) => s.textContent?.includes("Investor Relations")) || null;
          } else if (targetId === "the-thinking-edge") {
            el = sections.find((s) => s.textContent?.includes("The Thinking Edge")) || null;
          } else if (targetId === "newsroom") {
            el = sections.find((s) => s.textContent?.includes("Top Stories")) || null;
          }
        }

        if (el) {
          const headerOffset = 90;
          const elementPosition = el.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: Math.max(0, offsetPosition),
            behavior: "smooth",
          });
        }
      }, 100);
    };

    handleHashScroll();
    window.addEventListener("hashchange", handleHashScroll);
    return () => window.removeEventListener("hashchange", handleHashScroll);
  }, []);

  return (
    <main className="min-h-screen bg-white text-[#172b4d]">
      {/* Hero Section & ASK SRIT */}
      <Hero />

      {/* The 4 Flagship Solution Architectures */}
      <HeroSolutionCards />

      {/* The Thinking Edge: 7 Executive Viewpoints */}
      <TheThinkingEdge />

      {/* AI-Native Engineering & Performance Proof */}
      <AiNativeEngineering />

      {/* Enterprise Knowledge AI Platform */}
      <IcarKnoSection />

      {/* Industries & Services */}
      <IndustriesAndServices />

      {/* Our Future Projects */}
      <FutureProjectsCarousel />

      {/* Top Stories & Corporate Highlights */}
      <NewsroomGrid />

      {/* Real-Life Citizen Touchpoints */}
      <CitizenTouchpoints />

      {/* Trusted Clients Logo Wall */}
      <ClientLogoWall />

      {/* Quality Standards & Accreditations (CMMI Level 5, NABH, ISO) */}
      <Certifications />

      {/* Careers Section */}
      <CareersBanner />
    </main>
  );
}
