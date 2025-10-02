/**
 * Dynamic Imports Configuration
 * Examples of code-splitting with Next.js dynamic()
 *
 * Use these patterns to lazy-load heavy components and improve initial page load time
 */

import dynamic from 'next/dynamic';
// import { GallerySkeleton, MapSkeleton, FormSkeleton } from '@/components/ui/GallerySkeleton';

/**
 * Gallery Component - Lazy Loaded (Example)
 * Only loads when needed, reducing initial bundle size
 * Includes loading skeleton for better UX
 *
 * Uncomment when Gallery component exists:
 */
/*
export const DynamicGallery = dynamic(
  () => import('@/components/sections/Gallery').then((mod) => mod.Gallery),
  {
    loading: () => <GallerySkeleton />,
    ssr: false, // Don't render on server (useful for client-only components)
  }
);
*/

/**
 * Contact Map Component - Lazy Loaded (Example)
 * Maps are heavy, so lazy loading improves performance
 *
 * Uncomment when ContactMap component exists:
 */
/*
export const DynamicContactMap = dynamic(
  () => import('@/components/sections/ContactMap').then((mod) => mod.ContactMap),
  {
    loading: () => <MapSkeleton />,
    ssr: false,
  }
);
*/

/**
 * Contact Form Component - Lazy Loaded (Example)
 * Complex forms with validation can be lazy loaded
 *
 * Uncomment when ContactForm component exists:
 */
/*
export const DynamicContactForm = dynamic(
  () => import('@/components/sections/ContactForm').then((mod) => mod.ContactForm),
  {
    loading: () => <FormSkeleton />,
    ssr: true, // Enable SSR for SEO and initial render
  }
);
*/

/**
 * Modal Component - Lazy Loaded
 * Modals are only needed when opened, perfect for lazy loading
 */
export const DynamicModal = dynamic(
  () => import('@/components/ui/Modal').then((mod) => ({ default: mod.default })),
  {
    ssr: false,
  }
);

/**
 * Before/After Slider - Lazy Loaded
 * Interactive components with animations can be lazy loaded
 */
export const DynamicBeforeAfterSlider = dynamic(
  () => import('@/components/ui/BeforeAfterSlider').then((mod) => mod.BeforeAfterSlider),
  {
    loading: () => (
      <div className="w-full h-[400px] bg-gray-200 animate-pulse rounded-lg" />
    ),
    ssr: false,
  }
);

/**
 * Usage Example:
 *
 * ```tsx
 * import { DynamicGallery } from '@/lib/dynamic-imports';
 *
 * export default function Page() {
 *   return (
 *     <div>
 *       <h1>Unsere Referenzen</h1>
 *       <DynamicGallery projects={projects} />
 *     </div>
 *   );
 * }
 * ```
 */
