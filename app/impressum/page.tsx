import type { Metadata } from "next";
import LegalPageShell, { ExternalLegalLink } from "../components/LegalPageShell";

export const metadata: Metadata = {
  title: "Impressum | Praxis Dr. med. Elena Weiner",
  description: "Impressum der Praxis Dr. med. Elena Weiner in Frankfurt am Main.",
};

export default function ImpressumPage() {
  return (
    <LegalPageShell
      activePage="impressum"
      eyebrow="Rechtliche Angaben"
      title="Impressum"
      intro="Anbieterkennzeichnung und berufsrechtliche Informationen der Praxis."
    >
      <section>
        <h2>Angaben zur Praxis</h2>
        <address>
          <strong>Praxis Dr. med. Elena Weiner</strong><br />
          Dr. med. Elena Weiner<br />
          Fachärztin für Allgemeinmedizin<br />
          Königswarterstraße 19<br />
          60316 Frankfurt am Main<br />
          Deutschland
        </address>
        <dl className="legal-facts">
          <div><dt>Telefon</dt><dd><a href="tel:+4969444242">069 444242</a></dd></div>
        </dl>
        {/* TODO(impressum): Vor offizieller Nutzung eine erreichbare Praxis-E-Mail-Adresse als Pflichtangabe ergänzen. Keine Adresse erfinden. */}
      </section>

      <section>
        <h2>Berufsrechtliche Angaben</h2>
        <dl className="legal-facts">
          <div><dt>Berufsbezeichnung</dt><dd>Ärztin</dd></div>
          <div><dt>Facharztbezeichnung</dt><dd>Fachärztin für Allgemeinmedizin</dd></div>
          <div><dt>Akademischer Titel</dt><dd>Dr. med.</dd></div>
        </dl>
        {/* TODO(impressum): Staat der Verleihung der Berufs- und Facharztbezeichnung von Dr. med. Elena Weiner bestätigen und ergänzen. */}
        {/* TODO(legal-review): Prüfen, ob Angaben zur Berufshaftpflichtversicherung nach der konkreten Praxiskonstellation bereitzustellen sind; keine Versicherungsdaten ohne Bestätigung eintragen. */}
      </section>

      <section>
        <h2>Zuständige Ärztekammer</h2>
        <address>
          <strong>Landesärztekammer Hessen</strong><br />
          Hanauer Landstraße 152<br />
          60314 Frankfurt am Main
        </address>
        <ExternalLegalLink href="https://www.laekh.de/">Zur Landesärztekammer Hessen</ExternalLegalLink>
      </section>

      <section>
        <h2>Zuständige Kassenärztliche Vereinigung</h2>
        <p><strong>Kassenärztliche Vereinigung Hessen</strong></p>
        <ExternalLegalLink href="https://www.kvhessen.de/">Zur Kassenärztlichen Vereinigung Hessen</ExternalLegalLink>
      </section>

      <section>
        <h2>Berufsrechtliche Regelungen</h2>
        <p>Es gilt die Berufsordnung für die Ärztinnen und Ärzte in Hessen.</p>
        <ExternalLegalLink href="https://www.laekh.de/fileadmin/user_upload/Aerzte/Rund_ums_Recht/Rechtsquellen/Berufsordnung.pdf">
          Berufsordnung bei der Landesärztekammer Hessen
        </ExternalLegalLink>
      </section>
    </LegalPageShell>
  );
}
