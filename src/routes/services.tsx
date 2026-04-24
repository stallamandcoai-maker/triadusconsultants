import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/SectionHeading";
import { Calculator, Scale, FileText, Check } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Triadus Consultants" },
      {
        name: "description",
        content:
          "Comprehensive financial, legal and secretarial services — from audit and taxation to incorporation, contracts and corporate governance.",
      },
      { property: "og:title", content: "Services — Triadus Consultants" },
      {
        property: "og:description",
        content:
          "Audit, taxation, contracts, IP, incorporation, governance and more — handled by senior practitioners.",
      },
    ],
  }),
  component: ServicesPage,
});

const groups = [
  {
    icon: Calculator,
    title: "Financial",
    intro:
      "Comprehensive financial solutions ensuring stability, growth and long-term success.",
    sections: [
      {
        heading: "Risk Advisory & Audit",
        items: ["Statutory Audit", "Internal Audit", "RCM design", "Risk assessment & reviews", "Tax Audit", "Stock Audit"],
      },
      {
        heading: "Financial Management & Advisory",
        items: [
          "Accounting & Bookkeeping",
          "Virtual CFO",
          "MIS Dashboard & analytics",
          "Due Diligence",
          "Enterprise Valuation report",
          "Project Report & CMA Report",
        ],
      },
      {
        heading: "Taxation",
        items: [
          "Direct Tax filings",
          "GST Compliance and advisory",
          "GST litigation services",
          "Tax planning & optimisation",
          "Assessment support",
        ],
      },
    ],
  },
  {
    icon: Scale,
    title: "Legal",
    intro:
      "Expert legal solutions covering structuring, contracts, IP and dispute resolution.",
    sections: [
      {
        heading: "Agreements & Drafting",
        items: [
          "Employee Agreements, Handbook & Policies",
          "Service Agreements",
          "Founders, Shareholders and Share Subscription Agreements",
          "Agreements on Technology and Privacy",
          "Assignment & License Agreements",
          "ESOP & POSH & Terms of Service & Privacy Policies",
          "General Corporate Governance and Advisory Opinions",
        ],
      },
      {
        heading: "Intellectual Property",
        items: [
          "Trademark filing, prosecution & litigation",
          "Copyright registration & enforcement",
          "Design and Patent filing",
        ],
      },
      {
        heading: "Property & Disputes",
        items: [
          "Drafting and Registration of Deeds — immovable property",
          "Due Diligence",
          "Civil and Commercial Dispute Resolution before Courts and Tribunals (Bangalore & Chennai)",
        ],
      },
    ],
  },
  {
    icon: FileText,
    title: "Secretarial",
    intro:
      "Corporate governance, regulatory compliance and statutory filings, end-to-end.",
    sections: [
      {
        heading: "Incorporation & Setup",
        items: [
          "Private Limited, Public Limited & LLP",
          "One Person Company (OPC) & Section 8 companies",
          "Wholly Owned Subsidiary of a Foreign Company",
          "Advisory on business set-up, plan & funding requirements",
        ],
      },
      {
        heading: "Compliance & Governance",
        items: [
          "Regular Company Law Compliances",
          "Corporate Governance",
          "Investment-related compliances",
          "Certification under Corporate Laws",
          "All corporate actions under the Companies Act 2013",
        ],
      },
      {
        heading: "Representations & FEMA",
        items: [
          "Representations before NCLT, RDs, RoC, MCA & Central Government",
          "FDI compliances under FEMA",
          "Due Diligence",
        ],
      },
    ],
  },
];

function ServicesPage() {
  return (
    <>
      <section className="bg-secondary/40 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Our services"
            title="Everything your business needs — under one roof."
            description="From day-one incorporation to ongoing audit, taxation, governance and dispute resolution, our three practices work in concert to keep you compliant and growing."
          />
        </div>
      </section>

      {groups.map((g, idx) => (
        <section
          key={g.title}
          className={idx % 2 === 0 ? "py-20 md:py-24" : "bg-secondary/30 py-20 md:py-24"}
        >
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-12 md:grid-cols-12 md:items-start">
              <div className="md:col-span-4 md:sticky md:top-28">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-gold text-gold-foreground">
                  <g.icon className="h-6 w-6" />
                </div>
                <h2 className="mt-6 font-display text-4xl font-bold leading-tight md:text-5xl">
                  {g.title}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  {g.intro}
                </p>
              </div>

              <div className="md:col-span-8">
                <div className="grid gap-8 sm:grid-cols-1">
                  {g.sections.map((sec) => (
                    <div
                      key={sec.heading}
                      className="rounded-2xl border border-border bg-card p-7 shadow-card"
                    >
                      <h3 className="font-display text-xl font-semibold">{sec.heading}</h3>
                      <ul className="mt-5 space-y-3">
                        {sec.items.map((item) => (
                          <li key={item} className="flex gap-3 text-sm text-foreground/85">
                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold-foreground/80" strokeWidth={3} />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
