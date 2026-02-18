import { portfolioData } from '../data/portfolio';
import { Reveal } from './Reveal';

const Skills = () => {
    const { skills } = portfolioData;
  
    return (
      <section id="skills" className="py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal width="w-full">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-[#0F172A] relative inline-block left-1/2 -translate-x-1/2">
              Technical Skills
              <span className="absolute -bottom-3 left-0 w-full h-1 bg-[#4F46E5] rounded-full"></span>
            </h2>
          </Reveal>
  
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {skills.map((skill, index) => (
              <Reveal key={skill} delay={index * 50} width="w-full">
                <div 
                  className="bg-white hover:bg-[#4F46E5] p-6 rounded-xl border border-slate-200 shadow-sm text-center transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-[#4F46E5]/20 group cursor-default h-full flex items-center justify-center"
                >
                  <h3 className="text-[#334155] font-semibold group-hover:text-white transition-colors">{skill}</h3>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    );
};

export default Skills;
