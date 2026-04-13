import type { Metadata } from "next";
import Hero from "@/components/Hero";
import CTASection from "@/components/CTASection";
import {
  GraduationCap,
  Microscope,
  HandHeart,
  BookOpenCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Über mich – Bettina Geffert",
  description:
    "Logopädin & Dipl. Lehrlogopädin mit über 20 Jahren Erfahrung. Erfahren Sie mehr über meinen Hintergrund, meine Arbeitsweise und meine Motivation.",
};

export default function UeberMichPage() {
  return (
    <>
      <Hero
        title="Über mich"
        subtitle="Logopädin, Lehrlogopädin und LRS-Therapeutin mit Leidenschaft. Ich verbinde wissenschaftliche Expertise mit herzlicher, individueller Förderung."
        showCta={false}
      />

      {/* Vita */}
      <section className="py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="w-full md:w-1/3">
              <div className="bg-primary-50 rounded-2xl aspect-[3/4] flex items-center justify-center border border-primary-100">
                <div className="text-center p-6">
                  <div className="w-20 h-20 mx-auto bg-primary-100 rounded-full flex items-center justify-center mb-4">
                    <HandHeart className="w-10 h-10 text-primary-600" />
                  </div>
                  <p className="text-sm text-primary-600 font-medium">Bettina Geffert</p>
                  <p className="text-xs text-primary-400 mt-1">
                    Logopädin & Dipl. Lehrlogopädin
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full md:w-2/3">
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-text-primary mb-6">
                Bettina Geffert
              </h2>
              <p className="text-primary-600 font-medium text-lg mb-6">
                Logopädin & Dipl. Lehrlogopädin
              </p>
              <div className="space-y-4 text-text-secondary text-lg leading-relaxed">
                <p>
                  Seit über 20 Jahren arbeite ich als Logopädin mit Kindern und
                  Jugendlichen. In dieser Zeit habe ich immer wieder erlebt, wie
                  eng Sprache, Lautverarbeitung und Schriftsprache miteinander
                  verknüpft sind.
                </p>
                <p>
                  Aus dieser Erfahrung heraus habe ich mich auf die Förderung von
                  Kindern mit Lese-Rechtschreib-Schwäche spezialisiert – mit
                  einem Ansatz, der bei den sprachlichen Grundlagen beginnt.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Qualifikationen */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-text-primary mb-14 text-center">
            Wissenschaftlicher Hintergrund
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="p-8 bg-warm-50 rounded-2xl border border-warm-100">
              <GraduationCap className="w-8 h-8 text-primary-600 mb-4" />
              <h3 className="font-serif text-xl font-semibold text-text-primary mb-3">
                Studium
              </h3>
              <p className="text-text-secondary leading-relaxed">
                Studium der Lehr- und Forschungslogopädie mit dem Abschluss als
                Diplom-Lehrlogopädin. Fundiertes wissenschaftliches Verständnis
                von Sprachentwicklung und Sprachverarbeitung.
              </p>
            </div>
            <div className="p-8 bg-warm-50 rounded-2xl border border-warm-100">
              <Microscope className="w-8 h-8 text-primary-600 mb-4" />
              <h3 className="font-serif text-xl font-semibold text-text-primary mb-3">
                Lehrtätigkeit
              </h3>
              <p className="text-text-secondary leading-relaxed">
                Lehrtätigkeit an der HAWK Hildesheim und der Europäischen
                Wissenschaftlichen Gesellschaft (EWS) Rostock. Vermittlung von
                Fachwissen an die nächste Generation von Therapeuten.
              </p>
            </div>
            <div className="p-8 bg-warm-50 rounded-2xl border border-warm-100">
              <BookOpenCheck className="w-8 h-8 text-primary-600 mb-4" />
              <h3 className="font-serif text-xl font-semibold text-text-primary mb-3">
                BVL-Weiterbildung
              </h3>
              <p className="text-text-secondary leading-relaxed">
                Zertifizierte Weiterbildung des Bundesverbandes Legasthenie und
                Dyskalkulie (BVL). Theoretischer Teil abgeschlossen –
                spezialisierte Kompetenz in der LRS-Diagnostik und -Therapie.
              </p>
            </div>
            <div className="p-8 bg-warm-50 rounded-2xl border border-warm-100">
              <HandHeart className="w-8 h-8 text-primary-600 mb-4" />
              <h3 className="font-serif text-xl font-semibold text-text-primary mb-3">
                Über 20 Jahre Praxis
              </h3>
              <p className="text-text-secondary leading-relaxed">
                Zwei Jahrzehnte therapeutische Arbeit mit Kindern haben mir
                gezeigt, wie wichtig es ist, die individuellen Bedürfnisse jedes
                Kindes zu erkennen und dort anzusetzen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Arbeitsweise */}
      <section className="py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-text-primary mb-6">
            Meine Arbeitsweise
          </h2>
          <div className="space-y-4 text-text-secondary text-lg leading-relaxed">
            <p>
              In meiner Arbeit verbinde ich <strong>Praxis und Wissenschaft</strong>.
              Mein Fokus liegt auf den sogenannten Vorläuferfertigkeiten – also
              den sprachlichen Grundlagen, die Kinder brauchen, um Lesen und
              Schreiben erfolgreich zu lernen.
            </p>
            <p>
              Dazu gehören unter anderem die phonologische Bewusstheit, also die
              Fähigkeit, Laute in Wörtern zu erkennen und zu unterscheiden, sowie
              die Buchstabe-Laut-Zuordnung. Viele Kinder mit LRS haben genau
              hier Schwierigkeiten – und genau hier setze ich an.
            </p>
            <p>
              Die Förderung findet in einer ruhigen, wertschätzenden Atmosphäre
              statt. Jedes Kind wird als Ganzes wahrgenommen – mit seinen
              Stärken, seinen Schwierigkeiten und seinen Gefühlen.
            </p>
          </div>
        </div>
      </section>

      {/* Persönliches Anliegen */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary-50 rounded-2xl p-10 sm:p-14 border border-primary-100">
            <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-text-primary mb-6">
              Mein persönliches Anliegen
            </h2>
            <div className="space-y-4 text-text-secondary text-lg leading-relaxed">
              <p>
                Ich habe in meiner langjährigen Arbeit viele Kinder erlebt, die
                unter ihren Schwierigkeiten im Lesen und Schreiben gelitten
                haben – nicht nur schulisch, sondern auch emotional.
              </p>
              <p>
                Mein Anliegen ist es, diesen <strong>Frust zu reduzieren</strong> und
                den Kindern die <strong>Freude am Lernen zurückzugeben</strong>.
                Denn wenn ein Kind versteht, warum etwas schwierig ist, und merkt,
                dass es Fortschritte macht, verändert sich alles.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Lassen Sie uns ins Gespräch kommen"
        description="Ich freue mich darauf, Sie und Ihr Kind persönlich kennenzulernen."
      />
    </>
  );
}
