"use client";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

export default function ProductProgress() {
  return (
    <section className="w-full py-6 md:py-10 bg-black">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="relative group w-full min-h-[380px] md:h-[450px] bg-[#080808] border border-white/15 rounded-[24px] md:rounded-[32px] overflow-hidden p-8 md:p-12 flex flex-col justify-end">
          
          {/* Background Visual: Animated Graph */}
          <div className="absolute inset-0 flex items-center justify-center lg:justify-end pointer-events-none overflow-hidden">
            <svg 
              viewBox="0 0 600 300" 
              className="w-[120%] md:w-[60%] lg:w-[50%] h-auto opacity-60 lg:opacity-100 transition-all lg:mr-10"
            >
              {/* Gray Target Line */}
              <motion.path
                d="M 50 150 C 200 150, 350 80, 500 80"
                stroke="#27272a"
                strokeWidth="4"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 2 }}
              />

              {/* Yellow Progress Line */}
              <motion.path
                d="M 50 220 C 200 220, 350 180, 450 110 L 500 105"
                stroke="#fbbf24"
                strokeWidth="4"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 1.8, delay: 0.2 }}
              />
              
              {/* Glowing Yellow Dot */}
              <motion.g initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: 1.5 }}>
                <circle cx="500" cy="105" r="10" fill="#fbbf24" className="opacity-20 blur-md" />
                <circle cx="500" cy="105" r="5" fill="#fbbf24" />
              </motion.g>
            </svg>
          </div>

          {/* Content Area */}
          <div className="relative z-10 space-y-4 md:space-y-5">
            <div className="flex items-center gap-2">
              <div className="w-4 md:w-5 h-2 bg-yellow-500 rounded-full shadow-[0_0_10px_#eab308]" />
              <span className="text-[11px] md:text-[13px] text-zinc-400 font-bold uppercase tracking-widest">Building</span>
            </div>
            <h3 className="text-3xl md:text-5xl font-medium tracking-tighter text-white leading-tight">
              Make progress with cycle <br className="hidden md:block" /> tracking.
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