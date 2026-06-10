"use client";

import { useEffect } from "react";
import Link from "next/link";
import { FaFacebook, FaTwitter } from "react-icons/fa";

export default function Header() {
  useEffect(() => {
    const handleScroll = () => {
      const nav = document.getElementById("top-nav");
      if (nav) {
        if (window.scrollY > 50) {
          nav.classList.add("shadow-2xl", "bg-obsidian-deep/95", "border-champagne-highlight/15");
          nav.classList.remove("bg-transparent", "border-transparent");
        } else {
          nav.classList.remove("shadow-2xl", "bg-obsidian-deep/95", "border-champagne-highlight/15");
          nav.classList.add("bg-transparent", "border-transparent");
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* TopNavBar */}
      <nav
        className="fixed top-0 w-full z-50 bg-transparent border-b border-transparent transition-all duration-500 ease-in-out hidden md:flex"
        id="top-nav"
      >
        <div className="flex justify-between items-center px-margin-desktop py-6 w-full max-w-container-max mx-auto">
          {/* Brand Logo & Text */}
          <Link
            href="/"
            className="flex items-center gap-4 hover:opacity-90 transition-opacity duration-300 group"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-burnished-gold/20 blur-xl rounded-full scale-150"></div>
              <img src="/logo.png" alt="Transparent Visas" className="relative h-[54px] w-auto object-contain transition-transform group-hover:scale-105 duration-500 drop-shadow-[0_0_8px_rgba(255,212,29,0.3)]" />
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
              href="/countries"
              className="font-label-md text-[13px] uppercase tracking-widest text-on-surface hover:text-burnished-gold transition-colors duration-300"
            >
              Countries
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
              <a href="#" className="hover:text-burnished-gold transition-colors"><FaTwitter size={16} /></a>
            </div>
            <Link
              href="/contact"
              className="bg-transparent border border-white/20 text-white font-label-md text-[13px] uppercase tracking-widest px-6 py-2.5 rounded-full hover:bg-white hover:text-black transition-colors duration-300 flex items-center justify-center"
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Nav Header */}
      <nav className="fixed top-0 w-full z-50 bg-obsidian-deep/90 backdrop-blur-xl border-b border-champagne-highlight/15 flex md:hidden justify-between items-center px-margin-mobile py-4">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="absolute inset-0 bg-burnished-gold/20 blur-lg rounded-full scale-150"></div>
            <img src="/logo.png" alt="Transparent Visas" className="relative h-[44px] w-auto object-contain transition-transform group-hover:scale-105 duration-500" />
          </div>
          <div className="flex flex-col items-center justify-center">
            <span className="kaisei-decol-regular text-[16px] text-white leading-none tracking-widest uppercase">
              TRANSPARENT
            </span>
            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-burnished-gold/40 to-transparent my-1"></div>
            <span className="font-label-md text-[8.5px] text-burnished-gold tracking-[0.8em] mr-[-0.8em] uppercase">
              VISAS
            </span>
          </div>
        </Link>
        <button className="text-burnished-gold">
          <span className="material-symbols-outlined text-[28px]" data-icon="menu">
            menu
          </span>
        </button>
      </nav>
    </>
  );
}
