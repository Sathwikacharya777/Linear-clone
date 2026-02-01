"use client";
import { motion } from "framer-motion";
import { ChevronRight, Circle, Layers, Filter, Flame } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Insights() {
  // 1. Start with an empty array
  const [dots, setDots] = useState<{x: number, y: number, color: string, delay: number}[]>([]);

  // 2. Generate the dots ONLY once the component is mounted on the client
  useEffect(() => {
    const generatedDots = Array.from({ length: 60 }).map((_, i) => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      color: i % 3 === 0 ? "#60a5fa" : i % 3 === 1 ? "#fbbf24" : "#4ade80",
      delay: Math.random() * 2,
    }));
    setDots(generatedDots);
  }, []);

  return (
    <section className="w-full py-32 bg-black border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* TOP CONTENT */}
        <div className="mb-16 space-y-6">
          <h2 className="text-5xl md:text-6xl font-medium tracking-tighter leading-[1.1] bg-gradient-to-b from-white to-zinc-500 bg-clip-text text-transparent">
            Engineering Insights
          </h2>
          <p className="text-zinc-400 text-lg md:text-xl font-light max-w-lg leading-relaxed mb-8">
            Take the guesswork out of production planning with realtime analytics and hardware reporting dashboards.
          </p>
          <Link 
            href="/company" 
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-zinc-900 border border-white/10 rounded-lg text-sm font-medium text-white hover:bg-zinc-800 transition-colors group"
          >
            Learn more
            <ChevronRight size={14} className="text-zinc-500 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        {/* THE 3D SCATTER PLOT VISUAL */}
        <div className="relative h-[500px] w-full flex items-center justify-center perspective-2000 overflow-hidden rounded-3xl border border-white/[0.03] bg-zinc-900/10">
          
          <motion.div 
            initial={{ rotateX: 55, rotateZ: -25, y: 100, opacity: 0 }}
            whileInView={{ rotateX: 45, rotateZ: -20, y: 0, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="relative w-[800px] h-[400px] border-l border-b border-white/10"
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />

            {/* Render dots only if they exist (client-side) */}
            {dots.map((dot, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: dot.delay, duration: 0.5 }}
                className="absolute w-1.5 h-1.5 rounded-full"
                style={{
                  left: `${dot.x}%`,
                  bottom: `${dot.y}%`,
                  backgroundColor: dot.color,
                  boxShadow: `0 0 10px ${dot.color}66`,
                  transform: "translateZ(20px)"
                }}
              />
            ))}

            {/* Sidebar Mockup */}
            <div 
              className="absolute -right-20 top-10 w-48 bg-zinc-900/80 border border-white/10 rounded-xl p-4 space-y-4 backdrop-blur-md shadow-2xl"
              style={{ transform: "rotateY(-20deg) translateZ(50px)" }}
            >
              <div className="space-y-1">
                <p className="text-[9px] text-zinc-500 font-bold uppercase tracking-widest">Measure</p>
                <div className="h-6 w-full bg-white/5 rounded border border-white/5 text-[10px] flex items-center px-2 text-zinc-300">Cycle Time</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Feature grid remains the same */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mt-24">
            <FeatureItem icon={<Circle size={18} />} title="Tailored workflows" desc="Track progress across custom flows." />
            <FeatureItem icon={<Layers size={18} />} title="Custom views" desc="Switch between list and board." />
            <FeatureItem icon={<Filter size={18} />} title="Filters" desc="Refine component lists instantly." />
            <FeatureItem icon={<Flame size={18} />} title="SLAs" desc="Apply deadlines to sensitive tasks." />
        </div>
      </div>
    </section>
  );
}

function FeatureItem({ icon, title, desc }: { icon: any, title: string, desc: string }) {
    return (
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="text-white">{icon}</div>
          <h3 className="text-sm font-semibold text-white tracking-tight">{title}</h3>
        </div>
        <p className="text-zinc-500 text-[14px] leading-relaxed font-light">{desc}</p>
      </div>
    );
}