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
    canonical: "https://ndlpixel.com/projects"
  },
  openGraph: {
    title: "Projects - Leonel Nguefack",
    description:
      "I love coding using tools like React, React-Native, ExpressJs, Symfony, Firebase, and many more! Here are some of my favorite projects.",
    url: "https://ndlpixel.com/projects"
  },
  twitter: {
    title: "Projects - Leonel Nguefack",
    description:
      "I love coding using tools like React, React-Native, ExpressJs, Symfony, Firebase, and many more! Here are some of my favorite projects.",
    url: "https://ndlpixel.com/projects"
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
