/**
 * Google Analytics 4 Event Tracking
 *
 * Diese Datei enthält alle GA4 Event-Tracking-Funktionen für die Website.
 * Stellt sicher, dass wichtige Conversion- und Engagement-Events getrackt werden.
 */

// Declare gtag globally (wird von Google Analytics Script injiziert)
type GtagCommand = 'event' | 'config' | 'set';
type GtagParams = Record<string, string | number | boolean>;

declare global {
  interface Window {
    gtag?: (command: GtagCommand, targetId: string, params?: GtagParams) => void;
  }
}

/**
 * Trackt Telefon-Button-Klicks
 * @param location - Wo der Button geklickt wurde (z.B. 'header', 'footer', 'sticky-bar')
 */
export const trackPhoneClick = (location: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'phone_click', {
      event_category: 'conversion',
      event_label: location,
    });
  }
};

/**
 * Trackt Formular-Absendungen
 * @param formType - Art des Formulars (z.B. 'contact', 'quote', 'callback')
 */
export const trackFormSubmit = (formType: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'form_submit', {
      event_category: 'conversion',
      event_label: formType,
    });
  }
};

/**
 * Trackt Material-Ansichten
 * @param material - Name des Materials (z.B. 'naturstein-marmor', 'keramik-grossformat')
 */
export const trackMaterialView = (material: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'material_view', {
      event_category: 'engagement',
      event_label: material,
    });
  }
};

/**
 * Trackt Service/Leistungs-Klicks
 * @param service - Name der Leistung (z.B. 'bodenfliesen', 'badezimmer', 'naturstein')
 */
export const trackServiceClick = (service: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'service_click', {
      event_category: 'engagement',
      event_label: service,
    });
  }
};

/**
 * Trackt Projekt-Ansichten (Before/After Slider)
 * @param projectId - ID des Projekts
 */
export const trackProjectView = (projectId: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'project_view', {
      event_category: 'engagement',
      event_label: projectId,
    });
  }
};

/**
 * Trackt E-Mail-Button-Klicks
 * @param location - Wo der Button geklickt wurde
 */
export const trackEmailClick = (location: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'email_click', {
      event_category: 'conversion',
      event_label: location,
    });
  }
};

/**
 * Trackt Social Media Klicks
 * @param platform - Name der Plattform (z.B. 'instagram', 'facebook')
 */
export const trackSocialClick = (platform: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'social_click', {
      event_category: 'engagement',
      event_label: platform,
    });
  }
};

/**
 * Trackt Scroll-Tiefe auf der Homepage
 * @param percentage - Prozent der Seite, die gescrollt wurde (25, 50, 75, 100)
 */
export const trackScrollDepth = (percentage: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'scroll_depth', {
      event_category: 'engagement',
      event_label: `${percentage}%`,
      value: percentage,
    });
  }
};

/**
 * Trackt externe Link-Klicks
 * @param url - Die URL des externen Links
 */
export const trackExternalLink = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'click', {
      event_category: 'outbound',
      event_label: url,
      transport_type: 'beacon',
    });
  }
};

/**
 * Trackt Download-Klicks (z.B. Kataloge, PDFs)
 * @param fileName - Name der heruntergeladenen Datei
 */
export const trackDownload = (fileName: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'file_download', {
      event_category: 'engagement',
      event_label: fileName,
    });
  }
};

/**
 * Trackt Impressum/Datenschutz-Klicks
 * @param page - Art der Seite ('impressum', 'datenschutz')
 */
export const trackLegalPageView = (page: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'legal_page_view', {
      event_category: 'navigation',
      event_label: page,
    });
  }
};
