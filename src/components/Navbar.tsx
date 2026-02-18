import { Mail } from 'lucide-react';

const Navbar = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        {/* Logo */}
        <div 
          className="flex items-center gap-2 cursor-pointer group" 
          onClick={() => scrollToSection('home')}
        >
          <div className="relative w-10 h-10 flex items-center justify-center bg-[#4F46E5] text-white rounded-xl shadow-lg shadow-[#4F46E5]/20 group-hover:scale-105 transition-all duration-300">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 stroke-current stroke-[2.5]">
              <path d="M12 2L2 22H22L12 2Z" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M6 14H18" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="text-xl font-bold text-[#0F172A] group-hover:text-[#4F46E5] transition-colors">Anthony</span>
        </div>
        
        {/* Contact Icon */}
        <button 
          onClick={() => scrollToSection('contact')}
          className="p-2.5 bg-[#4F46E5] text-white rounded-full hover:bg-[#4338ca] hover:scale-110 shadow-lg shadow-[#4F46E5]/30 transition-all duration-300 group"
          aria-label="Contact Me"
        >
          <Mail size={20} className="group-hover:animate-pulse" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
