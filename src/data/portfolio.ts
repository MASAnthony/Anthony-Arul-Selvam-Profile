import { Github, Linkedin, Mail } from 'lucide-react';


export const portfolioData = {
    personal: {
        name: "Anthony Arul Selvam",
        surname: "",
        title: "Software Developer",
        email: "masanthony3a3@gmail.com",
        phone: "+91 8220620376",
        role: "Software Developer",
        openToWork: true,
        greeting: "Hi, I'm Anthony Arul Selvam."
    },
    navbar: [
        { label: "Home", href: "#home" },
        { label: "About", href: "#about" },
        { label: "Skills", href: "#skills" },
        { label: "Projects", href: "#projects" },
        { label: "Contact", href: "#contact" }
    ],
    hero: {
        headline: "Software Developer",
        highlight: "Anthony Arul Selvam",
        description: "Building digital experiences with passion and precision. Flexible, reliable, and performance-driven.",
        action: {
            text: "View My Work",
            href: "#projects"
        }
    },
    about: {
        title: "About Me",
        description: "I am flexible, reliable and possess excellent time keeping skills. I am an enthusiastic, self-motivated, reliable, responsible and hard working person. I am a mature team worker and adaptable to all challenging situations. I am able to work well both in a team environment as well as using own initiative."
    },
    skills: [
        'React', 'Angular', 'NodeJs', 'MongoDB', 'AI Integration',
        'Postman', 'Git', 'HTML5', 'CSS3', 'JavaScript'
    ],
    projects: [
        {
            title: "Auth System",
            description: "A secure and scalable authentication system implementation featuring JWT tokens, password hashing, and role-based access control.",
            tags: ['Node.js', 'MongoDB', 'JWT', 'Express']
        },
        {
            title: "Protean",
            description: "Advanced web application solution with real-time data integration, complex state management, and an intuitive user interface.",
            tags: ['React', 'API Integration', 'CSS Grid']
        }
    ],
    socials: [
        { label: "GitHub", icon: Github, href: "https://github.com/Anthony-Arul-Selvam" },
        { label: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/in/anthony-arul-selvam" },
        { label: "Email", icon: Mail, href: "mailto:masanthony3a3@gmail.com" },
    ],
    contact: {
        email: "masanthony3a3@gmail.com",
        location: "Sivakasi, Tamil Nadu, India",
        phone: "+91 8220620376",
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31487.625347318854!2d77.7785591!3d9.4542283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b06cf3096b7617b%3A0x633d45ca46285430!2sSivakasi%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1716301211111!5m2!1sen!2sin",
        socials: [
            { label: "GitHub", href: "https://github.com/Anthony-Arul-Selvam", icon: Github },
            { label: "LinkedIn", href: "https://linkedin.com/in/anthony-arul-selvam", icon: Linkedin },
            { label: "Email", href: "mailto:masanthony3a3@gmail.com", icon: Mail },
        ]
    },
    footer: {
        copyright: `© ${new Date().getFullYear()} Anthony Arul Selvam. All rights reserved.`
    }
};
