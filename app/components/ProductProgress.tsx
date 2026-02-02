"use client";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

export default function ProductProgress() {
  return (
    <section className="w-full py-10 bg-black">
      {/* Container aligned exactly with Navbar Logo */}
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* THE PROGRESS CARD */}
        <div className="relative group w-full h-[450px] bg-[#080808] border border-white/15 rounded-[32px] overflow-hidden p-12 flex flex-col justify-end">
          
          {/* 1. Background Visual: The Animated SVG Graph (Brightened) */}
          <div className="absolute inset-0 flex items-center justify-center lg:justify-end lg:pr-20 pointer-events-none">
            <svg width="600" height="250" viewBox="0 0 600 250" fill="none" className="overflow-visible">
              
              {/* Gray Target Line (Brighter) */}
              <motion.path
                d="M 50 150 C 200 150, 350 80, 500 80"
                stroke="#27272a"
                strokeWidth="4"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
              <motion.circle 
                cx="500" cy="80" r="5" fill="#27272a" 
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 1.5 }}
              />

              {/* Yellow Progress Line (Glow Effect) */}
              <motion.path
                d="M 50 200 C 200 200, 350 160, 450 110 L 500 105"
                stroke="#fbbf24"
                strokeWidth="4"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.8, ease: "easeInOut", delay: 0.2 }}
              />
              
              {/* Glowing Yellow Dot */}
              <motion.g
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5, type: "spring" }}
              >
                <circle cx="500" cy="105" r="12" fill="#fbbf24" className="opacity-20 blur-md" />
                <circle cx="500" cy="105" r="6" fill="#fbbf24" />
              </motion.g>

              {/* Gradient definition for smooth fade */}
              <defs>
                <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#fbbf24" stopOpacity="0" />
                  <stop offset="100%" stopColor="#fbbf24" stopOpacity="1" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* 2. Content: Perfectly Aligned to the 1200px Left Margin */}
          <div className="relative z-10 space-y-5">
            <div className="flex items-center gap-2">
              <div className="w-5 h-2 bg-yellow-500 rounded-full shadow-[0_0_10px_#eab308]" />
              <span className="text-[13px] text-zinc-400 font-bold uppercase tracking-widest">Building</span>
            </div>
            <h3 className="text-4xl md:text-5xl font-medium tracking-tighter text-white leading-tight">
              Make progress with cycle <br /> tracking and engineering.
            </h3>
          </div>

          {/* 3. Action Button (Bottom Right) */}
          <button className="absolute bottom-12 right-12 w-12 h-12 bg-zinc-800/80 border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300 shadow-xl group">
            <ChevronRight size={22} className="group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
}