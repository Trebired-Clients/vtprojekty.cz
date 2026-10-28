import { brand, token } from "./../tokens";

import type { FrontendContainer } from "@trebired/frontend/config";
import { HAIRLINE } from "./tokens";

const HEADER_GAP = token.css `calc(${token.frontend("shell-header-height", "5rem")} + ${token.variable("space-lg")})`;

const ONE_COLUMN = { gridTemplateColumns: "minmax(0, 1fr)" };

const COVER = { blockSize: "100%", display: "block", inlineSize: "100%", objectFit: "cover" };

const ROUNDED = { borderRadius: "1rem", overflow: "hidden" };

const SURFACE = token.frontend("surface", "#ffffff");

const hero: FrontendContainer = {
  on: { "& > .tbfm-band__inner": { paddingBlockStart: HEADER_GAP } },
  parts: {
    actions: { style: { display: "flex", flexWrap: "wrap", gap: token.variable("space-sm") } },
    image: { style: COVER },
    layout: {
      at: { md: ONE_COLUMN },
      style: {
        alignItems: "center",
        columnGap: token.variable("space-xl2"),
        display: "grid",
        gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1.1fr)",
        rowGap: token.variable("space-lg"),
      },
    },
    ground: { style: { fill: brand.tint } },
    mark: { style: { blockSize: "auto", display: "block", inlineSize: "100%", overflow: "visible" } },
    media: { style: { ...ROUNDED, aspectRatio: "4 / 3", background: brand.tint } },
    shard: {
      on: {
        "& image": { scale: "1", transformBox: "fill-box", transformOrigin: "center", transition: "scale 0.8s ease" },
        "&:hover image": { scale: "1.06" },
      },
    },
    text: { style: { display: "grid", gap: token.variable("space-md"), justifyItems: "start" } },
  },
};

const cards: FrontendContainer = {
  at: { md: ONE_COLUMN },
  parts: {
    body: { style: { alignContent: "start", display: "grid", gap: token.variable("space-sm"), padding: token.variable("space-lg") } },
    card: {
      on: {
        "&:hover .tbf-text-link, &:focus-visible .tbf-text-link": { color: brand.ink },
        "&:hover .tbf-text-link::after, &:focus-visible .tbf-text-link::after": { clipPath: "inset(0 0 0 0)" },
        "&:hover .tbfm-cards__photo": { scale: "1.03" },
        "& .tbfm-placeholder": { border: "0", borderRadius: "0" },
      },
      style: {
        background: SURFACE,
        border: HAIRLINE,
        borderRadius: "1rem",
        color: "inherit",
        cursor: "pointer",
        display: "grid",
        gridTemplateRows: "auto 1fr",
        overflow: "hidden",
        textDecoration: "none",
      },
    },
    figure: { style: { aspectRatio: "3 / 2", background: brand.tint, overflow: "hidden" } },
    photo: { style: { ...COVER, transition: "scale 0.6s ease" } },
    place: {
      style: { alignItems: "center", color: brand.inkSoft, display: "flex", fontSize: "0.9rem", fontWeight: "600", gap: token.variable("space-xs") },
    },
  },
  style: { display: "grid", gap: token.variable("space-lg"), gridTemplateColumns: "repeat(2, minmax(0, 1fr))" },
  variants: {
    three: { at: { md: ONE_COLUMN }, style: { gridTemplateColumns: "repeat(3, minmax(0, 1fr))" } },
  },
};

const crumbs: FrontendContainer = {
  parts: { divider: { style: { color: brand.taupe } } },
  style: {
    alignItems: "center",
    color: brand.inkSoft,
    display: "flex",
    flexWrap: "wrap",
    fontSize: "0.9rem",
    fontWeight: "600",
    gap: token.variable("space-xs"),
  },
};

const split: FrontendContainer = {
  at: { md: { ...ONE_COLUMN, gridTemplateAreas: "\"text\" \"media\"" } },
  parts: {
    image: { style: COVER },
    logo: {
      at: { md: { inlineSize: "min(100%, 20rem)" } },
      on: { "& .tbfm-mark__face": { blockSize: "auto", display: "block", inlineSize: "100%" } },
      style: { gridArea: "media", inlineSize: "min(100%, 30rem)", justifySelf: "center" },
    },
    media: { style: { ...ROUNDED, aspectRatio: "4 / 3", background: brand.tint, gridArea: "media" } },
    text: { style: { display: "grid", gap: token.variable("space-md"), gridArea: "text", justifyItems: "start" } },
  },
  style: {
    alignItems: "center",
    columnGap: token.variable("space-xl2"),
    display: "grid",
    gridTemplateAreas: "\"text media\"",
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    rowGap: token.variable("space-lg"),
  },
  variants: {
    reverse: {
      at: { md: { gridTemplateAreas: "\"text\" \"media\"" } },
      style: { gridTemplateAreas: "\"media text\"" },
    },
  },
};

const facts: FrontendContainer = {
  parts: {
    icon: { style: { color: brand.brown, fontSize: "1.25rem", lineHeight: "1.4" } },
    item: { style: { alignItems: "start", columnGap: token.variable("space-sm"), display: "grid", gridTemplateColumns: "auto minmax(0, 1fr)" } },
    label: { style: { color: brand.inkSoft, display: "block", fontSize: "0.85rem", fontWeight: "700" } },
    value: { style: { display: "block" } },
  },
  style: { display: "grid", gap: token.variable("space-md"), listStyle: "none", paddingInlineStart: "0" },
};

const features: FrontendContainer = {
  on: {
    "& > li": { borderBlockStart: HAIRLINE, display: "grid", gap: token.variable("space-xs"), paddingBlockStart: token.variable("space-md") },
  },
  style: {
    columnGap: token.variable("space-lg"),
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(15rem, 1fr))",
    listStyle: "none",
    paddingInlineStart: "0",
    rowGap: token.variable("space-lg"),
  },
};

const gallery: FrontendContainer = {
  at: { sm: { gridAutoRows: "12rem", gridTemplateColumns: "repeat(2, minmax(0, 1fr))" } },
  parts: {
    item: { style: { ...ROUNDED, background: brand.tint } },
    wide: { style: { gridColumn: "span 2" } },
  },
  style: {
    display: "grid",
    gap: token.variable("space-sm"),
    gridAutoFlow: "dense",
    gridAutoRows: "16rem",
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
  },
};

const placeholder: FrontendContainer = {
  style: {
    alignItems: "center",
    aspectRatio: "3 / 2",
    background: token.css `repeating-linear-gradient(135deg, ${brand.sand} 0 14px, ${brand.paper} 14px 28px)`,
    border: HAIRLINE,
    borderRadius: "1rem",
    color: brand.inkSoft,
    display: "flex",
    fontWeight: "600",
    justifyContent: "center",
    padding: token.variable("space-md"),
    textAlign: "center",
  },
};

const frame: FrontendContainer = {
  at: { sm: { "--frame-height": "80rem" } },
  on: { "& .tbf-embed-frame": { aspectRatio: "auto", blockSize: "var(--frame-height)" } },
  style: { "--frame-height": "62rem", background: "#ffffff", border: HAIRLINE, borderRadius: "1rem", overflow: "hidden" },
};

const stats: FrontendContainer = {
  at: { sm: ONE_COLUMN },
  parts: {
    stat: {
      style: {
        borderBlockStart: token.css `2px solid ${brand.taupe}`,
        display: "grid",
        gap: token.variable("space-xs2"),
        paddingBlockStart: token.variable("space-sm"),
      },
    },
    value: { style: { fontFamily: token.variable("font-title"), fontSize: token.variable("text-size-xl4"), fontWeight: "800", lineHeight: "1.1" } },
  },
  style: { display: "grid", gap: token.variable("space-lg"), gridTemplateColumns: "repeat(3, minmax(0, 1fr))" },
};

const places: FrontendContainer = {
  at: { md: ONE_COLUMN },
  parts: {
    place: {
      style: {
        alignContent: "start",
        background: SURFACE,
        border: HAIRLINE,
        borderRadius: "1rem",
        display: "grid",
        gap: token.variable("space-md"),
        padding: token.variable("space-lg"),
      },
    },
  },
  style: { display: "grid", gap: token.variable("space-lg"), gridTemplateColumns: "repeat(2, minmax(0, 1fr))" },
  variants: {
    three: { at: { md: ONE_COLUMN }, style: { gridTemplateColumns: "repeat(3, minmax(0, 1fr))" } },
  },
};

const map: FrontendContainer = {
  style: { ...ROUNDED, border: HAIRLINE },
};

export { cards, crumbs, facts, features, frame, gallery, hero, map, placeholder, places, split, stats };
