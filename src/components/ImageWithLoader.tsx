"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Image as ImageIcon, AlertCircle } from "lucide-react";

interface ImageWithLoaderProps {
    src: string;
    alt: string;
    className?: string; // For the img element itself
    width?: string | number;
    height?: string | number;
    fallbackSrc?: string;
    priority?: boolean;
}

export default function ImageWithLoader({
    src,
    alt,
    className = "",
    fallbackSrc = "/Portfolio/placeholder-project.jpg",
    priority = false
}: ImageWithLoaderProps) {
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);
    const [currentSrc, setCurrentSrc] = useState(src);

    useEffect(() => {
        // Reset state when src changes
        setIsLoading(true);
        setHasError(false);
        setCurrentSrc(src);
    }, [src]);

    const handleError = () => {
        setIsLoading(false);
        setHasError(true);
        // If the main src fails, we might want to try the fallback or just keep showing the error state
        // For now, let's switch to fallback if provided and different
        if (currentSrc !== fallbackSrc) {
            setCurrentSrc(fallbackSrc);
        }
    };

    const handleLoad = () => {
        setIsLoading(false);
    };

    return (
        <div className="relative w-full h-full overflow-hidden bg-slate-100 flex items-center justify-center">
            {/* Loading Skeleton / Animation */}
            <AnimatePresence>
                {isLoading && (
                    <motion.div
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-slate-200 z-10 flex items-center justify-center"
                    >
                        <div className="flex flex-col items-center gap-2">
                            {/* Shimmer Effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent w-full h-full animate-shine" />
                            <ImageIcon className="w-8 h-8 text-slate-400 animate-pulse" />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Error State (if fallback also fails or just to show icon) */}
            {hasError && !isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-slate-100 text-slate-400">
                    <AlertCircle className="w-8 h-8" />
                </div>
            )}

            <img
                src={currentSrc}
                alt={alt}
                className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}
                onLoad={handleLoad}
                onError={handleError}
                loading={priority ? "eager" : "lazy"}
            />

            <style jsx global>{`
                @keyframes shine {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(100%); }
                }
                .animate-shine {
                    animation: shine 1.5s infinite;
                }
            `}</style>
        </div>
    );
}
