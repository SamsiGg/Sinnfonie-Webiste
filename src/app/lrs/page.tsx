import type { Metadata } from "next";
import Hero from "@/components/Hero";
import ProcessStep from "@/components/ProcessStep";
import SignsChecklist from "@/components/SignsChecklist";
import CTASection from "@/components/CTASection";
import { Target, BookOpen, SmilePlus } from "lucide-react";

export const metadata: Metadata = {
  title: "LRS – Lese-Rechtschreib-Schwäche",
  description:
    "Was ist LRS? Erfahren Sie mehr über Symptome, den Unterschied zwischen LRS und Lese-Rechtschreib-Störung und den Ablauf der individuellen Förderung in Peine.",
};

const processSteps = [
  {
    title: "Erstgespräch",
    description:
      "In einem persönlichen Gespräch lernen wir uns kennen. Sie schildern mir Ihre Beobachtungen und ich erkläre Ihnen, wie die Förderung abläuft.",
  },
  {
    title: "Einschätzung & Diagnostik",
    description:
      "Mit gezielten Verfahren verschaffe ich mir ein Bild von den Stärken und Schwierigkeiten Ihres Kindes im Bereich Lesen und Schreiben.",
  },
  {
    title: "Individuelle Förderplanung",
    description:
      "Auf Basis der Ergebnisse erstelle ich einen individuellen Förderplan, der genau dort ansetzt, wo Ihr Kind Unterstützung braucht.",
  },
  {
    title: "Regelmäßige Förderung",
    description:
      "In regelmäßigen Sitzungen arbeiten wir systematisch und mit viel Geduld an den Grundlagen. Die Fortschritte werden kontinuierlich überprüft und der Plan angepasst.",
  },
];

const goals = [
  {
    icon: Target,
    title: "Sicherheit mit Lauten",
    description:
      "Ihr Kind lernt, Laute sicher zu erkennen, zu unterscheiden und den richtigen Buchstaben zuzuordnen.",
  },
  {
    icon: BookOpen,
    title: "Flüssiges Lesen",
    description:
      "Schritt für Schritt wird das Lesen flüssiger und sicherer – von einzelnen Wörtern bis hin zu ganzen Texten.",
  },
  {
    icon: SmilePlus,
    title: "Stärkung des Selbstvertrauens",
    description:
      "Mit jedem Fortschritt wächst das Vertrauen in die eigenen Fähigkeiten. Ihr Kind soll wieder gerne lesen und schreiben.",
  },
];

export default function LRSPage() {
  return (
    <>
      <Hero
        title="Lese-Rechtschreib-Schwäche"
        subtitle="Wenn Lesen und Schreiben zur Herausforderung werden – erfahren Sie, was LRS bedeutet und wie individuelle Förderung helfen kann."
        showCta={false}
      />

      {/* Was ist LRS? */}
      <section className="py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-text-primary mb-6">
            Was ist LRS?
          </h2>
          <div className="prose-custom space-y-4 text-text-secondary text-lg leading-relaxed">
            <p>
              Lese-Rechtschreib-Schwäche (LRS) beschreibt ausgeprägte
              Schwierigkeiten beim Erlernen des Lesens und Schreibens, die nicht
              auf mangelnde Intelligenz oder fehlenden Fleiß zurückzuführen sind.
            </p>
            <p>
              Typische Anzeichen können sein: auffallend langsames und stockendes
              Lesen, häufige Fehler beim Schreiben, Buchstaben werden vertauscht
              oder ausgelassen, und die Hausaufgaben werden zur täglichen
              Belastung für die ganze Familie.
            </p>
            <p>
              Kinder mit LRS brauchen keine „klassische Nachhilfe", bei der mehr
              geübt wird. Sie brauchen eine Förderung, die an den sprachlichen
              Grundlagen ansetzt – bei der Lautverarbeitung, der
              Buchstabe-Laut-Zuordnung und dem grundlegenden Verständnis von
              Sprache.
            </p>
          </div>

          <div className="mt-12 p-8 bg-warm-50 rounded-2xl border border-warm-100">
            <h3 className="font-serif text-xl font-semibold text-text-primary mb-4">
              LRS oder Lese-Rechtschreib-Störung?
            </h3>
            <p className="text-text-secondary leading-relaxed">
              Im Alltag werden die Begriffe oft synonym verwendet. Fachlich
              beschreibt „Lese-Rechtschreib-Störung" eine diagnostizierte,
              anhaltende Störung, während „LRS" als Oberbegriff für
              Lese-Rechtschreib-Schwierigkeiten verschiedener Ausprägung verwendet
              wird. Für Eltern ist die Unterscheidung weniger wichtig als die
              Frage: <strong>Wie kann meinem Kind geholfen werden?</strong> Genau
              hier setze ich an.
            </p>
          </div>
        </div>
      </section>

      {/* Anzeichen-Checkliste */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SignsChecklist />
        </div>
      </section>

      {/* Der Ablauf */}
      <section className="py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-text-primary mb-4">
            Der Ablauf
          </h2>
          <p className="text-text-secondary text-lg leading-relaxed mb-14 max-w-2xl">
            Von der ersten Kontaktaufnahme bis zur regelmäßigen Förderung – so
            läuft der Prozess ab.
          </p>
          <div>
            {processSteps.map((step, index) => (
              <ProcessStep
                key={step.title}
                step={index + 1}
                title={step.title}
                description={step.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Ziele */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-text-primary">
              Ziele der Förderung
            </h2>
            <p className="mt-4 text-text-secondary text-lg leading-relaxed">
              Gemeinsam arbeiten wir daran, dass Ihr Kind sicher und mit Freude
              lesen und schreiben lernt.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {goals.map((goal) => (
              <div
                key={goal.title}
                className="text-center p-8 rounded-2xl bg-warm-50 border border-warm-100"
              >
                <div className="w-14 h-14 mx-auto bg-primary-100 rounded-2xl flex items-center justify-center mb-5">
                  <goal.icon className="w-7 h-7 text-primary-600" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-text-primary mb-3">
                  {goal.title}
                </h3>
                <p className="text-text-secondary leading-relaxed text-sm">
                  {goal.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Bereit für den ersten Schritt?"
        description="Das Erstgespräch ist unverbindlich. Gemeinsam finden wir heraus, wie ich Ihr Kind am besten unterstützen kann."
      />
    </>
  );
}
