import { Header } from "./components/srit/Header";
import { Hero } from "./components/srit/Hero";
import Healthcare from "./components/Healthcare";
import {
  PerformanceDashboard,
  PortalCards,
  About,
  //Features,
  Entertainment,
  CyberSecurity,
  PartnerAndPlans,
  SearchPlans,
 // Achievers,
  Testimonials,
 // DigitalPlatform,
  //Faq,
  //ShareKnowledge,
  //Blogs,
  TrustedIndustries,
  Footer,
  BackToTop,
} from "./components/srit/Sections";

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <PerformanceDashboard />
        <PortalCards />
        <About />
      
        <Healthcare />
        <Entertainment />
        <CyberSecurity />
        <PartnerAndPlans />
        <SearchPlans />
        
        <Testimonials />
        <TrustedIndustries />

      </main>

      <Footer />
      <BackToTop />
    </>
  );
}

export default App;