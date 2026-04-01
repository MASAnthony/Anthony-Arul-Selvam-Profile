export const projectsData = [
    {
        title: "Expense Tracker with Smart Insights",
        description: "A modern full-stack personal finance dashboard that helps users track expenses, manage monthly salary, and gain actionable financial insights through interactive visualizations.",
        tags: ['React', 'NestJS', 'TypeScript', 'Tailwind CSS', 'MongoDB', 'Recharts'],
        detailedDescription: "The Expense Tracker with Smart Insights is a full-stack web application designed to help users manage their personal finances effectively. It goes beyond basic tracking by introducing a salary-based financial analysis system. Users can set their monthly income, log expenses, and visualize their spending behavior through an intuitive dashboard.",
        features: [
            "Add, edit, and delete expenses",
            "Categorize expenses (Food, Travel, Bills, etc.)",
            "Monthly salary setup",
            "Real-time dashboard updates",
            "Total expenses vs income tracking",
            "Net savings and savings rate (%) calculation",
            "Category-wise spending breakdown",
            "Daily and monthly trends visualizations"
        ],
        techStack: {
            frontend: ['React (Vite)', 'TypeScript', 'Tailwind CSS', 'Recharts'],
            backend: ['NestJS', 'MongoDB (Mongoose)']
        },
        workflow: [
            "User sets monthly salary",
            "Adds daily expenses which are stored in MongoDB via NestJS API",
            "Dashboard calculates real-time insights (Total expenses, Savings, Trends)",
            "Insights are visualized using interactive charts and summary cards"
        ],
        keyConcepts: ['REST API development', 'Component-based architecture', 'State management', 'Data aggregation and analytics'],
        specialFeatures: 'Salary-based insights (not just basic CRUD), clean fintech-style UI, real-world utility.',
        futureEnhancements: ['User authentication (JWT)', 'Budget alerts', 'Export reports (PDF/Excel)', 'AI-based financial suggestions']
    },
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
        description: "Developed and maintained a secure authentication platform consisting of Admin UI, User UI, Login UI, and Backend services. Rewrote Login UI to support legacy browsers and PowerShell environments. Implemented Multi-Factor Authentication (SMS/Email), FIDO authentication with QR code handling, webhook report APIs, login failure reports with pagination, and audit trail reporting. Configured breached password validation, CAPTCHA integration, bulk user creation via Excel upload, and secure token handling.",
        tags: ['Angular', 'NestJS', 'MongoDB', 'JWT', 'MFA', 'FIDO', 'REST APIs']
    },
    {
        title: "Playwright E-Commerce Test Automation Framework",
        description: "Designed and built an end-to-end test automation framework for a live e-commerce/healthcare platform. Covers the complete user journey — from OTP-based login and address management to health package selection, order booking, and payment confirmation. Implemented Page Object Model (POM) with reusable page classes, custom Playwright fixtures for dependency injection, broken link & broken image detection utilities, and centralized test data management via testData.ts and .env. Configured Playwright HTML reporter alongside Ortoni Report for rich visual dashboards.",
        tags: ['TypeScript', 'Playwright', 'Node.js', 'Ortoni Report', 'Dotenv']
    }
];
