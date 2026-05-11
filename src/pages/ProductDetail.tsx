import { useParams, Link } from "wouter";
import { products } from "@/data/products";
import { Star, Truck, ShieldCheck, ArrowLeft, Plus, Minus, Share2, Heart, Phone, Check, ExternalLink, BookOpen } from "lucide-react";
import { useState } from "react";
import { motion } from "motion/react";
import { useCatalog } from "@/components/CatalogModal";
import { Reveal } from "@/components/Reveal";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function ProductDetail() {
  const params = useParams<{ id: string }>();
  const id = params?.id;
  const product = products.find(p => p.id === id);
  const [quantity, setQuantity] = useState(1);
  const { openCatalog } = useCatalog();

  if (!product) {
    return (
      <div className="min-h-screen pt-32 px-6 flex flex-col items-center justify-center text-center">
        <h1 className="text-3xl font-display text-white mb-4">Product Not Found</h1>
        <Link href="/shop" className="text-[#2FA8A0] font-semibold uppercase tracking-wider text-sm flex items-center gap-2 hover:text-[#1a857e]">
          <ArrowLeft className="w-4 h-4" /> Back to Catalog
        </Link>
      </div>
    );
  }

  const quoteSubject = encodeURIComponent(`Quote request: ${product.model} (${product.name})`);
  const quoteBody = encodeURIComponent(
    `Hello Ocean Bay Marketing,\n\nI'd like a quote on the following:\n\nModel: ${product.model}\nSKU: ${product.sku}\nQuantity: ${quantity}\n\nThanks.`
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="pt-28 min-h-screen"
    >
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 py-6 border-b border-white/10">
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-center gap-2 text-[10px] text-white/40 uppercase tracking-widest font-black"
        >
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <Link href="/shop" className="hover:text-white transition-colors">Catalog</Link>
          <span>/</span>
          <span className="text-white">{product.category}</span>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 lg:py-20">
        <div className="flex flex-col lg:flex-row gap-16">

          {/* Image Gallery */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: EASE as unknown as number[], delay: 0.1 }}
            className="lg:w-1/2 flex flex-col gap-4"
          >
            <motion.div
              whileHover={{ scale: 1.005 }}
              transition={{ duration: 0.4 }}
              className="aspect-square bg-[#F4F1EC] border border-white/10 relative overflow-hidden group"
            >
              <motion.img
                src={product.image}
                alt={product.name}
                initial={{ scale: 1.05, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: EASE as unknown as number[], delay: 0.2 }}
                className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700 ease-out p-8"
              />
              {product.isBestseller && (
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="absolute top-6 left-6 z-10 bg-[#071A2D] text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 shadow-sm"
                >
                  Bestseller
                </motion.span>
              )}
              {product.isNew && (
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="absolute top-6 left-6 z-10 bg-[#2FA8A0] text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 shadow-sm"
                >
                  New Arrival
                </motion.span>
              )}
            </motion.div>
            <motion.div
              initial="hidden"
              animate="show"
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06, delayChildren: 0.4 } } }}
              className="grid grid-cols-4 gap-4"
            >
               {[1,2,3,4].map(idx => (
                 <motion.div
                   key={idx}
                   variants={{
                     hidden: { opacity: 0, y: 12 },
                     show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
                   }}
                   whileHover={{ scale: 1.04 }}
                   className={`aspect-square bg-[#F4F1EC] p-2 cursor-pointer border ${idx === 1 ? 'border-white/40' : 'border-transparent opacity-60 hover:opacity-100'} transition-all`}
                 >
                    <img src={product.image} alt="Thumbnail" className="w-full h-full object-contain" />
                 </motion.div>
               ))}
            </motion.div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial="hidden"
            animate="show"
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08, delayChildren: 0.3 } } }}
            className="lg:w-1/2 flex flex-col"
          >
            <div className="mb-8">
              <motion.div
                variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}
                className="flex items-center justify-between mb-4"
              >
                <span className="text-[10px] text-[#2FA8A0] uppercase tracking-[0.2em] font-black">
                  Model {product.model} · SKU {product.sku}
                </span>
                <div className="flex items-center gap-3 text-white/40">
                   <motion.button whileHover={{ scale: 1.15, rotate: -8 }} className="hover:text-[#2FA8A0] transition-colors"><Share2 className="w-5 h-5"/></motion.button>
                   <motion.button whileHover={{ scale: 1.15 }} className="hover:text-red-500 transition-colors"><Heart className="w-5 h-5"/></motion.button>
                </div>
              </motion.div>

              <motion.h1
                variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.7 } } }}
                className="text-4xl md:text-5xl font-display text-white mb-4 leading-tight"
              >
                {product.name}
              </motion.h1>

              <motion.div
                variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}
                className="flex items-center gap-4 mb-6"
              >
                <div className="flex items-center gap-1 text-[#2FA8A0]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-[#2FA8A0]' : 'opacity-30'}`} />
                  ))}
                </div>
                <span className="text-[11px] font-semibold tracking-wider text-white/60 underline decoration-white/20 underline-offset-4 cursor-pointer hover:decoration-white transition-colors">
                  {product.reviews} Reviews
                </span>
              </motion.div>

              <motion.p
                variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}
                className="text-[11px] font-black uppercase tracking-[0.2em] text-white/50"
              >
                Pricing available on request
              </motion.p>
            </div>

            <motion.div
              variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}
              className="prose prose-sm text-white/60 mb-8 leading-relaxed max-w-none font-sans"
            >
              <p>{product.description}</p>
            </motion.div>

            {/* What's Included */}
            {product.includes.length > 0 && (
              <motion.div
                variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}
                className="mb-8"
              >
                <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#2FA8A0] mb-4">
                  What's Included
                </h3>
                <ul className="space-y-2">
                  {product.includes.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 + i * 0.06, duration: 0.4 }}
                      className="flex items-start gap-3 text-sm text-white/80 font-sans"
                    >
                      <Check className="w-4 h-4 text-[#2FA8A0] flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )}

            {/* Compatibility */}
            {product.compatibility.length > 0 && (
              <motion.div
                variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}
                className="mb-10 border-l-2 border-[#2FA8A0]/40 pl-4"
              >
                <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#2FA8A0] mb-3">
                  Compatibility &amp; Notes
                </h3>
                <ul className="space-y-2 text-sm text-white/60 font-sans leading-relaxed">
                  {product.compatibility.map((note, i) => (
                    <li key={i}>· {note}</li>
                  ))}
                </ul>
              </motion.div>
            )}

            <motion.div
              variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}
              className="border-y border-white/10 py-8 mb-10"
            >
              <div className="flex flex-col sm:flex-row gap-6 items-end">
                <div className="w-full sm:w-1/3">
                  <label className="block text-[10px] font-black uppercase tracking-widest text-[#2FA8A0] mb-3">
                    Quantity
                  </label>
                  <div className="flex items-center border border-white/20 h-14 bg-white/5">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-4 text-white/40 hover:text-white hover:bg-white/5 transition-colors h-full"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <motion.div
                      key={quantity}
                      initial={{ scale: 1.2, opacity: 0.5 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.25 }}
                      className="flex-1 text-center font-bold text-white"
                    >
                      {quantity}
                    </motion.div>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-4 text-white/40 hover:text-white hover:bg-white/5 transition-colors h-full"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="w-full sm:w-2/3">
                   <motion.a
                     whileHover={{ scale: 1.02 }}
                     whileTap={{ scale: 0.98 }}
                     href={`mailto:OceanBayMarketing@outlook.com?subject=${quoteSubject}&body=${quoteBody}`}
                     className="group relative overflow-hidden w-full h-14 bg-[#F4F1EC] text-[#071A2D] font-black text-[10px] uppercase tracking-widest flex items-center justify-center"
                   >
                     <span className="relative z-10 group-hover:text-white transition-colors">Request a Quote</span>
                     <span className="absolute inset-0 bg-[#2FA8A0] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
                  </motion.a>
                </div>
              </div>
              <div className="mt-4">
                <a href="tel:+18636949099" className="inline-flex items-center gap-2 text-white/70 hover:text-[#2FA8A0] text-xs font-bold tracking-widest uppercase transition-colors">
                  <Phone className="w-4 h-4" /> Or call (863) 694-9099
                </a>
              </div>
            </motion.div>

            {/* Guarantees */}
            <motion.div
              variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              <div className="flex items-start gap-4 group">
                <Truck className="w-6 h-6 text-[#2FA8A0] flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                <div>
                  <h4 className="text-[11px] font-bold text-white uppercase tracking-widest">Ships From Florida</h4>
                  <p className="text-sm text-white/60 mt-1 font-sans">Nationwide shipping on Mavi Mare inventory.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 group">
                <ShieldCheck className="w-6 h-6 text-[#2FA8A0] flex-shrink-0 group-hover:scale-110 transition-transform" />
                <div>
                  <h4 className="text-[11px] font-bold text-white uppercase tracking-widest">Authentic Components</h4>
                  <p className="text-sm text-white/60 mt-1 font-sans">Authorized Mavi Mare distribution.</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Tech Specs Section */}
      <div className="bg-white/5 border-t border-white/10 text-white py-20 mt-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16">
            <Reveal x={-20} y={0} className="lg:w-1/3">
              <h2 className="text-4xl font-display mb-6">Technical Specifications</h2>
              <p className="text-white/60 font-sans leading-relaxed mb-8">
                Spec sheet for the {product.model}. Need a complete Mavi Mare catalog or have install
                questions? Reach out. We'll make sure the system you order is the right match for your boat.
              </p>
              <div className="flex flex-col gap-3">
                <button
                  type="button"
                  onClick={openCatalog}
                  className="group relative overflow-hidden inline-flex items-center justify-center gap-2 bg-[#F4F1EC] text-[#071A2D] px-6 py-3 text-[10px] font-black uppercase tracking-widest transition-colors"
                >
                  <span className="relative z-10 group-hover:text-white transition-colors flex items-center gap-2">
                    <BookOpen className="w-4 h-4 transition-transform duration-300 group-hover:rotate-[-6deg]" /> View Full Catalog
                  </span>
                  <span className="absolute inset-0 bg-[#2FA8A0] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
                </button>
                <a
                  href={product.manufacturerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2 border border-white/20 hover:border-[#2FA8A0] text-white/70 hover:text-white px-6 py-3 text-[10px] font-black uppercase tracking-widest transition-colors"
                >
                  <ExternalLink className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /> Mavi Mare Spec Sheet
                </a>
              </div>
            </Reveal>
            <Reveal x={20} y={0} delay={0.1} className="lg:w-2/3">
              <div className="border-t border-white/10">
                {product.specs.map((spec, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.5, delay: i * 0.04, ease: EASE as unknown as number[] }}
                    className="flex flex-col sm:flex-row p-6 border-b border-white/10 hover:bg-white/5 hover:pl-8 transition-all"
                  >
                    <span className="w-48 text-[10px] font-black uppercase tracking-[0.2em] text-[#2FA8A0] mb-2 sm:mb-0">{spec.label}</span>
                    <span className="text-white/80 font-sans text-sm">{spec.value}</span>
                  </motion.div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
