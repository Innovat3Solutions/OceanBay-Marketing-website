import { Link, useLocation } from "wouter";
import { Search, ShoppingBag, User, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 w-full z-50 transition-all duration-300 border-b",
          scrolled || mobileMenuOpen
            ? "border-white/10 bg-[#071A2D]/80 backdrop-blur-md py-4 shadow-lg"
            : "border-transparent bg-transparent py-5 lg:py-6"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-4 lg:gap-6">
            <button 
              className="lg:hidden text-white hover:text-[#2FA8A0] transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
            <Link href="/" className="text-white font-display text-xl lg:text-2xl font-bold tracking-tighter uppercase flex items-center gap-2">
              <div className="w-8 h-8 bg-[#2FA8A0] flex items-center justify-center rounded-sm">
                <div className="w-4 h-4 border-2 border-white rotate-45"></div>
              </div>
              <span>AQUAVANCE</span>
            </Link>
          </div>

          <nav className="hidden lg:flex items-center gap-8 text-[11px] font-semibold tracking-widest uppercase opacity-70">
            <Link href="/shop" className="text-white hover:text-[#2FA8A0] transition-colors">Shop Parts</Link>
            <Link href="/shop" className="text-white hover:text-[#2FA8A0] transition-colors">Categories</Link>
            <Link href="/about" className="text-white hover:text-[#2FA8A0] transition-colors">Our Story</Link>
            <Link href="/about" className="text-white hover:text-[#2FA8A0] transition-colors">Support</Link>
          </nav>

          <div className="flex items-center gap-4 lg:gap-6 text-white">
            <div className="hidden sm:flex relative items-center border border-white/20 px-3 py-1.5 rounded-full cursor-pointer hover:border-white/40 transition-colors">
              <span className="text-[10px] opacity-50 uppercase mr-10">Search Parts...</span>
              <div className="w-3 h-3 border-2 border-white/40 rounded-full"></div>
            </div>
            <button className="hover:text-[#2FA8A0] transition-colors lg:hidden">
              <Search className="w-5 h-5" />
            </button>
            <button className="hover:text-[#2FA8A0] transition-colors hidden lg:block">
              <User className="w-5 h-5" />
            </button>
            <Link href="/cart" className="hover:text-[#2FA8A0] transition-colors relative">
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute -top-1.5 -right-1.5 bg-white text-[#071A2D] text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                2
              </span>
            </Link>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div 
        className={cn(
          "fixed inset-0 z-40 bg-[#071A2D] pt-24 px-6 flex flex-col transition-transform duration-300 lg:hidden",
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <nav className="flex flex-col gap-6 items-start text-white flex-1">
          <Link href="/shop" className="text-lg font-bold tracking-widest uppercase hover:text-[#2FA8A0] transition-colors">Shop Parts</Link>
          <Link href="/shop" className="text-lg font-bold tracking-widest uppercase hover:text-[#2FA8A0] transition-colors">Categories</Link>
          <Link href="/about" className="text-lg font-bold tracking-widest uppercase hover:text-[#2FA8A0] transition-colors">Our Story</Link>
          <Link href="/about" className="text-lg font-bold tracking-widest uppercase hover:text-[#2FA8A0] transition-colors">Support</Link>
        </nav>
        <div className="border-t border-white/10 py-6 flex items-center gap-6 text-white justify-center">
          <button className="flex items-center gap-2 hover:text-[#2FA8A0] uppercase tracking-widest text-xs font-bold transition-colors">
            <Search className="w-5 h-5" /> Search
          </button>
          <button className="flex items-center gap-2 hover:text-[#2FA8A0] uppercase tracking-widest text-xs font-bold transition-colors">
            <User className="w-5 h-5" /> Account
          </button>
        </div>
      </div>
    </>
  );
}
