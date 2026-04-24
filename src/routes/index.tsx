import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Scale, Calculator, FileText, CheckCircle2 } from "lucide-react";
import heroImg from "@/assets/hero-building.jpg";
import financialImg from "@/assets/service-financial.jpg";
import legalImg from "@/assets/service-legal.jpg";
import secretarialImg from "@/assets/service-secretarial.jpg";
import { SectionHeading } from "@/components/SectionHeading";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Triadus Consultants — Integrated Legal, Financial & Secretarial Advisory" },
      {
        name: "description",
        content:
          "End-to-end advisory for startups and growing businesses. Legal, financial and secretarial expertise — all under one roof in Bengaluru.",
      },
      { property: "og:title", content: "Triadus Consultants — Advisory under one roof" },
      {
        property: "og:description",
        content:
          "Legal, financial and secretarial experts helping businesses stay compliant, stable and ready to scale.",
      },
    ],
  }),
  component: HomePage,
});

const services = [
  {
    icon: Calculator,
    title: "Financial",
    image: financialImg,
    description:
      "Assurance, risk advisory, bookkeeping, taxation and compliance — built for stability and long-term growth.",
  },
  {
    icon: Scale,
    title: "Legal",
    image: legalImg,
    description:
      "Business structuring, contract drafting, IP, dispute resolution and regulatory guidance you can rely on.",
  },
  {
    icon: FileText,
    title: "Secretarial",
    image: secretarialImg,
    description:
      "Corporate governance, regulatory compliance and statutory filings — handled end-to-end.",
  },
];

const highlights = [
  "One-stop solution across three domains",
  "Founding partners with deep expertise",
  "Transparent, results-oriented engagements",
  "Dedicated support at every growth stage",
];

function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-primary text-primary-foreground">
        <img
          src={heroImg}
          alt=""
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/85 to-primary/40" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-28 md:grid-cols-12 md:py-40">
          <div className="md:col-span-8">
            <div className="mb-6 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-gold">
              <span className="h-px w-10 bg-gold" />
              Bengaluru · Est. Advisory Firm
            </div>
            <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
              Building strong foundations
              <span className="block text-gold">for ambitious businesses.</span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-primary-foreground/75">
              Triadus Consultants brings together legal, financial and secretarial expertise
              under one roof — so you can focus on building, while we handle compliance,
              governance and growth advisory.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-gold-foreground transition-all hover:shadow-elegant"
              >
                Explore services <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
              >
                Talk to us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <SectionHeading
              eyebrow="Who we are"
              title={<>Three disciplines.<br />One trusted team.</>}
            />
          </div>
          <div className="md:col-span-7">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Starting and scaling a business presents numerous challenges — from legal
              compliance and financial planning to corporate governance. Our firm unites
              top-tier experts to provide startups with seamless, end-to-end solutions.
            </p>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {highlights.map((h) => (
                <li key={h} className="flex items-start gap-3 text-sm text-foreground">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-secondary/40 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="What we do"
            title="Integrated services for growing businesses"
            description="Each practice is led by seasoned professionals with deep domain experience. Together, they deliver advisory that's both strategic and hands-on."
          />

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {services.map((s) => (
              <article
                key={s.title}
                className="group relative overflow-hidden rounded-2xl bg-card shadow-card transition-all hover:-translate-y-1 hover:shadow-elegant"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={s.image}
                    alt=""
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-7">
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-gold/15 text-foreground">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-2xl font-semibold">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {s.description}
                  </p>
                  <Link
                    to="/services"
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-foreground hover:text-gold-foreground/80"
                  >
                    Learn more <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="relative overflow-hidden rounded-3xl bg-primary px-8 py-16 text-primary-foreground md:px-16 md:py-20">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-gold/20 blur-3xl" />
          <div className="relative grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="font-display text-4xl font-bold leading-tight md:text-5xl">
                Let's build a strong, successful foundation — together.
              </h2>
            </div>
            <div className="md:text-right">
              <p className="text-primary-foreground/70">
                Whether you're launching a startup or optimising operations, our team is
                here to support you at every stage.
              </p>
              <Link
                to="/contact"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-gold-foreground hover:shadow-elegant"
              >
                Schedule a consultation <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
