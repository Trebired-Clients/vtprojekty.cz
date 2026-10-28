import { Title } from "@trebired/frontend/react";
import type { I18nTranslator } from "@trebired/i18n";

import { SectionBand } from "./../../components/sections/band";
import { CardGrid } from "./../../components/venue/cards";
import { PATHS } from "./../../shared/paths";

const AREAS = [
  { href: PATHS.gastro, id: "gastro", photo: "/photos/restaurace-interier.jpg" },
  { href: PATHS.pool, id: "leisure", photo: "/photos/koupaliste-detsky-bazen.jpg" },
  { href: PATHS.stay, id: "stay" },
];

export function AreasBand({ translator }: { translator: I18nTranslator }) {
  const cards = AREAS.map((area) => ({
        href: area.href,
        lead: translator(`areas.${area.id}.lead`),
        photo: area.photo,
        title: translator(`areas.${area.id}.title`),
  }));
  return (
    <SectionBand archetype="tiles" id="oblasti" tone="sand" weight="major">
    <Title className="tbf-text-xl5" level={2}>{translator("areas.title")}</Title>
    <CardGrid cards={cards} columns={3} />
    </SectionBand>
  );
}
