"use client";

import { useState } from "react";
import Link from "next/link";
import { Logo } from "@/components/ui/Logo";

const navLinks = [
  { label: "Universities", href: "/universities" },
  { label: "Specialisations", href: "/specialisations" },
  { label: "Blog", href: "/blog" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-cream/90 backdrop-blur-md border-b border-hairline/50">
      <div className="wrap flex items-center justify-between py-[18px]">
        <Logo />

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-slate-600 hover:text-navy text-[15px] font-medium transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <a
            href="tel:+918669661005"
            className="text-navy font-semibold text-[15px] flex items-center gap-2"
          >
            <span className="opacity-70 text-base">☎</span>
            +91 86696 61005
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-2 -mr-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          <span
            className={`block w-6 h-0.5 bg-navy origin-center transition-transform duration-200 ${
              open ? "rotate-45 translate-y-[7px]" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-navy transition-opacity duration-200 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-navy origin-center transition-transform duration-200 ${
              open ? "-rotate-45 -translate-y-[7px]" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-hairline/50 bg-cream py-5">
          <div className="wrap flex flex-col gap-5">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-slate-600 font-medium text-[15px]"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <a
              href="tel:+918669661005"
              className="text-navy font-semibold text-[15px]"
            >
              ☎ +91 86696 61005
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
