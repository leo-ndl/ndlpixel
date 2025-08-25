import { kebabCase } from "@/utils/utils";

const projects = [
  {
    id: 0,
    title: "Sensai",
    desc: "Learn coding anywhere, with funny and interactive course on your phone",
    img: `${process.env.NEXT_PUBLIC_BASE_URL}static/projects/sensai.jpg`,
    link: "https://sensai-playtolearn.com/",
    tags: ["React-Native", "Firebase","MongoDB", "Javascript", "ExpressJs", "CI/CD", "Git"]
  },
  {
    id: 1,
    title: "Soleaspay ⛔",
    desc: "Simplify your transactions in total security with SoleasPay, your trusted payment aggregator and ally for efficient, transparent financial management.",
    img: `${process.env.NEXT_PUBLIC_BASE_URL}static/projects/soleaspay.png`,
    link: "https://soleaspay.com/",
    tags: [
      "React",
      "NextJS",
      "Symfony",
      "HTML",
      "CSS",
      "Javascript"
    ]
  },
  {
    id: 2,
    title: "Tchopify - Food order",
    desc: "A complete Food order web app like uber eat, with 3 parts admin, merchant and markeplace",
    img: `${process.env.NEXT_PUBLIC_BASE_URL}static/projects/tchopify.png`,
    github: "https://github.com/leo-ndl/tchopify-restaurant-react",
    tags: ["React", "Javascript", "Redux", "Firebase", "GoogleMap"]
  },
  {
    id: 6,
    title: "Payment Button Plugin ⛔",
    desc: "Plugin to make easy the implementation of payment buttons in a website",
    img: `${process.env.NEXT_PUBLIC_BASE_URL}static/projects/plugin.png`,
    link: "https://app.soleaspay.com",
    tags: [
      "React",
      "Javascript",
      "HTML",
      "CSS",
    ]
  },
  {
    id: 7,
    title: "BSquare",
    desc: "Casual game, collect the balls, break the bricks and save the pets.",
    img: `${process.env.NEXT_PUBLIC_BASE_URL}static/projects/bsquare.jpg`,
    tags: [
      "React Native",
      "Javascript",
      "React Native Game Engine",
      "Firebase",
    ]
  },
  {
    id: 8,
    title: "Speexel",
    desc: "Learn English by playing a game where all real-life conversation scenarios are simulated by an AI.",
    img: `${process.env.NEXT_PUBLIC_BASE_URL}static/projects/speexel.gif`,
    tags: ["React Native", "React Native Game Engine", "Firebase", "NodeJs", "ChatGPT"]
  },
  {
    id: 3,
    title: "Kontakter ⛔",
    desc: "Fullstack React Dev on a messenger app to help company's departments to communicate together.",
    img: `${process.env.NEXT_PUBLIC_BASE_URL}static/projects/tcm.png`,
    tags: ["React Native", "Symfony", "RTC", "Gitlab"]
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
  project.tags.forEach(tag => !allTags.includes(tag) && allTags.push(tag));
});

export const allKebabTags = allTags.map(tag => kebabCase(tag));

export default projects;
