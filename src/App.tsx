import { lazy, Suspense, useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SectionNav from './components/SectionNav';

// Lazy-load below-fold sections
const About    = lazy(() => import('./components/About'));
const Skills   = lazy(() => import('./components/Skills'));
const Projects = lazy(() => import('./components/Projects'));
const Timeline = lazy(() => import('./components/Timeline'));
const Contact  = lazy(() => import('./components/Contact'));
const Footer   = lazy(() => import('./components/Footer'));

// Wrapper to only render components when they are near the viewport
const LazySection = ({ children, id, minHeight = "400px" }: { children: React.ReactNode, id: string, minHeight?: string }) => {
  const [hasBeenInView, setHasBeenInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasBeenInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' } // Load a bit earlier for smoother transition
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [id]);

  return (
    <div ref={ref} id={id} style={{ minHeight: hasBeenInView ? 'auto' : minHeight }}>
      {hasBeenInView && <Suspense fallback={null}>{children}</Suspense>}
    </div>
  );
};

function App() {
  return (
    <div className="bg-[#F8FAFC] min-h-screen text-[#0F172A] font-sans selection:bg-[#4F46E5]/20 selection:text-[#4F46E5]">
      <Navbar />
      <SectionNav />
      <main>
        <Hero />
        <LazySection id="about" minHeight="500px">
          <About />
        </LazySection>
        <LazySection id="skills" minHeight="400px">
          <Skills />
        </LazySection>
        <LazySection id="projects" minHeight="800px">
          <Projects />
        </LazySection>
        <LazySection id="experience" minHeight="800px">
          <Timeline />
        </LazySection>
        <LazySection id="contact" minHeight="600px">
          <Contact />
        </LazySection>
        <LazySection id="footer" minHeight="200px">
          <Footer />
        </LazySection>
      </main>
    </div>
  )
}

export default App
