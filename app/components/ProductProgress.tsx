"use client";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

export default function ProductProgress() {
  return (
    <section className="w-full py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Feature Grid - We put the screenshot card in a balanced container */}
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-6">
          
          {/* THE PROGRESS CARD */}
          <div className="relative group w-full h-[400px] bg-zinc-900/20 border border-white/[0.08] rounded-[32px] overflow-hidden p-10 flex flex-col justify-end">
            
            {/* 1. Background Visual: The Animated SVG Graph */}
            <div className="absolute inset-0 flex items-center justify-center translate-x-20">
              <svg width="600" height="200" viewBox="0 0 600 200" fill="none" className="opacity-80">
                {/* Gray Line (Target) */}
                <motion.path
                  d="M0 100 C 150 100, 300 60, 450 60"
                  stroke="#3f3f46"
                  strokeWidth="3"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                />
                <motion.circle 
                  cx="450" cy="60" r="4" fill="#3f3f46" 
                  initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 1.5 }}
                />

                {/* Yellow Line (Progress) */}
                <motion.path
                  d="M0 150 C 150 150, 300 130, 400 90 L 450 85"
                  stroke="#fbbf24"
                  strokeWidth="3"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1.8, ease: "easeInOut", delay: 0.2 }}
                />
                <motion.circle 
                  cx="450" cy="85" r="5" fill="#fbbf24" 
                  className="shadow-[0_0_15px_#fbbf24]"
                  initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 1.5 }}
                />
                
                {/* Subtle Glow under yellow line */}
                <defs>
                  <linearGradient id="yellowGradient" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#fbbf24" stopOpacity="0" />
                    <stop offset="100%" stopColor="#fbbf24" stopOpacity="0.1" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* 2. Content */}
            <div className="relative z-10 space-y-4 max-w-sm">
              <div className="flex items-center gap-2">
                <div className="w-4 h-2 bg-yellow-500 rounded-full" />
                <span className="text-[13px] text-zinc-400 font-medium">Building</span>
              </div>
              <h3 className="text-3xl font-medium tracking-tight text-white leading-tight">
                Make progress with cycle <br /> tracking and engineering.
              </h3>
            </div>

            {/* 3. Action Button (Bottom Right) */}
            <button className="absolute bottom-10 right-10 w-12 h-12 bg-zinc-800/50 border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-black transition-all group">
              <ChevronRight size={20} className="group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}