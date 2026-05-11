import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#071A2D] text-white pt-24 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link href="/" className="text-white font-display text-2xl font-bold tracking-tighter uppercase flex items-center gap-2">
              <div className="w-8 h-8 bg-[#2FA8A0] flex items-center justify-center rounded-sm">
                <div className="w-4 h-4 border-2 border-white rotate-45"></div>
              </div>
              <span>AQUAVANCE</span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Premium boat parts and marine hardware engineered for the water and built to last.
            </p>
          </div>

          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#2FA8A0] mb-6">Shop Parts</h4>
            <ul className="space-y-4">
              <li><Link href="/category/engine" className="text-white/50 hover:text-white text-[11px] font-semibold tracking-wider uppercase transition-colors">Engine Parts</Link></li>
              <li><Link href="/category/navigation" className="text-white/50 hover:text-white text-[11px] font-semibold tracking-wider uppercase transition-colors">Navigation Electronics</Link></li>
              <li><Link href="/category/hardware" className="text-white/50 hover:text-white text-[11px] font-semibold tracking-wider uppercase transition-colors">Stainless Hardware</Link></li>
              <li><Link href="/category/safety" className="text-white/50 hover:text-white text-[11px] font-semibold tracking-wider uppercase transition-colors">Safety Equipment</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#2FA8A0] mb-6">Company</h4>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-white/50 hover:text-white text-[11px] font-semibold tracking-wider uppercase transition-colors">Our Story</Link></li>
              <li><Link href="/careers" className="text-white/50 hover:text-white text-[11px] font-semibold tracking-wider uppercase transition-colors">Careers</Link></li>
              <li><Link href="/contact" className="text-white/50 hover:text-white text-[11px] font-semibold tracking-wider uppercase transition-colors">Contact Us</Link></li>
              <li><Link href="/shipping" className="text-white/50 hover:text-white text-[11px] font-semibold tracking-wider uppercase transition-colors">Shipping & Returns</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#2FA8A0] mb-6">Dispatch</h4>
            <p className="text-white/60 text-sm mb-4">Subscribe for seasonal boating essentials and exclusive content.</p>
            <form className="relative" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="EMAIL ADDRESS" 
                className="w-full bg-transparent border-b border-white/20 rounded-none py-3 px-0 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#2FA8A0] transition-colors"
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
          <p>&copy; {new Date().getFullYear()} Aquavance LLC. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
