import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import WhyHireMe from './components/WhyHireMe';
import TechStack from './components/TechStack';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackgroundEffects from './components/ui/BackgroundEffects';

function App() {
  return (
    <div className="bg-dark min-h-screen text-white selection:bg-primary/30 selection:text-white relative">
      <BackgroundEffects />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <WhyHireMe />
        <TechStack />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
