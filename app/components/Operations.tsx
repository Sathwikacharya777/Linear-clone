"use client";
import { motion } from "framer-motion";
import { 
  Sparkles, Check, Paperclip, Search, Lightbulb, 
  Terminal, Cpu, ShieldAlert, ChevronRight 
} from "lucide-react";

export default function Operations() {
  return (
    <section className="w-full bg-black border-t border-white/[0.05] overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-white/[0.05]">
        
        {/* LEFT BLOCK: Circuit Intelligence */}
        <div className="p-8 md:p-16 lg:p-24 space-y-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-medium text-white tracking-tight">Self-driving circuit operations</h3>
            <p className="text-zinc-400 text-[15px] leading-relaxed max-w-sm font-light">
              Streamline your engineering workflows with AI assistance for routine, manual hardware audits.
            </p>
          </div>

          {/* Triage UI Mockup */}
          <div className="relative group">
            {/* Background Card */}
            <div className="w-full max-w-md bg-zinc-900/30 border border-white/[0.05] rounded-xl p-6 space-y-6 opacity-40 ">
              <div className="flex items-center gap-2 text-zinc-500 text-xs font-bold uppercase tracking-widest">
                <Sparkles size={14} /> Circuit Intelligence
              </div>
              <div className="space-y-3">
                <div className="h-4 w-32 bg-white/5 rounded" />
                <div className="h-4 w-48 bg-white/5 rounded" />
              </div>
            </div>

            {/* Floating Suggestion Card */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              className="absolute top-20 left-16 md:left-28 w-full max-w-[320px] bg-[#0c0c0c] border border-white/[0.1] rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] p-5 space-y-5 z-20"
            >
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-sm bg-blue-500/20 flex items-center justify-center">
                  <Cpu size={10} className="text-blue-400" />
                </div>
                <span className="text-[13px] font-medium text-white">PCB Thermal Optimization</span>
              </div>
              
              <div className="flex items-center gap-4 text-[11px] font-bold text-zinc-500 uppercase tracking-wider">
                <div className="flex items-center gap-1.5 text-yellow-500/80">
                  <div className="w-3 h-3 border border-yellow-500/50 rotate-45 flex items-center justify-center">
                    <div className="w-1 h-1 bg-yellow-500 rounded-full" />
                  </div>
                  In Progress
                </div>
                <div className="flex items-center gap-1.5">
                   <ShieldAlert size={12} /> Medium
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-[11px] font-bold text-zinc-400 uppercase tracking-widest">Why this was suggested</p>
                <p className="text-[12px] text-zinc-500 leading-relaxed">
                  The current design shows a high thermal density in Segment B that would fit within the scope of this refactor.
                </p>
              </div>

              <button className="w-full py-2 bg-zinc-800 hover:bg-zinc-700 border border-white/5 rounded-lg text-[13px] font-medium text-white flex items-center justify-center gap-2 transition-all">
                <Check size={14} className="text-zinc-400" /> Accept suggestion
              </button>
            </motion.div>
          </div>
        </div>

        {/* RIGHT BLOCK: Linear-Clone MCP */}
        <div className="p-8 md:p-16 lg:p-24 space-y-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-medium text-white tracking-tight">Linear-Clone MCP</h3>
            <p className="text-zinc-400 text-[15px] leading-relaxed max-w-sm font-light">
              Connect Linear-Clone to your engineering tools including Cursor, KiCad, Altium, and more.
            </p>
          </div>

          {/* Command Prompt UI Mockup */}
          <div className="relative h-[300px] w-full bg-zinc-900/20 border border-white/[0.05] rounded-2xl overflow-hidden p-6">
             {/* Dimmed Code Background */}
             <pre className="text-[12px] text-zinc-700 font-mono leading-loose select-none">
               <code>{`// mcp.Linear-Clone.app/sse

"mcpServers": {
  "Linear-Clone": {
    "command": "npx",
    "args": ["-y", "@Linear-Clone/mcp"]
  }
}`}</code>
             </pre>

             {/* Ask Anything Input Bar */}
             <motion.div 
               initial={{ y: 40, opacity: 0 }}
               whileInView={{ y: 0, opacity: 1 }}
               className="absolute bottom-10 left-6 right-6 bg-[#0c0c0c] border border-white/[0.1] rounded-xl shadow-2xl p-4 space-y-4"
             >
               <div className="flex items-center gap-3 text-zinc-400">
                  {/* Cursor with fixed animation */}
                  <div className="w-[1.5px] h-4 bg-indigo-500 shadow-[0_0_8px_#5e6ad2] animate-pulse" />
                  <span className="text-sm font-light">Ask anything</span>
               </div>
               
               <div className="flex items-center gap-2">
                 <CommandButton icon={<Paperclip size={14} />} label="Attach" />
                 <CommandButton icon={<Search size={14} />} label="Search" />
                 <CommandButton icon={<Lightbulb size={14} />} label="Reason" />
               </div>
             </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}

function CommandButton({ icon, label }: { icon: any, label: string }) {
  return (
    <button className="flex items-center gap-1.5 px-2.5 py-1 bg-zinc-900 border border-white/5 rounded-md text-[11px] text-zinc-400 hover:text-white hover:border-white/10 transition-all">
      {icon} {label}
    </button>
  );
}