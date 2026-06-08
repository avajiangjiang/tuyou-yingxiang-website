"use client";

import { useState } from "react";
import { GalleryCard, fillGallerySlots } from "@/components/GalleryCard";
import type { PortfolioItem, PortfolioCategory } from "@/types";

interface PortfolioProps {
  items: PortfolioItem[];
}

type PortfolioTab = PortfolioCategory | "special";

const CATEGORY_TABS: { key: PortfolioTab; label: string }[] = [
  { key: "primary", label: "小学" },
  { key: "middle", label: "初中" },
  { key: "high", label: "高中" },
  { key: "special", label: "校园活动及专题" },
];

function filterItems(items: PortfolioItem[], tab: PortfolioTab): PortfolioItem[] {
  const base = items.filter((item) => item.type !== "film");

  if (tab === "special") {
    return base.filter(
      (item) => item.type === "activity" || item.type === "promo"
    );
  }

  return base.filter((item) => item.category === tab);
}

export default function Portfolio({ items }: PortfolioProps) {
  const [activeTab, setActiveTab] = useState<PortfolioTab>("primary");

  const filtered = filterItems(items, activeTab);
  const slots = fillGallerySlots(filtered);

  return (
    <section id="portfolio" className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center">
          <p className="text-[11px] font-medium tracking-[0.2em] text-dark/40">
            GALLERY
          </p>
          <h2 className="mt-2 text-2xl font-bold text-dark sm:text-3xl">
            作品展示
          </h2>
        </div>

        <div className="mobile-scroll-x mt-6 border-b border-dark/10 sm:mt-8 sm:justify-center">
          {CATEGORY_TABS.map((tab) => (
            <button
              key={tab.key}
              type="button"
              onClick={() => setActiveTab(tab.key)}
              className={`relative shrink-0 px-1 pb-3 text-sm font-medium transition sm:px-2 sm:text-base ${
                activeTab === tab.key
                  ? "text-dark"
                  : "text-dark/40 active:text-dark/60"
              }`}
            >
              {tab.label}
              {activeTab === tab.key && (
                <span className="absolute inset-x-0 -bottom-px h-0.5 bg-dark" />
              )}
            </button>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-2 gap-x-3 gap-y-6 sm:mt-8 sm:gap-x-4 sm:gap-y-8">
          {slots.map((item, index) => (
            <GalleryCard key={item?.id ?? `slot-${activeTab}-${index}`} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
