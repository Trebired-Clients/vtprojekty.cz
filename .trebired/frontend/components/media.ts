import type { FrontendMediaComponentsConfig } from "@trebired/frontend/config";

import { brand, ui } from "./../tokens";

const PHOTO_RADIUS = "1rem";

const CONTROL = {
  bg: `color-mix(in srgb, ${brand.paper} 14%, transparent)`,
  blur: "6px",
  radius: ui.iconControlRadius,
};

export const media = {
  expandableImage: {
    icon: { ...CONTROL, bg: `color-mix(in srgb, ${brand.deep} 70%, transparent)` },
  },
  lightbox: {
    backdrop: { bg: `color-mix(in srgb, ${brand.deep} 92%, transparent)`, blur: "6px" },
    control: { ...CONTROL, state: { hover: { bg: `color-mix(in srgb, ${brand.paper} 28%, transparent)` } } },
    image: { radius: PHOTO_RADIUS },
  },
} satisfies FrontendMediaComponentsConfig;
