import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const headerList = await headers();
  const host = headerList.get("x-forwarded-host") ?? headerList.get("host") ?? "vente.com.tr";
  const protocol = headerList.get("x-forwarded-proto") ?? (host.includes("localhost") ? "http" : "https");
  const baseUrl = `${protocol}://${host}`;

  return {
    title: "Vente | Profesyonel HVAC Teknolojileri",
    description: "Vente; profesyonel HVAC test ve ölçüm cihazları, soğutma servis ekipmanları ve iklimlendirme teknolojilerini Türkiye ile buluşturur.",
    metadataBase: new URL(baseUrl),
    openGraph: {
      title: "Vente | Profesyonel HVAC Teknolojileri",
      description: "HVAC test, ölçüm, servis ve iklimlendirme teknolojileri.",
      images: [{ url: `${baseUrl}/og.png`, width: 1200, height: 630, alt: "Vente — Teknolojiyi pazara taşırız" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Vente | Profesyonel HVAC Teknolojileri",
      description: "HVAC test, ölçüm, servis ve iklimlendirme teknolojileri.",
      images: [`${baseUrl}/og.png`],
    },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
