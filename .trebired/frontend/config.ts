import { MEDIA_ICON_SPECS } from "@trebired/frontend";
import { defineConfig } from "@trebired/frontend/config";

import { components } from "./components";
import { containers } from "./containers";
import { language } from "./language";
import { links } from "./links";
import { palette } from "./palette";
import { systems } from "./systems";
import { interactions, runtime, semantics } from "./theme";
import { breakpoints } from "./typography";

export default defineConfig({
    forVersion: "29.7.0",
    containers,
    links,
    assets: {
      favicon: {
        default: "src/frontend/public/brand/minimal/light.svg",
        light: "src/frontend/public/brand/minimal/light.svg",
        dark: "src/frontend/public/brand/minimal/dark.svg",
      },
      flags: {
        countries: ["cz", "gb"],
      },
      icons: {
        mode: "static",
        specs: [
          "remixicon:arrow-down-s-line",
          "remixicon:arrow-right-s-line",
          "remixicon:bill-line",
          "remixicon:building-line",
          "remixicon:cake-2-line",
          "remixicon:check-line",
          "remixicon:close-line",
          "remixicon:external-link-line",
          "remixicon:facebook-fill",
          "remixicon:file-text-line",
          "remixicon:global-line",
          "remixicon:government-line",
          "remixicon:hotel-bed-line",
          "remixicon:instagram-line",
          "remixicon:mail-line",
          "remixicon:map-pin-line",
          "remixicon:phone-line",
          "remixicon:restaurant-line",
          "remixicon:scales-3-line",
          "remixicon:time-line",
          "remixicon:translate-2",
          "remixicon:wheelchair-line",
          ...MEDIA_ICON_SPECS,
        ],
      },
      fonts: {
        families: {
          manrope: {
            package: "manrope",
            family: "Manrope",
            subsets: ["latin", "latin-ext"],
            weights: [400, 500, 600, 700, 800],
            preload: [400, 700],
          },
          urbanist: {
            package: "urbanist",
            family: "Urbanist",
            subsets: ["latin", "latin-ext"],
            weights: [800],
            preload: true,
          },
        },
        sans: '"Manrope", "Helvetica Neue", Arial, sans-serif',
      },
    },
    components,
    language,
    design: {
      breakpoints,
      glass: { tint: "light" },
      interactions,
      palette,
      scales: {
        spacing: { lg: 40, md: 24, sm: 12, xl: 56, xl2: 72, xl3: 96, xs: 8, xs2: 4 },
        textBody: "lg",
        textSize: { lg: 19, md: 16, sm: 14, xl: 24, xl2: 30, xl3: 38, xl4: 50, xl5: 64, xl6: 84, xl7: 120, xs: 12 },
      },
      scrollBehavior: "smooth",
      semantics,
    },
    runtime,
    systems,
});
