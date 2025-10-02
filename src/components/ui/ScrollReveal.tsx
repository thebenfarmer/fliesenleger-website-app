'use client';

import React from 'react';
import { motion, Variants, useInView } from 'framer-motion';
import { fadeUp } from '@/lib/motion';

interface ScrollRevealProps {
  children: React.ReactNode;
  variant?: Variants;
  delay?: number;
  duration?: number;
  once?: boolean;
  amount?: number | 'some' | 'all';
  className?: string;
}

/**
 * ScrollReveal Component
 * Animates children when they enter the viewport
 *
 * @param children - Content to animate
 * @param variant - Animation variant (default: fadeUp)
 * @param delay - Delay before animation starts in seconds
 * @param duration - Animation duration in seconds
 * @param once - Whether to animate only once (default: true)
 * @param amount - How much of the element needs to be visible (0-1 or 'some'/'all')
 * @param className - Additional CSS classes
 */
export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  variant = fadeUp,
  delay = 0,
  duration,
  once = true,
  amount = 0.2,
  className,
}) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, {
    once,
    amount,
  });

  // Create custom variant with delay and duration if provided
  const customVariant = React.useMemo(() => {
    if (!delay && !duration) return variant;

    return {
      ...variant,
      visible: {
        ...variant.visible,
        transition: {
          ...(variant.visible as { transition?: object })?.transition,
          delay,
          duration: duration ?? (variant.visible as { transition?: { duration?: number } })?.transition?.duration,
        },
      },
    };
  }, [variant, delay, duration]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={customVariant}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
