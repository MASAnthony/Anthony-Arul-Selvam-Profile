import LocationMap from './LocationMap';
import { portfolioData } from '../data/portfolio';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white relative inline-block left-1/2 -translate-x-1/2">
          Get In Touch
          <span className="absolute -bottom-3 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"></span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-slate-800/50 p-8 rounded-3xl border border-slate-700/50 backdrop-blur-sm">
          {/* Left Column: Contact Info */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-center gap-4 p-4 bg-slate-800 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-all group">
                <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400 group-hover:bg-blue-500/20 transition-colors">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Email</p>
                  <a href={`mailto:${portfolioData.personal.email}`} className="text-white hover:text-blue-400 transition-colors">
                    {portfolioData.personal.email}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4 p-4 bg-slate-800 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-all group">
                <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400 group-hover:bg-blue-500/20 transition-colors">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Location</p>
                  <p className="text-white">{portfolioData.contact.location}</p>
                </div>
              </div>

              {/* Phone (Optional/Placeholder) */}
              <div className="flex items-center gap-4 p-4 bg-slate-800 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-all group">
                <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400 group-hover:bg-blue-500/20 transition-colors">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Phone</p>
                  <p className="text-white">+91 8220620376</p>
                </div>
              </div>
            </div>

            {/* Socials */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Socials</h4>
              <div className="flex flex-wrap gap-4">
                {portfolioData.socials.map((social) => (
                  <a 
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-300 hover:text-white hover:border-blue-500/50 hover:bg-slate-700 transition-all"
                  >
                    <social.icon size={20} />
                    <span>{social.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Map */}
          <div className="h-full min-h-[400px] w-full rounded-2xl overflow-hidden shadow-lg border border-slate-700 bg-slate-800 relative z-0">
             <LocationMap />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
