"use client";

import { useState, type FormEvent } from "react";

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
const ACCESS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ??
  "14f599aa-5132-475f-8676-f369cce97205";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);

    const name = String(fd.get("name") ?? "").trim();
    const email = String(fd.get("email") ?? "").trim();
    const phone = String(fd.get("phone") ?? "").trim();
    const childAge = String(fd.get("child-age") ?? "").trim();
    const message = String(fd.get("message") ?? "").trim();

    setStatus("submitting");

    try {
      const res = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: "Kontaktanfrage – Sinnfonie Website",
          name,
          email,
          phone: phone || undefined,
          message,
          Alter_des_Kindes: childAge || undefined,
        }),
      });

      const data = (await res.json()) as { success?: boolean; message?: string };

      if (!res.ok || !data.success) {
        setStatus("error");
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
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
          disabled={status === "submitting"}
          autoComplete="name"
          className="w-full px-4 py-3 rounded-xl border border-warm-200 bg-white text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all disabled:opacity-60"
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
          disabled={status === "submitting"}
          autoComplete="email"
          className="w-full px-4 py-3 rounded-xl border border-warm-200 bg-white text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all disabled:opacity-60"
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
          disabled={status === "submitting"}
          autoComplete="tel"
          className="w-full px-4 py-3 rounded-xl border border-warm-200 bg-white text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all disabled:opacity-60"
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
          disabled={status === "submitting"}
          className="w-full px-4 py-3 rounded-xl border border-warm-200 bg-white text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all disabled:opacity-60"
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
          disabled={status === "submitting"}
          className="w-full px-4 py-3 rounded-xl border border-warm-200 bg-white text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-y disabled:opacity-60"
          placeholder="Erzählen Sie mir kurz, wobei Ihr Kind Unterstützung braucht..."
        />
      </div>

      {status === "success" && (
        <p
          className="rounded-xl border border-primary-200 bg-primary-50 px-4 py-3 text-sm text-primary-800"
          role="status"
        >
          Vielen Dank – Ihre Nachricht wurde gesendet. Ich melde mich bei Ihnen.
        </p>
      )}

      {status === "error" && (
        <p
          className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800"
          role="alert"
        >
          Das hat leider nicht geklappt. Bitte versuchen Sie es später erneut
          oder schreiben Sie mir an{" "}
          <span className="font-medium">bettina (at) geffert.de</span> – dabei
          bitte „(at)“ durch @ ersetzen.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full bg-primary-600 text-white px-8 py-4 rounded-xl text-base font-medium hover:bg-primary-700 transition-all hover:shadow-lg hover:shadow-primary-600/20 disabled:opacity-60 disabled:pointer-events-none"
      >
        {status === "submitting" ? "Wird gesendet …" : "Nachricht senden"}
      </button>

      <p className="text-text-muted text-xs text-center">
        Ich melde mich in der Regel innerhalb von 1–2 Werktagen bei Ihnen.
      </p>
    </form>
  );
}
