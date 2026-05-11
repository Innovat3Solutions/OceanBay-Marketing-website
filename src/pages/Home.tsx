import { motion } from "motion/react";
import { Link } from "wouter";
import { categories, products } from "@/data/products";
import { ShieldCheck, Anchor, Truck, BadgeCheck, ArrowRight, Star, BookOpen } from "lucide-react";
import { useCatalog } from "@/components/CatalogModal";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function Home() {
  const { openCatalog } = useCatalog();
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[88vh] min-h-[640px] flex items-center justify-center overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.6, ease: EASE as unknown as number[] }}
          className="absolute inset-0 bg-[#071A2D]"
        >
          <img
            src="/Hero%20Static%20Fallback.png"
            alt="Ocean Bay Marketing marine hydraulic steering"
            className="absolute inset-0 w-full h-full object-cover opacity-60 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#071A2D]/90 via-[#071A2D]/45 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#071A2D]/60 via-transparent to-transparent"></div>
          <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(circle_at_30%_20%,#2FA8A0_0%,transparent_50%)]"></div>
        </motion.div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-28">
          <motion.div
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
            }}
            className="max-w-3xl"
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE as unknown as number[] } },
              }}
              className="mb-6 flex items-center gap-3"
            >
              <span className="inline-block w-10 h-px bg-[#2FA8A0]" />
              <span className="text-[#2FA8A0] text-xs font-bold tracking-[0.3em] uppercase">Authorized Mavi Mare Vendor</span>
            </motion.div>

            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 40 },
                show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE as unknown as number[] } },
              }}
              className="text-6xl md:text-7xl font-display leading-[0.95] mb-6 tracking-tight text-[#F4F1EC]"
            >
              Marine Hydraulic <br />
              Steering, Done Right.
            </motion.h1>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE as unknown as number[] } },
              }}
              className="text-lg opacity-70 text-[#F4F1EC] max-w-md mb-8 leading-relaxed font-sans"
            >
              Premium Mavi Mare hydraulic steering kits, helm pumps, and steering wheels for outboards from 80 to 350 hp. Quality meets affordability.
            </motion.p>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE as unknown as number[] } },
              }}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="/shop"
                className="group relative overflow-hidden bg-white text-[#071A2D] px-8 py-4 text-xs font-black uppercase tracking-widest transition-colors"
              >
                <span className="relative z-10 group-hover:text-white transition-colors">Browse Products</span>
                <span className="absolute inset-0 bg-[#2FA8A0] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
              </Link>
              <button
                type="button"
                onClick={openCatalog}
                className="group relative overflow-hidden border border-white/30 text-[#F4F1EC] px-8 py-4 text-xs font-black uppercase tracking-widest inline-flex items-center gap-2 hover:border-[#2FA8A0] transition-colors"
              >
                <BookOpen className="w-4 h-4 transition-transform duration-300 group-hover:rotate-[-6deg]" />
                <span>View Catalog</span>
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/40"
        >
          <span className="text-[9px] tracking-[0.3em] uppercase font-bold">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-8 bg-white/40"
          />
        </motion.div>
      </section>

      {/* Trust Bar */}
      <section className="bg-white/5 border-y border-white/10 backdrop-blur-sm relative z-20">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <Stagger gap={0.08} className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: ShieldCheck, title: "Mavi Mare Authorized", text: "Authentic Italian-engineered components" },
              { icon: Truck, title: "Florida Distribution", text: "Ships nationwide from our FL location" },
              { icon: BadgeCheck, title: "Outboard Coverage", text: "Kits for engines 80 hp through 350 hp" },
              { icon: Anchor, title: "Expert Support", text: "Guidance from marine professionals" }
            ].map((item, i) => (
              <StaggerItem key={i} className="flex flex-col items-start gap-3 group">
                <motion.div
                  whileHover={{ rotate: -8, scale: 1.1 }}
                  transition={{ duration: 0.4, ease: EASE as unknown as number[] }}
                  className="w-10 h-10 flex items-center justify-center bg-[#2FA8A0]/10 border border-[#2FA8A0]/30 rounded-sm group-hover:bg-[#2FA8A0]/20 transition-colors"
                >
                  <item.icon className="w-5 h-5 text-[#2FA8A0]" />
                </motion.div>
                <div>
                  <h4 className="text-white font-semibold text-sm uppercase tracking-wide">{item.title}</h4>
                  <p className="text-white/60 text-xs mt-1">{item.text}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <Reveal>
            <div className="flex items-end justify-between mb-12">
              <div>
                <h2 className="text-4xl md:text-5xl font-display text-[#F4F1EC] mb-4">
                  Explore the Catalog
                </h2>
                <p className="text-[#F4F1EC]/60 max-w-md">From complete hydraulic kits to individual helm pumps and steering wheels. Everything you need to outfit a modern helm.</p>
              </div>
              <Link href="/shop" className="hidden md:flex items-center gap-2 text-[#F4F1EC] font-black text-[11px] uppercase tracking-widest hover:text-[#2FA8A0] border-b-2 border-transparent hover:border-[#2FA8A0] transition-colors pb-1">
                View All <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </Reveal>

          <Stagger gap={0.08} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <StaggerItem key={category.id}>
                <Link
                  href={`/category/${category.id}`}
                  className="group block h-80 bg-white/5 border border-white/10 p-8 hover:bg-white/10 hover:border-[#2FA8A0]/40 transition-all flex flex-col justify-between relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-[#071A2D] opacity-40 mix-blend-overlay z-0 group-hover:opacity-20 transition-opacity duration-500" />
                  <img
                    src={category.image}
                    alt={category.name}
                    className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-[800ms] ease-out opacity-25 z-0 mix-blend-luminosity"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#071A2D] to-transparent z-0" />

                  <div className="relative z-10 flex flex-col justify-end h-full">
                    <div>
                      <span className="text-[10px] opacity-50 uppercase tracking-widest mb-1 block text-[#2FA8A0] group-hover:opacity-100 transition-opacity">Mavi Mare</span>
                      <h3 className="text-2xl font-display text-white mb-2">{category.name}</h3>
                      <span className="inline-flex items-center gap-2 text-[10px] font-black tracking-widest uppercase text-white/60 group-hover:text-[#2FA8A0] transition-colors">
                        Browse
                        <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                      </span>
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 border-t border-white/10 bg-[#071A2D] relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display text-[#F4F1EC] mb-4">
                Featured Models
              </h2>
              <div className="w-16 h-1 bg-[#2FA8A0] shadow-[0_0_15px_#2FA8A0] mx-auto rounded-full"></div>
            </div>
          </Reveal>

          <Stagger gap={0.1} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.slice(0, 4).map((product) => (
              <StaggerItem key={product.id}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.35, ease: EASE as unknown as number[] }}
                  className="group relative bg-white/5 border border-white/10 p-5 hover:bg-white/10 hover:border-[#2FA8A0]/40 transition-colors flex flex-col h-full"
                >
                  <div className="relative aspect-square overflow-hidden mb-5 bg-[#F4F1EC]">
                    {product.isNew && (
                      <span className="absolute top-2 left-2 z-10 bg-[#2FA8A0] text-white text-[9px] font-black uppercase tracking-widest px-2 py-1">
                        New Arrival
                      </span>
                    )}
                    {product.isBestseller && (
                      <span className="absolute top-2 left-2 z-10 bg-[#071A2D] text-white text-[9px] font-black uppercase tracking-widest px-2 py-1">
                        Bestseller
                      </span>
                    )}
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-700 ease-out"
                    />

                    <div className="absolute bottom-2 left-2 right-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <Link href={`/product/${product.id}`} className="block w-full bg-[#F4F1EC] text-[#071A2D] py-3 text-[10px] font-black uppercase tracking-widest hover:bg-[#2FA8A0] hover:text-white transition-colors text-center">
                        View Details
                      </Link>
                    </div>
                  </div>

                  <div className="flex flex-col flex-grow text-left">
                    <div className="text-[9px] text-[#2FA8A0] uppercase tracking-widest mb-1 font-bold">
                      {product.category}
                    </div>
                    <Link href={`/product/${product.id}`} className="block flex-grow">
                      <h3 className="text-[#F4F1EC] font-display text-lg leading-snug hover:text-[#2FA8A0] transition-colors line-clamp-2">
                        {product.name}
                      </h3>
                    </Link>
                    <div className="mt-auto pt-3 flex flex-col gap-2">
                       <p className="text-[11px] font-black tracking-widest uppercase text-[#F4F1EC]">
                         Model {product.model}
                       </p>
                       <div className="flex items-center gap-1">
                         <div className="flex items-center text-[#2FA8A0]">
                           {[...Array(5)].map((_, i) => (
                             <Star key={i} className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'fill-current' : 'fill-current opacity-30'}`} />
                           ))}
                         </div>
                         <span className="text-[10px] text-white/50 ml-1">({product.reviews})</span>
                       </div>
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Brand Story Split */}
      <section className="border-t border-white/10 bg-[#071A2D] text-white overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <Reveal x={-40} y={0} className="h-[50vh] lg:h-auto relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#071A2D]/40 to-[#071A2D]/10 z-10"></div>
            <img
                src="/Brand%20Story.png"
                alt="Ocean Bay Marketing brand story"
                className="absolute inset-0 w-full h-full object-cover opacity-80"
            />
          </Reveal>
          <Reveal x={40} y={0} delay={0.1} className="p-12 md:p-24 flex flex-col justify-center bg-white/5">
            <h4 className="text-[#2FA8A0] text-[10px] font-bold uppercase tracking-[0.3em] mb-4">About OBM</h4>
            <h2 className="text-5xl font-display leading-[0.95] mb-6 tracking-tight">
              Quality Meets <br />Affordability.
            </h2>
            <p className="text-white/60 mb-6 text-sm leading-relaxed max-w-md">
              Ocean Bay Marketing is committed to delivering exceptional value and service. We specialize in Mavi Mare hydraulic steering systems for outboard engines, with kits engineered for everything from light bay boats to offshore center consoles.
            </p>
            <p className="text-white/60 mb-12 text-sm leading-relaxed max-w-md">
              Every system we carry is matched to your engine's horsepower so the helm responds the way the captain expects. No guesswork, just reliable steering, backed by responsive support.
            </p>
            <Link href="/about" className="inline-flex items-center gap-2 border-b-2 border-white/30 text-[10px] font-black uppercase tracking-widest pb-1 w-max hover:border-[#2FA8A0] hover:text-[#2FA8A0] transition-colors group">
              Read Our Story
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
