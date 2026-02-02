"use client";
import { ChevronRight, ArrowRight, Circle, Triangle, Hexagon, Zap, Shield, Box } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
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
    <div className="bg-black overflow-x-hidden">
      {/* --- HERO SECTION --- */}
      <main className="relative min-h-screen flex items-center justify-center pt-24 pb-12 lg:pt-16 lg:pb-0">
        
        {/* Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] lg:w-[1000px] h-[300px] lg:h-[600px] bg-indigo-500/10 rounded-full blur-[80px] lg:blur-[120px] pointer-events-none" />

        {/* 1200px Grid Container */}
        <div className="max-w-[1200px] mx-auto px-6 w-full relative z-10">
          
          {/* 
              RESPONSIVE GRID LOGIC:
              Mobile: flex-col (Stacked)
              Laptop: lg:grid-cols-2 (Side-by-side)
          */}
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            
            {/* TEXT SECTION: Centered on Mobile, Left-aligned on Laptop */}
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left space-y-6 md:space-y-8 order-1"> 
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/[0.08] bg-white/[0.02] text-zinc-400 text-[10px] md:text-[11px] uppercase tracking-[0.2em] font-medium">
                <span className="text-indigo-400 font-bold">Linear-Clone v2.0</span>
                <div className="w-[1px] h-3 bg-white/[0.1]" />
                Solving Complexity
                <ChevronRight size={12} />
              </div>

              {/* Responsive Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-medium tracking-tighter leading-[1.1] text-white/90 max-w-[600px]">
                Linear-Clone is purpose built for teams.
              </h1>
              
              {/* Responsive Subtext */}
              <p className="text-[16px] md:text-[19px] text-zinc-400 max-w-[460px] leading-relaxed font-light">
                Streamline project management and engineering workflows. 
                The new standard for modern innovation.
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 md:gap-6 pt-2">
                <Link href="/users" className="h-10 px-5 bg-white text-black rounded-md text-[14px] font-semibold hover:bg-zinc-200 transition shadow-[0_0_20px_rgba(255,255,255,0.15)] flex items-center justify-center">
                  Get Started
                </Link>
                <Link href="/product" className="group flex items-center gap-2 text-[14px] text-zinc-400 hover:text-white transition">
                  Check Inventory
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* CUBE SECTION: Below text on Mobile, Right side on Laptop */}
            <div className="flex items-center justify-center hero-container order-2 lg:order-2 mt-8 lg:mt-0">
              <div className="cube scale-75 md:scale-90 lg:scale-100">
                <CubeFace side="front" type="face-white" />
                <CubeFace side="back" type="face-dark" />
                <CubeFace side="right" type="face-mixed" />
                <CubeFace side="left" type="face-white" />
                <CubeFace side="top" type="face-mixed" />
                <CubeFace side="bottom" type="face-dark" />
              </div>
            </div>

          </div>
        </div>
      </main>

      {/* --- PARTNERS LOGO SECTION --- */}
      <section className="w-full py-20 lg:py-32 border-t border-white/[0.05] relative group">
        <div className="max-w-[1200px] mx-auto px-6 relative">
          <div className="text-center mb-16 space-y-2">
            <h2 className="text-zinc-100 text-[24px] lg:text-[34px] font-medium tracking-tight">Powering the world&apos;s best product teams.</h2>
            <p className="text-zinc-500 text-[16px] lg:text-[24px] font-light">From next-gen startups to established enterprises.</p>
          </div>

          <div className="relative">
            {/* Hover Button (Visible on Laptop) */}
            <div className="absolute inset-0 z-20 hidden lg:flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 pointer-events-none group-hover:pointer-events-auto">
              <Link href="/customers" className="px-6 py-2 bg-white text-black text-sm font-semibold rounded-full shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:scale-105 transition-transform">
                Meet our customers →
              </Link>
            </div>

            {/* Logo Grid: 2 columns mobile, 4 columns laptop */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 lg:gap-y-16 gap-x-8 items-center justify-items-center opacity-40 grayscale group-hover:opacity-100 lg:group-hover:opacity-10 lg:group-hover:blur-sm transition-all duration-700">
              <LogoItem icon={<Circle size={18} fill="currentColor"/>} name="OpenAI" />
              <LogoItem icon={<span className="font-bold text-lg">$</span>} name="Cash App" />
              <LogoItem icon={<Hexagon size={18}/>} name="Scale" />
              <LogoItem icon={<Zap size={18} fill="currentColor"/>} name="Ramp" />
              <LogoItem icon={<Triangle size={18} fill="currentColor" className="rotate-180"/>} name="Vercel" />
              <LogoItem icon={<div className="w-4 h-4 bg-white rounded-full" />} name="Coinbase" />
              <LogoItem icon={<Shield size={18}/>} name="Boom" />
              <LogoItem icon={<Box size={18}/>} name="Cursor" />
            </div>
            
            {/* Mobile CTA */}
            <div className="flex justify-center mt-12 lg:hidden">
               <Link href="/customers" className="text-indigo-400 text-sm font-medium">Meet our customers →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER & COMPONENTS */}
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

// Sub-components
function CubeFace({ side, type }: { side: string; type: string }) {
  return (
    <div className={`face ${side} ${type}`}>
      {[...Array(9)].map((_, i) => (
        <div key={i} className="cubie" />
      ))}
    </div>
  );
}

function LogoItem({ icon, name }: { icon: any; name: string }) {
  return (
    <div className="flex items-center gap-2 group">
      <div className="text-white group-hover:text-indigo-400 transition-colors duration-300">{icon}</div>
      <span className="text-[14px] lg:text-[18px] font-semibold tracking-tighter text-white uppercase italic">{name}</span>
    </div>
  );
}