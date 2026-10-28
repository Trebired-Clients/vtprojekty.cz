import type { FrontendComponentsConfig } from "@trebired/frontend/config";

import { media } from "./media";
import { overlays } from "./overlays";
import { primitives } from "./primitives";
import { shell } from "./shell";
import { surfaces } from "./surfaces";
import { typography } from "./typography";

export const components = {
  media,
  overlays,
  primitives,
  shell,
  surfaces,
  typography,
} satisfies FrontendComponentsConfig;
