import { button as PrimitiveButton, Icon } from "@trebired/frontend/react";
import type { I18nTranslator } from "@trebired/i18n";

import { ContactButton } from "./../../components/venue/booking";
import { PageHero } from "./../../components/venue/hero";
import { PhotoMark } from "./photo_mark";

export function HomeHero({ translator }: { translator: I18nTranslator }) {
  const actions = (
    <>
    <PrimitiveButton softRedirect href="/#oblasti" variant="primary">
    {translator("hero.areas")}
    <Icon spec="remixicon:arrow-down-s-line" />
    </PrimitiveButton>
    <ContactButton variant="secondary" />
    </>
  );
  return (
    <PageHero
    actions={actions}
    lead={translator("hero.lead")}
    media={<PhotoMark label={translator("hero.mark")} />}
    title={translator("hero.title")}
    />
  );
}
