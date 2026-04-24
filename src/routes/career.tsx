import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/SectionHeading";
import careerImg from "@/assets/career-office.jpg";
import { Briefcase, GraduationCap, Heart, TrendingUp, Mail } from "lucide-react";

export const Route = createFileRoute("/career")({
  head: () => ({
    meta: [
      { title: "Career — Triadus Consultants" },
      {
        name: "description",
        content:
          "Build your career at Triadus Consultants. Join a multidisciplinary team of CAs, CSs and Advocates in Bengaluru.",
      },
      { property: "og:title", content: "Careers at Triadus Consultants" },
      {
        property: "og:description",
        content:
          "Work alongside seasoned professionals across legal, financial and secretarial practice.",
      },
    ],
  }),
  component: CareerPage,
});

const perks = [
  { icon: GraduationCap, title: "Continuous learning", text: "Exposure across three practice areas with senior partner mentorship." },
  { icon: TrendingUp, title: "Real growth", text: "Clear progression paths backed by meaningful, client-facing responsibility." },
  { icon: Heart, title: "Supportive culture", text: "A collaborative team that values balance, ownership and trust." },
  { icon: Briefcase, title: "Diverse work", text: "From early-stage startups to established companies — never a dull engagement." },
];

const openings = [
  { role: "Associate — Audit & Assurance", type: "Full-time · Bengaluru", domain: "Financial" },
  { role: "Company Secretary — Compliance", type: "Full-time · Bengaluru", domain: "Secretarial" },
  { role: "Associate Advocate", type: "Full-time · Bengaluru", domain: "Legal" },
  { role: "Articled Assistant (CA)", type: "Articleship · Bengaluru", domain: "Financial" },
];

function CareerPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-primary text-primary-foreground">
        <img
          src={careerImg}
          alt=""
          loading="lazy"
          width={1600}
          height={1100}
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/85 to-primary/40" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
          <SectionHeading
            invert
            eyebrow="Careers"
            title={<>Grow your practice with us.</>}
            description="Join a multidisciplinary team where Chartered Accountants, Company Secretaries and Advocates work shoulder-to-shoulder on meaningful client engagements."
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:py-24">
        <SectionHeading
          eyebrow="Why Triadus"
          title="A workplace built around expertise and ownership"
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {perks.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-border bg-card p-7 transition-all hover:border-gold hover:shadow-card"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gold/15">
                <p.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary/40 py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Open roles"
            title="Current opportunities"
            description="We're always looking for sharp, curious people. If you don't see your role below, send us a note — we'd still love to hear from you."
          />

          <div className="mt-12 grid gap-4">
            {openings.map((o) => (
              <div
                key={o.role}
                className="flex flex-col items-start justify-between gap-4 rounded-2xl border border-border bg-card p-6 transition-all hover:border-gold hover:shadow-card sm:flex-row sm:items-center"
              >
                <div>
                  <div className="text-xs font-semibold uppercase tracking-widest text-gold-foreground/70">
                    {o.domain}
                  </div>
                  <div className="mt-1 font-display text-xl font-semibold">{o.role}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{o.type}</div>
                </div>
                <a
                  href={`mailto:admin@triadusconsultants.com?subject=Application — ${encodeURIComponent(o.role)}`}
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
                >
                  Apply <Mail className="h-4 w-4" />
                </a>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-dashed border-border bg-card/50 p-8 text-center">
            <p className="text-sm text-muted-foreground">
              Don't see a fit? Send your CV to{" "}
              <a
                href="mailto:admin@triadusconsultants.com"
                className="font-semibold text-foreground underline-offset-4 hover:underline"
              >
                admin@triadusconsultants.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
