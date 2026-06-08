"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const NAV_ITEMS = [
  { href: "#about", label: "关于途优" },
  { href: "#services", label: "业务范围" },
  { href: "#products", label: "核心产品" },
  { href: "#portfolio", label: "作品案例" },
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

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`safe-top fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? "bg-white/97 shadow-sm backdrop-blur-md"
          : "bg-dark/30 backdrop-blur-sm"
      }`}
    >
      <div className="container-max flex h-14 items-center justify-between px-5 sm:h-16 sm:px-6 lg:px-8">
        <Link href="/" className="flex min-w-0 items-center gap-2">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center bg-brand-400 text-xs font-bold text-white">
            途
          </div>
          <div className="min-w-0">
            <div
              className={`truncate text-sm font-bold leading-tight ${
                scrolled || menuOpen ? "text-dark" : "text-white"
              }`}
            >
              途优校园影像
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-0.5 lg:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`px-2.5 py-2 text-sm transition-colors xl:px-3 ${
                scrolled
                  ? "text-dark/70 hover:text-brand-500"
                  : "text-white/85 hover:text-brand-300"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          className={`rounded-lg p-2 lg:hidden ${
            scrolled || menuOpen ? "text-dark" : "text-white"
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
        <div className="fixed inset-0 top-[calc(3.5rem+env(safe-area-inset-top))] z-40 bg-white lg:hidden">
          <nav className="flex flex-col px-5 py-2">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="flex items-center justify-between border-b border-dark/5 py-4 text-[15px] font-medium text-dark active:text-brand-500"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
                <svg className="h-4 w-4 text-dark/25" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
