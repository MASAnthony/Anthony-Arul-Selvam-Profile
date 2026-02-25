import { portfolioData } from '../data/portfolio';
import { Reveal } from './Reveal';
import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react';

const Timeline = () => {
    const { experience } = portfolioData;

    return (
        <section id="experience" className="py-8 bg-white border-y border-slate-200/50 overflow-hidden">
            <div className="max-w-5xl mx-auto px-6">
                <Reveal width="w-full">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-[#0F172A] relative inline-block left-1/2 -translate-x-1/2">
                        Experience
                        <span className="absolute -bottom-3 left-0 w-full h-1 bg-[#4F46E5] rounded-full"></span>
                    </h2>
                </Reveal>

                <div className="relative">
                    {/* Central vertical line */}
                    <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#4F46E5] via-[#0891b2] to-transparent hidden md:block" />

                    <div className="flex flex-col gap-10">
                        {experience.map((exp, index) => {
                            const isLeft = index % 2 === 0;
                            return (
                                <Reveal key={index} delay={index * 150} width="w-full">
                                    <div className={`flex items-center gap-6 md:gap-0 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}>

                                        {/* Card */}
                                        <div className={`w-full md:w-[calc(50%-2rem)] group`}>
                                            <div
                                                className="bg-[#F8FAFC] rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 relative"
                                                style={{ borderLeftColor: exp.color, borderLeftWidth: '4px' }}
                                            >
                                                {/* Type Badge */}
                                                <span
                                                    className="absolute -top-3 left-5 px-3 py-0.5 rounded-full text-xs font-bold text-white shadow"
                                                    style={{ backgroundColor: exp.color }}
                                                >
                                                    {exp.type}
                                                </span>

                                                {/* Role & Company */}
                                                <div className="flex items-start gap-3 mb-3 mt-1">
                                                    <div className="p-2 rounded-lg mt-0.5 shrink-0" style={{ backgroundColor: exp.color + '20' }}>
                                                        <Briefcase size={18} style={{ color: exp.color }} />
                                                    </div>
                                                    <div>
                                                        <h3 className="text-lg font-bold text-[#0F172A] group-hover:text-[#4F46E5] transition-colors">
                                                            {exp.role}
                                                        </h3>
                                                        <p className="text-sm font-semibold text-[#64748B]">{exp.company}</p>
                                                    </div>
                                                </div>

                                                {/* Duration */}
                                                <div className="flex items-center gap-2 mb-4">
                                                    <Calendar size={14} className="text-[#94a3b8]" />
                                                    <span className="text-xs text-[#94a3b8] font-medium">{exp.duration}</span>
                                                </div>

                                                {/* Highlights */}
                                                <ul className="space-y-2">
                                                    {exp.highlights.map((h, i) => (
                                                        <li key={i} className="flex items-start gap-2 text-sm text-[#475569]">
                                                            <CheckCircle2 size={14} className="mt-0.5 shrink-0" style={{ color: exp.color }} />
                                                            {h}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>

                                        {/* Center dot — desktop only */}
                                        <div className="hidden md:flex w-16 justify-center shrink-0 z-10">
                                            <div
                                                className="w-5 h-5 rounded-full border-4 border-white shadow-md"
                                                style={{ backgroundColor: exp.color }}
                                            />
                                        </div>

                                        {/* Spacer for opposite side */}
                                        <div className="hidden md:block md:w-[calc(50%-2rem)]" />
                                    </div>
                                </Reveal>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Timeline;
