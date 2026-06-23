import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, ArrowUpRight } from "lucide-react";
import { BRAND, LOGO_URL } from "../../lib/site";

export const About = () => {
  return (
    <section id="about" className="section relative" data-testid="about-section">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            <div className="pill mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF8A00]" />
              About Suryanova
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              We help ambitious brands <span className="text-[#FF8A00]">stand out</span> online.
            </h2>
            <p className="mt-6 text-muted text-base sm:text-lg max-w-2xl">
              SURYANOVA helps businesses establish a powerful online presence through exceptional design,
              development and AI-driven digital experiences. We treat every project like our flagship product —
              obsessive on craft, decisive on outcomes.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-4 max-w-md">
              {[
                { k: "Founded", v: "2024" },
                { k: "Studio", v: "India · Remote" },
                { k: "Focus", v: "Web · AI" },
              ].map((s) => (
                <div key={s.k} className="rounded-2xl border border-line bg-white p-4 soft-shadow">
                  <div className="text-[11px] uppercase tracking-[0.16em] text-muted">{s.k}</div>
                  <div className="mt-1 font-display font-semibold">{s.v}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="lg:col-span-5"
        >
        <div className="relative rounded-[28px] bg-white border border-line/80 soft-shadow-lg p-7 grain overflow-hidden">
        <div
          className="absolute -top-20 -right-16 w-56 h-56 rounded-full"
          style={{
          background:
          "radial-gradient(closest-side, rgba(255,138,0,0.18), transparent)",
        }}
      />

    {/* Founder */}
    <div className="flex items-center gap-4">
      <div className="w-16 h-16 rounded-2xl bg-[#FAFAFA] border border-line grid place-items-center overflow-hidden">
        <img src={LOGO_URL} alt="Vaibhav Suryavanshi" className="w-12 h-12 object-cover" />
      </div>

      <div>
        <div className="text-[11px] uppercase tracking-[0.16em] text-muted">
          Founder
        </div>
        <div className="font-display text-xl font-semibold">
          Vaibhav Suryavanshi
        </div>
      </div>
    </div>

    <p className="mt-4 text-sm text-muted">
      Leads strategy, design and engineering at Suryanova, transforming ideas
      into impactful digital experiences.
    </p>

    <div className="mt-4 flex flex-wrap gap-3">
      <a
        href={BRAND.linkedinFounder}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2 text-[13px] font-semibold hover:border-[#FF8A00] transition"
      >
        <Linkedin size={14} />
        LinkedIn
        <ArrowUpRight size={12} />
      </a>

      <a
        href={BRAND.github}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2 text-[13px] font-semibold hover:border-[#FF8A00] transition"
      >
        <Github size={14} />
        GitHub
        <ArrowUpRight size={12} />
      </a>
    </div>

    {/* Divider */}
    <div className="my-7 border-t border-line"></div>

    {/* Co-Founder */}
    <div className="flex items-center gap-4">
      <div className="w-16 h-16 rounded-2xl bg-[#FAFAFA] border border-line grid place-items-center">
        <img src={LOGO_URL} alt="Bhavya Dua" className="w-12 h-12 object-cover" />
      </div>

      <div>
        <div className="text-[11px] uppercase tracking-[0.16em] text-muted">
          Co-Founder
        </div>
        <div className="font-display text-xl font-semibold">
          Bhavya Dua
        </div>
      </div>
    </div>

    <p className="mt-4 text-sm text-muted">
      Co-leading Suryanova with a focus on innovation, business growth and
      creating meaningful digital solutions for modern brands.
    </p>

      <div className="mt-4 flex flex-wrap gap-3">
        <a
          href={BRAND.linkedinCoFounder}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2 text-[13px] font-semibold hover:border-[#FF8A00] transition"
        >
          <Linkedin size={14} />
          LinkedIn
          <ArrowUpRight size={12} />
          </a>
          <a
        href={BRAND.githubCoFounder}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2 text-[13px] font-semibold hover:border-[#FF8A00] transition"
      >
        <Github size={14} />
        GitHub
        <ArrowUpRight size={12} />
      </a>
          </div>
        </div>
        </motion.div>
        </div>
      </div>
    </section>
  );
};
