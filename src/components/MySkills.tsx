"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ORBIT_CATEGORIES, PROJECTS } from "@/data/portfolio";
import { ArrowUpRight, Github, Code2, Globe } from "lucide-react";
import ScrollScale from "./ScrollScale";
import ImageWithLoader from "./ImageWithLoader";

// Animasi Gradient
const gradientStyle = {
    backgroundImage: 'linear-gradient(to right, #2563eb, #60a5fa, #2563eb)',
    backgroundSize: "200% auto",
    animation: "shine 4s linear infinite"
};

// Add "All" option to tabs
const ALL_CATEGORY = { id: "ALL", label: "All Works", icon: Code2 };
const FILTER_TABS = [ALL_CATEGORY, ...ORBIT_CATEGORIES];

export default function MySkills() {
    const [activeTab, setActiveTab] = useState("ALL");
    const [hoveredProject, setHoveredProject] = useState<number | null>(null);

    // Filter logic
    const filteredProjects = activeTab === "ALL"
        ? PROJECTS
        : PROJECTS.filter(p => p.categories.includes(activeTab));

    return (
        <section id="projects" className="py-24 bg-slate-50 relative min-h-screen flex flex-col overflow-hidden">

            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-white to-slate-50 pointer-events-none" />
            <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-[100px] -z-10" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-100/40 rounded-full blur-[100px] -z-10" />

            <div className="max-w-7xl mx-auto px-6 w-full relative z-10">

                {/* 1. Header & Tabs */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                    <div>
                        <ScrollScale className="text-left">
                            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
                                Projects &<br />
                                <span style={{
                                    backgroundImage: 'linear-gradient(to right, #2563eb, #60a5fa, #2563eb)',
                                    backgroundSize: "200% auto",
                                    animation: "shine 4s linear infinite"
                                }} className="bg-clip-text text-transparent">Skills</span>
                            </h2>
                            <p className="text-slate-500 max-w-md text-sm md:text-base leading-relaxed">
                                Here are some projects that I have made in IoT, AI, Web development, Application, Click on any project content to explore the code.
                            </p>
                        </ScrollScale>
                    </div>

                    {/* Filter Tabs */}
                    <div className="flex flex-wrap gap-2">
                        {FILTER_TABS.map((tab) => {
                            const isActive = activeTab === tab.id;
                            const Icon = tab.icon;
                            return (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`
                                        flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-bold transition-all duration-300 border
                                        ${isActive
                                            ? "bg-slate-900 text-white border-slate-900 shadow-lg shadow-slate-900/20 scale-105"
                                            : "bg-white text-slate-500 border-slate-200 hover:border-slate-300 hover:text-slate-900"
                                        }
                                    `}
                                >
                                    <Icon className="w-4 h-4" />
                                    {tab.label}
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* 2. Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project, idx) => (
                            <ProjectCard
                                key={project.id}
                                project={project}
                                idx={idx}
                                setHoveredProject={setHoveredProject}
                            />
                        ))}
                    </AnimatePresence>
                </div>

                {/* Empty State */}
                {filteredProjects.length === 0 && (
                    <div className="text-center py-20">
                        <p className="text-slate-400">No projects found in this category.</p>
                    </div>
                )}

            </div>
        </section>
    );
}

function ProjectCard({ project, idx, setHoveredProject }: { project: any, idx: number, setHoveredProject: any }) {
    const cardRef = useRef(null);
    const isInView = useInView(cardRef, { amount: 0.6, margin: "0px" });
    const [isPressed, setIsPressed] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    // Check for mobile
    useEffect(() => {
        setIsMobile(window.innerWidth < 768);
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Mobile Auto-Trigger Logic
    useEffect(() => {
        if (!isMobile) return;

        let timer1: NodeJS.Timeout;
        let timer2: NodeJS.Timeout;

        if (isInView) {
            // Wait 3.5s before triggering "pressed" state
            timer1 = setTimeout(() => {
                setIsPressed(true);

                // Keep "pressed" for 1.5s then revert
                timer2 = setTimeout(() => {
                    setIsPressed(false);
                }, 1500);
            }, 3500);
        } else {
            setIsPressed(false);
        }

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
        };
    }, [isInView, isMobile]);

    return (
        <motion.div
            ref={cardRef}
            layout
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: idx * 0.1, ease: "circOut" }}
            onMouseEnter={() => setHoveredProject(project.id)}
            onMouseLeave={() => setHoveredProject(null)}
            onClick={() => project.githubUrl && window.open(project.githubUrl, '_blank')}
            animate={isPressed ? { scale: 0.95 } : { scale: 1 }}
            className={`group relative bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:scale-[1.02] transition-all duration-300 flex flex-col h-full overflow-hidden cursor-pointer ${isPressed ? 'shadow-inner' : ''}`}
        >
            {/* Project Image */}
            <div className="aspect-video w-full bg-slate-50 relative overflow-hidden border-b border-slate-50">
                <ImageWithLoader
                    src={project.image || "/Portfolio/placeholder-project.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Overlay Actions (Visible on Hover/Mobile Trigger) */}
                <div className={`absolute inset-0 bg-black/40 transition-opacity duration-300 flex items-center justify-center gap-4 ${isPressed ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                    {project.githubUrl && (
                        <div
                            onClick={(e) => { e.stopPropagation(); window.open(project.githubUrl || "", '_blank'); }}
                            className="w-14 h-14 bg-white text-slate-900 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform cursor-pointer"
                            title="View Code"
                        >
                            <Github className="w-7 h-7" />
                        </div>
                    )}

                    {/* Web Button (Only for Web projects) */}
                    {project.categories.includes("Web") && project.demoUrl && (
                        <div
                            onClick={(e) => { e.stopPropagation(); window.open(project.demoUrl || "", '_blank'); }}
                            className="w-14 h-14 bg-white text-slate-900 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform cursor-pointer"
                            title="Visit Website"
                        >
                            <Globe className="w-7 h-7" />
                        </div>
                    )}
                </div>
            </div>

            <div className="p-6 flex flex-col flex-1">
                {/* Category Badge */}
                <div className="flex justify-between items-start mb-4">
                    <div className="flex gap-2 flex-wrap">
                        {project.categories.map((cat: string) => (
                            <span key={cat} className={`
                                bg-slate-50 border border-slate-200 text-slate-500
                                px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider
                            `}>
                                {ORBIT_CATEGORIES.find(c => c.id === cat)?.label || cat}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Title & Desc */}
                <div className="mb-6 flex-1">
                    {/* Award Badge (Moved Here) */}
                    {project.award && (
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-amber-50 text-amber-900 border border-amber-200 rounded-md text-[10px] font-bold uppercase tracking-wider mb-3">
                            <span className="text-amber-500">🏆</span> {project.award}
                        </div>
                    )}

                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {project.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed line-clamp-3">
                        {project.description}
                    </p>
                </div>

                {/* Tech Stack Divider */}
                <div className="w-full h-px bg-slate-100 mb-4" />

                {/* Tech Stack Tags */}
                <div>
                    <div className="flex flex-wrap gap-2">
                        {project.techStack.slice(0, 4).map((tech: string) => (
                            <span
                                key={tech}
                                className="px-2 py-1 bg-slate-50 text-slate-600 rounded-md text-[10px] font-bold border border-slate-100 flex items-center gap-1 hover:bg-slate-100 transition-colors cursor-default"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

        </motion.div>
    );
}
