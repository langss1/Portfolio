"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { TIMELINE } from "@/data/portfolio";
import { useRef } from "react";
import ScrollScale from "./ScrollScale";

export default function Timeline() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

    return (
        <section id="timeline" ref={containerRef} className="py-24 bg-slate-50 relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <ScrollScale className="text-left mb-20">
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
                        Experience &<br />
                        <span style={{
                            backgroundImage: 'linear-gradient(to right, #2563eb, #60a5fa, #2563eb)',
                            backgroundSize: "200% auto",
                            animation: "shine 4s linear infinite"
                        }} className="bg-clip-text text-transparent">Organization</span>
                    </h2>
                    <p className="text-slate-500 max-w-md text-sm md:text-base leading-relaxed">
                        Professional journey and organizational leadership roles.
                    </p>
                </ScrollScale>

                <div className="relative">
                    {/* Vertical Line Background */}
                    <div className="absolute left-[30px] md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 transform md:-translate-x-1/2 origin-top" />

                    {/* Animated Vertical Line Fill */}
                    <motion.div
                        style={{ scaleY }}
                        className="absolute left-[30px] md:left-1/2 top-0 bottom-0 w-0.5 bg-blue-600 transform md:-translate-x-1/2 origin-top z-10"
                    />

                    <div className="space-y-16">
                        {TIMELINE.map((item, idx) => (
                            <div
                                key={idx}
                                className={`relative flex items-center md:justify-between ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                            >
                                {/* Dot (Zoom In) */}
                                <ScrollScale delay={0.2} className="absolute left-[30px] md:left-1/2 transform -translate-x-1/2 z-20">
                                    <div className={`w-4 h-4 bg-white border-4 ${item.active ? "border-green-500" : "border-blue-600"} rounded-full shadow-sm`} />
                                </ScrollScale>

                                {/* Content (Zoom In Card) */}
                                <ScrollScale delay={0.1} className="ml-16 md:ml-0 md:w-[45%] w-full">
                                    <div className={`bg-white p-6 rounded-2xl shadow-sm border ${item.active ? "border-green-100 ring-2 ring-green-50" : "border-slate-100"} hover:shadow-xl hover:scale-[1.02] transition-all duration-300`}>
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className="inline-block px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold rounded-full">
                                                {item.year}
                                            </span>
                                            {item.active && (
                                                <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-green-100 text-green-700 text-[10px] font-bold uppercase tracking-wider rounded-full">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                                                    Active
                                                </span>
                                            )}
                                        </div>
                                        <h3 className="text-lg font-black text-slate-900">{item.org}</h3>
                                        <p className="text-sm font-semibold text-blue-800 mb-2">{item.role}</p>
                                        <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                                    </div>
                                </ScrollScale>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
