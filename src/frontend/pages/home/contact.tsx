import { Title } from "@trebired/frontend/react";
import type { I18nTranslator } from "@trebired/i18n";

import { SectionBand } from "./../../components/sections/band";
import { ContactButton } from "./../../components/venue/booking";
import { identity } from "./../../shared/identity";
import { VENUE_PHONE } from "./../../shared/venues";

export function ContactBand({ translator }: { translator: I18nTranslator }) {
  return (
    <SectionBand archetype="call" tone="deep" weight="major">
    <Title className="tbf-text-xl5" level={2}>{translator("contact.title")}</Title>
    <p>{translator("contact.lead")}</p>
    <p className="tbf-text-xl2">{VENUE_PHONE.value} • {identity.contactEmail}</p>
    <ContactButton />
    </SectionBand>
  );
}
