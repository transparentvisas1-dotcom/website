"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaInstagram } from "react-icons/fa";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const topNav = document.getElementById("top-nav");
      const mobileNav = document.getElementById("mobile-nav");
      
      if (window.scrollY > 50) {
        topNav?.classList.add("shadow-2xl", "bg-obsidian-deep", "border-champagne-highlight/15");
        topNav?.classList.remove("bg-transparent", "border-transparent");
        
        mobileNav?.classList.add("shadow-xl", "bg-obsidian-deep", "border-champagne-highlight/15");
        mobileNav?.classList.remove("bg-transparent", "border-transparent");
      } else {
        topNav?.classList.remove("shadow-2xl", "bg-obsidian-deep", "border-champagne-highlight/15");
        topNav?.classList.add("bg-transparent", "border-transparent");
        
        mobileNav?.classList.remove("shadow-xl", "bg-obsidian-deep", "border-champagne-highlight/15");
        mobileNav?.classList.add("bg-transparent", "border-transparent");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* TopNavBar */}
      <nav
        className="fixed top-0 w-full z-50 bg-transparent border-b border-transparent transition-all duration-500 ease-in-out hidden md:flex"
        id="top-nav"
        aria-label="Desktop navigation"
      >
        <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-6 w-full max-w-container-max mx-auto">
          {/* Brand Logo & Text */}
          <Link
            href="/"
            className="flex items-center gap-4 hover:opacity-90 transition-opacity duration-300 group"
          >
            <div className="relative w-[54px] h-[54px]">
              <div className="absolute inset-0 bg-burnished-gold/20 blur-xl rounded-full scale-150"></div>
              <Image 
                src="/logo.png" 
                alt="Transparent Visas" 
                fill 
                sizes="54px"
                priority
                className="relative object-contain transition-transform group-hover:scale-105 duration-500 drop-shadow-[0_0_8px_rgba(255,212,29,0.3)]" 
              />
            </div>
            <div className="flex flex-col items-center justify-center">
              <span className="kaisei-decol-regular text-[20px] text-white leading-none tracking-widest uppercase">
                TRANSPARENT
              </span>
              <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-burnished-gold/40 to-transparent my-1.5"></div>
              <span className="font-label-md text-[11px] text-burnished-gold tracking-[0.8em] mr-[-0.8em] uppercase">
                VISAS
              </span>
            </div>
          </Link>
          {/* Navigation Links (Absolute Center) */}
          <div className="absolute left-1/2 -translate-x-1/2 flex items-center space-x-6 lg:space-x-8">
            <Link
              href="/services"
              className="font-label-md text-[13px] uppercase tracking-widest text-on-surface hover:text-burnished-gold transition-colors duration-300"
            >
              Services
            </Link>
            <Link
              href="/destinations"
              className="font-label-md text-[13px] uppercase tracking-widest text-on-surface hover:text-burnished-gold transition-colors duration-300"
            >
              Destination
            </Link>
            <Link
              href="/visa-refusal-help"
              className="font-label-md text-[13px] uppercase tracking-widest text-on-surface hover:text-burnished-gold transition-colors duration-300 whitespace-nowrap"
            >
              Refusal Help
            </Link>
            <Link
              href="/about"
              className="font-label-md text-[13px] uppercase tracking-widest text-on-surface hover:text-burnished-gold transition-colors duration-300"
            >
              About
            </Link>
          </div>
          {/* Trailing Actions (Socials & Contact) */}
          <div className="flex items-center space-x-6">
            <div className="hidden lg:flex items-center space-x-4 text-white">
              <a href="#" className="hover:text-burnished-gold transition-colors"><FaFacebook size={16} /></a>
              <a href="https://www.instagram.com/transparentvisas?igsh=dzlseHRqZ3M2MXlh" target="_blank" rel="noopener noreferrer" className="hover:text-burnished-gold transition-colors"><FaInstagram size={16} /></a>
            </div>
            <Link
              href="https://wa.me/918891744344" target="_blank" rel="noopener noreferrer"
              className="bg-transparent border border-white/20 text-white font-label-md text-[13px] uppercase tracking-widest px-6 py-2.5 rounded-full hover:bg-white hover:text-black transition-colors duration-300 flex items-center justify-center"
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Nav Header */}
      <nav id="mobile-nav" className="fixed top-0 w-full z-50 bg-transparent border-b border-transparent transition-all duration-500 ease-in-out flex md:hidden items-center justify-between px-margin-mobile py-4" aria-label="Mobile navigation">
        <Link href="/" className="flex items-center group relative z-10" aria-label="Home">
          <div className="relative w-[44px] h-[44px]">
            <div className="absolute inset-0 bg-burnished-gold/20 blur-lg rounded-full scale-150"></div>
            <Image 
              src="/logo.png" 
              alt="Transparent Visas" 
              fill 
              sizes="44px"
              priority
              className="relative object-contain transition-transform group-hover:scale-105 duration-500" 
            />
          </div>
        </Link>

        <Link href="/" className="flex flex-col items-center justify-center absolute left-1/2 -translate-x-1/2 group text-center" aria-label="Home">
          <span className="kaisei-decol-regular text-[16px] text-white leading-none tracking-widest uppercase">
            TRANSPARENT
          </span>
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-burnished-gold/40 to-transparent my-1"></div>
          <span className="font-label-md text-[8.5px] text-burnished-gold tracking-[0.8em] mr-[-0.8em] uppercase">
            VISAS
          </span>
        </Link>

        <button 
          className="text-burnished-gold p-2 relative z-10"
          onClick={() => setIsOpen(true)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label="Open menu"
        >
          <span className="material-symbols-outlined text-[28px]" data-icon="menu">
            menu
          </span>
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
      
      {/* Mobile Menu Drawer */}
      <div 
        id="mobile-menu"
        role="menu"
        aria-hidden={!isOpen}
        className={`fixed top-0 right-0 h-full w-[80%] max-w-[320px] bg-obsidian-deep z-[70] transform transition-transform duration-300 ease-in-out md:hidden border-l border-champagne-highlight/10 flex flex-col ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4 border-b border-champagne-highlight/10">
          <button 
            className="text-burnished-gold p-2"
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
          >
            <span className="material-symbols-outlined text-[28px]">close</span>
          </button>
        </div>
        
        <div className="flex flex-col py-6 px-6 space-y-2">
          <Link
            href="/services"
            className="font-label-md text-[16px] uppercase tracking-widest text-on-surface hover:text-burnished-gold transition-colors duration-300 block py-4 border-b border-white/5"
            onClick={() => setIsOpen(false)}
            role="menuitem"
          >
            Services
          </Link>
          <Link
            href="/destinations"
            className="font-label-md text-[16px] uppercase tracking-widest text-on-surface hover:text-burnished-gold transition-colors duration-300 block py-4 border-b border-white/5"
            onClick={() => setIsOpen(false)}
            role="menuitem"
          >
            Destination
          </Link>
          <Link
            href="/visa-refusal-help"
            className="font-label-md text-[16px] uppercase tracking-widest text-on-surface hover:text-burnished-gold transition-colors duration-300 block py-4 border-b border-white/5"
            onClick={() => setIsOpen(false)}
            role="menuitem"
          >
            Refusal Help
          </Link>
          <Link
            href="/about"
            className="font-label-md text-[16px] uppercase tracking-widest text-on-surface hover:text-burnished-gold transition-colors duration-300 block py-4 border-b border-white/5"
            onClick={() => setIsOpen(false)}
            role="menuitem"
          >
            About
          </Link>
          <Link
            href="https://wa.me/918891744344" target="_blank" rel="noopener noreferrer"
            className="font-label-md text-[16px] uppercase tracking-widest text-on-surface hover:text-burnished-gold transition-colors duration-300 block py-4"
            onClick={() => setIsOpen(false)}
            role="menuitem"
          >
            Contact
          </Link>
        </div>
      </div>
    </>
  );
}
