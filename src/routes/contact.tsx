import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { SectionHeading } from "@/components/SectionHeading";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Triadus Consultants" },
      {
        name: "description",
        content:
          "Get in touch with Triadus Consultants in Bengaluru. Reach our legal, financial and secretarial teams directly.",
      },
      { property: "og:title", content: "Contact Triadus Consultants" },
      {
        property: "og:description",
        content: "Reach our offices in Basavanagudi, Bengaluru, or email us directly.",
      },
    ],
  }),
  component: ContactPage,
});

const channels = [
  {
    icon: Phone,
    label: "Call us",
    value: "+91 93533 87715",
    href: "tel:+919353387715",
  },
  {
    icon: Mail,
    label: "Finance",
    value: "finance@triadusconsultants.com",
    href: "mailto:finance@triadusconsultants.com",
  },
  {
    icon: Mail,
    label: "Legal",
    value: "legal@triadusconsultants.com",
    href: "mailto:legal@triadusconsultants.com",
  },
  {
    icon: Mail,
    label: "Secretarial",
    value: "secretarial@triadusconsultants.com",
    href: "mailto:secretarial@triadusconsultants.com",
  },
];

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const subject = `Enquiry from ${data.get("name")}`;
    const body = `Name: ${data.get("name")}\nEmail: ${data.get("email")}\nPhone: ${data.get("phone")}\nService: ${data.get("service")}\n\n${data.get("message")}`;
    window.location.href = `mailto:finance@triadusconsultants.com?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  };

  return (
    <>
      <section className="bg-secondary/40 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Contact us"
            title="Let's start a conversation."
            description="Whether you have a quick question or a complex requirement, our team is ready to help. Reach out and we'll respond within one business day."
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:py-24">
        <div className="grid gap-12 md:grid-cols-12">
          {/* Contact info */}
          <div className="space-y-8 md:col-span-5">
            <div>
              <h3 className="font-display text-2xl font-semibold">Reach the right team</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Direct lines to each practice — your message lands in the right inbox.
              </p>
            </div>

            <div className="space-y-3">
              {channels.map((c) => (
                <a
                  key={c.value}
                  href={c.href}
                  className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 transition-all hover:border-gold hover:shadow-card"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold/15">
                    <c.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                      {c.label}
                    </div>
                    <div className="mt-0.5 break-all font-medium text-foreground">{c.value}</div>
                  </div>
                </a>
              ))}
            </div>

            <div className="rounded-xl border border-border bg-card p-5">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold/15">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    Visit us
                  </div>
                  <div className="mt-1 text-sm leading-relaxed text-foreground">
                    No 1, 4th Main Road, Tata Silk Farm,<br />
                    Basavanagudi, Bengaluru 560 004
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-7">
            <div className="rounded-2xl border border-border bg-card p-8 shadow-card md:p-10">
              {submitted ? (
                <div className="flex flex-col items-center py-12 text-center">
                  <CheckCircle2 className="h-14 w-14 text-gold" />
                  <h3 className="mt-4 font-display text-2xl font-semibold">Almost there!</h3>
                  <p className="mt-2 max-w-md text-sm text-muted-foreground">
                    Your email client should have opened with your message. If not,
                    please email us directly at finance@triadusconsultants.com.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Full name" name="name" required />
                    <Field label="Email" name="email" type="email" required />
                    <Field label="Phone" name="phone" type="tel" />
                    <div>
                      <label className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                        Service
                      </label>
                      <select
                        name="service"
                        defaultValue=""
                        className="h-11 w-full rounded-md border border-input bg-background px-3 text-sm focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30"
                      >
                        <option value="" disabled>Select a service</option>
                        <option>Financial</option>
                        <option>Legal</option>
                        <option>Secretarial</option>
                        <option>Multiple / Not sure</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                      How can we help?
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30"
                      placeholder="Tell us briefly about your business and what you're looking for…"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-elegant sm:w-auto"
                  >
                    Send message <Send className="h-4 w-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        {label} {required && <span className="text-gold-foreground/60">*</span>}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        className="h-11 w-full rounded-md border border-input bg-background px-3 text-sm focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30"
      />
    </div>
  );
}
