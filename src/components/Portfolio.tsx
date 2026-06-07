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
  { key: "all", label: "全部作品" },
  { key: "photo", label: "照片" },
  { key: "video", label: "视频" },
] as const;

function getItemImage(item: PortfolioItem): string {
  return item.image || PORTFOLIO_PLACEHOLDERS[item.type];
}

function PortfolioCard({ item }: { item: PortfolioItem }) {
  const [playing, setPlaying] = useState(false);
  const isVideo = item.mediaType === "video" && item.video;

  return (
    <div className="card-hover group overflow-hidden bg-dark-light ring-1 ring-white/10">
      <div className="relative aspect-[4/3] overflow-hidden bg-black">
        {isVideo ? (
          <>
            {playing ? (
              <video
                src={item.video}
                controls
                autoPlay
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
                  className="absolute inset-0 flex items-center justify-center bg-black/30 transition hover:bg-black/40"
                  aria-label="播放视频"
                >
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-500/90 text-white shadow-lg backdrop-blur-sm transition group-hover:scale-110">
                    <svg className="ml-1 h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
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

        <div className="absolute left-3 top-3 flex flex-wrap gap-1.5">
          <span className="bg-brand-500 px-2 py-0.5 text-xs font-medium text-white">
            {CATEGORY_LABELS[item.category]}
          </span>
          <span className="bg-white/90 px-2 py-0.5 text-xs font-medium text-dark">
            {TYPE_LABELS[item.type]}
          </span>
          <span className="bg-dark/70 px-2 py-0.5 text-xs font-medium text-white">
            {MEDIA_TYPE_LABELS[item.mediaType]}
          </span>
        </div>

        {item.featured && (
          <div className="absolute right-3 top-3 bg-brand-500 px-2 py-0.5 text-xs font-medium text-white">
            精选
          </div>
        )}
      </div>

      <div className="p-5">
        <h3 className="mb-1 font-bold text-white">{item.title}</h3>
        <p className="mb-2 text-sm font-medium text-brand-400">{item.school}</p>
        <p className="text-sm leading-relaxed text-white/50">{item.description}</p>
      </div>
    </div>
  );
}

export default function Portfolio({ items }: PortfolioProps) {
  const [categoryFilter, setCategoryFilter] = useState<string>("all");
  const [mediaFilter, setMediaFilter] = useState<string>("all");

  const filtered = items.filter((item) => {
    const matchCategory =
      categoryFilter === "all" || item.category === categoryFilter;
    const matchMedia =
      mediaFilter === "all" || item.mediaType === mediaFilter;
    return matchCategory && matchMedia;
  });

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

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {MEDIA_FILTERS.map((f) => (
            <button
              key={f.key}
              onClick={() => setMediaFilter(f.key)}
              className={`px-5 py-2 text-sm font-medium transition ${
                mediaFilter === f.key
                  ? "bg-brand-500 text-white"
                  : "border border-white/15 text-white/60 hover:border-brand-500 hover:text-brand-400"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="mt-4 flex flex-wrap justify-center gap-2">
          {CATEGORY_FILTERS.map((f) => (
            <button
              key={f.key}
              onClick={() => setCategoryFilter(f.key)}
              className={`px-4 py-1.5 text-xs transition ${
                categoryFilter === f.key
                  ? "text-brand-400 underline underline-offset-4"
                  : "text-white/40 hover:text-white/70"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <div className="py-20 text-center text-white/30">
            暂无该分类作品，敬请期待
          </div>
        ) : (
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((item) => (
              <PortfolioCard key={item.id} item={item} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
