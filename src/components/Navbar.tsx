"use client";

import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const formLinks = [
  {
    label: "Freight Bond Application",
    href: "/forms/freight-bond-application.pdf",
    filename: "Freight Bond Application.pdf",
  },
  {
    label: "Trucking Insurance Application",
    href: "/forms/trucking-insurance-application.pdf",
    filename: "Trucking Insurance Application.pdf",
  },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formsOpen, setFormsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    setFormsOpen(false);
    if (pathname === "/") {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push(`/${href}`);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-navy-900 transition-shadow duration-200 ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <button onClick={() => scrollTo("#home")} className="text-left">
            <span className="text-white font-semibold text-base leading-tight block">
              JSR Insurance Services
            </span>
            <span className="text-gold-400 text-xs tracking-widest uppercase font-medium">
              LLC
            </span>
          </button>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            <button
              onClick={() => scrollTo("#home")}
              className="text-slate-300 hover:text-white text-sm px-4 py-2 rounded transition-colors duration-150"
            >
              Home
            </button>
            <button
              onClick={() => scrollTo("#services")}
              className="text-slate-300 hover:text-white text-sm px-4 py-2 rounded transition-colors duration-150"
            >
              Services
            </button>

            <div
              className="relative"
              onMouseEnter={() => setFormsOpen(true)}
              onMouseLeave={() => setFormsOpen(false)}
            >
              <button
                onClick={() => setFormsOpen((open) => !open)}
                className="text-slate-300 hover:text-white text-sm px-4 py-2 rounded transition-colors duration-150 inline-flex items-center gap-1"
                aria-haspopup="menu"
                aria-expanded={formsOpen}
              >
                Forms
                <span aria-hidden="true" className={`text-xs transition-transform ${formsOpen ? "rotate-180" : ""}`}>
                  ▾
                </span>
              </button>
              {formsOpen && (
                <div className="absolute top-full right-0 mt-1 w-64 rounded-md bg-navy-900 border border-navy-700 shadow-xl py-2" role="menu">
                  {formLinks.map((form) => (
                    <a
                      key={form.href}
                      href={form.href}
                      download={form.filename}
                      onClick={() => setFormsOpen(false)}
                      className="block px-4 py-2.5 text-sm text-slate-300 hover:text-white hover:bg-navy-800 transition-colors"
                      role="menuitem"
                    >
                      {form.label}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {navLinks.filter((l) => l.label === "About" || l.label === "Contact").map((l) => (
              <button
                key={l.href}
                onClick={() => scrollTo(l.href)}
                className="text-slate-300 hover:text-white text-sm px-4 py-2 rounded transition-colors duration-150"
              >
                {l.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo("#contact")}
              className="ml-3 bg-gold-500 hover:bg-gold-400 text-navy-900 font-semibold text-sm px-5 py-2 rounded transition-colors duration-150"
            >
              Get a Quote
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white p-2"
            aria-label="Toggle navigation"
          >
            <div className="w-5 space-y-1.5">
              <span className={`block h-0.5 bg-white transition-all duration-200 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block h-0.5 bg-white transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 bg-white transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-200 ${menuOpen ? "max-h-[32rem] pb-4" : "max-h-0"}`}>
          <div className="border-t border-navy-700 pt-3 space-y-1">
            <button
              onClick={() => scrollTo("#home")}
              className="block w-full text-left text-slate-300 hover:text-white text-sm px-3 py-2.5 rounded transition-colors duration-150"
            >
              Home
            </button>
            <button
              onClick={() => scrollTo("#services")}
              className="block w-full text-left text-slate-300 hover:text-white text-sm px-3 py-2.5 rounded transition-colors duration-150"
            >
              Services
            </button>

            <button
              onClick={() => setFormsOpen((open) => !open)}
              className="flex w-full items-center justify-between text-left text-slate-300 hover:text-white text-sm px-3 py-2.5 rounded transition-colors duration-150"
              aria-expanded={formsOpen}
            >
              <span>Forms</span>
              <span aria-hidden="true" className={`text-xs transition-transform ${formsOpen ? "rotate-180" : ""}`}>▾</span>
            </button>
            {formsOpen && (
              <div className="ml-3 border-l border-navy-700">
                {formLinks.map((form) => (
                  <a
                    key={form.href}
                    href={form.href}
                    download={form.filename}
                    onClick={() => {
                      setFormsOpen(false);
                      setMenuOpen(false);
                    }}
                    className="block pl-4 pr-3 py-2.5 text-sm text-slate-400 hover:text-white"
                  >
                    {form.label}
                  </a>
                ))}
              </div>
            )}

            <button
              onClick={() => scrollTo("#about")}
              className="block w-full text-left text-slate-300 hover:text-white text-sm px-3 py-2.5 rounded transition-colors duration-150"
            >
              About
            </button>
            <button
              onClick={() => scrollTo("#contact")}
              className="block w-full text-left text-slate-300 hover:text-white text-sm px-3 py-2.5 rounded transition-colors duration-150"
            >
              Contact
            </button>
            <div className="pt-2 px-3">
              <button
                onClick={() => scrollTo("#contact")}
                className="w-full bg-gold-500 hover:bg-gold-400 text-navy-900 font-semibold text-sm px-5 py-2.5 rounded transition-colors duration-150"
              >
                Get a Quote
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
