import { useParams, Link } from "wouter";
import { products } from "@/data/products";
import { Star, Truck, ShieldCheck, ArrowLeft, Plus, Minus, Share2, Heart } from "lucide-react";
import { useState } from "react";

export default function ProductDetail() {
  const params = useParams<{ id: string }>();
  const id = params?.id;
  const product = products.find(p => p.id === id);
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="min-h-screen pt-32 px-6 flex flex-col items-center justify-center text-center">
        <h1 className="text-3xl font-display text-[#071A2D] mb-4">Product Not Found</h1>
        <Link href="/shop" className="text-[#2FA8A0] font-semibold uppercase tracking-wider text-sm flex items-center gap-2 hover:text-[#1a857e]">
          <ArrowLeft className="w-4 h-4" /> Back to Shop
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-24 min-h-screen">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 py-6 border-b border-white/10">
        <div className="flex items-center gap-2 text-[10px] text-white/40 uppercase tracking-widest font-black">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <Link href="/shop" className="hover:text-white transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-white">{product.category}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 lg:py-20">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Image Gallery */}
          <div className="lg:w-1/2 flex flex-col gap-4">
            <div className="aspect-square bg-white/5 border border-white/10 relative overflow-hidden group">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out p-8 opacity-80"
              />
              {product.isBestseller && (
                <span className="absolute top-6 left-6 z-10 bg-[#F4F1EC] text-[#071A2D] text-[10px] font-black uppercase tracking-widest px-3 py-1.5 shadow-sm">
                  Top Rated
                </span>
              )}
            </div>
            {/* Thumbnails placeholder */}
            <div className="grid grid-cols-4 gap-4">
               {[1,2,3,4].map(idx => (
                 <div key={idx} className={`aspect-square bg-white/5 p-2 cursor-pointer border ${idx === 1 ? 'border-white/40' : 'border-transparent opacity-60 hover:opacity-100'} transition-all`}>
                    <img src={product.image} alt="Thumbnail" className="w-full h-full object-cover opacity-80" />
                 </div>
               ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="lg:w-1/2 flex flex-col">
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] text-[#2FA8A0] uppercase tracking-[0.2em] font-black">
                  SKU: {product.sku}
                </span>
                <div className="flex items-center gap-3 text-white/40">
                   <button className="hover:text-[#2FA8A0] transition-colors"><Share2 className="w-5 h-5"/></button>
                   <button className="hover:text-red-500 transition-colors"><Heart className="w-5 h-5"/></button>
                </div>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-display text-white mb-4 leading-tight">
                {product.name}
              </h1>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-1 text-[#2FA8A0]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-[#2FA8A0]' : 'opacity-30'}`} />
                  ))}
                </div>
                <span className="text-[11px] font-semibold tracking-wider text-white/60 underline decoration-white/20 underline-offset-4 cursor-pointer hover:decoration-white transition-colors">
                  {product.reviews} Reviews
                </span>
              </div>
              
              <p className="text-3xl font-serif text-[#F4F1EC]">
                ${product.price.toFixed(2)}
              </p>
            </div>

            <div className="prose prose-sm text-white/60 mb-10 leading-relaxed max-w-none font-sans">
              <p>{product.description}</p>
            </div>

            <div className="border-y border-white/10 py-8 mb-10">
              <div className="flex flex-col sm:flex-row gap-6 items-end">
                <div className="w-full sm:w-1/3">
                  <label className="block text-[10px] font-black uppercase tracking-widest text-[#2FA8A0] mb-3">
                    Quantity
                  </label>
                  <div className="flex items-center border border-white/20 h-14 bg-white/5">
                    <button 
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-4 text-white/40 hover:text-white transition-colors h-full"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <div className="flex-1 text-center font-bold text-white">
                      {quantity}
                    </div>
                    <button 
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-4 text-white/40 hover:text-white transition-colors h-full"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                
                <div className="w-full sm:w-2/3">
                   <button className="w-full h-14 bg-[#F4F1EC] text-[#071A2D] font-black text-[10px] uppercase tracking-widest hover:bg-[#2FA8A0] hover:text-white transition-colors relative overflow-hidden group">
                    <span className="relative z-10">Add To Cart</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Guarantees */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <Truck className="w-6 h-6 text-[#2FA8A0] flex-shrink-0" />
                <div>
                  <h4 className="text-[11px] font-bold text-white uppercase tracking-widest">Free Shipping</h4>
                  <p className="text-sm text-white/60 mt-1 font-sans">On all orders over $250. Ships within 24 hours.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <ShieldCheck className="w-6 h-6 text-[#2FA8A0] flex-shrink-0" />
                <div>
                  <h4 className="text-[11px] font-bold text-white uppercase tracking-widest">Marine Warranty</h4>
                  <p className="text-sm text-white/60 mt-1 font-sans">2-year protection against saltwater corrosion.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
       {/* Tech Specs Section */}
       <div className="bg-white/5 border-t border-white/10 text-white py-20 mt-12">
          <div className="max-w-7xl mx-auto px-6">
             <div className="flex flex-col lg:flex-row gap-16">
                <div className="lg:w-1/3">
                   <h2 className="text-4xl font-display mb-6">Technical Specifications</h2>
                   <p className="text-white/60 font-sans leading-relaxed mb-8">
                     Precision engineering meets coastal durability. Our hardware is tested in the harshest ocean environments to ensure your vessel's integrity.
                   </p>
                </div>
                <div className="lg:w-2/3">
                   <div className="border-t border-white/10">
                      {[
                        { label: "Material", val: "316 Marine Grade Stainless Steel" },
                        { label: "Finish", val: "Hand-polished Mirror Finish" },
                        { label: "Corrosion Resistance", val: "Class A - Saltwater safe" },
                        { label: "Mounting", val: "Concealed fastening system" }
                      ].map((spec, i) => (
                        <div key={i} className="flex flex-col sm:flex-row p-6 border-b border-white/10 hover:bg-white/5 transition-colors">
                           <span className="w-48 text-[10px] font-black uppercase tracking-[0.2em] text-[#2FA8A0] mb-2 sm:mb-0">{spec.label}</span>
                           <span className="text-white/80 font-sans text-sm">{spec.val}</span>
                        </div>
                      ))}
                   </div>
                </div>
             </div>
          </div>
       </div>
    </div>
  );
}
