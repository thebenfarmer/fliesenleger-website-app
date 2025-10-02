'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Menu, Phone } from 'lucide-react';
import Link from 'next/link';

interface NavItem {
  label: string;
  href: string;
}

interface MobileNavProps {
  items: NavItem[];
  phoneNumber?: string;
  className?: string;
}

/**
 * MobileNav Component
 * Mobile navigation with hamburger menu and slide-out overlay
 *
 * @param items - Navigation items to display
 * @param phoneNumber - Phone number for call button
 * @param className - Additional CSS classes
 */
export const MobileNav: React.FC<MobileNavProps> = ({
  items,
  phoneNumber = '+49 89 12345678',
  className,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Hamburger Toggle Button */}
      <button
        className={`mobile-menu-toggle ${className || ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? 'Menü schließen' : 'Menü öffnen'}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        aria-haspopup="true"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="mobile-nav-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Slide-out Menu */}
            <motion.div
              id="mobile-menu"
              className="mobile-nav-content"
              role="dialog"
              aria-label="Mobile Navigation"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{
                type: 'spring',
                stiffness: 300,
                damping: 30,
              }}
            >
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="ml-auto p-2 rounded-md hover:bg-gray-100 transition-colors"
                aria-label="Menü schließen"
              >
                <X size={24} />
              </button>

              {/* Navigation Links */}
              <nav className="mobile-nav-links" aria-label="Hauptnavigation">
                {items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={handleLinkClick}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              {/* Call-to-Action */}
              <div className="mobile-nav-cta">
                <a
                  href={`tel:${phoneNumber.replace(/\s/g, '')}`}
                  className="btn btn-phone btn-primary w-full flex items-center justify-center gap-2"
                  onClick={handleLinkClick}
                >
                  <Phone size={20} />
                  Jetzt anrufen
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileNav;
