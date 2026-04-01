import { useState } from 'react';
import { projectsData } from '../data/projects';
import { Reveal } from './Reveal';
import ProjectModal from './ProjectModal';
import { Eye, Rocket } from 'lucide-react';

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState<any>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleViewDetails = (project: any) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    return (
      <section id="projects" className="py-16 md:py-24 bg-[#F8FAFC] border-y border-slate-200/50">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal width="w-full">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-[#0F172A] mb-4 relative inline-block">
                Featured Projects
                <span className="absolute -bottom-4 left-0 w-1/2 h-1.5 bg-[#4F46E5] rounded-full"></span>
              </h2>
              <p className="mt-8 text-[#64748B] text-lg max-w-2xl mx-auto">
                A selection of my recent works, ranging from full-stack applications to automation frameworks.
              </p>
            </div>
          </Reveal>
  
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projectsData.map((project, index) => (
              <Reveal key={index} delay={index * 100} width="w-full">
                <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-2xl hover:border-[#4F46E5]/30 transition-all group h-full flex flex-col">
                  <div className="p-8 flex-grow">
                    <div className="flex items-start justify-between mb-6">
                      <div className="p-3 bg-[#4F46E5]/10 rounded-xl text-[#4F46E5]">
                        <Rocket size={24} />
                      </div>
                      {project.title === "Expense Tracker with Smart Insights" && (
                        <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-bold rounded-full uppercase tracking-wider">New</span>
                      )}
                    </div>
                    
                    <h3 className="text-2xl font-bold text-[#0F172A] mb-4 group-hover:text-[#4F46E5] transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-[#64748B] mb-8 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tags.map((tag) => (
                        <span key={tag} className="px-3 py-1 bg-slate-50 text-slate-500 text-xs rounded-lg border border-slate-100">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="px-8 pb-8">
                    <button 
                      onClick={() => handleViewDetails(project)}
                      className="w-full py-3 bg-white border-2 border-slate-200 text-[#0F172A] rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[#4F46E5] hover:border-[#4F46E5] hover:text-white transition-all shadow-sm hover:shadow-lg active:scale-95"
                    >
                      <Eye size={18} />
                      View Project Details
                    </button>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {selectedProject && (
            <ProjectModal 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)} 
                project={selectedProject} 
            />
        )}
      </section>
    );
};

export default Projects;
