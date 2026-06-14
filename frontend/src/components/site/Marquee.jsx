import React from "react";

const ITEMS = [
  "Apple-grade craft",
  "Linear-fast UX",
  "Stripe-clean systems",
  "Framer-smooth motion",
  "Notion-deep thinking",
  "Tesla-bold execution",
];

export const Marquee = () => {
  const row = [...ITEMS, ...ITEMS];
  return (
    <div className="overflow-hidden border-y border-line/80 bg-white" data-testid="marquee">
      <div className="marquee-track flex items-center gap-12 py-5 px-6">
        {row.map((item, i) => (
          <div key={i} className="flex items-center gap-12 shrink-0">
            <span className="font-display text-xl sm:text-2xl tracking-tight text-ink/85">
              {item}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF8A00]" />
          </div>
        ))}
      </div>
    </div>
  );
};
