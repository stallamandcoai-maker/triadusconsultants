import { type ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  invert?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  invert = false,
}: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && (
        <div className={`mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] ${align === "center" ? "justify-center" : ""} ${invert ? "text-gold" : "text-gold-foreground/70"}`}>
          <span className="h-px w-8 bg-gold" />
          <span className={invert ? "text-gold" : "text-foreground/60"}>{eyebrow}</span>
        </div>
      )}
      <h2 className={`font-display text-4xl font-bold leading-tight md:text-5xl ${invert ? "text-primary-foreground" : "text-foreground"}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-5 text-base leading-relaxed md:text-lg ${invert ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
          {description}
        </p>
      )}
    </div>
  );
}
