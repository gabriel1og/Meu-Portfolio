"use client";

import { Box, Heading, HStack, Stack, VStack } from "@chakra-ui/react";
import profilePic from "@/public/profile.png";
import Image from "next/image";
import { Button } from "./ui/button";
import { MdOutlineFileDownload } from "react-icons/md";
import Section from "./Generics/Section";
import { RiArrowDownDoubleLine } from "react-icons/ri";
import { scrollTo } from "@/utils/scrollBySections";

export default function About() {
  return (
    <Section sectionId="sobre">
      <VStack position="relative" w="100%">
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
            border="3px solid #2424249b"
            borderRadius="30px"
            p="0px 25px"
          >
            <Box
              background="green.400"
              width="10px"
              height="10px"
              borderRadius="lg"
            />
            <Heading fontSize=".9rem">Disponível</Heading>
          </HStack>
        </VStack>

        <Heading fontSize={{ base: "1.4rem", md: "1.6rem" }} textAlign="center">
          Olá, me chamo{" "}
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
          fontSize={{ base: ".9rem", md: "1.2rem" }}
          color="gray"
          textAlign="center"
          lineHeight={{ base: "25px", md: "30px" }}
        >
          Sou Desenvolvedor Fullstack especializado em Front-end, <br /> formado
          em Engenharia de Software e focado em desenvolver <br /> aplicações
          web no ecossistema Javascript.
        </Heading>

        <Stack
          direction={{ base: "column", md: "row" }}
          py={12}
          gap={{ base: 3, md: 6 }}
        >
          <Button p="20px 25px" fontSize="1.1rem">
            <a href="./Gabriel_Oliveira_Gomide_Curriculum.pdf" download>
              <HStack>
                Download CV <MdOutlineFileDownload />
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
            Entre em contato 👋
          </Button>
        </Stack>

        <Button
          position="absolute"
          bottom={-20}
          borderRadius="20px"
          bg="transparent"
          border="2px solid #fff"
          color="#fff"
          onClick={() => scrollTo("experiência")}
          _hover={{
            backgroundColor: "#fff",
            color: "#000",
          }}
        >
          <RiArrowDownDoubleLine />
        </Button>
      </VStack>
    </Section>
  );
}
