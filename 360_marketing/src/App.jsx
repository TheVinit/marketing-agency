import { BackgroundParallax } from "./components/BackgroundParallax";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { TrustSection } from "./components/TrustSection";
import { ServicesSection } from "./components/ServicesSection";
import { PortfolioSection } from "./components/PortfolioSection";
import { AboutSection } from "./components/AboutSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { SmoothScrollProvider } from "./components/SmoothScrollProvider";

export default function App() {
  return (
    <div style={{ position: 'relative', display: 'flex', minHeight: '100vh', flexDirection: 'column', color: 'var(--fg)' }}>
      <BackgroundParallax />
      <Header />
      <SmoothScrollProvider>
        <main style={{ paddingTop: '6rem', paddingBottom: 0, position: 'relative', zIndex: 1 }}>
          <Hero />
          <TrustSection />
          <ServicesSection />
          <PortfolioSection />
          <AboutSection />
          <ContactSection />
        </main>
      </SmoothScrollProvider>
      <Footer />
    </div>
  );
}
