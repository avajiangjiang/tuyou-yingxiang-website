"use client";

import { useState } from "react";
import MediaPreview from "@/components/MediaPreview";
import type { PortfolioItem } from "@/types";
import { TYPE_LABELS, PORTFOLIO_PLACEHOLDERS } from "@/lib/constants";

export const GALLERY_SLOT_COUNT = 8;

export function getItemImage(item: PortfolioItem): string {
  return item.image || PORTFOLIO_PLACEHOLDERS[item.type];
}

export function fillGallerySlots(
  items: PortfolioItem[],
  count = GALLERY_SLOT_COUNT
): (PortfolioItem | null)[] {
  const slots: (PortfolioItem | null)[] = items.slice(0, count);
  while (slots.length < count) {
    slots.push(null);
  }
  return slots;
}

export function GalleryCard({ item }: { item: PortfolioItem | null }) {
  const [playing, setPlaying] = useState(false);

  if (!item) {
    return (
      <article className="flex flex-col">
        <div className="flex aspect-[4/3] items-center justify-center bg-cream">
          <span className="text-xs text-dark/25">敬请期待</span>
        </div>
        <div className="mt-2.5 h-4" />
        <div className="mt-0.5 h-3" />
      </article>
    );
  }

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
      <h3 className="mt-2.5 line-clamp-2 text-sm font-bold leading-snug text-dark">
        {item.title}
      </h3>
      <p className="mt-0.5 text-xs text-dark/45">#{TYPE_LABELS[item.type]}</p>
    </article>
  );
}

interface GallerySectionProps {
  id?: string;
  eyebrow: string;
  title: string;
  items: PortfolioItem[];
  className?: string;
}

export function GallerySection({
  id,
  eyebrow,
  title,
  items,
  className = "section-padding bg-white",
}: GallerySectionProps) {
  const slots = fillGallerySlots(items);

  return (
    <section id={id} className={className}>
      <div className="container-max">
        <div className="text-center">
          <p className="text-[11px] font-medium tracking-[0.2em] text-dark/40">
            {eyebrow}
          </p>
          <h2 className="mt-2 text-2xl font-bold text-dark sm:text-3xl">
            {title}
          </h2>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-x-3 gap-y-6 sm:mt-8 sm:gap-x-4 sm:gap-y-8">
          {slots.map((item, index) => (
            <GalleryCard key={item?.id ?? `placeholder-${index}`} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
