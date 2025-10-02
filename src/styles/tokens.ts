/**
 * Design Tokens für Fliesenleger Meisterbetrieb
 * Basierend auf Visual Identity Dokument
 */

export const tokens = {
  colors: {
    primary: {
      50: '#FDF8F6',
      100: '#F2E8E5',
      200: '#E8CFCA',
      300: '#DEAF99',
      400: '#D28F68',
      500: '#C27444',
      600: '#B55D39',
      700: '#974C30', // DEFAULT
      800: '#7C3F2B', // hover
      900: '#653527',
    },
    secondary: {
      50: '#F8F8F7',
      100: '#F0EFEE',
      200: '#E2E1DF',
      300: '#D3D1CE',
      400: '#B5B2AD',
      500: '#97948C',
      600: '#78716C', // DEFAULT
      700: '#5A5550', // hover
      800: '#3C3935',
      900: '#1E1D1A',
    },
    accent: {
      50: '#FFFBEB',
      100: '#FEF3C7',
      200: '#FDE68A',
      300: '#FCD34D',
      400: '#FBBF24',
      500: '#F59E0B',
      600: '#D97706', // DEFAULT
      700: '#B45309', // hover
      800: '#92400E',
      900: '#78350F',
    },
    material: {
      ceramic: '#E7E5E4',
      ceramicDark: '#D6D3D1',
      stone: '#78716C',
      stoneDark: '#57534E',
      marble: '#F5F5F4',
      marbleVeins: '#A8A29E',
      mosaic: '#F59E0B',
      mosaicAccent: '#D97706',
      large: '#44403C',
      largeLight: '#78716C',
    },
    background: {
      primary: '#FAFAF9',
      secondary: '#F5F5F4',
      tertiary: '#E7E5E4',
      dark: '#1C1917',
    },
    surface: {
      0: '#FFFFFF',
      1: '#FAFAF9',
      2: '#F5F5F4',
      3: '#E7E5E4',
    },
    text: {
      primary: '#1C1917',
      secondary: '#57534E',
      tertiary: '#78716C',
      muted: '#A8A29E',
      inverse: '#FAFAF9',
    },
    success: {
      light: '#D1FAE5',
      DEFAULT: '#10B981',
      dark: '#059669',
    },
    warning: {
      light: '#FEF3C7',
      DEFAULT: '#F59E0B',
      dark: '#D97706',
    },
    error: {
      light: '#FEE2E2',
      DEFAULT: '#EF4444',
      dark: '#DC2626',
    },
    info: {
      light: '#DBEAFE',
      DEFAULT: '#3B82F6',
      dark: '#2563EB',
    },
  },

  typography: {
    fontFamily: {
      body: 'var(--font-inter)',
      display: 'var(--font-crimson)',
      mono: 'SF Mono, Monaco, Courier New, monospace',
    },
    fontSize: {
      xs: '0.64rem',    // 10.24px
      sm: '0.8rem',     // 12.8px
      base: '1rem',     // 16px
      md: '1.125rem',   // 18px
      lg: '1.25rem',    // 20px
      xl: '1.563rem',   // 25px
      '2xl': '1.953rem', // 31.25px
      '3xl': '2.441rem', // 39.06px
      '4xl': '3.052rem', // 48.83px
      '5xl': '3.815rem', // 61.04px
      '6xl': '4.768rem', // 76.29px
    },
    lineHeight: {
      none: 1,
      tight: 1.2,
      snug: 1.375,
      normal: 1.5,
      relaxed: 1.625,
      loose: 2,
    },
    letterSpacing: {
      tighter: '-0.05em',
      tight: '-0.025em',
      normal: '0',
      wide: '0.025em',
      wider: '0.05em',
      widest: '0.1em',
    },
    fontWeight: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
  },

  spacing: {
    xs: '0.25rem',    // 4px
    sm: '0.5rem',     // 8px
    md: '1rem',       // 16px
    lg: '1.5rem',     // 24px
    xl: '2rem',       // 32px
    '2xl': '3rem',    // 48px
    '3xl': '4rem',    // 64px
    '4xl': '6rem',    // 96px
    '5xl': '8rem',    // 128px
    '6xl': '12rem',   // 192px
  },

  shadows: {
    xs: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    sm: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)',
    base: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
    md: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
    lg: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
    xl: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.05)',
  },

  borderRadius: {
    none: '0',
    xs: '0.125rem',   // 2px
    sm: '0.25rem',    // 4px
    base: '0.5rem',   // 8px
    md: '0.75rem',    // 12px
    lg: '1rem',       // 16px
    xl: '1.5rem',     // 24px
    '2xl': '2rem',    // 32px
    full: '9999px',
  },

  iconSizes: {
    xs: '16px',
    sm: '20px',
    base: '24px',
    lg: '32px',
    xl: '48px',
    '2xl': '64px',
  },

  animation: {
    easing: {
      in: 'cubic-bezier(0.4, 0, 1, 1)',
      out: 'cubic-bezier(0, 0, 0.2, 1)',
      inOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    },
    duration: {
      fast: '150ms',
      base: '300ms',
      slow: '500ms',
    },
  },

  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1200px',
    '2xl': '1400px',
  },
} as const;

export type Tokens = typeof tokens;

// Helper functions for accessing tokens
export const getColor = (path: string): string => {
  const keys = path.split('.');
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let value: any = tokens.colors;
  for (const key of keys) {
    value = value[key];
  }
  return value as string;
};

export const getFontSize = (size: keyof typeof tokens.typography.fontSize) => {
  return tokens.typography.fontSize[size];
};

export const getSpacing = (size: keyof typeof tokens.spacing) => {
  return tokens.spacing[size];
};

export const getShadow = (size: keyof typeof tokens.shadows) => {
  return tokens.shadows[size];
};

export const getRadius = (size: keyof typeof tokens.borderRadius) => {
  return tokens.borderRadius[size];
};
