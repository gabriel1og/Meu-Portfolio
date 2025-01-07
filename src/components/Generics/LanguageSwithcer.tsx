import { HStack } from "@chakra-ui/react";
import { ReactNode } from "react";
import { Locale, routing, usePathname, useRouter } from "@/i18n/routing";
import { useParams } from "next/navigation";
import { useLocale } from "next-intl";
import { BsGlobe } from "react-icons/bs";

type LanguageSwitcherProps = {
  children: ReactNode;
  defaultValue: string;
};

export function LanguageSwitcherSelect({
  defaultValue,
}: LanguageSwitcherProps) {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();

  const onSelectChange = (nextLocale: string) => {
    router.replace(
      // @ts-expect-error -- TypeScript will validate that only known `params`
      { pathname, params },
      { locale: nextLocale as Locale }
    );
  };

  return (
    <select
      value={defaultValue}
      onChange={(e) => onSelectChange(e.target.value)}
      className="custom-select"
    >
      {routing.locales.map((locale) => (
        <option key={locale} value={locale}>
          {locale.toUpperCase()}
        </option>
      ))}
    </select>
  );
}

export default function LanguageSwitcher() {
  const locale = useLocale();

  return (
    <HStack alignItems="center" gap={0} pl={1}>
      <LanguageSwitcherSelect defaultValue={locale}>
        {routing.locales.map((cur) => (
          <option key={cur} value={cur}>
            {cur}
          </option>
        ))}
      </LanguageSwitcherSelect>
      <BsGlobe />
    </HStack>
  );
}
