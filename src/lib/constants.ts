/**
 * Application Constants
 *
 * Zentrale Konstanten für die gesamte Anwendung.
 * Umfasst Business-Informationen, Kontaktdaten, SEO-Keywords und mehr.
 */

// ============================================================================
// BUSINESS INFORMATION (NAP - Name, Address, Phone)
// ============================================================================

export const BUSINESS_INFO = {
  name: 'Fliesenleger Meisterbetrieb München',
  legalName: 'Fliesenleger Meisterbetrieb München GmbH',
  tagline: 'Dreifach-Garantie-System: Festpreis. Zufriedenheit. 5 Jahre Vollgarantie.',

  // Contact
  phone: process.env.NEXT_PUBLIC_BUSINESS_PHONE || '+49 89 12345678',
  email: process.env.NEXT_PUBLIC_BUSINESS_EMAIL || 'info@fliesenleger-muenchen.de',
  website: process.env.NEXT_PUBLIC_SITE_URL || 'https://fliesenleger-muenchen.de',

  // Address
  address: {
    street: 'Musterstraße 123',
    city: 'München',
    postalCode: '80331',
    country: 'Deutschland',
    countryCode: 'DE',
  },

  // Business Hours
  hours: {
    monday: '08:00 - 18:00',
    tuesday: '08:00 - 18:00',
    wednesday: '08:00 - 18:00',
    thursday: '08:00 - 18:00',
    friday: '08:00 - 18:00',
    saturday: 'Nach Vereinbarung',
    sunday: 'Geschlossen',
  },

  // Social Media
  social: {
    instagram: 'https://instagram.com/fliesenleger-muenchen',
    facebook: 'https://facebook.com/fliesenleger-muenchen',
    linkedin: 'https://linkedin.com/company/fliesenleger-muenchen',
  },

  // Reviews & Ratings
  rating: {
    value: 4.9,
    count: 182,
    maxRating: 5,
    source: 'Google',
    asOf: '2026-02',
  },
} as const;

// ============================================================================
// SEO KEYWORDS
// ============================================================================

export const PRIMARY_KEYWORDS = [
  'Fliesenleger München',
  'Badezimmer Fliesen München',
  'Naturstein verlegen München',
  'Fliesenleger Meisterbetrieb München',
  'Terrassenfliesen München',
] as const;

export const SECONDARY_KEYWORDS = [
  'Fliesen verlegen Kosten',
  'Mosaik Fliesen München',
  'Großformat Fliesen',
  'Fliesenleger Preise München',
  'Bodenfliesen verlegen München',
  'Wandfliesen München',
] as const;

// ============================================================================
// NAVIGATION
// ============================================================================

export const MAIN_NAV_ITEMS = [
  { href: '/leistungen', label: 'Leistungen' },
  { href: '/materialien', label: 'Materialien' },
  { href: '/referenzen', label: 'Referenzen' },
  { href: '/ueber-uns', label: 'Über uns' },
  { href: '/kontakt', label: 'Kontakt' },
] as const;

export const FOOTER_NAV = {
  services: [
    { href: '/leistungen/bodenfliesen', label: 'Bodenfliesen' },
    { href: '/leistungen/wandfliesen', label: 'Wandfliesen' },
    { href: '/leistungen/naturstein', label: 'Naturstein' },
    { href: '/leistungen/badezimmer', label: 'Badezimmer' },
    { href: '/leistungen/aussenbereich', label: 'Außenbereich' },
  ],
  company: [
    { href: '/ueber-uns', label: 'Über uns' },
    { href: '/referenzen', label: 'Referenzen' },
    { href: '/kontakt', label: 'Kontakt' },
  ],
  legal: [
    { href: '/impressum', label: 'Impressum' },
    { href: '/datenschutz', label: 'Datenschutz' },
  ],
} as const;

// ============================================================================
// SERVICES
// ============================================================================

export const SERVICE_CATEGORIES = [
  'bodenfliesen',
  'wandfliesen',
  'naturstein',
  'mosaik',
  'badezimmer',
  'aussenbereich',
] as const;

export type ServiceCategory = typeof SERVICE_CATEGORIES[number];

// ============================================================================
// MATERIALS
// ============================================================================

export const MATERIAL_TYPES = [
  'keramik',
  'feinsteinzeug',
  'naturstein-marmor',
  'naturstein-granit',
  'naturstein-schiefer',
  'mosaik-glas',
  'mosaik-stein',
  'grossformat',
] as const;

export type MaterialType = typeof MATERIAL_TYPES[number];

// ============================================================================
// RESPONSIVE BREAKPOINTS
// ============================================================================

export const BREAKPOINTS = {
  sm: 640,  // Large Phones
  md: 768,  // Tablets
  lg: 1024, // Small Desktops
  xl: 1280, // Large Desktops
  '2xl': 1536, // Extra Large
} as const;

// ============================================================================
// ANIMATION DURATIONS
// ============================================================================

export const ANIMATION = {
  fast: 200,
  normal: 300,
  slow: 500,
  pageTransition: 400,
} as const;

// ============================================================================
// FORM VALIDATION
// ============================================================================

export const FORM_LIMITS = {
  name: {
    min: 2,
    max: 100,
  },
  phone: {
    min: 7,
    max: 20,
  },
  message: {
    min: 10,
    max: 1000,
  },
} as const;

// ============================================================================
// TOUCH TARGETS (WCAG 2.1 AA)
// ============================================================================

export const TOUCH_TARGETS = {
  minimum: 48, // px - WCAG 2.1 AA minimum
  phone: 60,   // px - larger for phone buttons on mobile
} as const;

// ============================================================================
// PERFORMANCE TARGETS
// ============================================================================

export const PERFORMANCE_TARGETS = {
  LCP: 1800,  // ms - Largest Contentful Paint
  FID: 80,    // ms - First Input Delay
  CLS: 0.08,  // Cumulative Layout Shift
  FCP: 1200,  // ms - First Contentful Paint
  TTFB: 600,  // ms - Time to First Byte
} as const;

// ============================================================================
// IMAGE SIZES
// ============================================================================

export const IMAGE_SIZES = {
  hero: {
    width: 1920,
    height: 1080,
  },
  project: {
    width: 1200,
    height: 800,
  },
  material: {
    width: 800,
    height: 600,
  },
  team: {
    width: 400,
    height: 400,
  },
  og: {
    width: 1200,
    height: 630,
  },
} as const;

// ============================================================================
// API RATE LIMITS
// ============================================================================

export const RATE_LIMITS = {
  contact: {
    requests: 3,
    window: '1 h',
  },
  quote: {
    requests: 5,
    window: '1 h',
  },
} as const;

// ============================================================================
// EXTERNAL SERVICES
// ============================================================================

export const EXTERNAL_SERVICES = {
  googleMaps: {
    apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '',
    center: {
      lat: 48.1351,
      lng: 11.5820,
    },
  },
  googleAnalytics: {
    id: process.env.NEXT_PUBLIC_GA_ID || '',
  },
} as const;

// ============================================================================
// ERROR MESSAGES
// ============================================================================

export const ERROR_MESSAGES = {
  generic: 'Da hat etwas nicht geklappt. Bitte versuchen Sie es erneut oder rufen Sie uns direkt an.',
  network: 'Keine Internetverbindung. Bitte prüfen Sie Ihre Verbindung und versuchen Sie es erneut.',
  validation: 'Bitte prüfen Sie Ihre Eingaben – wir benötigen mindestens Ihren Namen und eine Kontaktmöglichkeit.',
  rateLimit: 'Sie haben bereits eine Anfrage gesendet. Wir melden uns zeitnah bei Ihnen.',
  emailSend: 'Die Nachricht konnte leider nicht gesendet werden. Bitte rufen Sie uns an: 089 / 123 456.',
} as const;

// ============================================================================
// SUCCESS MESSAGES
// ============================================================================

export const SUCCESS_MESSAGES = {
  contactForm: 'Ihre Anfrage ist bei uns eingegangen. Wir melden uns innerhalb von 24 Stunden bei Ihnen – versprochen.',
  quoteForm: 'Ihre Anfrage wurde gesendet. In 48 Stunden erhalten Sie Ihr verbindliches Festpreis-Angebot.',
  newsletter: 'Sie wurden erfolgreich für unseren Newsletter angemeldet.',
} as const;
