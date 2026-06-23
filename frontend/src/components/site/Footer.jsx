import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { Instagram } from "lucide-react";
import { Logo } from "./Logo";
import { BRAND, NAV } from "../../lib/site";

export const Footer = () => {
  return (
    <footer className="border-t border-line/80 bg-white" data-testid="site-footer">
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <Logo size={32} />
            <p className="mt-5 text-muted text-sm max-w-sm">
              SURYANOVA — Premium Digital Experience Studio. Websites, AI, automation and brands
              for the next generation of businesses.
            </p>
            <p className="mt-6 font-display text-lg text-ink">
              {BRAND.tagline}
            </p>
          </div>

          <div className="md:col-span-3">
            <div className="text-[11px] uppercase tracking-[0.16em] text-muted mb-4">Navigate</div>
            <ul className="space-y-2">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="text-sm text-ink/80 hover:text-[#FF8A00] underline-grow">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="text-[11px] uppercase tracking-[0.16em] text-muted mb-4">Contact</div>
            <a href={`mailto:${BRAND.email}`} className="block text-sm text-ink/80 hover:text-[#FF8A00]">
              {BRAND.email}
            </a>
            <a
              href={`https://wa.me/${BRAND.whatsapp.replace(/\D/g, "")}`}
              target="blank"
              rel="noreferrer"
              className="block mt-2 text-sm text-ink/80 hover:text-[#FF8A00]"
            >
              WhatsApp · {BRAND.whatsappDisplay}
            </a>

            <div className="mt-6 flex items-center gap-2">
              <a
                href={BRAND.linkedin}
                target="_blank"
                rel="noreferrer"
                data-testid="footer-linkedin"
                aria-label="LinkedIn"
                className="w-10 h-10 grid place-items-center rounded-full border border-line bg-white hover:border-[#FF8A00] hover:text-[#FF8A00] transition"
              >
                <Linkedin size={15} />
              </a>
              <a
                href={`mailto:${BRAND.email}`}
                data-testid="footer-email"
                aria-label="Email"
                className="w-10 h-10 grid place-items-center rounded-full border border-line bg-white hover:border-[#FF8A00] hover:text-[#FF8A00] transition"
              >
                <Mail size={15} />
              </a>
              <a
                href={BRAND.insta}
                target="_blank"
                rel="noreferrer"
                data-testid="footer-instagram"
                aria-label="Instagram"
                className="w-10 h-10 grid place-items-center rounded-full border border-line bg-white hover:border-[#FF8A00] hover:text-[#FF8A00] transition"
              >
                <Instagram size={15} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-line/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted">
          <div>© {new Date().getFullYear()} Suryanova. All rights reserved.</div>
          <div>Crafted with care in India.</div>
        </div>
      </div>
    </footer>
  );
};
