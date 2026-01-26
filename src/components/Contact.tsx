import { motion } from "framer-motion";
import ScrollScale from "./ScrollScale";
import { Mail, Linkedin, Instagram, FileText } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="pt-0 pb-24 bg-slate-50 relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <ScrollScale>
                    <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden relative group text-left">
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

                        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                            <div className="flex-1">
                                <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 text-white border border-white/20 shadow-xl transform group-hover:scale-110 transition-transform duration-300">
                                    <Mail className="w-7 h-7" />
                                </div>

                                <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                                    Ready to Collaborate?
                                </h2>
                                <p className="text-slate-300 text-base md:text-lg mb-0 max-w-lg leading-relaxed">
                                    I am always open to new opportunities, collaborations, let's connect and make an impact.
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-3 w-full md:w-auto mt-4 md:mt-0">
                                <a
                                    href="mailto:gilangwasis2@gmail.com"
                                    className="flex items-center justify-center bg-white text-slate-900 w-12 h-12 rounded-full font-bold hover:bg-blue-50 transition-all active:scale-95 shadow-lg group-hover:shadow-white/20"
                                    title="Email"
                                >
                                    <Mail className="w-5 h-5" />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/gilang-wasis-wicaksono2/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center bg-[#0077b5] text-white w-12 h-12 rounded-full font-bold hover:bg-[#006396] transition-all active:scale-95 shadow-lg group-hover:shadow-white/20"
                                    title="LinkedIn"
                                >
                                    <Linkedin className="w-5 h-5" />
                                </a>
                                <a
                                    href="https://www.instagram.com/gilangwasis/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white w-12 h-12 rounded-full font-bold hover:opacity-90 transition-all active:scale-95 shadow-lg group-hover:shadow-white/20"
                                    title="Instagram"
                                >
                                    <Instagram className="w-5 h-5" />
                                </a>
                                <a
                                    href="/Portfolio/files/CV_Gilang_Wasis.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center bg-slate-700 text-white w-12 h-12 rounded-full font-bold hover:bg-slate-600 transition-all active:scale-95 shadow-lg group-hover:shadow-white/20 ring-1 ring-white/10"
                                    title="Download CV"
                                >
                                    <FileText className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                    </div>
                </ScrollScale>
            </div>
        </section>
    );
}
