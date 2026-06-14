import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Logo } from "./Logo";
import { LOGO_URL, BRAND } from "../../lib/site";
const NAV = [
  { label: "Home", href: "#top" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];
export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4"
      data-testid="site-navbar"
    >
      <div
        className={`w-full max-w-6xl rounded-full transition-all duration-500 ${
          scrolled ? "glass-strong soft-shadow" : "glass"
        }`}
      >
        <div className="flex items-center justify-between px-5 md:px-6 py-3">
          <Logo size={30} />

          <nav className="hidden md:flex items-center gap-8">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                data-testid={`nav-link-${item.label.toLowerCase()}`}
                className="text-[13px] font-medium text-ink/80 hover:text-ink underline-grow"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#contact"
              data-testid="nav-cta-start"
              className="hidden md:inline-flex items-center gap-1.5 text-[13px] font-semibold bg-[#111] text-white rounded-full px-4 py-2.5 hover:bg-[#FF8A00] transition-colors"
            >
              Start Project <ArrowUpRight size={14} />
            </a>
            <button
              data-testid="nav-toggle"
              onClick={() => setOpen((v) => !v)}
              className="md:hidden w-10 h-10 grid place-items-center rounded-full bg-white border border-line"
              aria-label="Toggle menu"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="px-5 pb-4 flex flex-col gap-2">
                {NAV.map((n) => (
                  <a
                    key={n.href}
                    href={n.href}
                    onClick={() => setOpen(false)}
                    data-testid={`mobile-nav-${n.label.toLowerCase()}`}
                    className="py-2 text-[14px] font-medium text-ink/80 border-b border-line/60"
                  >
                    {n.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="mt-2 inline-flex items-center justify-center bg-[#111] text-white rounded-full px-4 py-2.5 text-[13px] font-semibold"
                >
                  Start Project
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};
