const Projects = () => {
    return (
      <section id="projects" className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white relative inline-block left-1/2 -translate-x-1/2">
            Featured Projects
            <span className="absolute -bottom-3 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"></span>
          </h2>
  
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Project 1 */}
            <div className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 shadow-xl hover:shadow-2xl hover:border-slate-700 transition-all group">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">Auth System</h3>
                <p className="text-slate-400 mb-6 leading-relaxed">
                  A secure and scalable authentication system implementation featuring JWT tokens, password hashing, and role-based access control.
                </p>
                <div className="flex flex-wrap gap-3">
                  {['Node.js', 'MongoDB', 'JWT', 'Express'].map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-blue-500/10 text-blue-400 text-sm rounded-full border border-blue-500/20">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
  
            {/* Project 2 */}
            <div className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 shadow-xl hover:shadow-2xl hover:border-slate-700 transition-all group">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">Protean</h3>
                <p className="text-slate-400 mb-6 leading-relaxed">
                  Advanced web application solution with real-time data integration, complex state management, and an intuitive user interface.
                </p>
                <div className="flex flex-wrap gap-3">
                  {['React', 'API Integration', 'CSS Grid'].map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-blue-500/10 text-blue-400 text-sm rounded-full border border-blue-500/20">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Projects;
