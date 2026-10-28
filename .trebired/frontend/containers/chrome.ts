import { brand, CONTENT_MAX, token } from "./../tokens";

import type { FrontendContainer } from "@trebired/frontend/config";

const siteApp: FrontendContainer = {
  on: {
    "& :where(p)": { color: brand.inkSoft, lineHeight: "1.75", textWrap: "pretty" },
    "& :where(ul:not([class]), ol:not([class]))": {
      display: "grid",
      gap: token.variable("space-xs"),
      lineHeight: "1.75",
      paddingInlineStart: "1.1rem",
    },
    "& [data-page]": { "--tbf-ui-link-root-decoration-line": "underline", display: "grid", gridTemplateColumns: "minmax(0, 1fr)" },
    "& [data-page] > *": { minWidth: "0" },
    "& [data-tbf-dark] :where(p)": { color: "color-mix(in srgb, currentcolor 82%, transparent)" },
  },
  style: {
    "--band-max": CONTENT_MAX,
    "--font-sans": "\"Manrope\", \"Helvetica Neue\", Arial, sans-serif",
    "--font-title": "\"Urbanist\", \"Helvetica Neue\", Arial, sans-serif",
    "--section-inset-major": token.variable("space-xl3"),
    "--section-inset-minor": token.variable("space-xl2"),
    "--tbf-dark-ground": brand.deep,
    "--tbf-ink": brand.deep,
    "--text-size-xl2": "clamp(1.4rem, 2.2vw, 1.85rem)",
    "--text-size-xl3": "clamp(1.6rem, 2.8vw, 2.3rem)",
    "--text-size-xl4": "clamp(1.9rem, 3.8vw, 3.1rem)",
    "--text-size-xl5": "clamp(2.2rem, 5vw, 4rem)",
    "--text-size-xl6": "clamp(2.5rem, 6.2vw, 5.25rem)",
    "--title-letter-spacing": "-0.01em",
    "--title-line-height-min": "0",
    "--title-text-transform": "none",
    "--title-weight": "800",
    fontFamily: token.variable("font-sans"),
    lineHeight: "1.5",
    textRendering: "optimizeLegibility",
  },
};

const mark: FrontendContainer = {
  on: {
    "& .tbfm-mark__face[data-site-mark=\"dark\"]": {
      insetBlockStart: "0",
      insetInlineStart: "0",
      opacity: token.frontend("on-dark", "0"),
      position: "absolute",
    },
  },
  parts: {
    face: {
      style: {
        opacity: token.css `calc(1 - ${token.frontend("on-dark", "0")})`,
        transition: token.css `opacity ${token.frontend(
        "shell-header-tone-duration",
        "320ms"
        )} ${token.frontend("shell-header-tone-easing", "ease")}`,
      },
    },
  },
  style: { position: "relative" },
};

const headerLogo: FrontendContainer = {
  style: { "--tbf-surf-logo-root-height": "2.5rem", "--tbf-surf-logo-root-max": "calc(100vw - 7rem)" },
};

const footerLogo: FrontendContainer = {
  style: { "--tbf-surf-logo-root-height": "2.9rem", "--tbf-surf-logo-root-max": "78vw" },
};

export { footerLogo, headerLogo, mark, siteApp };
