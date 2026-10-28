import { Title } from "@trebired/frontend/react";
import type { I18nTranslator } from "@trebired/i18n";

import { BrandMark } from "./../../components/chrome/mark";
import { SectionBand } from "./../../components/sections/band";

const FIGURES = [
  { id: "food", value: "2" },
  { id: "pool", value: "1" },
  { id: "stay", value: "2" },
];

export function AboutBand({ translator }: { translator: I18nTranslator }) {
  return (
    <SectionBand archetype="statement" weight="major">
    <div className="tbfm-split">
    <div className="tbfm-split__text">
    <Title className="tbf-text-xl5" level={2}>{translator("about.title")}</Title>
    <p>{translator("about.one")}</p>
    <p>{translator("about.two")}</p>
    <div className="tbfm-stats">
    {FIGURES.map((figure) => (
          <div className="tbfm-stats__stat" key={figure.id}>
          <span className="tbfm-stats__value">{figure.value}</span>
          <span>{translator(`about.figures.${figure.id}`)}</span>
          </div>
    ))}
    </div>
    </div>
    <BrandMark className="tbfm-split__logo" kind="minimal" />
    </div>
    </SectionBand>
  );
}
