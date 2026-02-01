"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, X, Cpu, Zap, Target, ChevronRight } from "lucide-react";

// --- DATA STRUCTURE ---
const featureData = [
  {
    id: 1,
    title: "Purpose-built for product development",
    shortDesc: "Focus on craft and quality.",
    icon: <Cpu className="w-12 h-12 text-zinc-500" />,
    longDesc: [
      "Linear-Clone was developed with a specific purpose: to empower engineering teams to do their best work. Every aspect is intentionally designed to help teams focus on what they do best: Planning, building, and shipping great products.",
      "Because of its fit-to-purpose design, Linear-Clone is incredibly easy to use, but grows more powerful as you scale. It's principled where it needs to be, but provides enough flexibility to adapt to your team's unique way of working.",
      "We believe that this approach creates a better way to build products. And more than 20,000 product teams around the globe agree."
    ],
    quote: "“We'd tried many tools before Linear-Clone but none of them felt like they were made for the way we work. Linear-Clone was a breath of fresh air — speedy, snappy, and a pleasure to use.”",
    quoteLogo: "▲ Vercel",
    stats: [
      { label: "Paying customers", value: "20k" },
      { label: "Active users", value: "500k+" },
      { label: "of YC companies build with Linear-Clone", value: "45%" },
      { label: "of the top AI startups use Linear-Clone", value: "66%" },
    ]
  },
  {
    id: 2,
    title: "Designed to move fast",
    shortDesc: "Engineered for pure speed.",
    icon: <Zap className="w-12 h-12 text-zinc-500" />,
    longDesc: [
      "In engineering, every millisecond counts. We've optimized every layer of the Linear-Clone stack to ensure that your workflow remains uninterrupted.",
      "Our global infrastructure ensures that data is synchronized instantly across teams, whether they are in the lab or in the field."
    ],
    quote: "“The responsiveness of the Linear-Clone interface is unlike anything we've used. It actually keeps up with our brainstorming.”",
    quoteLogo: "Scale AI",
    stats: [
      { label: "Average Interaction", value: "50ms" },
      { label: "Uptime SLA", value: "99.9%" },
      { label: "Faster Deployment", value: "4x" },
      { label: "Sync Latency", value: "<10ms" },
    ]
  },
  {
    id: 3,
    title: "Crafted to perfection",
    shortDesc: "Precision in every pixel.",
    icon: <Target className="w-12 h-12 text-zinc-500" />,
    longDesc: [
      "We believe that the tools you use should be as well-engineered as the circuits you design. Precision isn't just a goal; it's our foundation.",
      "From keyboard shortcuts to high-density data views, Linear-Clone is built for power users who demand the best."
    ],
    quote: "“Linear-Clone feels like a high-end instrument. It's precise, reliable, and beautiful to look at.”",
    quoteLogo: "COINBASE",
    stats: [
      { label: "Design Consistency", value: "100%" },
      { label: "Keyboard Shortcuts", value: "80+" },
      { label: "Component Library", value: "2k+" },
      { label: "Rating", value: "4.9/5" },
    ]
  }
];

// --- 3D ILLUSTRATION SUB-COMPONENT ---
function Illustration() {
  return (
    <div className="relative w-full h-64 flex items-center justify-center mb-12">
      {/* Background Cards */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }} animate={{ opacity: 0.3, x: -80 }}
        className="absolute w-48 h-64 bg-zinc-800 border border-white/10 rounded-2xl rotate-[-12deg] shadow-2xl" 
      />
      <motion.div 
        initial={{ opacity: 0, x: -20 }} animate={{ opacity: 0.6, x: 0 }}
        className="absolute w-48 h-64 bg-zinc-800 border border-white/10 rounded-2xl rotate-[-4deg] shadow-2xl" 
      />
      {/* Front Glowing Card */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 80 }}
        className="absolute w-56 h-72 bg-zinc-900 border border-white/20 rounded-2xl rotate-[6deg] shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex items-center justify-center overflow-hidden"
      >
        <div className="w-32 h-32 rounded-full bg-zinc-800 border border-white/10 flex items-center justify-center relative">
          <div className="absolute inset-0 bg-indigo-500/10 blur-xl rounded-full" />
          <div className="w-16 h-1 bg-white/20 rotate-45" />
          <div className="w-16 h-1 bg-white/20 -rotate-45 absolute" />
        </div>
      </motion.div>
    </div>
  );
}

// --- MAIN FEATURES COMPONENT ---
export default function Features() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (expandedId) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [expandedId]);

  return (
    <section className="w-full py-32 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-24 gap-12">
          <h2 className="text-5xl md:text-7xl font-medium tracking-tighter text-white max-w-lg leading-[1.05]">
            Made for modern product teams
          </h2>
          <div className="max-w-sm pt-4">
            <p className="text-zinc-400 text-[15px] leading-relaxed mb-6 font-light">
              Linear-Clone is shaped by the practices and principles that distinguish world-class engineering teams: relentless focus, fast execution, and a commitment to quality.
            </p>
            <button className="text-white text-sm font-medium hover:text-zinc-300 transition flex items-center gap-1 group">
              Make the switch 
              <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* FEATURES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {featureData.map((feature) => (
            <motion.div
              key={feature.id}
              layoutId={`card-${feature.id}`}
              onClick={() => setExpandedId(feature.id)}
              className="relative h-[500px] rounded-[32px] bg-zinc-900/30 border border-white/[0.08] p-10 flex flex-col justify-between cursor-pointer hover:bg-zinc-900/60 transition-colors group overflow-hidden"
            >
              {/* Subtle Icon Background */}
              <div className="flex items-center justify-center pt-12">
                <motion.div layoutId={`icon-${feature.id}`}>
                  {feature.icon}
                </motion.div>
              </div>

              {/* Title & Button */}
              <div className="flex items-end justify-between">
                <h3 className="text-2xl font-medium text-white max-w-[180px] leading-tight tracking-tight">
                  {feature.title}
                </h3>
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-zinc-500 group-hover:bg-white group-hover:text-black transition-all">
                  <Plus size={20} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* MODAL / EXPANDED VIEW */}
        <AnimatePresence>
          {expandedId && (
            <>
              {/* Backdrop */}
              <motion.div 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                onClick={() => setExpandedId(null)}
                className="fixed inset-0 bg-black/80 backdrop-blur-md z-[60] cursor-zoom-out"
              />
              
              {/* Expanded Card Content */}
              <div className="fixed inset-0 flex items-center justify-center z-[70] p-4 md:p-6 pointer-events-none">
                <motion.div 
                  layoutId={`card-${expandedId}`}
                  className="w-full max-w-2xl max-h-[90vh] bg-[#0c0c0c] border border-white/10 rounded-[40px] overflow-y-auto pointer-events-auto relative shadow-2xl custom-scrollbar"
                >
                  {/* Close Button */}
                  <button 
                    onClick={() => setExpandedId(null)}
                    className="absolute top-8 right-8 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-500 hover:text-white transition-all z-30"
                  >
                    <X size={20} />
                  </button>

                  <div className="p-8 md:p-20 flex flex-col items-center text-center">
                    {/* 1. Visual Illustration */}
                    <Illustration />

                    {/* 2. Headline */}
                    <h3 className="text-4xl md:text-5xl font-medium text-white mb-8 tracking-tighter max-w-md leading-tight">
                      {featureData.find(f => f.id === expandedId)?.title}
                    </h3>

                    {/* 3. Detailed Paragraphs */}
                    <div className="space-y-6 mb-16 text-center">
                      {featureData.find(f => f.id === expandedId)?.longDesc.map((para, i) => (
                        <p key={i} className="text-zinc-400 text-[16px] font-light leading-relaxed max-w-lg mx-auto">
                          {para}
                        </p>
                      ))}
                    </div>

                    {/* 4. Testimonial Section */}
                    <div className="w-full pt-16 border-t border-white/5 mb-16">
                      <p className="text-xl text-zinc-200 font-medium italic mb-8 max-w-md mx-auto leading-relaxed">
                        {featureData.find(f => f.id === expandedId)?.quote}
                      </p>
                      <div className="text-white font-bold tracking-tighter text-xl uppercase italic">
                        {featureData.find(f => f.id === expandedId)?.quoteLogo}
                      </div>
                    </div>

                    {/* 5. Stats Grid (2x2) */}
                    <div className="w-full pt-16 border-t border-white/5 grid grid-cols-2 gap-y-16 gap-x-8">
                      {featureData.find(f => f.id === expandedId)?.stats.map((stat, i) => (
                        <div key={i} className="flex flex-col items-center">
                          <span className="text-5xl md:text-7xl font-medium text-white mb-3 tracking-tighter">
                            {stat.value}
                          </span>
                          <span className="text-[11px] uppercase tracking-[0.2em] text-zinc-500 font-bold">
                            {stat.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}