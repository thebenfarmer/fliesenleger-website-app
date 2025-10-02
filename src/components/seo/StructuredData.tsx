import React from 'react';

/**
 * LocalBusinessSchema Component
 * Generates Schema.org structured data for local business SEO
 *
 * This improves visibility in Google Search and Google Maps
 */
export const LocalBusinessSchema = () => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://fliesenleger-muenchen.de',
    name: 'Fliesenleger Meisterbetrieb München',
    description: 'Ihr Meisterbetrieb für hochwertige Fliesenverlegung in München. Badezimmer, Naturstein, Mosaik. Kostenlose Beratung ✓ 5 Jahre Garantie ✓',
    image: 'https://fliesenleger-muenchen.de/logo.jpg',
    logo: 'https://fliesenleger-muenchen.de/logo.jpg',
    url: 'https://fliesenleger-muenchen.de',
    telephone: '+49-89-12345678',
    email: 'info@fliesenleger-muenchen.de',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Musterstraße 123',
      addressLocality: 'München',
      addressRegion: 'Bayern',
      postalCode: '80331',
      addressCountry: 'DE',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 48.1351,
      longitude: 11.5820,
    },
    priceRange: '€€',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '07:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '14:00',
      },
    ],
    sameAs: [
      // Add social media profiles here
      // 'https://www.facebook.com/fliesenleger-muenchen',
      // 'https://www.instagram.com/fliesenleger-muenchen',
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '127',
      bestRating: '5',
      worstRating: '1',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Fliesenleger-Leistungen',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Badezimmer Fliesen',
            description: 'Professionelle Fliesenverlegung für Badezimmer',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Naturstein verlegen',
            description: 'Verlegung von Natursteinfliesen',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Mosaik',
            description: 'Kunstvolle Mosaikarbeiten',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Großformatige Fliesen',
            description: 'Verlegung von Großformatfliesen',
          },
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

/**
 * WebsiteSchema Component
 * Generates Schema.org structured data for website SEO
 */
export const WebsiteSchema = () => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Fliesenleger München',
    url: 'https://fliesenleger-muenchen.de',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://fliesenleger-muenchen.de/search?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

/**
 * BreadcrumbSchema Component
 * Generates Schema.org structured data for breadcrumb navigation
 */
interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbSchemaProps {
  items: BreadcrumbItem[];
}

export const BreadcrumbSchema: React.FC<BreadcrumbSchemaProps> = ({ items }) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

/**
 * Default Export - All Structured Data Components
 */
const StructuredData = {
  LocalBusinessSchema,
  WebsiteSchema,
  BreadcrumbSchema,
};

export default StructuredData;
