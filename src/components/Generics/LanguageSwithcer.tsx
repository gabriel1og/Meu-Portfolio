"use client";

import { Button, HStack, Menu, Portal, Text } from "@chakra-ui/react";
import { useLocale } from "next-intl";
import { useParams } from "next/navigation";
import { BsGlobe } from "react-icons/bs";
import { LuCheck, LuChevronDown } from "react-icons/lu";
import { Locale, usePathname, useRouter } from "@/i18n/routing";

type LanguageOption = {
  locale: Locale;
  label: string;
};

const languageOptions: LanguageOption[] = [
  { locale: "pt", label: "Português" },
  { locale: "en", label: "English" },
];

export default function LanguageSwitcher() {
  const currentLocale = useLocale() as Locale;
  const pathname = usePathname();
  const router = useRouter();
  const params = useParams();

  const changeLanguage = (nextLocale: string) => {
    if (nextLocale === currentLocale) return;

    router.replace(
      // @ts-expect-error -- TypeScript validates the params against the localized pathname.
      { pathname, params },
      { locale: nextLocale as Locale },
    );
  };

  return (
    <Menu.Root
      positioning={{ placement: "bottom-end", gutter: 8 }}
      onSelect={({ value }) => changeLanguage(value)}
    >
      <Menu.Trigger asChild>
        <Button
          variant="ghost"
          h="40px"
          minW="86px"
          px={3}
          borderRadius="full"
          border="1px solid"
          borderColor="transparent"
          color={{ base: "#174ea6", _dark: "#60a5fa" }}
          _hover={{
            bg: { base: "blackAlpha.100", _dark: "whiteAlpha.100" },
            borderColor: { base: "blackAlpha.200", _dark: "whiteAlpha.200" },
          }}
          _open={{
            bg: { base: "blackAlpha.100", _dark: "whiteAlpha.100" },
            borderColor: { base: "blackAlpha.300", _dark: "whiteAlpha.300" },
          }}
          aria-label={`Idioma atual: ${currentLocale.toUpperCase()}`}
        >
          <HStack gap={2}>
            <BsGlobe aria-hidden="true" />
            <Text fontWeight="700" fontSize="sm">
              {currentLocale.toUpperCase()}
            </Text>
            <LuChevronDown aria-hidden="true" size={14} />
          </HStack>
        </Button>
      </Menu.Trigger>

      <Portal>
        <Menu.Positioner>
          <Menu.Content
            minW="160px"
            p={1.5}
            border="1px solid"
            borderColor={{ base: "#dbe3ef", _dark: "whiteAlpha.200" }}
            borderRadius="8px"
            bg={{ base: "rgba(255, 255, 255, 0.98)", _dark: "#0d111a" }}
            boxShadow="0 14px 40px rgba(0, 0, 0, 0.28)"
            backdropFilter="blur(16px)"
          >
            {languageOptions.map(({ locale, label }) => {
              const isSelected = locale === currentLocale;

              return (
                <Menu.Item
                  key={locale}
                  value={locale}
                  px={3}
                  py={2.5}
                  borderRadius="6px"
                  color={isSelected ? "#2362cf" : "inherit"}
                  bg={
                    isSelected
                      ? { base: "#edf4ff", _dark: "#132647" }
                      : "transparent"
                  }
                  cursor="pointer"
                  _hover={{ bg: { base: "#f1f5f9", _dark: "whiteAlpha.100" } }}
                >
                  <HStack justifyContent="space-between" w="100%" gap={4}>
                    <Text fontSize="sm" fontWeight={isSelected ? "700" : "500"}>
                      {label}
                    </Text>
                    <HStack gap={2}>
                      <Text fontSize="xs" fontWeight="700" opacity={0.7}>
                        {locale.toUpperCase()}
                      </Text>
                      {isSelected && <LuCheck aria-hidden="true" size={16} />}
                    </HStack>
                  </HStack>
                </Menu.Item>
              );
            })}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
}
