"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const NAV_ITEMS = [
  { href: "#about", label: "关于途优" },
  { href: "#services", label: "业务范围" },
  { href: "#products", label: "核心产品" },
  { href: "#portfolio", label: "作品案例" },
  { href: "#partners", label: "合作学校" },
  { href: "#contact", label: "合作咨询" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/97 shadow-sm backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="container-max flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2.5">
          <div
            className={`flex h-8 w-8 items-center justify-center text-xs font-bold ${
              scrolled
                ? "bg-brand-500 text-white"
                : "bg-brand-500 text-white"
            }`}
          >
            途
          </div>
          <div>
            <div
              className={`text-sm font-bold leading-tight ${
                scrolled ? "text-dark" : "text-white"
              }`}
            >
              途优校园影像
            </div>
            <div
              className={`text-[10px] tracking-wider ${
                scrolled ? "text-dark/40" : "text-white/50"
              }`}
            >
              TUYOU CAMPUS IMAGE
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`px-3 py-2 text-sm transition-colors ${
                scrolled
                  ? "text-dark/70 hover:text-brand-500"
                  : "text-white/80 hover:text-brand-400"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          className={`p-2 lg:hidden ${
            scrolled ? "text-dark" : "text-white"
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="菜单"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-dark/5 bg-white px-4 py-3 shadow-lg lg:hidden">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block px-3 py-2.5 text-sm text-dark/70 hover:text-brand-500"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
