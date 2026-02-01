import { ChevronRight, ArrowRight, Circle, Triangle, Hexagon, Zap, Shield, Box, Cpu, Globe } from "lucide-react";
import Link from "next/link";
import Features from "./components/Features";
import AISection from "./components/AISection";
import Operations from "./components/Operations";
import Roadmap from "./components/Roadmap";
import Insights from "./components/Insights";
import Integrations from "./components/Integrations";
import Foundations from "./components/Foundations";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="bg-black">
      {/* --- HERO SECTION --- */}
      <main className="relative min-h-[90vh] flex items-center justify-center px-6 lg:px-20 pt-16 overflow-hidden">
        
        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
          
          {/* LEFT SIDE: Linear Typography */}
          <div className="flex flex-col items-start space-y-8 lg:pl-16"> 
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/[0.08] bg-white/[0.02] text-zinc-400 text-[11px] uppercase tracking-[0.2em] font-medium">
              <span className="text-indigo-400">Linear-Clone v2.0</span>
              <div className="w-[1px] h-3 bg-white/[0.1]" />
              Circuit Innovation
              <ChevronRight size={12} />
            </div>

            <h1 className="text-4xl md:text-6xl font-medium tracking-tighter leading-[1.1] text-gradient max-w-[500px]">
              Linear-Clone is purpose built for engineering teams.
            </h1>
            
            <p className="text-[17px] md:text-[19px] text-zinc-400 max-w-[460px] leading-relaxed font-light">
              Streamline PCB design, embedded systems, and IoT product development. 
              The new standard for modern hardware innovation.
            </p>

            <div className="flex items-center gap-6 pt-2">
              <Link href="/contact" className="h-10 px-5 bg-white text-black rounded-md text-[14px] font-semibold hover:bg-zinc-200 transition shadow-[0_0_20px_rgba(255,255,255,0.15)] flex items-center justify-center">
                Get Started
              </Link>
              <Link href="/product" className="group flex items-center gap-2 text-[14px] text-zinc-400 hover:text-white transition">
                Check Inventory
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* RIGHT SIDE: Moving Cube */}
          <div className="hidden lg:flex items-center justify-center hero-container">
            <div className="cube">
              <div className="face front flex items-center justify-center">
                  <div className="w-4 h-4 bg-indigo-500 rounded-full animate-pulse shadow-[0_0_15px_#5e6ad2]" />
              </div>
              <div className="face back"></div>
              <div className="face right"></div>
              <div className="face left"></div>
              <div className="face top"></div>
              <div className="face bottom"></div>
            </div>
          </div>
        </div>
      </main>

      {/* --- LOGO SECTION (Social Proof) --- */}
      <section className="w-full py-24 border-t border-white/[0.05] relative group">
  <div className="max-w-7xl mx-auto px-6 relative">
    
    {/* Header Text */}
    <div className="text-center mb-16 space-y-1">
      <h2 className="text-zinc-100 text-[34px] font-medium tracking-tight">
        Powering the world&apos;s best product teams.
      </h2>
      <p className="text-zinc-500 text-[24px]">
        From next-gen startups to established enterprises.
      </p>
    </div>

    {/* Logo Grid Container */}
    <div className="relative">
      {/* THE BUTTON: Appears on Hover */}
      <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 pointer-events-none group-hover:pointer-events-auto">
        <Link 
          href="/customers" 
          className="px-6 py-2 bg-white text-black text-sm font-semibold rounded-full shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:scale-105 transition-transform"
        >
          Meet our customers →
        </Link>
      </div>

      {/* The Grid: Dims when the button appears */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-y-16 gap-x-12 items-center justify-items-center opacity-40 grayscale group-hover:opacity-10 group-hover:blur-sm transition-all duration-700">
        <LogoItem icon={<Circle size={20} fill="currentColor"/>} name="OpenAI" />
        <LogoItem icon={<span className="font-bold text-xl">$</span>} name="Cash App" />
        <LogoItem icon={<Hexagon size={20}/>} name="Scale" />
        <LogoItem icon={<Zap size={20} fill="currentColor"/>} name="Ramp" />
        
        <LogoItem icon={<Triangle size={20} fill="currentColor" className="rotate-180"/>} name="Vercel" />
        <LogoItem icon={<div className="w-5 h-5 bg-white rounded-full" />} name="Coinbase" />
        <LogoItem icon={<Shield size={20}/>} name="Boom" />
        <LogoItem icon={<Box size={20}/>} name="Cursor" />
      </div>
    </div>
  </div>
</section>
<Features />
<AISection />
<Operations />
<Roadmap />
<Insights />
<Integrations />
<Foundations />
<Footer />
    </div>
  );
}

// Helper component for Logo items
function LogoItem({ icon, name }: { icon: any; name: string }) {
  return (
    <div className="flex items-center gap-2 group">
      <div className="text-white group-hover:text-indigo-400 transition-colors duration-300">
        {icon}
      </div>
      <span className="text-[18px] font-semibold tracking-tighter text-white uppercase italic">
        {name}
      </span>
    </div>
  );
}