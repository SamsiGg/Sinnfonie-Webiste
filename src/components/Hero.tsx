import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface HeroProps {
  greeting?: string;
  title: string;
  highlight?: string;
  subtitle: string;
  secondaryText?: string;
  showCta?: boolean;
  ctaText?: string;
  ctaHref?: string;
  imageSrc?: string;
  imageAlt?: string;
}

export default function Hero({
  greeting,
  title,
  highlight,
  subtitle,
  secondaryText,
  showCta = true,
  ctaText = "Termin anfragen",
  ctaHref = "/kontakt",
  imageSrc,
  imageAlt = "Hero Bild",
}: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-warm-50 via-white to-primary-50">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--color-primary-100)_0%,_transparent_60%)] opacity-40" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="max-w-3xl lg:pr-2">
          {greeting && (
            <p className="text-primary-500 font-medium text-lg mb-3 tracking-wide">
              {greeting}
            </p>
          )}
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-text-primary leading-tight">
            {title}
            {highlight && (
              <span className="text-primary-600 block mt-2">{highlight}</span>
            )}
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-text-secondary leading-relaxed max-w-2xl">
            {subtitle}
          </p>
          {secondaryText && (
            <p className="mt-4 text-lg sm:text-xl text-text-secondary leading-relaxed max-w-2xl">
              {secondaryText}
            </p>
          )}
          {showCta && (
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href={ctaHref}
                className="inline-flex items-center gap-2 bg-primary-600 text-white px-8 py-4 rounded-xl text-base font-medium hover:bg-primary-700 transition-all hover:shadow-lg hover:shadow-primary-600/20"
              >
                {ctaText}
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/lrs"
                className="inline-flex items-center gap-2 bg-white text-primary-700 px-8 py-4 rounded-xl text-base font-medium hover:bg-primary-50 transition-all border border-primary-200"
              >
                Mehr über LRS erfahren
              </Link>
            </div>
          )}
          </div>

          {imageSrc && (
            <div className="relative overflow-hidden rounded-2xl shadow-xl border border-warm-100">
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={1024}
                height={576}
                priority
                className="w-full h-[260px] sm:h-[340px] lg:h-[430px] object-cover object-center"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
