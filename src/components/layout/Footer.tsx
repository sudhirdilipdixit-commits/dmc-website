import Link from "next/link";
import { Logo } from "@/components/ui/Logo";

const footerLinks: Record<string, { label: string; href: string }[]> = {
  Universities: [
    { label: "IGNOU", href: "/universities/ignou" },
    { label: "Symbiosis", href: "/universities/symbiosis" },
    { label: "Amity", href: "/universities/amity" },
    { label: "NMIMS", href: "/universities/nmims" },
    { label: "View all →", href: "/universities" },
  ],
  Specialisations: [
    { label: "Finance", href: "/specialisations/finance" },
    { label: "Marketing", href: "/specialisations/marketing" },
    { label: "HR", href: "/specialisations/hr" },
    { label: "Operations", href: "/specialisations/operations" },
    { label: "International Business", href: "/specialisations/international-business" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-navy-dark text-white/65 pt-16 pb-8">
      <div className="wrap">
        <div className="grid grid-cols-[1.4fr_1fr_1fr_1fr] gap-12 pb-12 border-b border-white/10 max-lg:grid-cols-2 max-sm:grid-cols-1">
          {/* Brand col */}
          <div>
            <Logo variant="reverse" />
            <p className="font-voice italic text-white/70 mt-5 max-w-[30ch] text-[15px] leading-relaxed">
              Your future. One smart step away.
            </p>
            <p className="mt-7 text-[13px]">
              A brand by MagicWorks IT Solutions Pvt. Ltd.
            </p>
            <a
              href="tel:+918669661005"
              className="inline-flex items-center gap-2 mt-4 text-saffron-2 font-semibold text-[14px]"
            >
              ☎ +91 86696 61005
            </a>
          </div>

          {/* Link cols */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-white font-display font-semibold text-[13px] tracking-[0.08em] uppercase mb-4">
                {title}
              </h4>
              <ul className="grid gap-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-white/60 text-[14px] hover:text-saffron-2 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 flex justify-between gap-5 flex-wrap text-[12px] text-white/40">
          <span>© 2026 MagicWorks IT Solutions Pvt. Ltd. All rights reserved.</span>
          <span className="font-voice italic">Crafted with discipline and warmth.</span>
        </div>
      </div>
    </footer>
  );
}
