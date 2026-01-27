import { motion } from "framer-motion";
import ScrollScale from "./ScrollScale";
import { Mail, Linkedin, Instagram, FileText, Github } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="pt-0 pb-24 bg-slate-50 relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
                <ScrollScale>
                    <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-12 shadow-2xl overflow-hidden relative group">
                        {/* Background Effects (Moving Blur) */}
                        <motion.div
                            animate={{
                                x: [0, 50, 0],
                                y: [0, 30, 0],
                                scale: [1, 1.2, 1],
                                opacity: [0.3, 0.6, 0.3]
                            }}
                            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-20 -right-20 w-80 h-80 bg-blue-500/30 rounded-full blur-[80px]"
                        />
                        <motion.div
                            animate={{
                                x: [0, -30, 0],
                                y: [0, -50, 0],
                                scale: [1, 1.5, 1],
                                opacity: [0.3, 0.5, 0.3]
                            }}
                            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute -bottom-20 -left-20 w-80 h-80 bg-purple-500/20 rounded-full blur-[80px]"
                        />
                        <motion.div
                            animate={{
                                x: [0, 30, 0],
                                y: [0, 30, 0],
                                scale: [1, 1.1, 1],
                            }}
                            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full blur-[60px]"
                        />

                        <div className="relative z-10 flex flex-col items-center">
                            <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 text-white border border-white/20 shadow-xl transform group-hover:scale-110 transition-transform duration-300">
                                <Mail className="w-8 h-8" />
                            </div>

                            <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
                                Ready to Collaborate?
                            </h2>
                            <p className="text-slate-300 text-lg mb-8 max-w-xl">
                                I am always open to new opportunities, collaborations, let's connect and make an impact.
                            </p>

                            <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-[220px] md:max-w-none mx-auto">
                                <a
                                    href="mailto:gilangwasis2@gmail.com"
                                    className="flex items-center justify-center bg-white text-slate-900 w-12 h-12 md:w-14 md:h-14 rounded-full font-bold hover:bg-blue-50 transition-all active:scale-95 shadow-lg group-hover:shadow-white/20"
                                    title="Email"
                                >
                                    <Mail className="w-6 h-6" />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/gilang-wasis-wicaksono2/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center bg-[#0077b5] text-white w-12 h-12 md:w-14 md:h-14 rounded-full font-bold hover:bg-[#006396] transition-all active:scale-95 shadow-lg group-hover:shadow-white/20"
                                    title="LinkedIn"
                                >
                                    <Linkedin className="w-6 h-6" />
                                </a>
                                <a
                                    href="https://github.com/langss1"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center bg-slate-900 text-white w-12 h-12 md:w-14 md:h-14 rounded-full font-bold hover:bg-slate-800 transition-all active:scale-95 shadow-lg group-hover:shadow-white/20"
                                    title="GitHub"
                                >
                                    <Github className="w-6 h-6" />
                                </a>
                                <a
                                    href="https://www.instagram.com/gilangwasis/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white w-12 h-12 md:w-14 md:h-14 rounded-full font-bold hover:opacity-90 transition-all active:scale-95 shadow-lg group-hover:shadow-white/20"
                                    title="Instagram"
                                >
                                    <Instagram className="w-6 h-6" />
                                </a>
                                <a
                                    href="/Portfolio/files/CV_Gilang_Wasis.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center bg-slate-700 text-white w-14 h-14 rounded-full font-bold hover:bg-slate-600 transition-all active:scale-95 shadow-lg group-hover:shadow-white/20 ring-1 ring-white/10"
                                    title="Download CV"
                                >
                                    <FileText className="w-6 h-6" />
                                </a>
                            </div>
                        </div>
                    </div>
                </ScrollScale>
            </div>
        </section>
    );
}
