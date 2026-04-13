import Hero from "@/components/Hero";
import FeatureCard from "@/components/FeatureCard";
import CTASection from "@/components/CTASection";
import {
  Heart,
  Sparkles,
  BookOpen,
  Award,
  Stethoscope,
  GraduationCap,
  ShieldCheck,
  UserCheck,
  MapPin,
  CalendarCheck,
  Lightbulb,
} from "lucide-react";

const trustPoints = [
  {
    icon: Award,
    text: "Über 20 Jahre Berufserfahrung",
  },
  {
    icon: CalendarCheck,
    text: "Schnelle Terminvergabe möglich",
  },
  {
    icon: Lightbulb,
    text: "Nicht nur üben – verstehen lernen",
  },
];

export default function Home() {
  return (
    <>
      <Hero
        greeting="Herzlich willkommen"
        title="Schön, dass Sie da sind!"
        subtitle="Wenn Lesen und Schreiben zur Herausforderung werden, braucht es mehr als Übung – eine Förderung, die die Grundlagen versteht und Kinder Schritt für Schritt sicher begleitet."
        secondaryText="In meiner Zweigstelle in Peine-Stederdorf biete ich gezielte Unterstützung für Kinder mit Lese-Rechtschreib-Schwäche (LRS) an. Mein Ziel ist es, Kinder individuell zu fördern und ihnen wieder mehr Sicherheit und Freude am Lernen zu ermöglichen."
      />

      {/* Trust-Bar */}
      <section className="relative z-10 -mt-8 sm:-mt-10 pb-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg border border-warm-100 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-warm-100">
            {trustPoints.map((point) => (
              <div
                key={point.text}
                className="flex items-center gap-4 px-6 py-5 sm:py-6"
              >
                <div className="w-10 h-10 bg-primary-50 rounded-full flex items-center justify-center shrink-0">
                  <point.icon className="w-5 h-5 text-primary-600" />
                </div>
                <span className="font-medium text-text-primary text-sm sm:text-base leading-snug">
                  {point.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mein Angebot */}
      <section className="py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-text-primary">
              Mein Angebot
            </h2>
            <p className="mt-4 text-text-secondary text-lg leading-relaxed">
              Jedes Kind lernt anders. Meine Förderung setzt dort an, wo die
              Schwierigkeiten beginnen – bei den sprachlichen Basiskompetenzen.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={Heart}
              title="Individuelle Förderung"
              description="Jedes Kind bringt seine eigene Geschichte mit. Die Förderung wird individuell auf die Stärken und Schwächen Ihres Kindes abgestimmt."
            />
            <FeatureCard
              icon={Sparkles}
              title="Selbstvertrauen stärken"
              description="Neben dem fachlichen Fortschritt steht auch das emotionale Wohlbefinden im Fokus. Ihr Kind soll wieder Freude am Lernen finden."
            />
            <FeatureCard
              icon={BookOpen}
              title="Strukturierte Methoden"
              description="Auf Basis wissenschaftlich fundierter Methoden arbeite ich systematisch an den Grundlagen der Lese- und Schreibfähigkeit."
            />
          </div>
        </div>
      </section>

      {/* Warum diese Förderung – USP */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-text-primary">
              Warum diese Förderung?
            </h2>
            <p className="mt-4 text-text-secondary text-lg leading-relaxed">
              Als Logopädin bringe ich einen besonderen Blick auf
              Lese-Rechtschreib-Schwierigkeiten mit – denn die Grundlagen liegen
              in der Sprachverarbeitung.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Award,
                title: "Über 20 Jahre Berufserfahrung",
                desc: "Langjährige Erfahrung in der therapeutischen Arbeit mit Kindern und Jugendlichen.",
              },
              {
                icon: Stethoscope,
                title: "Logopädischer Hintergrund",
                desc: "Fundiertes Wissen über Basiskompetenzen und Lautverarbeitung als Grundlage für Lesen und Schreiben.",
              },
              {
                icon: GraduationCap,
                title: "BVL-zertifizierte Weiterbildung",
                desc: "Zertifizierte Weiterbildung des Bundesverbandes Legasthenie und Dyskalkulie (Theorie abgeschlossen).",
              },
              {
                icon: ShieldCheck,
                title: "Anerkennung durch das Jugendamt",
                desc: "Die Förderung ist anerkannt und kann über das Jugendamt finanziert werden.",
              },
              {
                icon: UserCheck,
                title: "Persönliche Bezugsperson",
                desc: "Ihr Kind wird durchgehend von mir betreut – kein Wechsel der Bezugsperson.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex gap-4 p-6 rounded-xl bg-warm-50 border border-warm-100"
              >
                <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-text-primary mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Standort */}
      <section className="py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-10 sm:p-14 shadow-sm border border-warm-100 flex flex-col md:flex-row items-center gap-10">
            <div className="w-16 h-16 bg-primary-50 rounded-2xl flex items-center justify-center shrink-0">
              <MapPin className="w-8 h-8 text-primary-600" />
            </div>
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-text-primary mb-3">
                Zweigstelle Peine-Stederdorf
              </h2>
              <p className="text-text-secondary text-lg leading-relaxed">
                Die Förderung findet in ruhiger, angenehmer Atmosphäre in
                Peine-Stederdorf statt. Gut erreichbar für Familien aus Peine
                und Umgebung.
              </p>
              <p className="mt-3 text-text-muted text-sm">
                Dinkelkamp 27, 31228 Peine (Stederdorf)
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
