import { ExpandableImage } from "@trebired/frontend/react";
import { createTranslator } from "@trebired/i18n";

import { useLang } from "./../../shared/lang/use";
import type { Photo } from "./../../shared/venues";
import cs from "./i18n/cs";
import en from "./i18n/en";

type GalleryProps = { alt: (id: string) => string; photos: Photo[]; wide?: string[] };

export function Gallery({ alt, photos, wide = [] }: GalleryProps) {
  const lang = useLang();
  const sources = photos.map((photo) => photo.src);

  return (
    <div className="tbfm-gallery">
    {photos.map((photo, index) => (
          <ExpandableImage
          alt={alt(photo.id)}
          className={wide.includes(photo.id) ? "tbfm-gallery__item tbfm-gallery__wide" : "tbfm-gallery__item"}
          images={sources}
          index={index}
          key={photo.id}
          lang={lang}
          src={photo.src}
          />
    ))}
    </div>
  );
}

export function PhotoSoon() {
  const translator = createTranslator({ cs, en }, useLang());
  return <div className="tbfm-placeholder">{translator("photoSoon")}</div>;
}
