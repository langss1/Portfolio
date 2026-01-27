"use client";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { useEffect, useState } from "react";
import { PROFILE } from "@/data/portfolio";
import { ChevronRight, Download, Linkedin, Github, Terminal, Smartphone, PenTool, Shield, Cpu, Code2 } from "lucide-react";
import ImageWithLoader from "./ImageWithLoader";

// ANIMASI GRADIENT
const gradientStyle = {
    backgroundSize: "200% auto",
    animation: "shine 4s linear infinite"
};

const ROLES = [
    { label: "Fullstack Developer", icon: Terminal },
    { label: "AI Engineer", icon: Cpu },
    { label: "IoT & Hardware Engineer", icon: Smartphone },
    { label: "UI / UX Designer", icon: PenTool },
    { label: "Cyber Security & Forensics", icon: Shield }
];

export default function Hero() {
    const [roleIndex, setRoleIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setRoleIndex((prev) => (prev + 1) % ROLES.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    const fadeInUp: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: { delay: 0.1 * i, duration: 0.8, ease: "easeInOut" }
        })
    };

    const CurrentIcon = ROLES[roleIndex].icon;

    return (
        <section className="min-h-[85vh] flex flex-col justify-center px-5 md:px-8 py-20 bg-white relative overflow-hidden">

            <style jsx>{`
                @keyframes shine {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
                @keyframes borderColorCycle {
                    0% { border-color: #93c5fd; } 
                    50% { border-color: #1e3a8a; } 
                    100% { border-color: #93c5fd; } 
                }
            `}</style>

            <div className="absolute top-[-20%] right-[-10%] w-[60vh] h-[60vh] bg-blue-50/60 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-4xl mx-auto w-full relative z-10">

                {/* 1. HEADER ROW (Side-by-Side Compact) */}
                <div className="flex items-center gap-5 md:gap-10 mb-8 md:mb-10">

                    {/* AVATAR */}
                    <motion.div
                        custom={0}
                        initial="hidden"
                        animate="visible"
                        variants={fadeInUp}
                        className="relative shrink-0"
                    >
                        <motion.div
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            className="relative w-28 h-28 md:w-40 md:h-40 rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/10 p-[4px] bg-gradient-to-r from-blue-400 to-blue-700"
                        >
                            <div className="w-full h-full rounded-[calc(1.5rem-4px)] overflow-hidden bg-white">
                                <ImageWithLoader
                                    src="/Portfolio/Profil.jpeg"
                                    alt="Gilang Wasis"
                                    className="w-full h-full object-cover"
                                    priority
                                />
                            </div>
                        </motion.div>

                        {/* Wiggle Icon */}
                        <div className="absolute -bottom-2 -right-2 md:-bottom-3 md:-right-3 p-1.5 bg-white rounded-xl shadow-lg border border-slate-100 z-20">
                            <motion.div
                                animate={{ rotate: [0, 10, -10, 0] }}
                                transition={{ duration: 2, ease: "easeInOut" }}
                                className="flex items-center justify-center w-7 h-7 md:w-9 md:h-9 bg-blue-600 rounded-lg text-white"
                            >
                                <Code2 className="w-4 h-4 md:w-5 md:h-5" />
                            </motion.div>
                        </div>
                    </motion.div>

                    <div className="flex-1 min-w-0">
                        <motion.div
                            custom={1}
                            initial="hidden"
                            animate="visible"
                            variants={fadeInUp}
                            className="flex items-center gap-2 md:gap-3 mb-1"
                        >
                            <span className="w-6 h-[2px] md:w-8 bg-slate-300"></span>
                            <span className="text-slate-500 text-sm md:text-base font-black tracking-widest uppercase truncate">HELLO, I AM</span>
                            <motion.span
                                animate={{ rotate: [0, 15, -10, 15, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1.5, ease: "easeInOut" }}
                                className="inline-block origin-bottom-right text-xl md:text-2xl"
                            >
                                👋
                            </motion.span>
                        </motion.div>

                        <motion.h1
                            custom={2}
                            initial="hidden"
                            animate="visible"
                            variants={fadeInUp}
                            className="text-[2.5rem] md:text-6xl font-black text-slate-900 tracking-tighter leading-[1.1] relative"
                        >
                            <span
                                style={{
                                    backgroundImage: 'linear-gradient(to right, #2563eb, #60a5fa, #2563eb)',
                                    ...gradientStyle
                                }}
                                className="bg-clip-text text-transparent block md:inline pb-1 w-fit"
                            >
                                Gilang
                            </span>
                            <span className="text-black block md:inline md:ml-3">
                                Wasis W.
                            </span>
                        </motion.h1>
                    </div>
                </div>

                {/* 2. DESCRIPTION */}
                <motion.div
                    custom={3}
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                    className="mb-8 pl-1"
                >
                    <div className="text-slate-600 text-base md:text-xl leading-relaxed max-w-2xl font-light space-y-4">
                        <p>
                            Undergraduate <span className="font-bold text-slate-900">Information Technology</span> student at <span className="font-bold text-slate-900">Telkom University</span>
                            <span className="relative inline-block mx-2 font-bold text-slate-900 z-10 whitespace-nowrap px-1">
                                <motion.span
                                    initial={{ width: 0 }}
                                    animate={{ width: "100%" }}
                                    transition={{ delay: 2, duration: 0.6, ease: "easeOut" }}
                                    className="absolute bottom-1 left-0 h-3 md:h-3.5 bg-yellow-300/80 -z-10 skew-x-[-10deg]"
                                />
                                (GPA 3.94 / 4.00)
                            </span>.
                        </p>

                        <p className="italic text-slate-500 border-l-4 border-blue-500 pl-4 py-1 text-sm md:text-base">
                            "Aspiring to become a key proficient IT resource in Indonesia, delivering secure & intelligent digital solutions."
                        </p>
                    </div>
                </motion.div>

                {/* 3. ROLE */}
                <motion.div
                    custom={4}
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                    className="mb-8 md:mb-10 flex items-center gap-3 pl-1"
                >
                    <span className="text-sm md:text-base font-black text-slate-900 uppercase tracking-widest min-w-[60px]">I AM A</span>

                    <div className="h-10 relative flex-1 max-w-sm">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={roleIndex}
                                initial={{ y: 20, opacity: 0, filter: 'blur(2px)' }}
                                animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                                exit={{ y: -20, opacity: 0, filter: 'blur(2px)' }}
                                transition={{ duration: 0.5, ease: "circOut" }}
                                className="absolute top-0 left-0"
                            >
                                <span className="px-5 py-2.5 bg-slate-900 text-white text-sm md:text-base font-bold rounded-full shadow-xl flex items-center gap-3 whitespace-nowrap border border-slate-700">
                                    <CurrentIcon className="w-4 h-4 text-blue-400" />
                                    {ROLES[roleIndex].label}
                                </span>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </motion.div>

                {/* 4. BUTTONS - COMPACT GRID HYBRID */}
                <motion.div
                    custom={5}
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                    className="w-full pl-0 md:pl-1 flex flex-wrap items-center gap-3"
                >
                    {/* BUTTONS UTAMA: Besar tapi Compact (Grid di mobile, Row di Desktop) */}
                    <div className="flex flex-1 gap-3 min-w-[280px]">
                        <a href="#projects" className="flex-1 md:flex-none px-6 py-4 bg-black text-white rounded-xl font-bold hover:bg-slate-800 transition-all flex justify-center items-center gap-2 text-sm md:text-base whitespace-nowrap shadow-lg">
                            Explore Me <ChevronRight className="w-4 h-4" />
                        </a>

                        <a href={PROFILE.cvLink} className="flex-1 md:flex-none px-6 py-4 bg-white text-slate-800 border border-slate-200 rounded-xl font-bold hover:bg-slate-50 transition-all flex justify-center items-center gap-2 text-sm md:text-base whitespace-nowrap">
                            <Download className="w-4 h-4" /> CV
                        </a>
                    </div>

                    <div className="hidden md:block w-px h-10 bg-slate-200 mx-2"></div>

                    {/* SOSMED: Auto Expand di mobile agar mudah ditekan */}
                    <div className="flex gap-3 md:ml-0 md:w-auto w-full md:justify-start justify-center">
                        <SocialButton href={PROFILE.socials.linkedin} icon={<Linkedin className="w-5 h-5" />} label="LinkedIn" />
                        <SocialButton href={PROFILE.socials.github} icon={<Github className="w-5 h-5" />} label="Github" />
                    </div>
                </motion.div>

            </div>
        </section>
    );
}

function SocialButton({ href, icon, label }: { href: string, icon: React.ReactNode, label?: string }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 md:flex-none md:w-14 h-14 md:h-12 flex items-center justify-center rounded-xl text-slate-500 hover:text-black hover:bg-slate-100 transition-all border border-slate-200 bg-white gap-2"
        >
            {icon}
            {/* Label hanya muncul di mobile jika space sangat lega, tapi disini kita icon only tapi kotak besar */}
            <span className="md:hidden font-semibold text-sm text-slate-700">{label}</span>
        </a>
    )
}