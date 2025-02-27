export const LocalBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Your Business Name",
  "image": "https://homo-ve.com/image.jpg",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Jeddah",
    "addressRegion": "Makkah Province",
    "addressCountry": "SA"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "21.5433",
    "longitude": "39.1728"
  }
}
