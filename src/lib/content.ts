// Centralized French content for portfolio pages (SEO, navigation, UI labels)
export const content = {
  // Meta & SEO
  meta: {
    title: "Portfolio | Développeur Frontend React",
    description:
      "Développeur Frontend spécialisé en React, TypeScript et interfaces performantes. Découvrez mes projets et mon expertise.",
    author: "Ton Nom",
    keywords:
      "React, TypeScript, Frontend, Next.js, Portfolio, Développeur Web",
  },

  // Navigation
  nav: {
    home: "Accueil",
    projects: "Projets",
    about: "À propos",
    contact: "Contact",
  },

  // Hero Section
  hero: {
    title: "Développeur Frontend React & Next.js",
    subtitle:
      "Je conçois des interfaces web performantes, accessibles et maintenables avec React, TypeScript et Next.js.",
    cta_primary: "Voir mes projets",
    cta_secondary: "Me contacter",
  },

  // Section Projets (Homepage)
  projects_section: {
    title: "Projets Récents",
    subtitle: "Quelques-unes de mes réalisations en développement frontend.",
    view_all: "Voir tous les projets",
  },

  // Page Projets (/projects)
  projects_page: {
    title: "Mes Projets",
    subtitle:
      "Une sélection de mes réalisations récentes en développement frontend.",
    no_projects: "Aucun projet pour le moment.",
    slug_title: "Contexte & Réalisation",
    image: "Capture d'écran",
  },

  // Page About (/about)
  about_page: {
    title: "À Propos",
    subtitle:
      "Développeur passionné, orienté résultats et expérience utilisateur.",
    bio: "Je suis un développeur frontend passionné par la création d’interfaces modernes, interactives et orientées expérience utilisateur. Je travaille principalement avec React et TypeScript, avec un intérêt particulier pour les applications SaaS, les outils de productivité et les systèmes interactifs. \n\n J’accorde une attention particulière à l’architecture frontend, à l’accessibilité et à la fluidité des interactions.",
    availability:
      "Disponible immédiatement pour CDI Remote ou missions Freelance.",
    location: "Madagascar (Remote OK) | GMT+3",
    languages: "Français (Natif) | Anglais (Courant)",
    skills_title: "Compétences Techniques",
    experience_title: "Parcours Professionnel",
    cta_title: "Travaillons ensemble",
    cta_desc: "Vous avez un projet ou un poste à pourvoir ? Discutons-en.",
  },

  // Page Contact (/contact)
  contact_page: {
    title: "Contact",
    subtitle: "Formulaire à implémenter (J5)...",
    placeholder: "Cette page sera bientôt disponible.",
  },

  // Footer
  footer: {
    all_rights: "Tous droits réservés",
    github: "GitHub",
    linkedin: "LinkedIn",
  },

  // Buttons & Actions
  buttons: {
    view_details: "Voir le détail",
    view_demo: "Voir la démo",
    view_code: "Code source",
    download_cv: "Télécharger mon CV",
    send_message: "Envoyer le message",
    back: "Retour",
  },

  // Metrics & Labels
  metrics: {
    lighthouse: "Lighthouse",
    features: "Fonctionnalités clés",
    bundle_size: "Taille du Bundle",
    seo_score: "SEO Score",
    accessibility: "Accessibilité",
  },

  // Tags and Categories
  tags: {
    featured: "Projet Phare",
    new: "Nouveau",
    in_progress: "En cours",
  },
} as const;

export type Content = typeof content;
