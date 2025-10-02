import React from 'react';

/**
 * SkipLink Component
 * Provides keyboard users a way to skip to main content
 * WCAG 2.1 AA Requirement - Bypass Blocks (2.4.1)
 *
 * This component is hidden by default and only appears when focused
 * via keyboard navigation (Tab key). It allows users to skip repetitive
 * navigation and jump directly to the main content.
 *
 * Usage:
 * Place this component at the very top of your layout, before the header.
 * Ensure the targetId matches the id of your main content area.
 */
interface SkipLinkProps {
  targetId?: string;
  label?: string;
}

export const SkipLink: React.FC<SkipLinkProps> = ({
  targetId = 'main-content',
  label = 'Zum Hauptinhalt springen',
}) => {
  return (
    <a href={`#${targetId}`} className="skip-link">
      {label}
    </a>
  );
};

export default SkipLink;
