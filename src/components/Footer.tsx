"use client";

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

export default function Footer() {
  const router = useRouter();
  const pathname = usePathname();

  const scrollTo = (id: string) => {
    if (pathname === "/") {
      document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push(`/${id}`);
    }
  };

  return (
    <footer className="bg-navy-950 border-t border-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-3">
              <span className="text-white font-semibold text-base block">
                JSR Insurance Services LLC
              </span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed max-w-sm">
              Independent insurance agency specializing in commercial trucking coverage
              and surety bonds for carriers, owner-operators, and freight brokers
              operating across the United States.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-slate-400 text-xs font-semibold uppercase tracking-widest mb-4">
              Quick Links
            </p>
            <ul className="space-y-2.5">
              {[
                { label: "Home", href: "#home" },
                { label: "About", href: "#about" },
                { label: "Services", href: "#services" },
                { label: "Contact", href: "#contact" },
              ].map((l) => (
                <li key={l.href}>
                  <button
                    onClick={() => scrollTo(l.href)}
                    className="text-slate-500 hover:text-slate-300 text-sm transition-colors duration-150"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
              <li>
                <Link
                  href="/tos"
                  className="text-slate-500 hover:text-slate-300 text-sm transition-colors duration-150"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-slate-500 hover:text-slate-300 text-sm transition-colors duration-150"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <p className="text-slate-400 text-xs font-semibold uppercase tracking-widest mb-4">
              Coverage
            </p>
            <ul className="space-y-2.5">
              {[
                "Trucking Insurance",
                "Surety Bonds",
                "BMC-84 Bond",
                "Motor Truck Cargo",
                "Physical Damage",
                "Primary Liability",
              ].map((s) => (
                <li key={s}>
                  <span className="text-slate-500 text-sm">{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-navy-800 flex flex-col sm:flex-row justify-between gap-3">
          <p className="text-slate-600 text-xs">
            &copy; {new Date().getFullYear()} JSR Insurance Services LLC. All rights reserved.
          </p>
          <p className="text-slate-700 text-xs">
            Licensed Independent Insurance Agency &bull; All 48 Contiguous States
          </p>
        </div>
      </div>
    </footer>
  );
}
