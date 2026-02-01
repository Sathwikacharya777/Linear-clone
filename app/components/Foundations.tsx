"use client";
import { motion } from "framer-motion";
import { ShieldCheck, Zap, Globe, CheckCircle2, Cpu } from "lucide-react";
import Link from "next/link";

export default function Foundations() {
  return (
    <section className="w-full bg-black py-32 border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-32">
          
          {/* LEFT CONTENT */}
          <div className="space-y-12">
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-zinc-500 text-[12px] font-bold uppercase tracking-widest">
                <div className="w-3 h-[1px] bg-zinc-700" />
                Under the hood
              </div>
              <h2 className="text-5xl md:text-6xl font-medium tracking-tighter text-white leading-[1.1]">
                Built on strong <br /> foundations.
              </h2>
              <p className="text-zinc-400 text-lg font-light leading-relaxed max-w-md">
                Linear-Clone is designed for reliability. We&apos;ve packed a wealth of complex technologies under the hood to keep your circuits robust, safe, and blazing fast.
              </p>
            </div>

            {/* Feature List */}
            <div className="space-y-12">
              <FoundationItem 
                title="Linear-Clone Sync Engine" 
                desc="Built with a high-performance architecture and an obsessive focus on speed and data integrity." 
              />
              <FoundationItem 
                title="Enterprise-ready security" 
                desc="Best-in-class security practices keep your engineering work safe and secure at every layer." 
                hasLink
              />
              <FoundationItem 
                title="Engineered for scale" 
                desc="Built for teams of all sizes. From early-stage hardware startups to global electronics enterprises." 
              />
            </div>

            {/* Compliance Badges */}
            <div className="pt-12 flex items-center gap-8 md:gap-12 border-t border-white/5">
              <Badge icon={<Cpu size={24} />} label="ISO 9001" />
              <Badge icon={<ShieldCheck size={24} />} label="GDPR" />
              <Badge icon={<Globe size={24} />} label="ROHS" />
            </div>
          </div>

          {/* RIGHT VISUAL: The Technical "Engine" Diagram */}
          <div className="relative hidden lg:block">
            <div className="sticky top-32 w-full aspect-square bg-zinc-900/20 border border-dashed border-white/10 rounded-2xl p-8 overflow-hidden">
               {/* Technical UI Mockup */}
               <div className="absolute top-0 right-0 w-2/3 h-full border-l border-white/10 bg-black/40 backdrop-blur-3xl p-6 space-y-6">
                  <div className="flex justify-between items-center opacity-40">
                    <div className="h-2 w-20 bg-white/20 rounded" />
                    <div className="w-4 h-4 rounded-full border border-white/20" />
                  </div>
                  <div className="h-40 w-full bg-white/[0.02] border border-white/5 rounded-xl flex items-center justify-center">
                     <span className="text-[10px] text-zinc-600 font-mono tracking-widest uppercase">Syncing Node_01...</span>
                  </div>
                  <div className="space-y-3">
                    <div className="h-[1px] w-full bg-white/10" />
                    <div className="h-2 w-full bg-white/5 rounded" />
                    <div className="h-2 w-2/3 bg-white/5 rounded" />
                  </div>
               </div>
               {/* Floating "Sync Engine" Box */}
               <motion.div 
                 animate={{ y: [0, -10, 0] }}
                 transition={{ duration: 4, repeat: Infinity }}
                 className="absolute bottom-20 left-10 w-48 p-4 bg-zinc-900 border border-white/10 rounded-xl shadow-2xl z-20"
               >
                 <p className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest mb-2">Internal Engine</p>
                 <div className="h-12 bg-white/5 rounded-lg border border-white/5 flex items-center justify-center">
                    <Zap size={16} className="text-indigo-500 fill-indigo-500" />
                 </div>
               </motion.div>
            </div>
          </div>
        </div>

        {/* --- FINAL CTA SECTION --- */}
        <div className="pt-32 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
           <h2 className="text-4xl md:text-5xl font-medium tracking-tighter text-white">
             Plan the present. <span className="text-zinc-500 italic">Build the future.</span>
           </h2>
           <div className="flex items-center gap-4">
             <Link href="/contact" className="px-5 py-2 rounded-lg bg-zinc-900 border border-white/10 text-zinc-400 text-sm font-medium hover:text-white transition">
               Contact sales
             </Link>
             <Link href="/contact" className="px-5 py-2 rounded-lg bg-white text-black text-sm font-bold hover:bg-zinc-200 transition shadow-xl">
               Get started
             </Link>
           </div>
        </div>

      </div>
    </section>
  );
}

// Helper: Foundation Item
function FoundationItem({ title, desc, hasLink = false }: { title: string, desc: string, hasLink?: boolean }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
      <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
        {title} {hasLink && <ChevronRight size={12} className="text-zinc-600" />}
      </h3>
      <p className="text-sm text-zinc-500 leading-relaxed font-light">
        {desc}
      </p>
    </div>
  );
}

// Helper: Badge
function Badge({ icon, label }: { icon: any, label: string }) {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center text-zinc-600">
        {icon}
      </div>
      <div className="flex items-center gap-1.5 text-[10px] text-zinc-500 font-bold uppercase tracking-widest">
        {label} <CheckCircle2 size={10} className="text-zinc-700" />
      </div>
    </div>
  );
}

function ChevronRight({ size, className }: { size: number, className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="m9 18 6-6-6-6"/>
    </svg>
  );
}