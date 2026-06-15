import React from "react";
import PageHero from "../components/site/PageHero";

export default function WebsiteDesign() {
  return (
    <>
      <PageHero
        title="Website Designs That"
        highlight="Convert."
        subtitle="Premium website templates crafted for modern businesses."
      />

      <div className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-3 gap-6">

          <div className="border rounded-xl p-6 hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-2">
              E-Commerce Website
            </h2>
            <p className="text-gray-600">
              Modern online store design with cart and payment integration.
            </p>
          </div>

          <div className="border rounded-xl p-6 hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-2">
              Restaurant Website
            </h2>
            <p className="text-gray-600">
              Food ordering, menu showcase and table booking system.
            </p>
          </div>

          <div className="border rounded-xl p-6 hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-2">
              Portfolio Website
            </h2>
            <p className="text-gray-600">
              Personal portfolio for developers, designers and agencies.
            </p>
          </div>

        </div>
      </div>
    </>
  );
}