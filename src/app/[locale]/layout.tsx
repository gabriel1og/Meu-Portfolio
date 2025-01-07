import type { Metadata } from "next";
import "@/styles/globals.css";
import { Provider } from "@/components/ui/provider";
import { ColorModeProvider } from "@/components/ui/color-mode";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { Locale, routing } from "@/i18n/routing";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Meu Portfólio",
  description: "Portfólio de Gabriel Gomide",
};
export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const locale = (await params).locale;
  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html suppressHydrationWarning lang={locale}>
      <body>
        <Provider>
          <ColorModeProvider forcedTheme="dark">
            <NextIntlClientProvider messages={messages}>
              {children}
            </NextIntlClientProvider>
          </ColorModeProvider>
        </Provider>
      </body>
    </html>
  );
}
