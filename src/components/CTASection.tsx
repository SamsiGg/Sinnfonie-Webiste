import Link from "next/link";
import { Phone } from "lucide-react";

interface CTASectionProps {
  title?: string;
  description?: string;
}

export default function CTASection({
  title = "Möchten Sie einen Termin vereinbaren?",
  description = "Ich freue mich darauf, Sie und Ihr Kind kennenzulernen. In einem unverbindlichen Erstgespräch besprechen wir gemeinsam, wie ich Ihr Kind unterstützen kann.",
}: CTASectionProps) {
  return (
    <section className="bg-primary-700 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-white mb-4">
          {title}
        </h2>
        <p className="text-primary-100 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          {description}
        </p>
        <Link
          href="/kontakt"
          className="inline-flex items-center gap-3 bg-white text-primary-700 px-10 py-4 rounded-xl text-lg font-semibold hover:bg-warm-50 transition-all hover:shadow-lg"
        >
          <Phone className="w-5 h-5" />
          Termin anfragen
        </Link>
      </div>
    </section>
  );
}
