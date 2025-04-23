"use client";

import Header from "@/components/Generics/Header";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import TopButton from "@/components/Generics/TopButton";
import Projects from "@/components/Projects";
import { Flex } from "@chakra-ui/react";

export default function Home() {
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      bg={{
        base: "radial-gradient(circle, #dce1ea 1px, transparent 1px) 0 0 / 20px 20px, linear-gradient(300deg, #ffffff 0%, #ffffff 35%, #eef1f6 100%)",
        _dark:
          "radial-gradient(circle, #085aff21 1px, transparent 1px) 0 0 / 20px 20px, linear-gradient(300deg, #000000 0%, #000000 35%, #085aff10 100%)",
      }}
      mx="auto"
      px={{ base: 6, md: 4 }}
    >
      <Header />

      <TopButton />

      <About />
      <Experience />
      <Projects />
      <Contact />
    </Flex>
  );
}
