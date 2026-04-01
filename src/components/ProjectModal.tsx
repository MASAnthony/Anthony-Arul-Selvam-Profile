import { useEffect } from 'react';
import { Reveal } from './Reveal';
import { X, CheckCircle2, Database, Workflow, Sparkles, Rocket } from 'lucide-react';

interface ProjectModalProps {
    isOpen: boolean;
    onClose: () => void;
    project: {
        title: string;
        description: string;
        detailedDescription?: string;
        features?: string[];
        techStack?: {
            frontend: string[];
            backend: string[];
        };
        workflow?: string[];
        keyConcepts?: string[];
        specialFeatures?: string;
        futureEnhancements?: string[];
    };
}

const ProjectModal = ({ isOpen, onClose, project }: ProjectModalProps) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div 
                className="absolute inset-0 bg-[#0F172A]/80 backdrop-blur-sm transition-opacity" 
                onClick={onClose} 
            />
            
            <div className="bg-white rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative shadow-2xl flex flex-col md:flex-row animate-in fade-in zoom-in duration-300">
                <button 
                    onClick={onClose}
                    className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 text-slate-500 hover:bg-[#4F46E5] hover:text-white transition-all z-10"
                >
                    <X size={20} />
                </button>

                <div className="p-8 md:p-12 w-full">
                    <Reveal>
                        <header className="mb-8">
                            <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4">{project.title}</h2>
                            <div className="h-1.5 w-20 bg-[#4F46E5] rounded-full mb-6"></div>
                            <p className="text-[#64748B] text-lg leading-relaxed">{project.detailedDescription || project.description}</p>
                        </header>
                    </Reveal>

                    <div className="grid md:grid-cols-2 gap-10">
                        {/* Features */}
                        <Reveal delay={100}>
                            <section>
                                <h3 className="text-xl font-bold text-[#0F172A] mb-4 flex items-center gap-2">
                                    <Sparkles className="text-[#4F46E5]" size={22} />
                                    Core Features
                                </h3>
                                <ul className="space-y-3">
                                    {project.features?.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-3 text-[#475569]">
                                            <CheckCircle2 className="text-emerald-500 mt-1 flex-shrink-0" size={18} />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        </Reveal>

                        {/* Tech Stack */}
                        <Reveal delay={200}>
                            <section>
                                <h3 className="text-xl font-bold text-[#0F172A] mb-4 flex items-center gap-2">
                                    <Database className="text-[#4F46E5]" size={22} />
                                    Tech Stack
                                </h3>
                                <div className="space-y-4">
                                    {project.techStack?.frontend && (
                                        <div>
                                            <p className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-2">Frontend</p>
                                            <div className="flex flex-wrap gap-2">
                                                {project.techStack.frontend.map(tech => (
                                                    <span key={tech} className="px-3 py-1 bg-slate-50 border border-slate-200 text-slate-600 rounded-lg text-sm">{tech}</span>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                    {project.techStack?.backend && (
                                        <div>
                                            <p className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-2">Backend</p>
                                            <div className="flex flex-wrap gap-2">
                                                {project.techStack.backend.map(tech => (
                                                    <span key={tech} className="px-3 py-1 bg-slate-50 border border-slate-200 text-slate-600 rounded-lg text-sm">{tech}</span>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </section>
                        </Reveal>

                        {/* Workflow */}
                        <Reveal delay={300}>
                            <section className="md:col-span-2">
                                <h3 className="text-xl font-bold text-[#0F172A] mb-4 flex items-center gap-2">
                                    <Workflow className="text-[#4F46E5]" size={22} />
                                    Development Workflow
                                </h3>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    {project.workflow?.map((step, i) => (
                                        <div key={i} className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                                            <div className="w-8 h-8 rounded-full bg-[#4F46E5]/10 text-[#4F46E5] flex items-center justify-center font-bold mb-3">{i + 1}</div>
                                            <p className="text-[#475569] text-sm leading-relaxed">{step}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </Reveal>

                        {/* Special Features & Future */}
                        <Reveal delay={400}>
                            <section>
                                <h3 className="text-xl font-bold text-[#0F172A] mb-4 flex items-center gap-2">
                                    <Sparkles className="text-amber-500" size={22} />
                                    What Makes It Special
                                </h3>
                                <p className="text-[#475569] leading-relaxed italic border-l-4 border-amber-500 pl-4 py-2 bg-amber-50/50 rounded-r-xl">
                                    "{project.specialFeatures}"
                                </p>
                            </section>
                        </Reveal>

                        <Reveal delay={500}>
                            <section>
                                <h3 className="text-xl font-bold text-[#0F172A] mb-4 flex items-center gap-2">
                                    <Rocket className="text-indigo-500" size={22} />
                                    Future Roadmap
                                </h3>
                                <ul className="space-y-2">
                                    {project.futureEnhancements?.map((item, i) => (
                                        <li key={i} className="text-[#475569] flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        </Reveal>
                    </div>

                    <div className="mt-12 flex justify-center">
                        <button 
                            onClick={onClose}
                            className="px-8 py-3 bg-[#4F46E5] hover:bg-[#3730A3] text-white rounded-full font-bold transition-all shadow-lg hover:shadow-indigo-500/20 active:scale-95"
                        >
                            Got it, thanks!
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectModal;
