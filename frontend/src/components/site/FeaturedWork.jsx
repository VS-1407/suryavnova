import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { WORK } from "../../lib/site";

const Card = ({ item, i }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: i * 0.08 }}
      data-testid={`work-card-${i}`}
      className="min-w-[86vw] sm:min-w-[560px] lg:min-w-[680px] snap-center rounded-[28px] bg-white border border-line/80 soft-shadow-lg overflow-hidden"
    >
      <div className="relative h-56 sm:h-72 overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${item.accent}`} />
        <div className="absolute inset-0"
          style={{
            background:
              "radial-gradient(120% 80% at 20% 0%, rgba(255,255,255,0.55), transparent 50%)",
          }}
        />
        {/* mock UI */}
        <div className="absolute inset-6 rounded-2xl bg-white/85 backdrop-blur-md border border-white/60 soft-shadow flex flex-col">
          <div className="flex items-center gap-1.5 px-4 py-3 border-b border-line/60">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
            <div className="ml-3 text-[11px] text-muted">{item.title.toLowerCase().split(" — ")[0]}.app</div>
          </div>
          <div className="flex-1 grid grid-cols-3 gap-2 p-3">
            <div className="col-span-1 rounded-lg bg-[#FAFAFA] border border-line/60" />
            <div className="col-span-2 grid grid-rows-3 gap-2">
              <div className="rounded-lg bg-[#FAFAFA] border border-line/60" />
              <div className="rounded-lg bg-[#FFF6E9] border border-[#FFE3BF]" />
              <div className="rounded-lg bg-[#FAFAFA] border border-line/60" />
            </div>
          </div>
        </div>
        <span className="absolute top-4 left-4 pill !bg-white/80">{item.tag}</span>
      </div>

      <div className="p-7">
        <h3 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight">{item.title}</h3>
        <div className="mt-3 flex flex-wrap gap-2">
          {item.stack.map((t) => (
            <span key={t} className="text-[11px] uppercase tracking-[0.12em] bg-[#FAFAFA] border border-line/80 rounded-full px-2.5 py-1 text-muted">
              {t}
            </span>
          ))}
        </div>
        <ul className="mt-5 space-y-2">
          {item.results.map((r) => (
            <li key={r} className="flex items-center gap-2 text-sm text-ink/85">
              <CheckCircle2 size={15} className="text-[#FF8A00]" />
              {r}
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          data-testid={`work-view-${i}`}
          className="mt-6 inline-flex items-center gap-1.5 text-[13px] font-semibold text-ink hover:text-[#FF8A00] transition-colors"
        >
          View Project <ArrowUpRight size={14} />
        </a>
      </div>
    </motion.div>
  );
};

export const FeaturedWork = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x = useTransform(scrollYProgress, [0, 1], ["8%", "-22%"]);

  return (
    <section id="work" ref={ref} className="section relative overflow-hidden" data-testid="work-section">
      <div className="max-w-6xl mx-auto px-6 mb-12">
        <div className="flex items-end justify-between gap-6">
          <div>
            <div className="pill mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF8A00]" />
              Featured Work
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight max-w-2xl">
              Selected work. Shipped, measured, loved.
            </h2>
          </div>
          <a href="#contact" className="hidden md:inline-flex items-center gap-1.5 text-[13px] font-semibold underline-grow">
            Discuss your project <ArrowUpRight size={14} />
          </a>
        </div>
      </div>

      <motion.div style={{ x }} className="hidden lg:flex gap-6 px-6 will-change-transform">
        {WORK.map((w, i) => (
          <Card key={w.title} item={w} i={i} />
        ))}
      </motion.div>

      <div className="lg:hidden flex gap-5 overflow-x-auto snap-x snap-mandatory px-6 pb-6 -mx-2">
        {WORK.map((w, i) => (
          <Card key={w.title} item={w} i={i} />
        ))}
      </div>
    </section>
  );
};
