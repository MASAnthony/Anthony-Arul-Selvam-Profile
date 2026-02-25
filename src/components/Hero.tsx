import { portfolioData } from '../data/portfolio';
import { Mail, Phone, MapPin, Github } from 'lucide-react';
import { useState, useEffect } from 'react';

const roles = ['Software Developer', 'React Specialist', 'UI Engineer', 'Frontend Craftsman'];

const useTypingEffect = (words: string[], speed = 80, pause = 1800) => {
  const [displayed, setDisplayed] = useState('');
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && charIdx < current.length) {
      timeout = setTimeout(() => setCharIdx(c => c + 1), speed);
    } else if (!deleting && charIdx === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => setCharIdx(c => c - 1), speed / 2);
    } else {
      setDeleting(false);
      setWordIdx(i => (i + 1) % words.length);
    }

    setDisplayed(current.slice(0, charIdx));
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, wordIdx, words, speed, pause]);

  return displayed;
};

const Hero = () => {
    const { hero } = portfolioData;
    const typedRole = useTypingEffect(roles);

    return (
      <section id="home" className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-100 via-[#F8FAFC] to-[#F8FAFC] pt-20 pb-6">
        <div className="absolute w-[600px] h-[600px] bg-[#4F46E5]/5 rounded-full blur-[100px] -top-24 -right-24 pointer-events-none"></div>

        {/* Left Side Contact Info */}
        <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-8 z-20">
           <div className="group flex flex-col items-center gap-2">
              <div className="p-3 bg-white rounded-full shadow-md border border-slate-100 text-[#4F46E5] group-hover:scale-110 transition-transform">
                <Mail size={20} />
              </div>
              <span className="vertical-text text-xs font-medium text-[#64748B] tracking-wider py-2 border-l border-slate-200 pl-2 hidden">Email</span>
              <div className="absolute left-14 top-1 bg-white px-4 py-2 rounded-lg shadow-lg border border-slate-100 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                 <p className="text-sm font-bold text-[#0F172A]">{portfolioData.personal.email}</p>
                 <p className="text-xs text-[#64748B]">Email</p>
              </div>
           </div>

           <div className="group flex flex-col items-center gap-2">
              <div className="p-3 bg-white rounded-full shadow-md border border-slate-100 text-[#4F46E5] group-hover:scale-110 transition-transform">
                <Phone size={20} />
              </div>
              <div className="absolute left-14 top-16 bg-white px-4 py-2 rounded-lg shadow-lg border border-slate-100 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                 <p className="text-sm font-bold text-[#0F172A]">{portfolioData.personal.phone}</p>
                 <p className="text-xs text-[#64748B]">Phone</p>
              </div>
           </div>

           <div className="group flex flex-col items-center gap-2">
              <div className="p-3 bg-white rounded-full shadow-md border border-slate-100 text-[#4F46E5] group-hover:scale-110 transition-transform">
                <MapPin size={20} />
              </div>
              <div className="absolute left-14 bottom-1 bg-white px-4 py-2 rounded-lg shadow-lg border border-slate-100 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                 <p className="text-sm font-bold text-[#0F172A]">Sivakasi, Tamil Nadu</p>
                 <p className="text-xs text-[#64748B]">Location</p>
              </div>
           </div>

           <div className="group flex flex-col items-center gap-2">
              <a
                href="https://github.com/MASAnthony?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white rounded-full shadow-md border border-slate-100 text-[#4F46E5] group-hover:scale-110 transition-transform block"
              >
                <Github size={20} />
              </a>
              <div className="absolute left-14 bottom-1 bg-white px-4 py-2 rounded-lg shadow-lg border border-slate-100 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                 <p className="text-sm font-bold text-[#0F172A]">MASAnthony</p>
                 <p className="text-xs text-[#64748B]">GitHub</p>
              </div>
           </div>
        </div>
        
        <div className="relative z-10 text-center max-w-4xl px-4 mt-4 animate-fade-in-up">



          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4 leading-tight tracking-tight text-[#0F172A]">
            <span className="text-[#4F46E5] block mb-2">{hero.highlight}</span>
            {/* Typing effect */}
            <span className="inline-block min-h-[1.2em]">
              {typedRole}
              <span className="animate-pulse text-[#4F46E5]">|</span>
            </span>
          </h1>
          <p className="text-lg md:text-xl text-[#374151] max-w-2xl mx-auto mb-10 leading-relaxed">
            {hero.description}
          </p>
          <a 
            href={hero.action.href}
            onClick={(e) => { 
                e.preventDefault(); 
                document.getElementById(hero.action.href.replace('#', ''))?.scrollIntoView({ behavior: 'smooth' }); 
            }}
            className="inline-block px-8 py-4 bg-[#4F46E5] hover:bg-[#4338ca] text-white font-semibold rounded-full shadow-lg shadow-[#4F46E5]/20 transition-all transform hover:-translate-y-1"
          >
            {hero.action.text}
          </a>
        </div>
      </section>
    );
  };
  
  export default Hero;
