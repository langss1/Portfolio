"use client";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Hero from "@/components/Hero";
import MySkills from "@/components/MySkills";
import TrophyRoom from "@/components/TrophyRoom";
import Timeline from "@/components/Timeline";
import Impact from "@/components/Impact";
import Contact from "@/components/Contact";
import Dock from "@/components/Dock";
import IntroLoader from "@/components/IntroLoader";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  // Prevent scroll saat loading
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isLoading]);

  return (
    <main className="min-h-screen bg-slate-50 selection:bg-blue-100 selection:text-blue-900">
      <AnimatePresence mode="wait">
        {isLoading && (
          <IntroLoader key="loader" onFinish={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {!isLoading && (
        <>
          <Hero />
          <MySkills />
          <TrophyRoom />
          <Timeline />
          <Impact />
          <Contact />
          {/* Footer Copyright */}
          <footer className="py-8 text-center text-slate-400 text-xs flex flex-col items-center gap-4">
            <p>© 2026 Gilang Wasis Wicaksono. Designed & Built with Next.js.</p>
            <div className="opacity-80 hover:opacity-100 transition-opacity">
              <img
                src="https://komarev.com/ghpvc/?username=langss1-portfolio&label=Views&base=100&style=flat-square&color=blue"
                alt="Visitor Counter"
              />
            </div>
          </footer>
        </>
      )}
    </main>
  );
}