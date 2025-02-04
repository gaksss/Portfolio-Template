import { color } from "framer-motion";
import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  celinefougerouse,
  mountain,
  drumpad,
  quizz,
  zelda,
  space,
  coverhunt,
  dcc,
  kelhel,
  microverse,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "A propos",
  },
  {
    id: "projects",
    title: "Projets",
  },
  // {
  //   id: 'contact',
  //   title: 'Contact',
  // },
];

const services = [
  {
    title: "Frontend Developer",
    icon: frontend,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  // {
  //   title: 'UI/UX Design',
  //   icon: ux,
  // },
  // {
  //   title: 'Software Prototyping',
  //   icon: prototyping,
  // },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  // {
  //   name: 'TypeScript',
  //   icon: typescript,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: 'Redux Toolkit',
  //   icon: redux,
  // },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  // {
  //   name: 'Rails',
  //   icon: rubyrails,
  // },
  // {
  //   name: 'graphql',
  //   icon: graphql,
  // },
  // {
  //   name: 'postgresql',
  //   icon: postgresql,
  // },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  // {
  //   name: 'docker',
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Missions d'intérim",
    company_name: "Compagnies differentes",
    icon: coverhunt,
    iconBg: "#333333",
    date: "2022 - Feb 2024",
  },
  {
    title: "Job étudiant grande surface",
    company_name: "Leclerc",
    icon: microverse,
    iconBg: "#333333",
    date: "Aout 2021 - Septembre 2021",
  },
  {
    title: "Vendeur prêt à porter",
    company_name: "Uniqlo",
    icon: kelhel,
    iconBg: "#333333",
    date: "Septembre 2022 - Decembre 2022",
  },
  {
    title: "Vendeur prêt à porter",
    company_name: "Chaussea",
    icon: dcc,
    iconBg: "#333333",
    date: "Juillet 2024 - Aout 2024",
  },
  {
    title: "Developpeur web",
    company_name: "Freelance",
    icon: dcc,
    iconBg: "#333333",
    date: "Juin 2024 - Septembre 2024",
  },
];

const projects = [
  {
    id: "project-1",
    name: "CelineDiet",
    description: "Un site pour une diététicienne.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: celinefougerouse,
    repo: "https://github.com/gaksss/CelineDiet",
    demo: "https://celinefougerouse.fr/",
  },
  {
    id: "project-2",
    name: "The mountain",
    description: "Un site qui m'a appris le responsive.",
    tags: [],
    image: mountain,
    repo: "https://github.com/gaksss/TP_COMBAT",
    // demo: '#',
  },
  {
    id: "project-3",
    name: "Drumpad",
    description: "Un drumpad pour faire des beats",
    tags: [
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: drumpad,
    repo: "https://github.com/gaksss/Vanilla-Front-Drumpad",
    demo: "#",
  },
  {
    id: "project-4",
    name: "Le squizzie",
    description: `Un site de quizz sur le chanteur Renaud.`,
    tags: [
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: quizz,
    repo: "https://github.com/hamzael69/Quizz-POO",
    demo: "#",
  },
  {
    id: "project-5",
    name: "Zelda",
    description:
      "Un site promotionel pour un jeu The Legend of Zelda.",
    tags: [
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: zelda,
    repo: "https://github.com/gaksss/TP-Zelda-vide",
    demo: "#",
  },
];

export { services, technologies, experiences, projects };
