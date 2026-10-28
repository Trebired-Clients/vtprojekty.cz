import { ERROR_STATUSES, errorRoutePath } from "@trebired/frontend";
import {
  auditSeo,
  breadcrumbSchema,
  createSeoBuilder,
  localizedPath,
  organizationSchema,
  webSiteSchema,
  type SeoAuditIssue,
  type SeoRobots,
} from "@trebired/seo";
import { readProductIdentity } from "@trebired/utils";

import seoConfig from "./../../../.trebired/seo/config";
import { language } from "./../../../.trebired/frontend/language";
import {
  CAFE,
  COMPANY,
  LISKOVEC,
  POOL,
  POOL_EMAIL,
  POOL_FACEBOOK,
  POOL_INSTAGRAM,
  POOL_PHONES,
  POOL_PHOTOS,
  POOL_WEBSITE,
  RESTAURANT,
  RESTAURANT_FACEBOOK,
  RESTAURANT_PHOTOS,
  VENUE_PHONE,
  type Photo,
  type Place,
} from "./../../frontend/shared/venues";
import { PATHS } from "./../../frontend/shared/paths";
import { allRoutePaths, metaFor } from "./../../frontend/shared/utils/routes";

type Lang = "cs" | "en";

const THEME_COLOR = "#ffffff";
const HIDDEN: SeoRobots = { follow: true, index: false };
const LANGS: readonly Lang[] = ["cs", "en"];
const CUISINE: Record<Lang, string> = { cs: "Česká kuchyně", en: "Czech" };
const product = readProductIdentity();
const EMAIL = `info@${new URL(product.website).hostname}`;

type Venue = { email: string; kind: string; name: string; phone: string; photos?: Photo[]; place: Place; sameAs?: string[] };

const VENUES: Record<string, Venue[]> = {
  [PATHS.cafe]: [{ email: EMAIL, kind: "CafeOrCoffeeShop", name: "Kavárna Gól", phone: VENUE_PHONE.value, place: CAFE }],
  [PATHS.pool]: [
    {
      email: POOL_EMAIL,
      kind: "PublicSwimmingPool",
      name: "Koupaliště Koryčany",
      phone: POOL_PHONES[0]?.value || "",
      photos: POOL_PHOTOS,
      place: POOL,
      sameAs: [POOL_WEBSITE, POOL_FACEBOOK, POOL_INSTAGRAM],
    },
  ],
  [PATHS.restaurant]: [
    {
      email: EMAIL,
      kind: "Restaurant",
      name: "Restaurace Kulturní dům",
      phone: VENUE_PHONE.value,
      photos: RESTAURANT_PHOTOS,
      place: RESTAURANT,
      sameAs: [RESTAURANT_FACEBOOK],
    },
  ],
  [PATHS.stayLiskovec]: [{ email: EMAIL, kind: "LodgingBusiness", name: "Ubytování Lískovec", phone: VENUE_PHONE.value, place: LISKOVEC }],
  [PATHS.stayStrilky]: [{ email: EMAIL, kind: "LodgingBusiness", name: "Ubytování Střílky", phone: VENUE_PHONE.value, place: CAFE }],
};

const SECTIONS: Record<string, string> = {
  [PATHS.cafe]: PATHS.gastro,
  [PATHS.events]: PATHS.gastro,
  [PATHS.restaurant]: PATHS.gastro,
  [PATHS.stayLiskovec]: PATHS.stay,
  [PATHS.stayStrilky]: PATHS.stay,
};

function langOf(value: string): Lang {
  return value === "cs" ? "cs" : "en";
}

function errorStatus(path: string): number | undefined {
  return ERROR_STATUSES.find((status) => errorRoutePath(status) === path);
}

function errorCopy(status: number, lang: Lang) {
  const messages = language.error?.[lang] as Record<number, {lead:string;title:string}>|undefined;
  return messages?.[status] || { lead: "", title: String(status) };
}

function pathIn(path: string, lang: Lang): string {
  return localizedPath(path, lang, seoConfig.site.defaultLocale, seoConfig.localeStrategy || "none");
}

function address(place: Place) {
  const fields = { addressLocality: place.town, postalCode: place.postalCode, streetAddress: place.address };
  return { "@type": "PostalAddress", addressCountry: "CZ", ...Object.fromEntries(Object.entries(fields).filter(([, value]) => value)) };
}

function restaurantFields(url: string, lang: Lang) {
  return { acceptsReservations: true, hasMenu: `${url}#menu`, servesCuisine: CUISINE[lang] };
}

function venueSchema(venue: Venue, origin: string, path: string, lang: Lang) {
  const url = `${origin}${pathIn(path, lang)}`;
  const owner = { "@type": "Organization", legalName: COMPANY.name, name: product.displayName, url: origin };
  return {
    "@context": "https://schema.org",
    "@type": venue.kind,
    address: address(venue.place),
    email: venue.email,
    ...(venue.photos ? { image: venue.photos.map((photo) => `${origin}${photo.src}`) } : {}),
    name: venue.name,
    parentOrganization: owner,
    ...(venue.sameAs ? { sameAs: venue.sameAs } : {}),
    telephone: venue.phone,
    url,
    ...(venue.kind === "Restaurant" ? restaurantFields(url, lang) : {}),
  };
}

function homeSchemas(origin: string, lang: Lang) {
  const sameAs = [RESTAURANT_FACEBOOK, POOL_FACEBOOK, POOL_INSTAGRAM, POOL_WEBSITE];
  return [
    {
      ...organizationSchema({ email: EMAIL, logo: `${origin}/icon-512.png`, name: product.displayName, sameAs, url: origin }),
      address: address(COMPANY.office),
      legalName: COMPANY.name,
      taxID: COMPANY.ico,
      telephone: VENUE_PHONE.value,
      vatID: COMPANY.dic,
    },
    {
      ...webSiteSchema({ description: metaFor("/", lang).description, name: product.displayName, url: `${origin}${pathIn("/", lang)}` }),
      inLanguage: lang,
    },
  ];
}

function crumbsFor(path: string, origin: string, lang: Lang) {
  if (path === PATHS.home) return [];
  const trail = [PATHS.home, SECTIONS[path], path].filter((step): step is string => Boolean(step));
  return [breadcrumbSchema(origin, trail.map((step) => ({ name: metaFor(step, lang).name, path: pathIn(step, lang) })))];
}

function schemasFor(path: string, origin: string, lang: Lang) {
  if (path === PATHS.home) return homeSchemas(origin, lang);
  return [...(VENUES[path] || []).map((venue) => venueSchema(venue, origin, path, lang)), ...crumbsFor(path, origin, lang)];
}

function auditSite(): SeoAuditIssue[] {
  return auditSeo(allRoutePaths().flatMap((path) => LANGS.map((lang) => ({ ...metaFor(path, lang), lang, path }))));
}

function createSiteSeo(origin: string) {
  const config = { ...seoConfig, site: { ...seoConfig.site, url: origin } };
  const chrome = { metas: [{ content: THEME_COLOR, name: "theme-color" }] };
  const seo = createSeoBuilder(config, { chrome, configPath: ".trebired/seo/config.ts" });

  return {
    audit: auditSite,
    robotsTxt: () => seo.robotsTxt(),
    shellMeta(path: string, lang: string) {
      const locale = langOf(lang);
      const status = errorStatus(path);
      if (!status) return seo.shellMeta({ ...metaFor(path, locale), locale, path });
      const copy = errorCopy(status, locale);
      return seo.shellMeta({ description: copy.lead, locale, path, robots: HIDDEN, title: copy.title });
    },
    sitemap: () => seo.sitemap(allRoutePaths().map((path) => ({ path }))),
    structuredData(path: string, lang: string) {
      const schemas = schemasFor(path, origin, langOf(lang));
      return schemas.length ? seo.structuredData(schemas) : "";
    },
  };
}

export { createSiteSeo };
