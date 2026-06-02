// Centralized bilingual content for portfolio pages (SEO, navigation, UI labels)

export type Content = {
  meta: { title: string; description: string; keywords: string };
  nav: { home: string; projects: string; about: string; contact: string };
  hero: { title: string; subtitle: string; cta_primary: string; cta_secondary: string };
  projects_section: { title: string; subtitle: string; view_all: string };
  projects: { title: string; subtitle: string; no_projects: string; slug_title: string; image: string };
  about: {
    title: string;
    name: string;
    about_title: string;
    subtitle: string;
    bio: string;
    availability: string;
    availability_title: string;
    location: string;
    location_title: string;
    languages: string;
    languages_title: string;
    skills_title: string;
    experience_title: string;
    cta_title: string;
    cta_desc: string;
  };
  contact: {
    title: string;
    subtitle: string;
    direct_label: string;
    direct_email: string;
    networks_label: string;
    form_name_label: string;
    form_name_placeholder: string;
    form_email_label: string;
    form_email_placeholder: string;
    form_message_label: string;
    form_message_placeholder: string;
    send_button: string;
    sending_state: string;
    success_title: string;
    success_message: string;
    error_message: string;
  };
  footer: { all_rights: string; github: string; linkedin: string };
  buttons: {
    view_details: string;
    view_demo: string;
    view_code: string;
    download_cv: string;
    send_message: string;
    back: string;
    toggle_theme: string;
  };
  metrics: {
    lighthouse: string;
    features: string;
    bundle_size: string;
    seo_score: string;
    accessibility: string;
  };
  tags: { featured: string; new: string; in_progress: string };
};

const fr: Content = {
  meta: {
    title: "Portfolio | Développeur Frontend React",
    description: "Développeur Frontend spécialisé en React, TypeScript et interfaces performantes. Découvrez mes projets et mon expertise.",
    keywords: "React, TypeScript, Frontend, Next.js, Portfolio, Développeur Web",
  },
  nav: { home: "Accueil", projects: "Projets", about: "À propos", contact: "Contact" },
  hero: {
    title: "Développeur Frontend React & Next.js",
    subtitle: "Je conçois des interfaces web performantes, accessibles et maintenables avec React, TypeScript et Next.js.",
    cta_primary: "Voir mes projets",
    cta_secondary: "Me contacter",
  },
  projects_section: {
    title: "Projets Récents",
    subtitle: "Quelques-unes de mes réalisations en développement frontend.",
    view_all: "Voir tous les projets",
  },
  projects: {
    title: "Mes Projets",
    subtitle: "Une sélection de mes réalisations récentes en développement frontend.",
    no_projects: "Aucun projet pour le moment.",
    slug_title: "Contexte & Réalisation",
    image: "Capture d'écran",
  },
  about: {
    title: "À Propos",
    name: "Heïdi Al Ihmid Jeremia",
    about_title: "Qui suis-je ?",
    subtitle: "Développeur frontend, orienté résultats et attentif à l'expérience utilisateur.",
    bio: "Développeur frontend animé par la création d'interfaces modernes, intuitives et pensées pour l'utilisateur. Je travaille principalement avec React et TypeScript, avec un intérêt marqué pour les applications SaaS, les outils de productivité et les systèmes interactifs.\n\nRigoureux dans mon approche, j'accorde une importance particulière à l'architecture, à l'accessibilité et à la fluidité des interactions — parce qu'un bon produit se ressent autant qu'il se voit.",
    availability: "Disponible immédiatement pour un CDI en remote ou des missions freelance.",
    availability_title: "Disponibilité",
    location: "Madagascar | GMT+3",
    location_title: "Localisation",
    languages: "Français (natif) | Anglais (courant)",
    languages_title: "Langues",
    skills_title: "Compétences Techniques",
    experience_title: "Parcours Professionnel",
    cta_title: "Travaillons ensemble",
    cta_desc: "Vous avez un projet ou un poste à pourvoir ? Discutons-en.",
  },
  contact: {
    title: "Contact",
    subtitle: "Vous avez un projet ou un poste à pourvoir ? \n\n Discutons de la manière dont je peux contribuer à votre équipe.",
    direct_label: "Contact Direct",
    direct_email: "Cliquez pour m'écrire",
    networks_label: "Réseaux",
    form_name_label: "Nom",
    form_name_placeholder: "Jean Dupont",
    form_email_label: "Email",
    form_email_placeholder: "jean@exemple.com",
    form_message_label: "Message",
    form_message_placeholder: "Bonjour, je suis intéressé par votre profil...",
    send_button: "Envoyer le message",
    sending_state: "Envoi en cours...",
    success_title: "Envoyé !",
    success_message: "Merci ! Je vous répondrai dans les plus brefs délais.",
    error_message: "Une erreur est survenue. Veuillez réessayer.",
  },
  footer: { all_rights: "Tous droits réservés", github: "GitHub", linkedin: "LinkedIn" },
  buttons: {
    view_details: "Voir le détail",
    view_demo: "Voir la démo",
    view_code: "Code source",
    download_cv: "Télécharger mon CV",
    send_message: "Envoyer le message",
    back: "Retour",
    toggle_theme: "Changer le thème",
  },
  metrics: {
    lighthouse: "Lighthouse",
    features: "Fonctionnalités clés",
    bundle_size: "Taille du Bundle",
    seo_score: "SEO Score",
    accessibility: "Accessibilité",
  },
  tags: { featured: "Projet Phare", new: "Nouveau", in_progress: "En cours" },
};

const en: Content = {
  meta: {
    title: "Portfolio | Frontend React & Next.js Developer",
    description: "Frontend Developer specializing in React, TypeScript, and high-performance interfaces. Explore my projects and technical expertise.",
    keywords: "React, TypeScript, Frontend, Next.js, Portfolio, Web Developer, Remote",
  },
  nav: { home: "Home", projects: "Projects", about: "About", contact: "Contact" },
  hero: {
    title: "Frontend React & Next.js Developer",
    subtitle: "I build performant, accessible, and maintainable web interfaces using React, TypeScript, and Next.js.",
    cta_primary: "View my projects",
    cta_secondary: "Get in touch",
  },
  projects_section: {
    title: "Recent Projects",
    subtitle: "A selection of my recent frontend development work.",
    view_all: "View all projects",
  },
  projects: {
    title: "My Projects",
    subtitle: "A curated selection of my recent frontend development work.",
    no_projects: "No projects yet.",
    slug_title: "Context & Implementation",
    image: "Screenshot",
  },
  about: {
    title: "About Me",
    name: "Heïdi Al Ihmid Jeremia",
    about_title: "Who am I?",
    subtitle: "Frontend developer focused on results and user experience.",
    bio: "Frontend developer driven by crafting modern, intuitive, and user-centered interfaces. I work primarily with React and TypeScript, with a strong focus on SaaS applications, productivity tools, and interactive systems.\n\nI prioritize clean architecture, accessibility, and smooth interactions — because a great product should feel as good as it looks.",
    availability: "Immediately available for full-time remote roles or freelance missions.",
    availability_title: "Availability",
    location: "Madagascar | GMT+3",
    location_title: "Location",
    languages: "French (Native) | English (Fluent)",
    languages_title: "Languages",
    skills_title: "Technical Skills",
    experience_title: "Professional Experience",
    cta_title: "Let's work together",
    cta_desc: "Have a project or an open role? Let's discuss how I can contribute to your team.",
  },
  contact: {
    title: "Contact",
    subtitle: "Have a project or an open role?\n\nLet's discuss how I can contribute to your team.",
    direct_label: "Direct Contact",
    direct_email: "Click to email me",
    networks_label: "Networks",
    form_name_label: "Name",
    form_name_placeholder: "John Doe",
    form_email_label: "Email",
    form_email_placeholder: "john@example.com",
    form_message_label: "Message",
    form_message_placeholder: "Hi, I'm interested in your profile...",
    send_button: "Send message",
    sending_state: "Sending...",
    success_title: "Sent!",
    success_message: "Thank you! I'll get back to you as soon as possible.",
    error_message: "An error occurred. Please try again.",
  },
  footer: { all_rights: "All rights reserved", github: "GitHub", linkedin: "LinkedIn" },
  buttons: {
    view_details: "View details",
    view_demo: "View demo",
    view_code: "Source code",
    download_cv: "Download my CV",
    send_message: "Send message",
    back: "Back",
    toggle_theme: "Toggle theme",
  },
  metrics: {
    lighthouse: "Lighthouse",
    features: "Key Features",
    bundle_size: "Bundle Size",
    seo_score: "SEO Score",
    accessibility: "Accessibility",
  },
  tags: { featured: "Featured Project", new: "New", in_progress: "In Progress" },
};

// export const content = { fr, en } as const;
// export type Lang = keyof typeof content;

// Helper pour récupérer le contenu selon la langue
export const getContent = (lang: Lang = "fr"): Content => content[lang];

// Hook utilitaire pour gérer la langue dans un composant client
// (à utiliser avec un Context ou localStorage pour persister le choix)
export const useContent = (lang?: Lang) => {
  const language = lang || "fr";
  return getContent(language);
};

// Remplace les exports existants par :
export const content = { fr, en } as const
export type Lang = keyof typeof content
export type Dictionary = typeof fr  // ← ajoute ça
export const getDictionary = (lang: Lang): Dictionary => content[lang] ?? content.fr