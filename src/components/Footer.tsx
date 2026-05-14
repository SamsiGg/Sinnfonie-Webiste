import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary-800 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="font-serif text-xl font-semibold mb-4">Sinnfonie</h3>
            <p className="text-primary-200 text-sm leading-relaxed">
              Individuelle LRS-Förderung für Kinder und Jugendliche in
              Peine-Stederdorf. Über 20 Jahre Erfahrung als Logopädin.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-primary-300">
              Navigation
            </h4>
            <nav className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/lrs", label: "LRS" },
                { href: "/ueber-mich", label: "Über mich" },
                { href: "/kontakt", label: "Kontakt" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-primary-200 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-primary-300">
              Kontakt
            </h4>
            <div className="space-y-3 text-sm text-primary-200">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>Dinkelkamp 27, 31228 Peine (Stederdorf)</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 shrink-0" />
                <a href="tel:+4951284000778" className="hover:text-white transition-colors">
                  05128&nbsp;4000778
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 shrink-0" />
                <span className="text-primary-200">
                  bettina (at) geffert.de
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-700 text-center text-sm text-primary-300">
          <p>&copy; {new Date().getFullYear()} Bettina Geffert – LRS-Förderung Peine. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
}
