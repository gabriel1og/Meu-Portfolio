"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Flex, HStack } from "@chakra-ui/react";
import { scrollTo, Sections } from "@/utils/scrollBySections";
import { ColorModeButton } from "@/components/ui/color-mode";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "./LanguageSwithcer";

export const sections: Sections = {
  about: "about",
  experience: "experience",
  projects: "projects",
  contact: "contact",
};

export default function Header() {
  const [activeSection, setActiveSection] = useState<string>(sections.about);
  const t = useTranslations("Header");

  const handleScroll = () => {
    const offset = 100;
    const buffer = 20;
    const currentSection = Object.values(sections).find((section) => {
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

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <Flex
      position="sticky"
      top={5}
      zIndex={10}
      backdropBlur="sm"
      bgColor="transparent"
    >
      <HStack
        justifyContent="center"
        wrap="wrap"
        gap={[2, 2, 4, 4]}
        p={3}
        mx={{ base: 8, md: "auto" }}
        backdropFilter="blur(10px)"
        bgColor={{
          base: "rgba(255, 255, 255, 0.12)",
          _dark: "rgba(0, 0, 0, 0.12)",
        }}
        borderRadius="60px"
      >
        {Object.values(sections).map((item) => (
          <Button
            key={item}
            variant={activeSection === item.toLowerCase() ? "solid" : "ghost"}
            onClick={() => scrollTo(item.toLowerCase())}
            textTransform="capitalize"
            p={{ base: "10px 15px", md: "20px 25px" }}
            borderRadius="60px"
            fontSize={{ base: ".9rem", md: "1rem" }}
          >
            {t(item)}
          </Button>
        ))}
        <HStack divideX="1px" divideColor="blackAlpha.200">
          <ColorModeButton />
          <LanguageSwitcher />
        </HStack>
      </HStack>
    </Flex>
  );
}
