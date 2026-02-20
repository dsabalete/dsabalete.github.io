export const siteConfig = {
  name: "David Sabalete",
  title: "Senior Software Engineer",
  description: "Portfolio website of David Sabalete",
  accentColor: "#1d4ed8",
  social: {
    email: "dsabalete@gmail.com",
    linkedin: "https://linkedin.com/in/dsabalete",
    twitter: "https://x.com/dsabalete",
    github: "https://github.com/dsabalete",
  },
  aboutMe:
    `I am an experienced Senior Fullstack Developer specializing in Vue.js and Nuxt.js, delivering high-quality, performant, and thoroughly tested code for clients worldwide. My expertise in modern JavaScript frameworks ensures scalable and maintainable web applications.
I focus on solving complex problems, not just technical challenges but creating exceptional user experiences that are both visually stunning and fully accessible.By combining powerful tools with deep user understanding, I bring interfaces to life that are not only beautiful but also inclusive and functional.
I am a collaborative team player who thrives in environments where we can learn from each other and grow together.As a fast learner with a growth mindset, I constantly seek new challenges and opportunities to expand my skills as a fullstack developer, staying current with emerging technologies and best practices.
Currently available for remote international projects in frontend and fullstack technologies.`,
  skills: ["Javascript", "Vue.js", "React", "Node.js", "AWS", "Docker"],
  projects: [
    {
      image: "/gym_tracker.png",
      name: "Gym Tracker",
      description:
        "A modern web application for tracking gym workouts, built with Nuxt 4, Vue 3, TailwindCSS, and Firebase",
      link: "https://github.com/dsabalete/gym-app",
      skills: ["nuxt", "tailwind", "firebase"]
    },
    {
      image: "/tercerespai.png",
      name: "Tercer Espai website",
      description:
        "Tercer Espai is a web built with Nuxt.js, Tailwind and Supabase. It allows users to know about the events organized by the organization Tercer Espai, get in touch with the organization and get the latest news.",
      link: "",
      skills: ["nuxt", "tailwind", "supabase"]
    },
    {
      image: "/system-monitor.png",
      name: "System Monitor",
      description:
        "System Monitor is a web application for monitoring system resources, built with Node, Express and vanilla javascript.",
      link: "https://github.com/dsabalete/system-monitor",
      skills: ["node", "express", "vanillajs"]
    },
    {
      image: "/goat-notes.png",
      name: "Goat Notes taking app with AI",
      description:
        "GOAT Notes is a modern note-taking application built with Next.js, Supabase, and Prisma. It allows users to create, edit, delete, and search notes, with additional features like AI-powered insights and a responsive design.",
      link: "https://github.com/dsabalete/fcc-goat-notes",
      skills: ["next", "supabase", "prisma"]
    },
    /*
    {
      image: "/qrcode.png",
      name: "QR Code Generator",
      description:
        "Webapp tool for generating QR Codes from valid URLs. Static Astro website with Cloudfare Worker to generate the image.",
      link: "https://github.com/dsabalete/qr-code",
      skills: ["astro", "cloudflare"]
    },
    {
      image: "/space-tourism.png",
      name: "Space tourism",
      description:
        "A website for a space tourism company. It is a static website with responsive design, plain CSS and a bit of vanilla javascript.",
      link: "https://github.com/dsabalete/space-tourism",
      skills: ["html", "css", "javascript"]
    },
    {
      image: "https://dsabalete.github.io/images/creualta.png",
      name: "Creu Alta website",
      description: `Creu Alta Sabadell Basket website. It is running on Drupal as CMS an it has a VueJS app to register players during summer and christmas campus.`,
      link: "",
      skills: ["drupal", "vue"]
    },
    {
      image: "/kiloday.png",
      name: "Kiloday calculator",
      description: "Alternative birthday calculator app made with Vue, Vite and Pinia",
      link: "https://github.com/dsabalete/kiloday",
      skills: ["vue", "vite", "pinia"]
    },
    {
      image: "https://dsabalete.github.io/images/my-1-rm.png",
      name: "My 1 RM website",
      description: `App that calculates the 1RM of any training session. Made with Vuejs and hosted in Netlify.`,
      link: "https://github.com/dsabalete/my-1-rm",
      skills: ["nuxt", "netlify"]
    },
    {
      image: "https://dsabalete.github.io/images/vue-twitter-clone.png",
      name: "Vue twitter clone",
      description: "App that emulates basic functionality of a Twitter app. Made with Vue and deployed on Heroku.",
      link: "https://github.com/dsabalete/vue-twitter-clone",
      skills: ["vue", "heroku"]
    },
    {
      image: "https://dsabalete.github.io/images/expensify.png",
      name: "Expensify App",
      description: "App that helps keep you track of your expenses. Made with React and Firebase.",
      link: "https://github.com/dsabalete/udemy-expensify-app",
      skills: ["react", "firebase", "heroku"]
    },
    {
      image: "https://dsabalete.github.io/images/indecision.png",
      name: "Indecision App",
      description: "Put your live in the hands of a computer. Made with React.",
      link: "https://github.com/dsabalete/udemy-indecision-app",
      skills: ["react", "heroku"]
    },
    {
      image: "https://dsabalete.github.io/images/portfolio.png",
      name: "Gridsome-Portfolio",
      description: "My Portfolio made with Gridsome and ❤️",
      link: "https://github.com/dsabalete/gridsome-portfolio",
      skills: ["gridsome"]
    },
    {
      image: "https://dsabalete.github.io/images/calculator.png",
      name: "ReactJS Calculator",
      description: `ReactJS Calculator made with React.js. It has a simple calculator with a few functions.`,
      link: "https://codepen.io/dsabalete/full/yZrxzP",
      skills: ["react", "codepen"]
    },
    {
      image: "https://dsabalete.github.io/images/drum_machine.png",
      name: "Drum machine",
      description: `React and Redux Drum machine made with React and Redux.`,
      link: "https://codepen.io/dsabalete/full/bzQEqQ",
      skills: ["react", "redux", "codepen"]
    },
    {
      image: "https://dsabalete.github.io/images/markdown.png",
      name: "Markdown previewer",
      description: `Markdown previewer made with React.js and Redux`,
      link: "https://codepen.io/dsabalete/full/daqqBQ",
      skills: ["react", "redux", "codepen", "markdown"]
    },
    {
      image: "https://dsabalete.github.io/images/pomodoro.png",
      name: "Pomodoro clock",
      description: `Pomodoro clock made with React.js and Redux`,
      link: "https://codepen.io/dsabalete/full/MLNQvQ",
      skills: ["react", "redux", "codepen"]
    },
    {
      image: "https://dsabalete.github.io/images/quote_machine.png",
      name: "Quote Machine",
      description: "Random Quote Machine using external API",
      link: "https://codepen.io/dsabalete/full/QdYLOZ",
      skills: ["react", "codepen"]
    },
    {
      image: "https://dsabalete.github.io/images/tribute_page.png",
      name: "Bruce Lee tribute page",
      description: "Simple Tribute page made with Bootstrap",
      link: "https://codepen.io/dsabalete/full/aBPxzB",
      skills: ["bootstrap", "codepen"]
    },
    {
      image: "https://dsabalete.github.io/images/weather.png",
      name: "Weather app",
      description: "Forecast Weather App using JQuery and OpenWeatherMap API",
      link: "https://codepen.io/dsabalete/full/RKvqjJ",
      skills: ["jquery", "codepen"]
    },
    {
      image: "https://dsabalete.github.io/images/wikipedia_viewer.png",
      name: "Wikipedia viewer",
      description: "Wikipedia Viewer App made with Angular and Wikipedia API",
      link: "https://codepen.io/dsabalete/full/OpRKEZ",
      skills: ["angular", "codepen", "wikipedia"]
    }
    */
  ],
  experience: [
    {
      company: "LoveToKnow Media",
      title: "Senior Software Engineer",
      dateRange: "Nov 2019 - Jan 2026",
      bullets: [
        "Frontend task with Vue.js in the YourDictionary.com team.",
        "Creation of new features, enforcing best practices and working in an agile environment in a decentralized international team.",
      ],
    },
    {
      company: "Edreams ODIGEO",
      title: "Frontend Developer",
      dateRange: "Apr 2018 – Oct 2019",
      bullets: [
        "Frontend development in Backbone, unit testing with Karma, functional testing with Gherkin on Jenkins, and Testing AB of beta versions.",
        "Created reusable components increasing development speed by 40%.",
        "Code reviews across teams including React and backend Java code.",
      ],
    },
    {
      company: "Capitole Consulting",
      title: "Frontend Developer",
      dateRange: "Oct 2017 – Apr 2018",
      bullets: [
        "Frontend development in Backbone, jQuery and Lodash for a client in the travel agency sector in Barcelona.",
      ],
    },
    {
      company: "Capitole Consulting",
      title: "Analyst Programmer",
      dateRange: "Jul 2017 – Dec 2017",
      bullets: [
        "Migration of application to responsive web format and Single Page Application (AngularJS) for a client in the banking sector in Sant Cugat del Vallès.",
      ],
    },
    {
      company: "Capitole Consulting",
      title: "Test Automation Engineer",
      dateRange: "Jan 2017 – Oct 2017",
      bullets: [
        "Implementation of automatic testing with Test Complete and Jenkins for a client in the pharmaceutical sector in Parets del Vallès.",
      ],
    },
    {
      company: "FIATC Seguros",
      title: "Web Developer & Java Programmer",
      dateRange: "Jun 2003 – Jul 2016",
      bullets: [
        "Implementation of the frontend web for charging and contracting insurance applications in travel assistance and car insurance.",
        "Java, Struts, Spring, Hibernate and IBM DB2 were the main technologies used in the development of the applications.",
      ],
    },
    {
      company: "Institut Català de Tecnologia",
      title: "Web Developer & Java Programmer",
      dateRange: "Jun 2001 – May 2003",
      bullets: [
        "Maintaining the web portal of the organization (XML + XSL + Oracle with Cocoon) and other applications (Struts).",
      ],
    },
    {
      company: "Secretariaplus",
      title: "Web Developer",
      dateRange: "Apr 2000 – May 2001",
      bullets: [
        "Web development with ASP, accessing a Microsoft SQL Server database with intensive use of HTML and JavaScript.",
      ],
    },
  ],
  education: [
    {
      school: "Coursera",
      degree: "Google Professional Certificate in Data Analytics",
      dateRange: "Dec 2022 - May 2023",
      achievements: [
        "Data Analytics Certificate",
      ],
    },
    {
      school: "Institut Català de Tecnología",
      degree: "Bachelor of Science in Computer Science",
      dateRange: "2001 -  2002",
      achievements: [
        "Master Degree in E-Business Technologies",
      ],
    },
    {
      school: "Universitat Politècnica de Catalunya",
      degree: "Degree in Industrial Technical Engineering - Electronics specialty",
      dateRange: "1995 - 2000",
      achievements: [
        "Degree in Industrial Technical Engineering - Electronics specialty",
      ],
    },
  ],
};
