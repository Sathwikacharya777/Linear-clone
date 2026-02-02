"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-[100] border-b border-white/[0.05] bg-black/60 backdrop-blur-md">
        {/* WIDENED CONTAINER: Changed from 1200px to 1440px and px-6 to px-10 */}
        <div className="max-w-[1440px] mx-auto px-5 md:px-27 h-[64px] flex items-center justify-between relative">
          
          {/* Left: Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition shrink-0">
              <div className="w-5 h-5 bg-white rounded-[4px] flex items-center justify-center">
                <div className="w-2 h-2 bg-black rotate-45" />
              </div>
              <span className="font-bold tracking-tighter text-[18px]">Linear-Clone</span>
            </Link>
          </div>

          {/* Center: Navigation Links (Desktop Only) */}
          <div className="hidden md:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
            <NavLink href="/product">Product</NavLink>
            <NavLink href="/customers">Customers</NavLink>
            <NavLink href="/company">Company</NavLink>
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-8">
              <Link href="/login" className="text-[14px] text-zinc-400 hover:text-white transition font-medium">
                Log in
              </Link>
              <Link 
                href="/contact" 
                className="bg-white text-black px-5 py-1.5 rounded-md text-[14px] font-bold hover:bg-zinc-200 transition shadow-[0_4px_20px_rgba(255,255,255,0.1)]"
              >
                Contact
              </Link>
            </div>

            {/* Hamburger Button */}
            <button 
              onClick={toggleMenu}
              className="md:hidden z-[110] text-white p-2 hover:bg-white/5 rounded-lg transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay stays the same */}
      <div 
        className={`
          fixed inset-0 z-[90] md:hidden transition-all duration-500 ease-in-out
          ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
      >
        <div className="absolute inset-0 bg-black/80 backdrop-blur-[20px]" />
        <div className="relative z-[91] flex flex-col justify-center h-full px-10 gap-8">
          <Link onClick={toggleMenu} href="/product" className="text-4xl font-bold tracking-tight text-white">Product</Link>
          <Link onClick={toggleMenu} href="/customers" className="text-4xl font-bold tracking-tight text-white">Customers</Link>
          <Link onClick={toggleMenu} href="/company" className="text-4xl font-bold tracking-tight text-white">Company</Link>
          <div className="mt-10 flex flex-col gap-5">
            <Link onClick={toggleMenu} href="/login" className="text-xl text-zinc-400">Log in</Link>
            <Link onClick={toggleMenu} href="/contact" className="w-fit bg-white text-black px-8 py-3 rounded-xl font-bold text-lg">Get started</Link>
          </div>
        </div>
      </div>
    </>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link 
      href={href} 
      className="text-[14px] text-zinc-400 hover:text-white transition-colors duration-200 font-medium tracking-tight"
    >
      {children}
    </Link>
  );
}