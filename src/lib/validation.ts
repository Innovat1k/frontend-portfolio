import { ContactFormData, FormErrors } from "@/types";

export function validateEmail(email: string): boolean {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

export function validateForm(data: ContactFormData): { valid: boolean; errors: FormErrors } {
  const errors: FormErrors = {};
  
  if (!data.name.trim()) errors.name = "Le nom est requis.";
  if (!data.email.trim()) errors.email = "L'email est requis.";
  else if (!validateEmail(data.email)) errors.email = "Email invalide.";
  if (!data.message.trim()) errors.message = "Le message est requis.";
  else if (data.message.length < 10) errors.message = "Minimum 10 caractères.";

  return { valid: Object.keys(errors).length === 0, errors };
}