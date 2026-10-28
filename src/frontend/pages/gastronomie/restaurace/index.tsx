import { button as PrimitiveButton, EmbedFrame, Icon, Title } from "@trebired/frontend/react";
import { createTranslator, type I18nTranslator } from "@trebired/i18n";

import { SectionBand } from "./../../../components/sections/band";
import { Facts } from "./../../../components/venue/facts";
import { Features } from "./../../../components/venue/features";
import { HeroPhoto, PageHero } from "./../../../components/venue/hero";
import { VenueMap } from "./../../../components/venue/map";
import { Gallery } from "./../../../components/venue/photos";
import { identity } from "./../../../shared/identity";
import { useLang } from "./../../../shared/lang/use";
import { PATHS } from "./../../../shared/paths";
import { LUNCH_MENU, LUNCH_MENU_PROVIDER, RESTAURANT, RESTAURANT_PHOTOS, VENUE_PHONE } from "./../../../shared/venues";
import cs from "./i18n/cs";
import en from "./i18n/en";

const FEATURES = ["kitchen", "lunch", "events", "place"];

function Hero({ translator }: { translator: I18nTranslator }) {
  const actions = (
    <PrimitiveButton softRedirect href={`${PATHS.restaurant}#menu`} variant="primary">
    <Icon spec="remixicon:restaurant-line" />
    {translator("hero.menu")}
    </PrimitiveButton>
  );
  return (
    <PageHero
    actions={actions}
    lead={translator("hero.lead")}
    media={<HeroPhoto alt={translator("hero.photo")} src="/photos/restaurace-bar.jpg" />}
    section="gastro"
    title={translator("hero.title")}
    >
    <Facts email={identity.contactEmail} phones={[VENUE_PHONE]} place={RESTAURANT} />
    </PageHero>
  );
}

function Menu({ lang, translator }: { lang: string; translator: I18nTranslator }) {
  return (
    <SectionBand archetype="source" id="menu" tone="sand" weight="major">
    <Title className="tbf-text-xl5" level={2}>{translator("menu.title")}</Title>
    <p>{translator("menu.lead")}</p>
    <div className="tbfm-frame">
    <EmbedFrame consent={{ provider: LUNCH_MENU_PROVIDER }} lang={lang} src={LUNCH_MENU} title={translator("menu.frame")} />
    </div>
    </SectionBand>
  );
}

function Events({ translator }: { translator: I18nTranslator }) {
  return (
    <SectionBand archetype="statement" weight="major">
    <div className="tbfm-split">
    <div className="tbfm-split__text">
    <Title className="tbf-text-xl5" level={2}>{translator("events.title")}</Title>
    <p>{translator("events.lead")}</p>
    <PrimitiveButton softRedirect href={PATHS.events} variant="primary">
    <Icon spec="remixicon:cake-2-line" />
    {translator("events.action")}
    </PrimitiveButton>
    </div>
    <div className="tbfm-split__media">
    <img alt={translator("gallery.events")} className="tbfm-split__image" decoding="async" loading="lazy" src="/photos/restaurace-akce.jpg" />
    </div>
    </div>
    </SectionBand>
  );
}

export function RestaurantPage() {
  const lang = useLang();
  const translator = createTranslator({ cs, en }, lang);
  const features = FEATURES.map((id) => ({ text: translator(`features.${id}.text`), title: translator(`features.${id}.title`) }));

  return (
    <main data-page="">
    <Hero translator={translator} />
    <SectionBand archetype="tiles"><Features items={features} /></SectionBand>
    <Menu lang={lang} translator={translator} />
    <Events translator={translator} />
    <SectionBand archetype="tiles" tone="sand" weight="major">
    <Title className="tbf-text-xl5" level={2}>{translator("gallery.title")}</Title>
    <Gallery alt={(id) => translator(`gallery.${id}`)} photos={RESTAURANT_PHOTOS} wide={["bar"]} />
    </SectionBand>
    <SectionBand archetype="source"><VenueMap name={translator("map")} place={RESTAURANT} /></SectionBand>
    </main>
  );
}
