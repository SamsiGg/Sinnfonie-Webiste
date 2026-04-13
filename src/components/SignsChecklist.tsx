"use client";

import { useState } from "react";
import { CheckCircle2, Circle, AlertTriangle } from "lucide-react";

const signs = [
  "Ihr Kind liest auffallend langsam und stockend.",
  "Beim Schreiben werden häufig Buchstaben vertauscht oder ausgelassen.",
  "Hausaufgaben in Deutsch dauern ungewöhnlich lange und sind mit viel Frust verbunden.",
  "Trotz regelmäßigem Üben verbessern sich die Leistungen kaum.",
  "Ihr Kind vermeidet das Lesen oder Vorlesen.",
  "Es fällt schwer, Gehörtes in die richtige Schriftform zu bringen.",
  "Das Selbstvertrauen in Bezug auf Lesen und Schreiben nimmt ab.",
];

export default function SignsChecklist() {
  const [checked, setChecked] = useState<boolean[]>(new Array(signs.length).fill(false));
  const checkedCount = checked.filter(Boolean).length;

  const toggle = (index: number) => {
    setChecked((prev) => {
      const next = [...prev];
      next[index] = !next[index];
      return next;
    });
  };

  return (
    <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-sm border border-warm-100">
      <div className="flex items-start gap-4 mb-8">
        <div className="w-12 h-12 bg-warm-100 rounded-xl flex items-center justify-center shrink-0">
          <AlertTriangle className="w-6 h-6 text-warm-500" />
        </div>
        <div>
          <h3 className="font-serif text-2xl font-semibold text-text-primary">
            Woran erkenne ich, ob mein Kind Hilfe braucht?
          </h3>
          <p className="text-text-secondary mt-1">
            Klicken Sie auf die Aussagen, die auf Ihr Kind zutreffen.
          </p>
        </div>
      </div>

      <div className="space-y-3">
        {signs.map((sign, index) => (
          <button
            key={index}
            onClick={() => toggle(index)}
            className={`w-full flex items-start gap-4 p-4 rounded-xl text-left transition-all ${
              checked[index]
                ? "bg-primary-50 border-primary-200"
                : "bg-warm-50 border-warm-100 hover:bg-warm-100"
            } border`}
          >
            {checked[index] ? (
              <CheckCircle2 className="w-5 h-5 text-primary-600 mt-0.5 shrink-0" />
            ) : (
              <Circle className="w-5 h-5 text-text-muted mt-0.5 shrink-0" />
            )}
            <span
              className={`text-sm leading-relaxed ${
                checked[index] ? "text-primary-800 font-medium" : "text-text-secondary"
              }`}
            >
              {sign}
            </span>
          </button>
        ))}
      </div>

      {checkedCount >= 3 && (
        <div className="mt-8 p-5 bg-primary-50 rounded-xl border border-primary-200">
          <p className="text-primary-800 font-medium text-sm">
            Mehrere dieser Anzeichen treffen zu? Das kann ein Hinweis auf eine
            Lese-Rechtschreib-Schwäche sein. In einem persönlichen Gespräch kann ich
            gemeinsam herausfinden, wie ich Ihr Kind am besten unterstützen kann.
          </p>
        </div>
      )}
    </div>
  );
}
