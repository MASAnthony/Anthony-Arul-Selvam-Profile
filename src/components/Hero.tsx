import { portfolioData } from '../data/portfolio';

const Hero = () => {
    const { hero } = portfolioData;

    return (
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-100 via-[#F8FAFC] to-[#F8FAFC] pt-20">
        <div className="absolute w-[600px] h-[600px] bg-[#4F46E5]/5 rounded-full blur-[100px] -top-24 -right-24 pointer-events-none"></div>
        
        <div className="relative z-10 text-center max-w-4xl px-4 mt-8 animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4 leading-tight tracking-tight text-[#0F172A]">
            <span className="text-[#4F46E5] block mb-2">{hero.highlight}</span> 
            {hero.headline}
          </h1>
          <p className="text-lg md:text-xl text-[#64748B] max-w-2xl mx-auto mb-10 leading-relaxed">
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
