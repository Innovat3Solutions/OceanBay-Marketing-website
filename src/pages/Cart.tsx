import { Link } from "wouter";
import { ArrowRight, Trash2, Minus, Plus, Phone, Mail } from "lucide-react";
import { motion } from "motion/react";
import { products } from "@/data/products";
import { Reveal } from "@/components/Reveal";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function Cart() {
  const cartItems = [
    { product: products[0], quantity: 1 },
    { product: products[3], quantity: 1 }
  ];

  const totalUnits = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const quoteSubject = encodeURIComponent("Quote request from Ocean Bay Marketing site");
  const quoteBody = encodeURIComponent(
    [
      "Hello Ocean Bay Marketing,",
      "",
      "I'd like a quote on the following items:",
      "",
      ...cartItems.map(i => `- ${i.product.model} (${i.product.name}), Qty ${i.quantity}, SKU ${i.product.sku}`),
      "",
      "Thanks."
    ].join("\n")
  );

  return (
    <div className="pt-36 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <h1 className="text-4xl font-display text-white mb-2">
            Quote Request
          </h1>
          <p className="text-white/60 font-sans mb-12 max-w-xl">
            Review the items you'd like a quote on. Submit the list and we'll get back to you with pricing, lead time, and shipping details.
          </p>
        </Reveal>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Cart Items */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE as unknown as number[], delay: 0.1 }}
            className="lg:w-2/3"
          >
            <div className="bg-white/5 border border-white/10">
              <div className="hidden md:grid grid-cols-12 gap-4 border-b border-white/10 p-6 text-[10px] font-black uppercase tracking-[0.2em] text-[#2FA8A0]">
                <div className="col-span-7">Product</div>
                <div className="col-span-3 text-center">Model</div>
                <div className="col-span-2 text-right">Quantity</div>
              </div>

              <div className="divide-y divide-white/10">
                {cartItems.map((item, i) => (
                  <motion.div
                    key={item.product.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.25 + i * 0.08, ease: EASE as unknown as number[] }}
                    className="p-6 flex flex-col md:grid md:grid-cols-12 gap-6 items-center"
                  >
                    <div className="col-span-7 flex items-center gap-6 w-full">
                      <div className="w-24 h-24 bg-[#F4F1EC] border border-white/10 flex-shrink-0">
                        <img src={item.product.image} alt={item.product.name} className="w-full h-full object-contain p-2" />
                      </div>
                      <div className="flex-1">
                        <div className="text-[10px] text-[#2FA8A0] uppercase tracking-[0.2em] font-black mb-1">SKU: {item.product.sku}</div>
                        <Link href={`/product/${item.product.id}`} className="text-[#F4F1EC] font-display hover:text-[#2FA8A0] transition-colors leading-snug">
                          {item.product.name}
                        </Link>
                        <button className="text-[10px] uppercase font-bold tracking-widest text-red-400 hover:text-red-300 mt-2 flex items-center gap-1 transition-colors">
                          <Trash2 className="w-3 h-3" /> Remove
                        </button>
                      </div>
                    </div>

                    <div className="col-span-3 text-center w-full md:w-auto font-sans text-white/80 text-sm flex justify-between md:block">
                      <span className="md:hidden text-[10px] text-white/50 uppercase tracking-[0.2em] font-black">Model</span>
                      <span className="font-black tracking-widest uppercase text-[11px]">{item.product.model}</span>
                    </div>

                    <div className="col-span-2 flex justify-end w-full md:w-auto">
                      <div className="flex items-center border border-white/20 h-10 w-full md:w-24 bg-white/5">
                        <button className="px-3 text-white/50 hover:text-white transition-colors"><Minus className="w-3 h-3" /></button>
                        <div className="flex-1 text-center text-sm font-bold text-white">{item.quantity}</div>
                        <button className="px-3 text-white/50 hover:text-white transition-colors"><Plus className="w-3 h-3" /></button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="mt-6 flex justify-between items-center">
              <Link href="/shop" className="group text-[10px] font-black uppercase tracking-widest text-white/50 hover:text-[#2FA8A0] transition-colors flex items-center gap-2">
                <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" /> Continue Browsing
              </Link>
            </div>
          </motion.div>

          {/* Quote Summary */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: EASE as unknown as number[], delay: 0.2 }}
            className="lg:w-1/3"
          >
            <div className="bg-white/5 border border-white/10 p-8 sticky top-32">
              <h2 className="text-2xl font-display mb-6 text-white">Quote Summary</h2>

              <div className="space-y-4 mb-8 text-sm font-sans text-white/80">
                <div className="flex justify-between">
                  <span className="text-white/60">Items</span>
                  <span>{cartItems.length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/60">Total Units</span>
                  <span>{totalUnits}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/60">Pricing</span>
                  <span>On request</span>
                </div>
              </div>

              <div className="border-t border-white/20 pt-6 mb-8">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#2FA8A0] mb-3">How it works</p>
                <p className="text-xs text-white/60 leading-relaxed font-sans">
                  Submit your quote request and our team will reply with pricing, availability, and shipping options for your selected Mavi Mare models.
                </p>
              </div>

              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={`mailto:OceanBayMarketing@outlook.com?subject=${quoteSubject}&body=${quoteBody}`}
                className="group relative overflow-hidden w-full bg-[#F4F1EC] text-[#071A2D] py-4 text-[10px] font-black uppercase tracking-widest flex items-center justify-center gap-2 mb-4"
              >
                <span className="relative z-10 group-hover:text-white transition-colors flex items-center gap-2">
                  Submit Quote Request <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
                <span className="absolute inset-0 bg-[#2FA8A0] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
              </motion.a>

              <div className="space-y-2 mt-6 pt-6 border-t border-white/10">
                <a href="tel:+18636949099" className="flex items-center gap-3 text-white/70 hover:text-white text-sm transition-colors">
                  <Phone className="w-4 h-4 text-[#2FA8A0]" /> (863) 694-9099
                </a>
                <a href="mailto:OceanBayMarketing@outlook.com" className="flex items-center gap-3 text-white/70 hover:text-white text-sm transition-colors break-all">
                  <Mail className="w-4 h-4 text-[#2FA8A0] flex-shrink-0" /> OceanBayMarketing@outlook.com
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function ArrowLeft(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="19" y1="12" x2="5" y2="12"></line>
      <polyline points="12 19 5 12 12 5"></polyline>
    </svg>
  )
}
