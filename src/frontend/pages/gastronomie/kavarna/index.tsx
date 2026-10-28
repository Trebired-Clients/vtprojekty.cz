import { button as PrimitiveButton, Icon, Title } from "@trebired/frontend/react";
import { createTranslator, type I18nTranslator } from "@trebired/i18n";

import { SectionBand } from "./../../../components/sections/band";
import { Facts } from "./../../../components/venue/facts";
import { Features } from "./../../../components/venue/features";
import { PageHero } from "./../../../components/venue/hero";
import { VenueMap } from "./../../../components/venue/map";
import { PhotoSoon } from "./../../../components/venue/photos";
import { identity } from "./../../../shared/identity";
import { useLang } from "./../../../shared/lang/use";
import { PATHS } from "./../../../shared/paths";
import { CAFE, VENUE_PHONE } from "./../../../shared/venues";
import cs from "./i18n/cs";
import en from "./i18n/en";

const FEATURES = ["pitch", "drinks", "matches", "stay"];

function Hero({ translator }: { translator: I18nTranslator }) {
  const actions = (
    <PrimitiveButton softRedirect href={PATHS.stayStrilky} variant="primary">
    <Icon spec="remixicon:hotel-bed-line" />
    {translator("hero.stay")}
    </PrimitiveButton>
  );
  return (
    <PageHero actions={actions} lead={translator("hero.lead")} media={<PhotoSoon />} section="gastro" title={translator("hero.title")}>
    <Facts email={identity.contactEmail} phones={[VENUE_PHONE]} place={CAFE} />
    </PageHero>
  );
}

function Stay({ translator }: { translator: I18nTranslator }) {
  return (
    <SectionBand archetype="call" tone="sand" weight="major">
    <Title className="tbf-text-xl5" level={2}>{translator("stay.title")}</Title>
    <p>{translator("stay.lead")}</p>
    <PrimitiveButton softRedirect href={PATHS.stayStrilky} variant="primary">
    <Icon spec="remixicon:hotel-bed-line" />
    {translator("stay.action")}
    </PrimitiveButton>
    </SectionBand>
  );
}

export function CafePage() {
  const translator = createTranslator({ cs, en }, useLang());
  const features = FEATURES.map((id) => ({ text: translator(`features.${id}.text`), title: translator(`features.${id}.title`) }));

  return (
    <main data-page="">
    <Hero translator={translator} />
    <SectionBand archetype="tiles"><Features items={features} /></SectionBand>
    <Stay translator={translator} />
    <SectionBand archetype="source"><VenueMap name={translator("map")} place={CAFE} /></SectionBand>
    </main>
  );
}
