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
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 shadow-md backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="container-max flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-600 text-sm font-bold text-white">
            途
          </div>
          <div>
            <div
              className={`text-sm font-bold leading-tight ${
                scrolled ? "text-brand-800" : "text-white"
              }`}
            >
              途优校园影像
            </div>
            <div
              className={`text-xs ${
                scrolled ? "text-gray-500" : "text-white/70"
              }`}
            >
              TUYOU CAMPUS IMAGE
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-brand-500 ${
                scrolled ? "text-gray-700" : "text-white/90"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          className={`lg:hidden ${scrolled ? "text-gray-800" : "text-white"}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="菜单"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="border-t bg-white px-4 py-4 shadow-lg lg:hidden">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block py-2 text-sm font-medium text-gray-700 hover:text-brand-600"
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
