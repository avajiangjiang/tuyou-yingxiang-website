import { GallerySection } from "@/components/GalleryCard";
import type { PortfolioItem } from "@/types";

interface FilmShowcaseProps {
  items: PortfolioItem[];
}

export default function FilmShowcase({ items }: FilmShowcaseProps) {
  const films = items.filter((item) => item.type === "film");

  return (
    <GallerySection
      id="films"
      eyebrow="FILM"
      title="微电影展示"
      items={films}
      className="section-padding bg-cream"
    />
  );
}
