import { MapEmbed } from "@trebired/frontend/react";
import { createTranslator } from "@trebired/i18n";

import { useLang } from "./../../shared/lang/use";
import { MAP_PROVIDER, mapEmbed, type Place } from "./../../shared/venues";
import cs from "./i18n/cs";
import en from "./i18n/en";

export function VenueMap({ name, place }: { name: string; place: Place }) {
  const lang = useLang();
  const translator = createTranslator({ cs, en }, lang);
  return (
    <div className="tbfm-map">
    <MapEmbed
    aspectRatio="16 / 9"
    consent={{ provider: MAP_PROVIDER }}
    lang={lang}
    src={mapEmbed(place)}
    title={translator("mapTitle", { place: name })}
    />
    </div>
  );
}
