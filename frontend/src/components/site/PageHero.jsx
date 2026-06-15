import React from "react";

export default function PageHero({
  title,
  highlight,
  subtitle,
}) {
  return (
    <section className="pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-[#FF8A00] font-medium mb-4">
        </p>

        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          {title}{" "}
          <span className="text-[#FF8A00]">
            {highlight}
          </span>
        </h1>

        <p className="mt-6 text-lg text-gray-600 max-w-2xl">
          {subtitle}
        </p>
      </div>
    </section>
  );
}