"use client";

import { useState } from "react";
import MediaPreview from "@/components/MediaPreview";
import type { PortfolioItem, PortfolioCategory } from "@/types";
import { TYPE_LABELS, PORTFOLIO_PLACEHOLDERS } from "@/lib/constants";

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

function getItemImage(item: PortfolioItem): string {
  return item.image || PORTFOLIO_PLACEHOLDERS[item.type];
}

function GalleryCard({ item }: { item: PortfolioItem }) {
  const [playing, setPlaying] = useState(false);
  const isVideo = item.mediaType === "video" && item.video;

  return (
    <article>
      <div className="relative aspect-[4/3] overflow-hidden bg-cream">
        {isVideo ? (
          <>
            {playing ? (
              <video
                src={item.video}
                controls
                autoPlay
                playsInline
                className="h-full w-full object-cover"
                poster={getItemImage(item)}
              />
            ) : (
              <>
                <MediaPreview
                  src={getItemImage(item)}
                  alt={item.title}
                  className="object-cover"
                />
                <button
                  type="button"
                  onClick={() => setPlaying(true)}
                  className="absolute inset-0 flex items-center justify-center bg-black/20 active:bg-black/30"
                  aria-label="播放视频"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-dark shadow">
                    <svg className="ml-0.5 h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                </button>
              </>
            )}
          </>
        ) : (
          <MediaPreview
            src={getItemImage(item)}
            alt={item.title}
            className="object-cover"
          />
        )}
      </div>
      <h3 className="mt-2.5 text-sm font-bold leading-snug text-dark">
        {item.title}
      </h3>
      <p className="mt-0.5 text-xs text-dark/45">#{TYPE_LABELS[item.type]}</p>
    </article>
  );
}

function filterItems(items: PortfolioItem[], tab: PortfolioTab): PortfolioItem[] {
  if (tab === "special") {
    return items.filter(
      (item) => item.type === "activity" || item.type === "promo"
    );
  }
  return items.filter((item) => item.category === tab);
}

export default function Portfolio({ items }: PortfolioProps) {
  const [activeTab, setActiveTab] = useState<PortfolioTab>("primary");

  const filtered = filterItems(items, activeTab);

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

        {filtered.length === 0 ? (
          <div className="py-16 text-center text-sm text-dark/30">
            暂无该分类作品，敬请期待
          </div>
        ) : (
          <div className="mt-6 grid grid-cols-2 gap-x-3 gap-y-6 sm:mt-8 sm:gap-x-4 sm:gap-y-8">
            {filtered.map((item) => (
              <GalleryCard key={item.id} item={item} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
