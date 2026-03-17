import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Logo } from "@once-ui-system/core";

const person: Person = {
  firstName: "Mehran",
  lastName: "Mahdavi",
  name: `Mehran Mahdavi`,
  role: "Senior Frontend Engineer",
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
  title: `${person.name} | Senior Frontend Engineer`,
  description: `Portfolio of ${person.name}, a Senior Frontend Engineer with 10+ years of experience in React, Next.js, and scalable architecture.`,
  headline: <>Building fast, scalable, and user-focused web applications</>,
  featured: {
    display: true,
    title: (
      <>
        Recent role: <strong className="ml-4">Team Lead at Forezynplan</strong>
      </>
    ),
    href: "/work/financial-forecasting-platform",
  },
  subline: (
    <>
      I'm Mehran, a Senior Frontend Engineer with 10+ years of experience crafting high-performance interfaces.
      I specialize in React, Angular, Micro-Frontends, and scalable architecture.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About ${person.name} | Senior Frontend Engineer`,
  description: `Learn more about ${person.name}, a Senior Frontend Engineer with a decade of experience in React, Angular, and Micro-Frontends.`,
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
        Mehran is a Senior Frontend Engineer based in Yerevan, Armenia with over a decade of experience building fast, scalable, and user-focused web applications. 
        He specializes in React, Next.js, and Angular, with expertise in Micro-Frontend and Monorepo architectures. 
        From modern CRM platforms to cross-platform mobile apps, he focuses on performance, clean code, and mentoring engineering teams.
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
        role: "Team Lead / Senior Frontend Engineer",
        achievements: [
          <>
            Led the frontend effort on a professional Angular-based financial forecasting product.
          </>,
          <>
            Improved load times by 40% using lazy loading and NgRx. Established testing standards with Jest.
          </>,
          <>
            Developed cross-platform mobile apps with React Native, achieving 95%+ code sharing between iOS and Android.
          </>
        ],
        images: [],
      },
      {
        company: "LicenseMarket",
        timeframe: "04/2024 - 01/2026",
        role: "Lead Frontend Engineer",
        achievements: [
          <>
            Built a large-scale CRM and advanced operator/admin panels designed for fast support workflows.
          </>,
          <>
            Led the migration from legacy Vue.js to React Micro-Frontends, and introduced Nx Monorepo architecture to improve build times and code sharing.
          </>,
          <>
            Contributed to real-time data synchronization using WebSocket and collaborated closely with backend engineers to improve API performance.
          </>
        ],
        images: [],
      },
      {
        company: "Staffingg",
        timeframe: "04/2023 - 08/2024",
        role: "Software Developer / Fullstack Developer",
        achievements: [
          <>
            Worked as a fullstack developer across multiple client engagements in the US and Europe.
          </>,
          <>
            Built full-stack features using React, Next.js, React Native, Express.js, and NestJS.
          </>,
          <>
            Implemented Cypress end-to-end testing, reducing production issues by 30%.
          </>
        ],
        images: [],
      },
      {
        company: "Alibaba Travel",
        timeframe: "Prior Experience",
        role: "Frontend Team Lead",
        achievements: [
          <>
            Led an 8-person frontend team in the train and bus product group for one of the largest travel companies in Iran.
          </>,
          <>
            Helped deliver user experiences for more than 1 million users using Vue.js and React in a Micro-Frontend architecture.
          </>
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
        title: "Performance & Backend",
        description: (
          <>
            Focused on Core Web Vitals, SSR/SSG, and end-to-end testing with Cypress. Practical backend experience with Node.js (NestJS, Express) and Python.
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
  title: `Blog | ${person.name}`,
  description: `Articles and thoughts on frontend architecture, performance, and modern web development by ${person.name}.`,
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects | ${person.name}`,
  description: `Showcase of enterprise-grade applications, Micro-Frontends, and scalable architectures built by ${person.name}.`,
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
