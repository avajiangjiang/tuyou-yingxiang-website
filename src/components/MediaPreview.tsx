import Image from "next/image";
import { isExternalUrl } from "@/lib/media";

interface MediaPreviewProps {
  src: string;
  alt: string;
  className?: string;
  fill?: boolean;
}

export default function MediaPreview({
  src,
  alt,
  className = "object-cover",
  fill = true,
}: MediaPreviewProps) {
  if (!src) return null;

  if (isExternalUrl(src)) {
    if (fill) {
      return (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt={alt} className={`absolute inset-0 h-full w-full ${className}`} />
      );
    }
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img src={src} alt={alt} className={className} />
    );
  }

  return (
    <Image src={src} alt={alt} fill={fill} className={className} sizes="200px" />
  );
}
