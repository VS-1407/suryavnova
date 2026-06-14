import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { PROCESS } from "../../lib/site";

export const Process = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 30%"] });
  const lineH = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="process" className="section relative" data-testid="process-section">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="pill mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF8A00]" />
            Our Process
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            Five steps from idea to impact.
          </h2>
        </div>

        <div ref={ref} className="relative pl-10 sm:pl-0">
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 -translate-x-1/2 w-[2px] bg-line" />
          <motion.div
            style={{ height: lineH }}
            className="absolute left-4 sm:left-1/2 top-0 -translate-x-1/2 w-[2px] bg-gradient-to-b from-[#FF8A00] to-[#FFC857]"
          />

          <div className="space-y-12 sm:space-y-20">
            {PROCESS.map((p, i) => {
              const left = i % 2 === 0;
              return (
                <motion.div
                  key={p.n}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.65, delay: 0.05 * i }}
                  className={`relative sm:grid sm:grid-cols-2 sm:gap-12 items-center ${left ? "" : "sm:[&>div:first-child]:order-2"}`}
                  data-testid={`process-step-${i}`}
                >
                  <div className={`hidden sm:block ${left ? "text-right" : "text-left"}`}>
                    {left && <StepCard p={p} align="right" />}
                  </div>

                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 -mt-1 w-8 h-8 grid place-items-center rounded-full bg-white border border-line soft-shadow">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FF8A00]" />
                  </div>

                  <div className={`pl-12 sm:pl-0 ${left ? "sm:text-left" : "sm:text-right"}`}>
                    {!left && <div className="hidden sm:block"><StepCard p={p} align="left" /></div>}
                    <div className="sm:hidden"><StepCard p={p} align="left" /></div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

const StepCard = ({ p, align }) => (
  <div className={`inline-block max-w-md ${align === "right" ? "ml-auto" : ""}`}>
    <div className="font-display text-[64px] leading-none font-bold text-transparent" style={{ WebkitTextStroke: "1.5px #111" }}>
      {p.n}
    </div>
    <h3 className="mt-3 font-display text-2xl font-semibold">{p.title}</h3>
    <p className="mt-2 text-muted text-sm">{p.desc}</p>
  </div>
);
