"use client";

import { useEffect, useState } from "react";

type Locale = "tr" | "en" | "fr";
export type BusinessArea = "hvacr" | "trade" | "chemicals" | "development";

const routes: Record<BusinessArea, string> = {
  hvacr: "/hvacr-ekipmanlari",
  trade: "/uluslararasi-ticaret",
  chemicals: "/vente-kimya",
  development: "/is-gelistirme",
};

const content = {
  hvacr: {
    no: "01",
    image: "/hero-hvac-diagnostics.png",
    tr: {
      label: "HVACR DİSTRİBÜTÖRLÜĞÜ",
      title: "HVACR profesyonelleri için yenilikçi ekipmanlar.",
      lead: "Dünyanın önde gelen teknoloji üreticilerini Türkiye’deki HVACR profesyonelleriyle buluşturuyoruz.",
      intro: "Servis, devreye alma, test ve ölçüm süreçlerinde hız, doğruluk ve güvenlik sağlayan profesyonel çözümler sunuyoruz. Güçlü teknik pazar bilgimizle doğru ürünü doğru kullanıcıya ulaştırıyoruz.",
      services: ["Test ve ölçüm cihazları", "Servis ekipmanları", "Profesyonel el aletleri", "Kaçak tespit teknolojileri", "Bağlantı sistemleri", "Teknik ürün eğitimi"],
      process: ["Üretici seçimi", "Türkiye distribütörlüğü", "Teknik konumlandırma", "Bayi ve kullanıcı desteği"],
      cta: "HVACR ürünlerini inceleyin",
    },
    en: {
      label: "HVACR DISTRIBUTION",
      title: "Innovative tools for HVACR professionals.",
      lead: "We connect leading global technology manufacturers with HVACR professionals across Türkiye.",
      intro: "We deliver professional solutions that improve speed, accuracy and safety in service, commissioning, testing and measurement. Our technical market expertise connects the right product with the right user.",
      services: ["Test and measurement", "Service equipment", "Professional hand tools", "Leak detection technologies", "Connection systems", "Technical product training"],
      process: ["Manufacturer selection", "Türkiye distribution", "Technical positioning", "Dealer and user support"],
      cta: "Explore HVACR products",
    },
    fr: {
      label: "DISTRIBUTION HVACR",
      title: "Des équipements innovants pour les professionnels du HVACR.",
      lead: "Nous mettons en relation les principaux fabricants mondiaux de technologies avec les professionnels du HVACR en Türkiye.",
      intro: "Nous proposons des solutions professionnelles qui améliorent la rapidité, la précision et la sécurité lors des opérations de maintenance, de mise en service, de test et de mesure. Notre expertise du marché technique relie le bon produit au bon utilisateur.",
      services: ["Appareils de test et de mesure", "Équipements de service", "Outillage professionnel", "Technologies de détection des fuites", "Systèmes de raccordement", "Formation technique aux produits"],
      process: ["Sélection des fabricants", "Distribution en Türkiye", "Positionnement technique", "Assistance aux revendeurs et utilisateurs"],
      cta: "Découvrir les produits HVACR",
    },
  },
  trade: {
    no: "02",
    image: "/hero-global-logistics.png",
    tr: {
      label: "ULUSLARARASI TİCARET VE PROJELER",
      title: "Ürün araştırmasından teslimata.",
      lead: "İhtiyacı tanımlıyor, doğru üreticiyi buluyor ve tüm ticari süreci tek merkezden yönetiyoruz.",
      intro: "Başta Afrika olmak üzere uluslararası pazarlardaki müşterilerimiz için ürün araştırması, satın alma, üretim takibi, konsolidasyon, ihracat ve proje teslimini uçtan uca koordine ediyoruz.",
      services: ["Ürün ve üretici araştırması", "Merkezi satın alma", "Tedarikçi yönetimi", "Kalite ve üretim takibi", "Konsolidasyon ve ihracat", "Anahtar teslim proje tedariği"],
      process: ["İhtiyaç analizi", "Kaynak ve teklif", "Üretim ve kalite", "Lojistik ve teslimat"],
      cta: "Projenizi görüşelim",
    },
    en: {
      label: "INTERNATIONAL TRADE & PROJECTS",
      title: "From sourcing to delivery.",
      lead: "We define the need, identify the right manufacturer and manage the complete commercial process from one point.",
      intro: "For customers across Africa and other international markets, we coordinate sourcing, purchasing, production follow-up, consolidation, export and project delivery from end to end.",
      services: ["Product and supplier sourcing", "Central purchasing", "Supplier management", "Quality and production follow-up", "Consolidation and export", "Turnkey project supply"],
      process: ["Needs analysis", "Sourcing and quotation", "Production and quality", "Logistics and delivery"],
      cta: "Discuss your project",
    },
    fr: {
      label: "COMMERCE INTERNATIONAL ET PROJETS",
      title: "De la recherche produit à la livraison.",
      lead: "Nous définissons le besoin, identifions le bon fabricant et gérons l’ensemble du processus commercial depuis un point unique.",
      intro: "Pour nos clients en Afrique et sur d’autres marchés internationaux, nous coordonnons de bout en bout la recherche de fournisseurs, les achats, le suivi de production, la consolidation, l’exportation et la livraison des projets.",
      services: ["Recherche de produits et fournisseurs", "Achats centralisés", "Gestion des fournisseurs", "Suivi de la qualité et de la production", "Consolidation et exportation", "Approvisionnement de projets clé en main"],
      process: ["Analyse des besoins", "Recherche et offre", "Production et qualité", "Logistique et livraison"],
      cta: "Parlons de votre projet",
    },
  },
  chemicals: {
    no: "03",
    image: "/hero-refrigerant-cycle.png",
    tr: {
      label: "KİMYASALLAR VE SOĞUTMA",
      title: "Soğutma sektörü için uzman çözümler.",
      lead: "Vente Kimya ile profesyonel soğutma uygulamalarına yönelik güvenilir ürünler sunuyoruz.",
      intro: "Soğutucu akışkanlardan kompresör yağlarına ve bakım kimyasallarına uzanan ürün grubumuzu teknik bilgi, güvenilir tedarik ve doğru uygulama desteğiyle birleştiriyoruz.",
      services: ["Soğutucu akışkanlar", "POE kompresör yağları", "PAG kompresör yağları", "Sistem temizleme kimyasalları", "Kaçak tespit ürünleri", "Servis ve bakım çözümleri"],
      process: ["Ürün doğrulama", "Güvenli tedarik", "Teknik dokümantasyon", "Satış sonrası destek"],
      cta: "Vente Kimya ile görüşün",
    },
    en: {
      label: "CHEMICALS & REFRIGERATION",
      title: "Specialized solutions for refrigeration.",
      lead: "Through Vente Kimya, we provide reliable products for professional refrigeration applications.",
      intro: "We combine a portfolio spanning refrigerants, compressor oils and maintenance chemicals with technical expertise, dependable supply and application support.",
      services: ["Refrigerant gases", "POE compressor oils", "PAG compressor oils", "System cleaning chemicals", "Leak detection products", "Service and maintenance solutions"],
      process: ["Product validation", "Reliable supply", "Technical documentation", "After-sales support"],
      cta: "Contact Vente Kimya",
    },
    fr: {
      label: "PRODUITS CHIMIQUES ET RÉFRIGÉRATION",
      title: "Des solutions spécialisées pour la réfrigération.",
      lead: "Avec Vente Kimya, nous fournissons des produits fiables pour les applications professionnelles de réfrigération.",
      intro: "Nous associons une gamme comprenant des fluides frigorigènes, des huiles pour compresseurs et des produits chimiques de maintenance à une expertise technique, un approvisionnement fiable et une assistance à l’application.",
      services: ["Fluides frigorigènes", "Huiles POE pour compresseurs", "Huiles PAG pour compresseurs", "Produits chimiques de nettoyage des systèmes", "Produits de détection des fuites", "Solutions de service et de maintenance"],
      process: ["Validation des produits", "Approvisionnement fiable", "Documentation technique", "Service après-vente"],
      cta: "Contacter Vente Kimya",
    },
  },
  development: {
    no: "04",
    image: "/hero-hvac-facility.png",
    tr: {
      label: "ULUSLARARASI İŞ GELİŞTİRME",
      title: "Pazarlar kuruyor, ağlar geliştiriyoruz.",
      lead: "Uluslararası üreticilerin Türkiye ve çevre pazarlardaki büyüme süreçlerine yerel uzmanlık kazandırıyoruz.",
      intro: "Üreticiler için pazar analizi, distribütör ve bayi yapılanması, bölgesel satış yönetimi, ürün lansmanı ve yerel pazarlama faaliyetlerini tek bir büyüme modeli altında yönetiyoruz.",
      services: ["Pazara giriş stratejisi", "Distribütör arama ve seçimi", "Bayi ağı geliştirme", "Bölgesel satış yönetimi", "Ürün lansmanı ve eğitim", "Pazar istihbaratı"],
      process: ["Pazar analizi", "Kanal stratejisi", "Partner geliştirme", "Sürdürülebilir büyüme"],
      cta: "Yeni pazarı birlikte geliştirelim",
    },
    en: {
      label: "INTERNATIONAL BUSINESS DEVELOPMENT",
      title: "Building markets. Developing networks.",
      lead: "We bring local expertise to the growth journey of international manufacturers in Türkiye and surrounding markets.",
      intro: "For manufacturers, we manage market analysis, distributor and dealer structuring, regional sales, product launches and local marketing under one integrated growth model.",
      services: ["Market entry strategy", "Distributor search and selection", "Dealer network development", "Regional sales management", "Product launch and training", "Market intelligence"],
      process: ["Market analysis", "Channel strategy", "Partner development", "Sustainable growth"],
      cta: "Build your next market with us",
    },
    fr: {
      label: "DÉVELOPPEMENT COMMERCIAL INTERNATIONAL",
      title: "Nous créons des marchés et développons des réseaux.",
      lead: "Nous apportons une expertise locale à la croissance des fabricants internationaux en Türkiye et sur les marchés voisins.",
      intro: "Pour les fabricants, nous gérons l’analyse de marché, la structuration des distributeurs et revendeurs, les ventes régionales, les lancements de produits et le marketing local dans un modèle de croissance intégré.",
      services: ["Stratégie d’entrée sur le marché", "Recherche et sélection de distributeurs", "Développement du réseau de revendeurs", "Gestion des ventes régionales", "Lancement de produits et formation", "Intelligence de marché"],
      process: ["Analyse du marché", "Stratégie de distribution", "Développement des partenaires", "Croissance durable"],
      cta: "Développons ensemble votre prochain marché",
    },
  },
} as const;

export default function BusinessDetail({ area }: { area: BusinessArea }) {
  const [locale, setLocale] = useState<Locale>("tr");
  useEffect(() => {
    const lang = new URLSearchParams(window.location.search).get("lang");
    if (lang === "en" || lang === "fr") setLocale(lang);
  }, []);
  const tr = locale === "tr";
  const l = <T,>(trValue: T, enValue: T, frValue: T) => locale === "tr" ? trValue : locale === "en" ? enValue : frValue;
  const item = content[area];
  const copy = item[locale];
  const setLanguage = (next: Locale) => {
    setLocale(next);
    const url = new URL(window.location.href);
    url.searchParams.set("lang", next);
    window.history.replaceState({}, "", url);
  };

  return <main className={`detail-page detail-${area}`}>
    <nav className="detail-nav">
      <a href={`/?lang=${locale}#uzmanlik`} aria-label={l("Vente ana sayfa", "Vente home", "Accueil Vente")}><img src="/vente-logo.jpg" alt="Vente" /></a>
      <a className="detail-back" href={`/?lang=${locale}#uzmanlik`}>← {l("Faaliyet alanlarına dön", "Back to business areas", "Retour aux domaines d’activité")}</a>
      <div className="language-picker" role="group" aria-label={l("Dil seçimi", "Language selection", "Choix de la langue")}>
        <button className={tr ? "active" : ""} onClick={() => setLanguage("tr")} type="button">🇹🇷 <span>Türkçe</span></button>
        <button className={locale === "en" ? "active" : ""} onClick={() => setLanguage("en")} type="button">🇬🇧 <span>English</span></button>
        <button className={locale === "fr" ? "active" : ""} onClick={() => setLanguage("fr")} type="button">🇫🇷 <span>Français</span></button>
      </div>
    </nav>

    <header className="detail-hero">
      <img src={item.image} alt="" />
      <div className="detail-hero-shade" />
      <div className="detail-hero-copy"><p><span>{item.no}</span>{copy.label}</p><h1>{copy.title}</h1><strong>{copy.lead}</strong></div>
    </header>

    <section className="detail-intro">
      <p className="eyebrow dark"><span /> {l("YAKLAŞIMIMIZ", "OUR APPROACH", "NOTRE APPROCHE")}</p>
      <h2>{copy.intro}</h2>
    </section>

    <section className="detail-services">
      <header><p className="eyebrow dark"><span /> {l("ÇÖZÜMLER", "SOLUTIONS", "SOLUTIONS")}</p><h2>{l("Bu alanda neler yapıyoruz?", "What do we deliver?", "Que proposons-nous dans ce domaine ?")}</h2></header>
      <div>{copy.services.map((service, index) => <article key={service}><span>{String(index + 1).padStart(2, "0")}</span><h3>{service}</h3><i>↗</i></article>)}</div>
    </section>

    <section className="detail-process">
      <p className="eyebrow"><span /> {l("ÇALIŞMA MODELİ", "HOW WE WORK", "NOTRE MÉTHODE")}</p>
      <h2>{l("Net, bağlantılı ve ölçülebilir bir süreç.", "A clear, connected and measurable process.", "Un processus clair, coordonné et mesurable.")}</h2>
      <div>{copy.process.map((step, index) => <article key={step}><span>0{index + 1}</span><strong>{step}</strong></article>)}</div>
    </section>

    <section className="detail-cta">
      <p>{l("Bu iş kolunda birlikte çalışmak ister misiniz?", "Interested in working with us in this area?", "Vous souhaitez travailler avec nous dans ce domaine ?")}</p>
      <h2>{copy.cta}</h2>
      <a href={`/?lang=${locale}#iletisim`}>{l("İletişime geçin", "Contact us", "Nous contacter")} <span>↗</span></a>
    </section>

    <section className="detail-other">
      <p>{l("Diğer faaliyet alanları", "Other business areas", "Autres domaines d’activité")}</p>
      <div>{(Object.keys(content) as BusinessArea[]).filter((key) => key !== area).map((key) => <a key={key} href={`${routes[key]}?lang=${locale}`}><span>{content[key].no}</span><strong>{content[key][locale].label}</strong><i>↗</i></a>)}</div>
    </section>
  </main>;
}
