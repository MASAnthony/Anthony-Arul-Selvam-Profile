import { useState, useEffect } from 'react';

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' }
];

const SectionNav = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of section is visible
        rootMargin: '-10% 0px -40% 0px' // Center focus area
      }
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-4">
      {sections.map(({ id, label }) => (
        <button
          key={id}
          onClick={() => scrollToSection(id)}
          className="group relative flex items-center justify-end"
          aria-label={`Scroll to ${label}`}
        >
          <span 
            className={`absolute right-8 px-2 py-1 bg-slate-900 text-white text-xs rounded opacity-0 -translate-x-2 transition-all duration-300 pointer-events-none
              ${activeSection === id ? 'opacity-100 translate-x-0' : 'group-hover:opacity-100 group-hover:translate-x-0'}
            `}
          >
            {label}
          </span>
          <div 
            className={`w-3 h-3 rounded-full transition-all duration-300 border-2 
              ${activeSection === id 
                ? 'bg-[#4F46E5] border-[#4F46E5] scale-125' 
                : 'bg-transparent border-slate-300 hover:border-[#4F46E5] hover:bg-[#4F46E5]/20'
              }
            `}
          />
        </button>
      ))}
    </div>
  );
};

export default SectionNav;
