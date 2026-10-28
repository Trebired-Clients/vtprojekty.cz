import { defineMessages } from "@trebired/i18n";

export default defineMessages({
    lead:
    "Who processes your personal data when you visit this website or book a table, a room or a celebration with us, " +
      "why, for how long, and what your rights are.",
    sections: {
      accounting: {
        heading: "Accounting documents",
        text:
        "When we issue you an invoice or another tax document, we keep it for 10 years, as Act No. 563/1991 Coll. on " +
          "accounting and Act No. 235/2004 Coll. on value added tax require. This is our legal obligation (Article " +
          "6(1)(c) GDPR).",
      },
      bookings: {
        data:
        "When you call or write to us about a table, a room, a celebration or anything else, we process your name, your " +
          "phone number or email address and what the booking needs, such as the date, the number of people and your " +
          "wishes. Without them we cannot take or fulfil the booking (Article 6(1)(b) GDPR).",
        heading: "Bookings and questions",
        keep:
        "We keep booking details for [TO FILL: how long after the booking ends]. Emails are stored by [TO FILL: the " +
          "provider of the {email} mailbox].",
      },
      controller: {
        contact: "For anything about personal data, write to {email} or call {phone}.",
        heading: "Controller",
        text:
        "The controller of personal data is {name}, company ID (IČO) {ico}, registered office {office}, registered in " +
          "the Commercial Register kept by the Regional Court in Brno, section {section}, insert {insert}. It runs the " +
          "Kulturní dům restaurant, Kavárna Gól, the Koryčany swimming pool and the accommodation in Střílky and Lískovec.",
      },
      guests: {
        heading: "Accommodation guests",
        text:
        "As an accommodation provider we keep a register of guests under Act No. 565/1990 Coll. on local fees, and we " +
          "report foreign guests to the foreign police under Act No. 326/1999 Coll. on the residence of foreign " +
          "nationals. We record your name, address, identity document number and the length of your stay, and for " +
          "foreign guests also the date of birth, citizenship, travel document and visa numbers and the purpose of the " +
          "stay. This is our legal obligation (Article 6(1)(c) GDPR), and we keep the records for 6 years, as those acts " +
          "require.",
      },
      recipients: {
        heading: "Who receives the data",
        text:
        "We do not sell personal data or use it for advertising. It reaches only those who work for us or to whom we " +
          "must pass it: Netlify, which runs this website, the provider of our email mailbox [TO FILL], [TO FILL: an " +
          "accountant or accounting firm, if someone outside the company keeps the accounts] and authorities where the " +
          "law requires it, namely the foreign police, the municipality checking the stay fee and the tax office.",
      },
      rights: {
        complaint:
        "If you disagree with how we handle your data, you can complain to the Office for Personal Data Protection, " +
          "Pplk. Sochora 27, 170 00 Praha 7, [www.uoou.gov.cz](https://www.uoou.gov.cz).",
        heading: "Your rights",
        text:
        "You have the right to access your data, to have it corrected or erased, to restrict its processing and to data " +
          "portability, and the right to object to processing based on legitimate interest. Write to {email}; we reply " +
          "within one month.",
      },
      website: {
        collects: "The website has no forms, analytics or advertising and collects no data about you by itself.",
        heading: "This website",
        hosting:
        "The website runs on Netlify (Netlify, Inc., USA). Each time a page loads, Netlify processes your IP address and " +
          "technical details of your browser to deliver the page and protect it from attacks. The legal basis is our " +
          "legitimate interest in running the website securely (Article 6(1)(f) GDPR). [TO FILL: the basis on which " +
          "Netlify transfers data to the USA, under the agreement with Netlify]",
        outside:
        "Maps from Google Maps and the lunch menu from Meníčka load only after you click them. Only then do those " +
          "services receive your IP address and browser details, and Google may set cookies. They follow their own " +
          "policies: the [Google Privacy Policy](https://policies.google.com/privacy) and [Meníčka](https://www.menicka.cz).",
        storage:
        "The choices you make on the website, namely the language, the accessibility settings and your consent to load " +
          "the maps and the menu, are remembered in your browser. They are not sent anywhere, and clearing the site's " +
          "data in your browser removes them.",
      },
    },
    title: "Privacy",
});
