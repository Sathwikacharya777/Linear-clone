"use client";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

export default function ProductPlanning() {
  return (
    <section className="w-full bg-black py-10">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* THE PLANNING CARD */}
        <div className="relative group w-full h-[450px] bg-[#080808] border border-white/15 rounded-[32px] overflow-hidden p-12 flex flex-col justify-end">
          
          {/* 1. Background Visual: BRIGHT WHITE DIAL */}
          <div className="absolute top-[-10%] left-0 w-full h-full flex justify-center pointer-events-none">
            <svg width="1200" height="600" viewBox="0 0 1200 600" fill="none" className="w-full h-full overflow-visible">
              
              {/* SVG Filter for Glow Effect */}
              <defs>
                <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* Main Arc - Thicker and Brighter */}
              <motion.path
                d="M 150 450 Q 600 0 1050 450"
                stroke="white"
                strokeOpacity="0.6"
                strokeWidth="2"
                filter="url(#glow)"
                fill="none"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />

              {/* Ticks along the arc - Brightened */}
              {[...Array(80)].map((_, i) => {
                const angle = (i - 40) * 1.8; // Adjusted spread
                const isProminent = i % 10 === 0;
                return (
                  <line
                    key={i}
                    x1="600" y1="140"
                    x2="600" y2={isProminent ? "170" : "155"}
                    stroke="white"
                    strokeOpacity={isProminent ? "0.8" : "0.3"}
                    strokeWidth={isProminent ? "2.5" : "1"}
                    transform={`rotate(${angle}, 600, 450)`}
                  />
                );
              })}

              {/* Center Green Indicator - Glowing */}
              <motion.g
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                {/* Green Glow */}
                <circle cx="600" cy="185" r="8" fill="#22c55e" className="opacity-20 blur-md" />
                {/* Triangle Pointer */}
                <path d="M 594 180 L 600 190 L 606 180 Z" fill="#22c55e" />
              </motion.g>
              
              {/* Latitude/Longitude Style Text Labels */}
              <text x="220" y="380" fill="white" fillOpacity="0.2" fontSize="9" className="font-mono tracking-[0.3em]">14.035° E</text>
              <text x="220" y="400" fill="white" fillOpacity="0.4" fontSize="10" className="uppercase font-bold tracking-widest italic">Idea</text>
              
              <text x="900" y="380" fill="white" fillOpacity="0.2" fontSize="9" className="font-mono tracking-[0.3em]">43.201° N</text>
              <text x="900" y="400" fill="white" fillOpacity="0.4" fontSize="10" className="uppercase font-bold tracking-widest italic">Release</text>
            </svg>
          </div>

          {/* 2. Content Area: Aligned Left with Logo */}
          <div className="relative z-10 space-y-5">
            <div className="flex items-center gap-2">
              <div className="w-5 h-2 bg-green-500 rounded-full shadow-[0_0_12px_#22c55e]" />
              <span className="text-[13px] text-zinc-400 font-bold uppercase tracking-widest">Planning</span>
            </div>
            <h3 className="text-4xl md:text-5xl font-medium tracking-tighter text-white leading-tight">
              Set the product direction <br /> with projects and initiatives
            </h3>
          </div>

          {/* 3. Action Button */}
          <button className="absolute bottom-12 right-12 w-12 h-12 bg-zinc-800/80 border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300 shadow-xl group">
            <ChevronRight size={22} className="group-hover:translate-x-0.5 transition-transform" />
          </button>

        </div>
      </div>
    </section>
  );
}