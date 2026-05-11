import { Link } from "wouter";
import { ArrowRight, Trash2, Minus, Plus } from "lucide-react";
import { products } from "@/data/products";

export default function Cart() {
  const cartItems = [
    { product: products[0], quantity: 2 },
    { product: products[3], quantity: 1 }
  ];

  const subtotal = cartItems.reduce((acc, item) => acc + (item.product.price * item.quantity), 0);
  const tax = subtotal * 0.08;
  const total = subtotal + tax;

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-display text-white mb-12">
          Your Cart
        </h1>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Cart Items */}
          <div className="lg:w-2/3">
            <div className="bg-white/5 border border-white/10">
              <div className="hidden md:grid grid-cols-12 gap-4 border-b border-white/10 p-6 text-[10px] font-black uppercase tracking-[0.2em] text-[#2FA8A0]">
                <div className="col-span-6">Product</div>
                <div className="col-span-2 text-center">Price</div>
                <div className="col-span-2 text-center">Quantity</div>
                <div className="col-span-2 text-right">Total</div>
              </div>

              <div className="divide-y divide-white/10">
                {cartItems.map((item) => (
                  <div key={item.product.id} className="p-6 flex flex-col md:grid md:grid-cols-12 gap-6 items-center">
                    <div className="col-span-6 flex items-center gap-6 w-full">
                      <div className="w-24 h-24 bg-white/5 border border-white/10 flex-shrink-0">
                        <img src={item.product.image} alt={item.product.name} className="w-full h-full object-cover opacity-80" />
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
                    
                    <div className="col-span-2 text-center w-full md:w-auto font-sans text-white/80 text-sm flex justify-between md:block">
                      <span className="md:hidden text-[10px] text-white/50 uppercase tracking-[0.2em] font-black">Price</span>
                      ${item.product.price.toFixed(2)}
                    </div>
                    
                    <div className="col-span-2 flex justify-center w-full md:w-auto">
                      <div className="flex items-center border border-white/20 h-10 w-full md:w-24 bg-white/5">
                        <button className="px-3 text-white/50 hover:text-white transition-colors"><Minus className="w-3 h-3" /></button>
                        <div className="flex-1 text-center text-sm font-bold text-white">{item.quantity}</div>
                        <button className="px-3 text-white/50 hover:text-white transition-colors"><Plus className="w-3 h-3" /></button>
                      </div>
                    </div>
                    
                    <div className="col-span-2 text-right w-full md:w-auto font-serif text-[#F4F1EC] flex justify-between md:justify-end">
                       <span className="md:hidden text-[10px] text-white/50 uppercase tracking-[0.2em] font-black">Total</span>
                      ${(item.product.price * item.quantity).toFixed(2)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-6 flex justify-between items-center">
              <Link href="/shop" className="text-[10px] font-black uppercase tracking-widest text-white/50 hover:text-[#2FA8A0] transition-colors flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" /> Continue Shopping
              </Link>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:w-1/3">
            <div className="bg-white/5 border border-white/10 p-8">
              <h2 className="text-2xl font-display mb-6 text-white">Order Summary</h2>
              
              <div className="space-y-4 mb-8 text-sm font-sans text-white/80">
                <div className="flex justify-between">
                  <span className="text-white/60">Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/60">Shipping</span>
                  <span>Calculated at checkout</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/60">Estimated Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
              </div>
              
              <div className="border-t border-white/20 pt-6 mb-8 flex justify-between items-center text-white">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#2FA8A0]">Total</span>
                <span className="text-2xl font-serif">${total.toFixed(2)}</span>
              </div>
              
              <button className="w-full bg-[#F4F1EC] text-[#071A2D] py-4 text-[10px] font-black uppercase tracking-widest hover:bg-[#2FA8A0] hover:text-white transition-colors flex items-center justify-center gap-2 mb-4">
                Proceed to Checkout <ArrowRight className="w-4 h-4" />
              </button>
              
              <p className="text-center w-full text-[10px] text-white/30 uppercase tracking-widest font-bold">Secure encrypted checkout</p>
            </div>
          </div>
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
