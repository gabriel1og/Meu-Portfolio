"use client";

import { ReactNode, SyntheticEvent, useRef } from "react";
import {
  Input,
  Stack,
  Heading,
  Button,
  Textarea,
  Card,
  Text,
  Box,
} from "@chakra-ui/react";
import { Field } from "./ui/field";
import { Toaster, toaster } from "@/components/ui/toaster";
import Section from "./Generics/Section";
import Link from "next/link";
import emailjs from "@emailjs/browser";
import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import Footer from "./Generics/Footer";

export function ContactCard({
  icon,
  name,
  value,
  link,
}: {
  icon: ReactNode;
  name: string;
  value: string;
  link: string;
}) {
  return (
    <Card.Root w="100%" maxW={["100%", "100%", "100%", "350px"]} p={6} gap={4}>
      <Card.Title mx="auto">{icon}</Card.Title>

      <Card.Body>
        <Stack direction="column" textAlign="center" gap={0}>
          <Text fontWeight={600} fontSize="1.2rem">
            {name}
          </Text>
          <Text color="#b8b8b8">{value}</Text>
        </Stack>
      </Card.Body>

      <Card.Footer mx="auto">
        <Link
          href={link}
          style={{ color: "#085aff", fontWeight: 500 }}
          target="_blank"
        >
          Entre em contato
        </Link>
      </Card.Footer>
    </Card.Root>
  );
}

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: SyntheticEvent<HTMLFormElement, SubmitEvent>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm("service_5deb6sp", "template_zb53yw9", form.current, {
          publicKey: "0CHXsPhmmKJ9_MN0w",
        })
        .then(
          (response) => {
            toaster.create({
              title: "Sucesso",
              description: "Formulário enviado!",
              duration: 5000,
              type: "success",
              placement: "bottom-end",
              action: { label: "x", onClick: () => console.log("Fechar") },
            });
            console.log(response.status, response.text);
            form.current?.reset();
          },
          (error) => {
            toaster.create({
              title: "Erro!",
              description: "Revise suas infos e envie novamente!",
              duration: 5000,
              type: "error",
              placement: "bottom-end",
              action: { label: "X", onClick: () => console.log("Fechar") },
            });
            console.log(error);
          }
        );
    } else {
      console.error("O formulário está nulo");
    }
  };

  return (
    <Section sectionId="contato" title="Entre em contato comigo">
      <Stack direction="column" gap={24} w="100%">
        <Heading textAlign="center" fontSize="1.2rem" color="#8f8f8f" mt={-2}>
          Preencha o formulário abaixo
        </Heading>

        <Stack
          w="100%"
          direction={{ base: "column-reverse", md: "row" }}
          justifyContent="center"
          alignItems="center"
          gap={{ base: 12, md: 8 }}
        >
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            w={{ base: "100%", md: "50%" }}
            gap={{ base: 4, md: 8 }}
          >
            <ContactCard
              icon={<MdOutlineEmail size={24} />}
              name="Email"
              value="gogomide.go@gmail.com"
              link="mailto:gogomide.go@gmail.com"
            />

            <ContactCard
              icon={<BsWhatsapp size={24} />}
              name="Whatsapp"
              value="+55 (31) 99528-1401"
              link="https://api.whatsapp.com/send?phone=5531995281401"
            />
          </Stack>

          <Box w={{ base: "100%", md: "50%" }}>
            <form ref={form} onSubmit={sendEmail}>
              <Field label="Nome" required>
                <Input name="name" type="text" p={2} />
              </Field>

              <Field label="Email" required mt={4}>
                <Input name="email" type="email" p={2} />
              </Field>

              <Field label="Mensagem" required mt={4}>
                <Textarea
                  id="message"
                  name="message"
                  size="lg"
                  placeholder="Digite sua mensagem aqui..."
                  p={2}
                  minH="100px"
                  maxH="200px"
                />
              </Field>

              <Button type="submit" w="100%" mt={4}>
                Enviar
              </Button>
            </form>
          </Box>
        </Stack>

        <Toaster />

        <Footer />
      </Stack>
    </Section>
  );
}
