import { products, categories } from "@/data/products";
import { Link } from "wouter";
import { Star, Filter, ChevronDown } from "lucide-react";
import { useState } from "react";

export default function Shop() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const displayedProducts = activeCategory 
    ? products.filter(p => p.category === activeCategory)
    : products;

  return (
    <div className="pt-24 min-h-screen">
      {/* Shop Header */}
      <div className="bg-white/5 border-b border-white/10 py-16 -mt-24 pt-40 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-display text-white mb-4">
            Marine Hardware & Parts
          </h1>
          <p className="text-white/60 max-w-xl text-lg font-sans">
            Engineered for durability. Trusted by professionals.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Sidebar / Filters */}
          <div className="lg:w-64 flex-shrink-0">
            <div className="flex items-center gap-2 text-white font-display text-xl mb-6 pb-4 border-b border-white/10">
              <Filter className="w-5 h-5 text-[#2FA8A0]" /> Filters
            </div>

            <div className="mb-8">
              <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#2FA8A0] mb-4">Categories</h3>
              <ul className="space-y-3 mt-4">
                <li>
                  <button 
                    onClick={() => setActiveCategory(null)}
                    className={`text-[11px] font-semibold tracking-wider uppercase transition-colors ${activeCategory === null ? 'text-white' : 'text-white/50 hover:text-white'}`}
                  >
                    All Products
                  </button>
                </li>
                {categories.map(cat => (
                  <li key={cat.id}>
                    <button 
                      onClick={() => setActiveCategory(cat.name)}
                      className={`text-[11px] font-semibold tracking-wider uppercase transition-colors text-left ${activeCategory === cat.name ? 'text-white' : 'text-white/50 hover:text-white'}`}
                    >
                      {cat.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
             <div className="mb-8">
              <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#2FA8A0] mb-4">Price</h3>
              <ul className="space-y-3 mt-4">
                <li><button className="text-[11px] font-semibold tracking-wider uppercase transition-colors text-white/50 hover:text-white">$0 - $100</button></li>
                <li><button className="text-[11px] font-semibold tracking-wider uppercase transition-colors text-white/50 hover:text-white">$100 - $500</button></li>
                <li><button className="text-[11px] font-semibold tracking-wider uppercase transition-colors text-white/50 hover:text-white">$500+</button></li>
              </ul>
            </div>
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-8 pb-4 border-b border-white/10">
              <div className="text-[11px] font-semibold tracking-wider uppercase text-white/50">
                Showing {displayedProducts.length} results
              </div>
              <button className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-white hover:text-[#2FA8A0] transition-colors">
                Sort By <ChevronDown className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
              {displayedProducts.map((product) => (
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
                      <h3 className="text-[#F4F1EC] font-display text-lg leading-snug hover:text-[#2FA8A0] transition-colors mb-2">
                        {product.name}
                      </h3>
                    </Link>
                    <div className="flex flex-wrap items-center justify-between gap-2 mt-auto pt-3">
                      <p className="text-xl font-serif text-[#F4F1EC]">
                        ${product.price.toFixed(2)}
                      </p>
                      <div className="flex items-center gap-1">
                         <div className="flex items-center text-[#2FA8A0]">
                           <Star className="w-3.5 h-3.5 fill-[#2FA8A0]" />
                         </div>
                        <span className="text-xs font-semibold text-white/80">{product.rating}</span>
                        <span className="text-[10px] text-white/40">({product.reviews})</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {displayedProducts.length === 0 && (
              <div className="h-64 flex items-center justify-center text-white/50 border border-white/10 bg-white/5">
                No products found matching the criteria.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
