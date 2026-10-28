import { button as PrimitiveButton, Icon, Title } from "@trebired/frontend/react";
import { createTranslator } from "@trebired/i18n";

import { identity } from "./../../shared/identity";
import { useLang } from "./../../shared/lang/use";
import { PATHS } from "./../../shared/paths";
import { VENUE_PHONE } from "./../../shared/venues";
import { SectionBand } from "./../sections/band";
import { Facts } from "./facts";
import cs from "./i18n/cs";
import en from "./i18n/en";

export function ContactButton({ variant = "primary" }: { variant?: "primary" | "secondary" }) {
  const translator = createTranslator({ cs, en }, useLang());
  return (
    <PrimitiveButton softRedirect href={PATHS.contact} variant={variant}>
    <Icon spec="remixicon:phone-line" />
    {translator("contact")}
    </PrimitiveButton>
  );
}

export function BookBand({ lead, title }: { lead: string; title: string }) {
  return (
    <SectionBand archetype="call" weight="major">
    <Title className="tbf-text-xl5" level={2}>{title}</Title>
    <p>{lead}</p>
    <Facts email={identity.contactEmail} phones={[VENUE_PHONE]} />
    <ContactButton />
    </SectionBand>
  );
}
