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
