const Skills = () => {
    const skills = ['React', 'Angular', 'NodeJs', 'MongoDB', 'AI Integration', 'Postman', 'Git', 'HTML5', 'CSS3', 'JavaScript'];
  
    return (
      <section id="skills" className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white relative inline-block left-1/2 -translate-x-1/2">
            Technical Skills
            <span className="absolute -bottom-3 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"></span>
          </h2>
  
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {skills.map((skill) => (
              <div 
                key={skill} 
                className="bg-slate-800 hover:bg-slate-700 p-6 rounded-xl border border-slate-700/50 shadow-md text-center transition-all hover:-translate-y-1 hover:shadow-blue-500/10 group cursor-default"
              >
                <h3 className="text-slate-300 font-medium group-hover:text-blue-400 transition-colors">{skill}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Skills;
