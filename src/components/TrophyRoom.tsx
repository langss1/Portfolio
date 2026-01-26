"use client";
import { ACHIEVEMENTS } from "@/data/portfolio";
import { Trophy, FileText, Laptop, Award } from "lucide-react";
import ScrollScale from "./ScrollScale";

// Helper to map string icon type to Component
const getIcon = (type: string) => {
    switch (type) {
        case "Trophy": return Trophy;
        case "Document": return FileText;
        case "Laptop": return Laptop;
        case "Award": return Award;
        default: return Award;
    }
};

export default function TrophyRoom() {
    return (
        <section id="trophy" className="py-24 bg-white relative overflow-hidden">
            {/* Background Gradient Blob */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50 rounded-full blur-3xl -z-10 opacity-60" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-teal-50 rounded-full blur-3xl -z-10 opacity-60" />

            <div className="max-w-7xl mx-auto px-6">
                <ScrollScale className="text-left mb-16">
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
                        Honors &<br />
                        <span style={{
                            backgroundImage: 'linear-gradient(to right, #2563eb, #60a5fa, #2563eb)',
                            backgroundSize: "200% auto",
                            animation: "shine 4s linear infinite"
                        }} className="bg-clip-text text-transparent">Validations</span>
                    </h2>
                    <p className="text-slate-500 max-w-md text-sm md:text-base leading-relaxed">
                        Milestones that mark my journey of excellence.
                    </p>
                </ScrollScale>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {ACHIEVEMENTS.map((item, idx) => {
                        const Icon = getIcon(item.iconType || "Award");
                        return (
                            <ScrollScale key={idx} delay={idx * 0.1}>
                                <div className="glass-card p-6 rounded-2xl border border-slate-100/50 hover:border-blue-200/50 transition-all duration-300 group h-full hover:shadow-xl hover:scale-105 bg-white/50 backdrop-blur-sm">
                                    <div className="w-12 h-12 bg-gradient-to-br from-blue-50 to-teal-50 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                        <Icon className="w-6 h-6 text-slate-700 group-hover:text-blue-600 transition-colors" />
                                    </div>
                                    <h3 className="font-bold text-lg text-slate-900 mb-2 leading-tight">{item.title}</h3>
                                    <p className="text-sm font-medium text-blue-600 mb-1">{item.event}</p>
                                    <p className="text-xs text-slate-500">{item.desc}</p>
                                </div>
                            </ScrollScale>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}