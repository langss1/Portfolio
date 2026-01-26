"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Command, Code, Sparkles, Terminal, Cpu, Globe, Zap } from "lucide-react";

export default function FloatingIcons() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Parallax movements
    const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, -400]);
    const y3 = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 45]);
    const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -45]);

    return (
        <div ref={containerRef} className="absolute inset-0 pointer-events-none overflow-hidden z-0">
            {/* Command Icon */}
            <motion.div
                style={{ y: y2, rotate: rotate1 }}
                className="absolute top-[20%] left-[10%] p-4 bg-white shadow-xl rounded-full border border-slate-100 opacity-80"
            >
                <Command className="w-8 h-8 text-slate-400" />
            </motion.div>

            {/* Code Icon */}
            <motion.div
                style={{ y: y1, rotate: rotate2 }}
                className="absolute top-[40%] right-[15%] p-5 bg-white shadow-xl rounded-full border border-slate-100 opacity-60"
            >
                <Code className="w-10 h-10 text-blue-400" />
            </motion.div>

            {/* Sparkles */}
            <motion.div
                style={{ y: y3, scale: useTransform(scrollYProgress, [0, 0.5], [1, 1.5]) }}
                className="absolute top-[60%] left-[20%] p-3 bg-white shadow-lg rounded-full border border-slate-100"
            >
                <Sparkles className="w-6 h-6 text-yellow-400" />
            </motion.div>

            {/* Terminal */}
            <motion.div
                style={{ y: y2, x: 50 }}
                className="absolute top-[80%] right-[30%] p-4 bg-slate-900 shadow-2xl rounded-2xl opacity-80"
            >
                <Terminal className="w-6 h-6 text-green-400" />
            </motion.div>

            {/* Small colorful dots (Particles) */}
            <div className="absolute top-[15%] right-[25%] w-2 h-2 bg-blue-500 rounded-full opacity-40" />
            <div className="absolute top-[35%] left-[5%] w-3 h-3 bg-red-400 rounded-full opacity-30" />
            <div className="absolute top-[75%] right-[10%] w-2 h-2 bg-green-400 rounded-full opacity-40" />
            <div className="absolute top-[50%] left-[50%] w-1.5 h-1.5 bg-yellow-400 rounded-full opacity-50" />
        </div>
    );
}
