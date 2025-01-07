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
import { SiPostgresql, SiStyledcomponents, SiTypescript } from "react-icons/si";
import crud from "@/public/assets/crud.png";
import jogoDaMemoria from "@/public/assets/jogoDaMemoria.png";
import gerenciamentoDeFinancas from "@/public/assets/gerenciamentoDeFinancas.png";
import { useTranslations } from "next-intl";

export function ProjectCard({
  image,
  title,
  description,
  technologies,
  github,
  demo,
  lastCard,
}: {
  image: StaticImageData;
  title: string;
  description: string;
  technologies: ReactNode;
  github: string;
  demo: string;
  lastCard?: boolean;
}) {
  return (
    <GridItem
      w="100%"
      maxW={["100%", "100%", "100%", lastCard ? "100%" : "380px"]}
      colSpan={[1, 1, 1, lastCard ? 2 : 1]}
    >
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
          "repeat(2, 1fr)",
        ]}
        templateRows={[
          "repeat(3, 1fr)",
          "repeat(3, 1fr)",
          "repeat(3, 1fr)",
          "repeat(2, 1fr)",
        ]}
      >
        <ProjectCard
          image={gerenciamentoDeFinancas}
          title={t("project-one-title")}
          description={t("project-one-description")}
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
          title={t("project-two-title")}
          description={t("project-two-description")}
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
          title={t("project-three-title")}
          description={t("project-three-description")}
          technologies={
            <HStack gap={4}>
              <FaReact size={36} />
              <SiTypescript size={36} />
              <SiStyledcomponents size={36} />
            </HStack>
          }
          github={"https://github.com/gabriel1og/Memory-Game-Project"}
          demo={"https://memory-game-project-mu.vercel.app/"}
          lastCard
        />
      </Grid>
    </Section>
  );
}
