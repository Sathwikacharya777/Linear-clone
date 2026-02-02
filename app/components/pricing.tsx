"use client";
import { Check, ChevronRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Footer from "../components/Footer";

const tiers = [
  {
    name: "Free",
    price: "$0",
    description: "Free for everyone",
    features: ["Unlimited members", "2 teams", "250 issues", "Slack and GitHub", "AI agents"],
    buttonText: "Get started",
    highlight: false,
  },
  {
    name: "Basic",
    price: "$10",
    priceSub: "per user/month",
    description: "Billed yearly",
    features: ["All Free features +", "5 teams", "Unlimited issues", "Unlimited file uploads", "Admin roles"],
    buttonText: "Get started",
    highlight: false,
  },
  {
    name: "Business",
    price: "$16",
    priceSub: "per user/month",
    description: "Billed yearly",
    features: ["All Basic features +", "Unlimited teams", "Private teams and guests", "Triage Intelligence", "Linear Insights", "Linear Asks", "Issue SLAs", "Zendesk and Intercom integrations"],
    buttonText: "Get started",
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Contact us",
    description: "Annual billing only",
    features: ["All Business features +", "Sub-initiatives", "Advanced Linear Asks", "Dashboards", "SAML and SCIM", "Advanced security", "Migration and onboarding support"],
    buttonText: "Contact sales",
    highlight: false,
  },
];

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-32 overflow-x-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* --- GRID LAYOUT --- */}
        <div className="mt-1 pt-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1 items-stretch mb-20">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`relative flex flex-col p-8 rounded-[24px] transition-all duration-500 ${
                tier.highlight 
                ? "bg-[#111111] border border-white/20 shadow-[0_0_40px_rgba(255,255,255,0.05)] scale-105 z-10 py-12" 
                : "bg-transparent border border-white/5 hover:border-white/10"
              }`}
            >
              {/* Plan Name & Price */}
              <div className="mb-8">
                <h3 className="text-2xl font-medium mb-4 tracking-tight">{tier.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-medium tracking-tighter">{tier.price}</span>
                  {tier.priceSub && <span className="text-zinc-500 text-sm">{tier.priceSub}</span>}
                </div>
              </div>

              {/* Toggle Placeholder (Billed yearly) */}
              <div className="flex items-center gap-3 mb-10">
                <div className={`w-8 h-4 rounded-full relative ${tier.highlight ? 'bg-indigo-500' : 'bg-zinc-700'}`}>
                   <div className="absolute right-1 top-1 w-2 h-2 bg-white rounded-full" />
                </div>
                <span className="text-[12px] text-zinc-500 font-medium">{tier.description}</span>
              </div>

              {/* Feature List */}
              <ul className="space-y-4 mb-12 flex-1">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-[13px] text-zinc-300 group">
                    <Check size={14} className="text-indigo-500 mt-0.5 shrink-0" />
                    <span className="border-b border-white/0 group-hover:border-white/20 transition-all cursor-help border-dotted">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Button */}
              <div className="mt-auto">
                <Link 
                  href="/login"
                  className={`w-full py-2.5 rounded-lg text-[13px] font-bold transition-all flex items-center justify-center ${
                    tier.highlight 
                    ? "bg-white text-black hover:bg-zinc-200" 
                    : "bg-white/5 text-white border border-white/10 hover:bg-white/10"
                  }`}
                >
                  {tier.buttonText}
                </Link>
                {tier.highlight && (
                  <p className="text-center text-[11px] text-zinc-500 mt-4">
                    or <Link href="/login" className="underline hover:text-white">contact sales</Link>
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
      <Footer />
    </main>
  );
}