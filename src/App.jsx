import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import CursorGlow from "./components/CursorGlow";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import CaseStudy from "./pages/CaseStudy";
import ContactPage from "./pages/ContactPage";
import ConsultationPage from "./pages/ConsultationPage";

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    // Check localStorage first
    const saved = localStorage.getItem("darkMode");
    if (saved !== null) {
      return JSON.parse(saved);
    }
    // Default to light mode
    return false;
  });

  // Update theme whenever darkMode changes
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <div className="bg-[#120E1E] text-[#F5F3F7] transition-colors duration-300 dark:bg-[#120E1E] dark:text-[#F5F3F7]">
      <CursorGlow />
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Projects />
              <Contact />
            </>
          }
        />
        <Route path="/project/:id" element={<CaseStudy />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/consultation" element={<ConsultationPage />} />
      </Routes>
    </div>
  );
}