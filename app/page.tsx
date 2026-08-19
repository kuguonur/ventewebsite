"use client";

import { useEffect, useRef, useState } from "react";

const services = [
  {
    no: "01",
    title: "Pazar Giriş Stratejisi",
    text: "Türkiye pazarına giren global teknoloji şirketleri için konumlandırma, bayi ağı ve kilit müşteri yönetimi.",
  },
  {
    no: "02",
    title: "Temsilcilik & Dağıtım",
    text: "HVACR alanındaki yeni nesil ürünleri doğru kanallar, teknik bilgi ve yerel saha deneyimiyle buluşturuyoruz.",
  },
  {
    no: "03",
    title: "Global Tedarik",
    text: "Türk üreticiler için uluslararası talep yaratıyor; seçimden kalite kontrole ve sevkiyata süreci yönetiyoruz.",
  },
];

const brands = ["FIELDPIECE", "SPIN", "NEUTRONICS", "AAB SMART", "TECNO SYSTEMI"];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const orbRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const orb = orbRef.current;
    if (!orb || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const onMove = (event: PointerEvent) => {
      const rect = orb.getBoundingClientRect();
      const x = (event.clientX - (rect.left + rect.width / 2)) * 0.045;
      const y = (event.clientY - (rect.top + rect.height / 2)) * 0.045;
      orb.animate(
        { transform: `translate3d(${x}px, ${y}px, 0)` },
        { duration: 420, easing: "cubic-bezier(.2,.8,.2,1)", fill: "forwards" },
      );
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <main>
      <nav className="nav" aria-label="Ana navigasyon">
        <a className="brand" href="#top" aria-label="Vente ana sayfa">
          <span className="brand-mark">V</span>
          <span>VENTE</span>
        </a>
        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <a href="#uzmanlik" onClick={() => setMenuOpen(false)}>Uzmanlığımız</a>
          <a href="#markalar" onClick={() => setMenuOpen(false)}>Markalar</a>
          <a href="#hakkimizda" onClick={() => setMenuOpen(false)}>Hakkımızda</a>
          <a className="shop-link" href="http://www.ventecihaz.com" target="_blank" rel="noreferrer">Online Shop ↗</a>
        </div>
        <button
          className="menu-button"
          type="button"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Menüyü kapat" : "Menüyü aç"}
          onClick={() => setMenuOpen((value) => !value)}
        >
          <span /><span />
        </button>
      </nav>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span /> HVACR • TEKNOLOJİ • PAZAR ERİŞİMİ</p>
          <h1>Teknolojiyi<br />pazara <em>taşırız.</em></h1>
          <p className="hero-lead">
            Global HVACR teknolojileriyle Türkiye arasında güçlü bir bağ kuruyor; markaları, ürünleri ve iş fırsatlarını doğru pazara ulaştırıyoruz.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="#iletisim">Birlikte çalışalım <span>↗</span></a>
            <a className="text-link" href="#uzmanlik">Neler yapıyoruz? <span>↓</span></a>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="orb" ref={orbRef}>
            <div className="orb-core">V</div>
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
          </div>
          <div className="metric metric-one"><strong>15+</strong><span>Yıllık sektör<br />deneyimi</span></div>
          <div className="metric metric-two"><strong>360°</strong><span>Pazar geliştirme<br />yaklaşımı</span></div>
          <span className="tech-label">THERMAL NETWORK / 41.0082° N</span>
        </div>
      </section>

      <section className="brand-rail" id="markalar" aria-label="Temsil edilen markalar">
        <span className="rail-label">GÜVENİLEN TEKNOLOJİLER</span>
        <div className="brand-list">
          {brands.map((brand) => <span key={brand}>{brand}</span>)}
        </div>
      </section>

      <section className="services" id="uzmanlik">
        <div className="section-intro">
          <p className="eyebrow dark"><span /> UZMANLIĞIMIZ</p>
          <h2>İyi teknoloji,<br />doğru pazarda <em>değerlenir.</em></h2>
          <p>Satıştan önce strateji, üründen sonra sürdürülebilir ilişki kuruyoruz.</p>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.no}>
              <span className="service-no">{service.no}</span>
              <div className="service-symbol" aria-hidden="true"><i /><i /></div>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <a href="#iletisim" aria-label={`${service.title} hakkında konuşalım`}>Detayları konuşalım <span>↗</span></a>
            </article>
          ))}
        </div>
      </section>

      <section className="about" id="hakkimizda">
        <div className="about-index">VENTE / 2009—∞</div>
        <div>
          <p className="eyebrow"><span /> BİZ KİMİZ?</p>
          <h2>Yerel deneyim.<br />Global görüş.</h2>
        </div>
        <div className="about-copy">
          <p>Vente Dış Ticaret Danışmanlık AŞ; ısıtma, soğutma, havalandırma, enerji ve çevre teknolojilerindeki yenilikleri Türkiye pazarıyla buluşturur.</p>
          <p>Dinamik kadromuz ve HVACR sektöründeki saha deneyimimizle, uluslararası firmaların Türkiye’de; Türk üreticilerin ise global pazarlarda büyümesini sağlıyoruz.</p>
        </div>
      </section>

      <section className="contact" id="iletisim">
        <p className="eyebrow dark"><span /> YENİ BİR PAZAR AÇALIM</p>
        <h2>Sıradaki fırsatı<br /><em>birlikte keşfedelim.</em></h2>
        <div className="contact-row">
          <a className="contact-mail" href="mailto:info@vente.com.tr">info@vente.com.tr <span>↗</span></a>
          <p>Teknolojinizi Türkiye’ye taşımak veya global pazarlara açılmak için bize ulaşın.</p>
        </div>
      </section>

      <footer>
        <a className="brand footer-brand" href="#top"><span className="brand-mark">V</span><span>VENTE</span></a>
        <p>Teknoloji ve Danışmanlık Hizmetleri</p>
        <div className="socials">
          <a href="https://www.linkedin.com/company/vente-technology-&-consulting-services" target="_blank" rel="noreferrer">LinkedIn ↗</a>
          <a href="https://www.instagram.com/vente_tech/" target="_blank" rel="noreferrer">Instagram ↗</a>
          <a href="https://www.youtube.com/channel/UCuAt0fQvG1uaTE_OzNLWjsg" target="_blank" rel="noreferrer">YouTube ↗</a>
        </div>
        <small>© {new Date().getFullYear()} Vente Dış Ticaret Danışmanlık AŞ</small>
      </footer>
    </main>
  );
}
