import BusinessDetail from "../business-detail";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HVACR Ekipmanları | Vente",
  description: "HVACR profesyonelleri için test, ölçüm ve servis ekipmanları.",
  openGraph: { title: "HVACR Ekipmanları | Vente", description: "HVACR profesyonelleri için yenilikçi ekipmanlar.", images: ["/hero-hvac-diagnostics.png"] },
  twitter: { card: "summary_large_image", title: "HVACR Ekipmanları | Vente", description: "HVACR profesyonelleri için yenilikçi ekipmanlar.", images: ["/hero-hvac-diagnostics.png"] },
};

export default function HvacrEquipmentPage() {
  return <BusinessDetail area="hvacr" />;
}
