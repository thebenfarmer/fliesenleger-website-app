import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', fullWidth = false, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          // Base styles
          'inline-flex items-center justify-center rounded-md font-medium transition-colors',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
          'disabled:pointer-events-none disabled:opacity-50',

          // Variants
          {
            'bg-primary text-primary-foreground hover:bg-primary-600 active:bg-primary-700':
              variant === 'primary',
            'bg-secondary text-secondary-foreground hover:bg-secondary-600 active:bg-secondary-700':
              variant === 'secondary',
            'border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground':
              variant === 'outline',
            'text-primary hover:bg-primary-50 active:bg-primary-100':
              variant === 'ghost',
          },

          // Sizes
          {
            'h-9 px-4 py-2 text-sm': size === 'sm',
            'h-11 px-6 py-2.5': size === 'md',
            'h-12 px-8 py-3 text-lg': size === 'lg',
          },

          // Full width
          fullWidth && 'w-full',

          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
