import { PATHS } from "./../paths";
import { matchSupportedLanguage, type SupportedLang } from "./../runtime/i18n/lang";
import { pageTitle, type RouteMeta } from "./route_meta";

const BRAND = "VT projekty";

const ROUTES: Record<string, Record<SupportedLang, RouteMeta>> = {
  [PATHS.home]: {
    cs: {
      name: "VT projekty",
      title: `${BRAND}: gastronomie, volný čas a ubytování`,
      description:
      `${BRAND} provozuje restauraci, kavárnu, letní koupaliště a ubytování. Poctivé jídlo, místa pro oslavy, letní ` +
        "koupání a pohodlný nocleh.",
    },
    en: {
      name: "VT projekty",
      title: `${BRAND}: hospitality, leisure and accommodation`,
      description:
      `${BRAND} runs a restaurant, a café, a summer swimming pool and accommodation: honest food, a hall for ` +
        "celebrations, summer swims and a quiet night.",
    },
  },
  [PATHS.gastro]: {
    cs: {
      name: "Gastronomie",
      title: "Gastronomie: restaurace, kavárna a oslavy",
      description:
      `Gastronomie ${BRAND}: Restaurace Kulturní dům s polední nabídkou, Kavárna Gól u fotbalového hřiště a sál ` +
        "pro svatby, oslavy a firemní akce.",
    },
    en: {
      name: "Food and drink",
      title: "Food and drink: restaurant, café, celebrations",
      description:
      `Food and drink at ${BRAND}: the Kulturní dům restaurant with its lunch menu, Kavárna Gól by the football pitch, ` +
        "and a hall for weddings and parties.",
    },
  },
  [PATHS.restaurant]: {
    cs: {
      name: "Restaurace Kulturní dům",
      title: "Restaurace Kulturní dům Střílky, menu a akce",
      description:
      "Restaurace Kulturní dům na Hlavní 75 ve Střílkách: tradiční česká kuchyně, polední menu a prostorný sál " +
        "pro svatby, oslavy a firemní akce.",
    },
    en: {
      name: "Kulturní dům restaurant",
      title: "Kulturní dům restaurant in Střílky, menu, events",
      description:
      "The Kulturní dům restaurant at Hlavní 75 in Střílky: traditional Czech cooking, a daily lunch menu and a large " +
        "hall for weddings, parties and company events.",
    },
  },
  [PATHS.cafe]: {
    cs: {
      name: "Kavárna Gól",
      title: "Kavárna Gól Střílky u fotbalového hřiště",
      description:
      "Kavárna Gól na Zámecké 317 ve Střílkách, přímo u fotbalového hřiště: káva, čepované pivo, zápasy s přáteli " +
        "a ubytování ve stejném domě.",
    },
    en: {
      name: "Kavárna Gól",
      title: "Kavárna Gól in Střílky, by the football pitch",
      description:
      "Kavárna Gól at Zámecká 317 in Střílky, right by the football pitch: coffee, draught beer, matches with friends " +
        "and rooms to stay in the same house.",
    },
  },
  [PATHS.events]: {
    cs: {
      name: "Oslavy a akce",
      title: "Oslavy, svatby a firemní akce ve Střílkách",
      description:
      "Svatby, rodinné oslavy a firemní večírky v sále Restaurace Kulturní dům ve Střílkách. Menu na míru, prostření " +
        "a obsluha, vy se věnujete hostům.",
    },
    en: {
      name: "Celebrations and events",
      title: "Weddings, parties and company events in Střílky",
      description:
      "Weddings, family celebrations and company parties in the hall of the Kulturní dům restaurant in Střílky. " +
        "A menu to suit, laid tables and service.",
    },
  },
  [PATHS.pool]: {
    cs: {
      name: "Koupaliště Koryčany",
      title: "Koupaliště Koryčany: bazény, beachvolejbal, léto",
      description:
      `Koupaliště Koryčany, které provozuje ${BRAND}: plavecký bazén 50 × 21 m, dětský bazének, tři hřiště na ` +
        "beachvolejbal a 12 000 m² trávy na opalování.",
    },
    en: {
      name: "Koryčany swimming pool",
      title: "Koryčany swimming pool: pools, beach volleyball",
      description:
      `The Koryčany swimming pool, run by ${BRAND}: a 50 × 21 m pool, a paddling pool, three beach volleyball ` +
        "courts and 12,000 m² of grass to lie on in the sun.",
    },
  },
  [PATHS.stay]: {
    cs: {
      name: "Ubytování",
      title: "Ubytování ve Střílkách a v Lískovci",
      description:
      `Ubytování od ${BRAND}: pokoje v Kavárně Gól ve Střílkách, kousek od restaurace i koupaliště, a ubytování ` +
        "v Lískovci. Rezervace telefonicky.",
    },
    en: {
      name: "Accommodation",
      title: "Accommodation in Střílky and Lískovec",
      description:
      `Accommodation from ${BRAND}: rooms in Kavárna Gól in Střílky, a short way from the restaurant and the pool, ` +
        "and a place to stay in Lískovec. Book by phone.",
    },
  },
  [PATHS.stayStrilky]: {
    cs: {
      name: "Ubytování Střílky",
      title: "Ubytování Střílky v Kavárně Gól",
      description:
      "Pokoje v domě Kavárny Gól ve Střílkách u fotbalového hřiště, kousek od Restaurace Kulturní dům i Koupaliště " +
        "Koryčany. Rezervace telefonicky.",
    },
    en: {
      name: "Střílky accommodation",
      title: "Accommodation in Střílky at Kavárna Gól",
      description:
      "Rooms in the Kavárna Gól house in Střílky by the football pitch, a short way from the Kulturní dům restaurant " +
        "and the Koryčany pool. Book by phone.",
    },
  },
  [PATHS.stayLiskovec]: {
    cs: {
      name: "Ubytování Lískovec",
      title: `Ubytování Lískovec od ${BRAND}`,
      description:
      `Ubytování v Lískovci od ${BRAND} právě připravujeme. Podrobnosti o pokojích, vybavení a cenách brzy ` +
        "doplníme, rezervace už teď telefonicky.",
    },
    en: {
      name: "Lískovec accommodation",
      title: `Accommodation in Lískovec from ${BRAND}`,
      description:
      `${BRAND} is preparing accommodation in Lískovec. Details of the rooms, facilities and prices will follow ` +
        "soon; you can already book by phone.",
    },
  },
  [PATHS.privacy]: {
    cs: {
      name: "Ochrana osobních údajů",
      title: `Ochrana osobních údajů na webu ${BRAND}`,
      description:
      `Jak ${BRAND} s.r.o. zpracovává osobní údaje návštěvníků webu, ubytovaných hostů a těch, kdo si rezervují stůl, ` +
        "ubytování nebo oslavu, a jaká máte práva.",
    },
    en: {
      name: "Privacy",
      title: `Privacy at ${BRAND}: how we handle your data`,
      description:
      `How ${BRAND} s.r.o. handles the personal data of website visitors, guests and people who book a table, a room ` +
        "or a celebration, and what your rights are.",
    },
  },
  [PATHS.contact]: {
    cs: {
      name: "Kontakt",
      title: `Kontakt na ${BRAND}, adresy a telefony`,
      description:
      `Telefony, e-maily a adresy všech provozoven ${BRAND}: Restaurace Kulturní dům, Kavárna Gól, Koupaliště ` +
        "Koryčany a ubytování ve Střílkách a v Lískovci.",
    },
    en: {
      name: "Contact",
      title: `Contact ${BRAND}: addresses and phone numbers`,
      description:
      `Phone numbers, email addresses and directions for every ${BRAND} venue: the Kulturní dům restaurant, Kavárna ` +
        "Gól, the Koryčany pool and accommodation.",
    },
  },
};

const NOT_FOUND: Record<SupportedLang, RouteMeta> = {
  cs: { description: "Tato stránka neexistuje.", name: "Stránka nenalezena", title: pageTitle("Stránka nenalezena", BRAND) },
  en: { description: "This page does not exist.", name: "Page not found", title: pageTitle("Page not found", BRAND) },
};

export function routeExists(path: string): boolean {
  return Object.hasOwn(ROUTES, path);
}

export function metaFor(path: string, langInput: unknown = "cs"): RouteMeta {
  const lang = matchSupportedLanguage(langInput) || "cs";
  return ROUTES[path]?.[lang] || NOT_FOUND[lang];
}

export function allRoutePaths(): string[] {
  return Object.keys(ROUTES);
}

export function canonicalPath(path: string): string {
  const trimmed = String(path || "/").replace(/\/+$/u, "");
  return trimmed || "/";
}
