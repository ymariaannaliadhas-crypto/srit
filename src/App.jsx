import { Header } from "./components/srit/Header";
import { Hero } from "./components/srit/Hero";
import Healthcare from "./components/Healthcare";

// 1. Import IcarKnoSection separately from its own file
import IcarKnoSection from "./components/srit/IcarKnoSection"; 

import {
  PerformanceDashboard,
  PortalCards,
  About,
  Features,
  // IcarKnoSection, <--- REMOVE THIS LINE from here
  Entertainment,
  CyberSecurity,
  PartnerAndPlans,
  SearchPlans,
  Blogs,
  Testimonials,
  TrustedIndustries,
  Certifications,
  Footer,
  BackToTop,
} from "./components/srit/Sections";

function App() {
  return (
    <>
      <Header />

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
        <Blogs/>
        <Testimonials />
      </main>

      <Footer />
      <BackToTop />
    </>
  );
}

export default App;