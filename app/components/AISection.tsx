"use client";
import { motion } from "framer-motion";
import { ChevronRight, Sparkles, Cpu, Zap, Activity, ShieldCheck, Search } from "lucide-react";
import Link from "next/link";

export default function AISection() {
  // Engineering-themed AI agents
  const agents = [
    { name: "PCB Auto-Router", icon: <Cpu size={16} />, active: true },
    { name: "Thermal Auditor", icon: <ShieldCheck size={16} />, active: false },
    { name: "Power Analyzer", icon: <Zap size={16} />, active: false },
    { name: "Signal Integrity Bot", icon: <Activity size={16} />, active: false },
    { name: "Component Sourcing", icon: <Search size={16} />, active: false },
  ];

  return (
    <section className="w-full py-32 bg-black overflow-hidden border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        
        {/* LEFT SIDE: Content (Linear Style) */}
        <div className="space-y-8 z-10 lg:pl-12">
          <div className="flex items-center gap-2 text-indigo-400 text-sm font-medium">
            <Sparkles size={16} />
            <span>Artificial intelligence</span>
            <ChevronRight size={14} className="text-zinc-600" />
          </div>

          <h2 className="text-5xl md:text-7xl font-medium tracking-tighter text-white leading-[1.05] bg-gradient-to-b from-white to-zinc-500 bg-clip-text text-transparent">
            AI-assisted <br /> engineering.
          </h2>

          <p className="text-lg md:text-xl text-zinc-400 max-w-md font-light leading-relaxed">
            <span className="text-white font-medium italic">Linear-Clone Intelligence.</span> Choose from a variety of AI agents to delegate complex routing, thermal audits, and technical documentation.
          </p>

          <Link 
            href="/company" 
            className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-900 border border-white/10 rounded-lg text-sm font-medium text-white hover:bg-zinc-800 transition-all group shadow-xl"
          >
            Learn more
            <ChevronRight size={14} className="text-zinc-500 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        {/* RIGHT SIDE: The 3D Floating List (Resend Style) */}
        <div className="relative flex justify-center lg:justify-end" style={{ perspective: "2000px" }}>
          
          {/* Background Glow behind the list */}
          <div className="absolute inset-0 bg-indigo-500/10 blur-[120px] rounded-full -z-10 translate-x-12" />

          <motion.div 
            initial={{ rotateX: 20, rotateY: -15, rotateZ: 5 }}
            animate={{ rotateX: 25, rotateY: -20, rotateZ: 8 }}
            transition={{ 
              duration: 4, 
              repeat: Infinity, 
              repeatType: "reverse", 
              ease: "easeInOut" 
            }}
            className="w-full max-w-[440px] bg-zinc-900/40 border border-white/[0.08] rounded-2xl shadow-2xl backdrop-blur-xl overflow-hidden p-2"
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* LIST HEADER: Blinking Cursor with Keyframes Fix */}
            <div className="p-4 border-b border-white/[0.05] text-[13px] text-zinc-500 font-medium flex items-center tracking-tight">
              Assign to
              <motion.span
                animate={{ 
                  opacity: [1, 1, 0, 0] // High, High, Low, Low creates the instant jump
                }}
                transition={{ 
                  duration: 0.8, 
                  repeat: Infinity, 
                  times: [0, 0.5, 0.51, 1], // Jumps at the 50% mark
                  ease: "linear" 
                }}
                className="ml-2 w-[2px] h-[14px] bg-indigo-500 shadow-[0_0_8px_#5e6ad2]"
              />
            </div>

            {/* Agent List */}
            <div className="space-y-1 mt-1">
              {agents.map((agent, i) => (
                <div 
                  key={i}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-300 ${
                    agent.active 
                    ? "bg-white/[0.05] border border-white/[0.1] shadow-xl" 
                    : "opacity-40 hover:opacity-100"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center border border-white/5 ${agent.active ? 'text-indigo-400' : 'text-white'}`}>
                      {agent.icon}
                    </div>
                    <span className="text-sm font-medium text-white">{agent.name}</span>
                    <span className="text-[10px] uppercase tracking-widest px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-500 font-bold border border-white/5">
                      Agent
                    </span>
                  </div>
                  {agent.active && (
                    <div className="w-4 h-4 rounded-full bg-indigo-500/20 flex items-center justify-center border border-indigo-500/50">
                      <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-pulse" />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Bottom Glow Fade */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-zinc-900/80 to-transparent pointer-events-none" />
          </motion.div>
        </div>

      </div>
    </section>
  );
}