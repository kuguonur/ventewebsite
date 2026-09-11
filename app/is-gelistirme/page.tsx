import BusinessDetail from "../business-detail";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Uluslararası İş Geliştirme | Vente",
  description: "Pazara giriş, distribütör yapılanması ve bölgesel satış geliştirme.",
  openGraph: { title: "Uluslararası İş Geliştirme | Vente", description: "Pazarlar kuruyor, ağlar geliştiriyoruz.", images: ["/hero-hvac-facility.png"] },
  twitter: { card: "summary_large_image", title: "Uluslararası İş Geliştirme | Vente", description: "Pazarlar kuruyor, ağlar geliştiriyoruz.", images: ["/hero-hvac-facility.png"] },
};

export default function BusinessDevelopmentPage() {
  return <BusinessDetail area="development" />;
}
