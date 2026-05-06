import type { Metadata } from "next";
import "./globals.css";
import { cormorant, inter } from "./fonts";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Maryfer Centeno | Investigaciones",
    template: "%s | Maryfer Centeno",
  },
  description:
    "Análisis e investigaciones sobre casos virales, noticias y actualidad por Maryfer Centeno, grafóloga y analista de comportamiento.",
  openGraph: {
    title: "Maryfer Centeno | Investigaciones",
    description:
      "Análisis e investigaciones sobre casos virales, noticias y actualidad.",
    locale: "es_MX",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      suppressHydrationWarning
      className={`${cormorant.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
