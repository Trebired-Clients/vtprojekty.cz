import { defineMessages } from "@trebired/i18n";

export default defineMessages({
    lead:
    "Kdo zpracovává vaše osobní údaje, když navštívíte tento web nebo si u nás rezervujete stůl, ubytování či oslavu, " +
      "proč, jak dlouho a jaká máte práva.",
    sections: {
      accounting: {
        heading: "Účetní doklady",
        text:
        "Když vám vystavíme fakturu nebo jiný daňový doklad, uchováváme ho 10 let, jak ukládá zákon č. 563/1991 Sb., " +
          "o účetnictví, a zákon č. 235/2004 Sb., o dani z přidané hodnoty. Je to naše zákonná povinnost (čl. 6 odst. 1 " +
          "písm. c GDPR).",
      },
      bookings: {
        data:
        "Když nám zavoláte nebo napíšete kvůli stolu, ubytování, oslavě nebo s jiným dotazem, zpracujeme vaše jméno, " +
          "telefon nebo e-mail a to, co rezervace potřebuje, například termín, počet osob a vaše přání. Bez nich " +
          "rezervaci nemůžeme přijmout ani splnit (čl. 6 odst. 1 písm. b GDPR).",
        heading: "Rezervace a dotazy",
        keep:
        "Údaje o rezervaci uchováváme [DOPLNIT: jak dlouho po jejím skončení]. E-maily ukládá [DOPLNIT: poskytovatel " +
          "schránky {email}].",
      },
      controller: {
        contact: "Ve věcech osobních údajů nám pište na {email} nebo volejte na {phone}.",
        heading: "Správce",
        text:
        "Správcem osobních údajů je {name}, IČO {ico}, se sídlem {office}, zapsaná v obchodním rejstříku vedeném " +
          "Krajským soudem v Brně, oddíl {section}, vložka {insert}. Provozuje Restauraci Kulturní dům, Kavárnu Gól, " +
          "Koupaliště Koryčany a ubytování ve Střílkách a v Lískovci.",
      },
      guests: {
        heading: "Ubytovaní hosté",
        text:
        "Jako ubytovatel vedeme evidenční knihu ubytovaných podle zákona č. 565/1990 Sb., o místních poplatcích, " +
          "a ubytování cizinců hlásíme cizinecké policii podle zákona č. 326/1999 Sb., o pobytu cizinců. Zapisujeme jméno " +
          "a příjmení, adresu, číslo dokladu totožnosti a dobu pobytu, u cizinců navíc datum narození, státní občanství, " +
          "číslo cestovního dokladu, víza a účel pobytu. Je to naše zákonná povinnost (čl. 6 odst. 1 písm. c GDPR) " +
          "a záznamy uchováváme 6 let, jak tyto zákony vyžadují.",
      },
      recipients: {
        heading: "Komu údaje předáváme",
        text:
        "Údaje neprodáváme a k reklamě je nepoužíváme. Dostanou se jen k těm, kdo pro nás pracují, nebo komu je předat " +
          "musíme: ke službě Netlify, která provozuje tento web, k poskytovateli naší e-mailové schránky [DOPLNIT], " +
          "[DOPLNIT: k účetní nebo účetní firmě, pokud účetnictví vede někdo mimo společnost] a k úřadům, když to vyžaduje " +
          "zákon, tedy k cizinecké policii, k obci při kontrole poplatku z pobytu a k finančnímu úřadu.",
      },
      rights: {
        complaint:
        "Pokud nesouhlasíte s tím, jak s údaji zacházíme, můžete podat stížnost u Úřadu pro ochranu osobních údajů, " +
          "Pplk. Sochora 27, 170 00 Praha 7, [www.uoou.gov.cz](https://www.uoou.gov.cz).",
        heading: "Vaše práva",
        text:
        "Máte právo na přístup ke svým údajům, na jejich opravu a výmaz, na omezení zpracování a na přenositelnost údajů " +
          "a máte právo vznést námitku proti zpracování na základě oprávněného zájmu. Napište nám na {email}, odpovíme do " +
          "jednoho měsíce.",
      },
      website: {
        collects: "Web nemá formuláře, analytiku ani reklamu a sám o vás žádné údaje nesbírá.",
        heading: "Tento web",
        hosting:
        "Web běží na službě Netlify (Netlify, Inc., USA). Při každém načtení stránky Netlify zpracuje vaši IP adresu " +
          "a technické údaje o prohlížeči, aby stránku mohl doručit a chránit před útoky. Právním základem je náš " +
          "oprávněný zájem na bezpečném provozu webu (čl. 6 odst. 1 písm. f GDPR). [DOPLNIT: na jakém základě Netlify " +
          "přenáší údaje do USA, podle smlouvy s Netlify]",
        outside:
        "Mapy ze služby Google Maps a polední menu ze služby Meníčka se načtou, až když na ně kliknete. Teprve potom " +
          "tyto služby získají vaši IP adresu a údaje o prohlížeči a Google může ukládat cookies. Řídí se přitom vlastními " +
          "zásadami: [zásady ochrany soukromí Google](https://policies.google.com/privacy) a [Meníčka](https://www.menicka.cz).",
        storage:
        "Volby, které si na webu nastavíte, tedy jazyk, nastavení přístupnosti a souhlas s načtením map a menu, si web " +
          "pamatuje ve vašem prohlížeči. Nikam se neodesílají a smažete je vymazáním dat webu v prohlížeči.",
      },
    },
    title: "Ochrana osobních údajů",
});
