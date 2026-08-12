import type { Metadata } from "next";
import LegalPageShell, { ExternalLegalLink } from "../components/LegalPageShell";

export const metadata: Metadata = {
  title: "Datenschutz | Praxis Dr. med. Elena Weiner",
  description: "Datenschutzerklärung der Praxis Dr. med. Elena Weiner in Frankfurt am Main.",
};

export default function DatenschutzPage() {
  return (
    <LegalPageShell
      activePage="datenschutz"
      eyebrow="Ihre Daten"
      title="Datenschutz"
      intro="Informationen zur Verarbeitung personenbezogener Daten beim Besuch dieser Website."
    >
      <p className="legal-updated">Stand: 13. August 2026</p>

      <section>
        <h2>1. Verantwortliche Stelle</h2>
        <address>
          <strong>Dr. med. Elena Weiner</strong><br />
          Praxis für Allgemeinmedizin<br />
          Königswarterstraße 19<br />
          60316 Frankfurt am Main<br />
          Telefon: <a href="tel:+4969444242">069 444242</a>
        </address>
        {/* TODO(datenschutz): Vor offizieller Nutzung eine erreichbare E-Mail-Adresse der Verantwortlichen ergänzen. Keine Adresse erfinden. */}
      </section>

      <section>
        <h2>2. Bereitstellung der Website und Server-Protokolldaten</h2>
        <p>Beim Aufruf dieser Website werden technisch erforderliche Verbindungsdaten an den Webserver übermittelt. Dazu können insbesondere die IP-Adresse, Datum und Uhrzeit des Zugriffs, die angeforderte Seite oder Ressource, Browser- und User-Agent-Informationen sowie technische Request-, Fehler- und Serverdaten gehören.</p>
        <p>Die Verarbeitung erfolgt, um die Website sicher, stabil und technisch fehlerfrei bereitzustellen, Angriffe und Missbrauch zu erkennen und Fehler zu analysieren. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Das berechtigte Interesse liegt im sicheren und zuverlässigen Betrieb dieses Internetangebots.</p>
      </section>

      <section>
        <h2>3. Hosting durch Vercel</h2>
        <p>Diese Website wird über Vercel bereitgestellt. Anbieter ist Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA. Vercel verarbeitet beim Betrieb seiner Infrastruktur Website- und Verbindungsinformationen, zu denen insbesondere IP-Adresse, aus der IP-Adresse abgeleitete ungefähre Standortinformationen, Systemkonfigurationen, Protokoll-, Diagnose- und Leistungsdaten gehören können.</p>
        <p>Die Verarbeitung dient der Auslieferung, Absicherung, Überwachung und technischen Wartung der Website. Soweit Vercel Daten im Auftrag verarbeitet, erfolgt dies auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO in Verbindung mit den gesetzlichen Anforderungen an Auftragsverarbeitung. Ob für das konkrete Vercel-Konto bereits eine wirksame Vereinbarung zur Auftragsverarbeitung abgeschlossen oder einbezogen wurde, ist organisatorisch durch die Praxis zu prüfen.</p>
        <p>Eine Verarbeitung in den USA kann nicht ausgeschlossen werden. Vercel verweist für internationale Übermittlungen unter anderem auf seine Zertifizierung nach dem EU-US Data Privacy Framework und – je nach anwendbarer Konstellation – auf Standardvertragsklauseln. Vercel dokumentiert für seine Protokolldaten derzeit eine Aufbewahrungsdauer von drei Tagen. Andere sicherheits- oder vertragsbedingt erforderliche Daten können nach den jeweiligen Vercel-Bedingungen und Kontoeinstellungen abweichend gespeichert werden.</p>
        <div className="legal-link-list">
          <ExternalLegalLink href="https://vercel.com/legal/privacy-notice">Datenschutzhinweise von Vercel</ExternalLegalLink>
          <ExternalLegalLink href="https://vercel.com/legal/dpa">Vercel Data Processing Addendum</ExternalLegalLink>
          <ExternalLegalLink href="https://vercel.com/docs/logs">Informationen zu Vercel-Protokolldaten</ExternalLegalLink>
        </div>
        {/* TODO(datenschutz): Vor offizieller Nutzung Vertrag, Tarif, Region, Log-Einstellungen und Einbeziehung eines Vercel-DPA für das konkrete Vercel-Konto prüfen und dokumentieren. */}
      </section>

      <section>
        <h2>4. Routenplanung mit Google Maps</h2>
        <p>Auf dieser Website ist keine Google-Maps-Karte eingebettet. Beim bloßen Aufruf der Website wird daher keine Karte von Google geladen. Die Routen-Schaltflächen sind normale externe Links.</p>
        <p>Erst wenn Sie einen Routen-Link aktiv anklicken, verlassen Sie diese Website und werden zu Google Maps weitergeleitet. Ab diesem Zeitpunkt verarbeitet Google Daten in eigener Verantwortung. Abhängig von Gerät, Browser, Kontostatus und Einstellungen können dazu insbesondere Ihre IP-Adresse, Geräteinformationen und Standortdaten gehören.</p>
        <ExternalLegalLink href="https://policies.google.com/privacy?hl=de">Datenschutzerklärung von Google</ExternalLegalLink>
      </section>

      <section>
        <h2>5. Cookies und lokale Speicherung</h2>
        <p>Der Anwendungscode dieser Website setzt keine Cookies und verwendet weder Local Storage noch Session Storage. Es sind keine Analyse-, Tracking-, Werbe- oder Marketingdienste eingebunden. Einwilligungspflichtige Cookies oder vergleichbare Speichermechanismen wurden bei der technischen Prüfung nicht festgestellt. Daher wird kein Cookie-Banner eingesetzt.</p>
      </section>

      <section>
        <h2>6. Schriftarten, Bilder und weitere Ressourcen</h2>
        <p>Schriftarten werden nicht von Google Fonts oder anderen externen Schriftanbietern geladen. Die Website verwendet lokal verfügbare Systemschriften. Bilder, Logo, Favicons und Stylesheets werden von derselben Website bereitgestellt. YouTube-Videos, Social-Media-Plugins, eingebettete Drittanbieterinhalte, Kontakt- oder Terminformulare sowie externe Laufzeit-Skripte sind nicht eingebunden.</p>
      </section>

      <section>
        <h2>7. Kontaktaufnahme</h2>
        <p>Die Website bietet ausschließlich eine telefonische Kontaktmöglichkeit. Es gibt kein Kontakt- oder Terminformular und keine Online-Terminbuchung. Bei einem Anruf gelten zusätzlich die Datenverarbeitungsvorgänge des jeweiligen Telekommunikationsanbieters und der Praxisorganisation.</p>
      </section>

      <section>
        <h2>8. Speicherdauer</h2>
        <p>Personenbezogene Daten werden nur so lange verarbeitet, wie dies für den jeweiligen Zweck erforderlich ist oder gesetzliche Aufbewahrungspflichten bestehen. Für die von Vercel dokumentierten Protokolldaten gilt derzeit die oben genannte Dauer. Soweit keine konkretere Frist genannt ist, richtet sich die Dauer nach dem technischen Erfordernis, Sicherheitszwecken und den Einstellungen des eingesetzten Hosting-Angebots.</p>
      </section>

      <section>
        <h2>9. Ihre Rechte</h2>
        <p>Nach Maßgabe der gesetzlichen Voraussetzungen haben Sie insbesondere folgende Rechte:</p>
        <ul>
          <li>Auskunft über die zu Ihrer Person verarbeiteten Daten (Art. 15 DSGVO),</li>
          <li>Berichtigung unrichtiger oder Vervollständigung unvollständiger Daten (Art. 16 DSGVO),</li>
          <li>Löschung personenbezogener Daten (Art. 17 DSGVO),</li>
          <li>Einschränkung der Verarbeitung (Art. 18 DSGVO),</li>
          <li>Datenübertragbarkeit, soweit die gesetzlichen Voraussetzungen vorliegen (Art. 20 DSGVO),</li>
          <li>Widerspruch gegen eine Verarbeitung auf Grundlage berechtigter Interessen (Art. 21 DSGVO),</li>
          <li>Widerruf einer erteilten Einwilligung mit Wirkung für die Zukunft, soweit eine Verarbeitung auf Einwilligung beruht (Art. 7 Abs. 3 DSGVO),</li>
          <li>Beschwerde bei einer Datenschutzaufsichtsbehörde (Art. 77 DSGVO).</li>
        </ul>
      </section>

      <section>
        <h2>10. Zuständige Datenschutzaufsicht</h2>
        <address>
          <strong>Der Hessische Beauftragte für Datenschutz und Informationsfreiheit</strong><br />
          Postfach 3163<br />
          65021 Wiesbaden<br />
          Dienstgebäude: Wilhelmstraße 7, 65185 Wiesbaden<br />
          Telefon: +49 611 1408-0<br />
          E-Mail: <a href="mailto:poststelle@datenschutz.hessen.de">poststelle@datenschutz.hessen.de</a>
        </address>
        <ExternalLegalLink href="https://datenschutz.hessen.de/">Zur Datenschutzaufsicht Hessen</ExternalLegalLink>
      </section>

      <section>
        <h2>11. Aktualisierung dieser Datenschutzerklärung</h2>
        <p>Diese Datenschutzerklärung wird angepasst, wenn sich Funktionen, eingesetzte Dienste oder rechtliche Anforderungen ändern.</p>
      </section>
    </LegalPageShell>
  );
}
