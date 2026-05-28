# Implementation brief for future website

## Goal

Build a polished one-page website for Community Cannabis ชุมชนกัญชา that helps adult visitors quickly understand:

- what the shop is
- why people like it
- where it is
- how to call/message/get directions
- what kind of experience/products to expect

The site should feel local, warm, tropical, relaxed, and practical. It should not feel like a generic dark cannabis template.

## Recommended page sections

1. Hero with real storefront/interior image, rating proof, and CTAs.
2. Short about block: friendly cannabis shop near Thepprasit Night Market.
3. Value points: friendly staff, fair prices, community vibe, easy location.
4. Product/experience block: flower, edibles, accessories, staff guidance.
5. Reviews block: rating summary and paraphrased themes, with source links.
6. Gallery: owner-approved photos only.
7. Location: Google Maps embed/link, address, Plus Code, nearby landmark.
8. Contact/hours: phone, Facebook, LINE, Instagram, X, email, current hours after confirmation.
9. Footer compliance: 20+ only, local laws, no medical claims.

## Core CTAs

- Get Directions
- Call
- Message on Facebook
- Check Today's Hours

## Required confirmations before launch

- Secondary phone handling: Google Maps and Facebook confirm +66 80 995 0256; ask whether the Cannawayz number should be removed.
- Current weekly opening hours.
- Whether LINE ID 379wtyrw is the preferred chat channel.
- Owner-approved final spelling of the address, although Facebook now confirms the Thepprasit Night Market wording.
- Owner-approved product categories and any menu/pricing.
- Permission to publish each photo.
- Any required Thai cannabis license/compliance text.

## Content restrictions

Avoid:

- medical claims
- effect promises
- aggressive sales language
- public product prices unless approved and legally safe
- customer review quotes without permission
- photos with identifiable people unless approved

Use:

- general product categories
- location and service information
- verified rating summary
- owner-approved media
- age/compliance notice

## Draft JSON-LD

Use only after confirming the contact/hours fields. Keep review/rating values in sync with the live source or remove them.

```json
{
  "@context": "https://schema.org",
  "@type": "Store",
  "name": "Community Cannabis ชุมชนกัญชา",
  "description": "Friendly cannabis shop near Thepprasit Night Market in Pattaya.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "407/433 moo.12 Thepprasit Soi 3 (Thepprasit Night Market)",
    "addressLocality": "Pattaya",
    "addressRegion": "Chon Buri",
    "postalCode": "20150",
    "addressCountry": "TH"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 12.9076217,
    "longitude": 100.8914428
  },
  "telephone": "+66809950256",
  "sameAs": [
    "https://www.google.com/maps/place/Community+Cannabis+%E0%B8%8A%E0%B8%B8%E0%B8%A1%E0%B8%8A%E0%B8%99%E0%B8%81%E0%B8%B1%E0%B8%8D%E0%B8%8A%E0%B8%B2/data=!4m7!3m6!1s0x310295c01f29d55d:0xfdf3585a5ce472ab!8m2!3d12.9076217!4d100.8914428!16s%2Fg%2F11wfkfh10c!19sChIJXdUpH8CVAjERq3LkXFpY8_0?authuser=0&hl=ru&rclk=1",
    "https://www.facebook.com/communityjomtien",
    "https://www.instagram.com/community_cannabis420",
    "https://x.com/CommunityJomJom"
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "41",
    "bestRating": "5"
  }
}
```

## Design notes

Hero image:
Use the actual storefront/interior. Strongest reference is the Google owner-photo screenshot with tropical plants, neon green leaf, warm light, and colorful signs.

Palette:
Natural greens, warm amber light, off-white, charcoal, and small colorful sign accents. Avoid a one-note neon green or dark-purple cannabis look.

Typography:
Readable, modern, practical. The brand name can carry the first viewport; body text should stay concise.

Mobile:
Make CTAs sticky or highly visible. Tourists will likely open the site from Maps or social apps on mobile.
