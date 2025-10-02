import React from 'react';
import { cn } from '@/lib/utils';

interface ContainerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
  className?: string;
  children: React.ReactNode;
  as?: React.ElementType;
}

/**
 * Container component with responsive sizing and padding
 * Implements the Layout System spacing and container specifications
 */
export const Container = ({
  size = 'xl',
  className = '',
  children,
  as: Component = 'div',
}: ContainerProps) => {
  const sizeClasses = {
    sm: 'max-w-screen-sm',
    md: 'max-w-screen-md',
    lg: 'max-w-screen-lg',
    xl: 'max-w-screen-xl',
    '2xl': 'max-w-screen-2xl',
    full: 'max-w-full',
  };

  return (
    <Component
      className={cn(
        'mx-auto w-full px-4 md:px-6 lg:px-8',
        size !== 'full' && sizeClasses[size],
        className
      )}
    >
      {children}
    </Component>
  );
};

export default Container;
