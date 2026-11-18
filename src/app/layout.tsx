import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { site } from "@/content/site";
import { constructMetadata } from "@/lib/metadata";

import "./globals.css";

const inter = Inter({
  subsets: ["latin-ext"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = constructMetadata({
  title: `${site.name} — Freelance Web Geliştirici`,
  description: `${site.name}, freelance web geliştirici. Kurumsal web siteleri, e-ticaret ve tanıtım siteleri.`,
  path: "/",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={`${inter.variable} font-sans`}>
        <div className="flex min-h-screen flex-col">
          <Header />
          <div className="flex-1">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
