const About = () => {
    return (
      <section id="about" className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white relative inline-block left-1/2 -translate-x-1/2">
            About Me
            <span className="absolute -bottom-3 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"></span>
          </h2>
          
          <div className="max-w-3xl mx-auto bg-slate-900/50 p-8 md:p-12 rounded-2xl border border-slate-800 backdrop-blur-sm shadow-xl">
            <p className="text-lg text-slate-300 leading-relaxed text-center">
              I am flexible, reliable and possess excellent time keeping skills. I am an enthusiastic, self-motivated, reliable, responsible and hard working person. I am a mature team worker and adaptable to all challenging situations. I am able to work well both in a team environment as well as using own initiative.
            </p>
          </div>
        </div>
      </section>
    );
  };
  
  export default About;
