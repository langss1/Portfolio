"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Image as ImageIcon, AlertCircle, Loader2 } from "lucide-react";

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
    fallbackSrc = "/Portfolio/placeholder-project.svg",
    priority = false
}: ImageWithLoaderProps) {
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);
    const [currentSrc, setCurrentSrc] = useState(src);
    // Use a ref to check if the image is already loaded (cached)
    const imgRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        // Reset state when src changes
        setIsLoading(true);
        setHasError(false);
        setCurrentSrc(src);
    }, [src]);

    useEffect(() => {
        // Check if image is already loaded
        if (imgRef.current && imgRef.current.complete) {
            setIsLoading(false);
        }

        // Safety timeout to prevent infinite loading
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 5000);

        return () => clearTimeout(timer);
    }, [currentSrc]);

    const handleError = () => {
        setIsLoading(false);
        // Only switch to fallback if we aren't already there to avoid loop
        if (currentSrc !== fallbackSrc) {
            setHasError(false); // Reset error temporarily while we try fallback
            setCurrentSrc(fallbackSrc);
        } else {
            setHasError(true); // Fallback also failed
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
                            <Loader2 className="w-8 h-8 text-blue-500 animate-spin" />
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
                ref={imgRef}
                src={currentSrc}
                alt={alt}
                className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}
                onLoad={handleLoad}
                onError={handleError}
                loading={priority ? "eager" : "lazy"}
            />
        </div>
    );
}
