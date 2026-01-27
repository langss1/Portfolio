import {
    Cpu, Globe, Shield, Wifi, HardDrive, Terminal, Code, Database, Monitor, Smartphone, Server, Eye,
    BrainCircuit, Sparkles, Radio, Zap, Activity, Search, FileCode, Layout, Atom, Palette
} from "lucide-react";

export const PROFILE = {
    name: "Gilang Wasis Wicaksono",
    roles: ["AI Engineer", "IoT Specialist", "Cyber Threat Analyst", "Fullstack Developer"],
    cvLink: "/Portfolio/files/CV_Gilang_Wasis.pdf",
    socials: {
        linkedin: "https://www.linkedin.com/in/gilang-wasis-wicaksono2/",
        github: "https://github.com/langss1",
        email: "mailto:gilangwasis2@gmail.com"
    }
};

// Kategori untuk Orbit
export const ORBIT_CATEGORIES = [
    {
        id: "AI",
        label: "Artificial Intelligence",
        icon: Cpu,
        techStack: [
            { name: "Python", icon: Code },
            { name: "TensorFlow", icon: BrainCircuit },
            { name: "Gemini", icon: Sparkles },
            { name: "OpenCV", icon: Eye },
        ]
    },
    {
        id: "IoT",
        label: "Internet of Things",
        icon: Wifi,
        techStack: [
            { name: "ESP32", icon: Cpu },
            { name: "MQTT", icon: Radio },
            { name: "Flutter", icon: Smartphone },
            { name: "Arduino", icon: Zap },
        ]
    },
    {
        id: "Web",
        label: "Web Development",
        icon: Globe,
        techStack: [
            { name: "Next.js", icon: Layout },
            { name: "React", icon: Atom },
            { name: "Tailwind", icon: Palette },
            { name: "Laravel", icon: Server },
        ]
    },
    {
        id: "Mobile",
        label: "Mobile Apps",
        icon: Smartphone,
        techStack: [
            { name: "Flutter", icon: Layout },
            { name: "Kotlin", icon: Code },
            { name: "Firebase", icon: Database },
            { name: "Android", icon: Smartphone },
        ]
    },
];

// Project Data
export const PROJECTS = [
    // AI PROJECTS
    {
        id: 1,
        title: "ETLE Monitoring System",
        categories: ["AI"],
        description: "A robust Computer Vision system for Smart City initiatives. Automatically detects and classifies vehicles violating One-Way traffic rules in real-time.",
        techStack: ["Python", "OpenCV", "YOLO", "Computer Vision"],
        githubUrl: "https://github.com/langss1/ComputerVision-Etilang-One-Way",
        demoUrl: null,
        image: "/Portfolio/ETL.png",
        year: "2025"
    },
    {
        id: 2,
        title: "SANI: AI Health Assistant",
        categories: ["AI"],
        description: "Agentic AI health assistant built on Qwen LLM. Provides responsive, personalized health info and understands medical context accurately.",
        techStack: ["Qwen LLM", "Python", "AI Agents", "Fine-tuning"],
        githubUrl: "https://github.com/langss1/HealkathonGatjor",
        demoUrl: null,
        image: "/Portfolio/SANI.png",
        year: "2025"
    },
    {
        id: 3,
        title: "GardaWara AI",
        categories: ["AI", "Mobile"],
        description: "Flutter-based app using TensorFlow Lite to detect online gambling content in real-time and block it to safeguard users.",
        techStack: ["Flutter", "TensorFlow Lite", "Gemini AI", "Dart"],
        githubUrl: "https://github.com/langss1/gardawara",
        demoUrl: null,
        image: "/Portfolio/Garda.png",
        year: "2026",
        award: "1st Place Winner Innovation Competition"
    },

    // IoT PROJECTS
    {
        id: 4,
        title: "Fire Guard IoT",
        categories: ["IoT", "Mobile"],
        description: "Smart home security system combining ESP32, MQTT, and a Flutter app with ML to mitigate fire and gas leaks in real-time.",
        techStack: ["ESP32", "MQTT", "Flutter", "Machine Learning"],
        githubUrl: "https://github.com/langss1/Fire-Guard",
        demoUrl: null,
        image: "/Portfolio/POST.png",
        year: "2026"
    },

    // APLICATION / WEB / MOBILE PROJECTS
    {
        id: 5,
        title: "MSU Inventory System",
        categories: ["Web"],
        description: "Web-based facility management for Syamsul 'Ulum Mosque. Digitizes asset tracking and manages loan schedules efficiently.",
        techStack: ["Web", "PHP", "MySQL", "Inventory Mgmt"],
        githubUrl: "https://github.com/Kruwpuck/Inventaris-MSU-WebPro",
        demoUrl: "https://syamsululum.site/",
        image: "/Portfolio/MSU.png",
        year: "2025"
    },
    {
        id: 6,
        title: "GardaWara Official Site",
        categories: ["Web"],
        description: "Official portal for GardaWara AI. Educates users on gambling prevention and serves as a secure download center.",
        techStack: ["Web Design", "HTML/CSS", "Distribution"],
        githubUrl: "https://github.com/langss1/web-garda",
        demoUrl: "https://gardawara.site/",
        image: "/Portfolio/gardasite.png",
        year: "2026"
    },
    {
        id: 7,
        title: "Agrivest Crowdfunding",
        categories: ["Mobile"],
        description: "Android-based crowdfunding app connecting investors with local farmers to solve capital access issues in agriculture.",
        techStack: ["Android", "Java/Kotlin", "Fintech", "Mobile"],
        githubUrl: "https://github.com/langss1/Road-to-Victory_Agrivest",
        demoUrl: null,
        image: "/Portfolio/agrivest.png",
        year: "2025",
        award: "Finalist Hackathon"
    }
];

export const ACHIEVEMENTS = [
    {
        title: "1st Place Winner",
        event: "Adikara Innovation Competition 2025",
        desc: "Informatics Faculty Telkom University",
        iconType: "Trophy"
    },
    {
        title: "4th Scientific Article",
        event: "Brawijaya National Youth Competition",
        desc: "Universitas Brawijaya",
        iconType: "Document"
    },
    {
        title: "Finalist Hackathon",
        event: "Hackfest 2025",
        desc: "Ciputra University Surabaya",
        iconType: "Laptop"
    },
    {
        title: "Scholarship Awardee",
        event: "Bank Indonesia Scholarship",
        desc: "Merit-based Prestigious Scholarship",
        iconType: "Award"
    }
];

export const TIMELINE = [
    {
        year: "2025",
        role: "Staff External Affairs (Excon)",
        org: "GenBI (Generasi Baru Indonesia)",
        desc: "The Bank Indonesia Scholarship Recipient Community focuses on being the frontliners of Bank Indonesia and providing energy and impact for Indonesia.",
        active: true
    },
    {
        year: "2025",
        role: "Research Group Member",
        org: "Hardware Embedded System Laboratory",
        desc: "Hardware and embedded system research lab that focuses on the development and manufacture of hardware and IoT products.",
        active: true
    },
    {
        year: "2025",
        role: "Study Group Member",
        org: "Multimedia Laboratory",
        desc: "Computer Vision and Multimedia research lab that focuses on the development and creation of computer vision and multimedia products.",
        active: true
    },
    {
        year: "2025",
        role: "Vice Chairman",
        org: "Foresty Laboratory",
        desc: "Cyber Security & computer forensic research lab that focuses on the development and manufacture of cyber security and computer forensic products.",
        active: true
    },
    {
        year: "2025",
        role: "Assistant Practicum",
        org: "Informatics Laboratory",
        desc: "Mentored students in Algorithm Programming and Data Structure courses.",
        active: true
    },
    {
        year: "2024 - 2025",
        role: "Treasurer",
        org: "Central Computer Improvement (CCI)",
        desc: "Automated financial records using Python/Excel, managed encryption & backups.",
        active: false
    },
    {
        year: "2024 - 2025",
        role: "UI/UX Intern",
        org: "Motion Lab",
        desc: "Software management and product research laboratory that focuses on the development and creation of software products.",
        active: false
    },
    {
        year: "2024 - 2025",
        role: "Staff Muda",
        org: "Himpunan Information Technology",
        desc: "Contribute to student association events and study program level organizational management.",
        active: false
    },
    {
        year: "2024 - 2025",
        role: "Study Group Member",
        org: "Hardware Embedded System Laboratory",
        desc: "Hardware and embedded system research lab that focuses on the development and manufacture of hardware and IoT products.",
        active: false
    },
    {
        year: "2023 - 2024",
        role: "Member Web Development",
        org: "Central Computer Improvement (CCI)",
        desc: "IT organization that focuses on research and development of IT products.",
        active: false
    }
];