"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface TypewriterProps {
    text: string;
    className?: string;
    delay?: number;
    speed?: number;
}

export default function Typewriter({ text, className = "", delay = 0, speed = 0.05 }: TypewriterProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    // Memecah text jadi array karakter
    const characters = Array.from(text);

    return (
        <span ref={ref} className={`inline-block ${className}`}>
            {characters.map((char, index) => (
                <motion.span
                    key={index}
                    initial={{ opacity: 0, display: "none" }}
                    animate={isInView ? { opacity: 1, display: "inline" } : {}}
                    transition={{
                        delay: delay + index * speed,
                        duration: 0.1
                    }}
                >
                    {char === " " ? "\u00A0" : char}
                </motion.span>
            ))}
        </span>
    );
}
