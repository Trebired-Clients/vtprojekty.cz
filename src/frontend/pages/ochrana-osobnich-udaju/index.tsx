import { TextDocumentBody, Title } from "@trebired/frontend/react";
import type { TextDocument } from "@trebired/frontend/config";
import { createTranslator, type I18nTranslator } from "@trebired/i18n";

import { SectionBand } from "./../../components/sections/band";
import { identity } from "./../../shared/identity";
import { useLang } from "./../../shared/lang/use";
import { COMPANY, placeText, VENUE_PHONE } from "./../../shared/venues";
import cs from "./i18n/cs";
import en from "./i18n/en";

const UPDATED = "2026-10-29";

const SECTIONS = [
  { id: "controller", paragraphs: ["text", "contact"] },
  { id: "website", paragraphs: ["collects", "hosting", "storage", "outside"] },
  { id: "bookings", paragraphs: ["data", "keep"] },
  { id: "guests", paragraphs: ["text"] },
  { id: "accounting", paragraphs: ["text"] },
  { id: "recipients", paragraphs: ["text"] },
  { id: "rights", paragraphs: ["text", "complaint"] },
];

function privacyDocument(translator: I18nTranslator): TextDocument {
  const vars = {
    email: identity.contactEmail,
    ico: COMPANY.ico,
    insert: COMPANY.insert,
    name: COMPANY.name,
    office: placeText(COMPANY.office),
    phone: VENUE_PHONE.value.replaceAll(" ", " "),
    section: COMPANY.section,
  };
  return {
    lead: [],
    outline: true,
    parts: "prose",
    sections: SECTIONS.map((part) => ({
          body: part.paragraphs.map((paragraph) => translator(`sections.${part.id}.${paragraph}`, vars)),
          heading: translator(`sections.${part.id}.heading`),
          id: part.id,
    })),
    title: translator("title"),
    updated: UPDATED,
  };
}

export function PrivacyPage() {
  const translator = createTranslator({ cs, en }, useLang());

  return (
    <main data-page="">
    <SectionBand archetype="statement" className="tbfm-hero" weight="major">
    <Title className="tbf-text-xl6" level={1}>{translator("title")}</Title>
    <p className="tbf-text-lg">{translator("lead")}</p>
    </SectionBand>
    <SectionBand archetype="prose" weight="major">
    <TextDocumentBody document={privacyDocument(translator)} label={translator("title")} />
    </SectionBand>
    </main>
  );
}
