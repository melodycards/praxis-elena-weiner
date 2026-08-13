import { ArrowLeft, ExternalLink } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";

type LegalPageShellProps = {
  activePage: "impressum" | "datenschutz";
  children: ReactNode;
  eyebrow: string;
  intro: string;
  title: string;
};

export function ExternalLegalLink({
  children,
  href,
}: {
  children: ReactNode;
  href: string;
}) {
  return (
    <a className="legal-external-link" href={href} target="_blank" rel="noreferrer">
      {children}
      <ExternalLink aria-hidden="true" />
    </a>
  );
}

export default function LegalPageShell({
  activePage,
  children,
  eyebrow,
  intro,
  title,
}: LegalPageShellProps) {
  const practiceLabel = activePage === "impressum" ? "Praxis Elena Weiner" : "Praxis Dr. med. Elena Weiner";

  return (
    <main className="legal-page">
      <header className="legal-header">
        <div className="header-inner">
          <Link className="brand" href="/" aria-label={`${practiceLabel} – Startseite`}>
            <span className="brand-mark" aria-hidden="true"><i /></span>
            <span className="brand-copy">
              <strong>Elena Weiner</strong>
              <small>Fachärztin für Allgemeinmedizin</small>
            </span>
          </Link>
          <Link className="legal-back-link" href="/">
            <ArrowLeft aria-hidden="true" />
            Zur Praxis
          </Link>
        </div>
      </header>

      <section className="legal-intro">
        <div className="shell">
          <p className="eyebrow light"><span /> {eyebrow}</p>
          <h1>{title}</h1>
          <p>{intro}</p>
        </div>
      </section>

      <div className="legal-layout shell">
        <aside className="legal-aside" aria-label="Rechtliche Informationen">
          <span>Informationen</span>
          <nav>
            <Link href="/impressum" aria-current={activePage === "impressum" ? "page" : undefined}>Impressum</Link>
            <Link href="/datenschutz" aria-current={activePage === "datenschutz" ? "page" : undefined}>Datenschutz</Link>
          </nav>
          <p>{practiceLabel}<br />Königswarterstraße 19<br />60316 Frankfurt am Main</p>
        </aside>
        <article className="legal-content">{children}</article>
      </div>

      <footer>
        <div className="shell footer-main">
          <Link className="brand footer-brand" href="/">
            <span className="brand-mark" aria-hidden="true"><i /></span>
            <span className="brand-copy"><strong>Elena Weiner</strong><small>Fachärztin für Allgemeinmedizin</small></span>
          </Link>
          <div className="footer-address"><strong>Praxis</strong><span>Königswarterstraße 19<br />60316 Frankfurt am Main</span></div>
          <div className="footer-contact"><strong>Kontakt</strong><a href="tel:+4969444242">069 444242</a></div>
          <div className="footer-links"><strong>Informationen</strong><Link href="/datenschutz">Datenschutz</Link><Link href="/impressum">Impressum</Link></div>
        </div>
        <div className="shell footer-bottom">
          <span>© 2026 Praxis Elena Weiner</span>
          <span>Allgemeinmedizin in Frankfurt am Main</span>
        </div>
      </footer>
    </main>
  );
}
