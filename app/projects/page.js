import Heading from "components/projects/Heading";
import More from "components/projects/More";
import Page from "components/utility/Page";
import Projects from "components/projects/Projects";
import React from "react";

export const metadata = {
  title: "Projects - Leonel Nguefack",
  description:
    "I love coding using tools like React, React-Native, ExpressJs, Symfony, Firebase, and many more! Here are some of my favorite projects.",
  alternates: {
    canonical: "https://ndl-pixel.vercel.app/projects"
  },
  openGraph: {
    title: "Projects - Leonel Nguefack",
    description:
      "I love coding using tools like React, React-Native, ExpressJs, Symfony, Firebase, and many more! Here are some of my favorite projects.",
    url: "https://ndl-pixel.vercel.app/projects"
  },
  twitter: {
    title: "Projects - Leonel Nguefack",
    description:
      "I love coding using tools like React, React-Native, ExpressJs, Symfony, Firebase, and many more! Here are some of my favorite projects.",
    url: "https://ndl-pixel.vercel.app/projects"
  }
};

function projects() {
  return (
    <Page
      currentPage="Projects"
      meta={{
        title: "Projects",
        desc: "I love coding using tools like React, React-Native, ExpressJs, Symfony, Firebase, and many more! Here are some of my favorite projects."
      }}
    >
      <Heading />
      <Projects />
      <More />
    </Page>
  );
}

export default projects;
