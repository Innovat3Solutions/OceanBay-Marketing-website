import { products, categories } from "@/data/products";
import { Link, useRoute } from "wouter";
import { Star, Filter, ChevronDown, ChevronLeft, ChevronRight, BookOpen } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useCatalog } from "@/components/CatalogModal";
import { Reveal } from "@/components/Reveal";

const EASE = [0.22, 1, 0.36, 1] as const;
const PRODUCTS_PER_PAGE = 6;

export default function Shop() {
  const [match, params] = useRoute<{ id: string }>("/category/:id");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const { openCatalog } = useCatalog();

  useEffect(() => {
    if (match && params?.id) {
      const found = categories.find(c => c.id === params.id);
      setActiveCategory(found ? found.name : null);
    } else {
      setActiveCategory(null);
    }
  }, [match, params?.id]);

  // Reset to the first page whenever the active category changes
  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory]);

  const filteredProducts = activeCategory
    ? products.filter(p => p.category === activeCategory)
    : products;

  const totalPages = Math.max(1, Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE));
  const pageStart = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const displayedProducts = filteredProducts.slice(pageStart, pageStart + PRODUCTS_PER_PAGE);

  const goToPage = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="pt-28 min-h-screen">
      {/* Shop Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: EASE as unknown as number[] }}
        className="bg-white/5 border-b border-white/10 py-16 px-6"
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <h1 className="text-4xl md:text-5xl font-display text-white mb-4">
              Marine Hydraulic Steering
            </h1>
            <p className="text-white/60 max-w-xl text-lg font-sans">
              Mavi Mare steering systems matched to your outboard. Engineered in Italy, distributed in Florida.
            </p>
          </div>
          <button
            type="button"
            onClick={openCatalog}
            className="group relative overflow-hidden inline-flex items-center gap-2 bg-[#F4F1EC] text-[#071A2D] px-6 py-3 text-[10px] font-black uppercase tracking-widest transition-colors self-start md:self-auto"
          >
            <span className="relative z-10 group-hover:text-white transition-colors flex items-center gap-2">
              <BookOpen className="w-4 h-4 transition-transform duration-300 group-hover:rotate-[-6deg]" /> View Full Catalog
            </span>
            <span className="absolute inset-0 bg-[#2FA8A0] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
          </button>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-12">

          {/* Sidebar / Filters */}
          <Reveal x={-20} y={0} className="lg:w-64 flex-shrink-0">
            <div className="flex items-center gap-2 text-white font-display text-xl mb-6 pb-4 border-b border-white/10">
              <Filter className="w-5 h-5 text-[#2FA8A0]" /> Filters
            </div>

            <div className="mb-8">
              <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#2FA8A0] mb-4">Categories</h3>
              <ul className="space-y-3 mt-4">
                <li>
                  <button
                    onClick={() => setActiveCategory(null)}
                    className={`relative text-[11px] font-semibold tracking-wider uppercase transition-colors pl-3 ${activeCategory === null ? 'text-white' : 'text-white/50 hover:text-white'}`}
                  >
                    {activeCategory === null && (
                      <motion.span layoutId="cat-indicator" className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-3 bg-[#2FA8A0]" />
                    )}
                    All Products
                  </button>
                </li>
                {categories.map(cat => (
                  <li key={cat.id}>
                    <button
                      onClick={() => setActiveCategory(cat.name)}
                      className={`relative text-[11px] font-semibold tracking-wider uppercase transition-colors text-left pl-3 ${activeCategory === cat.name ? 'text-white' : 'text-white/50 hover:text-white'}`}
                    >
                      {activeCategory === cat.name && (
                        <motion.span layoutId="cat-indicator" className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-3 bg-[#2FA8A0]" />
                      )}
                      {cat.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#2FA8A0] mb-4">Engine Power</h3>
              <ul className="space-y-3 mt-4">
                <li><button className="text-[11px] font-semibold tracking-wider uppercase transition-colors text-white/50 hover:text-white">Up to 80 hp</button></li>
                <li><button className="text-[11px] font-semibold tracking-wider uppercase transition-colors text-white/50 hover:text-white">81 to 150 hp</button></li>
                <li><button className="text-[11px] font-semibold tracking-wider uppercase transition-colors text-white/50 hover:text-white">151 to 300 hp</button></li>
                <li><button className="text-[11px] font-semibold tracking-wider uppercase transition-colors text-white/50 hover:text-white">301 to 350 hp</button></li>
              </ul>
            </div>
          </Reveal>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-8 pb-4 border-b border-white/10">
              <div className="text-[11px] font-semibold tracking-wider uppercase text-white/50">
                Showing{" "}
                <motion.span key={displayedProducts.length} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-white">
                  {filteredProducts.length === 0 ? 0 : pageStart + 1}–{pageStart + displayedProducts.length}
                </motion.span>{" "}
                of <span className="text-white">{filteredProducts.length}</span> results
              </div>
              <button className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-white hover:text-[#2FA8A0] transition-colors">
                Sort By <ChevronDown className="w-4 h-4" />
              </button>
            </div>

            <motion.div
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12"
            >
              <AnimatePresence mode="popLayout">
                {displayedProducts.map((product, i) => (
                  <motion.div
                    key={product.id}
                    layout
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5, delay: i * 0.06, ease: EASE as unknown as number[] }}
                    whileHover={{ y: -6 }}
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
                        <h3 className="text-[#F4F1EC] font-display text-lg leading-snug hover:text-[#2FA8A0] transition-colors mb-2">
                          {product.name}
                        </h3>
                      </Link>
                      <div className="flex flex-wrap items-center justify-between gap-2 mt-auto pt-3">
                        <p className="text-[11px] font-black tracking-widest uppercase text-[#F4F1EC]">
                          Model {product.model}
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
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {displayedProducts.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="h-64 flex items-center justify-center text-white/50 border border-white/10 bg-white/5"
              >
                No products found matching the criteria.
              </motion.div>
            )}

            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-2 mt-16 pt-8 border-t border-white/10">
                <button
                  type="button"
                  onClick={() => goToPage(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="flex items-center gap-1 px-4 py-2 text-[10px] font-black uppercase tracking-widest text-white/70 hover:text-[#2FA8A0] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" /> Prev
                </button>

                {Array.from({ length: totalPages }, (_, idx) => idx + 1).map(page => (
                  <button
                    key={page}
                    type="button"
                    onClick={() => goToPage(page)}
                    className={`w-9 h-9 text-[11px] font-black tracking-widest transition-colors ${
                      page === currentPage
                        ? "bg-[#2FA8A0] text-white"
                        : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    {page}
                  </button>
                ))}

                <button
                  type="button"
                  onClick={() => goToPage(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="flex items-center gap-1 px-4 py-2 text-[10px] font-black uppercase tracking-widest text-white/70 hover:text-[#2FA8A0] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                >
                  Next <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
