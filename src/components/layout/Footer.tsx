import { Link } from "wouter";
import { ArrowRight, Phone, Mail } from "lucide-react";
import { useCatalog } from "@/components/CatalogModal";

export default function Footer() {
  const { openCatalog } = useCatalog();
  return (
    <footer className="bg-[#071A2D] text-white pt-24 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link href="/" className="text-white font-display flex items-center gap-3 group w-max">
              <img
                src="/OBM%20logo.png"
                alt="OceanBay Marketing"
                className="w-16 h-16 object-contain drop-shadow-[0_2px_10px_rgba(47,168,160,0.35)] transition-transform duration-300 group-hover:scale-105"
              />
              <div className="flex flex-col leading-none">
                <span className="text-2xl font-bold tracking-tight">OceanBay</span>
                <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#2FA8A0] mt-1">Marketing</span>
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Authorized Mavi Mare distributor. Premium marine hydraulic steering systems for outboard engines, where quality meets affordability.
            </p>
          </div>

          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#2FA8A0] mb-6">Catalog</h4>
            <ul className="space-y-4">
              <li><Link href="/category/hydraulic-kits" className="text-white/50 hover:text-white text-[11px] font-semibold tracking-wider uppercase transition-colors">Hydraulic Steering Kits</Link></li>
              <li><Link href="/category/steering-wheels" className="text-white/50 hover:text-white text-[11px] font-semibold tracking-wider uppercase transition-colors">Steering Wheels</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#2FA8A0] mb-6">Company</h4>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-white/50 hover:text-white text-[11px] font-semibold tracking-wider uppercase transition-colors">About OBM</Link></li>
              <li><Link href="/contact" className="text-white/50 hover:text-white text-[11px] font-semibold tracking-wider uppercase transition-colors">Contact Us</Link></li>
              <li>
                <button type="button" onClick={openCatalog} className="text-white/50 hover:text-white text-[11px] font-semibold tracking-wider uppercase transition-colors">
                  Mavi Mare Catalog
                </button>
              </li>
              <li><Link href="/shop" className="text-white/50 hover:text-white text-[11px] font-semibold tracking-wider uppercase transition-colors">Request a Quote</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#2FA8A0] mb-6">Get In Touch</h4>
            <ul className="space-y-4 mb-6">
              <li>
                <a href="tel:+18636949099" className="text-white/70 hover:text-white text-sm font-sans flex items-center gap-3 transition-colors">
                  <Phone className="w-4 h-4 text-[#2FA8A0]" /> (863) 694-9099
                </a>
              </li>
              <li>
                <a href="mailto:OceanBayMarketing@outlook.com" className="text-white/70 hover:text-white text-sm font-sans flex items-center gap-3 transition-colors break-all">
                  <Mail className="w-4 h-4 text-[#2FA8A0] flex-shrink-0" /> OceanBayMarketing@outlook.com
                </a>
              </li>
            </ul>
            <form className="relative" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="EMAIL FOR CATALOG UPDATES"
                className="w-full bg-transparent border-b border-white/20 rounded-none py-3 px-0 text-xs text-white placeholder:text-white/30 focus:outline-none focus:border-[#2FA8A0] transition-colors"
              />
              <button
                type="submit"
                className="absolute right-0 top-0 bottom-0 flex items-center justify-center text-white/50 hover:text-[#2FA8A0] transition-colors"
                aria-label="Subscribe"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 text-[10px] uppercase tracking-widest text-white/40">
          <p>&copy; {new Date().getFullYear()} Ocean Bay Marketing. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
