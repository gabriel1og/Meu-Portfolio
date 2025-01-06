import type { Metadata } from "next";
import "../styles/globals.css";
import { Provider } from "@/components/ui/provider";
import { ColorModeProvider } from "@/components/ui/color-mode";
import Header from "@/components/Generics/Header";

export const metadata: Metadata = {
  title: "Meu Portfólio",
  description: "Portfólio de Gabriel Gomide",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning>
      <body>
        <Provider>
          <ColorModeProvider>
            <Header />
            {children}
          </ColorModeProvider>
        </Provider>
      </body>
    </html>
  );
}
