import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Logo } from "@once-ui-system/core";

const person: Person = {
  firstName: "Mehran",
  lastName: "Mahdavi",
  name: `Mehran Mahdavi`,
  role: "Frontend Engineer",
  avatar: "/images/avatar.jpg",
  email: "mahdavi2it@gmail.com",
  location: "Asia/Yerevan", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Persian"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.name}'s Newsletter</>,
  description: (
    <>
      I occasionally write about frontend architecture, performance optimization, and the
      intersection of clean code and exceptional user experience.
    </>
  ),
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/mahdavi2it",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/mehran-mahdavi",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building fast, scalable, and user-friendly web applications</>,
  featured: {
    display: true,
    title: (
      <>
        Recent achievement: <strong className="ml-4">Micro-Frontend Architecture</strong>
      </>
    ),
    href: "/work",
  },
  subline: (
    <>
      I'm Mehran, a Senior Frontend Engineer with 10+ years of experience crafting high-performance interfaces.
      I specialize in React, Next.js, and scalable architecture.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Mehran is a Yerevan-based Frontend Engineer with over a decade of experience creating fast, user-friendly applications. 
        His work spans enterprise-grade platforms, scalable Micro-Frontend architectures, and the convergence of clean code with exceptional digital experiences.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Forezynplan",
        timeframe: "01/2026 - Present",
        role: "Senior Frontend Engineer",
        achievements: [
          <>
            Designed and built scalable Angular applications, reducing load times by 40% using lazy loading and NgRx.
          </>,
          <>
            Developed cross-platform mobile apps with React Native, achieving 95%+ code sharing between iOS and Android.
          </>,
        ],
        images: [],
      },
      {
        company: "LicenseMarket",
        timeframe: "04/2024 - 01/2026",
        role: "Lead Frontend Engineer",
        achievements: [
          <>
            Spearheaded migration from legacy Vue.js to React Micro-Frontends, and introduced Nx Monorepo architecture to reduce build times.
          </>,
          <>
            Mentored the frontend team in adopting design systems and collaborated with backend engineers to optimize data flow.
          </>,
        ],
        images: [],
      },
      {
        company: "SQUAD",
        timeframe: "12/2024 - 11/2025",
        role: "Lead Frontend Engineer",
        achievements: [
          <>
            Built enterprise-grade frontend from scratch using Next.js and React, achieving exceptional top Lighthouse scores via SSR/SSG.
          </>,
          <>
            Managed and mentored a cross-functional team of 5 engineers, establishing frontend monitoring practices with Prometheus and Grafana.
          </>,
        ],
        images: [],
      },
      {
        company: "Staffingg",
        timeframe: "04/2023 - 08/2024",
        role: "Software Developer",
        achievements: [
          <>
            Built full-stack features using React, Next.js, React Native, and Express.js, delivering cross-platform web and mobile solutions.
          </>,
          <>
            Designed reusable component systems with TypeScript and Tailwind CSS, and implemented E2E testing achieving a 30% reduction in production issues.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "University of Applied Science and Technology",
        description: <>Bachelor's Degree in Software Development (2017).</>,
      },
      {
        name: "Coursera / Meta / IBM",
        description: <>Certifications in Front-End Development, Machine Learning, and Deep Learning.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Frontend & Architecture",
        description: (
          <>
            Expert in React.js, Next.js, Angular, Vue.js, and React Native. Experienced in building Micro-Frontends, Nx Monorepos, and component-driven Design Systems.
          </>
        ),
        images: [],
      },
      {
        title: "Performance & Testing",
        description: (
          <>
            Focused on Core Web Vitals, SSR, SSG, and lazy loading. Strong background in testing with Jest, Cypress, and React Testing Library.
          </>
        ),
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Development projects by ${person.name}`,
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
