/**
 * Single source of truth for factual business content.
 * Only verified details from the client are stored here — anything unknown is
 * marked as an enquiry placeholder rather than invented.
 */

export const HOSTEL = {
  name: "Sri Vinayaka Boys Hostel",
  shortName: "Sri Vinayaka",
  tagline: "Comfortable • Connected • Homely",
  address:
    "South Kamala Nagar, ECIL, Moula Ali, Hyderabad, Secunderabad, Telangana 500062",
  phoneDisplay: "096182 29417",
  phoneHref: "tel:+919618229417",
  whatsappHref: "https://wa.me/919618229417",
  mapsHref:
    "https://www.google.com/maps/search/?api=1&query=Sri+Vinayaka+Boys+Hostel+South+Kamala+Nagar+ECIL+Moula+Ali+Hyderabad+500062",
  mapsEmbed:
    "https://www.google.com/maps?q=South+Kamala+Nagar,+ECIL,+Moula+Ali,+Hyderabad,+Telangana+500062&output=embed",
  reviewsHref:
    "https://www.google.com/search?q=Sri+Vinayaka+Boys+Hostel+ECIL+Moula+Ali+reviews",
  rating: 3.0,
  reviewCount: 2,
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Facilities", href: "#facilities" },
  { label: "Rooms", href: "#rooms" },
  { label: "Food", href: "#food" },
  { label: "Gallery", href: "#gallery" },
  { label: "Location", href: "#location" },
  { label: "Contact", href: "#contact" },
] as const;
