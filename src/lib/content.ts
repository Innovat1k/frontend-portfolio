// Centralized French content for portfolio pages (SEO, navigation, UI labels)
export const content = {
  // Meta & SEO
  meta: {
    title: "Portfolio | Développeur Frontend React",
    description:
      "Développeur Frontend spécialisé en React, TypeScript et interfaces performantes. Découvrez mes projets et mon expertise.",
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
  projects: {
    title: "Mes Projets",
    subtitle:
      "Une sélection de mes réalisations récentes en développement frontend.",
    no_projects: "Aucun projet pour le moment.",
    slug_title: "Contexte & Réalisation",
    image: "Capture d'écran",
  },

  // Page About (/about)
  about: {
    title: "À Propos",
    about_title: "Qui suis-je ?",
    subtitle:
      "Développeur passionné, orienté résultats et attentif à l’expérience utilisateur.",
    bio: "Je suis un développeur frontend passionné par la création d’interfaces modernes, interactives et orientées expérience utilisateur. Je travaille principalement avec React et TypeScript, avec un intérêt particulier pour les applications SaaS, les outils de productivité et les systèmes interactifs. \n\n J’accorde une attention particulière à l’architecture frontend, à l’accessibilité et à la fluidité des interactions.",
    availability:
      "Disponible immédiatement pour un CDI en remote ou des missions freelance.",
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

  // Page Contact (/contact)
  contact: {
    title: "Contact",
    subtitle:
      "Vous avez un projet ou un poste à pourvoir ? \n\n Discutons de la manière dont je peux contribuer à votre équipe.",

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
    toggle_theme: "Changer le thème",
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
