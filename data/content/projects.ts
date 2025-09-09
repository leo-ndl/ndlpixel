import { kebabCase } from "@/utils/utils";

const projects = [
  {
    id: 0,
    title: "Sensai — Mobile Learning App ( React - Native)",
    desc: "<strong>Role</strong>: Lead dev (React-Native)<br/><strong>Problem</strong>: Low engagement with existing lesson format<br/><strong>Solution</strong>: Gamified lessons + push reminders; rebuilt onboarding (Firebase Auth + Firestore caching)<br/><strong>Result</strong>: Increased DAU by +30% after redesign; lowered crash rate to -10%.<br/>",
    img: `${process.env.NEXT_PUBLIC_BASE_URL}static/projects/sensai.jpg`,
    link: "https://play.google.com/store/apps/details?id=com.ndlstudio.sensai",
    tags: ["React Native", "Redux Toolkit", "Firebase", "MongoDB", "Javascript", "Express.js", "CI/CD", "Git", "Node.js", "Github Actions"]
  },
  {
    id: 1,
    title: "Soleaspay - Saas Payment Aggregator",
    desc: "<strong>Role</strong>: Front end dev (via Mysoleas)<br/><strong>Problem</strong>: Low convertion of the landing and no existing dashboard for merchant and developer<br/><strong>Solution</strong>: Rebuilt the landing page; Improve the SEO; Develop a web dashboard for merchants, professionals, developers.<br/><strong>Result</strong>: Increased MAU by +80%;<br/>",
    img: `${process.env.NEXT_PUBLIC_BASE_URL}static/projects/soleaspay.png`,
    link: "https://soleaspay.com/",
    tags: [
      "React.js",
      "Next.js",
      "Redux",
      "JWT",
      "Tailwind CSS",
      "BootStrap",
      "HTML",
      "Javascript",
    ]
  },
    {
    id: 3,
    title: "IKEA Kontakter (Internal Messaging App)",
    desc: "<strong>Role</strong>: React Native Developer (via TCM)<br/><strong>Overview</strong>: Worked as part of a TCM team on IKEA Kontakter, an internal communication and collaboration app designed for employees. The app improves in-house communication across teams and departments by centralizing messages, announcements, and contacts.<br/><strong>Contributions</strong>: Implemented core messaging and notification features with React Native; Implemented UI by creating components from Zeplin designs; Optimized app performance (faster loading lists, smoother animations for navigation)<br/>",
    img: `${process.env.NEXT_PUBLIC_BASE_URL}static/projects/tcm.png`,
    tags: ["React Native", "Redux", "REST APIs", "Web RTC", "Firebase Cloud Messaging", "Gitlab"],
    link: "https://www.ikea.com/global/en/stories/ikea-around-the-world/more-than-just-a-conversation-170103/"
  },
  {
    id: 6,
    title: "Soleaspay - Web Payment Plugin ",
    desc: "<strong>Role</strong>: Full-stack Developer (Lead on plugin architecture)<br/><strong>Overview</strong>: As part of the Soleaspay platform, I developed a web plugin that allows website owners to easily add customizable payment buttons without deep technical knowledge. The goal was to lower the barrier to integrating secure online payments.<br/><strong>My Contributions</strong>: Developed a lightweight JavaScript SDK with React wrapper for seamless integration; <br/>Built reusable UI components (buttons, modals) with responsive design; <br/> Optimized API calls to Soleaspay backend for speed and reliability; <br/>Added developer-friendly documentation and examples;",
    img: `${process.env.NEXT_PUBLIC_BASE_URL}static/projects/plugin.png`,
    link: "https://app.soleaspay.com",
    tags: [
      "React.js",
      "Javascript",
      "HTML",
      "CSS",
    ]
  },

  {
    id: 4,
    title: "Robin ⛔",
    desc: "Fullstack dev on a project Robin.",
    img: `${process.env.NEXT_PUBLIC_BASE_URL}static/projects/tcm.png`,
    tags: ["Vuejs", "Symfony", "ElasticSearch", "Docker", "Gitlab"]
  },
  {
    id: 5,
    title: "Atlas ⛔",
    desc: "Fullstack dev on a project Atlas",
    img: `${process.env.NEXT_PUBLIC_BASE_URL}static/projects/tcm.png`,
    tags: ["Vuejs", "Symfony", "HTML"]
  },
  
];

export const allTags = [];

projects.forEach(project => {
  project.tags.forEach((tag: any) => !allTags.includes(tag) && allTags.push(tag));
});

export const allKebabTags = allTags.map(tag => kebabCase(tag));

export default projects;
