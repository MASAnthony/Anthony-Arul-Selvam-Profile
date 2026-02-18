import { portfolioData } from '../data/portfolio';
import { Reveal } from './Reveal';

const About = () => {
    const { about } = portfolioData;

    return (
      <section id="about" className="py-24 bg-white border-y border-slate-200/50">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal width="w-full">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-[#0F172A] relative inline-block left-1/2 -translate-x-1/2">
              {about.title}
              <span className="absolute -bottom-3 left-0 w-full h-1 bg-[#4F46E5] rounded-full"></span>
            </h2>
          </Reveal>
          
          <Reveal width="w-full" delay={200}>
            <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <p className="text-lg text-[#334155] leading-relaxed text-center font-medium">
                {about.description}
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    );
  };
  
  export default About;
