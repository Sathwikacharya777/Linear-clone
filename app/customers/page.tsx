"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ChevronRight, Cpu, Zap, Radio, Target, 
  MoveLeft, ShieldAlert, BarChart3, Globe, 
  Smartphone, Rocket, Settings, Hexagon
} from "lucide-react";
import Link from "next/link";
import Footer from "../components/Footer";

// --- DATA STRUCTURES ---

const featuredStories = [
  {
    logo: <Cpu size={20} />,
    title: "Why CircuitLab chose Linear-Clone and scaled to 3,000 units",
    bgIcon: <Cpu size={140} className="opacity-[0.03] absolute -right-6 -top-6 rotate-12" />,
  },
  {
    logo: <Zap size={20} />,
    title: "IoT Spark scaled from 5 to 1,000+ employees with Linear-Clone",
    bgIcon: <Zap size={140} className="opacity-[0.03] absolute -right-6 -top-6 rotate-12" />,
  },
  {
    logo: <Target size={20} />,
    title: "PowerGrid proved Linear-Clone's impact with a data-driven pilot",
    bgIcon: <Target size={140} className="opacity-[0.03] absolute -right-6 -top-6 rotate-12" />,
  },
  {
    logo: <Radio size={20} />,
    title: "How SignalFlow compressed PCB resolution time by 52%",
    bgIcon: <Radio size={140} className="opacity-[0.03] absolute -right-6 -top-6 rotate-12" />,
  },
];

const categories = ["Featured", "IoT", "Robotics", "Automotive", "Aerospace", "Industrial", "Consumer"];

const companies = [
  { name: "OpenAI", tags: ["IoT", "Industrial"], linkText: "Read story", icon: <Cpu size={14} /> },
  { name: "Tesla", tags: ["Automotive", "Industrial"], linkText: "Visit site", icon: <Zap size={14} /> },
  { name: "SpaceX", tags: ["Aerospace"], linkText: "Visit site", icon: <Rocket size={14} /> },
  { name: "Boston Dynamics", tags: ["Robotics", "Industrial"], linkText: "Read story", icon: <Settings size={14} /> },
  { name: "Apple", tags: ["Consumer", "IoT"], linkText: "Read story", icon: <Smartphone size={14} /> },
  { name: "Samsung", tags: ["Consumer", "Industrial"], linkText: "Visit site", icon: <Radio size={14} /> },
  { name: "NVIDIA", tags: ["IoT", "Industrial"], linkText: "Read story", icon: <Hexagon size={14} /> },
  { name: "Linear-Clone Field", tags: ["Industrial"], linkText: "Read story", icon: <Target size={14} /> },
];

export default function CustomersPage() {
  const [activeTab, setActiveTab] = useState("Featured");

  // Filter Logic
  const filteredCompanies = activeTab === "Featured" 
    ? companies 
    : companies.filter(c => c.tags.includes(activeTab));

  return (
    <main className="min-h-screen bg-black text-white pt-32 pb-20">
      {/* Container aligned with Navbar Logo */}
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* --- 1. HERO SECTION --- */}
        <div className="mb-24 space-y-6">
          <Link href="/" className="inline-flex items-center gap-2 text-zinc-500 hover:text-white transition-colors text-sm mb-4">
             <MoveLeft size={16} /> Back to Home
          </Link>
          <h1 className="text-5xl md:text-7xl font-medium tracking-tighter leading-[1.1] bg-gradient-to-b from-white to-zinc-500 bg-clip-text text-transparent">
            Meet the teams <br /> who build the future
          </h1>
          <p className="text-zinc-500 text-lg md:text-xl font-light max-w-xl leading-relaxed">
            Trusted by more than 20,000 organizations, from ambitious hardware startups to major industrial enterprises.
          </p>
          <Link 
            href="/product" 
            className="inline-flex items-center gap-1 text-indigo-400 hover:text-indigo-300 transition-colors text-sm font-medium"
          >
            Make the switch <ChevronRight size={14} />
          </Link>
        </div>

        {/* --- 2. FEATURED STORIES (2x2 Grid) --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredStories.map((story, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -4 }}
              className="relative h-[340px] bg-zinc-900/20 border border-white/[0.06] rounded-2xl p-10 flex flex-col justify-between group cursor-pointer overflow-hidden transition-colors hover:bg-zinc-900/40"
            >
              <div className="absolute inset-0 opacity-[0.1] pointer-events-none bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:32px_32px]" />
              {story.bgIcon}
              <div className="relative z-10">
                <div className="w-10 h-10 bg-zinc-800 border border-white/10 rounded-lg flex items-center justify-center text-zinc-400 mb-10 group-hover:text-white transition-colors">
                  {story.logo}
                </div>
                <h3 className="text-2xl md:text-3xl font-medium tracking-tight leading-tight max-w-[360px]">
                  {story.title}
                </h3>
              </div>
              <div className="relative z-10 text-zinc-500 text-sm group-hover:text-zinc-300 transition-colors flex items-center gap-1">
                Read story <ChevronRight size={14} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- 3. METRICS SECTION --- */}
        <section className="mt-18 border-t border-white/5 pt-24">
          <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-24 mb-32">
            <div className="flex gap-16 md:gap-32">
              <div className="space-y-3">
                <h2 className="text-7xl md:text-8xl font-medium tracking-tighter text-white">2x</h2>
                <p className="text-[11px] font-bold text-zinc-500 uppercase tracking-[0.3em] max-w-[140px] leading-relaxed">
                  Increase in design speed
                </p>
              </div>
              <div className="space-y-3">
                <h2 className="text-7xl md:text-8xl font-medium tracking-tighter text-white">1.6x</h2>
                <p className="text-[11px] font-bold text-zinc-500 uppercase tracking-[0.3em] max-w-[140px] leading-relaxed">
                  Faster resolution for PCB errors
                </p>
              </div>
            </div>
            <div className="lg:border-l lg:border-white/10 lg:pl-16 pt-4">
              <p className="text-zinc-400 text-lg md:text-xl max-w-sm leading-relaxed font-light">
                Teams that switch to <span className="text-white font-medium italic">Linear-Clone</span> create more robust circuit designs and move through manufacturing cycles significantly faster.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <SuccessCard logo={<span className="italic">M</span>} title="Mercury eliminated hardware feedback loops with Linear-Clone" />
            <SuccessCard logo={<span>$</span>} title="Linear-Clone helps Cash App manage aggressive hardware roadmaps" />
            <SuccessCard logo={<span>P</span>} title="Pleo transitioned their internal lab support to Linear-Clone" />
            <SuccessCard logo={<div className="w-4 h-4 rounded-full border-2 border-white/50" />} title="How Linear-Clone helps engineering managers operate more efficiently" />
            <SuccessCard logo={<div className="w-4 h-1 bg-white" />} title="How Retool turns customer feedback into engineering work" />
            <SuccessCard logo={<div className="w-5 h-5 bg-indigo-500/20 rounded animate-pulse" />} title="From project updates to accountability, Sierra moves with Linear-Clone" />
          </div>
        </section>

        {/* --- 4. INTERACTIVE DIRECTORY --- */}
        <section className="mt-18">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-medium tracking-tighter">
              Powering 20,000+ ambitious <br /> engineering teams of all sizes
            </h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-1.5 rounded-full text-[13px] font-medium transition-all border ${
                  activeTab === tab 
                  ? "bg-white text-black border-white" 
                  : "bg-transparent text-zinc-500 border-white/5 hover:border-white/20 hover:text-zinc-300"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Filtered List */}
          <div className="border-t border-white/5">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                {filteredCompanies.map((company, i) => (
                  <div key={i} className="flex items-center justify-between py-5 border-b border-white/5 group hover:bg-white/[0.02] px-4 -mx-4 transition-colors cursor-pointer">
                    <div className="flex items-center gap-4 w-1/3">
                      <div className="w-8 h-8 rounded bg-zinc-900 border border-white/5 flex items-center justify-center text-zinc-500 group-hover:text-white transition-colors">
                        {company.icon}
                      </div>
                      <span className="text-[15px] font-medium text-zinc-300 group-hover:text-white">{company.name}</span>
                    </div>
                    <div className="hidden md:flex items-center gap-2 w-1/3 text-[12px] text-zinc-600 font-medium italic">
                       {company.tags.join(", ")}
                    </div>
                    <div className="flex justify-end w-1/3">
                       <span className="text-[13px] text-zinc-500 group-hover:text-white transition-colors flex items-center gap-1">
                         {company.linkText} <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                       </span>
                    </div>
                  </div>
                ))}
                
                {/* Placeholder Row */}
                <div className="flex items-center justify-between py-8 group">
                   <div className="flex items-center gap-4 text-zinc-600 italic">
                      <div className="w-8 h-8 border border-dashed border-white/20 rounded-full" />
                      <span className="text-[15px]">Your company</span>
                   </div>
                   <Link href="/product" className="text-[13px] text-indigo-400 font-medium hover:text-indigo-300 flex items-center gap-1">
                      Make the switch <ChevronRight size={14} />
                   </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* --- 5. FINAL CTA SECTION --- */}
        <section className="mt-8 pt-24 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8 pb-20">
           <h2 className="text-4xl md:text-5xl font-medium tracking-tighter text-white">
             Plan the present. <span className="text-zinc-500 italic">Build the future.</span>
           </h2>
           <div className="flex items-center gap-4">
             <Link href="/contact" className="px-6 py-2 rounded-lg bg-zinc-900 border border-white/10 text-zinc-400 text-sm font-medium hover:text-white transition">
               Contact sales
             </Link>
             <Link href="/contact" className="px-6 py-2 rounded-lg bg-white text-black text-sm font-bold hover:bg-zinc-200 transition shadow-xl">
               Get started
             </Link>
           </div>
        </section>
        <Footer />

      </div>
    </main>
  );
}

// --- SUB-COMPONENT FOR SUCCESS CARDS ---
function SuccessCard({ logo, title }: { logo: React.ReactNode, title: string }) {
  return (
    <div className="h-[380px] bg-zinc-900/10 border border-white/[0.05] rounded-2xl p-10 flex flex-col justify-between hover:bg-zinc-900/30 transition-all group cursor-pointer">
      <div className="space-y-10">
        <div className="w-10 h-10 bg-zinc-800 border border-white/5 rounded-lg flex items-center justify-center text-zinc-400 group-hover:text-white transition-colors font-bold">
          {logo}
        </div>
        <h3 className="text-xl font-medium text-zinc-200 group-hover:text-white leading-snug transition-colors">
          {title}
        </h3>
      </div>
      <span className="text-[13px] text-zinc-500 font-medium group-hover:text-zinc-300 transition-colors">
        Read story
      </span>
    </div>
  );
}