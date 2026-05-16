import type { Metadata } from "next";
import Link from "next/link";
import LegalPageLayout, { LegalSection } from "@/components/LegalPageLayout";

export const metadata: Metadata = {
  title: "Datenschutz",
  description:
    "Datenschutzerklärung der Website Sinnfonie – LRS-Förderung Bettina Geffert. Informationen zur Verarbeitung personenbezogener Daten.",
};

export default function DatenschutzPage() {
  return (
    <LegalPageLayout
      title="Datenschutz"
      subtitle="Informationen zur Verarbeitung Ihrer personenbezogenen Daten (DSGVO)"
    >
      <LegalSection title="1. Verantwortliche Stelle">
        <p>
          Verantwortlich für die Datenverarbeitung auf dieser Website ist:
        </p>
        <p>
          <strong className="text-text-primary">Bettina Geffert</strong>
          <br />
          Dinkelkamp 27
          <br />
          31228 Peine (Stederdorf)
          <br />
          Telefon:{" "}
          <a
            href="tel:+4951284000778"
            className="text-primary-600 hover:text-primary-700"
          >
            05128&nbsp;4000778
          </a>
          <br />
          E-Mail: bettina (at) geffert.de – bitte „(at)“ durch @ ersetzen
        </p>
      </LegalSection>

      <LegalSection title="2. Allgemeine Hinweise">
        <p>
          Der Schutz Ihrer personenbezogenen Daten ist mir wichtig. Ich
          verarbeite Ihre Daten ausschließlich auf Grundlage der gesetzlichen
          Bestimmungen, insbesondere der Datenschutz-Grundverordnung (DSGVO) und
          des Bundesdatenschutzgesetzes (BDSG).
        </p>
        <p>
          Diese Website informiert über mein Angebot zur LRS-Förderung. Eine
          Nutzung ist grundsätzlich ohne Angabe personenbezogener Daten möglich.
          Personenbezogene Daten werden nur erhoben, wenn Sie mir diese
          freiwillig mitteilen (z. B. per Kontaktformular, E-Mail oder Telefon).
        </p>
      </LegalSection>

      <LegalSection title="3. Hosting">
        <p>
          Diese Website wird bei einem externen Dienstleister (Hoster) betrieben.
          Beim Aufruf der Website können technische Zugriffsdaten (z. B.
          IP-Adresse, Datum und Uhrzeit des Abrufs, aufgerufene Seite,
          Browsertyp) in Server-Logfiles verarbeitet werden. Die Verarbeitung
          erfolgt zur Bereitstellung und Sicherheit der Website auf Grundlage von
          Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einem
          funktionsfähigen Webauftritt).
        </p>
        <p>
          Der Hoster verarbeitet die Daten in meinem Auftrag. Mit dem Hoster
          besteht ein Auftragsverarbeitungsvertrag gemäß Art. 28 DSGVO, soweit
          dies gesetzlich erforderlich ist.
        </p>
      </LegalSection>

      <LegalSection title="4. Kontaktformular">
        <p>
          Wenn Sie das Kontaktformular nutzen, verarbeite ich die von Ihnen
          eingegebenen Daten (z. B. Name, E-Mail-Adresse, Telefonnummer, Alter
          des Kindes, Nachricht), um Ihre Anfrage zu bearbeiten.
        </p>
        <p>
          <strong className="text-text-primary">Rechtsgrundlage:</strong>{" "}
          Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen) bzw. Art. 6
          Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Beantwortung von
          Anfragen).
        </p>
        <p>
          Die Übermittlung erfolgt über den Dienst{" "}
          <strong className="text-text-primary">Web3Forms</strong> (Betreiber:
          Web3Forms, siehe{" "}
          <a
            href="https://web3forms.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-600 hover:text-primary-700 underline"
          >
            web3forms.com
          </a>
          ). Dabei werden Ihre Formulardaten an die Server des Anbieters
          übertragen und von dort an mich per E-Mail weitergeleitet. Je nach
          Standort des Anbieters kann eine Datenübermittlung in Drittländer
          (z. B. USA) erfolgen. Soweit erforderlich, stütze ich mich auf
          geeignete Garantien (z. B. Standardvertragsklauseln) gemäß Art. 46
          DSGVO.
        </p>
        <p>
          Die Daten werden gelöscht, sobald die Anfrage abschließend bearbeitet
          ist und keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
        </p>
      </LegalSection>

      <LegalSection title="5. Kontakt per E-Mail oder Telefon">
        <p>
          Wenn Sie mich per E-Mail oder telefonisch kontaktieren, verarbeite ich
          die von Ihnen mitgeteilten Daten (z. B. Name, Kontaktdaten, Inhalt der
          Anfrage) zur Bearbeitung Ihres Anliegens.
        </p>
        <p>
          <strong className="text-text-primary">Rechtsgrundlage:</strong> Art.
          6 Abs. 1 lit. b DSGVO bzw. Art. 6 Abs. 1 lit. f DSGVO.
        </p>
      </LegalSection>

      <LegalSection title="6. Eingebettete Karte (Google Maps)">
        <p>
          Auf der Seite „Kontakt“ ist eine Karte von Google Maps eingebunden. Beim
          Laden der Seite wird eine Verbindung zu Servern von Google hergestellt.
          Dabei können personenbezogene Daten (z. B. IP-Adresse) an Google
          übermittelt werden.
        </p>
        <p>
          <strong className="text-text-primary">Anbieter:</strong> Google Ireland
          Limited, Gordon House, Barrow Street, Dublin 4, Irland (ggf.
          Übermittlung an Google LLC, USA).
        </p>
        <p>
          <strong className="text-text-primary">Rechtsgrundlage:</strong> Art. 6
          Abs. 1 lit. f DSGVO (berechtigtes Interesse an einer übersichtlichen
          Darstellung des Standorts).
        </p>
        <p>
          Weitere Informationen finden Sie in der Datenschutzerklärung von
          Google:{" "}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-600 hover:text-primary-700 underline"
          >
            https://policies.google.com/privacy
          </a>
        </p>
      </LegalSection>

      <LegalSection title="7. Cookies und Analyse-Tools">
        <p>
          Diese Website verwendet keine Tracking- oder Marketing-Cookies und
          keine Analyse-Tools (z. B. Google Analytics). Es werden nur technisch
          notwendige Verfahren eingesetzt, die für den Betrieb der Website
          erforderlich sind.
        </p>
      </LegalSection>

      <LegalSection title="8. Speicherdauer">
        <p>
          Personenbezogene Daten werden nur so lange gespeichert, wie es für die
          jeweiligen Zwecke erforderlich ist oder gesetzliche
          Aufbewahrungsfristen bestehen (z. B. aus dem Steuerrecht).
        </p>
      </LegalSection>

      <LegalSection title="9. Ihre Rechte">
        <p>Sie haben gegenüber mir folgende Rechte:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Auskunft über Ihre gespeicherten Daten (Art. 15 DSGVO)</li>
          <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
          <li>Löschung (Art. 17 DSGVO)</li>
          <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
          <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
          <li>Widerspruch gegen Verarbeitung (Art. 21 DSGVO)</li>
          <li>
            Widerruf erteilter Einwilligungen (Art. 7 Abs. 3 DSGVO) mit Wirkung
            für die Zukunft
          </li>
        </ul>
        <p>
          Zur Ausübung Ihrer Rechte genügt eine formlose Mitteilung an die oben
          genannten Kontaktdaten.
        </p>
      </LegalSection>

      <LegalSection title="10. Beschwerderecht">
        <p>
          Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu
          beschweren, wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer
          Daten gegen datenschutzrechtliche Vorschriften verstößt.
        </p>
        <p>
          Zuständig für Niedersachsen ist insbesondere:
          <br />
          Die Landesbeauftragte für den Datenschutz Niedersachsen
          <br />
          Prinzenstraße 5
          <br />
          30159 Hannover
          <br />
          <a
            href="https://www.lfd.niedersachsen.de"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-600 hover:text-primary-700 underline"
          >
            www.lfd.niedersachsen.de
          </a>
        </p>
      </LegalSection>

      <LegalSection title="11. Änderung dieser Datenschutzerklärung">
        <p>
          Ich behalte mir vor, diese Datenschutzerklärung anzupassen, damit sie
          stets den aktuellen rechtlichen Anforderungen entspricht oder Änderungen
          meiner Leistungen abbildet. Für Ihren erneuten Besuch gilt dann die
          neue Datenschutzerklärung.
        </p>
        <p>
          <strong className="text-text-primary">Stand:</strong> Mai 2026
        </p>
        <p>
          Weitere Informationen finden Sie im{" "}
          <Link
            href="/impressum"
            className="text-primary-600 hover:text-primary-700 underline"
          >
            Impressum
          </Link>
          .
        </p>
      </LegalSection>
    </LegalPageLayout>
  );
}
