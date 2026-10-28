import { brand, token } from "./../tokens";

import type { FrontendContainer } from "@trebired/frontend/config";
import { HAIRLINE, PAGE, TEXT } from "./tokens";

const band: FrontendContainer = {
  on: {
    "& :where(p)": { maxWidth: "44rem" },
    "& .tbf-button": { position: "relative", zIndex: "1" },
    "&:not(.tbfm-band--sand, .tbfm-band--deep) + .tbfm-band:not(.tbfm-band--sand, .tbfm-band--deep)": { borderBlockStart: HAIRLINE },
  },
  parts: {
    inner: {
      style: {
        display: "flex",
        flexDirection: "column",
        minWidth: "0",
        width: token.css `min(${token.variable("band-max")}, 100%)`,
      },
    },
  },
  style: {
    alignItems: "center",
    background: PAGE,
    color: TEXT,
    display: "flex",
    flexDirection: "column",
    paddingBlock: token.variable("section-inset-minor"),
    paddingInline: token.frontend("container-px"),
  },
  variants: {
    deep: {
      style: {
        "--tbf-ui-btn-variants-primary-bg": brand.paper,
        "--tbf-ui-btn-variants-primary-color": brand.ink,
        "--tbf-ui-btn-variants-primary-state-hover-bg": brand.tint,
        "--tbf-ui-btn-variants-primary-state-hover-color": brand.ink,
        background: brand.ink,
      },
      tone: "dark",
    },
    major: {
      style: { paddingBlock: token.variable("section-inset-major") },
    },
    sand: {
      style: { background: brand.sand },
    },
  },
};

export { band };
