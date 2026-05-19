"use client";

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
          {content.contact_page.form_name_label}
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder={content.contact_page.form_name_placeholder}
          className={getInputClass("name")}
        />
        {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
      </div>

      {/* Email */}
      <div className="space-y-2">
        <label className="text-xs font-bold uppercase tracking-wider text-foreground/70">
          {content.contact_page.form_email_label}
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder={content.contact_page.form_email_placeholder}
          className={getInputClass("email")}
        />
        {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
      </div>

      {/* Message */}
      <div className="space-y-2">
        <label className="text-xs font-bold uppercase tracking-wider text-foreground/70">
          {content.contact_page.form_message_label}
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          placeholder={content.contact_page.form_message_placeholder}
          className={`${getInputClass("message")} resize-none`}
        />
        {errors.message && <ErrorMessage>{errors.message}</ErrorMessage>}
      </div>

      {/* Feedback messages area */}
      <div className="space-y-3 pt-2">
        {status === "error" && (
          <div className="bg-destructive/10 border border-destructive/20 text-destructive px-4 py-3 rounded-xl text-sm flex items-center gap-2 animate-in fade-in slide-in-from-top-2 duration-300">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span className="font-medium">
              {content.contact_page.error_message}
            </span>
          </div>
        )}

        {status === "success" && (
          <div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 px-4 py-3 rounded-xl text-sm flex items-center gap-2 animate-in fade-in slide-in-from-top-2 duration-300">
            <CheckCircle className="w-4 h-4 shrink-0" />
            <span className="font-medium">
              {content.contact_page.success_message}
            </span>
          </div>
        )}
      </div>

      <button
        type="submit"
        disabled={status === "loading" || status === "success"}
        className={`
          w-full py-3.5 rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base shadow-xs
          ${status === "loading" ? "btn-sunset opacity-75 cursor-wait" : ""}
          ${status === "success" ? "bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 cursor-not-allowed shadow-none" : ""}
          ${status === "idle" || status === "error" ? "btn-sunset hover:-translate-y-px active:translate-y-0 cursor-pointer" : ""}
        `}
      >
        {status === "loading" && (
          <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 animate-spin" />
        )}
        {status === "success" ? (
          <>
            <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5" />{" "}
            {content.contact_page.success_title}
          </>
        ) : status === "loading" ? (
          <>{content.contact_page.sending_state}</>
        ) : (
          <>
            {content.contact_page.send_button}{" "}
            <Send className="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-0.5" />
          </>
        )}
      </button>
    </form>
  );
}

// Helper component for validation error messages
function ErrorMessage({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs text-destructive font-medium flex items-center gap-1.5 pt-0.5 animate-in fade-in slide-in-from-top-1 duration-200">
      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
      {children}
    </p>
  );
}
