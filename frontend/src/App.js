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

function App() {
  return (
    <div className="App" data-testid="app-root">
      <Loader />
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

export default App;