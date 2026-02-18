import LocationMap from './LocationMap';
import { portfolioData } from '../data/portfolio';
import { Mail, MapPin, Phone } from 'lucide-react';
import { Reveal } from './Reveal';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal width="w-full">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-[#0F172A] relative inline-block left-1/2 -translate-x-1/2">
            Get In Touch
            <span className="absolute -bottom-3 left-0 w-full h-1 bg-[#4F46E5] rounded-full"></span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
          {/* Left Column: Contact Info */}
          <Reveal width="w-full">
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-[#0F172A] mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-center gap-4 p-4 bg-[#F8FAFC] rounded-xl border border-slate-200 hover:border-[#4F46E5]/50 transition-all group">
                  <div className="p-3 bg-[#EEF2FF] rounded-lg text-[#4F46E5] group-hover:bg-[#4F46E5] group-hover:text-white transition-colors">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-[#64748B]">Email</p>
                    <a href={`mailto:${portfolioData.personal.email}`} className="text-[#0F172A] hover:text-[#4F46E5] transition-colors font-medium">
                      {portfolioData.personal.email}
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-4 p-4 bg-[#F8FAFC] rounded-xl border border-slate-200 hover:border-[#4F46E5]/50 transition-all group">
                  <div className="p-3 bg-[#EEF2FF] rounded-lg text-[#4F46E5] group-hover:bg-[#4F46E5] group-hover:text-white transition-colors">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-[#64748B]">Location</p>
                    <p className="text-[#0F172A] font-medium">{portfolioData.contact.location}</p>
                  </div>
                </div>

                {/* Phone (Optional/Placeholder) */}
                <div className="flex items-center gap-4 p-4 bg-[#F8FAFC] rounded-xl border border-slate-200 hover:border-[#4F46E5]/50 transition-all group">
                  <div className="p-3 bg-[#EEF2FF] rounded-lg text-[#4F46E5] group-hover:bg-[#4F46E5] group-hover:text-white transition-colors">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-[#64748B]">Phone</p>
                    <p className="text-[#0F172A] font-medium">+91 8220620376</p>
                  </div>
                </div>
              </div>

              {/* Socials */}
              <div>
                <h4 className="text-lg font-semibold text-[#0F172A] mb-4">Socials</h4>
                <div className="flex flex-wrap gap-4">
                  {portfolioData.socials.map((social) => (
                    <a 
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-[#334155] hover:text-white hover:border-[#4F46E5] hover:bg-[#4F46E5] transition-all"
                    >
                      <social.icon size={20} />
                      <span>{social.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right Column: Map */}
          <Reveal width="w-full" delay={200} fullHeight>
            <div className="h-full min-h-[400px] w-full rounded-2xl overflow-hidden shadow-inner border border-slate-200 bg-slate-50 relative z-0">
               <LocationMap />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
