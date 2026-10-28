import { TextLink } from "@trebired/frontend/react";
import { createTranslator } from "@trebired/i18n";
import { Fragment } from "react";

import { useLang } from "./../../shared/lang/use";
import { PATHS } from "./../../shared/paths";
import cs from "./i18n/cs";
import en from "./i18n/en";

type Section = "gastro" | "leisure" | "stay";

const SECTION_PATH: Record<Section, string | null> = { gastro: PATHS.gastro, leisure: null, stay: PATHS.stay };

export function Crumbs({ section, title }: { section: Section; title: string }) {
  const translator = createTranslator({ cs, en }, useLang());
  const href = SECTION_PATH[section];
  const steps = [
    <TextLink key="home" softRedirect href={PATHS.home}>{translator("crumbs.home")}</TextLink>,
    href
    ? <TextLink key="section" softRedirect href={href}>{translator(`crumbs.${section}`)}</TextLink>
    : <span key="section">{translator(`crumbs.${section}`)}</span>,
    <span aria-current="page" key="page">{title}</span>,
  ];
  return (
    <nav aria-label={translator("crumbs.label")} className="tbfm-crumbs">
    {steps.map((step, index) => (
          <Fragment key={step.key}>
          {index ? <span aria-hidden="true" className="tbfm-crumbs__divider">/</span> : null}
          {step}
          </Fragment>
    ))}
    </nav>
  );
}

export type { Section };
