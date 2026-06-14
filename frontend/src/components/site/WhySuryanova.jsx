import React from "react";
import { motion } from "framer-motion";
import * as Lucide from "lucide-react";
import { WHY } from "../../lib/site";

const Icon = ({ name, ...props }) => {
  const Cmp = Lucide[name] || Lucide.Sparkles;
  return <Cmp {...props} />;
};

export const WhySuryanova = () => {
  return (
    <section className="section relative" data-testid="why-section">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <div className="pill mb-5">
              <Lucide.BadgeCheck size={12} className="text-[#FF8A00]" />
              Why Suryanova
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              A studio that takes <span className="ink-gradient">craft</span> seriously.
            </h2>
            <p className="mt-5 text-muted max-w-md">
              We sit at the intersection of design, engineering and AI. Every project is led
              by senior makers — no juniors handed your brand.
            </p>
            <div className="mt-8 rounded-2xl bg-white border border-line/80 p-5 soft-shadow flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#FFF6E9] grid place-items-center text-[#FF8A00]">
                <Lucide.HeartHandshake size={20} />
              </div>
              <div>
                <div className="font-display font-semibold">Founder-led delivery</div>
                <div className="text-sm text-muted">You work directly with the team building it.</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-5">
            {WHY.map((w, i) => (
              <motion.div
                key={w.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.06 }}
                data-testid={`why-card-${i}`}
                className="lift rounded-2xl bg-white border border-line/80 p-6 soft-shadow group cursor-default"
              >
                <div className="flex items-center justify-between">
                  <div className="w-11 h-11 rounded-xl bg-[#FAFAFA] grid place-items-center text-ink group-hover:bg-[#FFF6E9] group-hover:text-[#FF8A00] transition-colors">
                    <Icon name={w.icon} size={18} strokeWidth={2.1} />
                  </div>
                  <span className="text-[11px] uppercase tracking-[0.16em] text-muted">0{i + 1}</span>
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold">{w.title}</h3>
                <p className="mt-1 text-sm text-muted">{w.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
