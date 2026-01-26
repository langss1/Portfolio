"use client";
import { motion } from "framer-motion";

export default function ScrollScale({ children, className = "", delay = 0 }: { children: React.ReactNode, className?: string, delay?: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }} // Mulai kecil & transparan
            whileInView={{ opacity: 1, scale: 1 }} // Membesar ke ukuran normal
            viewport={{ once: true, margin: "-100px" }} // Trigger sedikit sebelum elemen masuk penuh
            transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1], // Ease Out Quart (Smooth Apple-like physics)
                delay: delay
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
