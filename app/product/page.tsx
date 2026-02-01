"use client";
import { motion } from "framer-motion";
import { 
  Cpu, Zap, Activity, Battery, Radio, Shield, 
  Settings, Globe, Layers, Box, Microchip, Gauge
} from "lucide-react";
import ProductProgress from "../components/ProductProgress";
import ProductGrid from "../components/ProductGrid";
import Footer from "../components/Footer";

// The high-end engineering icons
const iconList = [
  Cpu, Zap, Activity, Battery, Radio, Shield, 
  Settings, Globe, Layers, Box, Microchip, Gauge
];

export default function ProductPage() {
  return (
    <main className="min-h-screen bg-black overflow-hidden pt-32 pb-20">
      
      {/* --- ICON MARQUEE SECTION --- */}
      <div className="relative flex flex-col items-center justify-center h-[600px]">
        
        {/* The Moving Background (5 Rows total now) */}
        <div className="absolute top-0 w-full h-full pointer-events-none overflow-hidden [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_80%)]">
          
          <div className="flex flex-col gap-6 opacity-20 mt-[-50px]">
            {/* ROW 1 (New) - Very slow */}
            <MarqueeRow icons={iconList} duration={65} reverse={false} />
            
            {/* ROW 2 (New) - Faster reverse */}
            <MarqueeRow icons={iconList} duration={35} reverse={true} />
            
            {/* ROW 3 (Original) */}
            <MarqueeRow icons={iconList} duration={50} reverse={false} />
            
            {/* ROW 4 (Original) */}
            <MarqueeRow icons={iconList} duration={60} reverse={true} />
            
            {/* ROW 5 (Original) */}
            <MarqueeRow icons={iconList} duration={45} reverse={false} />
          </div>
        </div>

        {/* Central Logo - Fixed and Glowing */}
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative z-10 w-24 h-24 bg-zinc-900 border border-white/10 rounded-[24px] flex items-center justify-center shadow-2xl mb-12"
        >
          <div className="absolute inset-0 bg-indigo-500/30 blur-3xl rounded-full" />
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center relative">
             <div className="w-5 h-5 bg-black rotate-45 shadow-inner" />
          </div>
        </motion.div>

        {/* Hero Text */}
        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl md:text-7xl font-medium tracking-tighter text-white mb-6 leading-tight">
            The system for modern <br /> hardware development
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
            Linear-Clone streamlines engineering across the entire 
            development cycle, from roadmap to release.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-20">
         <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
      <ProductProgress />
        <ProductGrid />
        <Footer />

    </main>
  );
}

// --- MARQUEE COMPONENT ---
function MarqueeRow({ icons, duration, reverse }: { icons: any[], duration: number, reverse: boolean }) {
  return (
    <div className="flex w-fit">
      <motion.div 
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ duration: duration, repeat: Infinity, ease: "linear" }}
        className="flex gap-6 px-3"
      >
        {/* Quadrupled icons for a massive width to ensure no gaps */}
        {[...icons, ...icons, ...icons, ...icons].map((Icon, i) => (
          <div key={i} className="flex-shrink-0 w-24 h-24 bg-zinc-900/40 border border-white/5 rounded-2xl flex items-center justify-center">
            <Icon size={28} className="text-zinc-500/50 hover:text-white transition-colors" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}