"use client";

import {
  VStack,
  Card,
  HStack,
  Button,
  Image,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import Section from "./Generics/Section";
import { StaticImageData } from "next/image";
import { ReactNode } from "react";
import Link from "next/link";
import { FaNodeJs, FaReact } from "react-icons/fa6";
import {
  SiChakraui,
  SiPostgresql,
  SiStyledcomponents,
  SiTypescript,
} from "react-icons/si";
import crud from "@/public/assets/crud.png";
import jogoDaMemoria from "@/public/assets/jogoDaMemoria.png";
import gerenciamentoDeFinancas from "@/public/assets/gerenciamentoDeFinancas.png";
import petshopEcomm from "@/public/assets/petshopEcomm.png";
import transporteLP from "@/public/assets/transporteLP.png";
import { useTranslations } from "next-intl";
import { RiNextjsFill } from "react-icons/ri";

export function ProjectCard({
  image,
  title,
  description,
  technologies,
  github,
  demo,
}: {
  image: StaticImageData;
  title: string;
  description: string;
  technologies: ReactNode;
  github: string;
  demo: string;
}) {
  return (
    <GridItem w="100%" maxW="100%" colSpan={1}>
      <VStack
        w="100%"
        justifyContent="center"
        alignItems="center"
        transition="all 1s ease-in-out"
        _hover={{ transform: "translateY(-3em)" }}
      >
        <Image
          rounded="md"
          objectPosition="top"
          width="90%"
          h="200px"
          src={image.src}
          alt={title}
        />
      </VStack>

      <Card.Root
        flexDirection="column"
        position="relative"
        top="-100px"
        w="100%"
        maxW="3xl"
        opacity=".95"
        backdropFilter="blur(20px)"
        transition="1s all ease-in-out"
      >
        <VStack w="100%" h="100%" justifyContent="space-between" p={6}>
          <Card.Title>{title}</Card.Title>
          <Card.Description textAlign="center">{description}</Card.Description>

          <HStack my={8}>{technologies}</HStack>

          <HStack gap={2} w="100%">
            <Link href={github} target="_blank" style={{ width: "50%" }}>
              <Button w="100%" p={5}>
                GitHub
              </Button>
            </Link>
            <Link href={demo} target="_blank" style={{ width: "50%" }}>
              <Button
                w="100%"
                p={5}
                variant="outline"
                borderColor={{ base: "#cdcdcd", _dark: "#fff" }}
              >
                Demo
              </Button>
            </Link>
          </HStack>
        </VStack>
      </Card.Root>
    </GridItem>
  );
}

export default function Projects() {
  const t = useTranslations("Projects");

  return (
    <Section title={t("title")} sectionId="projects" props={{ gap: 20 }}>
      <Grid
        w="100%"
        gap={4}
        templateColumns={[
          "repeat(1, 1fr)",
          "repeat(1, 1fr)",
          "repeat(1, 1fr)",
          "repeat(1, 1fr)",
        ]}
      >
        <ProjectCard
          image={petshopEcomm}
          title={t("ecomm-project-title")}
          description={t("ecomm-project-description")}
          technologies={
            <HStack gap={4}>
              <FaReact size={36} />
              <RiNextjsFill size={36} />
              <SiTypescript size={36} />
              <SiChakraui size={36} />
            </HStack>
          }
          github={"https://github.com/gabriel1og/ecommerce"}
          demo={"https://ecommerce-petzone.vercel.app/"}
        />

        <ProjectCard
          image={transporteLP}
          title={t("taxi-lp-project-title")}
          description={t("taxi-lp-project-description")}
          technologies={
            <HStack gap={4}>
              <FaReact size={36} />
              <RiNextjsFill size={36} />
              <SiTypescript size={36} />
              <SiChakraui size={36} />
            </HStack>
          }
          github={
            "https://github.com/gabriel1og/rodrigo-transporte-adaptado-para-cadeirantes"
          }
          demo={
            "https://rodrigo-transporte-adaptado-para-cadeirantes.vercel.app/"
          }
        />

        <ProjectCard
          image={gerenciamentoDeFinancas}
          title={t("finances-project-title")}
          description={t("finances-project-description")}
          technologies={
            <HStack gap={4}>
              <FaReact size={36} />
              <SiTypescript size={36} />
              <SiStyledcomponents size={36} />
            </HStack>
          }
          github={"https://github.com/gabriel1og/Finances-Management"}
          demo={"https://finances-management-beta.vercel.app/"}
        />

        <ProjectCard
          image={crud}
          title={t("crud-project-title")}
          description={t("crud-project-description")}
          technologies={
            <HStack gap={4}>
              <FaReact size={36} />
              <FaNodeJs size={36} />
              <SiPostgresql size={36} />
            </HStack>
          }
          github={"https://github.com/gabriel1og/CRUD-System"}
          demo={"https://crud-system-henna.vercel.app/"}
        />

        <ProjectCard
          image={jogoDaMemoria}
          title={t("memory-game-project-title")}
          description={t("memory-game-project-description")}
          technologies={
            <HStack gap={4}>
              <FaReact size={36} />
              <SiTypescript size={36} />
              <SiStyledcomponents size={36} />
            </HStack>
          }
          github={"https://github.com/gabriel1og/Memory-Game-Project"}
          demo={"https://memory-game-project-mu.vercel.app/"}
        />
      </Grid>
    </Section>
  );
}
