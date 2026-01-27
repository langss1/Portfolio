import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google"; // Removed unused Inter import if it was there, or keep it if needed. Actually Inter was used in globals.css, but not imported here. The prev file had Geist.
import "./globals.css";
import Dock from "@/components/Dock";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gilang | IT student portfolio",
  description: "Portfolio of Gilang Wasis Wicaksono - AI Engineer, IoT Specialist, Cyber Security Analyst, and Fullstack Developer. Telkom University Student specializing in future-tech solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light" style={{ colorScheme: 'light' }}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-50 text-slate-900 overflow-x-hidden`}
      >
        {children}
        <Dock />
      </body>
    </html>
  );
}
