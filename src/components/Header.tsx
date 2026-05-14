"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/lrs", label: "LRS" },
  { href: "/ueber-mich", label: "Über mich" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="bg-white/90 backdrop-blur-sm sticky top-0 z-50 border-b border-warm-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3 sm:gap-4 min-w-0">
            <Link href="/" className="group shrink-0">
              <Image
                src="/logo.jpeg"
                alt="Sinnfonie – Bettina Geffert, Logopädin"
                width={220}
                height={72}
                className="h-14 w-auto object-contain shrink-0"
                priority
              />
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-primary-600 ${
                  pathname === link.href
                    ? "text-primary-700 border-b-2 border-primary-500 pb-1"
                    : "text-text-secondary"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 bg-primary-600 text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-primary-700 transition-colors"
            >
              <Phone className="w-4 h-4" />
              Termin anfragen
            </Link>
          </nav>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-text-secondary hover:text-primary-600 transition-colors"
            aria-label="Menü öffnen"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-warm-100">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`block py-2 px-3 rounded-lg text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? "bg-primary-50 text-primary-700"
                    : "text-text-secondary hover:bg-warm-50"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/kontakt"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center gap-2 bg-primary-600 text-white px-5 py-3 rounded-lg text-sm font-medium hover:bg-primary-700 transition-colors"
            >
              <Phone className="w-4 h-4" />
              Termin anfragen
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
