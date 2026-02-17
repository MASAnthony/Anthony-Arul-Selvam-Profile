const Hero = () => {
    return (
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_50%_50%,#1e293b_0%,#020617_70%)] pt-20">
        <div className="absolute w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[100px] -top-24 -right-24 pointer-events-none"></div>
        
        <div className="relative z-10 text-center max-w-4xl px-4 mt-8 animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4 leading-tight tracking-tight text-white">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent block mb-2">Anthony Arul Selvam</span> 
            Software Developer
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Building digital experiences with passion and precision. Flexible, reliable, and performance-driven.
          </p>
          <a 
            href="#projects" 
            onClick={(e) => { 
              e.preventDefault(); 
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); 
            }}
            className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-full shadow-lg shadow-blue-500/20 transition-all transform hover:-translate-y-1"
          >
            View My Work
          </a>
        </div>
      </section>
    );
  };
  
  export default Hero;
