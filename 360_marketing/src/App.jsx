import { BackgroundParallax } from "./components/BackgroundParallax";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { TrustSection } from "./components/TrustSection";
import { ServicesSection } from "./components/ServicesSection";
import { PortfolioSection } from "./components/PortfolioSection";
import { ProcessSection } from "./components/ProcessSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { AboutSection } from "./components/AboutSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { SmoothScrollProvider } from "./components/SmoothScrollProvider";

export default function App() {
  return (
    <div className="relative flex min-h-screen flex-col bg-lux-bg text-lux-text selection:bg-lux-gold/30 selection:text-white">
      <BackgroundParallax />
      <Header />
      <SmoothScrollProvider>
        <main className="pt-24">
          <Hero />
          <TrustSection />
          <ServicesSection />
          <PortfolioSection />
          <ProcessSection />
          <TestimonialsSection />
          <AboutSection />
          <ContactSection />
        </main>
        <Footer />
      </SmoothScrollProvider>
    </div>
  );
}
