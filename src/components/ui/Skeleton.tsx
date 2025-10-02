import React from 'react';
import { cn } from '@/lib/utils';

interface SkeletonProps {
  className?: string;
  variant?: 'text' | 'heading' | 'avatar' | 'rect' | 'circle';
  width?: string | number;
  height?: string | number;
  count?: number;
}

/**
 * Skeleton Component
 * Loading placeholder with animated shimmer effect
 *
 * @param className - Additional CSS classes
 * @param variant - Skeleton variant (text, heading, avatar, rect, circle)
 * @param width - Custom width
 * @param height - Custom height
 * @param count - Number of skeleton items to render (for lists)
 */
export const Skeleton: React.FC<SkeletonProps> = ({
  className,
  variant = 'rect',
  width,
  height,
  count = 1,
}) => {
  const variantClasses = {
    text: 'skeleton-text',
    heading: 'skeleton-heading',
    avatar: 'skeleton-avatar',
    rect: '',
    circle: 'rounded-full',
  };

  const style: React.CSSProperties = {};
  if (width) style.width = typeof width === 'number' ? `${width}px` : width;
  if (height) style.height = typeof height === 'number' ? `${height}px` : height;

  const items = Array.from({ length: count });

  return (
    <>
      {items.map((_, index) => (
        <div
          key={index}
          className={cn('skeleton', variantClasses[variant], className)}
          style={style}
          aria-hidden="true"
        />
      ))}
    </>
  );
};

/**
 * Skeleton Card Component
 * Pre-built skeleton for card layouts
 */
export const SkeletonCard: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={cn('p-6 space-y-4', className)}>
      <Skeleton variant="rect" height={200} />
      <Skeleton variant="heading" />
      <Skeleton variant="text" count={3} />
      <div className="flex gap-2 pt-2">
        <Skeleton variant="rect" width={80} height={36} />
        <Skeleton variant="rect" width={80} height={36} />
      </div>
    </div>
  );
};

/**
 * Skeleton List Component
 * Pre-built skeleton for list layouts
 */
export const SkeletonList: React.FC<{ count?: number; className?: string }> = ({
  count = 3,
  className,
}) => {
  const items = Array.from({ length: count });

  return (
    <div className={cn('space-y-4', className)}>
      {items.map((_, index) => (
        <div key={index} className="flex gap-4 items-center">
          <Skeleton variant="avatar" />
          <div className="flex-1 space-y-2">
            <Skeleton variant="text" width="60%" />
            <Skeleton variant="text" width="40%" />
          </div>
        </div>
      ))}
    </div>
  );
};

/**
 * Skeleton Profile Component
 * Pre-built skeleton for profile layouts
 */
export const SkeletonProfile: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={cn('space-y-6', className)}>
      <div className="flex items-center gap-4">
        <Skeleton variant="circle" width={80} height={80} />
        <div className="flex-1 space-y-2">
          <Skeleton variant="heading" width="40%" />
          <Skeleton variant="text" width="60%" />
        </div>
      </div>
      <div className="space-y-2">
        <Skeleton variant="text" count={4} />
      </div>
    </div>
  );
};

export default Skeleton;
