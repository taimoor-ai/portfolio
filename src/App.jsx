import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import TechMarquee from './components/Techmarquee';
import { Analytics } from '@vercel/analytics/react';
import Loader from './components/Loader';

function App() {
  const [scrollY, setScrollY] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);

    // Set loader to disappear after 2 seconds
    const timer = setTimeout(() => setLoading(false), 3000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen bg-[#292929]">
      <Navigation />
      <main>
        <Hero scrollY={scrollY} />
        <About />
        <TechMarquee />
        <Projects />
        <Skills />
        {/* <Experience /> */}
        <Contact />
        <Analytics />
      </main>
      <Footer />
    </div>
  );
}

export default App;