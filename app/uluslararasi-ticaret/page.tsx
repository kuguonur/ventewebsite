import BusinessDetail from "../business-detail";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Uluslararası Ticaret ve Projeler | Vente",
  description: "Ürün araştırmasından ihracata ve proje teslimine kadar uçtan uca ticaret yönetimi.",
  openGraph: { title: "Uluslararası Ticaret ve Projeler | Vente", description: "Ürün araştırmasından teslimata.", images: ["/hero-global-logistics.png"] },
  twitter: { card: "summary_large_image", title: "Uluslararası Ticaret ve Projeler | Vente", description: "Ürün araştırmasından teslimata.", images: ["/hero-global-logistics.png"] },
};

export default function InternationalTradePage() {
  return <BusinessDetail area="trade" />;
}
