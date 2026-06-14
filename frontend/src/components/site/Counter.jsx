import React, { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

export const Counter = ({ to = 100, suffix = " ", duration = 1600, testId }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    let raf;
    const tick = (t) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(eased * to));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration]);

  return (
    <span ref={ref} data-testid={testId} className="font-display font-bold tabular-nums">
      {val}
      <span className="text-[#FF8A00]">{suffix}</span>
    </span>
  );
};
