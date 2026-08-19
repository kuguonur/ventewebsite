"use client";

import { useEffect, useRef, useState } from "react";

const services = [
  {
    no: "01",
    title: "Test & Ölçüm Teknolojileri",
    text: "HVAC profesyonelleri için dijital manifold, kaçak tespit, vakum, hava debisi ve soğutucu akışkan analiz çözümleri.",
  },
  {
    no: "02",
    title: "Servis & Montaj Ekipmanları",
    text: "Klima ve soğutma servislerine yönelik boru işleme, geri toplama, vakum ve profesyonel montaj ekipmanları.",
  },
  {
    no: "03",
    title: "İklimlendirme Sistem Aksesuarları",
    text: "Bakır borudan kanal ve drenaj çözümlerine kadar HVAC uygulamalarını daha hızlı, güvenli ve verimli hale getiren ürünler.",
  },
];

const brands = ["FIELDPIECE", "SPIN", "NEUTRONICS", "AAB SMART", "TECNO SYSTEMI"];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const systemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const system = systemRef.current;
    if (!system || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const onMove = (event: PointerEvent) => {
      const rect = system.getBoundingClientRect();
      const x = (event.clientX - (rect.left + rect.width / 2)) * 0.045;
      const y = (event.clientY - (rect.top + rect.height / 2)) * 0.045;
      system.animate(
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
          <img src="/vente-logo.jpg" alt="Vente" />
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
          <p className="eyebrow"><span /> HVAC • SOĞUTMA • İKLİMLENDİRME</p>
          <h1>HVAC&apos;ın<br />geleceğini <em>taşırız.</em></h1>
          <p className="hero-lead">
            Dünyanın yenilikçi HVAC markalarını; doğru teknik bilgi, güçlü dağıtım ağı ve sektör deneyimiyle Türkiye&apos;deki profesyonellerle buluşturuyoruz.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="#iletisim">Birlikte çalışalım <span>↗</span></a>
            <a className="text-link" href="#uzmanlik">HVAC çözümlerimiz <span>↓</span></a>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="hvac-system" ref={systemRef}>
            <div className="system-grid" />
            <div className="indoor-unit">
              <span className="unit-led" />
              <div className="indoor-vent"><i /><i /><i /><i /><i /></div>
              <span className="unit-name">İÇ ÜNİTE</span>
              <div className="cool-air"><i /><i /><i /></div>
            </div>
            <div className="outdoor-unit">
              <div className="fan"><i /><i /><i /></div>
              <div className="side-vents"><i /><i /><i /><i /></div>
              <span className="unit-name">DIŞ ÜNİTE</span>
            </div>
            <div className="refrigerant-circuit">
              <div className="pipe liquid-line">
                <span className="fluid particle-one" /><span className="fluid particle-two" /><span className="fluid particle-three" />
                <small>SIVI HATTI • YÜKSEK BASINÇ</small>
              </div>
              <div className="pipe gas-line">
                <span className="fluid particle-one" /><span className="fluid particle-two" /><span className="fluid particle-three" />
                <small>GAZ HATTI • DÜŞÜK BASINÇ</small>
              </div>
            </div>
            <div className="cycle-status"><span /> SOĞUTUCU AKIŞKAN ÇEVRİMİ</div>
          </div>
          <div className="metric metric-one"><strong>HVACR</strong><span>Uzmanlık ve<br />saha deneyimi</span></div>
          <div className="metric metric-two"><strong>360°</strong><span>Teknik ürün<br />portföyü</span></div>
          <span className="tech-label">EVAPORATION / COMPRESSION / CONDENSATION</span>
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
          <h2>HVAC sahasında<br />profesyonel <em>çözümler.</em></h2>
          <p>Ölçümden montaja, servisten devreye almaya kadar profesyonellerin ihtiyaç duyduğu teknoloji.</p>
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
        <div className="about-index">VENTE / HVACR</div>
        <div>
          <p className="eyebrow"><span /> BİZ KİMİZ?</p>
          <h2>HVAC&apos;ta yerel deneyim.<br />Global teknoloji.</h2>
        </div>
        <div className="about-copy">
          <p>Vente Dış Ticaret Danışmanlık AŞ; ısıtma, soğutma, havalandırma ve iklimlendirme sektörünün profesyonel test, ölçüm, servis ve montaj teknolojilerini Türkiye pazarıyla buluşturur.</p>
          <p>HVACR sektöründeki saha deneyimimizle yalnızca ürün tedarik etmiyor; doğru cihaz seçimi, teknik uygulama bilgisi ve satış sonrası süreçlerde kalıcı değer üretiyoruz.</p>
        </div>
      </section>

      <section className="contact" id="iletisim">
        <p className="eyebrow dark"><span /> HVAC İHTİYACINIZI KONUŞALIM</p>
        <h2>Doğru ekipmanı<br /><em>birlikte seçelim.</em></h2>
        <div className="contact-row">
          <a className="contact-mail" href="mailto:info@vente.com.tr">info@vente.com.tr <span>↗</span></a>
          <p>Ölçüm, servis, montaj veya iklimlendirme uygulamanız için en uygun profesyonel çözüme birlikte karar verelim.</p>
        </div>
      </section>

      <footer>
        <a className="brand footer-brand" href="#top"><img src="/vente-logo.jpg" alt="Vente" /></a>
        <p>HVAC Teknolojileri ve Profesyonel Ekipmanlar</p>
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
