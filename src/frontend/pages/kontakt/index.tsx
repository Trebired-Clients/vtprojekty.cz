import { Icon, TextLink, Title } from "@trebired/frontend/react";
import { createTranslator, type I18nTranslator } from "@trebired/i18n";
import type { ReactNode } from "react";

import { SectionBand } from "./../../components/sections/band";
import { Facts } from "./../../components/venue/facts";
import { PageHero } from "./../../components/venue/hero";
import { identity } from "./../../shared/identity";
import { useLang } from "./../../shared/lang/use";
import {
  CAFE,
  COMPANY,
  LISKOVEC,
  mapsHref,
  placeText,
  POOL,
  POOL_EMAIL,
  POOL_PHONES,
  POOL_WEBSITE,
  RESTAURANT,
  VENUE_PHONE,
} from "./../../shared/venues";
import cs from "./i18n/cs";
import en from "./i18n/en";

const CONSUMER_DISPUTES = "https://adr.coi.cz";

function Place({ children, title }: { children: ReactNode; title: string }) {
  return (
    <article className="tbfm-places__place">
    <Title level={2} className="tbf-text-xl3">{title}</Title>
    {children}
    </article>
  );
}

function Fact({ children, icon, label }: { children: ReactNode; icon: string; label: string }) {
  return (
    <li className="tbfm-facts__item">
    <span className="tbfm-facts__icon"><Icon spec={icon} /></span>
    <span>
    <span className="tbfm-facts__label">{label}</span>
    {children}
    </span>
    </li>
  );
}

function Company({ translator }: { translator: I18nTranslator }) {
  return (
    <Place title={translator("company.title")}>
    <ul className="tbfm-facts">
    <Fact icon="remixicon:building-line" label={translator("company.name")}>{COMPANY.name}</Fact>
    <Fact icon="remixicon:map-pin-line" label={translator("company.office")}>
    <TextLink external href={mapsHref(COMPANY.office)}>{placeText(COMPANY.office)}</TextLink>
    </Fact>
    <Fact icon="remixicon:file-text-line" label={translator("company.ico")}>{COMPANY.ico}</Fact>
    <Fact icon="remixicon:bill-line" label={translator("company.dic")}>{COMPANY.dic}</Fact>
    <Fact icon="remixicon:government-line" label={translator("company.register")}>
    {translator("company.file", { insert: COMPANY.insert, section: COMPANY.section })}
    </Fact>
    <Fact icon="remixicon:scales-3-line" label={translator("company.disputes")}>
    <span className="tbfm-facts__value">{translator("company.adr")}</span>
    <TextLink external href={CONSUMER_DISPUTES}>adr.coi.cz</TextLink>
    </Fact>
    </ul>
    </Place>
  );
}

function Places({ translator }: { translator: I18nTranslator }) {
  const addresses = [
    { label: translator("places.restaurant"), place: RESTAURANT },
    { label: translator("places.cafe"), place: CAFE },
    { label: translator("places.liskovec"), place: LISKOVEC },
  ];
  return (
    <div className="tbfm-places tbfm-places--three">
    <Place title={translator("places.venues")}>
    <Facts linked addresses={addresses} email={identity.contactEmail} phones={[VENUE_PHONE]} />
    </Place>
    <Place title={translator("places.pool")}>
    <Facts linked email={POOL_EMAIL} phones={POOL_PHONES} place={POOL} />
    <TextLink external href={POOL_WEBSITE}>
    <span className="tbf-text-link__external">{translator("places.site")}<Icon spec="remixicon:external-link-line" /></span>
    </TextLink>
    </Place>
    <Company translator={translator} />
    </div>
  );
}

export function ContactPage() {
  const translator = createTranslator({ cs, en }, useLang());

  return (
    <main data-page="">
    <PageHero
    lead={translator("hero.lead")}
    title={translator("hero.title")}
    />
    <SectionBand archetype="tiles" tone="sand" weight="major"><Places translator={translator} /></SectionBand>
    </main>
  );
}
