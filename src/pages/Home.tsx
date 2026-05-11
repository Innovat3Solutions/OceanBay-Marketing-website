import { motion } from "motion/react";
import { Link } from "wouter";
import { categories, products } from "@/data/products";
import { ShieldCheck, Anchor, Truck, BadgeCheck, ArrowRight, Star } from "lucide-react";

export default function Home() {
  const bestsellers = products.filter(p => p.isBestseller);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[#071A2D]">
          <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_30%_20%,#2FA8A0_0%,transparent_50%)]"></div>
          <img 
            src="https://images.unsplash.com/photo-1568213693240-62be11e7e4aa?q=80&w=2070&auto=format&fit=crop" 
            alt="Luxury Yacht hardware"
            className="w-full h-full object-cover opacity-20 mix-blend-overlay scale-105"
          />
        </div>
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <div className="mb-6 block">
              <span className="text-[#2FA8A0] text-xs font-bold tracking-[0.3em] uppercase">Premium Marine Engineering</span>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-display leading-[0.95] mb-6 tracking-tight text-[#F4F1EC]">
              The Pinnacle of <br />
              Maritime Engineering.
            </h1>
            
            <p className="text-lg opacity-60 text-[#F4F1EC] max-w-md mb-8 leading-relaxed font-sans">
              Equip your vessel with highest-grade marine parts, accessories, and durable hardware trusted by commercial operators and yacht owners worldwide.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link href="/shop" className="bg-white text-[#071A2D] px-8 py-4 text-xs font-black uppercase tracking-widest hover:bg-[#2FA8A0] hover:text-white transition-colors">
                Shop Categories
              </Link>
              <Link href="/support" className="border border-white/30 text-[#F4F1EC] px-8 py-4 text-xs font-black uppercase tracking-widest hover:bg-white/10 transition-colors">
                Expert Support
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-white/5 border-y border-white/10 backdrop-blur-sm relative z-20">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: ShieldCheck, title: "Industry Proven", text: "Commercial-grade durability" },
              { icon: Truck, title: "Fast Dispatch", text: "Same-day shipping on orders before 2PM" },
              { icon: BadgeCheck, title: "Marine Certified", text: "Meets all strict safety standards" },
              { icon: Anchor, title: "Expert Support", text: "Guidance from marine mechanics" }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-start gap-3">
                <item.icon className="w-6 h-6 text-[#2FA8A0]" />
                <div>
                  <h4 className="text-white font-semibold text-sm uppercase tracking-wide">{item.title}</h4>
                  <p className="text-white/60 text-xs mt-1">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-display text-[#F4F1EC] mb-4">
                Explore Categories
              </h2>
              <p className="text-[#F4F1EC]/60 max-w-md">Browse our comprehensive selection of premium categories for all your marine outfitting needs.</p>
            </div>
            <Link href="/categories" className="hidden md:flex items-center gap-2 text-[#F4F1EC] font-black text-[11px] uppercase tracking-widest hover:text-[#2FA8A0] border-b-2 border-transparent hover:border-[#2FA8A0] transition-colors pb-1">
              View All
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <Link key={category.id} href={`/category/${category.id}`} className="group h-80 bg-white/5 border border-white/10 p-8 hover:bg-white/10 transition-all flex flex-col justify-between relative overflow-hidden">
                <div className="absolute inset-0 bg-[#071A2D] opacity-40 mix-blend-overlay z-0" />
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out opacity-20 z-0 mix-blend-luminosity"
                />
                
                <div className="relative z-10 flex flex-col justify-end h-full">
                  <div>
                    <span className="text-[10px] opacity-40 uppercase tracking-widest mb-1 block text-white">{category.name} Parts</span>
                    <h3 className="text-2xl font-display text-white mb-2">{category.name}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 border-t border-white/10 bg-[#071A2D] relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display text-[#F4F1EC] mb-4">
              Premium Selections
            </h2>
            <div className="w-16 h-1 bg-[#2FA8A0] shadow-[0_0_15px_#2FA8A0] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.slice(0, 4).map((product) => (
              <div key={product.id} className="group relative bg-white/5 border border-white/10 p-5 hover:bg-white/10 transition-all flex flex-col h-full">
                <div className="relative aspect-square overflow-hidden mb-5">
                  {product.isNew && (
                    <span className="absolute top-2 left-2 z-10 bg-[#2FA8A0] text-white text-[9px] font-black uppercase tracking-widest px-2 py-1">
                      New Arrival
                    </span>
                  )}
                  {product.isBestseller && (
                    <span className="absolute top-2 left-2 z-10 bg-[#F4F1EC] text-[#071A2D] text-[9px] font-black uppercase tracking-widest px-2 py-1">
                      Bestseller
                    </span>
                  )}
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out opacity-80"
                  />
                  
                  {/* Quick Add Button */}
                  <div className="absolute bottom-2 left-2 right-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <button className="w-full bg-[#F4F1EC] text-[#071A2D] py-3 text-[10px] font-black uppercase tracking-widest hover:bg-[#2FA8A0] hover:text-white transition-colors">
                      Quick Add
                    </button>
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
                     <p className="text-xl font-serif text-[#F4F1EC]">
                       ${product.price.toFixed(2)}
                     </p>
                     <div className="flex items-center gap-1">
                       <div className="flex items-center text-[#2FA8A0]">
                         <Star className="w-3 h-3 fill-current" />
                         <Star className="w-3 h-3 fill-current" />
                         <Star className="w-3 h-3 fill-current" />
                         <Star className="w-3 h-3 fill-current" />
                         <Star className="w-3 h-3 fill-current opacity-30" />
                       </div>
                       <span className="text-[10px] text-white/50 ml-1">({product.reviews})</span>
                     </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story Split */}
      <section className="border-t border-white/10 bg-[#071A2D] text-white">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="h-[50vh] lg:h-auto relative">
             <div className="absolute inset-0 bg-gradient-to-r from-[#071A2D]/40 to-[#071A2D]/10 z-10"></div>
             <img 
                src="https://images.unsplash.com/photo-1599557454228-40b9044d6db8?q=80&w=2070&auto=format&fit=crop" 
                alt="Marina at dusk"
                className="absolute inset-0 w-full h-full object-cover opacity-80"
             />
          </div>
          <div className="p-12 md:p-24 flex flex-col justify-center bg-white/5">
            <h4 className="text-[#2FA8A0] text-[10px] font-bold uppercase tracking-[0.3em] mb-4">Our Heritage</h4>
            <h2 className="text-5xl font-display leading-[0.95] mb-6 tracking-tight">
              A Legacy of <br />Marine Excellence.
            </h2>
            <p className="text-white/60 mb-6 text-sm leading-relaxed max-w-md">
              Born from a passion for the open water, AquaMarine was established to provide yacht builders, marina operators, and boating enthusiasts with an uncompromising standard of equipment. 
            </p>
            <p className="text-white/60 mb-12 text-sm leading-relaxed max-w-md">
              Every cleat, shackle, and fitting we offer has been rigorously tested against salt, sun, and heavy seas. We don't just sell parts; we supply peace of mind.
            </p>
            <Link href="/about" className="inline-flex items-center gap-2 border-b-2 border-white/30 text-[10px] font-black uppercase tracking-widest pb-1 w-max hover:border-[#2FA8A0] hover:text-[#2FA8A0] transition-colors">
              Read Our Story <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
