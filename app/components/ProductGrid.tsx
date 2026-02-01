"use client";
import { motion } from "framer-motion";
import { ChevronRight, Cpu, Smartphone, MessageSquare, LifeBuoy, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function ProductGrid() {
  return (
    <section className="w-full py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* THE 2x3 BENTO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-32">
          
          {/* Card 1: AI */}
          <FeatureCard 
            category="Artificial Intelligence"
            title="Streamline circuit development with AI-powered workflows."
            visual={<div className="w-full h-full bg-gradient-to-br from-indigo-500/10 to-transparent p-6">
                <div className="space-y-2 opacity-40">
                    <div className="h-2 w-32 bg-white/20 rounded" />
                    <div className="h-2 w-48 bg-white/10 rounded" />
                    <div className="h-10 w-full border border-white/5 rounded-lg mt-4" />
                </div>
            </div>}
          />

          {/* Card 2: Insights */}
          <FeatureCard 
            category="Insights"
            title="Instant analytics for any engineering stream of work."
            visual={<div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 grid grid-cols-8 gap-2 opacity-20 p-4">
                    {Array.from({length: 32}).map((_, i) => (
                        <div key={i} className="w-1 h-1 rounded-full bg-blue-400" />
                    ))}
                </div>
            </div>}
          />

          {/* Card 3: Mobile */}
          <FeatureCard 
            category="Mobile"
            title="Move field engineering work forward from anywhere."
            visual={<div className="flex justify-center pt-10">
                <div className="w-32 h-56 bg-zinc-900 border border-white/10 rounded-2xl p-3 shadow-2xl">
                    <div className="w-full h-full bg-black/50 rounded-lg border border-white/5" />
                </div>
            </div>}
          />

          {/* Card 4: Hardware Requests */}
          <FeatureCard 
            category="Hardware Requests"
            title="Build what your manufacturing team actually needs."
            visual={<div className="p-8">
                <div className="max-w-[200px] bg-zinc-800/50 p-4 rounded-xl border border-white/5 space-y-2">
                    <div className="h-1.5 w-12 bg-white/20 rounded" />
                    <div className="h-1.5 w-full bg-white/5 rounded" />
                </div>
            </div>}
          />

          {/* Card 5: Engineering Asks */}
          <FeatureCard 
            category="Linear-Clone Asks"
            title="Turn lab requests into actionable engineering issues."
            visual={<div className="flex items-center justify-center h-full">
                <div className="w-20 h-20 border-[8px] border-zinc-800 rounded-2xl rotate-12 flex items-center justify-center">
                    <div className="w-6 h-6 bg-zinc-700 rounded-sm" />
                </div>
            </div>}
          />

          {/* Card 6: Security */}
          <FeatureCard 
            category="Security"
            title="Best-in-class industrial practices to keep your IP safe."
            visual={<div className="flex items-center justify-center h-full">
                <div className="relative">
                    <div className="w-24 h-24 rounded-full border border-dashed border-white/10 animate-spin-slow" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <ShieldCheck size={32} className="text-white opacity-40" />
                    </div>
                </div>
            </div>}
          />
        </div>

        {/* --- THE FINAL CTA SECTION --- */}
        <div className="pt-20 border-t border-white/[0.05] flex flex-col md:flex-row items-center justify-between gap-8 pb-32">
          <h2 className="text-4xl md:text-5xl font-medium tracking-tighter text-white">
            Plan the present. <span className="text-zinc-500 italic">Build the future.</span>
          </h2>
          <div className="flex items-center gap-4">
            <Link href="/contact" className="px-5 py-2 text-zinc-400 bg-zinc-900 border border-white/10 rounded-lg text-sm font-medium hover:text-white transition">
              Contact sales
            </Link>
            <Link href="/contact" className="px-5 py-2 bg-white text-black rounded-lg text-sm font-bold hover:bg-zinc-200 transition shadow-xl">
              Get started
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}

// Reusable Feature Card Component
function FeatureCard({ category, title, visual }: { category: string; title: string; visual: React.ReactNode }) {
  return (
    <div className="h-[480px] bg-zinc-900/20 border border-white/[0.08] rounded-[32px] overflow-hidden flex flex-col group hover:bg-zinc-900/40 transition-colors">
      {/* Upper Visual Area */}
      <div className="flex-1 overflow-hidden relative border-b border-white/[0.03]">
        {visual}
      </div>
      
      {/* Lower Content Area */}
      <div className="p-8 flex justify-between items-end">
        <div className="space-y-3">
          <span className="text-[12px] font-bold text-zinc-500 uppercase tracking-widest">{category}</span>
          <h3 className="text-xl font-medium text-white max-w-[280px] leading-snug">
            {title}
          </h3>
        </div>
        <button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-zinc-500 group-hover:bg-white group-hover:text-black transition-all">
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}