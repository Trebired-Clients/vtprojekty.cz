import { createTranslator } from "@trebired/i18n";

import { BookBand, ContactButton } from "./../../../components/venue/booking";
import { Facts } from "./../../../components/venue/facts";
import { PageHero } from "./../../../components/venue/hero";
import { PhotoSoon } from "./../../../components/venue/photos";
import { identity } from "./../../../shared/identity";
import { useLang } from "./../../../shared/lang/use";
import { LISKOVEC, VENUE_PHONE } from "./../../../shared/venues";
import cs from "./i18n/cs";
import en from "./i18n/en";

export function StayLiskovecPage() {
  const translator = createTranslator({ cs, en }, useLang());

  return (
    <main data-page="">
    <PageHero
    actions={<ContactButton />}
    lead={translator("hero.lead")}
    media={<PhotoSoon />}
    section="stay"
    title={translator("hero.title")}
    >
    <Facts email={identity.contactEmail} phones={[VENUE_PHONE]} place={LISKOVEC} />
    </PageHero>
    <BookBand lead={translator("book.lead")} title={translator("book.title")} />
    </main>
  );
}
