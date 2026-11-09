import { Header } from "./components/srit/Header";
import { Hero } from "./components/srit/Hero";
import Healthcare from "./components/Healthcare";

import {
  PerformanceDashboard,
  PortalCards,
  About,
  Features,
  IcarKnoSection,
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
} from "./components/Sections";

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