import { Icon, TextLink } from "@trebired/frontend/react";
import { createTranslator } from "@trebired/i18n";

import { useLang } from "./../../shared/lang/use";
import { mapsHref, placeText, type Phone, type Place } from "./../../shared/venues";
import cs from "./i18n/cs";
import en from "./i18n/en";

type Address = { label: string; place: Place };

type FactsProps = { addresses?: Address[]; email?: string; linked?: boolean; phones?: Phone[]; place?: Place };

export function Facts({ addresses = [], email, linked = false, phones = [], place }: FactsProps) {
  const translator = createTranslator({ cs, en }, useLang());

  return (
    <ul className="tbfm-facts">
    {place ? (
        <li className="tbfm-facts__item">
        <span className="tbfm-facts__icon"><Icon spec="remixicon:map-pin-line" /></span>
        <span>
        <span className="tbfm-facts__label">{translator("address")}</span>
        <TextLink external href={mapsHref(place)}>{placeText(place)}</TextLink>
        </span>
        </li>
      ) : null}
    {phones.length ? (
        <li className="tbfm-facts__item">
        <span className="tbfm-facts__icon"><Icon spec="remixicon:phone-line" /></span>
        <span>
        <span className="tbfm-facts__label">{translator("phone")}</span>
        {phones.map((phone) => (
              <span className="tbfm-facts__value" key={phone.href}>
              {linked ? <TextLink href={phone.href}>{phone.value}</TextLink> : phone.value}
              </span>
        ))}
        </span>
        </li>
      ) : null}
    {email ? (
        <li className="tbfm-facts__item">
        <span className="tbfm-facts__icon"><Icon spec="remixicon:mail-line" /></span>
        <span>
        <span className="tbfm-facts__label">{translator("email")}</span>
        {linked ? <TextLink href={`mailto:${email}`}>{email}</TextLink> : <span className="tbfm-facts__value">{email}</span>}
        </span>
        </li>
      ) : null}
    {addresses.map((item) => (
          <li className="tbfm-facts__item" key={item.label}>
          <span className="tbfm-facts__icon"><Icon spec="remixicon:map-pin-line" /></span>
          <span>
          <span className="tbfm-facts__label">{item.label}</span>
          <TextLink external href={mapsHref(item.place)}>{placeText(item.place)}</TextLink>
          </span>
          </li>
    ))}
    </ul>
  );
}
