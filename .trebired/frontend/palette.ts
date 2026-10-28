const sand = {
  "50": "#fffdfa",
  "100": "#f8f4ee",
  "200": "#efe7dc",
  "300": "#e4d8c8",
  "400": "#d4c4b0",
  "500": "#c8b4a0",
};

const brown = {
  "300": "#a8927d",
  "500": "#7a6652",
  "700": "#5a4a3d",
  "900": "#3b3128",
  "950": "#2c241e",
};

export const palette = {
  modes: {
    light: {
      scale: {
        brown,
        primary: { "500": brown["900"] },
        sand,
        white: { "500": "#ffffff" },
      },
    },
  },
  semantic: {
    accent: { family: "sand", step: "300" },
    "background-page": { family: "white", step: "500" },
    "border-surface-1": { family: "sand", step: "400" },
    "border-surface-2": { family: "sand", step: "300" },
    "focus-color": { family: "brown", step: "900" },
    "surface-1": { family: "white", step: "500" },
    "surface-2": { family: "sand", step: "200" },
    "text-color": { family: "brown", step: "900" },
    "text-color-muted": { family: "brown", step: "700" },
  },
};
