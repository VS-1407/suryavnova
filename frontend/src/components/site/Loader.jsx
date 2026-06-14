import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { LOGO_URL } from "../../lib/site";

export const Loader = () => {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setShow(false), 1100);
    return () => clearTimeout(t);
  }, []);
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] grid place-items-center bg-[#FAFAFA]"
          data-testid="page-loader"
        >
          <div className="flex flex-col items-center gap-4">
            <motion.img
              src={LOGO_URL}
              alt="Suryanova"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="w-16 h-16 rounded-2xl"
            />
            <div className="loader-ring w-8 h-8 rounded-full border-2 border-[#FF8A00] border-t-transparent" />
            <div className="text-[11px] uppercase tracking-[0.32em] text-muted">SURYANOVA</div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
