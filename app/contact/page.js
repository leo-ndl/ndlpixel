import Heading from "components/designs/Heading";
import Page from "components/utility/Page";
import Contact from "components/contact";
import React from "react";

export const metadata = {
  title: "Get in Touch - Connect with Me - Leonel Nguefack",
  description:
    "Let's collaborate! Reach out to discuss projects, opportunities, or just to say hello. I'm excited to connect and explore potential collaborations in the world of web and mobile development and beyond.",
  alternates: {
    canonical: "https://ndl-pixel.vercel.app/projects"
  },
  openGraph: {
    title: "Get in Touch - Connect with Me - Leonel Nguefack",
    description:
      "Let's collaborate! Reach out to discuss projects, opportunities, or just to say hello. I'm excited to connect and explore potential collaborations in the world of web and mobile development and beyond.",
    url: "https://ndl-pixel.vercel.app/projects"
  },
  twitter: {
    title: "Get in Touch - Connect with Me - Leonel Nguefack",
    description:
      "Let's collaborate! Reach out to discuss projects, opportunities, or just to say hello. I'm excited to connect and explore potential collaborations in the world of web and mobile development and beyond.",
    url: "https://ndl-pixel.vercel.app/projects"
  }
};

function designs() {
  return (
    <Page
      currentPage="Contact"
      meta={{
        desc: "Let's collaborate! Reach out to discuss projects, opportunities, or just to say hello. I'm excited to connect and explore potential collaborations in the world of web and mobile development and beyond."
      }}
    >
      <Heading />
      <Contact />
    </Page>
  );
}

export default designs;
