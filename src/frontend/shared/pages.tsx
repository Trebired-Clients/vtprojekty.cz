import { createSitePages } from "@trebired/frontend/react";

import { SiteErrorPage } from "./../pages/error";
import { PATHS } from "./paths";

export const sitePages = createSitePages({
    error: SiteErrorPage,
    pages: {
      [PATHS.cafe]: async() => (await import("./../pages/gastronomie/kavarna")).CafePage,
      [PATHS.contact]: async() => (await import("./../pages/kontakt")).ContactPage,
      [PATHS.events]: async() => (await import("./../pages/gastronomie/akce")).EventsPage,
      [PATHS.gastro]: async() => (await import("./../pages/gastronomie")).GastronomyPage,
      [PATHS.home]: async() => (await import("./../pages/home")).HomePage,
      [PATHS.pool]: async() => (await import("./../pages/volny-cas/koupaliste")).PoolPage,
      [PATHS.privacy]: async() => (await import("./../pages/ochrana-osobnich-udaju")).PrivacyPage,
      [PATHS.restaurant]: async() => (await import("./../pages/gastronomie/restaurace")).RestaurantPage,
      [PATHS.stay]: async() => (await import("./../pages/ubytovani")).StayPage,
      [PATHS.stayLiskovec]: async() => (await import("./../pages/ubytovani/liskovec")).StayLiskovecPage,
      [PATHS.stayStrilky]: async() => (await import("./../pages/ubytovani/strilky")).StayStrilkyPage,
    },
});
