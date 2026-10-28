<div align="center">

<p>
<picture>
  <source media="(prefers-color-scheme: dark)" srcset="src/frontend/public/brand/full/dark.svg">
  <img src="src/frontend/public/brand/full/light.svg" alt="VT projekty" width="360" align="top">
</picture>
</p>

**The VT projekty website: Restaurace Kulturní dům and Kavárna Gól in Střílky, Koupaliště Koryčany, and accommodation in Střílky and Lískovec, with the lunch menu, contacts and maps, in Czech and English.**

[![License](https://img.shields.io/badge/license-MIT-black)](LICENSE)
[![Runtime](https://img.shields.io/badge/runtime-Bun-black)](#install)
[![Output](https://img.shields.io/badge/output-static%20site-black)](#runtime)

</div>

---

## Contents

- [Install](#install)
- [Quick Start](#quick-start)
- [Concepts](#concepts)
- [Configuration](#configuration)
- [Runtime](#runtime)
- [Documentation](#documentation)
- [Contributing](#contributing)
- [What It Does Not Do](#what-it-does-not-do)

## Install

Bun 1 or later.

```sh
bun i
```

## Quick Start

```sh
bun run dev
```

The dev server runs behind the Code Discipline gate, builds the client bundle, writes one HTML document per route and language, and serves the result on port 3000. Set `PORT` to use another port. `bun run dev:app` skips the gate.

Production build:

```sh
bun run build
```

The build writes the site to `dist/`. It is a static directory; serve it with any static host.

## Concepts

### Frontend-only site

The site has no backend. `src/bin/frontend/build.ts` bundles the client and prerenders every route; nothing runs at request time. `src/bin/dev.ts` is local preview, not a production server. Navigation between pages is a soft navigation through `@trebired/frontend`, so the document loads once and the content swaps in place. `src/frontend/shared/pages.tsx` lists every route's page for `createSitePages` from `@trebired/frontend`: each page is its own chunk, a first visit downloads only the page it opens, and a page's code starts loading when a link to it is hovered or focused.

### Structure

The site is organised in three areas, each a category in the links config. In the header each area is a group that opens its sub-pages; in the footer each is a column; on a phone each is a section of the menu.

| Area | Route | Folder | Shows |
| --- | --- | --- | --- |
| Company | `/` | `home/` | VT projekty in general terms, the three areas, the company, celebrations and contact; the hero shows the VT mark cut into photographs of the venues |
| Gastronomie | `/gastronomie` | `gastronomie/` | An overview of the restaurant, the café and celebrations |
| | `/gastronomie/restaurace-kulturni-dum` | `gastronomie/restaurace/` | The restaurant, its lunch menu from Meníčka, events, photographs and a map |
| | `/gastronomie/kavarna-gol` | `gastronomie/kavarna/` | Kavárna Gól by the football pitch |
| | `/gastronomie/oslavy-a-akce` | `gastronomie/akce/` | Weddings, family celebrations and company events in the Kulturní dům hall |
| Volný čas | `/volny-cas/koupaliste-korycany` | `volny-cas/koupaliste/` | Koupaliště Koryčany, its facilities and figures, photographs and a map |
| Ubytování | `/ubytovani` | `ubytovani/` | An overview of both places to stay |
| | `/ubytovani/strilky` | `ubytovani/strilky/` | The rooms in the Kavárna Gól house |
| | `/ubytovani/liskovec` | `ubytovani/liskovec/` | Accommodation in Lískovec |
| Company | `/kontakt` | `kontakt/` | One contact for the restaurant, the café and the accommodation with their addresses, the pool's own contact, and the operator's company details with the consumer dispute body |
| | `/ochrana-osobnich-udaju` | `ochrana-osobnich-udaju/` | The privacy notice: who processes which personal data, why, for how long, who receives it, and the visitor's rights |

A page is a folder under `src/frontend/pages/` with its markup and an `i18n/` folder holding `cs.ts` and `en.ts`. `src/frontend/shared/paths.ts` names every route once; the links config, `shared/pages.tsx`, the pages and the structured data all read it. `src/frontend/shared/utils/routes.ts` holds each route's short name, title and description in both languages; the build reads them for the document head, the SEO audit and the breadcrumb structured data, whose items are the route names and link to the URLs in the page's own language. Sub-pages show a breadcrumb trail under the header.

### Venues

`src/frontend/shared/venues.ts` is the one place for addresses, phone numbers, email addresses, outside links and the photograph lists. Pages, the contact cards and the structured data all read from it, so a changed phone number is changed once. It also holds the operator, VT projekty s.r.o., with its registered office, IČO, DIČ and commercial register file; the footer, the contact page and the organization structured data show them, as the Civil Code requires of a company's website. The restaurant, the café and the accommodation share one phone number and the `info@` address of the product domain; the pool keeps its own numbers and address.

The pool has its own website, koupaliste-korycany.cz. This site summarises the pool's facilities and links there for the current prices and opening hours, which change with the season.

### Photographs and placeholders

The photographs are in `src/frontend/public/photos/`, copied from the restaurant and pool websites. A venue without photographs, Kavárna Gól and the accommodation, shows a striped placeholder that says photographs are coming. The details of the Lískovec accommodation are placeholders until the real ones are known.

### The brand

`src/frontend/public/brand/` holds the VT projekty logo in two forms, each in two tones: `full/` is the VT mark with the Projekty wordmark, `minimal/` is the mark alone. `light.svg` is the dark brown for light backgrounds and `dark.svg` is the cream for dark ones. The header and footer show the full logo in both tones and fade between them as the surface behind turns dark; the O společnosti section of the home page shows the minimal logo large, the same way. `@trebired/frontend` rasterizes the minimal logo into the favicon set at build time, light for a light browser theme and dark for a dark one. The page and the cards are white; the type, the sand bands and the deep brown footer take their tones from the logo's browns. `src/brand/social-card.svg` is the left side of the social card with its type in outlines; the build places the pool photograph beside it and writes `dist/social-card.png`.

## Configuration

| File | Owns |
| --- | --- |
| `.trebired/bundler/config.ts` | Frontend directory, public directory, output directory, public path |
| `.trebired/frontend/config.ts` | Palette, type, containers, components, systems, fonts, icons, favicons |
| `.trebired/frontend/links.ts` | Link categories, the header groups and the footer columns |
| `.trebired/frontend/language.ts` | Languages, the default language, error page copy |
| `.trebired/seo/config.ts` | Site URL, locale strategy, robots policy, social card, sitemap defaults |
| `.trebired/i18n/config.ts` | Translation checking |
| `.trebired/startup/config.ts` | Dev server port requirement and shutdown timeout |
| `.trebired/code-discipline/config.ts` | Enforcement presets, banned patterns, process boundary files |
| `package.json#config` | Organization and product identity |

Editing a file that `.trebired/frontend/config.ts` imports does not always invalidate the compiled config cache. Clear `node_modules/.cache` when a config change does not take effect.

## Runtime

Bun runs the build and the dev server. The published output is static HTML, CSS, JavaScript and assets; the browser is the only runtime a visitor needs.

Czech is served at the unprefixed URLs and English under `/en`. Each document carries its own `<html lang>`, title, description, canonical URL and language alternates, and holds the other language as an inert template. The language menu switches the page in place, without a reload and without changing the address; the language URLs exist for search engines. `og:locale` names the language with its country (`cs_CZ`, `en_GB`), taken from each language's flag in the language config. The build writes `sitemap.xml`, `robots.txt`, a social card and structured data: the organization with its legal name, registered office, IČO and DIČ; the website in each language; each venue with its address, contacts, links and photographs, the restaurant also with its menu, cuisine and reservations; and each sub-page's breadcrumb trail. It stops when the SEO audit finds an error. Every indexable page has one `h1` and a heading outline without skipped levels.

The lunch menu is embedded from Meníčka and the maps from Google Maps. Neither loads until the visitor clicks it: `@trebired/frontend` shows what the embed sends to the provider and a button, and remembers the choice per provider in the browser. Contact actions never open a call or an email; every contact button goes to `/kontakt`, the only page whose phone numbers and email addresses are links.

`netlify.toml` declares the build command, the publish directory and the Bun version, so the host needs no build settings of its own.

## Documentation

This README is the site documentation. Contributor commands are in [CONTRIBUTING.md](CONTRIBUTING.md). Released changes are in [CHANGELOG.md](CHANGELOG.md).

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md).

## What It Does Not Do

- No online booking, reservation form or payment. Tables, rooms and events are booked by phone or email.
- No contact form or message handling; contact runs through the published phone numbers and email addresses.
- No backend, database, session or user account.
- No analytics, tracking, advertising or cookie banner. The site itself sets no cookies, and the Meníčka menu and Google maps, which can, load only after the visitor clicks them.
- No content management interface. Copy changes are code changes in the colocated `i18n` folders, and venue details are changes to `src/frontend/shared/venues.ts`.
- No copy of the pool's prices or opening hours; those live on koupaliste-korycany.cz.
- No test suite. Verification is `code-discipline check`, `tsc --noEmit` and a real build.
