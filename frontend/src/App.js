import React from "react";
import "./App.css";
import { Toaster } from "sonner";

import { Navbar } from "./components/site/Navbar";
import { Hero } from "./components/site/Hero";
import { Trust } from "./components/site/Trust";
import { Marquee } from "./components/site/Marquee";
import { Services } from "./components/site/Services";
import { FeaturedWork } from "./components/site/FeaturedWork";
import { WhySuryanova } from "./components/site/WhySuryanova";
import { Process } from "./components/site/Process";
import { Testimonials } from "./components/site/Testimonials";
import { About } from "./components/site/About";
import { Contact } from "./components/site/Contact";
import { Footer } from "./components/site/Footer";
import { WhatsAppButton } from "./components/site/WhatsAppButton";
import { Loader } from "./components/site/Loader";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WebsiteDesign from "./pages/WebsiteDesign";
import WebDevelopment from "./pages/WebDevelopment";
import AISolutions from "./pages/AISolutions";
import AutomationSystems from "./pages/AutomationSystems";
import BrandIdentity from "./pages/BrandIdentity";
import SEOOptimization from "./pages/SEOOptimization";
import EcommerceDevelopment from "./pages/EcommerceDevelopment";


function Home() {
  return (
    <div className="App" data-testid="app-root">
      {/* <Loader /> */}
      <Navbar />

      <main>
        <Hero />
        <Trust />
        <Marquee />
        <Services />
        <FeaturedWork />
        <WhySuryanova />
        <Process />
        <Testimonials />
        <About />
        <Contact />
      </main>

      <Footer />
      <WhatsAppButton />
      <Toaster position="bottom-center" richColors closeButton />
    </div>
  );
}
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/website-design" element={<WebsiteDesign />} />
      <Route path="/web-development" element={<WebDevelopment />} />
      <Route path="/ai-solutions" element={<AISolutions />} />
      <Route path="/automation-systems" element={<AutomationSystems />} />
      <Route path="/brand-identity" element={<BrandIdentity />} />
      <Route path="/seo-optimization" element={<SEOOptimization />} />
      <Route path="/ecommerce-development" element={<EcommerceDevelopment />} />
      </Routes>
    </BrowserRouter>
  );
}
