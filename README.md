# Fliesenleger München - Website

Eine moderne, performante Website für einen Fliesenleger-Meisterbetrieb in München, gebaut mit Next.js 15, TypeScript und Tailwind CSS.

## 🚀 Features

- ✅ **Next.js 15** mit App Router
- ✅ **TypeScript** für Type-Safety
- ✅ **Tailwind CSS 4** mit Custom Design System
- ✅ **Framer Motion** für flüssige Animationen
- ✅ **WCAG 2.1 AA** konform (Accessibility)
- ✅ **SEO-optimiert** mit Schema.org Structured Data
- ✅ **Performance-First** (Core Web Vitals optimiert)
- ✅ **Responsive Design** (Mobile-First)
- ✅ **Vercel Analytics** & Speed Insights integriert

## 📋 Technologie-Stack

- **Framework**: Next.js 15.5.4
- **Language**: TypeScript 5+
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion 12+
- **Forms**: React Hook Form + Zod
- **Icons**: Lucide React
- **Deployment**: Vercel

## 🎨 Design System

### Farben

- **Primary (Terrakotta)**: `#974C30`
- **Secondary (Stone Gray)**: `#78716C`
- **Accent (Amber)**: `#D97706`

### Typography

- **Body**: Inter (Google Fonts)
- **Display**: Crimson Pro (Google Fonts)
- **Modular Scale**: 1.250 (Major Third)

### Spacing

- **8px Grid System** für konsistentes Spacing
- **Fuge-Abstände** inspiriert von echten Fliesenfugen

## 📂 Projektstruktur

```
fliesenleger-website-app/
├── src/
│   ├── app/                      # Next.js App Router
│   │   ├── api/                  # API Routes
│   │   │   └── contact/          # Kontaktformular API
│   │   ├── globals.css           # Global Styles
│   │   ├── layout.tsx            # Root Layout
│   │   └── page.tsx              # Homepage
│   │
│   ├── components/
│   │   ├── accessibility/        # A11y Komponenten
│   │   │   └── SkipLink.tsx
│   │   ├── layout/               # Layout Komponenten
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── MobileNav.tsx
│   │   │   ├── Container.tsx
│   │   │   └── StickyContactBar.tsx
│   │   ├── sections/             # Page Sections
│   │   │   └── ...
│   │   ├── seo/                  # SEO Komponenten
│   │   │   └── StructuredData.tsx
│   │   └── ui/                   # UI Komponenten
│   │       ├── BeforeAfterSlider.tsx
│   │       ├── GallerySkeleton.tsx
│   │       ├── Modal.tsx
│   │       ├── ScrollReveal.tsx
│   │       └── Skeleton.tsx
│   │
│   ├── lib/                      # Utilities
│   │   ├── utils.ts              # Helper Functions
│   │   ├── motion.ts             # Animation Variants
│   │   └── dynamic-imports.tsx   # Code-Splitting
│   │
│   └── styles/
│       └── tokens.ts             # Design Tokens
│
├── .env.local.example            # Environment Variables Template
├── next.config.ts                # Next.js Configuration
├── tailwind.config.ts            # Tailwind Configuration
└── tsconfig.json                 # TypeScript Configuration
```

## 🚀 Getting Started

### Voraussetzungen

- Node.js 18+ installiert
- npm oder yarn Package Manager

### Installation

```bash
# Repository klonen
git clone <repository-url>
cd fliesenleger-website-app

# Dependencies installieren
npm install

# Environment Variables konfigurieren
cp .env.local.example .env.local
# Bearbeite .env.local mit deinen Werten

# Development Server starten
npm run dev
```

Die Website ist nun verfügbar unter [http://localhost:3000](http://localhost:3000)

### Environment Variables

Erstelle eine `.env.local` Datei mit folgenden Variablen:

```bash
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://fliesenleger-muenchen.de

# Google Services (optional)
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_api_key
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Email Service (optional - Resend)
RESEND_API_KEY=re_xxxxx

# Contact Information
NEXT_PUBLIC_BUSINESS_EMAIL=info@fliesenleger-muenchen.de
NEXT_PUBLIC_BUSINESS_PHONE=+49 89 12345678
```

## 🏗️ Build & Deployment

### Production Build

```bash
npm run build
npm run start
```

### Vercel Deployment

```bash
# Vercel CLI installieren
npm i -g vercel

# Deployment
vercel
```

Oder verbinde dein GitHub Repository mit [Vercel](https://vercel.com) für automatische Deployments.

## 📊 Performance

### Core Web Vitals Ziele

- **LCP** (Largest Contentful Paint): < 1.8s
- **FID** (First Input Delay): < 80ms
- **CLS** (Cumulative Layout Shift): < 0.08
- **FCP** (First Contentful Paint): < 1.2s
- **TTFB** (Time to First Byte): < 600ms

### Optimierungen

- ✅ Next.js Image Optimization (AVIF/WebP)
- ✅ Font Optimization (display: swap)
- ✅ Code-Splitting mit dynamic imports
- ✅ Vercel Analytics & Speed Insights
- ✅ Lazy Loading für Heavy Components

## ♿ Accessibility

WCAG 2.1 AA konform:

- ✅ Keyboard Navigation (Focus-Visible Styles)
- ✅ Skip Links
- ✅ ARIA Labels für alle interaktiven Elemente
- ✅ Touch Targets min. 48x48px
- ✅ Reduced Motion Support
- ✅ Screen Reader Support (sr-only Klassen)
- ✅ High Contrast Mode Support
- ✅ Semantisches HTML

## 🔍 SEO

### Features

- ✅ Schema.org Structured Data (LocalBusiness, Website)
- ✅ OpenGraph Meta Tags
- ✅ Sitemap & robots.txt
- ✅ Semantic HTML
- ✅ Mobile-First Responsive Design
- ✅ Fast Page Load Times

### Keywords

**Primary Keywords:**
- Fliesenleger München
- Badezimmer Fliesen München
- Naturstein verlegen München
- Fliesenleger Meisterbetrieb München

## 📱 Responsive Design

### Breakpoints

- **sm**: 640px (Large Phones)
- **md**: 768px (Tablets)
- **lg**: 1024px (Small Desktops)
- **xl**: 1280px (Large Desktops)
- **2xl**: 1536px (Extra Large)

### Mobile-First

- 65-70% mobiler Traffic erwartet
- Touch-optimierte Buttons (min. 48x48px)
- Mobile Navigation mit Slide-out Menu
- Sticky Contact Bar auf Mobile

## 🧪 Testing

```bash
# TypeScript Type Check
npm run build

# ESLint
npm run lint
```

## 📝 Deployment Checklist

### Pre-Deployment

- [ ] Alle Tests laufen durch
- [ ] Environment Variables gesetzt
- [ ] Meta-Tags vollständig
- [ ] OG-Images vorhanden (1200x630px)
- [ ] Structured Data validiert
- [ ] Lighthouse Score > 95

### Post-Deployment

- [ ] SSL-Zertifikat aktiv
- [ ] Domain konfiguriert
- [ ] Analytics trackt
- [ ] Formulare funktionieren
- [ ] Alle Links funktionieren
- [ ] Telefon-Links auf Mobile testen

## 🔐 Security

- ✅ Environment Variables nie committen (`.env.local`)
- ✅ API Routes mit Zod Validation
- ✅ CSRF Protection (Next.js built-in)
- ✅ XSS Protection durch React
- ✅ Optional: Rate Limiting für API Routes

## 📚 Dokumentation

Die komplette Dokumentation befindet sich im `/docs` Ordner:

1. Executive Summary
2. Visual Identity
3. Layout System
4. Components
5. Interactions
6. Responsive Design
7. Technical Implementation
8. Performance
9. Accessibility
10. Practical Guide
11. Best Practices
12. Project Structure

## 🤝 Contributing

1. Fork das Repository
2. Erstelle einen Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit deine Änderungen (`git commit -m 'Add some AmazingFeature'`)
4. Push zum Branch (`git push origin feature/AmazingFeature`)
5. Öffne einen Pull Request

## 📄 License

Dieses Projekt ist privat und nicht für die öffentliche Nutzung bestimmt.

## 👨‍💻 Entwickelt mit

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Vercel](https://vercel.com/)

---

**Version**: 1.0
**Erstellt**: Oktober 2025
**Framework**: Next.js 15.5.4
