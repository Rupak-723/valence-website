import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/hero/Hero";
import About from "@/components/sections/About";

import Journals from "@/components/sections/Journals";
import Activities from "@/components/sections/Activities";
import ChemQuest from "@/components/sections/ChemQuest";
import Team from "@/components/sections/Team";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Activities />
 
      <Journals />
      <ChemQuest />
      <Team />
    </>
  );
}