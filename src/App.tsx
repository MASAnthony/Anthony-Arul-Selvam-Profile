import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SectionNav from './components/SectionNav';

function App() {
  return (
    <div className="bg-[#F8FAFC] min-h-screen text-[#0F172A] font-sans selection:bg-[#4F46E5]/20 selection:text-[#4F46E5]">
      <Navbar />
      <SectionNav />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Timeline />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
