"use client";
import { motion } from "framer-motion";
import { ChevronRight, Calendar } from "lucide-react";

export default function Roadmap() {
  return (
    <section className="w-full py-32 bg-black overflow-hidden border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* TOP CONTENT: Linear Style Header */}
        <div className="space-y-6 mb-20">
          <div className="flex items-center gap-2 text-green-500 text-sm font-medium">
            <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_#22c55e]" />
            <span>Project and long-term planning</span>
            <ChevronRight size={14} className="text-zinc-600" />
          </div>

          <h2 className="text-5xl md:text-7xl font-medium tracking-tighter text-white leading-[1.1]">
            Set the engineering <br /> roadmap.
          </h2>

          <p className="text-lg md:text-xl text-zinc-400 max-w-lg font-light leading-relaxed">
            <span className="text-white font-medium">Align your team around a unified design timeline.</span> Plan, prototype, and track all circuit initiatives with Linear-Clone’s visual planning tools.
          </p>
        </div>

        {/* BOTTOM VISUAL: 3D Tilted Timeline */}
        <div className="relative h-[500px] w-full flex items-center justify-center pt-20">
          
          {/* Subtle Glow */}
          <div className="absolute inset-0 bg-green-500/5 blur-[120px] rounded-full -z-10" />

          <motion.div 
            initial={{ rotateX: 45, rotateZ: -10, y: 50, opacity: 0 }}
            whileInView={{ rotateX: 35, rotateZ: -15, y: 0, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="relative w-full max-w-[1000px] h-full"
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* The Main Timeline Axis (Tick Marks) */}
            <div className="absolute top-0 w-full flex items-end gap-8 border-b border-white/[0.08] pb-4">
              {[30, "AUG 3", 10, 17, 24, "SEP", 10].map((label, i) => (
                <div key={i} className="flex flex-col items-center gap-3">
                  <span className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest">{label}</span>
                  <div className="h-4 w-[1px] bg-white/[0.1]" />
                </div>
              ))}
            </div>

            {/* Vertical Marker Line (AUG 22) */}
            <div className="absolute left-[65%] top-0 h-full w-[1px] bg-white/[0.1] border-l border-dashed border-white/20">
               <div className="absolute -top-10 -left-8 px-3 py-1 bg-zinc-900 border border-white/10 rounded text-[10px] text-zinc-400 font-bold uppercase tracking-widest whitespace-nowrap">
                 AUG 22
               </div>
            </div>

            {/* Floating Task Bar 1: Realtime Prototype */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-24 left-[10%] w-[55%] h-14 bg-white/[0.03] border border-white/[0.08] rounded-xl backdrop-blur-sm flex items-center px-6 gap-4 shadow-2xl"
            >
              <div className="w-3 h-3 bg-zinc-600 rotate-45" />
              <span className="text-zinc-400 text-sm font-medium">Realtime Prototype</span>
              <div className="ml-auto w-4 h-4 border-2 border-green-500 rounded-sm rotate-45" />
              <span className="text-green-500 text-[10px] font-bold uppercase tracking-widest">Beta</span>
            </motion.div>

            {/* Floating Task Bar 2: RLHF Fine Tuning */}
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute top-48 left-[45%] w-[45%] h-14 bg-white/[0.03] border border-white/[0.08] rounded-xl backdrop-blur-sm flex items-center px-6 gap-4 shadow-2xl"
            >
              <div className="w-3 h-3 bg-zinc-600 rotate-45" />
              <span className="text-zinc-400 text-sm font-medium">PCB Optimization</span>
              <div className="ml-auto flex -space-x-1">
                 <div className="w-3 h-3 bg-zinc-700 rotate-45 border border-white/10" />
                 <div className="w-3 h-3 bg-zinc-700 rotate-45 border border-white/10" />
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}