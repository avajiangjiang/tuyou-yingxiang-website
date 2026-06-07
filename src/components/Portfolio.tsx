"use client";

import { useState } from "react";
import Image from "next/image";
import type { PortfolioItem } from "@/types";
import { CATEGORY_LABELS, TYPE_LABELS } from "@/lib/constants";

interface PortfolioProps {
  items: PortfolioItem[];
}

const FILTERS = [
  { key: "all", label: "全部" },
  { key: "primary", label: "小学" },
  { key: "middle", label: "初中" },
  { key: "high", label: "高中" },
] as const;

export default function Portfolio({ items }: PortfolioProps) {
  const [filter, setFilter] = useState<string>("all");

  const filtered =
    filter === "all"
      ? items
      : items.filter((item) => item.category === filter);

  return (
    <section id="portfolio" className="section-padding">
      <div className="container-max">
        <div className="mb-16 text-center">
          <p className="mb-2 text-sm font-semibold tracking-widest text-brand-600 uppercase">
            04 · 作品案例
          </p>
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            用作品说话
          </h2>
          <p className="mt-3 text-gray-500">见证品质与用心</p>
        </div>

        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {FILTERS.map((f) => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition ${
                filter === f.key
                  ? "bg-brand-600 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <div className="py-20 text-center text-gray-400">
            暂无该分类作品，敬请期待
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((item) => (
              <div
                key={item.id}
                className="group overflow-hidden rounded-2xl bg-white shadow-sm transition hover:shadow-lg"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-brand-100 to-brand-200">
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center">
                      <span className="text-5xl opacity-30">
                        {item.type === "film"
                          ? "🎬"
                          : item.type === "album"
                          ? "📖"
                          : item.type === "promo"
                          ? "🎥"
                          : "📷"}
                      </span>
                    </div>
                  )}
                  <div className="absolute left-3 top-3 flex gap-2">
                    <span className="rounded-full bg-white/90 px-2.5 py-0.5 text-xs font-medium text-brand-700">
                      {CATEGORY_LABELS[item.category]}
                    </span>
                    <span className="rounded-full bg-brand-600/90 px-2.5 py-0.5 text-xs font-medium text-white">
                      {TYPE_LABELS[item.type]}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="mb-1 font-bold text-gray-900">{item.title}</h3>
                  <p className="mb-2 text-sm text-brand-600">{item.school}</p>
                  <p className="text-sm text-gray-500">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
