import type { Metadata } from "next";
import Hero from "@/components/Hero";
import { MapPin, Clock, Phone, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Nehmen Sie Kontakt auf für ein unverbindliches Erstgespräch zur LRS-Förderung in Peine-Stederdorf. Bettina Geffert – Dinkelkamp 27, 31228 Peine.",
};

export default function KontaktPage() {
  return (
    <>
      <Hero
        title="Kontakt"
        subtitle="Nehmen Sie gerne Kontakt mit mir auf. Ich freue mich auf ein unverbindliches Erstgespräch."
        showCta={false}
      />

      <section className="py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="font-serif text-3xl font-semibold text-text-primary mb-8">
                So erreichen Sie mich
              </h2>

              <div className="space-y-6">
                <div className="flex gap-5 p-6 bg-white rounded-2xl border border-warm-100 shadow-sm">
                  <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-primary mb-1">
                      Praxis-Adresse
                    </h3>
                    <p className="text-text-secondary">
                      Dinkelkamp 27
                      <br />
                      31228 Peine (Stederdorf)
                    </p>
                  </div>
                </div>

                <div className="flex gap-5 p-6 bg-white rounded-2xl border border-warm-100 shadow-sm">
                  <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-primary mb-1">
                      Telefon
                    </h3>
                    <p className="text-text-secondary">
                      Telefonnummer auf Anfrage
                    </p>
                  </div>
                </div>

                <div className="flex gap-5 p-6 bg-white rounded-2xl border border-warm-100 shadow-sm">
                  <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-primary mb-1">
                      E-Mail
                    </h3>
                    <a
                      href="mailto:info@sinnfonie.de"
                      className="text-primary-600 hover:text-primary-700 transition-colors"
                    >
                      info@sinnfonie.de
                    </a>
                  </div>
                </div>

                <div className="flex gap-5 p-6 bg-white rounded-2xl border border-warm-100 shadow-sm">
                  <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-primary mb-1">
                      Terminvereinbarung
                    </h3>
                    <p className="text-text-secondary">
                      Termine nach Vereinbarung. Bitte nutzen Sie das
                      Kontaktformular oder schreiben Sie mir eine E-Mail.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10 p-6 bg-primary-50 rounded-2xl border border-primary-100">
                <h3 className="font-semibold text-text-primary mb-2">
                  Für Familien aus Peine und Umgebung
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Die Zweigstelle in Stederdorf ist gut erreichbar für Familien
                  aus Peine, Stederdorf, Vöhrum, Rosenthal, Dungelbeck und
                  Umgebung. Kostenlose Parkplätze sind vorhanden.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="font-serif text-3xl font-semibold text-text-primary mb-8">
                Termin anfragen
              </h2>
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-text-primary mb-2"
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-warm-200 bg-white text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    placeholder="Ihr vollständiger Name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-text-primary mb-2"
                  >
                    E-Mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-warm-200 bg-white text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    placeholder="ihre.email@beispiel.de"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-text-primary mb-2"
                  >
                    Telefon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 rounded-xl border border-warm-200 bg-white text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    placeholder="Ihre Telefonnummer (optional)"
                  />
                </div>

                <div>
                  <label
                    htmlFor="child-age"
                    className="block text-sm font-medium text-text-primary mb-2"
                  >
                    Alter des Kindes
                  </label>
                  <input
                    type="text"
                    id="child-age"
                    name="child-age"
                    className="w-full px-4 py-3 rounded-xl border border-warm-200 bg-white text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    placeholder="z.B. 8 Jahre, 3. Klasse"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-text-primary mb-2"
                  >
                    Ihre Nachricht *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-warm-200 bg-white text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-y"
                    placeholder="Erzählen Sie mir kurz, wobei Ihr Kind Unterstützung braucht..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary-600 text-white px-8 py-4 rounded-xl text-base font-medium hover:bg-primary-700 transition-all hover:shadow-lg hover:shadow-primary-600/20"
                >
                  Nachricht senden
                </button>

                <p className="text-text-muted text-xs text-center">
                  Ich melde mich in der Regel innerhalb von 1–2 Werktagen bei Ihnen.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Embed Placeholder */}
      <section className="pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl overflow-hidden border border-warm-100 shadow-sm">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2432.8!2d10.2343!3d52.3227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sDinkelkamp+27%2C+31228+Peine!5e0!3m2!1sde!2sde!4v1"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Standort Sinnfonie LRS-Förderung Peine-Stederdorf"
              className="w-full"
            />
          </div>
        </div>
      </section>
    </>
  );
}
