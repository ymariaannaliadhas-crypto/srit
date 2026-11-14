import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/srit/Header";
import { Footer, AIChatButton } from "./components/srit/Sections";
import HomePage from "./components/HomePage";
import Management from "./components/Management";
import Profile from "./components/Profile";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/management" element={<Management />} />
        <Route path="/management/:slug" element={<Profile />} />
      </Routes>
      <Footer />
      <AIChatButton />
    </BrowserRouter>
  );
}

export default App;