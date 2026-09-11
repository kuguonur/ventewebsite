import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin", "latin-ext"],
  variable: "--font-montserrat",
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = "https://www.vente.com.tr";

  return {
    title: "Vente | International Trade, Distribution & Business Development",
    description: "Vente connects products, manufacturers and markets through HVACR distribution, international projects, refrigeration chemicals and regional business development.",
    metadataBase: new URL(baseUrl),
    openGraph: {
      title: "Connecting Products. Markets. Opportunities.",
      description: "International Trade • Distribution • Business Development",
      images: [{ url: `${baseUrl}/og.png`, width: 1200, height: 630, alt: "Vente — Connecting Products, Markets and Opportunities" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Connecting Products. Markets. Opportunities.",
      description: "International Trade • Distribution • Business Development",
      images: [`${baseUrl}/og.png`],
    },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr" className={montserrat.variable}>
      <body>{children}</body>
    </html>
  );
}
