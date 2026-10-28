import { SiteFooter as PackageFooter } from "@trebired/frontend/react";

import { useLang } from "./../../../shared/lang/use";
import { COMPANY, placeText } from "./../../../shared/venues";
import { BrandMark } from "./../mark";
import { createSiteTranslator } from "./translator";

export function SiteFooter() {
  const translator = createSiteTranslator(useLang());

  return (
    <PackageFooter
    credit
    softRedirect
    tone="inverse"
    brand={<BrandMark className="tbf-logo tbfm-footer-logo" />}
    note={(
        <>
        <span>© {new Date().getFullYear()} {COMPANY.name}</span>
        <span>
        {translator("footer.company", {
              dic: COMPANY.dic,
              file: `${COMPANY.section} ${COMPANY.insert}`,
              ico: COMPANY.ico,
              office: placeText(COMPANY.office),
        })}
        </span>
        </>
    )}
    tagline={translator("footer.tagline")}
    />
  );
}
