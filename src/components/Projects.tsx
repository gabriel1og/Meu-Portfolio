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
import { FaChartLine, FaReact } from "react-icons/fa6";
import {
  SiChakraui,
  SiShadcnui,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import flowly from "@/public/assets/flowly.png";
import petshopEcomm from "@/public/assets/petshopEcomm.png";
import tasksStatus from "@/public/assets/taskStatus.png";
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
  imageFit = "cover",
}: {
  image: StaticImageData;
  title: string;
  description: string;
  technologies: ReactNode;
  github: string;
  demo?: string;
  imageFit?: "cover" | "contain";
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
          objectPosition="center top"
          width="90%"
          h="200px"
          src={image.src}
          alt={title}
          objectFit={imageFit}
          bg={{ base: "#f8fafc", _dark: "#111827" }}
          p={imageFit === "contain" ? 6 : 0}
        />
      </VStack>

      <Card.Root
        flexDirection="column"
        position="relative"
        top="-100px"
        mx="auto"
        w="100%"
        maxW="3xl"
        opacity=".95"
        backdropFilter="blur(20px)"
        transition="1s all ease-in-out"
      >
        <VStack w="100%" h="100%" justifyContent="space-between" p={6}>
          <Card.Title>{title}</Card.Title>
          <Card.Description textAlign="center">{description}</Card.Description>

          <HStack my={8} flexWrap="wrap" justifyContent="center">
            {technologies}
          </HStack>

          <HStack gap={2} w="100%">
            <Link
              href={github}
              target="_blank"
              style={{ width: demo ? "50%" : "100%" }}
            >
              <Button w="100%" p={5}>
                GitHub
              </Button>
            </Link>
            {demo && (
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
            )}
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
          image={flowly}
          title={t("finances-project-title")}
          description={t("finances-project-description")}
          technologies={
            <HStack gap={4}>
              <RiNextjsFill size={36} title="Next.js" />
              <SiTypescript size={36} title="Typescript" />
              <SiSupabase size={36} title="Supabase" />
              <SiTailwindcss size={36} title="Tailwind CSS" />
              <FaChartLine size={36} title="Recharts" />
            </HStack>
          }
          github="https://github.com/gabriel1og/my-finances"
          demo="https://my-finances-seven-delta.vercel.app"
        />

        <ProjectCard
          image={tasksStatus}
          title={t("tasks-status-project-title")}
          description={t("tasks-status-project-description")}
          technologies={
            <HStack gap={4}>
              <RiNextjsFill size={36} title="Next.js" />
              <SiTypescript size={36} title="Typescript" />
              <SiSupabase size={36} title="Supabase" />
              <SiTailwindcss size={36} title="Tailwind CSS" />
              <SiShadcnui size={36} title="Shadcn UI" />
            </HStack>
          }
          github="https://github.com/gabriel1og/tasks-status"
          demo="https://tasks-status.vercel.app"
        />

        <ProjectCard
          image={petshopEcomm}
          title={t("ecomm-project-title")}
          description={t("ecomm-project-description")}
          technologies={
            <HStack gap={4}>
              <FaReact size={36} title="React" />
              <RiNextjsFill size={36} title="Next.js" />
              <SiTypescript size={36} title="Typescript" />
              <SiChakraui size={36} title="Chakra UI" />
            </HStack>
          }
          github={"https://github.com/gabriel1og/ecommerce"}
          demo={"https://ecommerce-petzone.vercel.app"}
        />

        <ProjectCard
          image={transporteLP}
          title={t("taxi-lp-project-title")}
          description={t("taxi-lp-project-description")}
          technologies={
            <HStack gap={4}>
              <FaReact size={36} title="React" />
              <RiNextjsFill size={36} title="Next.js" />
              <SiTypescript size={36} title="Typescript" />
              <SiChakraui size={36} title="Chakra UI" />
            </HStack>
          }
          github={
            "https://github.com/gabriel1og/rodrigo-transporte-adaptado-para-cadeirantes"
          }
          demo={
            "https://rodrigo-transporte-adaptado-para-cadeirantes.vercel.app"
          }
        />
      </Grid>
    </Section>
  );
}
