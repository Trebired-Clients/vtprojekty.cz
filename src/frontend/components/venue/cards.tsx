import { Icon, Title } from "@trebired/frontend/react";
import { createTranslator } from "@trebired/i18n";

import { useLang } from "./../../shared/lang/use";
import cs from "./i18n/cs";
import en from "./i18n/en";
import { PhotoSoon } from "./photos";

type Card = { href: string; lead: string; photo?: string; place?: string; title: string };

function VenueCard({ card, more }: { card: Card; more: string }) {
  return (
    <a className="tbfm-cards__card" data-tbf-soft-redirect="" href={card.href}>
    {card.photo ? (
        <div className="tbfm-cards__figure">
        <img alt="" className="tbfm-cards__photo" decoding="async" loading="lazy" src={card.photo} />
        </div>
      ) : <PhotoSoon />}
    <div className="tbfm-cards__body">
    <Title level={3}>{card.title}</Title>
    {card.place ? <span className="tbfm-cards__place"><Icon spec="remixicon:map-pin-line" />{card.place}</span> : null}
    <p>{card.lead}</p>
    <span className="tbf-text-link">{more}<Icon spec="remixicon:arrow-right-s-line" /></span>
    </div>
    </a>
  );
}

export function CardGrid({ cards, columns = 2 }: { cards: Card[]; columns?: 2 | 3 }) {
  const translator = createTranslator({ cs, en }, useLang());
  return (
    <div className={columns === 3 ? "tbfm-cards tbfm-cards--three" : "tbfm-cards"}>
    {cards.map((card) => <VenueCard card={card} key={card.href} more={translator("more")} />)}
    </div>
  );
}

export type { Card };
