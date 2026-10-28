import { button as PrimitiveButton, Icon, Title } from "@trebired/frontend/react";
import { createTranslator, type I18nTranslator } from "@trebired/i18n";

import { SectionBand } from "./../../../components/sections/band";
import { Facts } from "./../../../components/venue/facts";
import { Features } from "./../../../components/venue/features";
import { HeroPhoto, PageHero } from "./../../../components/venue/hero";
import { VenueMap } from "./../../../components/venue/map";
import { Gallery } from "./../../../components/venue/photos";
import { useLang } from "./../../../shared/lang/use";
import { POOL, POOL_EMAIL, POOL_FACEBOOK, POOL_PHONES, POOL_PHOTOS, POOL_WEBSITE } from "./../../../shared/venues";
import cs from "./i18n/cs";
import en from "./i18n/en";

const FEATURES = ["pool", "children", "beach", "grass", "games", "food", "rental", "wifi"];

const STATS = [
  { id: "pool", value: "50 × 21 m" },
  { id: "grass", value: "12 000 m²" },
  { id: "beach", value: "3" },
];

type ExternalProps = { children: string; href: string; icon: string; variant: "primary" | "secondary" };

function External({ children, href, icon, variant }: ExternalProps) {
  return (
    <PrimitiveButton href={href} rel="noreferrer" target="_blank" variant={variant}>
    <Icon spec={icon} />
    {children}
    </PrimitiveButton>
  );
}

function Hero({ translator }: { translator: I18nTranslator }) {
  return (
    <PageHero
    actions={<External href={POOL_WEBSITE} icon="remixicon:global-line" variant="primary">{translator("hero.site")}</External>}
    lead={translator("hero.lead")}
    media={<HeroPhoto alt={translator("hero.photo")} src="/photos/koupaliste-bazen.jpg" />}
    section="leisure"
    title={translator("hero.title")}
    >
    <Facts email={POOL_EMAIL} phones={POOL_PHONES} place={POOL} />
    </PageHero>
  );
}

function Stats({ translator }: { translator: I18nTranslator }) {
  return (
    <div className="tbfm-stats">
    {STATS.map((stat) => (
          <div className="tbfm-stats__stat" key={stat.id}>
          <span className="tbfm-stats__value">{stat.value}</span>
          <span>{translator(`stats.${stat.id}`)}</span>
          </div>
    ))}
    </div>
  );
}

function Info({ translator }: { translator: I18nTranslator }) {
  return (
    <SectionBand archetype="call" tone="deep" weight="major">
    <Title className="tbf-text-xl5" level={2}>{translator("info.title")}</Title>
    <p>{translator("info.hours")}</p>
    <p>{translator("info.cash")}</p>
    <div className="tbfm-hero__actions">
    <External href={POOL_WEBSITE} icon="remixicon:global-line" variant="primary">{translator("info.site")}</External>
    <External href={POOL_FACEBOOK} icon="remixicon:facebook-fill" variant="secondary">{translator("info.facebook")}</External>
    </div>
    </SectionBand>
  );
}

export function PoolPage() {
  const translator = createTranslator({ cs, en }, useLang());
  const features = FEATURES.map((id) => ({ text: translator(`features.${id}.text`), title: translator(`features.${id}.title`) }));

  return (
    <main data-page="">
    <Hero translator={translator} />
    <SectionBand archetype="figures"><Stats translator={translator} /></SectionBand>
    <SectionBand archetype="tiles" tone="sand" weight="major"><Features items={features} /></SectionBand>
    <SectionBand archetype="tiles" weight="major">
    <Title className="tbf-text-xl5" level={2}>{translator("gallery.title")}</Title>
    <Gallery alt={(id) => translator(`gallery.${id}`)} photos={POOL_PHOTOS} wide={["pool", "panorama"]} />
    </SectionBand>
    <Info translator={translator} />
    <SectionBand archetype="source"><VenueMap name={translator("map")} place={POOL} /></SectionBand>
    </main>
  );
}
