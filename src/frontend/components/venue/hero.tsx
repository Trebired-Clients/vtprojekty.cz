import { Title } from "@trebired/frontend/react";
import type { ReactNode } from "react";

import { SectionBand } from "./../sections/band";
import { Crumbs, type Section } from "./crumbs";

type PageHeroProps = {
  actions?: ReactNode;
  children?: ReactNode;
  lead: string;
  media?: ReactNode;
  section?: Section;
  title: string;
};

export function PageHero({ actions, children, lead, media, section, title }: PageHeroProps) {
  const text = (
    <div className="tbfm-hero__text">
    {section ? <Crumbs section={section} title={title} /> : null}
    <Title className="tbf-text-xl6" level={1}>{title}</Title>
    <p className="tbf-text-lg">{lead}</p>
    {children}
    {actions ? <div className="tbfm-hero__actions">{actions}</div> : null}
    </div>
  );
  return (
    <SectionBand archetype="statement" className="tbfm-hero" weight="major">
    {media ? <div className="tbfm-hero__layout">{text}{media}</div> : text}
    </SectionBand>
  );
}

export function HeroPhoto({ alt, src }: { alt: string; src: string }) {
  return (
    <div className="tbfm-hero__media">
    <img alt={alt} className="tbfm-hero__image" decoding="async" src={src} />
    </div>
  );
}
