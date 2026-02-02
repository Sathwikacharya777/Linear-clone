"use client";
import { motion } from "framer-motion";
import { 
  Cpu, Zap, Activity, Battery, Radio, Shield, 
  Settings, Globe, Layers, Box, Microchip, Gauge
} from "lucide-react";
import ProductPlanning from "../components/ProductPlanning";
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
    <main className="min-h-screen bg-black overflow-x-hidden pt-32">
      
      {/* --- ICON MARQUEE SECTION --- */}
      <div className="relative flex flex-col items-center justify-center h-[650px]">
        
        {/* The Moving Background - OPACITY INCREASED for BRIGHTNESS */}
        <div className="absolute top-0 w-full h-full pointer-events-none overflow-hidden [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_90%)]">
          
          <div className="flex flex-col gap-6 opacity-40 mt-[-20px]">
            {/* ROW 1 - High Visibility White/Zinc Icons */}
            <MarqueeRow icons={iconList} duration={65} reverse={false} />
            
            {/* ROW 2 */}
            <MarqueeRow icons={iconList} duration={35} reverse={true} />
            
            {/* ROW 3 */}
            <MarqueeRow icons={iconList} duration={50} reverse={false} />
            
            {/* ROW 4 */}
            <MarqueeRow icons={iconList} duration={60} reverse={true} />
            
            {/* ROW 5 */}
            <MarqueeRow icons={iconList} duration={45} reverse={false} />
          </div>
        </div>

        {/* Central Logo - Fixed and Glowing */}
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative z-10 w-24 h-24 bg-zinc-900 border border-white/20 rounded-[24px] flex items-center justify-center shadow-[0_0_50px_rgba(79,70,229,0.3)] mb-12"
        >
          {/* Enhanced Indigo Glow */}
          <div className="absolute inset-0 bg-indigo-500/40 blur-3xl rounded-full" />
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center relative shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]">
             <div className="w-5 h-5 bg-black rotate-45" />
          </div>
        </motion.div>

        {/* Hero Text */}
        <div className="relative z-10 text-center px-6 max-w-[1200px] mx-auto">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter text-white mb-6 leading-tight">
            The system for modern <br /> hardware development
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed italic">
            Linear-Clone streamlines engineering across the entire 
            development cycle, from prototyping to mass production.
          </p>
        </div>
      </div>

      {/* Visual Divider */}
      <div className="max-w-[1200px] mx-auto px-6 mb-10">
         <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
      
      {/* SECTIONS IN ORDER */}
      <ProductPlanning />
      <ProductProgress />
      <ProductGrid />
      
      {/* FULL WIDTH FOOTER */}
      <Footer />

    </main>
  );
}

// --- BRIGHT MARQUEE COMPONENT ---
function MarqueeRow({ icons, duration, reverse }: { icons: any[], duration: number, reverse: boolean }) {
  return (
    <div className="flex w-fit">
      <motion.div 
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ duration: duration, repeat: Infinity, ease: "linear" }}
        className="flex gap-6 px-3"
      >
        {/* Quadrupled icons for a massive width */}
        {[...icons, ...icons, ...icons, ...icons].map((Icon, i) => (
          <div key={i} className="flex-shrink-0 w-24 h-24 bg-zinc-900/60 border border-white/10 rounded-2xl flex items-center justify-center shadow-inner">
            {/* Brighter Icon color (zinc-300 instead of 500) */}
            <Icon size={28} className="text-zinc-300/40 hover:text-white transition-colors duration-300" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}