import type { FrontendLinksConfig } from "@trebired/frontend/config";

import cs from "./../../src/frontend/components/chrome/site/i18n/cs";
import en from "./../../src/frontend/components/chrome/site/i18n/en";
import { PATHS } from "./../../src/frontend/shared/paths";

const GASTRONOMY = ["gastro", "restaurant", "cafe", "events"];

const LEISURE = ["pool", "pool_site"];

const STAY = ["stay", "stay_strilky", "stay_liskovec"];

const main = (paths: Record<string, string>) =>
Object.fromEntries(Object.entries(paths).map(([key, href]) => [key, { href, site: "main" }]));

const external = (paths: Record<string, string>) =>
Object.fromEntries(Object.entries(paths).map(([key, href]) => [key, { external: true, href }]));

export const links: FrontendLinksConfig = {
  categories: {
    company: ["home", "contact", "restaurant_facebook", "pool_facebook", "pool_instagram"],
    gastronomy: GASTRONOMY,
    leisure: LEISURE,
    stay: STAY,
  },
  links: {
    ...main({
        cafe: PATHS.cafe,
        contact: PATHS.contact,
        events: PATHS.events,
        gastro: PATHS.gastro,
        home: PATHS.home,
        pool: PATHS.pool,
        privacy: PATHS.privacy,
        restaurant: PATHS.restaurant,
        stay: PATHS.stay,
        stay_liskovec: PATHS.stayLiskovec,
        stay_strilky: PATHS.stayStrilky,
    }),
    ...external({
        pool_facebook: "https://www.facebook.com/profile.php?id=61560908927164",
        pool_instagram: "https://www.instagram.com/koupalistekorycany/",
        pool_site: "https://koupaliste-korycany.cz",
        restaurant_facebook: "https://www.facebook.com/profile.php?id=61578657824365",
    }),
  },
  messages: { cs: cs.links, en: en.links },
  sets: {
    main: {
      footer: { columns: [["gastronomy"], ["leisure", "stay"], ["company"]], note: ["privacy"] },
      header: [
        { group: "gastronomy", links: GASTRONOMY },
        { group: "leisure", links: LEISURE },
        { group: "stay", links: STAY },
        "contact",
      ],
    },
  },
};
