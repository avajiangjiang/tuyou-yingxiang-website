"use client";

import { useState } from "react";
import Image from "next/image";
import type { PortfolioItem } from "@/types";
import {
  CATEGORY_LABELS,
  TYPE_LABELS,
  PORTFOLIO_PLACEHOLDERS,
} from "@/lib/constants";

interface PortfolioProps {
  items: PortfolioItem[];
}

const FILTERS = [
  { key: "all", label: "全部" },
  { key: "primary", label: "小学" },
  { key: "middle", label: "初中" },
  { key: "high", label: "高中" },
] as const;

function getItemImage(item: PortfolioItem): string {
  return item.image || PORTFOLIO_PLACEHOLDERS[item.type];
}

export default function Portfolio({ items }: PortfolioProps) {
  const [filter, setFilter] = useState<string>("all");

  const filtered =
    filter === "all"
      ? items
      : items.filter((item) => item.category === filter);

  return (
    <section id="portfolio" className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="mb-16 text-center">
          <p className="section-label">04 · 作品案例</p>
          <h2 className="section-title">用作品说话</h2>
          <p className="mt-3 text-gray-500">见证品质与用心</p>
        </div>

        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {FILTERS.map((f) => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition ${
                filter === f.key
                  ? "bg-brand-500 text-white shadow-md shadow-brand-500/25"
                  : "bg-white text-gray-600 shadow-sm hover:bg-brand-50 hover:text-brand-600"
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
                className="card-hover group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-100"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={getItemImage(item)}
                    alt={item.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
                  <div className="absolute left-3 top-3 flex gap-2">
                    <span className="rounded-full bg-white/95 px-2.5 py-0.5 text-xs font-medium text-brand-700 shadow-sm">
                      {CATEGORY_LABELS[item.category]}
                    </span>
                    <span className="rounded-full bg-brand-500 px-2.5 py-0.5 text-xs font-medium text-white shadow-sm">
                      {TYPE_LABELS[item.type]}
                    </span>
                  </div>
                  {item.featured && (
                    <div className="absolute right-3 top-3 rounded-full bg-brand-500 px-2 py-0.5 text-xs font-medium text-white">
                      精选
                    </div>
                  )}
                </div>
                <div className="p-5">
                  <h3 className="mb-1 font-bold text-gray-900">{item.title}</h3>
                  <p className="mb-2 text-sm font-medium text-brand-600">
                    {item.school}
                  </p>
                  <p className="text-sm leading-relaxed text-gray-500">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
