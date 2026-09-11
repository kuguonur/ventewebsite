import BusinessDetail from "../business-detail";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vente Kimya | Soğutma Çözümleri",
  description: "Soğutucu akışkanlar, kompresör yağları ve profesyonel HVACR kimyasalları.",
  openGraph: { title: "Vente Kimya | Soğutma Çözümleri", description: "Soğutma sektörü için uzman çözümler.", images: ["/hero-refrigerant-cycle.png"] },
  twitter: { card: "summary_large_image", title: "Vente Kimya | Soğutma Çözümleri", description: "Soğutma sektörü için uzman çözümler.", images: ["/hero-refrigerant-cycle.png"] },
};

export default function VenteChemicalsPage() {
  return <BusinessDetail area="chemicals" />;
}
