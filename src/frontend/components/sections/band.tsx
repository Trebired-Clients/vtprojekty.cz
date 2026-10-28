import type { CSSProperties, ReactNode } from "react";
import { Title } from "@trebired/frontend/react";
import { classNames } from "./../chrome/utils";

export type SectionArchetype =
| "call"
| "comparison"
| "figures"
| "hairline"
| "ledger"
| "pinned"
| "prose"
| "rail"
| "source"
| "spec"
| "statement"
| "tiles";

const TIGHT = new Set<SectionArchetype>(["prose", "statement"]);

export type SectionWeight = "major" | "minor";

export type BandTone = "deep" | "sand";

export function SectionBand({
    archetype,
    children,
    className,
    field,
    headline,
    id,
    style,
    tone,
    weight = "minor",
  }: {
    archetype: SectionArchetype;
    children: ReactNode;
    className?: string;
    field?: ReactNode;
    headline?: ReactNode;
    id?: string;
    style?: CSSProperties;
    tone?: BandTone;
    weight?: SectionWeight;
}) {
  const bandClass: (string | false | undefined)[] = [
    "tbfm-band",
    weight === "major" ? "tbfm-band--major" : false,
    tone ? `tbfm-band--${tone}` : false,
    className,
  ];

  return (
    <section
    id={id}
    style={style}
    className={classNames(bandClass)}
    data-section={archetype}
    data-tbf-dark={tone === "deep" ? "" : undefined}
    >
    <div className={classNames(["tbfm-band__inner", TIGHT.has(archetype) ? "tbf-gap-md" : "tbf-gap-lg"])}>
    {field ? <Title className="tbf-text-xl6" level={2}>{field}</Title> : null}
    {headline ? <p>{headline}</p> : null}
    {children}
    </div>
    </section>
  );
}
