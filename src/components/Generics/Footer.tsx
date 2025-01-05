import { Button, HStack, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { ReactNode } from "react";
import { FaGithub } from "react-icons/fa6";
import { RiLinkedinFill } from "react-icons/ri";

export function ContactBox({ link, icon }: { link: string; icon: ReactNode }) {
  return (
    <Link href={link} target="_blank">
      <Button
        w="45px"
        h="45px"
        p={2}
        color="#fff"
        bg="transparent"
        borderRadius="50%"
        border="2px solid #bdbdbd"
        transition="all 0.3s ease-in-out"
        cursor="pointer"
        _hover={{
          color: "#000",
          background: "#fff",
          border: "2px solid #fff",
          transform: "rotate(5deg) scale(1.1)",
        }}
      >
        {icon}
      </Button>
    </Link>
  );
}

export default function Footer() {
  return (
    <VStack gap={6}>
      <HStack gap={4}>
        <ContactBox
          link="https://www.linkedin.com/in/gabriel-oliveira-gomide-b343a41b5/"
          icon={<RiLinkedinFill />}
        />
        <ContactBox link="https://github.com/gabriel1og" icon={<FaGithub />} />
      </HStack>
      <Text color="#ffffff8f" textAlign="center">
        © GABRIEL OG Portfolio. All rights reserved - 2025
      </Text>
    </VStack>
  );
}
