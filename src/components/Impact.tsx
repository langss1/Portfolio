import { motion } from "framer-motion";
import ScrollScale from "./ScrollScale";
import { Users, BookOpen, School } from "lucide-react";

const IMPACT_ITEMS = [
    {
        year: "2025",
        title: "Project Lead, Community Service Project",
        project: "Pustaka GenBI: Kolaborasi Untuk Literasi Negeri",
        desc: "Starting a fundraising program and establishing a reading corner to increase literacy rates for children's communities in Bandung.",
        icon: BookOpen,
        color: "bg-emerald-100 text-emerald-600"
    },
    {
        year: "2025",
        title: "Project Lead, Community Service Project",
        project: "Utilization of AI tools for teachers in junior high schools",
        desc: "Conducted workshops for 50+ teachers on utilizing Generative AI to enhance teaching materials and productivity.",
        icon: School,
        color: "bg-amber-100 text-amber-600"
    },
    {
        year: "2024",
        title: "Project Lead, Community Service Project",
        project: "Basic Programming and Coding for Middle School Students",
        desc: "Introduced logic and basic coding concepts to middle school students to foster early interest in technology.",
        icon: Users,
        color: "bg-blue-100 text-blue-600"
    }
];

export default function Impact() {
    return (
        <section id="impact" className="pt-24 pb-12 bg-white relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <ScrollScale className="text-left mb-16">
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
                        What's My<br />
                        <span style={{
                            backgroundImage: 'linear-gradient(to right, #2563eb, #60a5fa, #2563eb)',
                            backgroundSize: "200% auto",
                            animation: "shine 4s linear infinite"
                        }} className="bg-clip-text text-transparent">Impact?</span>
                    </h2>
                    <p className="text-slate-500 max-w-xl mb-6 leading-relaxed">
                        Leading initiatives to empower communities through education and technology,
                        driven by the core belief that <span className="text-slate-800 font-semibold">students must create a tangible impact for the nation.</span>
                    </p>
                </ScrollScale>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {IMPACT_ITEMS.map((item, idx) => {
                        const Icon = item.icon;
                        return (
                            <ScrollScale key={idx} delay={idx * 0.1} className="h-full">
                                <div className="group relative bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:border-blue-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-full flex flex-row md:flex-col items-start gap-4">
                                    <div className={`p-3 rounded-xl ${item.color} shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                                        <Icon className="w-6 h-6" />
                                    </div>
                                    <div className="flex-1 flex flex-col">
                                        <div className="flex flex-col mb-2">
                                            <h3 className="font-bold text-slate-900 text-lg group-hover:text-blue-600 transition-colors leading-tight mb-2">
                                                {item.project}
                                            </h3>
                                            <span className="self-start text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                                                {item.year}
                                            </span>
                                        </div>
                                        <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            </ScrollScale>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
