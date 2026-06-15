import React from "react";
import { motion } from "framer-motion";
import * as Lucide from "lucide-react";
import { Link } from "react-router-dom";
import { SERVICES } from "../../lib/site";

const Icon = ({ name, ...props }) => {
  const Cmp = Lucide[name] || Lucide.Sparkles;
  return <Cmp {...props} />;
};

export const Services = () => {
  return (
    <section id="services" className="section relative" data-testid="services-section">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            <div className="pill mb-5">
              <Lucide.LayoutGrid size={12} className="text-[#FF8A00]" />
              What we build
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              Services crafted to <span className="text-[#FF8A00]">elevate</span> your business.
            </h2>
          </motion.div>
          <p className="hidden md:block text-muted max-w-xs text-sm">
            A focused studio. Seven sharp services. Real outcomes, not deliverables.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.08 }}
              data-testid={`service-card-${i}`}
              className="lift group relative rounded-[22px] bg-white border border-line/80 p-7 soft-shadow overflow-hidden"
            >
              <div className="absolute -top-16 -right-16 w-44 h-44 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: "radial-gradient(closest-side, rgba(255,138,0,0.18), transparent)" }}
              />
              <div className="w-12 h-12 rounded-2xl grid place-items-center bg-[#FFF6E9] text-[#FF8A00] mb-6 group-hover:scale-110 transition-transform">
                <Icon name={s.icon} size={20} strokeWidth={2.1} />
              </div>
              <h3 className="font-display text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">{s.desc}</p>
              <Link
                to={s.link}
                className="mt-6 inline-flex items-center gap-1.5 text-[12px] font-semibold text-ink/70 group-hover:text-[#FF8A00] transition-colors"
              >
                Learn More <Lucide.ArrowUpRight size={13} />
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
