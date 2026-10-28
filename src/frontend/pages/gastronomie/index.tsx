import { Title } from "@trebired/frontend/react";
import { createTranslator, type I18nTranslator } from "@trebired/i18n";

import { SectionBand } from "./../../components/sections/band";
import { ContactButton } from "./../../components/venue/booking";
import { CardGrid } from "./../../components/venue/cards";
import { HeroPhoto, PageHero } from "./../../components/venue/hero";
import { useLang } from "./../../shared/lang/use";
import { PATHS } from "./../../shared/paths";
import cs from "./i18n/cs";
import en from "./i18n/en";

const VENUES = [
  { href: PATHS.restaurant, id: "restaurant", photo: "/photos/restaurace-interier.jpg", place: true },
  { href: PATHS.cafe, id: "cafe", place: true },
  { href: PATHS.events, id: "events", photo: "/photos/restaurace-akce.jpg", place: false },
];

function cards(translator: I18nTranslator) {
  return VENUES.map((venue) => ({
        href: venue.href,
        lead: translator(`venues.${venue.id}.lead`),
        photo: venue.photo,
        place: venue.place ? translator(`venues.${venue.id}.place`) : undefined,
        title: translator(`venues.${venue.id}.name`),
  }));
}

export function GastronomyPage() {
  const translator = createTranslator({ cs, en }, useLang());
  return (
    <main data-page="">
    <PageHero
    actions={<ContactButton />}
    lead={translator("hero.lead")}
    media={<HeroPhoto alt={translator("hero.photo")} src="/photos/restaurace-stul.jpg" />}
    title={translator("hero.title")}
    />
    <SectionBand archetype="tiles" tone="sand" weight="major">
    <Title className="tbf-text-xl5" level={2}>{translator("venues.title")}</Title>
    <CardGrid cards={cards(translator)} columns={3} />
    </SectionBand>
    </main>
  );
}
