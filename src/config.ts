export const siteConfig = {
  name: "David Sabalete Rodríguez",
  title: "Senior Full Stack Developer",
  description:
    "Portfolio website of David Sabalete Rodríguez, Senior Full Stack Developer specializing in Vue.js, Nuxt.js and performant web applications.",
  accentColor: "#1d4ed8",
  social: {
    email: "info@davidsabalete.com",
    linkedin: "https://linkedin.com/in/dsabalete",
    github: "https://github.com/dsabalete",
  },
  aboutMe:
    "Senior Full Stack Developer with 20+ years building performant, accessible web applications using Vue.js, Nuxt.js, and modern JavaScript. I specialize in translating complex requirements into elegant, user-centered interfaces that scale. I have reduced initial load times by up to 45%, helped teams reach 90+ Lighthouse performance scores, increased test coverage from 45% to over 80%, and created reusable component libraries adopted across multiple teams.",
  skills: [
    "Vue.js", "Nuxt.js", "React", "Svelte", "TypeScript", "Node.js", "AWS",
    "Testing", "Web Accessibility", "Technical Leadership",
  ],
  projects: [
    { name: "Gym Tracker", description: "Workout tracking application built with Nuxt 4, Vue 3, TailwindCSS and Firebase. Performance: 98, Accessibility: 100.", link: "https://github.com/dsabalete/gym-app", skills: ["Nuxt 4", "Vue 3", "TailwindCSS", "Firebase"] },
    { name: "GOAT Notes (AI)", description: "AI-powered note-taking application built with Next.js, Supabase and Prisma. Performance: 92, Accessibility: 95.", link: "https://github.com/dsabalete/fcc-goat-notes", skills: ["Next.js", "Supabase", "Prisma"] },
    { name: "Tercer Espai", description: "CMS-driven events platform built with Nuxt.js, Tailwind and Supabase.", link: "", skills: ["Nuxt.js", "Tailwind", "Supabase"] },
    { name: "Foto Uploader", description: "Serverless image upload application.", link: "", skills: ["Vanilla JS", "CSS", "Netlify Functions"] },
    { name: "QR Code Generator", description: "Serverless QR code generation tool.", link: "", skills: ["Astro", "Cloudflare Workers"] },
    { name: "Space Tourism", description: "Responsive static website for a space tourism company.", link: "", skills: ["HTML", "CSS", "JavaScript"] },
    { name: "Creu Alta Basket", description: "CMS website with a Vue.js registration application.", link: "", skills: ["Drupal", "Vue.js"] },
    { name: "Kiloday Calculator", description: "Alternative birthday calculator.", link: "", skills: ["Vue", "Vite", "Pinia"] },
    { name: "My 1 RM", description: "One-rep max calculator for training sessions.", link: "", skills: ["Nuxt", "Netlify"] },
    { name: "System Monitor", description: "System resource monitoring application.", link: "https://github.com/dsabalete/system-monitor", skills: ["Node.js", "Express", "Vanilla JS"] },
  ],
  experience: [
    {
      company: "Allianz Technology", title: "Senior Frontend Developer", dateRange: "Apr 2026 - Jul 2026",
      bullets: [
        "Developed Svelte-based frontend modules for Meine Allianz, serving 2M+ insurance customers across Germany.",
        "Reduced the feature delivery cycle by 30% through improved component architecture and code review processes in a cross-functional international team.",
        "Used Claude AI as a coding accelerator to implement features and generate Vitest unit tests, achieving 85%+ coverage on critical user flows while shipping changes 2x faster.",
      ],
    },
    {
      company: "LoveToKnow Media Spain", title: "Senior Full Stack Developer", dateRange: "Nov 2019 - Jan 2026",
      bullets: [
        "Led frontend architecture for YourDictionary.com (45M+ monthly visitors) using Vue.js, Nuxt.js and an AWS serverless stack with Lambda, API Gateway and DynamoDB.",
        "Improved Lighthouse performance from 55 to 92+, reducing Largest Contentful Paint by 60% through code splitting, lazy loading and image optimization.",
        "Built a shared library of 40+ reusable Vue components adopted by 3 product teams.",
        "Increased automated unit test coverage from 30% to 78%, catching 95% of regressions before deployment.",
        "Built a Cypress E2E test suite covering 40+ critical user journeys, reducing manual QA regression time by 70%.",
        "Drove the Nuxt 2 to Nuxt 3 migration across 5 micro-frontends with zero downtime.",
        "Championed CodeRabbitAI for automated PR reviews, reducing review turnaround time by 40%.",
      ],
    },
    {
      company: "EDREAMS Odigeo", title: "Senior Frontend Developer", dateRange: "Apr 2018 - Oct 2019",
      bullets: [
        "Owned frontend quality for a high-traffic travel booking platform processing 10M+ searches daily.",
        "Built an automated testing pipeline with Karma, Gherkin and Jenkins, reducing production bugs by 40%.",
        "Maintained 85%+ test coverage across Backbone and React codebases.",
        "Led A/B testing framework implementation, shipping 20+ experiments that improved conversion by 12%.",
        "Introduced BrowserStack visual regression testing and reviewed code across 6 frontend teams.",
      ],
    },
    {
      company: "CAPITOLE CONSULTING", title: "Senior Frontend Developer & Test Automation Engineer", dateRange: "Jul 2016 - Apr 2018",
      bullets: [
        "Developed interactive booking interfaces for a major travel agency platform, reducing page load time by 35%.",
        "Designed a TestComplete and Jenkins test suite that cut pharmaceutical compliance regression testing from 3 days to 4 hours, achieving 92% automation coverage across 200+ test cases.",
        "Architected the migration of a legacy banking application to a responsive AngularJS SPA, reducing page load times by 50% and enabling mobile access for field agents.",
      ],
    },
    {
      company: "FIATC Seguros", title: "Web Developer", dateRange: "Jun 2003 - Jul 2016",
      bullets: [
        "Designed and built the online insurance sales platform handling 15K+ policies per year across travel assistance and motor insurance.",
        "Streamlined the quote-to-purchase flow, reducing drop-off by 25% and transaction time from 8 to 3 minutes.",
      ],
    },
    {
      company: "Institut Català de Tecnologia", title: "Web Developer", dateRange: "Jun 2001 - May 2003",
      bullets: [
        "Maintained the public web portal and 3 internal web applications, ensuring 99.5% uptime.",
        "Built an XML/XSLT publishing pipeline reducing content publication time from 2 days to 4 hours.",
      ],
    },
    {
      company: "Secretariaplus.com", title: "Web Developer", dateRange: "Apr 2000 - May 2001",
      bullets: [
        "Developed and maintained an ASP-based web application with SQL Server managing 10K+ client records.",
        "Built data-entry interfaces that reduced processing time by 40% for administrative staff.",
      ],
    },
  ],
  education: [
    { school: "Coursera", degree: "Google Data Analyst Certificate", dateRange: "Nov 2022 - Jun 2023", achievements: [] },
    { school: "Institut Català de Tecnologia", degree: "E-business Technologies (Master's)", dateRange: "Oct 2001 - May 2002", achievements: [] },
    { school: "Universitat Politècnica de Catalunya", degree: "Industrial Technical Engineering (Electronic specialty)", dateRange: "Sep 1995 - Jun 1999", achievements: [] },
  ],
  certifications: [
    "Full Stack Open Containers — MOOC.fi", "Continuous Integration — MOOC.fi", "React Native — University of Helsinki", "GraphQL — University of Helsinki", "TypeScript — University of Helsinki", "Mastering TypeScript 2024 — Udemy", "Google Data Analytics — Google/Credly", "Test Driven Development (JavaScript & Jest) — Udemy", "Intermediate Python — DataCamp", "Introduction to Python — DataCamp", "Python Data Science Toolbox — DataCamp", "The Software Architect Code — edX", "Bootstrap — edX", "Linux Foundation LFS101x (Intro to Linux) — edX", "HTML5 Part 1: Coding Essentials & Best Practices — edX", "HTML5 Part 2: Advanced Techniques & Best Practices — edX", "Programación Javascript — MiriadaX", "Cloud Services (HTML5, JavaScript, Node.js) — MiriadaX", "HTML5 CSS Javascript — MiriadaX", "Agilidad y Lean — MiriadaX", "Deutsch Lernen Nicos Weg A1 — DW",
  ],
  languages: ["Spanish — Native", "Catalan — Native", "English — Professional proficiency", "German — Basic (A1)"],
  interests: ["Building side projects to explore Vue, Nuxt, Astro and AI integration", "Strength training and fitness", "Reading literature and technical books", "Camping and outdoor activities"],
};
