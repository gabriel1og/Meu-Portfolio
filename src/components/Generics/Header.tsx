"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Flex, HStack } from "@chakra-ui/react";

const sections = ["sobre", "experiência", "projetos", "contato"];

export default function Header() {
  const [activeSection, setActiveSection] = useState("sobre");

  const handleScroll = () => {
    const offset = 110;
    const buffer = 20;
    const currentSection = sections.find((section) => {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        return rect.top <= offset + buffer && rect.bottom >= offset - buffer;
      }
      return false;
    });
    if (currentSection) {
      setActiveSection(currentSection);
    }
  };

  const scrollTo = (id: string, offset: number = 110) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = window.scrollY + element.getBoundingClientRect().top;
      setActiveSection(id);
      window.scrollTo({
        top: yOffset - offset,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <Flex position="sticky" top={0} zIndex={10} backdropBlur="sm">
      <HStack justifyContent="center" gap={4} p={4} mx="auto">
        {sections.map((item) => (
          <Button
            key={item}
            variant={activeSection === item.toLowerCase() ? "solid" : "ghost"}
            onClick={() => scrollTo(item.toLowerCase())}
            textTransform="capitalize"
            p="20px 25px"
            fontSize="1.1rem"
          >
            {item}
          </Button>
        ))}
      </HStack>
    </Flex>
  );
}
