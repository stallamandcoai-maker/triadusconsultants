import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/triadus-logo.jpg";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <div className="rounded-md bg-background p-2">
              <img src={logo} alt="Triadus Consultants" className="h-10 w-auto" />
            </div>
            <div>
              <div className="font-display text-xl font-bold">Triadus Consultants</div>
              <div className="text-xs uppercase tracking-[0.2em] text-primary-foreground/60">
                Financial · Legal · Secretarial
              </div>
            </div>
          </div>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-primary-foreground/70">
            A one-stop advisory firm uniting top-tier experts across legal, financial and
            secretarial domains to help businesses build a strong, compliant foundation.
          </p>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-gold">
            Explore
          </h3>
          <ul className="mt-5 space-y-3 text-sm">
            <li><Link to="/" className="text-primary-foreground/70 hover:text-gold">Home</Link></li>
            <li><Link to="/about" className="text-primary-foreground/70 hover:text-gold">About</Link></li>
            <li><Link to="/services" className="text-primary-foreground/70 hover:text-gold">Services</Link></li>
            <li><Link to="/career" className="text-primary-foreground/70 hover:text-gold">Career</Link></li>
            <li><Link to="/contact" className="text-primary-foreground/70 hover:text-gold">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-gold">
            Reach us
          </h3>
          <ul className="mt-5 space-y-4 text-sm text-primary-foreground/80">
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <span>+91 93533 87715</span>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <div className="space-y-1">
                <div>finance@triadusconsultants.com</div>
                <div>legal@triadusconsultants.com</div>
                <div>secretarial@triadusconsultants.com</div>
              </div>
            </li>
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <span>No 1, 4th Main Road, Tata Silk Farm,<br />Basavanagudi, Bengaluru 560 004</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-6 text-xs text-primary-foreground/60 sm:flex-row">
          <span>© {new Date().getFullYear()} Triadus Consultants. All rights reserved.</span>
          <span>Bengaluru · India</span>
        </div>
      </div>
    </footer>
  );
}
