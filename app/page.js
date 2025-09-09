import Page from "@/components/utility/Page";
import Hero from "@/components/home/Hero";
import Main from "@/components/main";
import CTA from "@/components/home/CTA";

export default function Home() {
  return (
    <Page
      currentPage="Home"
      meta={{
        desc: "I build web & mobile apps that convert users into customers."
      }}
    >
      <Hero />
      <Main />
      <CTA />
    </Page>
  );
}
