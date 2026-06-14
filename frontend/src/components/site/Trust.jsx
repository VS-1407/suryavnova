import React from "react";
import { motion } from "framer-motion";
import { Counter } from "./Counter";
import { STATS } from "../../lib/site";

export const Trust = () => {
  return (
    <section className="relative py-16 md:py-24" data-testid="trust-section">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="rounded-[28px] bg-white soft-shadow-lg border border-line/80 px-6 sm:px-10 py-10 sm:py-14"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="text-center md:text-left"
                data-testid={`stat-${i}`}
              >
                <div className="text-4xl md:text-5xl">
                  <Counter to={s.value} suffix={s.suffix} testId={`stat-counter-${i}`} />
                </div>
                <div className="mt-2 text-[13px] uppercase tracking-[0.16em] text-muted">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
