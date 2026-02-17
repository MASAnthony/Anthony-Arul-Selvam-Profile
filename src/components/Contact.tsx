const Contact = () => {
    return (
      <section id="contact" className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white relative inline-block left-1/2 -translate-x-1/2">
            Get In Touch
            <span className="absolute -bottom-3 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"></span>
          </h2>
  
          <div className="max-w-xl mx-auto">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  required 
                  className="w-full px-6 py-4 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                />
              </div>
              <div>
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  required 
                  className="w-full px-6 py-4 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                />
              </div>
              <div>
                <textarea 
                  placeholder="Your Message" 
                  required 
                  rows={5}
                  className="w-full px-6 py-4 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full py-4 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold rounded-xl shadow-lg shadow-blue-500/20 transform transition-all active:scale-[0.98]"
              >
                Send Message
              </button>
            </form>
  
            <div className="mt-12 text-center">
              <p className="text-slate-400">
                Or email me directly at <br/>
                <a href="mailto:masanthony3a3@gmail.com" className="text-blue-400 hover:text-blue-300 font-medium text-lg mt-2 inline-block transition-colors">
                  masanthony3a3@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Contact;
