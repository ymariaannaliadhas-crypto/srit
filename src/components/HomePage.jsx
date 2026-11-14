import { Hero } from "./srit/Hero";
import Healthcare from "./Healthcare";
import IcarKnoSection from "./srit/IcarKnoSection";
import {
  PerformanceDashboard,
  PortalCards,
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
  return (
    <main>
      <Hero />
      <TrustedIndustries />
      <Certifications />
      <Features />
      <About />
      <PortalCards />
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