"use client";

import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import { Flex } from "@chakra-ui/react";

export default function Home() {
  return (
    <Flex flexDirection="column" mx="auto" px={4} gap={20}>
      <About />
      <Experience />
      <Projects />
      <Contact />
    </Flex>
  );
}
