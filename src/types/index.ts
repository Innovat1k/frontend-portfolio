export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  images: string[];
  tags: string[];
  metrics: { label: string; value: string }[];
  demoUrl: string;
  repoUrl: string;
  featured: boolean;
}

export interface Journey {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  current?: boolean;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}
