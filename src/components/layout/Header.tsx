import { Link, useLocation } from "wouter";
import { Menu, X, BookOpen, BadgeCheck, Phone } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import { useCatalog } from "@/components/CatalogModal";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();
  const { openCatalog } = useCatalog();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navItems = [
    { label: "Steering Systems", href: "/shop" },
    { label: "About OBM", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50">
        {/* Authorized Distributor Banner */}
        <AnimatePresence initial={false}>
          {!scrolled && !mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="bg-[#2FA8A0] text-white overflow-hidden"
            >
              <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-center sm:justify-between gap-4 text-[10px] font-bold tracking-[0.2em] uppercase">
                <div className="flex items-center gap-2">
                  <BadgeCheck className="w-3.5 h-3.5" />
                  <span>Authorized Mavi Mare Distributor</span>
                </div>
                <a href="tel:+18636949099" className="hidden sm:flex items-center gap-2 hover:text-[#071A2D] transition-colors">
                  <Phone className="w-3.5 h-3.5" /> (863) 694-9099
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.header
          initial={false}
          animate={{
            paddingTop: scrolled || mobileMenuOpen ? 12 : 18,
            paddingBottom: scrolled || mobileMenuOpen ? 12 : 18,
          }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className={cn(
            "w-full border-b transition-colors duration-300",
            scrolled || mobileMenuOpen
              ? "border-white/10 bg-[#071A2D]/90 backdrop-blur-md shadow-lg"
              : "border-transparent bg-[#071A2D]/30 backdrop-blur-sm"
          )}
        >
          <div className="max-w-7xl mx-auto px-6 flex items-center justify-between gap-4">
            <div className="flex items-center gap-4 lg:gap-6">
              <button
                className="lg:hidden text-white hover:text-[#2FA8A0] transition-colors"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
              <Link href="/" className="text-white font-display flex items-center gap-3 group">
                <motion.img
                  src="/OBM%20logo.png"
                  alt="OceanBay Marketing"
                  className="w-14 h-14 lg:w-16 lg:h-16 object-contain drop-shadow-[0_2px_8px_rgba(47,168,160,0.3)]"
                  whileHover={{ rotate: -6, scale: 1.08 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                />
                <div className="hidden sm:flex flex-col leading-none">
                  <span className="text-xl lg:text-2xl font-bold tracking-tight">OceanBay</span>
                  <span className="text-[11px] lg:text-xs font-semibold tracking-[0.25em] uppercase text-[#2FA8A0] mt-1">Marketing</span>
                </div>
              </Link>
            </div>

            <nav className="hidden lg:flex items-center gap-8 text-[11px] font-semibold tracking-widest uppercase">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    "relative transition-colors group",
                    location === item.href ? "text-white" : "text-white/70 hover:text-white"
                  )}
                >
                  <span>{item.label}</span>
                  <span
                    className={cn(
                      "absolute -bottom-2 left-0 right-0 h-px bg-[#2FA8A0] transition-transform duration-300 origin-left",
                      location === item.href ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    )}
                  />
                </Link>
              ))}
              <button
                type="button"
                onClick={openCatalog}
                className="relative text-white/70 hover:text-white transition-colors group cursor-pointer"
              >
                <span>Catalog</span>
                <span className="absolute -bottom-2 left-0 right-0 h-px bg-[#2FA8A0] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </button>
            </nav>

          </div>
        </motion.header>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-[#071A2D] pt-28 px-6 flex flex-col lg:hidden"
          >
            <nav className="flex flex-col gap-6 items-start text-white flex-1">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 + i * 0.06 }}
                >
                  <Link href={item.href} className="text-lg font-bold tracking-widest uppercase hover:text-[#2FA8A0] transition-colors">
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.button
                initial={{ opacity: 0, x: -24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.28 }}
                type="button"
                onClick={() => { setMobileMenuOpen(false); openCatalog(); }}
                className="text-lg font-bold tracking-widest uppercase hover:text-[#2FA8A0] transition-colors flex items-center gap-2"
              >
                <BookOpen className="w-5 h-5" /> Catalog
              </motion.button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
