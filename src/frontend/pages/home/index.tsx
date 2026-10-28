import { createTranslator } from "@trebired/i18n";

import { useLang } from "./../../shared/lang/use";
import { AboutBand } from "./about";
import { AreasBand } from "./areas";
import { ContactBand } from "./contact";
import { EventsBand } from "./events";
import { HomeHero } from "./hero";
import cs from "./i18n/cs";
import en from "./i18n/en";

export function HomePage() {
  const translator = createTranslator({ cs, en }, useLang());

  return (
    <main data-page="">
    <HomeHero translator={translator} />
    <AreasBand translator={translator} />
    <AboutBand translator={translator} />
    <EventsBand translator={translator} />
    <ContactBand translator={translator} />
    </main>
  );
}
