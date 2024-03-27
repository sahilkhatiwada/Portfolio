import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Portfolio from "@/components/Portfolio";

import Testimonial from "@/components/Testimonial";

export default function Home() {
  return (
    <main>
      <>
        <Hero />
        <About />
        <Skills />
        <Portfolio />
        <Testimonial />
      </>
    </main>
  );
}
