import React from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { BRAND } from "../../lib/site";

export const WhatsAppButton = () => {
  return (
    <motion.a
      href={`https://wa.me/${BRAND.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(
        "Hi Suryanova — I'd like to discuss a project."
      )}`}
      target="_blank"
      rel="noreferrer"
      data-testid="floating-whatsapp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.2, type: "spring", stiffness: 220, damping: 18 }}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2 bg-[#25D366] text-white rounded-full pl-3.5 pr-5 py-3 soft-shadow-lg glow-orange"
      aria-label="Chat on WhatsApp"
    >
      <span className="relative grid place-items-center w-9 h-9 rounded-full bg-white/15">
        <MessageCircle size={18} />
        <span className="absolute inset-0 rounded-full animate-ping bg-white/30" />
      </span>
      <span className="text-[13px] font-semibold hidden sm:block">Chat with us</span>
    </motion.a>
  );
};
