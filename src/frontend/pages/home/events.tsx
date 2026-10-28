import { button as PrimitiveButton, Icon, Title } from "@trebired/frontend/react";
import type { I18nTranslator } from "@trebired/i18n";

import { SectionBand } from "./../../components/sections/band";
import { PATHS } from "./../../shared/paths";

export function EventsBand({ translator }: { translator: I18nTranslator }) {
  return (
    <SectionBand archetype="statement" tone="sand" weight="major">
    <div className="tbfm-split tbfm-split--reverse">
    <div className="tbfm-split__text">
    <Title className="tbf-text-xl5" level={2}>{translator("events.title")}</Title>
    <p>{translator("events.lead")}</p>
    <PrimitiveButton softRedirect href={PATHS.events} variant="primary">
    <Icon spec="remixicon:cake-2-line" />
    {translator("events.action")}
    </PrimitiveButton>
    </div>
    <div className="tbfm-split__media">
    <img alt={translator("events.photo")} className="tbfm-split__image" decoding="async" loading="lazy" src="/photos/restaurace-akce.jpg" />
    </div>
    </div>
    </SectionBand>
  );
}
