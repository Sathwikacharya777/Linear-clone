"use client";

import React, { useState } from 'react';
import { 
  Mail, 
  MessageSquare, 
  ChevronRight, 
  ArrowUpRight, 
  CheckCircle2,
  ArrowLeft
} from 'lucide-react';
import Link from 'next/link';
import Footer from "../components/Footer";

export default function ContactPage() {
  const [showForm, setShowForm] = useState(false);

  // --- FORM VIEW ---
  if (showForm) {
    return (
      <main className="min-h-screen bg-black text-white pt-32 pb-20 animate-in fade-in duration-500">
        <div className="max-w-[1100px] mx-auto px-6">
          
          {/* Back Button */}
          <button 
            onClick={() => setShowForm(false)}
            className="flex items-center gap-2 text-zinc-500 hover:text-white transition-colors mb-12 text-sm"
          >
            <ArrowLeft size={16} /> Back to help center
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            
            {/* Left Side: Info */}
            <div className="flex flex-col justify-start">
              <h1 className="text-5xl font-bold tracking-tight mb-8">Contact sales</h1>
              
              <ul className="space-y-4 mb-12">
                <li className="flex items-center gap-3 text-zinc-300">
                  <CheckCircle2 size={18} className="text-white" /> Request a demo
                </li>
                <li className="flex items-center gap-3 text-zinc-300">
                  <CheckCircle2 size={18} className="text-white" /> Learn which plan is right for your team
                </li>
                <li className="flex items-center gap-3 text-zinc-300">
                  <CheckCircle2 size={18} className="text-white" /> Get onboarding help
                </li>
              </ul>

              <div className="mt-auto pt-10 border-t border-white/5">
                <p className="text-zinc-500 text-sm mb-4">Technical issues or product questions?</p>
                <button 
                  onClick={() => setShowForm(false)}
                  className="text-zinc-400 hover:text-white text-sm flex items-center gap-1 transition-colors"
                >
                  Contact support <ChevronRight size={14} />
                </button>
              </div>
            </div>

            {/* Right Side: Form Card */}
            <div className="bg-[#0c0c0c] border border-white/5 rounded-2xl p-10">
              <h2 className="text-lg font-semibold mb-8">Tell us how we can help</h2>
              
              <form className="space-y-6">
                <div>
                  <label className="block text-zinc-500 text-sm mb-2">Full name</label>
                  <input 
                    type="text" 
                    placeholder="Kevin Flynn"
                    className="w-full bg-[#161617] border border-white/5 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-white/20 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-zinc-500 text-sm mb-2">Work email</label>
                  <input 
                    type="email" 
                    placeholder="kevin@encom.com"
                    className="w-full bg-[#161617] border border-white/5 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-white/20 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-zinc-500 text-sm mb-2">Company size</label>
                  <select className="w-full bg-[#161617] border border-white/5 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-white/20 transition-colors appearance-none">
                    <option>1-20</option>
                    <option>21-50</option>
                    <option>51-200</option>
                    <option>201+</option>
                  </select>
                </div>

                <div>
                  <label className="block text-zinc-500 text-sm mb-2">Tell us about your requirements</label>
                  <textarea 
                    rows={4}
                    placeholder="I'm interested in Linear-Clone for my team..."
                    className="w-full bg-[#161617] border border-white/5 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-white/20 transition-colors resize-none"
                  />
                </div>

                <div className="flex items-center justify-between pt-4">
                  <p className="text-zinc-600 text-[13px]">
                    You can also email us at <span className="text-zinc-400">sales@Linear-Clone.com</span>
                  </p>
                  <button type="submit" className="bg-[#2a2a2d] hover:bg-[#323235] text-white px-6 py-2.5 rounded-lg text-sm font-medium transition-colors">
                    Send message
                  </button>
                </div>
              </form>
            </div>

          </div>
        </div>
      </main>
    );
  }

  // --- HELP HUB VIEW (Default) ---
  return (
    <main className="min-h-screen bg-black text-white pt-32 pb-20">
      <div className="max-w-[900px] mx-auto px-6">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">How can we help?</h1>
          <p className="text-zinc-400 text-lg max-w-[500px] mx-auto leading-relaxed">
            Get in touch with our sales and support teams for demos, onboarding support, or product questions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
          {/* Sales Card */}
          <div className="bg-[#0c0c0c] border border-white/5 rounded-2xl p-8 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-4">
              <Mail size={20} className="text-zinc-400" />
              <h3 className="font-semibold text-lg">Sales</h3>
            </div>
            <p className="text-zinc-500 mb-8 leading-relaxed">Speak to our sales team about plans, pricing, or a demo.</p>
            <button 
              onClick={() => setShowForm(true)}
              className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-lg text-sm font-medium hover:bg-white/10 transition-all"
            >
              Talk to sales <ChevronRight size={14} />
            </button>
          </div>

          {/* Support Card */}
          <div className="bg-[#0c0c0c] border border-white/5 rounded-2xl p-8 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-4">
              <MessageSquare size={20} className="text-zinc-400" />
              <h3 className="font-semibold text-lg">Help & support</h3>
            </div>
            <p className="text-zinc-500 mb-8 leading-relaxed">Ask product questions, report problems, or leave feedback.</p>
            <button 
              onClick={() => setShowForm(true)}
              className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-lg text-sm font-medium hover:bg-white/10 transition-all"
            >
              Contact support <ChevronRight size={14} />
            </button>
          </div>
        </div>

        {/* Operational Status Footer */}
        <div className="flex justify-center border-t border-white/5 pt-12">
          <div className="flex items-center gap-2 px-4 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full">
            <CheckCircle2 size={14} className="text-blue-500" />
            <span className="text-[10px] font-bold text-blue-500 tracking-wider uppercase">All systems operational</span>
          </div>
        </div>
      </div>
        <Footer />
    </main>
  );
}