import React from "react";
import { LOGO_URL, BRAND } from "../../lib/site";
export const Logo = ({ size = 36, withWordmark = true, className = "" }) => {
  return (
    <a
      href="#top"
      data-testid="brand-logo"
      className={`inline-flex items-center gap-3 ${className}`}
    >
      <img
        src={LOGO_URL}
        alt={`${BRAND.name} logo`}
        style={{ width: size, height: size }}
        className="rounded-md object-cover"
      />
      {withWordmark && (
        <span className="font-display text-[15px] tracking-[0.32em] font-semibold text-ink">
          SURYANOVA
        </span>
      )}
    </a>
  );
};
