"use client";

import { Text, List, Heading, Stack, Box } from "@chakra-ui/react";
import {
  TimelineConnector,
  TimelineContent,
  TimelineItem,
  TimelineRoot,
  TimelineTitle,
  TimelineDescription,
} from "@/components/ui/timeline";
import { LuCircleCheck } from "react-icons/lu";
import Section from "./Generics/Section";
import { ReactNode } from "react";
import { FaCss3, FaGit, FaGithub, FaNodeJs, FaReact } from "react-icons/fa6";
import {
  SiChakraui,
  SiJavascript,
  SiNestjs,
  SiPostgresql,
  SiTypescript,
} from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { useTranslations } from "next-intl";

export function SkillsBox({
  skillIcon,
  skillName,
}: {
  skillIcon: ReactNode;
  skillName: string;
}) {
  return (
    <Box
      display="flex"
      flexDir="row"
      alignItems="center"
      px={4}
      py={1}
      gap={2}
      borderRadius="30px"
      border="2px solid"
      borderColor={{ base: "#ededed", _dark: "#bdbdbd" }}
      transition="all 0.3s ease-in-out"
      _hover={{
        color: { base: "#fff", _dark: "#000" },
        background: { base: "#000", _dark: "#fff" },
        border: "2px solid #fff",
        cursor: "pointer",
        transform: "rotate(-3deg) scale(0.9)",
      }}
    >
      {skillIcon}
      <Text fontWeight="600">{skillName}</Text>
    </Box>
  );
}

export default function Experience() {
  const t = useTranslations("Experience");

  return (
    <Section title={t("title")} sectionId="experience">
      <Stack direction="column" gap={24} w="100%">
        <Heading textAlign="center" fontSize="1.2rem" color="#8f8f8f" mt={-2}>
          {t("subtitle")}
        </Heading>

        <Stack direction="row" flexWrap="wrap" justifyContent="center" gap={3}>
          <SkillsBox skillIcon={<FaCss3 />} skillName={"CSS"} />
          <SkillsBox skillIcon={<SiJavascript />} skillName={"Javascript"} />
          <SkillsBox skillIcon={<SiTypescript />} skillName={"Typescript"} />
          <SkillsBox skillIcon={<FaReact />} skillName={"ReactJS"} />
          <SkillsBox skillIcon={<RiNextjsFill />} skillName={"NextJS"} />
          <SkillsBox skillIcon={<SiChakraui />} skillName={"Chakra UI"} />
          <SkillsBox skillIcon={<FaGit />} skillName={"GIT"} />
          <SkillsBox skillIcon={<FaGithub />} skillName={"GitHub"} />
          <SkillsBox skillIcon={<SiPostgresql />} skillName={"PostgreSQL"} />
          <SkillsBox skillIcon={<FaNodeJs />} skillName={"NodeJS"} />
          <SkillsBox skillIcon={<SiNestjs />} skillName={"NestJS"} />
        </Stack>

        <TimelineRoot variant="outline" size="xl" w="100%" maxW="1200px">
          <TimelineItem>
            <TimelineContent flex="1" />
            <TimelineConnector>
              <LuCircleCheck size={32} />
            </TimelineConnector>

            <TimelineContent flex="1">
              <TimelineTitle fontSize={{ base: "1rem", md: "1.2rem" }}>
                {t("junior-job")}
              </TimelineTitle>

              <TimelineDescription
                pb={4}
                fontSize={{ base: ".8rem", md: ".9rem" }}
              >
                Monocard | 09/2023 - 07/2024
              </TimelineDescription>

              <List.Root gap={1} fontSize={{ base: ".9rem", md: "1rem" }}>
                <List.Item>React, NextJs, Typescript, Chakra UI</List.Item>
                <List.Item>PostgreSQL, NodeJs, NestJs</List.Item>
                <List.Item>Github, GitHub Projects</List.Item>
              </List.Root>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineContent flex="1" alignItems="flex-end">
              <TimelineTitle fontSize={{ base: "1rem", md: "1.2rem" }}>
                {t("internship")}
              </TimelineTitle>

              <TimelineDescription pb={4}>
                <Text fontSize={{ base: ".8rem", md: ".9rem" }}>
                  Monocard | 09/2021 - 08/2023
                </Text>
              </TimelineDescription>

              <List.Root gap={1} fontSize={{ base: ".9rem", md: "1rem" }}>
                <List.Item>CSS, React, NextJs</List.Item>
                <List.Item>Wordpress (Elementor)</List.Item>
                <List.Item>Github, GitHub Projects</List.Item>
              </List.Root>
            </TimelineContent>

            <TimelineConnector>
              <LuCircleCheck size={32} />
            </TimelineConnector>
            <TimelineContent flex="1" />
          </TimelineItem>
        </TimelineRoot>
      </Stack>
    </Section>
  );
}
