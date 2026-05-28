"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { content } from "@/lib/content";
import { useContactForm } from "./useContactForm";

export default function ContactForm() {
  const { formData, status, errors, handleChange, handleSubmit } =
    useContactForm();

  // Utility classes for inputs
  const getInputClass = (field: keyof typeof formData) => `
    w-full px-4 py-3 bg-muted/20 border rounded-xl outline-none transition-all duration-200 text-sm sm:text-base
    ${
      errors[field]
        ? "border-destructive focus:border-destructive focus:ring-4 focus:ring-destructive/10"
        : "border-border/40 focus:border-primary focus:ring-4 focus:ring-primary/10 hover:border-border/80"
    }
    placeholder:text-muted-foreground/40 text-foreground backdrop-blur-xs
  `;

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 w-full max-w-xl mx-auto py-4"
    >
      {/* Name */}
      <div className="space-y-2">
        <label className="text-xs font-bold uppercase tracking-wider text-foreground/70">
          {content.contact.form_name_label}
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder={content.contact.form_name_placeholder}
          className={getInputClass("name")}
        />
        <AnimatePresence>
          {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
        </AnimatePresence>
      </div>

      {/* Email */}
      <div className="space-y-2">
        <label className="text-xs font-bold uppercase tracking-wider text-foreground/70">
          {content.contact.form_email_label}
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder={content.contact.form_email_placeholder}
          className={getInputClass("email")}
        />
        <AnimatePresence>
          {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
        </AnimatePresence>
      </div>

      {/* Message */}
      <div className="space-y-2">
        <label className="text-xs font-bold uppercase tracking-wider text-foreground/70">
          {content.contact.form_message_label}
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          placeholder={content.contact.form_message_placeholder}
          className={`${getInputClass("message")} resize-none`}
        />
        <AnimatePresence>
          {errors.message && <ErrorMessage>{errors.message}</ErrorMessage>}
        </AnimatePresence>
      </div>

      {/* Feedback messages area */}
      <div className="pt-2">
        <AnimatePresence mode="wait">
          {status === "error" && (
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -4, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="bg-destructive/10 border border-destructive/20 text-destructive px-4 py-3 rounded-xl text-sm flex items-center gap-2"
            >
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span className="font-medium">
                {content.contact.error_message}
              </span>
            </motion.div>
          )}

          {status === "success" && (
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -4, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 px-4 py-3 rounded-xl text-sm flex items-center gap-2"
            >
              <CheckCircle className="w-4 h-4 shrink-0" />
              <span className="font-medium">
                {content.contact.success_message}
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Submit Button */}
      <motion.button
        type="submit"
        disabled={status === "loading" || status === "success"}
        whileHover={
          status === "idle" || status === "error" ? { scale: 1.015, y: -1 } : {}
        }
        whileTap={
          status === "idle" || status === "error" ? { scale: 0.985, y: 0 } : {}
        }
        transition={{ type: "spring", stiffness: 400, damping: 15 }}
        className={`
          w-full py-3.5 rounded-xl font-bold transition-colors duration-300 flex items-center justify-center gap-2 text-sm sm:text-base shadow-xs select-none
          ${status === "loading" ? "btn-sunset opacity-75 cursor-wait" : ""}
          ${status === "success" ? "bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 cursor-not-allowed shadow-none" : ""}
          ${status === "idle" || status === "error" ? "btn-sunset cursor-pointer" : ""}
        `}
      >
        <AnimatePresence mode="wait">
          {status === "loading" ? (
            <motion.div
              key="loading"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="flex items-center gap-2"
            >
              <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 animate-spin" />
              {content.contact.sending_state}
            </motion.div>
          ) : status === "success" ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              className="flex items-center gap-2"
            >
              <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5" />
              {content.contact.success_title}
            </motion.div>
          ) : (
            <motion.div
              key="idle"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center justify-center gap-2"
            >
              {content.contact.send_button}
              <motion.div
                variants={{
                  hover: { x: 3, y: -1, scale: 1.05 },
                }}
                className="flex items-center"
              >
                <Send className="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-0.5" />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </form>
  );
}

// Helper component for validation errors with smooth height folding
function ErrorMessage({ children }: { children: React.ReactNode }) {
  return (
    <motion.p
      initial={{ opacity: 0, height: 0, marginTop: 0 }}
      animate={{ opacity: 1, height: "auto", marginTop: 4 }}
      exit={{ opacity: 0, height: 0, marginTop: 0 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="text-xs text-destructive font-medium flex items-center gap-1.5 overflow-hidden"
    >
      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
      <span>{children}</span>
    </motion.p>
  );
}
