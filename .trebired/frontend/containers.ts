import { defineContainers } from "@trebired/frontend/config";

import { footerLogo, headerLogo, mark, siteApp } from "./containers/chrome";
import { cards, crumbs, facts, features, frame, gallery, hero, map, placeholder, places, split, stats } from "./containers/pages";
import { band } from "./containers/layout";

export const containers = defineContainers({
    band,
    cards,
    crumbs,
    facts,
    features,
    "footer-logo": footerLogo,
    frame,
    gallery,
    "header-logo": headerLogo,
    hero,
    map,
    mark,
    placeholder,
    places,
    "site-app": siteApp,
    split,
    stats,
});
