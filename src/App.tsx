import { lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SectionNav from './components/SectionNav';

// Lazy-load below-fold sections to reduce initial JS parse & execution time
const About    = lazy(() => import('./components/About'));
const Skills   = lazy(() => import('./components/Skills'));
const Projects = lazy(() => import('./components/Projects'));
const Timeline = lazy(() => import('./components/Timeline'));
const Contact  = lazy(() => import('./components/Contact'));
const Footer   = lazy(() => import('./components/Footer'));

function App() {
  return (
    <div className="bg-[#F8FAFC] min-h-screen text-[#0F172A] font-sans selection:bg-[#4F46E5]/20 selection:text-[#4F46E5]">
      <Navbar />
      <SectionNav />
      <main>
        <Hero />
        <Suspense fallback={null}>
          <About />
          <Skills />
          <Projects />
          <Timeline />
          <Contact />
          <Footer />
        </Suspense>
      </main>
    </div>
  )
}

export default App
