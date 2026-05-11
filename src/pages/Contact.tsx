import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function Contact() {
  return (
    <div className="pt-28 min-h-screen">
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[320px] flex items-center justify-center overflow-hidden border-b border-white/10">
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.4, ease: EASE as unknown as number[] }}
          className="absolute inset-0 bg-[#071A2D]"
        >
          <img
            src="/Contact%20Hero.png"
            alt="Contact Ocean Bay Marketing"
            className="absolute inset-0 w-full h-full object-cover opacity-55"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#071A2D]/40 via-[#071A2D]/30 to-[#071A2D]/80"></div>
          <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(circle_at_30%_20%,#2FA8A0_0%,transparent_50%)]"></div>
        </motion.div>
        <motion.div
          initial="hidden"
          animate="show"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } } }}
          className="relative z-10 text-center px-6"
        >
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 30 },
              show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE as unknown as number[] } },
            }}
            className="text-5xl md:text-6xl font-display text-white mb-4"
          >
            Contact Ocean Bay
          </motion.h1>
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE as unknown as number[] } },
            }}
            className="text-white/70 max-w-xl mx-auto font-sans"
          >
            Quotes, availability, install questions. We're here to help.
          </motion.p>
        </motion.div>
      </section>

      {/* Contact + Form */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info */}
          <Reveal x={-30} y={0}>
            <h2 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#2FA8A0] mb-4">Reach Us Directly</h2>
            <h3 className="text-4xl font-display text-white mb-8">Talk to a person.</h3>

            <Stagger gap={0.1} className="space-y-6 mb-12">
              <StaggerItem>
                <a href="tel:+18636949099" className="flex items-start gap-4 group">
                  <motion.div
                    whileHover={{ rotate: -6, scale: 1.05 }}
                    transition={{ duration: 0.35, ease: EASE as unknown as number[] }}
                    className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#2FA8A0] group-hover:border-[#2FA8A0] transition-colors"
                  >
                    <Phone className="w-5 h-5 text-[#2FA8A0] group-hover:text-white transition-colors" />
                  </motion.div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 mb-1">Phone</p>
                    <p className="text-xl font-display text-white group-hover:text-[#2FA8A0] transition-colors">(863) 694-9099</p>
                  </div>
                </a>
              </StaggerItem>

              <StaggerItem>
                <a href="mailto:OceanBayMarketing@outlook.com" className="flex items-start gap-4 group">
                  <motion.div
                    whileHover={{ rotate: -6, scale: 1.05 }}
                    transition={{ duration: 0.35, ease: EASE as unknown as number[] }}
                    className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#2FA8A0] group-hover:border-[#2FA8A0] transition-colors"
                  >
                    <Mail className="w-5 h-5 text-[#2FA8A0] group-hover:text-white transition-colors" />
                  </motion.div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 mb-1">Email</p>
                    <p className="text-xl font-display text-white group-hover:text-[#2FA8A0] transition-colors break-all">OceanBayMarketing@outlook.com</p>
                  </div>
                </a>
              </StaggerItem>

              <StaggerItem>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-[#2FA8A0]" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 mb-1">Location</p>
                    <p className="text-xl font-display text-white">Florida, USA</p>
                  </div>
                </div>
              </StaggerItem>
            </Stagger>

            <Reveal delay={0.2}>
              <div className="bg-white/5 border border-white/10 p-6">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#2FA8A0] mb-3">What we'll need</p>
                <ul className="text-sm text-white/70 space-y-2 font-sans">
                  <li>· Engine make, model, and horsepower</li>
                  <li>· Number of engines (single, twin, triple)</li>
                  <li>· Existing steering setup, if any</li>
                  <li>· Shipping zip code</li>
                </ul>
              </div>
            </Reveal>
          </Reveal>

          {/* Form */}
          <Reveal x={30} y={0} delay={0.1} className="bg-white/5 border border-white/10 p-8 lg:p-12">
            <h3 className="text-2xl font-display text-white mb-2">Send us a message</h3>
            <p className="text-white/60 text-sm mb-8 font-sans">We typically reply within one business day.</p>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              {[
                { label: "Name", type: "text", placeholder: "Your name" },
                { label: "Email", type: "email", placeholder: "you@example.com" },
                { label: "Phone (optional)", type: "tel", placeholder: "(000) 000-0000" },
              ].map((field) => (
                <div key={field.label}>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-[#2FA8A0] mb-2">{field.label}</label>
                  <input
                    type={field.type}
                    className="w-full bg-transparent border-b border-white/20 py-3 px-0 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#2FA8A0] transition-colors"
                    placeholder={field.placeholder}
                  />
                </div>
              ))}

              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-[#2FA8A0] mb-2">Message</label>
                <textarea
                  rows={5}
                  className="w-full bg-transparent border border-white/20 py-3 px-4 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#2FA8A0] transition-colors resize-none"
                  placeholder="Tell us about your boat and what you're looking for..."
                />
              </div>

              <button
                type="submit"
                className="group relative overflow-hidden w-full bg-[#F4F1EC] text-[#071A2D] py-4 text-[10px] font-black uppercase tracking-widest transition-colors flex items-center justify-center gap-2"
              >
                <span className="relative z-10 group-hover:text-white transition-colors flex items-center gap-2">
                  Send Message <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
                <span className="absolute inset-0 bg-[#2FA8A0] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
              </button>
            </form>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
