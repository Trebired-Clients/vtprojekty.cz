import { createTranslator } from "@trebired/i18n";

import { SectionBand } from "./../../../components/sections/band";
import { BookBand, ContactButton } from "./../../../components/venue/booking";
import { Facts } from "./../../../components/venue/facts";
import { Features } from "./../../../components/venue/features";
import { PageHero } from "./../../../components/venue/hero";
import { VenueMap } from "./../../../components/venue/map";
import { PhotoSoon } from "./../../../components/venue/photos";
import { identity } from "./../../../shared/identity";
import { useLang } from "./../../../shared/lang/use";
import { CAFE, VENUE_PHONE } from "./../../../shared/venues";
import cs from "./i18n/cs";
import en from "./i18n/en";

const NEAR = ["cafe", "restaurant", "pool"];

export function StayStrilkyPage() {
  const translator = createTranslator({ cs, en }, useLang());
  const near = NEAR.map((id) => ({ text: translator(`near.${id}.text`), title: translator(`near.${id}.title`) }));

  return (
    <main data-page="">
    <PageHero
    actions={<ContactButton />}
    lead={translator("hero.lead")}
    media={<PhotoSoon />}
    section="stay"
    title={translator("hero.title")}
    >
    <Facts email={identity.contactEmail} phones={[VENUE_PHONE]} place={CAFE} />
    </PageHero>
    <SectionBand archetype="tiles" tone="sand"><Features items={near} /></SectionBand>
    <BookBand lead={translator("book.lead")} title={translator("book.title")} />
    <SectionBand archetype="source"><VenueMap name={translator("map")} place={CAFE} /></SectionBand>
    </main>
  );
}
