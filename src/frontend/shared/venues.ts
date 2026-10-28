type Place = { address: string; maps: string; postalCode: string; town: string };

type Phone = { href: string; value: string };

type Photo = { id: string; src: string };

type Company = { dic: string; ico: string; insert: string; name: string; office: Place; section: string };

const RESTAURANT: Place = { address: "Hlavní 75", maps: "Hlavní 75, 768 04 Střílky", postalCode: "768 04", town: "Střílky" };

const CAFE: Place = { address: "Zámecká 317", maps: "Zámecká 317, 768 04 Střílky", postalCode: "768 04", town: "Střílky" };

const POOL: Place = { address: "Masarykova 936", maps: "Masarykova 936, 768 05 Koryčany", postalCode: "768 05", town: "Koryčany" };

const LISKOVEC: Place = { address: "", maps: "Lískovec", postalCode: "", town: "Lískovec" };

const COMPANY: Company = {
  dic: "CZ23369001",
  ico: "23369001",
  insert: "145618",
  name: "VT projekty s.r.o.",
  office: { address: "Příkop 843/4, Zábrdovice", maps: "Příkop 843/4, 602 00 Brno", postalCode: "602 00", town: "Brno" },
  section: "C",
};

const VENUE_PHONE: Phone = { href: "tel:+420792288900", value: "+420 792 288 900" };

const POOL_PHONES: Phone[] = [
  { href: "tel:+420604239804", value: "+420 604 239 804" },
  { href: "tel:+420702993217", value: "+420 702 993 217" },
];

const POOL_EMAIL = "info@koupaliste-korycany.cz";

const POOL_WEBSITE = "https://koupaliste-korycany.cz";

const RESTAURANT_FACEBOOK = "https://www.facebook.com/profile.php?id=61578657824365";

const POOL_FACEBOOK = "https://www.facebook.com/profile.php?id=61560908927164";

const POOL_INSTAGRAM = "https://www.instagram.com/koupalistekorycany/";

const LUNCH_MENU = "https://www.menicka.cz/api/iframe/?id=9730";

const LUNCH_MENU_PROVIDER = "Meníčka";

const MAP_PROVIDER = "Google Maps";

const RESTAURANT_PHOTOS: Photo[] = [
  { id: "bar", src: "/photos/restaurace-bar.jpg" },
  { id: "hall", src: "/photos/restaurace-sal.jpg" },
  { id: "table", src: "/photos/restaurace-stul.jpg" },
  { id: "interior", src: "/photos/restaurace-interier.jpg" },
  { id: "events", src: "/photos/restaurace-akce.jpg" },
];

const POOL_PHOTOS: Photo[] = [
  { id: "pool", src: "/photos/koupaliste-bazen.jpg" },
  { id: "children", src: "/photos/koupaliste-detsky-bazen.jpg" },
  { id: "panorama", src: "/photos/koupaliste-panorama.jpg" },
  { id: "playground", src: "/photos/koupaliste-hriste.jpg" },
];

function placeText(place: Place): string {
  return [place.address, `${place.postalCode} ${place.town}`.trim()].filter(Boolean).join(", ");
}

function mapsHref(place: Place): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(place.maps)}`;
}

function mapEmbed(place: Place): string {
  return `https://www.google.com/maps?q=${encodeURIComponent(place.maps)}&output=embed`;
}

export {
  CAFE,
  COMPANY,
  LISKOVEC,
  LUNCH_MENU,
  LUNCH_MENU_PROVIDER,
  MAP_PROVIDER,
  POOL,
  POOL_EMAIL,
  POOL_FACEBOOK,
  POOL_INSTAGRAM,
  POOL_PHONES,
  POOL_PHOTOS,
  POOL_WEBSITE,
  RESTAURANT,
  RESTAURANT_FACEBOOK,
  RESTAURANT_PHOTOS,
  VENUE_PHONE,
  mapEmbed,
  mapsHref,
  placeText,
};
export type { Company, Phone, Photo, Place };
