import { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "cmd-pal",
    title: "CommandPal",
    description:
      "Palette de commandes interactive, avec navigation clavier, et interface responsive.",
    longDescription:
      "CommandPal est une palette de commandes moderne inspirée des applications SaaS orientées productivité. Développée avec React et TypeScript, elle propose une navigation rapide au clavier, une recherche floue de commandes, des actions catégorisées, une interface overlay responsive et des animations CSS fluides. Le projet met l’accent sur l’accessibilité, le design d’interaction et l’expérience utilisateur orientée outils modernes.",
    tags: ["React", "TypeScript", "Tailwind", "UX Clavier", "Responsive UI"],
    metrics: [
      { label: "Navigation", value: "Clavier d'abord" },
      { label: "Recherche", value: "Filtrage instantané" },
    ],
    demoUrl: "https://command-pal-two.vercel.app",
    repoUrl: "https://github.com/Innovat1k/command-pal",
    featured: true,
  },
  {
    slug: "synapse",
    title: "Synapse",
    description:
      "Plateforme de suivi de compétences avec dashboard analytique, et intégration Supabase.",
    longDescription:
      "Synapse est une plateforme orientée productivité conçue pour gérer et suivre l’évolution des compétences et des activités associées. Les utilisateurs peuvent créer, organiser et relier leurs compétences, enregistrer des activités quotidiennes ou hebdomadaires, visualiser les relations entre compétences et analyser leur progression via un dashboard interactif. L’application intègre Supabase pour l’authentification, la gestion de base de données et les opérations CRUD sécurisées.",
    tags: [
      "React",
      "Supabase",
      "Dashboard",
      "Analytique",
      "CRUD",
      "Visualisation",
    ],
    metrics: [
      { label: "Visualisation", value: "Compétences liées" },
      { label: "Suivi", value: "Activités temps réel" },
    ],
    demoUrl: "https://synapse-alpha-nine.vercel.app",
    repoUrl: "https://github.com/Innovat1k/synapse",
    featured: true,
  },
  {
    slug: "wisecho",
    title: "Wisecho",
    description:
      "Générateur de citation avec filtres, favoris, et personnalisation de thème.",
    longDescription:
      "Wisecho est une application dynamique de génération de citations développée avec React et des outils de gestion d’état afin d’offrir une expérience utilisateur fluide et personnalisable. Les utilisateurs peuvent générer des citations aléatoires, filtrer les résultats par catégorie, sauvegarder leurs favoris localement, gérer les citations enregistrées, personnaliser le thème de l’application et conserver les données directement dans le navigateur. Le projet met l’accent sur les interactions UI propres et la gestion efficace de l’état frontend.",
    tags: ["React", "API", "Stockage Local", "Theming"],
    metrics: [
      { label: "Filtrage", value: "Citations dynamiques" },
      { label: "Stockage", value: "Persistance locale" },
    ],
    demoUrl: "https://wisecho.vercel.app",
    repoUrl: "https://github.com/Innovat1k/wisecho",
    featured: false,
  },
];
