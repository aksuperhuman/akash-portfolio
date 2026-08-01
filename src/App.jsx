import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";
import CursorGlow from "./components/CursorGlow";
import ParticlesBackground from "./components/ParticlesBackground";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

function App() {
  return (
    <div className="relative min-h-screen">
      <ParticlesBackground />
      <CursorGlow />
      <ScrollProgress />
      <Navbar />
      <ScrollToTop />
      <main className="relative z-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
