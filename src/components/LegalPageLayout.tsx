import Hero from "@/components/Hero";
import Link from "next/link";

interface LegalPageLayoutProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

export function LegalSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="font-serif text-xl sm:text-2xl font-semibold text-text-primary mb-4">
        {title}
      </h2>
      <div className="space-y-3 text-base sm:text-lg">{children}</div>
    </div>
  );
}

export default function LegalPageLayout({
  title,
  subtitle,
  children,
}: LegalPageLayoutProps) {
  return (
    <>
      <Hero title={title} subtitle={subtitle} showCta={false} />

      <section className="py-16 sm:py-24 pb-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-10 text-text-secondary leading-relaxed">
            {children}
          </div>

          <p className="mt-14 pt-8 border-t border-warm-200 text-sm text-text-muted">
            <Link href="/" className="text-primary-600 hover:text-primary-700">
              ← Zurück zur Startseite
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
