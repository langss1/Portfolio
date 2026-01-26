"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Typewriter from "./Typewriter";

export default function IntroLoader({ onFinish }: { onFinish: () => void }) {
    const [isExit, setIsExit] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsExit(true); // Mulai exit animation
            setTimeout(onFinish, 800); // Hapus loader setelah exit selesai
        }, 3600); // Tambah sedikit waktu agar user sempat baca full text

        return () => clearTimeout(timer);
    }, [onFinish]);

    return (
        <motion.div
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white px-2"
            initial={{ opacity: 1 }}
            animate={isExit ? { y: "-100%", opacity: 0 } : { y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
            {/* Container Text Center & Responsive */}
            <div className="max-w-xl w-full text-center px-4">
                <h1 className="text-2xl md:text-5xl font-medium text-slate-900 tracking-tight leading-snug">
                    <span className="inline-block relative">
                        {/* Text Typewriter */}
                        <Typewriter
                            text="Hello, this is Gilang's Portfolio."
                            speed={0.05} // Sedikit lebih cepat agar smooth di mobile
                            delay={0.3}
                            className="inline"
                        />
                        {/* Cursor Blinking */}
                        <motion.span
                            animate={{ opacity: [1, 0] }}
                            transition={{ repeat: Infinity, duration: 0.8 }}
                            className="inline-block w-0.5 h-6 md:h-12 bg-blue-600 align-middle ml-1"
                        />
                    </span>
                </h1>
            </div>
        </motion.div>
    );
}
