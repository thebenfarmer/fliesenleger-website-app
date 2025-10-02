import React from 'react';
import { Skeleton } from './Skeleton';

/**
 * GallerySkeleton Component
 * Loading placeholder for gallery components during lazy loading
 * Used with Next.js dynamic imports for code-splitting
 *
 * Example usage:
 * ```tsx
 * const Gallery = dynamic(() => import('@/components/Gallery'), {
 *   loading: () => <GallerySkeleton />,
 *   ssr: false,
 * });
 * ```
 */
export const GallerySkeleton: React.FC<{ count?: number }> = ({ count = 6 }) => {
  const items = Array.from({ length: count });

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Gallery Header Skeleton */}
      <div className="mb-8 text-center">
        <Skeleton variant="heading" width="300px" className="mx-auto mb-4" />
        <Skeleton variant="text" width="500px" className="mx-auto" />
      </div>

      {/* Gallery Grid Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((_, index) => (
          <div key={index} className="space-y-3">
            {/* Image Skeleton */}
            <Skeleton variant="rect" height={300} />

            {/* Title Skeleton */}
            <Skeleton variant="text" width="80%" />

            {/* Description Skeleton */}
            <Skeleton variant="text" width="60%" />
          </div>
        ))}
      </div>
    </div>
  );
};

/**
 * MapSkeleton Component
 * Loading placeholder for map components during lazy loading
 */
export const MapSkeleton: React.FC = () => {
  return (
    <div className="w-full h-[400px] bg-gray-200 rounded-lg flex items-center justify-center">
      <div className="text-center">
        <div className="skeleton w-16 h-16 rounded-full mx-auto mb-4" />
        <p className="text-gray-500">Karte wird geladen...</p>
      </div>
    </div>
  );
};

/**
 * FormSkeleton Component
 * Loading placeholder for form components during lazy loading
 */
export const FormSkeleton: React.FC = () => {
  return (
    <div className="space-y-6 p-6 bg-white rounded-lg shadow-md">
      <Skeleton variant="heading" width="200px" className="mb-6" />

      {/* Form Fields */}
      <div className="space-y-4">
        <div>
          <Skeleton variant="text" width="100px" className="mb-2" />
          <Skeleton variant="rect" height={48} />
        </div>

        <div>
          <Skeleton variant="text" width="120px" className="mb-2" />
          <Skeleton variant="rect" height={48} />
        </div>

        <div>
          <Skeleton variant="text" width="100px" className="mb-2" />
          <Skeleton variant="rect" height={120} />
        </div>

        {/* Submit Button */}
        <Skeleton variant="rect" height={48} width="150px" />
      </div>
    </div>
  );
};

export default GallerySkeleton;
