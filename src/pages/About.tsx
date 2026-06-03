import { motion } from "motion/react";
import { Reveal } from "@/components/Reveal";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function About() {
  return (
    <div className="pt-28 min-h-screen">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden border-b border-white/10">
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.4, ease: EASE as unknown as number[] }}
          className="absolute inset-0 bg-[#071A2D]"
        >
          <img
            src="/About%20Hero.png"
            alt="About Ocean Bay Marketing"
            className="absolute inset-0 w-full h-full object-cover opacity-55"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#071A2D]/40 via-[#071A2D]/30 to-[#071A2D]/80"></div>
          <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(circle_at_30%_20%,#2FA8A0_0%,transparent_50%)]"></div>
        </motion.div>
        <motion.div
          initial="hidden"
          animate="show"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } } }}
          className="relative z-10 text-center px-6"
        >
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 30 },
              show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE as unknown as number[] } },
            }}
            className="text-5xl md:text-7xl font-display text-white mb-6"
          >
            About OBM
          </motion.h1>
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE as unknown as number[] } },
            }}
            className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto font-sans"
          >
            Marine hydraulic steering, sourced and supported by people who care.
          </motion.p>
        </motion.div>
      </section>

      {/* Content */}
      <section className="py-24 max-w-4xl mx-auto px-6">
        <div className="prose prose-lg text-[#071A2D]/80">
          <Reveal>
            <p className="text-3xl font-display leading-[1.3] mb-12 text-white text-center">
              "Explore our premium range of products at Ocean Bay Marketing, where quality meets affordability."
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center my-20">
            <Reveal x={-30} y={0}>
              <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#2FA8A0] mb-4">Our Mission</h3>
              <h2 className="text-4xl font-display text-[#F4F1EC] mb-6">Exceptional Value, Reliable Steering</h2>
              <p className="font-sans leading-relaxed text-white/60">
                Ocean Bay Marketing is committed to delivering exceptional value and service to our customers.
                We specialize in marine hydraulic steering systems for outboard engines, sourced from Mavi Mare,
                one of the most respected names in the category, and matched to the horsepower and helm setup
                of the vessel they're going on.
              </p>
            </Reveal>
            <Reveal x={30} y={0} delay={0.1}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4, ease: EASE as unknown as number[] }}
                className="aspect-[4/5] bg-white/5 border border-white/10 p-4 overflow-hidden"
              >
                <img
                  src="/Our%20Mission.png"
                  alt="Our mission, hydraulic steering install"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
                />
              </motion.div>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center my-20">
            <Reveal x={-30} y={0} className="order-2 md:order-1">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4, ease: EASE as unknown as number[] }}
                className="aspect-[4/5] bg-white/5 border border-white/10 p-4 overflow-hidden"
              >
                <img
                  src="/What%20We%20Carry.png"
                  alt="What Ocean Bay Marketing carries"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
                />
              </motion.div>
            </Reveal>
            <Reveal x={30} y={0} delay={0.1} className="order-1 md:order-2">
              <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#2FA8A0] mb-4">What We Carry</h3>
              <h2 className="text-4xl font-display text-[#F4F1EC] mb-6">Steering Built for the Job</h2>
              <p className="font-sans leading-relaxed text-white/60">
                Complete hydraulic kits for outboards from 80 hp (GF90BT) through 350 hp (GF350HD).
                Multi outboard hydraulic kits and inboard hydraulic kits available.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white/5 border-y border-white/10 text-white py-24 text-center px-6">
        <Reveal>
          <h2 className="text-4xl md:text-6xl font-display mb-8 max-w-3xl mx-auto text-[#F4F1EC]">
            Need help finding the right steering system?
          </h2>
          <p className="text-white/60 max-w-xl mx-auto mb-8 font-sans">
            Call us at <a href="tel:+18636949099" className="text-[#2FA8A0] hover:text-white transition-colors">(863) 694-9099</a> or browse the catalog and request a quote.
          </p>
          <a
            href="/shop"
            className="group relative overflow-hidden inline-block bg-[#F4F1EC] text-[#071A2D] px-8 py-4 text-[10px] font-black uppercase tracking-widest transition-colors"
          >
            <span className="relative z-10 group-hover:text-white transition-colors">Explore Our Catalog</span>
            <span className="absolute inset-0 bg-[#2FA8A0] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
          </a>
        </Reveal>
      </section>
    </div>
  );
}
