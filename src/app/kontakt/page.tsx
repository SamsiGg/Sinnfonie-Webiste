import type { Metadata } from "next";
import Image from "next/image";
import Hero from "@/components/Hero";
import ContactForm from "@/components/ContactForm";
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

      <section className="relative z-10 -mt-6 sm:-mt-8 pb-10 sm:pb-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <figure className="mx-auto">
            <div className="overflow-hidden rounded-3xl shadow-2xl ring-1 ring-warm-200/90 bg-neutral-900">
              <Image
                src="/kontakt-motiv.jpg"
                alt="Symbolisches Foto: Füße auf gepflastertem Weg, roter Pfeil zeigt nach vorn – der nächste Schritt zum Kontakt"
                width={1024}
                height={682}
                className="w-full h-auto align-middle"
                sizes="(max-width: 1024px) 100vw, 1024px"
                priority
              />
            </div>
          </figure>
        </div>
      </section>

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
                      <a
                        href="tel:+4951284000778"
                        className="text-primary-600 hover:text-primary-700 transition-colors font-medium"
                      >
                        05128&nbsp;4000778
                      </a>
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
                    <p className="text-text-secondary">
                      bettina (at) geffert.de
                    </p>
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
              <ContactForm />
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
