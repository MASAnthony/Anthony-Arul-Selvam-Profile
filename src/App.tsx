import { useState } from 'react'
import './App.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="app">
      <nav className="navbar">
        <div className="container">
          <div className="logo">Anthony</div>
          <div className="menu-toggle" onClick={toggleMenu}>
            {isMenuOpen ? '✕' : '☰'}
          </div>
          <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <li><a href="#home" onClick={() => scrollToSection('home')}>Home</a></li>
            <li><a href="#about" onClick={() => scrollToSection('about')}>About</a></li>
            <li><a href="#skills" onClick={() => scrollToSection('skills')}>Skills</a></li>
            <li><a href="#projects" onClick={() => scrollToSection('projects')}>Projects</a></li>
            <li><a href="#contact" onClick={() => scrollToSection('contact')}>Contact</a></li>
          </ul>
        </div>
      </nav>

      <section id="home" className="hero">
        <div className="hero-content reveal">
          <h1><span>Anthony Arul Selvam</span> Software Developer</h1>
          <p>Building digital experiences with passion and precision. Flexible, reliable, and performance-driven.</p>
          <a href="#projects" className="btn" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>View My Work</a>
        </div>
      </section>

      <section id="about" className="about">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content reveal">
            <p>
              I am flexible, reliable and possess excellent time keeping skills. I am an enthusiastic, self-motivated, reliable, responsible and hard working person. I am a mature team worker and adaptable to all challenging situations. I am able to work well both in a team environment as well as using own initiative.
            </p>
          </div>
        </div>
      </section>

      <section id="skills" className="skills">
        <div className="container">
          <h2 className="section-title">Technical Skills</h2>
          <div className="skills-grid reveal">
            {['React', 'Angular', 'NodeJs', 'MongoDB', 'AI Integration', 'Postman', 'Git', 'HTML5', 'CSS3', 'JavaScript'].map((skill) => (
              <div key={skill} className="skill-card">
                <h3>{skill}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="projects">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid reveal">
            <div className="project-card">
              <div className="project-info">
                <h3>Auth System</h3>
                <p>A secure and scalable authentication system implementation featuring JWT tokens, password hashing, and role-based access control.</p>
                <div className="project-tags">
                  <span>Node.js</span>
                  <span>MongoDB</span>
                  <span>JWT</span>
                  <span>Express</span>
                </div>
              </div>
            </div>
            <div className="project-card">
              <div className="project-info">
                <h3>Protean</h3>
                <p>Advanced web application solution with real-time data integration, complex state management, and an intuitive user interface.</p>
                <div className="project-tags">
                  <span>React</span>
                  <span>API Integration</span>
                  <span>CSS Grid</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-container reveal">
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <textarea placeholder="Your Message" required></textarea>
              </div>
              <button type="submit" className="contact-submit-btn">Send Message</button>
            </form>
            <div className="contact-email">
              <p>masanthony3a3@gmail.com</p>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Anthony Arul Selvam. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
