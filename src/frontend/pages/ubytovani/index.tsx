import { Title } from "@trebired/frontend/react";
import { createTranslator } from "@trebired/i18n";

import { SectionBand } from "./../../components/sections/band";
import { BookBand, ContactButton } from "./../../components/venue/booking";
import { CardGrid } from "./../../components/venue/cards";
import { PageHero } from "./../../components/venue/hero";
import { PhotoSoon } from "./../../components/venue/photos";
import { useLang } from "./../../shared/lang/use";
import { PATHS } from "./../../shared/paths";
import cs from "./i18n/cs";
import en from "./i18n/en";

const PLACES = [
  { href: PATHS.stayStrilky, id: "strilky" },
  { href: PATHS.stayLiskovec, id: "liskovec" },
];

export function StayPage() {
  const translator = createTranslator({ cs, en }, useLang());
  const cards = PLACES.map((place) => ({
        href: place.href,
        lead: translator(`places.${place.id}.lead`),
        place: translator(`places.${place.id}.place`),
        title: translator(`places.${place.id}.name`),
  }));

  return (
    <main data-page="">
    <PageHero
    actions={<ContactButton />}
    lead={translator("hero.lead")}
    media={<PhotoSoon />}
    title={translator("hero.title")}
    />
    <SectionBand archetype="tiles" tone="sand" weight="major">
    <Title className="tbf-text-xl5" level={2}>{translator("places.title")}</Title>
    <CardGrid cards={cards} />
    </SectionBand>
    <BookBand lead={translator("book.lead")} title={translator("book.title")} />
    </main>
  );
}
