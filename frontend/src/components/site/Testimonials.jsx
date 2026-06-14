import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { TESTIMONIALS } from "../../lib/site";

export const Testimonials = () => {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % TESTIMONIALS.length), 5500);
    return () => clearInterval(t);
  }, []);

  const t = TESTIMONIALS[i];

  return (
    <section className="section relative" data-testid="testimonials-section">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="pill mb-5">
            <Star size={12} className="text-[#FF8A00]" />
            Testimonials
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            Trusted by founders who ship.
          </h2>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 -z-10 rounded-[36px] spotlight" />
          <div className="glass-strong rounded-[28px] soft-shadow-lg p-8 sm:p-12 min-h-[280px]">
            <Quote size={32} className="text-[#FF8A00] opacity-70" />
            <AnimatePresence mode="wait">
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.45 }}
              >
                <p className="mt-5 font-display text-xl sm:text-2xl leading-snug text-ink">
                  “{t.quote}”
                </p>
                <div className="mt-7 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FF8A00] to-[#FFC857] grid place-items-center text-white font-display font-bold">
                    {t.name.split(" ").map((p) => p[0]).join(" ")}
                  </div>
                  <div>
                    <div className="font-display font-semibold text-sm">{t.name}</div>
                    <div className="text-xs text-muted">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-6 flex items-center justify-center gap-2">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setI(idx)}
                data-testid={`testimonial-dot-${idx}`}
                aria-label={`Show testimonial ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all ${idx === i ? "w-8 bg-[#FF8A00]" : "w-2 bg-line"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
