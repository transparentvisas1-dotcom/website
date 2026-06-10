import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-[#080808] overflow-hidden pt-24 pb-8 min-h-[400px] flex flex-col justify-between border-t border-burnished-gold/10">
      {/* Center Gradient & Concentric Circles Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-burnished-gold/15 via-[#080808] to-[#080808] pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none opacity-[0.04]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-burnished-gold"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full border border-burnished-gold"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1400px] h-[1400px] rounded-full border border-burnished-gold"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1800px] h-[1800px] rounded-full border border-burnished-gold"></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-8 items-start">
          
          {/* Logo & Socials (Left) */}
          <div className="flex flex-col items-center md:items-start space-y-6">
            <Link href="/" className="flex flex-col items-center md:items-start group">
              <span className="material-symbols-outlined text-white text-[48px] mb-2 font-light group-hover:text-burnished-gold transition-colors">public</span>
              <span className="font-headline-md text-2xl tracking-widest text-white uppercase text-center md:text-left leading-tight group-hover:text-burnished-gold transition-colors">
                TRANSPARENT<br/>VISAS
              </span>
            </Link>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-burnished-gold transition-colors p-2 rounded-full border border-white/20 hover:border-burnished-gold/50 bg-white/5 backdrop-blur-sm">
                <FaFacebook size={18} />
              </a>
              <a href="#" className="text-white hover:text-burnished-gold transition-colors p-2 rounded-full border border-white/20 hover:border-burnished-gold/50 bg-white/5 backdrop-blur-sm">
                <FaInstagram size={18} />
              </a>
              <a href="#" className="text-white hover:text-burnished-gold transition-colors p-2 rounded-full border border-white/20 hover:border-burnished-gold/50 bg-white/5 backdrop-blur-sm">
                <FaLinkedin size={18} />
              </a>
            </div>
          </div>

          {/* Nav Links Column 1 */}
          <div className="flex flex-col items-center md:items-start space-y-3 pt-4">
            <Link href="/" className="font-body-md text-sm text-white/80 hover:text-burnished-gold transition-colors">Home</Link>
            <Link href="/services" className="font-body-md text-sm text-white/80 hover:text-burnished-gold transition-colors">Services</Link>
            <Link href="/countries" className="font-body-md text-sm text-white/80 hover:text-burnished-gold transition-colors">Destinations</Link>
            <Link href="/visa-refusal-help" className="font-body-md text-sm text-white/80 hover:text-burnished-gold transition-colors">Refusal Help</Link>
          </div>

          {/* Nav Links Column 2 */}
          <div className="flex flex-col items-center md:items-start space-y-3 pt-4">
            <Link href="/about" className="font-body-md text-sm text-white/80 hover:text-burnished-gold transition-colors">About Us</Link>
            <Link href="/contact" className="font-body-md text-sm text-white/80 hover:text-burnished-gold transition-colors">Contact</Link>
            <Link href="/faq" className="font-body-md text-sm text-white/80 hover:text-burnished-gold transition-colors">FAQ</Link>
            <Link href="#" className="font-body-md text-sm text-white/80 hover:text-burnished-gold transition-colors">Privacy Policy</Link>
          </div>

          {/* Address (Right) */}
          <div className="flex flex-col items-center md:items-end md:text-right pt-4">
            <h3 className="font-label-md text-burnished-gold uppercase tracking-widest mb-3">Office Location</h3>
            <div className="font-body-md text-sm text-white/80 space-y-1">
              <p>Harmony</p>
              <p>Pavakkulam Lane</p>
              <p>Kaloor P O</p>
              <p>Ernakulam - 682017</p>
            </div>
          </div>
          
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-body-md text-white/40">
        <div className="uppercase tracking-widest text-center md:text-left">
          Copyright © {new Date().getFullYear()} Transparent Visas - All rights reserved
        </div>
        <div className="text-center">
          Transparent Visas is fully insured & accredited
        </div>
        <div className="text-center md:text-right">
          Website by <Link href="https://blessanalex.dev" target="_blank" className="text-white/60 font-semibold tracking-wider hover:text-burnished-gold transition-colors">Blessan Alex</Link>
        </div>
      </div>
    </footer>
  );
}
