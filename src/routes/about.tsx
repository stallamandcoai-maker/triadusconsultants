import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/SectionHeading";
import aboutImg from "@/assets/about-team.jpg";
import { Target, Users, Shield, Sparkles } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Triadus Consultants" },
      {
        name: "description",
        content:
          "Learn about Triadus Consultants — a Bengaluru advisory firm uniting legal, financial and secretarial experts under one roof.",
      },
      { property: "og:title", content: "About Triadus Consultants" },
      {
        property: "og:description",
        content:
          "A powerhouse of expertise across legal, financial and secretarial domains — all under one roof.",
      },
    ],
  }),
  component: AboutPage,
});

const values = [
  { icon: Target, title: "Strategic", text: "Advisory rooted in long-term business outcomes, not isolated tasks." },
  { icon: Shield, title: "Compliant", text: "We keep you on the right side of regulation across every jurisdiction." },
  { icon: Users, title: "Collaborative", text: "Three practices, one team — coordinated solutions without silos." },
  { icon: Sparkles, title: "Results-driven", text: "Measurable outcomes for stability, growth and governance." },
];

function AboutPage() {
  return (
    <>
      <section className="bg-secondary/40 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="About us"
            title="A foundation built on expertise, integrity and trust."
            description="In today's dynamic business landscape, startups need more than a great idea — they require a solid legal foundation, sound financial strategies and seamless regulatory compliance."
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:py-24">
        <div className="grid gap-16 md:grid-cols-2 md:items-center">
          <div className="overflow-hidden rounded-2xl shadow-elegant">
            <img
              src={aboutImg}
              alt="The Triadus Consultants team collaborating in their Bengaluru office"
              loading="lazy"
              width={1600}
              height={1100}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="space-y-6 text-base leading-relaxed text-muted-foreground md:text-lg">
            <p>
              Recognising the need for integrated advisory, we have brought together a
              powerhouse of expertise under one roof — combining three essential service
              domains: <span className="font-semibold text-foreground">legal, financial and
              secretarial consulting</span>.
            </p>
            <p>
              Each of our founding partners is a seasoned expert with a proven track record
              of guiding businesses through complex challenges. By combining our strengths,
              we deliver comprehensive, professional and strategic advisory that paves the
              way for sustainable growth.
            </p>
            <p>
              Our firm serves as a one-stop solution, enabling startups to navigate legal
              complexities, achieve financial stability and maintain corporate governance —
              all through a streamlined, expert-driven approach.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-secondary/40 py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Our values"
            title="The principles guiding every engagement"
            align="center"
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl border border-border bg-card p-7 transition-all hover:border-gold hover:shadow-card"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gold/15">
                  <v.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:py-24">
        <SectionHeading
          eyebrow="Our team"
          title="Led by partners across legal, finance and corporate practice"
          description="A multi-disciplinary team of Chartered Accountants, Company Secretaries and Advocates — collaborating to give your business a single, trusted advisory partner."
        />
      </section>
    </>
  );
}
