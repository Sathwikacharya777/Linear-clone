import { ChevronRight } from 'lucide-react';
import Footer from "../components/Footer";

const team = [
  { name: 'Karri Saarinen', role: 'Co-founder, CEO', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop' },
  { name: 'Jori Lallo', role: 'Co-founder, CPO', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop' },
  { name: 'Tuomas Artman', role: 'Co-founder, CTO', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop' },
  { name: 'Tom Moor', role: 'Head of Engineering', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop' },
  { name: 'Nan Yu', role: 'Head of Product', image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=400&fit=crop' },
  { name: 'Cristina Cordova', role: 'COO', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop' },
  { name: 'Casey Bertenthal', role: 'Head of Sales', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop' },
  { name: 'Jamie Finnigan', role: 'Head of Security', image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=400&fit=crop' },
];

const backers = [
  { name: 'Dylan Field', role: 'CEO, Figma' },
  { name: 'Patrick Collison', role: 'CEO, Stripe' },
  { name: 'Stewart Butterfield', role: 'Former CEO, Slack' },
  { name: 'Guillermo Rauch', role: 'CEO, Vercel' },
  { name: 'Dick Costolo', role: 'Former CEO, Twitter' },
  { name: 'Josh Miller', role: 'CEO, Browser Company' },
  { name: 'Andrew Mason', role: 'CEO, Descript' },
  { name: 'Immad Akhund', role: 'CEO, Mercury' },
  { name: 'Claire Hughes Johnson', role: 'Former COO, Stripe' },
  { name: 'Jorn van Dijk', role: 'CEO, Framer' },
  { name: 'Christina Cacioppo', role: 'CEO, Vanta' },
  { name: 'Job van der Voort', role: 'CEO, Remote' },
  { name: 'Ilkka Paananen', role: 'CEO, Supercell' },
  { name: 'Anthony Guo', role: 'CTO, Retool' },
  { name: 'Gustaf Alströmer', role: 'Partner, Y Combinator' },
  { name: 'Akash Garg', role: 'Former CTO, Afterpay' },
];

const newsItems = [
  { title: 'Design is more than code', author: 'Karri Saarinen', date: 'Dec 20, 2025', image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80' },
  { title: 'How our Customer Experience team works in Linear', author: 'Alexandra Lapinsky Wilson', date: 'Nov 06, 2025', image: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=800&q=80' },
  { title: 'Continuous planning in Linear', author: 'Nan Yu', date: 'Oct 30, 2025', image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80' },
  { title: 'Designing remote work at Linear', author: 'Karri Saarinen', date: 'Oct 29, 2025', image: 'https://images.unsplash.com/photo-1635776062127-d379bfcba9f8?w=800&q=80' },
  { title: 'Self-driving SaaS: When software runs itself', author: 'Karri Saarinen', date: 'Oct 22, 2025', image: 'https://images.unsplash.com/photo-1614850523296-d8c1af93d400?w=800&q=80' },
  { title: 'A Linear spin on Liquid Glass', author: 'Robb Böhnke', date: 'Oct 21, 2025', image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=800&q=80' },
];

export default function CompanyPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-32 overflow-hidden">
      {/* 1. Hero Section */}
      <section className="max-w-[1200px] mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-20 bg-gradient-to-b from-white to-white/50 bg-clip-text text-transparent">
          Linear-Clone is bringing <br /> magic back to software
        </h1>

        <div className="relative mt-16 flex justify-center">
          {/* Background Card Decorative */}
          <div className="absolute -top-12 transform -rotate-6 w-[80%] max-w-[800px] aspect-[16/10] bg-zinc-900 border border-white/10 rounded-xl shadow-2xl opacity-40"></div>
          
          {/* Foreground Insights Card */}
          <div className="relative z-10 w-full max-w-[900px] aspect-[16/10] bg-[#0c0c0c] border border-white/10 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,1)] p-8 text-left overflow-hidden">
            <div className="flex justify-between items-center mb-10">
              <span className="text-sm font-medium text-zinc-400 tracking-wide">Insights</span>
              <div className="flex gap-4 opacity-40">
                <div className="w-4 h-4 rounded-full border border-white"></div>
                <div className="w-4 h-4 rounded-full border border-white"></div>
              </div>
            </div>

            <div className="mb-8">
              <span className="text-4xl font-bold">731</span>
              <span className="text-zinc-500 ml-3 text-sm tracking-wide">issues</span>
            </div>

            <div className="w-full h-full border-t border-dashed border-white/10 pt-8">
               <div className="flex justify-between items-end h-40 gap-2 opacity-30">
                  {[...Array(12)].map((_, i) => (
                    <div 
                        key={i} 
                        style={{ height: `${Math.random() * 100}%` }} 
                        className="w-full bg-blue-500/20 rounded-t-sm border-t border-blue-400"
                    />
                  ))}
               </div>
               <div className="flex justify-between mt-4 text-[10px] text-zinc-600 font-mono">
                  <span>JAN 2024</span>
                  <span>DEC 2024</span>
               </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none"></div>
          </div>
        </div>
      </section>

      {/* 2. Philosophy Text Section */}
      <section className="mt-4 pt-14 max-w-[1200px] mx-auto px-6 pt-64 pb-24">
        <div className="max-w-[600px]">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
            We care deeply about the quality of our work
          </h2>
          <p className="text-zinc-400 text-lg leading-relaxed mb-10">
            Linear-Clone has always been a fully remote company. Today, our small 
            but mighty team is distributed across North America and Europe. 
            What unites us is relentless focus, fast execution, and our passion 
            for software craftsmanship. We are all makers at heart and care 
            deeply about the quality of our work, down to the smallest detail.
          </p>
          <button className="group flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-lg text-sm font-medium hover:bg-white/10 transition-all">
            We're hiring 
            <ChevronRight size={16} className="text-zinc-500 group-hover:text-white transition-colors" />
          </button>
        </div>
      </section>

      {/* 3. Team Grid Section */}
      <section className="max-w-[1200px] mx-auto px-6 pb-32">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-16">
          {team.map((member, index) => (
            <div key={index} className="flex flex-col gap-4 group">
              <div className="aspect-square w-full rounded-xl overflow-hidden bg-zinc-900 border border-white/5">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover grayscale transition duration-500 group-hover:grayscale-0 group-hover:scale-105"
                />
              </div>
              <div>
                <h3 className="font-semibold text-[17px] tracking-tight">{member.name}</h3>
                <p className="text-zinc-500 text-sm mt-1">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="mt-4 pt-14 max-w-[1200px] mx-auto px-6 py-48">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-8 gap-y-12">
          
          {/* Left Title - Spans 2 columns on desktop */}
          <div className="lg:col-span-2">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
              Built for the best <br /> Backed by the best
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed max-w-[440px]">
              Our backers include highly accomplished venture firms and some of 
              the world's most exceptional founders and product builders.
            </p>
          </div>

          {/* Top Tier VC Cards */}
          <div className="flex flex-col gap-6">
            <div className="bg-white rounded-lg aspect-[4/3] flex items-center justify-center p-12">
               <span className="text-black text-3xl font-serif font-bold italic">Accel</span>
            </div>
            <div>
              <p className="font-semibold text-white">Miles Clements</p>
              <p className="text-zinc-500 text-sm">Partner</p>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="bg-white rounded-lg aspect-[4/3] flex items-center justify-center p-12">
               <span className="text-black text-xl font-bold tracking-widest uppercase">Sequoia <span className="opacity-50">|||</span></span>
            </div>
            <div>
              <p className="font-semibold text-white">Stephanie Zhan</p>
              <p className="text-zinc-500 text-sm">Partner</p>
            </div>
          </div>

          {/* Angel Grid - Occupies all 4 columns below */}
          <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 mt-12 border-t border-white/5 pt-16">
            {backers.map((backer, index) => (
              <div key={index}>
                <p className="font-semibold text-white">{backer.name}</p>
                <p className="text-zinc-500 text-sm mt-1">{backer.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* 4. News Section (NEW) */}
      <section className="mt-4 pt-14 max-w-[1200px] mx-auto px-6 py-32 border-t border-white/5">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-3xl font-bold tracking-tight">News</h2>
          <button className="text-zinc-400 hover:text-white flex items-center gap-1 text-sm transition-colors">
            See more <ChevronRight size={14} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">
          {newsItems.map((item, index) => (
            <div key={index} className="group cursor-pointer">
              {/* Card Image/Graphic */}
              <div className="aspect-[1.6/1] w-full rounded-xl overflow-hidden bg-zinc-900 border border-white/5 mb-6">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                />
              </div>
              
              {/* Card Meta */}
              <div className="text-zinc-500 text-sm mb-2 flex items-center gap-2">
                <span>{item.author}</span>
                <span className="w-1 h-1 rounded-full bg-zinc-700"></span>
                <span>{item.date}</span>
              </div>
              
              {/* Card Title */}
              <h3 className="text-lg font-bold leading-snug group-hover:text-zinc-300 transition-colors">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </section>
        <Footer />
    </main>
  );
}