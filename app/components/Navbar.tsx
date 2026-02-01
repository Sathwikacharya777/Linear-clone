"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent scrolling when menu is open
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
        <div className="max-w-[1200px] mx-auto px-6 h-[64px] flex items-center justify-between relative">
          
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
          <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            <NavLink href="/product">Product</NavLink>
            <NavLink href="/customers">Customers</NavLink>
            <NavLink href="/company">Company</NavLink>
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-6">
              <Link href="/login" className="text-[14px] text-zinc-400 hover:text-white transition font-medium">
                Log in
              </Link>
              <Link 
                href="/contact" 
                className="bg-white text-black px-4 py-1.5 rounded-md text-[14px] font-semibold hover:bg-zinc-200 transition"
              >
                Contact
              </Link>
            </div>

            {/* Hamburger Button */}
            <button 
              onClick={toggleMenu}
              className="md:hidden z-[110] text-white p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Full Screen Blur Overlay Menu */}
      <div 
        className={`
          fixed inset-0 z-[90] md:hidden transition-all duration-500 ease-in-out
          ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
      >
        {/* The Heavy Blur Background */}
        <div className="absolute inset-0 bg-black/80 backdrop-blur-[20px]" />

        {/* The Content (Links) */}
        <div className="relative z-[91] flex flex-col justify-center h-full px-10 gap-8">
          <Link 
            onClick={toggleMenu} 
            href="/product" 
            className="text-4xl font-bold tracking-tight hover:text-zinc-400 transition-colors"
          >
            Product
          </Link>
          <Link 
            onClick={toggleMenu} 
            href="/customers" 
            className="text-4xl font-bold tracking-tight hover:text-zinc-400 transition-colors"
          >
            Customers
          </Link>
          <Link 
            onClick={toggleMenu} 
            href="/company" 
            className="text-4xl font-bold tracking-tight hover:text-zinc-400 transition-colors"
          >
            Company
          </Link>
          
          <div className="mt-10 flex flex-col gap-5">
            <Link 
              onClick={toggleMenu} 
              href="/login" 
              className="text-xl text-zinc-400 hover:text-white transition-colors"
            >
              Log in
            </Link>
            <Link 
              onClick={toggleMenu} 
              href="/contact" 
              className="w-fit bg-white text-black px-8 py-3 rounded-xl font-bold text-lg hover:bg-zinc-200 transition"
            >
              Get started
            </Link>
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
      className="text-[14px] text-zinc-400 hover:text-white transition-colors duration-200 font-medium"
    >
      {children}
    </Link>
  );
}