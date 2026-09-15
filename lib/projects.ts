export type Project = {
  name: string;
  date: string;
  description: string;
  stack: string;
  linkLabel: string;
  linkHref: string;
};

export const projects: Project[] = [
  {
    name: "ShrunkPy",
    date: "Sep 2026",
    description:
      "A browser-based image and PDF compressor, resizer, and converter. Everything runs client-side through the Canvas API and pdf-lib, so nothing gets uploaded and there's no account to make.",
    stack: "JavaScript, Canvas API, pdf-lib",
    linkLabel: "Live at adnan-zhaikh.github.io/ShrunkPy",
    linkHref: "https://adnan-zhaikh.github.io/ShrunkPy/",
  },
  {
    name: "Course Tracker & Certificate Generator",
    date: "Aug 2026",
    description:
      "A full-stack app for tracking course progress and generating completion certificates. Built with Next.js on top of PostgreSQL and deployed on Vercel.",
    stack: "TypeScript, Next.js, PostgreSQL",
    linkLabel: "Live at course-tracker-web.vercel.app",
    linkHref: "https://course-tracker-web.vercel.app",
  },
  {
    name: "E-commerce database",
    date: "Apr 2026",
    description:
      "A relational database for an e-commerce store, built on PostgreSQL through Neon. Mostly a schema design exercise: joins, aggregations, CTEs, and indexing done properly instead of just working.",
    stack: "PostgreSQL, SQL",
    linkLabel: "Source on GitHub",
    linkHref: "https://github.com/Adnan-Zhaikh/ecommerce-db",
  },
  {
    name: "Expense Tracker",
    date: "Aug 2026",
    description:
      "A small command-line tool for logging and categorizing personal expenses.",
    stack: "Python",
    linkLabel: "Source on GitHub",
    linkHref: "https://github.com/Adnan-Zhaikh/Expense-Tracker",
  },
  {
    name: "College coursework",
    date: "Ongoing",
    description:
      "A running collection of Java projects from university coursework: OOP design, data structures, and algorithm implementation.",
    stack: "Java",
    linkLabel: "Source on GitHub",
    linkHref: "https://github.com/Adnan-Zhaikh/college-pr",
  },
];
