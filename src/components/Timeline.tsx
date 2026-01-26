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
                <ScrollScale className="text-left mb-12">
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
                        <span className="text-black">Experience &</span> <span className="text-blue-600">Organization</span>
                    </h2>
                    <p className="text-slate-500 max-w-md text-sm md:text-base leading-relaxed">
                        Professional journey and organizational leadership roles.
                    </p>
                </ScrollScale>

                <div className="relative pl-8 md:pl-12">
                    {/* Vertical Line Background - Left Aligned */}
                    <div className="absolute left-[9px] top-2 bottom-0 w-[2px] bg-slate-200 origin-top" />

                    {/* Animated Vertical Line Fill */}
                    <motion.div
                        style={{ scaleY }}
                        className="absolute left-[9px] top-2 bottom-0 w-[2px] bg-blue-600 origin-top z-10"
                    />

                    <div className="space-y-12">
                        {TIMELINE.map((item, idx) => (
                            <div
                                key={idx}
                                className="relative flex items-start"
                            >
                                {/* Dot (Zoom In) */}
                                <ScrollScale delay={0.2} className="absolute -left-[30px] md:-left-[39px] top-1.5 z-20">
                                    <div className={`w-5 h-5 bg-white border-4 ${item.active ? "border-blue-600" : "border-slate-300"} rounded-full shadow-sm`} />
                                </ScrollScale>

                                {/* Content (Zoom In Card) */}
                                <ScrollScale delay={0.1} className="w-full">
                                    <div className="group relative bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg hover:border-blue-100 transition-all duration-300">
                                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-2">
                                            <h3 className="text-lg md:text-xl font-black text-slate-900 group-hover:text-blue-600 transition-colors">
                                                {item.org}
                                            </h3>
                                            <div className="flex items-center gap-2">
                                                <span className="inline-block px-3 py-1 bg-slate-50 text-slate-600 text-xs font-bold rounded-full border border-slate-200">
                                                    {item.year}
                                                </span>
                                                {item.active && (
                                                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-blue-50 text-blue-700 text-[10px] font-bold uppercase tracking-wider rounded-full border border-blue-100">
                                                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                                                        Active
                                                    </span>
                                                )}
                                            </div>
                                        </div>

                                        <p className="text-sm md:text-base font-bold text-slate-700 mb-2 flex items-center gap-2">
                                            {item.role}
                                        </p>
                                        <p className="text-sm text-slate-500 leading-relaxed font-normal">
                                            {item.desc}
                                        </p>
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
