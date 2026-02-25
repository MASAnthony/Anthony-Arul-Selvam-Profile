import { portfolioData } from '../data/portfolio';
import { Target, Lightbulb, Zap, Users } from 'lucide-react';
import { Reveal } from './Reveal';

const About = () => {
    const { about, personal } = portfolioData;

    return (
      <section id="about" className="py-8 bg-white border-y border-slate-200/50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            
            {/* Left Column: Profile & Quick Stats */}
            <div className="lg:col-span-5 relative z-10">
              <Reveal width="w-full">
                <div className="relative mx-auto w-64 h-64 mb-5">
                   <div className="absolute inset-0 bg-[#4F46E5] rounded-full blur-2xl opacity-20 animate-pulse"></div>
                   <div className="relative w-full h-full rounded-full bg-gradient-to-br from-[#4F46E5] to-[#4338ca] flex items-center justify-center p-1 shadow-xl">
                      <div className="w-full h-full rounded-full bg-white overflow-hidden flex items-center justify-center">
                        {/* Placeholder for user image if available, using initials for now */}
                        <span className="text-6xl font-bold text-[#4F46E5]">
                            {personal.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                        </span>
                      </div>
                   </div>
                </div>

                <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-[#0F172A] mb-2">{personal.name}</h3>
                    <p className="text-[#64748B] font-medium">{personal.role}</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-[#F8FAFC] p-6 rounded-2xl border border-slate-100 text-center hover:shadow-md transition-shadow">
                        <span className="text-3xl font-bold text-[#4F46E5] block mb-1">{about.stats?.experience}+</span>
                        <span className="text-sm text-[#64748B] font-medium">Years Experience</span>
                    </div>
                    <div className="bg-[#F8FAFC] p-6 rounded-2xl border border-slate-100 text-center hover:shadow-md transition-shadow">
                        <span className="text-3xl font-bold text-[#4F46E5] block mb-1">{about.stats?.projects}+</span>
                        <span className="text-sm text-[#64748B] font-medium">Projects Built</span>
                    </div>
                    <div className="bg-[#F8FAFC] p-6 rounded-2xl border border-slate-100 text-center hover:shadow-md transition-shadow">
                        <span className="text-3xl font-bold text-[#4F46E5] block mb-1">{about.stats?.technologies}+</span>
                        <span className="text-sm text-[#64748B] font-medium">Technologies Mastered</span>
                    </div>
                     <div className="bg-[#F8FAFC] p-6 rounded-2xl border border-slate-100 text-center hover:shadow-md transition-shadow">
                        <span className="text-3xl font-bold text-[#4F46E5] block mb-1">{about.stats?.commits}+</span>
                        <span className="text-sm text-[#64748B] font-medium">Code Commits</span>
                    </div>
                </div>
              </Reveal>
            </div>

            {/* Right Column: Bio & Values */}
            <div className="lg:col-span-7">
               <Reveal width="w-full" delay={200}>
                  <h2 className="text-4xl lg:text-5xl font-bold text-[#0F172A] mb-8">
                    {about.title}
                  </h2>
                  
                  <p className="text-lg text-[#334155] leading-relaxed mb-8">
                     {about.description}
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-[#eff6ff] p-6 rounded-2xl border border-[#dbeafe] hover:border-[#4F46E5]/30 transition-colors">
                          <div className="flex items-center gap-3 mb-3">
                              <Target className="text-[#4F46E5]" size={24} />
                              <h4 className="font-bold text-[#0F172A]">Mission</h4>
                          </div>
                          <p className="text-sm text-[#475569] leading-relaxed">{about.mission}</p>
                      </div>

                      <div className="bg-[#eff6ff] p-6 rounded-2xl border border-[#dbeafe] hover:border-[#4F46E5]/30 transition-colors">
                          <div className="flex items-center gap-3 mb-3">
                              <Lightbulb className="text-[#eca121]" size={24} />
                              <h4 className="font-bold text-[#0F172A]">Vision</h4>
                          </div>
                          <p className="text-sm text-[#475569] leading-relaxed">{about.vision}</p>
                      </div>

                       <div className="bg-[#eff6ff] p-6 rounded-2xl border border-[#dbeafe] hover:border-[#4F46E5]/30 transition-colors">
                          <div className="flex items-center gap-3 mb-3">
                              <Zap className="text-[#eab308]" size={24} />
                              <h4 className="font-bold text-[#0F172A]">Approach</h4>
                          </div>
                          <p className="text-sm text-[#475569] leading-relaxed">{about.approach}</p>
                      </div>

                       <div className="bg-[#eff6ff] p-6 rounded-2xl border border-[#dbeafe] hover:border-[#4F46E5]/30 transition-colors">
                          <div className="flex items-center gap-3 mb-3">
                              <Users className="text-[#2DD4BF]" size={24} />
                              <h4 className="font-bold text-[#0F172A]">Leadership</h4>
                          </div>
                          <p className="text-sm text-[#475569] leading-relaxed">{about.values}</p>
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
