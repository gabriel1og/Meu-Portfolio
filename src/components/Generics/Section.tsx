import { Flex, Heading, StackProps, VStack } from "@chakra-ui/react";
import { JSX } from "react";
import { InView } from "react-intersection-observer";

export default function Section({
  sectionId,
  title,
  children,
  props,
}: {
  sectionId: string;
  title?: string;
  children: JSX.Element;
  props?: StackProps;
}) {
  return (
    <Flex w="100%" maxW="1200px" h="100%" py="8rem" id={sectionId}>
      <InView triggerOnce threshold={0.1}>
        {({ inView, ref }) => (
          <VStack
            mx="auto"
            w="100%"
            maxW="800px"
            justifyContent="center"
            {...props}
            ref={ref}
            className={`section ${inView ? "scrolled" : ""}`}
          >
            <Heading
              fontSize="1.4rem"
              fontWeight={700}
              letterSpacing=".1em"
              textAlign="center"
              textTransform="uppercase"
              bgClip="text"
              bgGradient="linear-gradient(to right, #3a21f3, #085aff,#2362cf, #44bbee)"
            >
              {title}
            </Heading>
            {children}
          </VStack>
        )}
      </InView>
    </Flex>
  );
}
