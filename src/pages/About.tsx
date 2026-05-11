export default function About() {
  return (
    <div className="pt-24 min-h-screen">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[#071A2D]">
          <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_30%_20%,#2FA8A0_0%,transparent_50%)]"></div>
          <img 
            src="https://images.unsplash.com/photo-1544413660-299165566b1d?q=80&w=2070&auto=format&fit=crop" 
            alt="Boat on open water"
            className="w-full h-full object-cover opacity-20 mix-blend-overlay"
          />
        </div>
        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl md:text-7xl font-display text-white mb-6">
            Our Story
          </h1>
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto font-sans">
            Founded on the principle that the sea demands respect, and respect requires quality equipment.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 max-w-4xl mx-auto px-6">
        <div className="prose prose-lg text-[#071A2D]/80">
          <p className="text-3xl font-display leading-[1.3] mb-12 text-white text-center">
            "We believe that every voyage, whether a weekend cruise or a commercial expedition, should be underpinned by hardware that never compromises."
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center my-20">
            <div>
              <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#2FA8A0] mb-4">Our Mission</h3>
              <h2 className="text-4xl font-display text-[#F4F1EC] mb-6">Engineering for the Elements</h2>
              <p className="font-sans leading-relaxed text-white/60">
                Salt, sun, and relentless motion test every single component aboard a vessel. 
                AquaMarine was born from a frustration with sub-standard parts that failed when they were needed most. 
                Today, we supply marine mechanics, boatyard operators, and passionate owners with components designed 
                specifically to outlast the harshest marine environments.
              </p>
            </div>
            <div className="aspect-[4/5] bg-white/5 border border-white/10 p-4">
              <img 
                src="https://images.unsplash.com/photo-1542157585-ef20bfc24b43?q=80&w=2070&auto=format&fit=crop" 
                alt="Marine mechanic"
                className="w-full h-full object-cover opacity-80"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center my-20">
            <div className="order-2 md:order-1 aspect-[4/5] bg-white/5 border border-white/10 p-4">
              <img 
                src="https://images.unsplash.com/photo-1662998637778-cd8c520db6af?q=80&w=2070&auto=format&fit=crop" 
                alt="Navigation technology"
                className="w-full h-full object-cover opacity-80"
              />
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#2FA8A0] mb-4">Our Promise</h3>
              <h2 className="text-4xl font-display text-[#F4F1EC] mb-6">Uncompromising Quality</h2>
              <p className="font-sans leading-relaxed text-white/60">
                We partner with the world's leading marine manufacturers to curate a catalog of over 50,000 premium parts. 
                From 316-grade stainless steel hardware that resists pitting, to advanced navigation electronics that cut through the fog, 
                our selection is guided by a singular metric: Reliability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white/5 border-y border-white/10 text-white py-24 text-center px-6">
        <h2 className="text-4xl md:text-6xl font-display mb-8 max-w-3xl mx-auto text-[#F4F1EC]">
          Ready to equip your vessel with the best?
        </h2>
        <a href="/shop" className="inline-block bg-[#F4F1EC] text-[#071A2D] px-8 py-4 text-[10px] font-black uppercase tracking-widest hover:bg-[#2FA8A0] hover:text-white transition-colors">
          Explore Our Catalog
        </a>
      </section>
    </div>
  );
}
