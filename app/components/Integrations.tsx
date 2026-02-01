"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronRight, ChevronLeft, Smartphone, Terminal, Layers, Share2, Box } from "lucide-react";

const integrationData = [
  {
    title: "Linear-Clone Mobile",
    desc: "Monitor circuit health and inventory from anywhere.",
    icon: <Smartphone size={40} className="text-zinc-500" />,
    color: "from-blue-500/20",
  },
  {
    title: "CAD Bridge",
    desc: "Direct sync with KiCad, Altium, and Allegro.",
    icon: <Layers size={40} className="text-zinc-500" />,
    color: "from-purple-500/20",
  },
  {
    title: "Automated Audits",
    desc: "100+ ways to enhance your hardware lifecycle.",
    icon: <Share2 size={40} className="text-zinc-500" />,
    color: "from-indigo-500/20",
  },
  {
    title: "Simulation Sync",
    desc: "Bridge the gap between design and simulation.",
    icon: <Box size={40} className="text-zinc-500" />,
    color: "from-emerald-500/20",
  },
  {
    title: "Linear-Clone API",
    desc: "Build custom add-ons with our powerful API.",
    icon: <Terminal size={40} className="text-zinc-500" />,
    color: "from-zinc-500/20",
  },
];

export default function Integrations() {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Function to handle the manual scroll
  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === "left" 
        ? scrollLeft - clientWidth / 1.5 
        : scrollLeft + clientWidth / 1.5;
      
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <section className="w-full py-32 bg-black border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* HEADER SECTION */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-20">
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-indigo-400 text-[13px] font-medium uppercase tracking-widest">
               <div className="w-2 h-2 rounded-full bg-indigo-500" />
               Workflows and integrations
            </div>
            <h2 className="text-5xl md:text-7xl font-medium tracking-tighter text-white leading-[1.05]">
              Collaborate across <br /> tools and teams.
            </h2>
          </div>
          <p className="text-zinc-400 text-lg md:text-xl font-light max-w-sm leading-relaxed lg:pt-16">
            Expand the capabilities of the Linear-Clone system with a wide variety of integrations that keep everyone aligned.
          </p>
        </div>

        {/* HORIZONTAL CARDS SECTION (Scrollbar hidden) */}
        <div 
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto pb-12 no-scrollbar snap-x scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {integrationData.map((item, i) => (
            <div
              key={i}
              className="min-w-[300px] md:min-w-[380px] h-[480px] bg-zinc-900/30 border border-white/[0.08] rounded-[32px] p-8 flex flex-col justify-between group snap-center transition-colors hover:bg-zinc-900/50"
            >
              {/* Illustration Area */}
              <div className={`flex-1 rounded-2xl bg-gradient-to-b ${item.color} to-transparent flex items-center justify-center relative overflow-hidden mb-8`}>
                 <div className="z-10 group-hover:scale-110 transition-transform duration-500">
                    {item.icon}
                 </div>
              </div>

              {/* Info */}
              <div className="flex items-end justify-between">
                <div className="space-y-2">
                  <p className="text-xs text-zinc-500 font-bold uppercase tracking-widest">{item.title}</p>
                  <h3 className="text-lg text-white font-medium leading-tight max-w-[200px]">
                    {item.desc}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM NAVIGATION ARROWS */}
        <div className="flex items-center justify-end gap-3 mt-4">
          <button 
            onClick={() => scroll("left")}
            className="w-12 h-12 rounded-full border border-white/10 bg-white/[0.02] flex items-center justify-center text-zinc-400 hover:text-white hover:border-white/20 transition-all active:scale-90"
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            onClick={() => scroll("right")}
            className="w-12 h-12 rounded-full border border-white/10 bg-white/[0.02] flex items-center justify-center text-zinc-400 hover:text-white hover:border-white/20 transition-all active:scale-90"
          >
            <ChevronRight size={20} />
          </button>
        </div>

      </div>
    </section>
  );
}