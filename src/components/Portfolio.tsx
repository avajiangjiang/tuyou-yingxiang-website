"use client";

import { useState } from "react";
import SectionTitle from "@/components/SectionTitle";
import MediaPreview from "@/components/MediaPreview";
import type { PortfolioItem } from "@/types";
import {
  CATEGORY_LABELS,
  TYPE_LABELS,
  MEDIA_TYPE_LABELS,
  PORTFOLIO_PLACEHOLDERS,
} from "@/lib/constants";

interface PortfolioProps {
  items: PortfolioItem[];
}

const CATEGORY_FILTERS = [
  { key: "all", label: "全部" },
  { key: "primary", label: "小学" },
  { key: "middle", label: "初中" },
  { key: "high", label: "高中" },
] as const;

const MEDIA_FILTERS = [
  { key: "all", label: "全部" },
  { key: "photo", label: "照片" },
  { key: "video", label: "视频" },
] as const;

const MOBILE_INITIAL = 6;

function getItemImage(item: PortfolioItem): string {
  return item.image || PORTFOLIO_PLACEHOLDERS[item.type];
}

function PortfolioCard({ item }: { item: PortfolioItem }) {
  const [playing, setPlaying] = useState(false);
  const isVideo = item.mediaType === "video" && item.video;

  return (
    <div className="card-hover group overflow-hidden rounded-xl bg-dark-light ring-1 ring-white/10 sm:rounded-none">
      <div className="relative aspect-[16/10] overflow-hidden bg-black sm:aspect-[4/3]">
        {isVideo ? (
          <>
            {playing ? (
              <video
                src={item.video}
                controls
                autoPlay
                playsInline
                className="h-full w-full object-contain"
                poster={getItemImage(item)}
              />
            ) : (
              <>
                <MediaPreview
                  src={getItemImage(item)}
                  alt={item.title}
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <button
                  type="button"
                  onClick={() => setPlaying(true)}
                  className="absolute inset-0 flex items-center justify-center bg-black/30 transition active:bg-black/40"
                  aria-label="播放视频"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-500/90 text-white shadow-lg backdrop-blur-sm">
                    <svg className="ml-0.5 h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
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
            className="object-cover transition duration-500 group-hover:scale-110"
          />
        )}

        <div className="absolute left-2.5 top-2.5 flex flex-wrap gap-1">
          <span className="rounded-md bg-brand-500 px-2 py-0.5 text-[11px] font-medium text-white">
            {CATEGORY_LABELS[item.category]}
          </span>
          <span className="rounded-md bg-white/90 px-2 py-0.5 text-[11px] font-medium text-dark">
            {TYPE_LABELS[item.type]}
          </span>
          <span className="hidden rounded-md bg-dark/70 px-2 py-0.5 text-[11px] font-medium text-white sm:inline">
            {MEDIA_TYPE_LABELS[item.mediaType]}
          </span>
        </div>

        {item.featured && (
          <div className="absolute right-2.5 top-2.5 rounded-md bg-brand-500 px-2 py-0.5 text-[11px] font-medium text-white">
            精选
          </div>
        )}
      </div>

      <div className="p-4 sm:p-5">
        <h3 className="text-sm font-bold leading-snug text-white sm:text-base">
          {item.title}
        </h3>
        <p className="mt-1 text-xs font-medium text-brand-400 sm:text-sm">
          {item.school}
        </p>
        <p className="mt-1.5 line-clamp-2 text-[13px] leading-relaxed text-white/50 sm:line-clamp-none sm:text-sm">
          {item.description}
        </p>
      </div>
    </div>
  );
}

export default function Portfolio({ items }: PortfolioProps) {
  const [categoryFilter, setCategoryFilter] = useState<string>("all");
  const [mediaFilter, setMediaFilter] = useState<string>("all");
  const [showAll, setShowAll] = useState(false);

  const filtered = items.filter((item) => {
    const matchCategory =
      categoryFilter === "all" || item.category === categoryFilter;
    const matchMedia =
      mediaFilter === "all" || item.mediaType === mediaFilter;
    return matchCategory && matchMedia;
  });

  const visibleItems =
    showAll || filtered.length <= MOBILE_INITIAL
      ? filtered
      : filtered.slice(0, MOBILE_INITIAL);

  const handleFilterChange = (
    type: "category" | "media",
    value: string
  ) => {
    setShowAll(false);
    if (type === "category") setCategoryFilter(value);
    else setMediaFilter(value);
  };

  return (
    <section id="portfolio" className="section-padding bg-dark">
      <div className="container-max">
        <SectionTitle
          number="04"
          title="作品案例"
          subtitle="照片与视频，见证品质与用心"
          align="center"
          theme="dark"
        />

        <div className="mobile-scroll-x mt-6 sm:mt-10 sm:flex sm:flex-wrap sm:justify-center sm:gap-2">
          {MEDIA_FILTERS.map((f) => (
            <button
              key={f.key}
              onClick={() => handleFilterChange("media", f.key)}
              className={`mobile-chip ${
                mediaFilter === f.key
                  ? "bg-brand-500 text-white"
                  : "border border-white/15 text-white/70 active:border-brand-500 sm:hover:border-brand-500 sm:hover:text-brand-400"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="mobile-scroll-x mt-2.5 sm:mt-3 sm:flex sm:flex-wrap sm:justify-center sm:gap-2">
          {CATEGORY_FILTERS.map((f) => (
            <button
              key={f.key}
              onClick={() => handleFilterChange("category", f.key)}
              className={`mobile-chip text-xs ${
                categoryFilter === f.key
                  ? "bg-white/10 text-brand-400 ring-1 ring-brand-400/50"
                  : "text-white/50 active:text-white/70 sm:hover:text-white/70"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <div className="py-14 text-center text-sm text-white/30 sm:py-20">
            暂无该分类作品，敬请期待
          </div>
        ) : (
          <>
            <div className="mt-6 grid gap-3 sm:mt-10 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
              {visibleItems.map((item) => (
                <PortfolioCard key={item.id} item={item} />
              ))}
            </div>

            {!showAll && filtered.length > MOBILE_INITIAL && (
              <div className="mt-6 text-center sm:hidden">
                <button
                  type="button"
                  onClick={() => setShowAll(true)}
                  className="rounded-full border border-white/20 px-8 py-3 text-sm font-medium text-white/80 active:bg-white/10"
                >
                  查看更多（{filtered.length - MOBILE_INITIAL}）
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
