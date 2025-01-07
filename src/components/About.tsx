"use client";

import { Box, Heading, HStack, Stack, VStack } from "@chakra-ui/react";
import profilePic from "@/public/assets/profile.png";
import Image from "next/image";
import { Button } from "./ui/button";
import { MdOutlineFileDownload } from "react-icons/md";
import Section from "./Generics/Section";
import { RiArrowDownDoubleLine } from "react-icons/ri";
import { scrollTo } from "@/utils/scrollBySections";
import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations("About");

  return (
    <Section sectionId="about">
      <VStack position="relative" w="100%" mb={{ base: "auto", md: 4 }}>
        <VStack pb={12}>
          <Image
            src={profilePic.src}
            alt="Profile Image"
            width={120}
            height={120}
            style={{ objectFit: "contain" }}
          />
          <HStack
            gap={2}
            border="3px solid"
            borderColor={{ base: "#ededed", _dark: "#2424249b" }}
            borderRadius="30px"
            p="0px 25px"
          >
            <Box
              background="green.400"
              width="10px"
              height="10px"
              borderRadius="lg"
            />
            <Heading fontSize=".9rem">{t("available")}</Heading>
          </HStack>
        </VStack>

        <Heading fontSize={{ base: "1.4rem", md: "1.6rem" }} textAlign="center">
          {t("title")}{" "}
          <span
            style={{
              textDecoration: "underline",
              fontWeight: "bold",
            }}
          >
            Gabriel Gomide
          </span>
          !
        </Heading>

        <Heading
          fontSize={{ base: ".9rem", md: "1.1rem" }}
          color="gray"
          textAlign="center"
          lineHeight={{ base: "25px", md: "30px" }}
        >
          {t("description")}
        </Heading>

        <Stack
          direction={{ base: "column", md: "row" }}
          py={12}
          gap={{ base: 3, md: 6 }}
        >
          <Button p="20px 25px" fontSize="1.1rem">
            <a href="./assets/Gabriel_Oliveira_Gomide_Curriculum.pdf" download>
              <HStack>
                {t("download-cv")} <MdOutlineFileDownload />
              </HStack>
            </a>
          </Button>

          <Button
            variant="outline"
            p="20px 25px"
            fontSize="1.1rem"
            onClick={() => {
              const element = document.getElementById("contato");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            {t("get-in-touch")} 👋
          </Button>
        </Stack>

        <Button
          position="absolute"
          bottom={{ base: -20, md: -40 }}
          borderRadius="20px"
          color={{ base: "#000", _dark: "#fff" }}
          bg="transparent"
          border="2px solid"
          borderColor={{ base: "#000", _dark: "#fff" }}
          onClick={() => scrollTo("experiência")}
          _hover={{
            backgroundColor: { base: "#000", _dark: "#fff" },
            color: { base: "#fff", _dark: "#000" },
          }}
        >
          <RiArrowDownDoubleLine />
        </Button>
      </VStack>
    </Section>
  );
}
