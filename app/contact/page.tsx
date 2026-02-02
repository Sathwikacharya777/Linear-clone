"use client";

import React, { useState } from 'react';
import { 
  Mail, MessageSquare, ChevronRight, CheckCircle2, ArrowLeft, Loader2 
} from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from "framer-motion";
import { useFormStatus } from "react-dom"; // Next.js/React 19 hook
import { submitContactForm } from "./actions";
import Footer from "../components/Footer";

export default function ContactPage() {
  const [showForm, setShowForm] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Helper component for the Loading Button
  function SubmitButton() {
    const { pending } = useFormStatus();
    return (
      <button 
        type="submit" 
        disabled={pending}
        className="bg-white text-black px-6 py-2.5 rounded-lg text-sm font-bold hover:bg-zinc-200 transition-all flex items-center gap-2 disabled:opacity-50"
      >
        {pending ? <Loader2 size={16} className="animate-spin" /> : "Send message"}
      </button>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white pt-32 overflow-x-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        
        <AnimatePresence mode="wait">
          {!showForm ? (
            /* --- VIEW 1: HELP HUB --- */
            <motion.div 
              key="hub"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-[900px] mx-auto"
            >
              <div className="text-center mb-20">
                <h1 className="text-5xl md:text-7xl font-medium tracking-tighter mb-6 bg-gradient-to-b from-white to-zinc-500 bg-clip-text text-transparent">
                  How can we help?
                </h1>
                <p className="text-zinc-400 text-lg md:text-xl font-light max-w-[500px] mx-auto leading-relaxed">
                  Get in touch with our sales and support teams for demos, onboarding support, or product questions.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
                <HubCard 
                  icon={<Mail />} 
                  title="Sales" 
                  desc="Speak to our sales team about plans, pricing, or a demo." 
                  onClick={() => setShowForm(true)}
                  btnText="Talk to sales"
                />
                <HubCard 
                  icon={<MessageSquare />} 
                  title="Help & support" 
                  desc="Ask product questions, report problems, or leave feedback." 
                  onClick={() => setShowForm(true)}
                  btnText="Contact support"
                />
              </div>

              <div className="flex justify-center border-t border-white/5 pt-12 mb-20">
                <div className="flex items-center gap-2 px-4 py-1.5 bg-indigo-500/10 border border-indigo-500/20 rounded-full">
                  <CheckCircle2 size={14} className="text-indigo-500 shadow-[0_0_10px_#5e6ad2]" />
                  <span className="text-[10px] font-bold text-indigo-400 tracking-widest uppercase">All systems operational</span>
                </div>
              </div>
            </motion.div>
          ) : (
            /* --- VIEW 2: CONTACT FORM --- */
            <motion.div 
              key="form"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
            >
              <button 
                onClick={() => setShowForm(false)}
                className="flex items-center gap-2 text-zinc-500 hover:text-white transition-colors mb-12 text-sm"
              >
                <ArrowLeft size={16} /> Back to help center
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start pb-20">
                <div className="space-y-8">
                  <h1 className="text-5xl md:text-7xl font-medium tracking-tighter leading-tight">Contact sales</h1>
                  <ul className="space-y-6">
                    <FeatureItem text="Request a personalized demo" />
                    <FeatureItem text="Learn which plan is right for your team" />
                    <FeatureItem text="Get onboarding help for your organization" />
                  </ul>
                  <div className="pt-10 border-t border-white/5">
                    <p className="text-zinc-500 text-sm mb-4">Technical issues or product questions?</p>
                    <button onClick={() => setShowForm(false)} className="text-white text-sm font-medium flex items-center gap-1 hover:text-zinc-300">
                      Contact support <ChevronRight size={14} />
                    </button>
                  </div>
                </div>

                {/* THE FORM CARD */}
                <div className="bg-[#0c0c0c] border border-white/[0.08] rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
                  {isSubmitted ? (
                    <div className="py-20 text-center space-y-4">
                       <CheckCircle2 size={48} className="text-green-500 mx-auto" />
                       <h2 className="text-2xl font-bold">Message sent!</h2>
                       <p className="text-zinc-400">We'll get back to you within 24 hours.</p>
                       <button onClick={() => setIsSubmitted(false)} className="text-indigo-400 text-sm underline">Send another</button>
                    </div>
                  ) : (
                    <form 
                      action={async (fd) => {
                        await submitContactForm(fd);
                        setIsSubmitted(true);
                      }} 
                      className="space-y-6"
                    >
                      <FormInput label="Full name" name="fullname" placeholder="Kevin Flynn" required />
                      <FormInput label="Work email" name="email" type="email" placeholder="kevin@encom.com" required />
                      
                      <div className="space-y-2">
                        <label className="text-zinc-500 text-[13px] font-medium uppercase tracking-widest">Company size</label>
                        <select className="w-full bg-zinc-900/50 border border-white/5 rounded-xl px-4 py-3 text-sm focus:border-indigo-500/50 outline-none transition-all appearance-none">
                          <option>1-20</option>
                          <option>21-50</option>
                          <option>51-200</option>
                          <option>201+</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label className="text-zinc-500 text-[13px] font-medium uppercase tracking-widest">Your requirements</label>
                        <textarea 
                          name="message"
                          rows={4}
                          className="w-full bg-zinc-900/50 border border-white/5 rounded-xl px-4 py-3 text-sm focus:border-indigo-500/50 outline-none transition-all resize-none"
                          placeholder="Tell us how we can help..."
                          required
                        />
                      </div>

                      <div className="flex items-center justify-between pt-4">
                        <p className="text-[11px] text-zinc-600 uppercase tracking-widest">
                          Response time: <span className="text-zinc-400 font-bold">&lt; 24h</span>
                        </p>
                        <SubmitButton />
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <Footer />
      </div>
    </main>
  );
}

// --- SUB-COMPONENTS ---

function HubCard({ icon, title, desc, onClick, btnText }: any) {
  return (
    <div className="bg-[#0c0c0c] border border-white/[0.08] rounded-3xl p-8 flex flex-col items-start group hover:bg-[#111111] transition-all">
      <div className="w-10 h-10 bg-zinc-800 border border-white/5 rounded-xl flex items-center justify-center text-zinc-400 mb-6 group-hover:text-white transition-colors">
        {icon}
      </div>
      <h3 className="text-xl font-medium mb-3 text-white">{title}</h3>
      <p className="text-zinc-500 mb-10 leading-relaxed text-[15px] font-light">{desc}</p>
      <button onClick={onClick} className="flex items-center gap-2 bg-white/5 border border-white/10 px-5 py-2 rounded-lg text-sm font-medium hover:bg-white hover:text-black transition-all">
        {btnText} <ChevronRight size={14} />
      </button>
    </div>
  );
}

function FeatureItem({ text }: { text: string }) {
  return (
    <li className="flex items-center gap-3 text-zinc-400 text-lg font-light">
      <CheckCircle2 size={20} className="text-indigo-500" /> {text}
    </li>
  );
}

function FormInput({ label, ...props }: any) {
  return (
    <div className="space-y-2">
      <label className="text-zinc-500 text-[13px] font-medium uppercase tracking-widest">{label}</label>
      <input 
        {...props}
        className="w-full bg-zinc-900/50 border border-white/5 rounded-xl px-4 py-3 text-sm focus:border-indigo-500/50 outline-none transition-all"
      />
    </div>
  );
}