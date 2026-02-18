import { portfolioData } from '../data/portfolio';
import { Reveal } from './Reveal';

const Projects = () => {
    return (
      <section id="projects" className="py-24 bg-white border-y border-slate-200/50">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal width="w-full">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-[#0F172A] relative inline-block left-1/2 -translate-x-1/2">
              Featured Projects
              <span className="absolute -bottom-3 left-0 w-full h-1 bg-[#4F46E5] rounded-full"></span>
            </h2>
          </Reveal>
  
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {portfolioData.projects.map((project, index) => (
              <Reveal key={index} delay={index * 200} width="w-full">
                <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:border-[#4F46E5]/30 transition-all group h-full">
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-[#0F172A] mb-4 group-hover:text-[#4F46E5] transition-colors">{project.title}</h3>
                    <p className="text-[#64748B] mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {project.tags.map((tag) => (
                        <span key={tag} className="px-3 py-1 bg-[#F1F5F9] text-[#475569] text-sm rounded-full border border-slate-200 font-semibold">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    );
};

export default Projects;
