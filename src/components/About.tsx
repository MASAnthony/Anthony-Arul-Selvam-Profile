import { aboutData } from '../data/about';
import { personalData } from '../data/personal';
import { Target, Lightbulb, Zap, Users } from 'lucide-react';
import { Reveal } from './Reveal';

const About = () => {
    return (
      <section id="about" className="py-8 bg-white border-y border-slate-200/50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section heading lives above the grid so the DOM heading order is h1 → h2 → h3 */}
          <Reveal width="w-full">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-[#0F172A] relative inline-block left-1/2 -translate-x-1/2">
              {aboutData.title}
              <span className="absolute -bottom-3 left-0 w-full h-1 bg-[#4F46E5] rounded-full"></span>
            </h2>
          </Reveal>

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            
            {/* Left Column: Profile & Quick Stats */}
            <div className="lg:col-span-5 relative z-10">
              <Reveal width="w-full">
                <div className="relative mx-auto w-64 h-64 mb-5">
                   <div className="absolute inset-0 bg-[#4F46E5] rounded-full blur-2xl opacity-20 animate-pulse"></div>
                   <div className="relative w-full h-full rounded-full bg-gradient-to-br from-[#4F46E5] to-[#4338ca] flex items-center justify-center p-1 shadow-xl">
                      <div className="w-full h-full rounded-full bg-white overflow-hidden flex items-center justify-center">
                        <span className="text-6xl font-bold text-[#4F46E5]">
                            AA
                        </span>
                      </div>
                   </div>
                </div>

                <div className="text-center mb-6">
                    <p className="text-2xl font-bold text-[#0F172A] mb-1">{personalData.name}</p>
                    <p className="text-[#4F46E5] font-semibold mb-2">{personalData.role}</p>
                    <div className="flex items-center justify-center gap-3 text-sm text-[#64748B]">
                        <span className="flex items-center gap-1">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                            {personalData.location}
                        </span>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-[#F8FAFC] p-6 rounded-2xl border border-slate-100 text-center hover:shadow-md transition-shadow">
                        <span className="text-3xl font-bold text-[#4F46E5] block mb-1">{aboutData.stats?.experience}+</span>
                        <span className="text-sm text-[#64748B] font-medium">Years Experience</span>
                    </div>
                    <div className="bg-[#F8FAFC] p-6 rounded-2xl border border-slate-100 text-center hover:shadow-md transition-shadow">
                        <span className="text-3xl font-bold text-[#4F46E5] block mb-1">{aboutData.stats?.projects}+</span>
                        <span className="text-sm text-[#64748B] font-medium">Projects Built</span>
                    </div>
                    <div className="bg-[#F8FAFC] p-6 rounded-2xl border border-slate-100 text-center hover:shadow-md transition-shadow">
                        <span className="text-3xl font-bold text-[#4F46E5] block mb-1">{aboutData.stats?.technologies}+</span>
                        <span className="text-sm text-[#64748B] font-medium">Technologies Mastered</span>
                    </div>
                     <div className="bg-[#F8FAFC] p-6 rounded-2xl border border-slate-100 text-center hover:shadow-md transition-shadow">
                        <span className="text-3xl font-bold text-[#4F46E5] block mb-1">{aboutData.stats?.commits}+</span>
                        <span className="text-sm text-[#64748B] font-medium">Code Commits</span>
                    </div>
                </div>
              </Reveal>
            </div>

            {/* Right Column: Bio & Values */}
            <div className="lg:col-span-7">
               <Reveal width="w-full" delay={200}>
                  <p className="text-lg text-[#334155] leading-relaxed mb-8">
                     {aboutData.description}
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-[#eff6ff] p-6 rounded-2xl border border-[#dbeafe] hover:border-[#4F46E5]/30 transition-colors">
                          <div className="flex items-center gap-3 mb-3">
                              <Target className="text-[#4F46E5]" size={24} />
                              <h3 className="font-bold text-[#0F172A]">Mission</h3>
                          </div>
                          <p className="text-sm text-[#475569] leading-relaxed">{aboutData.mission}</p>
                      </div>

                      <div className="bg-[#eff6ff] p-6 rounded-2xl border border-[#dbeafe] hover:border-[#4F46E5]/30 transition-colors">
                          <div className="flex items-center gap-3 mb-3">
                              <Lightbulb className="text-[#eca121]" size={24} />
                              <h3 className="font-bold text-[#0F172A]">Vision</h3>
                          </div>
                          <p className="text-sm text-[#475569] leading-relaxed">{aboutData.vision}</p>
                      </div>

                      <div className="bg-[#eff6ff] p-6 rounded-2xl border border-[#dbeafe] hover:border-[#4F46E5]/30 transition-colors">
                          <div className="flex items-center gap-3 mb-3">
                              <Zap className="text-[#eab308]" size={24} />
                              <h3 className="font-bold text-[#0F172A]">Approach</h3>
                          </div>
                          <p className="text-sm text-[#475569] leading-relaxed">{aboutData.approach}</p>
                      </div>

                      <div className="bg-[#eff6ff] p-6 rounded-2xl border border-[#dbeafe] hover:border-[#4F46E5]/30 transition-colors">
                          <div className="flex items-center gap-3 mb-3">
                              <Users className="text-[#2DD4BF]" size={24} />
                              <h3 className="font-bold text-[#0F172A]">Leadership</h3>
                          </div>
                          <p className="text-sm text-[#475569] leading-relaxed">{aboutData.values}</p>
                      </div>
                  </div>
               </Reveal>
            </div>

          </div>
        </div>
      </section>
    );
};

export default About;
