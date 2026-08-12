import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Praxis Elena Weiner | Hausärztliche Versorgung in Frankfurt",
  description:
    "Hausärztliche Versorgung und psychosomatische Grundversorgung bei Elena Weiner, Fachärztin für Allgemeinmedizin in Frankfurt am Main.",
};

const services = [
  {
    number: "01",
    title: "Hausärztliche Versorgung",
    text: "Ihre erste Anlaufstelle bei akuten Beschwerden, gesundheitlichen Fragen und für die langfristige Begleitung.",
  },
  {
    number: "02",
    title: "Vorsorge & Prävention",
    text: "Gesundheit im Blick behalten: persönliche Beratung zu Vorsorge, Lebensstil und individuellen Risikofaktoren.",
  },
  {
    number: "03",
    title: "Impfberatung",
    text: "Einordnung des persönlichen Impfschutzes und Beratung zu empfohlenen Auffrischungen und saisonalen Impfungen.",
  },
  {
    number: "04",
    title: "Psychosomatische Grundversorgung",
    text: "Körperliche und seelische Beschwerden gemeinsam betrachten – aufmerksam, vertraulich und ohne vorschnelle Urteile.",
  },
  {
    number: "05",
    title: "Akute Beschwerden",
    text: "Medizinische Einschätzung bei plötzlich auftretenden Beschwerden und Orientierung für die nächsten Schritte.",
  },
  {
    number: "06",
    title: "Kontinuierliche Begleitung",
    text: "Koordination von Befunden, Medikamenten und fachärztlicher Mitbehandlung mit einem verlässlichen Überblick.",
  },
];

const hours = [
  ["Montag", "08:30–12:00", "15:00–18:00"],
  ["Dienstag", "08:30–12:00", ""],
  ["Mittwoch", "08:30–12:00", ""],
  ["Donnerstag", "08:30–12:00", "15:00–18:00"],
  ["Freitag", "08:30–12:00", ""],
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <div className="header-inner">
          <a className="brand" href="#start" aria-label="Praxis Elena Weiner – Startseite">
            <span className="brand-mark" aria-hidden="true"><i /></span>
            <span className="brand-copy">
              <strong>Elena Weiner</strong>
              <small>Fachärztin für Allgemeinmedizin</small>
            </span>
          </a>

          <nav className="desktop-nav" aria-label="Hauptnavigation">
            <a href="#leistungen">Leistungen</a>
            <a href="#praxis">Praxis</a>
            <a href="#sprechzeiten">Sprechzeiten</a>
            <a className="nav-cta" href="tel:+4969444242">Termin anfragen <span>↗</span></a>
          </nav>
        </div>
      </header>

      <section className="hero" id="start">
        <div className="hero-image" role="img" aria-label="Ruhiges ärztliches Beratungsgespräch in einer modernen Praxis" />
        <div className="hero-shade" />
        <div className="hero-content shell">
          <p className="eyebrow light"><span /> Hausarztpraxis in Frankfurt am Main</p>
          <h1>Medizin, die den<br />Menschen <em>versteht.</em></h1>
          <p className="hero-lead">
            Persönliche hausärztliche Versorgung mit Zeit zum Zuhören, einer klaren Einordnung und einem Blick auf das Ganze.
          </p>
          <div className="hero-actions">
            <a className="button button-light" href="tel:+4969444242">Termin telefonisch anfragen <span>↗</span></a>
            <a className="text-link light-link" href="#leistungen">Leistungen ansehen <span>↓</span></a>
          </div>
        </div>
        <a className="hero-location" href="https://www.google.com/maps/search/?api=1&query=K%C3%B6nigswarterstra%C3%9Fe+19%2C+60316+Frankfurt+am+Main" target="_blank" rel="noreferrer">
          <span className="location-dot" aria-hidden="true" />
          <span><small>Praxis im Ostend</small><strong>Königswarterstraße 19</strong></span>
          <b>↗</b>
        </a>
      </section>

      <section className="welcome shell" id="praxis">
        <div className="welcome-kicker">
          <p className="eyebrow"><span /> Willkommen</p>
          <div className="roundel" aria-hidden="true">EW<span>+</span></div>
        </div>
        <div className="welcome-copy">
          <h2>Gut aufgehoben.<br /><em>Von Anfang an.</em></h2>
          <div className="welcome-text-grid">
            <p>
              In der Praxis von Elena Weiner steht eine vertrauensvolle, verständliche und ganzheitliche hausärztliche Betreuung im Mittelpunkt.
            </p>
            <p>
              Als Fachärztin für Allgemeinmedizin begleitet sie Patientinnen und Patienten bei akuten Anliegen ebenso wie bei längerfristigen gesundheitlichen Fragen. Ein besonderer Schwerpunkt liegt auf der psychosomatischen Grundversorgung.
            </p>
          </div>
        </div>
      </section>

      <section className="services-section" id="leistungen">
        <div className="shell">
          <div className="section-head">
            <div>
              <p className="eyebrow"><span /> Leistungen</p>
              <h2>Gesundheit ist<br /><em>individuell.</em></h2>
            </div>
            <p className="section-intro">
              Medizinische Begleitung, die nicht bei einzelnen Symptomen endet, sondern Zusammenhänge erkennt und verständlich macht.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service) => (
              <article className="service-card" key={service.number}>
                <span className="service-number">{service.number}</span>
                <div className="service-symbol" aria-hidden="true">+</div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <span className="service-line" />
              </article>
            ))}
          </div>
          <p className="service-note">Das konkrete Leistungsangebot und die Verfügbarkeit einzelner Untersuchungen bitte vorab telefonisch erfragen.</p>
        </div>
      </section>

      <section className="approach-section">
        <div className="approach-visual">
          <div className="approach-quote">
            <span className="quote-mark">“</span>
            <p>Gute Medizin beginnt mit aufmerksamem Zuhören.</p>
          </div>
        </div>
        <div className="approach-copy">
          <p className="eyebrow light"><span /> Unser Verständnis</p>
          <h2>Persönlich.<br />Verständlich.<br /><em>Auf Augenhöhe.</em></h2>
          <p>
            Beschwerden haben selten nur eine Seite. Deshalb werden körperliche Befunde, persönliche Lebenssituation und seelisches Wohlbefinden gemeinsam betrachtet.
          </p>
          <ul>
            <li><span>01</span> Raum für Ihre Fragen</li>
            <li><span>02</span> Verständliche nächste Schritte</li>
            <li><span>03</span> Kontinuierliche Begleitung</li>
          </ul>
        </div>
      </section>

      <section className="visit-section shell" id="sprechzeiten">
        <div className="visit-head">
          <div>
            <p className="eyebrow"><span /> Ihr Besuch</p>
            <h2>Alle wichtigen Infos<br /><em>auf einen Blick.</em></h2>
          </div>
          <a className="button button-dark" href="tel:+4969444242">Jetzt anrufen <span>↗</span></a>
        </div>

        <div className="visit-grid">
          <article className="hours-card">
            <div className="card-title-row">
              <span className="card-icon" aria-hidden="true">◷</span>
              <div><small>Sprechzeiten</small><h3>Wann wir für Sie da sind</h3></div>
            </div>
            <div className="hours-list">
              {hours.map(([day, morning, afternoon]) => (
                <div className="hours-row" key={day}>
                  <strong>{day}</strong>
                  <span>{morning}</span>
                  <span>{afternoon}</span>
                </div>
              ))}
            </div>
            <p className="muted-note">Termine und aktuelle Änderungen bitte telefonisch erfragen.</p>
          </article>

          <article className="contact-card">
            <div className="contact-top">
              <span className="card-icon inverted" aria-hidden="true">⌖</span>
              <small>Adresse & Kontakt</small>
              <h3>Mitten im Frankfurter Ostend</h3>
              <p>Königswarterstraße 19<br />60316 Frankfurt am Main</p>
            </div>
            <div className="contact-links">
              <a href="tel:+4969444242"><span><small>Telefon</small><strong>069 444242</strong></span><b>↗</b></a>
              <a href="https://www.google.com/maps/search/?api=1&query=K%C3%B6nigswarterstra%C3%9Fe+19%2C+60316+Frankfurt+am+Main" target="_blank" rel="noreferrer"><span><small>Anfahrt</small><strong>Route in Google Maps</strong></span><b>↗</b></a>
            </div>
          </article>
        </div>
      </section>

      <section className="faq-section">
        <div className="shell faq-grid">
          <div>
            <p className="eyebrow"><span /> Gut zu wissen</p>
            <h2>Häufige<br /><em>Fragen.</em></h2>
          </div>
          <div className="faq-list">
            <details>
              <summary>Nimmt die Praxis gesetzlich und privat Versicherte auf?<span>+</span></summary>
              <p>Öffentliche Arztverzeichnisse führen die Praxis für gesetzlich Versicherte, Privatversicherte und Selbstzahlende. Bitte klären Sie die aktuelle Aufnahme und Terminverfügbarkeit direkt telefonisch.</p>
            </details>
            <details>
              <summary>Wie vereinbare ich einen Termin?<span>+</span></summary>
              <p>Termine werden telefonisch unter 069 444242 vereinbart. Eine Online-Terminbuchung ist derzeit nicht ausgewiesen.</p>
            </details>
            <details>
              <summary>Was soll ich zum Termin mitbringen?<span>+</span></summary>
              <p>Bitte bringen Sie Ihre Versichertenkarte, einen aktuellen Medikamentenplan und – wenn vorhanden – relevante Vorbefunde mit.</p>
            </details>
            <details>
              <summary>Was mache ich außerhalb der Sprechzeiten?<span>+</span></summary>
              <p>Bei Beschwerden außerhalb der Sprechzeiten erreichen Sie den ärztlichen Bereitschaftsdienst unter 116 117. In lebensbedrohlichen Notfällen wählen Sie 112.</p>
            </details>
          </div>
        </div>
      </section>

      <section className="closing-cta">
        <div className="shell closing-inner">
          <p className="eyebrow light"><span /> Kontakt</p>
          <h2>Wir sind für Sie da.</h2>
          <p>Rufen Sie uns an und vereinbaren Sie Ihren Termin persönlich.</p>
          <a href="tel:+4969444242">069 444242 <span>↗</span></a>
        </div>
      </section>

      <footer>
        <div className="shell footer-main">
          <div className="brand footer-brand">
            <span className="brand-mark" aria-hidden="true"><i /></span>
            <span className="brand-copy"><strong>Elena Weiner</strong><small>Fachärztin für Allgemeinmedizin</small></span>
          </div>
          <div className="footer-address"><strong>Praxis</strong><span>Königswarterstraße 19<br />60316 Frankfurt am Main</span></div>
          <div className="footer-contact"><strong>Kontakt</strong><a href="tel:+4969444242">069 444242</a></div>
          <div className="footer-links"><strong>Informationen</strong><a href="#hinweis">Datenschutz</a><a href="#hinweis">Impressum</a></div>
        </div>
        <div className="shell research-note" id="hinweis">
          <p><strong>Hinweis zum Entwurf:</strong> Diese Website wurde auf Basis öffentlich zugänglicher Arztverzeichnisse und der bereitgestellten Standortangaben erstellt. Adresse, Leistungen, Sprechzeiten, Berufsbezeichnung sowie Impressums- und Datenschutzangaben müssen vor einer offiziellen Veröffentlichung durch die Praxis geprüft und ergänzt werden.</p>
        </div>
        <div className="shell footer-bottom">
          <span>© 2026 Praxis Elena Weiner</span>
          <span>Allgemeinmedizin in Frankfurt am Main</span>
        </div>
      </footer>

      <nav className="mobile-bar" aria-label="Schnellkontakt">
        <a href="tel:+4969444242">Anrufen <span>↗</span></a>
        <a href="https://www.google.com/maps/search/?api=1&query=K%C3%B6nigswarterstra%C3%9Fe+19%2C+60316+Frankfurt+am+Main" target="_blank" rel="noreferrer">Route <span>↗</span></a>
      </nav>
    </main>
  );
}
