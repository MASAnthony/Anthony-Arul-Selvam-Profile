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
        description: "I am a passionate Software Developer with over 2 years of experience specializing in building scalable web applications. My expertise lies in React.js, TypeScript, and modern state management, where I consistently deliver high-performance, user-centric solutions. From engineering complex admin portals to crafting interactive tools, I thrive on transforming complex requirements into seamless digital experiences.",
        stats: {
            experience: 2,
            projects: 10,
            technologies: 15,
            commits: 1000
        },
        mission: "Transforming ideas into scalable solutions that impact millions of users",
        vision: "Leading AI/ML innovation in fintech and healthcare domains",
        approach: "Data-driven decision making with focus on business impact",
        values: "Building and mentoring world-class engineering teams"
    },
    skills: [
        'React', 'Angular', 'NodeJs', 'MongoDB', 'AI Integration',
        'Postman', 'Git', 'HTML5', 'CSS3', 'JavaScript'
    ],
    projects: [
        {
            title: "DevPersona",
            description: "An interactive and visually improved web application designed to analyze developer personalities. Features a seamless, responsive interface with a persistent light/dark theme switcher, smooth animations, and dynamic results.",
            tags: ['React 19', 'Vite', 'TypeScript', 'Tailwind CSS', 'Zustand', 'Framer Motion']
        },
        {
            title: "CKYCRR Admin Portal",
            description: "Core contributor to the development of the Central KYC Records Registry (CKYCRR) Admin Portal, managing KYC records and compliance. Designed comprehensive User Management with approval workflows and RBAC. Engineered a Content Management System for dynamic billing configurations and notification templates. Developed a secure IP Whitelisting module to ensure stringent security compliance.",
            tags: ['React.js', 'TypeScript', 'Redux Toolkit', 'Material UI', 'RESTful API', 'Git']
        },
        {
            title: "Auth System",
            description: "A secure and scalable authentication system implementation featuring JWT tokens, password hashing, and role-based access control.",
            tags: ['Node.js', 'MongoDB', 'JWT', 'Express']
        }
    ],
    socials: [
        { label: "GitHub", icon: Github, href: "https://github.com/MASAnthony?tab=repositories" },
        { label: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/in/anthony-arul-selvam" },
        { label: "Email", icon: Mail, href: "mailto:masanthony3a3@gmail.com" },
    ],
    contact: {
        email: "masanthony3a3@gmail.com",
        location: "Sivakasi, Tamil Nadu, India",
        phone: "+91 8220620376",
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31487.625347318854!2d77.7785591!3d9.4542283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b06cf3096b7617b%3A0x633d45ca46285430!2sSivakasi%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1716301211111!5m2!1sen!2sin",
        socials: [
            { label: "GitHub", href: "https://github.com/MASAnthony?tab=repositories", icon: Github },
            { label: "LinkedIn", href: "https://linkedin.com/in/anthony-arul-selvam", icon: Linkedin },
            { label: "Email", href: "mailto:masanthony3a3@gmail.com", icon: Mail },
        ]
    },
    footer: {
        copyright: `© ${new Date().getFullYear()} Anthony Arul Selvam. All rights reserved.`
    }
};
