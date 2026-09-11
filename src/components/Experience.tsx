"use client";

import { Box, Heading, List, Stack, Text } from "@chakra-ui/react";
import { ReactNode } from "react";
import {
  FaCss3,
  FaGit,
  FaGithub,
  FaHtml5,
  FaNodeJs,
  FaReact,
} from "react-icons/fa6";
import { LuCircleCheck } from "react-icons/lu";
import { RiNextjsFill } from "react-icons/ri";
import {
  SiChakraui,
  SiJavascript,
  SiJest,
  SiNestjs,
  SiPostgresql,
  SiStyledcomponents,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { useTranslations } from "next-intl";
import Section from "./Generics/Section";
import {
  TimelineConnector,
  TimelineContent,
  TimelineDescription,
  TimelineItem,
  TimelineRoot,
  TimelineTitle,
} from "@/components/ui/timeline";

type ExperienceEntry = {
  title: string;
  company: string;
  period: string;
  details: string[];
  side: "left" | "right";
};

type Skill = {
  icon: ReactNode;
  name: string;
};

const skills: Skill[] = [
  { icon: <FaHtml5 />, name: "HTML" },
  { icon: <FaCss3 />, name: "CSS" },
  { icon: <SiJavascript />, name: "JavaScript" },
  { icon: <SiTypescript />, name: "TypeScript" },
  { icon: <FaReact />, name: "React" },
  { icon: <RiNextjsFill />, name: "Next.js" },
  { icon: <SiChakraui />, name: "Chakra UI" },
  { icon: <SiTailwindcss />, name: "Tailwind CSS" },
  { icon: <SiStyledcomponents />, name: "Styled Components" },
  { icon: <FaNodeJs />, name: "Node.js" },
  { icon: <SiNestjs />, name: "NestJS" },
  { icon: <SiPostgresql />, name: "PostgreSQL" },
  { icon: <SiSupabase />, name: "Supabase" },
  { icon: <SiJest />, name: "Jest" },
  { icon: <FaGit />, name: "Git" },
  { icon: <FaGithub />, name: "GitHub" },
];

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

function ExperienceContent({ experience }: { experience: ExperienceEntry }) {
  const isLeft = experience.side === "left";

  return (
    <TimelineContent
      flex="1"
      order={isLeft ? { base: 1, md: 0 } : 0}
      alignItems={
        isLeft ? { base: "flex-start", md: "flex-end" } : "flex-start"
      }
    >
      <TimelineTitle
        fontSize={{ base: "1rem", md: "1.2rem" }}
        textAlign={isLeft ? { base: "left", md: "right" } : "left"}
      >
        {experience.title}
      </TimelineTitle>
      <TimelineDescription pb={4}>
        <Text fontSize={{ base: ".8rem", md: ".9rem" }}>
          {experience.company} | {experience.period}
        </Text>
      </TimelineDescription>
      <List.Root
        gap={1}
        maxW="460px"
        fontSize={{ base: ".85rem", md: "1rem" }}
        textAlign="left"
      >
        {experience.details.map((detail) => (
          <List.Item key={detail}>{detail}</List.Item>
        ))}
      </List.Root>
    </TimelineContent>
  );
}

function ExperienceTimelineItem({
  experience,
}: {
  experience: ExperienceEntry;
}) {
  const content = <ExperienceContent experience={experience} />;

  return (
    <TimelineItem>
      {experience.side === "left" ? (
        content
      ) : (
        <TimelineContent flex="1" display={{ base: "none", md: "flex" }} />
      )}
      <TimelineConnector>
        <LuCircleCheck size={32} />
      </TimelineConnector>
      {experience.side === "right" ? (
        content
      ) : (
        <TimelineContent flex="1" display={{ base: "none", md: "flex" }} />
      )}
    </TimelineItem>
  );
}

export default function Experience() {
  const t = useTranslations("Experience");
  const experiences: ExperienceEntry[] = [
    {
      title: t("frontend-job"),
      company: "SEIDOR",
      period: `02/2025 - ${t("current")}`,
      details: t.raw("frontend-job-details") as string[],
      side: "left",
    },
    {
      title: t("volunteer-job"),
      company: "zDevs",
      period: "01/2025 - 03/2025",
      details: t.raw("volunteer-job-details") as string[],
      side: "right",
    },
    {
      title: t("junior-job"),
      company: "Monocard",
      period: "09/2023 - 07/2024",
      details: t.raw("junior-job-details") as string[],
      side: "left",
    },
    {
      title: t("internship"),
      company: "Monocard",
      period: "09/2021 - 08/2023",
      details: t.raw("internship-details") as string[],
      side: "right",
    },
  ];

  return (
    <Section title={t("title")} sectionId="experience">
      <Stack direction="column" gap={24} w="100%">
        <Heading
          textAlign="center"
          fontSize="1.2rem"
          color="#8f8f8f"
          mt={-2}
        >
          {t("subtitle")}
        </Heading>

        <Stack direction="row" flexWrap="wrap" justifyContent="center" gap={3}>
          {skills.map((skill) => (
            <SkillsBox
              key={skill.name}
              skillIcon={skill.icon}
              skillName={skill.name}
            />
          ))}
        </Stack>

        <TimelineRoot variant="outline" size="xl" w="100%" maxW="1200px">
          {experiences.map((experience) => (
            <ExperienceTimelineItem
              key={`${experience.company}-${experience.period}`}
              experience={experience}
            />
          ))}
        </TimelineRoot>
      </Stack>
    </Section>
  );
}
