import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Play, Sparkles } from "lucide-react";
import { Magnetic } from "./Magnetic";
import { LOGO_URL } from "../../lib/site";

export const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -160]);
  const op = useTransform(scrollYProgress, [0, 1], [1, 0.2]);

  const cursorRef = useRef(null);
  useEffect(() => {
    const onMove = (e) => {
      if (!cursorRef.current) return;
      cursorRef.current.style.setProperty("--mx", `${e.clientX}px`);
      cursorRef.current.style.setProperty("--my", `${e.clientY}px`);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section
      id="top"
      ref={ref}
      data-testid="hero-section"
      className="relative min-h-[100svh] pt-32 pb-24 overflow-hidden spotlight grain"
    >
      {/* mouse-follow glow */}
      <div
        ref={cursorRef}
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(280px 280px at var(--mx,50%) var(--my,30%), rgba(255,138,0,0.10), transparent 60%)",
        }}
      />

      {/* floating shapes */}
      <motion.div style={{ y: y1 }} className="absolute -top-10 -left-20 w-80 h-80 rounded-full floaty-slow"
        aria-hidden
      >
        <div className="w-full h-full rounded-full bg-gradient-to-br from-[#FFE9CC] to-transparent blur-2xl" />
      </motion.div>
      <motion.div style={{ y: y2 }} className="absolute top-40 -right-24 w-96 h-96 rounded-full floaty" aria-hidden>
        <div className="w-full h-full rounded-full bg-gradient-to-br from-[#FFF3D6] to-transparent blur-3xl" />
      </motion.div>

      {/* particles */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        {[...Array(18)].map((_, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: [0.0, 0.5, 0.0], y: [0, -40, -80] }}
            transition={{
              duration: 8 + (i % 5),
              repeat: Infinity,
              delay: i * 0.4,
              ease: "easeInOut",
            }}
            className="absolute w-1 h-1 rounded-full"
            style={{
              left: `${(i * 53) % 100}%`,
              top: `${20 + ((i * 17) % 70)}%`,
              background: i % 3 === 0 ? "#FF8A00" : "#FFC857",
              boxShadow: "0 0 12px rgba(255,138,0,0.45)",
            }}
          />
        ))}
      </div>

      <motion.div style={{ opacity: op }} className="relative max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex justify-center mb-8"
        >
          <span className="pill" data-testid="hero-pill">
            <Sparkles size={12} className="text-[#FF8A00]" />
            Premium Digital Experience Studio
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.05 }}
          className="flex justify-center mb-8"
        >
          <img
            src={LOGO_URL}
            alt="Suryanova"
            className="w-20 h-20 md:w-24 md:h-24 rounded-2xl soft-shadow-lg"
            data-testid="hero-logo"
          />
        </motion.div>

        <h1 className="font-display text-center text-[40px] sm:text-6xl lg:text-7xl leading-[1.02] font-bold tracking-tight max-w-5xl mx-auto">
          {"Building Digital Experiences That ".split(" ").map((w, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.05 }}
              className="inline-block mr-[0.25em]"
            >
              {w}
            </motion.span>
          ))}
          <motion.span
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="ink-gradient"
          >
            Make Brands Stand Out.
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mt-7 text-center text-base md:text-lg text-muted max-w-2xl mx-auto"
        >
          Premium websites, AI solutions, automation systems and digital products crafted for ambitious businesses.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.85 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <Magnetic>
            <a
              href="#contact"
              data-testid="hero-cta-start"
              className="group inline-flex items-center gap-2 bg-[#111] hover:bg-[#FF8A00] text-white rounded-full px-7 py-4 text-[14px] font-semibold transition-colors soft-shadow-lg"
            >
              Start Project
              <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </Magnetic>
          <Magnetic>
            <a
              href="#work"
              data-testid="hero-cta-work"
              className="group inline-flex items-center gap-2 bg-white text-ink border border-line rounded-full px-7 py-4 text-[14px] font-semibold hover:border-[#FF8A00] transition"
            >
              <Play size={14} className="text-[#FF8A00]" />
              View Work
            </a>
          </Magnetic>
        </motion.div>

        {/* tiny scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="mt-20 flex justify-center"
        >
          <div className="h-9 w-[1.5px] bg-gradient-to-b from-[#FF8A00] to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
};
