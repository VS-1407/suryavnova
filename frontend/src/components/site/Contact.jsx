import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MessageCircle, Send, ArrowUpRight } from "lucide-react";
import { toast } from "sonner";
import { BRAND } from "../../lib/site";

const BUDGETS = ["< ₹50k", "₹50k – ₹1.5L", "₹1.5L – ₹5L", "₹5L+"];

export const Contact = () => {
  const [form, setForm] = useState({
    name: " ",
    email: " ",
    business: " ",
    budget: BUDGETS[1],
    details: " ",
  });

  const onChange = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.details) {
      toast.error("Please fill name, email and project details.");
      return;
    }
    const lines = [
      `Hi Suryanova, I'd like to start a project.`,
      ``,
      `• Name: ${form.name}`,
      `• Email: ${form.email}`,
      `• Business: ${form.business || "—"}`,
      `• Budget: ${form.budget}`,
      ``,
      `Project details:`,
      form.details,
    ].join(" ");
    const wa = `https://wa.me/${BRAND.whatsapp.replace(/\D/g, " ")}?text=${encodeURIComponent(lines)}`;
    window.open(wa, "_blank", "noopener,noreferrer");
    toast.success("Opening WhatsApp with your project brief…");
  };

  const mailto = () => {
    const subject = `New project enquiry — ${form.name || "Suryanova"}`;
    const body = `Name: ${form.name}
Email: ${form.email}
Business: ${form.business}
Budget: ${form.budget}

Details:
${form.details}`;
    window.location.href = `mailto:${BRAND.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="section relative" data-testid="contact-section">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5"
          >
            <div className="pill mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF8A00]" />
              Start a project
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              Let’s build something <span className="ink-gradient">remarkable.</span>
            </h2>
            <p className="mt-5 text-muted">
              Tell us about your project. We reply within one business day.
            </p>

            <div className="mt-8 space-y-3">
              <a
                href={`mailto:${BRAND.email}`}
                data-testid="contact-email"
                className="group flex items-center justify-between gap-3 rounded-2xl border border-line bg-white p-5 soft-shadow hover:border-[#FF8A00] transition"
              >
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-[#FFF6E9] grid place-items-center text-[#FF8A00]">
                    <Mail size={18} />
                  </div>
                  <div>
                    <div className="text-[11px] uppercase tracking-[0.16em] text-muted">Email</div>
                    <div className="font-display font-semibold">{BRAND.email}</div>
                  </div>
                </div>
                <ArrowUpRight size={18} className="text-muted group-hover:text-[#FF8A00] transition" />
              </a>

              <a
                href={`https://wa.me/${BRAND.whatsapp.replace(/\D/g, " ")}`}
                target="_blank"
                rel="noreferrer"
                data-testid="contact-whatsapp"
                className="group flex items-center justify-between gap-3 rounded-2xl border border-line bg-white p-5 soft-shadow hover:border-[#FF8A00] transition"
              >
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-[#FFF6E9] grid place-items-center text-[#FF8A00]">
                    <MessageCircle size={18} />
                  </div>
                  <div>
                    <div className="text-[11px] uppercase tracking-[0.16em] text-muted">WhatsApp</div>
                    <div className="font-display font-semibold">{BRAND.whatsappDisplay}</div>
                  </div>
                </div>
                <ArrowUpRight size={18} className="text-muted group-hover:text-[#FF8A00] transition" />
              </a>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            onSubmit={onSubmit}
            data-testid="contact-form"
            className="lg:col-span-7 rounded-[28px] bg-white border border-line/80 soft-shadow-lg p-7 sm:p-10"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-[12px] uppercase tracking-[0.16em] text-muted">Name</label>
                <input
                  data-testid="form-name"
                  className="input-field mt-2"
                  placeholder="Vaibhav Suryavanshi"
                  value={form.name}
                  onChange={onChange("name")}
                />
              </div>
              <div>
                <label className="text-[12px] uppercase tracking-[0.16em] text-muted">Email</label>
                <input
                  data-testid="form-email"
                  type="email"
                  className="input-field mt-2"
                  placeholder="you@brand.com"
                  value={form.email}
                  onChange={onChange("email")}
                />
              </div>
              <div>
                <label className="text-[12px] uppercase tracking-[0.16em] text-muted">Business Name</label>
                <input
                  data-testid="form-business"
                  className="input-field mt-2"
                  placeholder="Brand or Company"
                  value={form.business}
                  onChange={onChange("business")}
                />
              </div>
              <div>
                <label className="text-[12px] uppercase tracking-[0.16em] text-muted">Budget</label>
                <div className="mt-2 grid grid-cols-2 gap-2">
                  {BUDGETS.map((b) => (
                    <button
                      type="button"
                      key={b}
                      data-testid={`budget-${b}`}
                      onClick={() => setForm({ ...form, budget: b })}
                      className={`rounded-xl border px-3 py-3 text-[13px] font-medium transition ${
                        form.budget === b
                          ? "border-[#FF8A00] bg-[#FFF6E9] text-ink"
                          : "border-line bg-white text-ink/80 hover:border-[#FF8A00]"
                      }`}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-4">
              <label className="text-[12px] uppercase tracking-[0.16em] text-muted">Project Details</label>
              <textarea
                data-testid="form-details"
                rows={5}
                className="input-field mt-2 resize-none"
                placeholder="Goals, audience, timelines — anything that helps us craft a great proposal."
                value={form.details}
                onChange={onChange("details")}
              />
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <button
                type="submit"
                data-testid="form-submit"
                className="inline-flex items-center justify-center gap-2 bg-[#111] hover:bg-[#FF8A00] text-white rounded-full px-6 py-3.5 text-[14px] font-semibold transition-colors"
              >
                Send via WhatsApp <Send size={14} />
              </button>
              <button
                type="button"
                onClick={mailto}
                data-testid="form-mailto"
                className="inline-flex items-center justify-center gap-2 bg-white text-ink border border-line rounded-full px-6 py-3.5 text-[14px] font-semibold hover:border-[#FF8A00] transition"
              >
                Email Instead <Mail size={14} />
              </button>
            </div>
            <p className="mt-4 text-xs text-muted">
              We respect your privacy. No spam. Ever.
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
};
