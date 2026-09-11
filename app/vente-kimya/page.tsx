import BusinessDetail from "../business-detail";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vente Kimya | Soğutma Çözümleri",
  description: "Kompresör yağları, sistem temizleme ürünleri ve profesyonel HVACR bakım kimyasalları.",
  openGraph: { title: "Vente Kimya | Soğutma Çözümleri", description: "Soğutma sektörü için uzman çözümler.", images: ["/hero-hvac-facility.png"] },
  twitter: { card: "summary_large_image", title: "Vente Kimya | Soğutma Çözümleri", description: "Soğutma sektörü için uzman çözümler.", images: ["/hero-hvac-facility.png"] },
};

export default function VenteChemicalsPage() {
  return <BusinessDetail area="chemicals" />;
}
