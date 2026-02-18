import { portfolioData } from '../data/portfolio';

const About = () => {
    const { about } = portfolioData;

    return (
      <section id="about" className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white relative inline-block left-1/2 -translate-x-1/2">
            {about.title}
            <span className="absolute -bottom-3 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"></span>
          </h2>
          
          <div className="max-w-3xl mx-auto bg-slate-900/50 p-8 md:p-12 rounded-2xl border border-slate-800 backdrop-blur-sm shadow-xl">
            <p className="text-lg text-slate-300 leading-relaxed text-center">
              {about.description}
            </p>
          </div>
        </div>
      </section>
    );
  };
  
  export default About;
