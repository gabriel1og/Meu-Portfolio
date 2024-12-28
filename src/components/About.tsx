"use client";

import { Box, Flex, Heading, HStack, VStack } from "@chakra-ui/react";
import profilePic from "@/public/profile.png";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

export default function About() {
  return (
    <Flex className="section" id="sobre">
      <VStack mx="auto" justifyContent="center">
        <VStack py={12}>
          <Image
            src={profilePic.src}
            alt="Profile Image"
            width={120}
            height={120}
            style={{ objectFit: "contain" }}
          />
          <HStack
            gap={2}
            border="3px solid #292c3c"
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

        <Heading fontSize="1.6rem">
          Olá, me chamo{" "}
          <span
            style={{
              textDecoration: "underline",
              fontWeight: "bold",
              fontSize: "1.8rem",
            }}
          >
            Gabriel Gomide
          </span>
          !
        </Heading>

        <Heading fontSize="1.2rem" color="gray" textAlign="center">
          Sou Desenvolvedor Fullstack especializado em Front-end, <br /> formado
          em Engenharia de Software e focado em desenvolver <br /> aplicações
          web no ecossistema Javascript.
        </Heading>

        <HStack py={12} gap={6}>
          <Button p="20px 25px" fontSize="1.1rem">
            <Link
              href={"./public/Gabriel_Oliveira_Gomide_Curriculum.pdf"}
              download="Gabriel_Oliveira_Gomide_Curriculum.pdf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download CV"
            >
              Download CV
            </Link>
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
        </HStack>
      </VStack>
    </Flex>
  );
}
