import type { Metadata } from "next";
import "../styles/globals.css";
import { Provider } from "@/components/ui/provider";
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
          <Header />
          {children}
        </Provider>
      </body>
    </html>
  );
}
