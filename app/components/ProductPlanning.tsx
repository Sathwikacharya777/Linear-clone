"use client";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

export default function ProductPlanning() {
  return (
    <section className="w-full bg-black py-6 md:py-10">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="relative group w-full min-h-[380px] md:h-[450px] bg-[#080808] border border-white/15 rounded-[24px] md:rounded-[32px] overflow-hidden p-8 md:p-12 flex flex-col justify-end">
          
          {/* Background Visual: BRIGHT WHITE DIAL */}
          <div className="absolute top-0 left-0 w-full h-full flex justify-center pointer-events-none overflow-hidden">
            <svg 
              viewBox="0 0 1200 600" 
              fill="none" 
              className="w-[150%] md:w-full h-auto mt-[-10%] md:mt-[-5%] transition-all"
            >
              <defs>
                <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* Main Arc */}
              <motion.path
                d="M 150 450 Q 600 0 1050 450"
                stroke="white"
                strokeOpacity="0.5"
                strokeWidth="2"
                filter="url(#glow)"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />

              {/* Ticks */}
              {[...Array(60)].map((_, i) => {
                const angle = (i - 30) * 2.5; 
                const isProminent = i % 10 === 0;
                return (
                  <line
                    key={i}
                    x1="600" y1="120"
                    x2="600" y2={isProminent ? "160" : "145"}
                    stroke="white"
                    strokeOpacity={isProminent ? "0.7" : "0.2"}
                    strokeWidth={isProminent ? "2.5" : "1"}
                    transform={`rotate(${angle}, 600, 450)`}
                  />
                );
              })}

              {/* Glowing Indicator */}
              <motion.g initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.5 }}>
                <circle cx="600" cy="180" r="8" fill="#22c55e" className="opacity-20 blur-md" />
                <path d="M 594 175 L 600 185 L 606 175 Z" fill="#22c55e" />
              </motion.g>
              
              {/* Responsive Labels */}
              <text x="250" y="380" fill="white" fillOpacity="0.3" fontSize="12" className="hidden md:block font-mono">Idea</text>
              <text x="900" y="380" fill="white" fillOpacity="0.3" fontSize="12" className="hidden md:block font-mono">Release</text>
            </svg>
          </div>

          {/* Content Area */}
          <div className="relative z-10 space-y-4 md:space-y-5">
            <div className="flex items-center gap-2">
              <div className="w-4 md:w-5 h-2 bg-green-500 rounded-full shadow-[0_0_12px_#22c55e]" />
              <span className="text-[11px] md:text-[13px] text-zinc-400 font-bold uppercase tracking-widest">Planning</span>
            </div>
            <h3 className="text-3xl md:text-5xl font-medium tracking-tighter text-white leading-tight">
              Set the product direction <br className="hidden md:block" /> with projects
            </h3>
          </div>

          {/* <button className="absolute bottom-8 right-8 md:bottom-12 md:right-12 w-10 h-10 md:w-12 md:h-12 bg-zinc-800 border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-black transition-all">
            <ChevronRight size={20} />
          </button> */}
        </div>
      </div>
    </section>
  );
}