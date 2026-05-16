import type { Metadata } from "next";
import LegalPageLayout, { LegalSection } from "@/components/LegalPageLayout";

export const metadata: Metadata = {
  title: "Impressum",
  description:
    "Impressum und Anbieterkennzeichnung der Website Sinnfonie – LRS-Förderung Bettina Geffert, Peine-Stederdorf.",
};

export default function ImpressumPage() {
  return (
    <LegalPageLayout
      title="Impressum"
      subtitle="Angaben gemäß § 5 Digitale-Dienste-Gesetz (DDG)"
    >
      <LegalSection title="Anbieterin">
        <p>
          <strong className="text-text-primary">Bettina Geffert</strong>
          <br />
          Sinnfonie – LRS-Förderung
          <br />
          Dinkelkamp 27
          <br />
          31228 Peine (Stederdorf)
        </p>
      </LegalSection>

      <LegalSection title="Kontakt">
        <p>
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

      <LegalSection title="Berufsbezeichnung">
        <p>
          Logopädin, Dipl. Lehrlogopädin
          <br />
          Die Berufsbezeichnung wurde in der Bundesrepublik Deutschland
          verliehen.
        </p>
        <p>
          Als Angehörige eines Heilberufs unterliege ich den berufsrechtlichen
          Vorschriften des Landes Niedersachsen (insbesondere dem
          Niedersächsischen Heilberufegesetz). Nähere Angaben zu
          Aufsichtsbehörde und berufsrechtlichen Regelungen erhalten Sie auf
          Anfrage.
        </p>
      </LegalSection>

      <LegalSection title="Umsatzsteuer">
        <p>
          Gemäß § 19 UStG wird keine Umsatzsteuer berechnet (Kleinunternehmerin).
        </p>
      </LegalSection>

      <LegalSection title="Verbraucherstreitbeilegung">
        <p>
          Die Europäische Kommission stellt eine Plattform zur
          Online-Streitbeilegung (OS) bereit:{" "}
          <a
            href="https://ec.europa.eu/consumers/odr/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-600 hover:text-primary-700 underline"
          >
            https://ec.europa.eu/consumers/odr/
          </a>
        </p>
        <p>
          Ich bin nicht verpflichtet und nicht bereit, an
          Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
          teilzunehmen.
        </p>
      </LegalSection>

      <LegalSection title="Haftung für Inhalte">
        <p>
          Als Diensteanbieterin bin ich gemäß § 7 Abs. 1 DDG für eigene Inhalte
          auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§
          8 bis 10 DDG bin ich als Diensteanbieterin jedoch nicht verpflichtet,
          übermittelte oder gespeicherte fremde Informationen zu überwachen oder
          nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
          hinweisen.
        </p>
        <p>
          Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
          Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
          Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der
          Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden
          entsprechender Rechtsverletzungen werde ich diese Inhalte umgehend
          entfernen.
        </p>
      </LegalSection>

      <LegalSection title="Haftung für Links">
        <p>
          Mein Angebot enthält Links zu externen Websites Dritter, auf deren
          Inhalte ich keinen Einfluss habe. Deshalb kann ich für diese fremden
          Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten
          Seiten ist stets die jeweilige Anbieterin oder der jeweilige Anbieter
          verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der
          Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte
          waren zum Zeitpunkt der Verlinkung nicht erkennbar.
        </p>
        <p>
          Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch
          ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei
          Bekanntwerden von Rechtsverletzungen werde ich derartige Links umgehend
          entfernen.
        </p>
      </LegalSection>

      <LegalSection title="Urheberrecht">
        <p>
          Die durch mich erstellten Inhalte und Werke auf diesen Seiten
          unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
          Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
          Grenzen des Urheberrechtes bedürfen meiner schriftlichen Zustimmung.
          Downloads und Kopien dieser Seite sind nur für den privaten, nicht
          kommerziellen Gebrauch gestattet.
        </p>
        <p>
          Soweit die Inhalte auf dieser Seite nicht von mir erstellt wurden,
          werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte
          Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine
          Urheberrechtsverletzung aufmerksam werden, bitte ich um einen
          entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werde
          ich derartige Inhalte umgehend entfernen.
        </p>
      </LegalSection>
    </LegalPageLayout>
  );
}
