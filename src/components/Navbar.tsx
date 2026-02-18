import { useState } from 'react';
import { portfolioData } from '../data/portfolio';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (href: string) => {
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent cursor-pointer" onClick={() => scrollToSection('#home')}>
          Anthony
        </div>
        
        <div className="md:hidden text-2xl cursor-pointer text-slate-100" onClick={toggleMenu}>
          {isMenuOpen ? '✕' : '☰'}
        </div>

        <ul className={`md:flex gap-8 items-center ${isMenuOpen ? 'absolute top-16 left-0 w-full bg-slate-900 flex flex-col p-6 gap-4 border-b border-slate-700' : 'hidden'}`}>
          {portfolioData.navbar.map((item) => (
            <li key={item.label}>
              <a 
                href={item.href} 
                onClick={(e) => { e.preventDefault(); scrollToSection(item.href); }}
                className="text-slate-300 hover:text-blue-400 transition-colors text-sm font-medium uppercase tracking-wider block"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
