import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import { Header } from "./components/srit/Header";
import { Footer, AIChatButton, CompanyPage, ContactPage } from "./components/srit/Sections";
import HomePage from "./components/HomePage";
import Management from "./components/Management";
import Profile from "./components/Profile";
import { InvestorPortal } from "./components/srit/InvestorPortal";
import { IndustryVerticalPage } from "./components/srit/IndustryVerticalPage";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/industries/:verticalId" element={<IndustryVerticalPage />} />
        <Route path="/healthcare" element={<IndustryVerticalPage defaultVerticalId="healthcare" />} />
        <Route path="/e-governance" element={<IndustryVerticalPage defaultVerticalId="egovernance" />} />
        <Route path="/telecom" element={<IndustryVerticalPage defaultVerticalId="telecom" />} />
        <Route path="/cybersecurity" element={<IndustryVerticalPage defaultVerticalId="cybersecurity" />} />
        <Route path="/management" element={<Management />} />
        <Route path="/management/:slug" element={<Profile />} />
        <Route path="/company" element={<CompanyPage />} />
        <Route path="/contact-us" element={<ContactPage />} />
        <Route path="/privacy-policy" element={<InvestorPortal defaultTab="governance" />} />
        
        {/* Investor Portal Routes */}
        <Route path="/investor" element={<InvestorPortal defaultTab="overview" />} />
        <Route path="/investors" element={<InvestorPortal defaultTab="overview" />} />
        <Route path="/invest" element={<InvestorPortal defaultTab="overview" />} />
        <Route path="/investors-information" element={<InvestorPortal defaultTab="financials" />} />
        <Route path="/corporate-governance" element={<InvestorPortal defaultTab="governance" />} />
        <Route path="/annual-report" element={<InvestorPortal defaultTab="annual_reports" />} />
        <Route path="/ipo-documents" element={<InvestorPortal defaultTab="ipo" />} />
      </Routes>
      <Footer />
      <AIChatButton />
    </BrowserRouter>
  );
}

export default App;