import { Title } from "@trebired/frontend/react";
import { createTranslator } from "@trebired/i18n";

import { SectionBand } from "./../../../components/sections/band";
import { ContactButton } from "./../../../components/venue/booking";
import { Facts } from "./../../../components/venue/facts";
import { Features } from "./../../../components/venue/features";
import { HeroPhoto, PageHero } from "./../../../components/venue/hero";
import { Gallery } from "./../../../components/venue/photos";
import { identity } from "./../../../shared/identity";
import { useLang } from "./../../../shared/lang/use";
import { RESTAURANT, RESTAURANT_PHOTOS, VENUE_PHONE } from "./../../../shared/venues";
import cs from "./i18n/cs";
import en from "./i18n/en";

const FEATURES = ["wedding", "family", "company", "menu"];

const HALL_PHOTOS = RESTAURANT_PHOTOS.filter((photo) => ["hall", "table", "events"].includes(photo.id));

export function EventsPage() {
  const translator = createTranslator({ cs, en }, useLang());
  const features = FEATURES.map((id) => ({ text: translator(`features.${id}.text`), title: translator(`features.${id}.title`) }));

  return (
    <main data-page="">
    <PageHero
    actions={<ContactButton />}
    lead={translator("hero.lead")}
    media={<HeroPhoto alt={translator("hero.photo")} src="/photos/restaurace-akce.jpg" />}
    section="gastro"
    title={translator("hero.title")}
    />
    <SectionBand archetype="tiles"><Features items={features} /></SectionBand>
    <SectionBand archetype="tiles" tone="sand" weight="major">
    <Title className="tbf-text-xl5" level={2}>{translator("gallery.title")}</Title>
    <Gallery alt={(id) => translator(`gallery.${id}`)} photos={HALL_PHOTOS} />
    </SectionBand>
    <SectionBand archetype="call" weight="major">
    <Title className="tbf-text-xl5" level={2}>{translator("book.title")}</Title>
    <p>{translator("book.lead")}</p>
    <Facts email={identity.contactEmail} phones={[VENUE_PHONE]} place={RESTAURANT} />
    </SectionBand>
    </main>
  );
}
