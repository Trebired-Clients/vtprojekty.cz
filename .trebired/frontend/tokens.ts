import { createFrontendTokenHelpers } from "@trebired/frontend/config";

import { palette } from "./palette";

const token = createFrontendTokenHelpers(palette);

const semantic = {
  accent: token.semantic("accent"),
  backgroundPage: token.semantic("background-page"),
  borderSurface1: token.semantic("border-surface-1"),
  borderSurface2: token.semantic("border-surface-2"),
  highlight: token.semantic("accent"),
  surface1: token.semantic("surface-1"),
  surface2: token.semantic("surface-2"),
  textColor: token.semantic("text-color"),
  textMuted: token.semantic("text-color-muted"),
};

const brand = {
  brown: token.color("brown", "500"),
  deep: token.color("brown", "950"),
  ink: token.color("brown", "900"),
  inkSoft: token.color("brown", "700"),
  paper: token.color("sand", "100"),
  sand: token.color("sand", "200"),
  taupe: token.color("sand", "500"),
  tint: token.color("sand", "300"),
};

const ui = {
  controlRadius: "0.5rem",
  iconControlRadius: "0.5rem",
  fontSans: token.variable("tbf-font-sans", "Manrope, sans-serif"),
};

const CONTENT_MAX = "84rem";

export { CONTENT_MAX, brand, semantic, token, ui };
