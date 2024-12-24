import type { Config } from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          foreground: 'hsla(var(--color-text-foreground-dark))',
          button: 'hsla(var(--color-button-background-primary))',
          background: 'hsla(var(--color-background))',
        },
        secondary: {
          foreground: 'hsla(var(--color-text-foreground-light))',
          button: 'hsla(var(--color-button-background-secondary))',
        },
        accent: {
          foreground: 'hsla(var(--color-text-accent))',
          button: 'linear-gradient(var(--gradient-primary))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(var(--gradient-primary))',
      },
      screens: {
        sm: '360px',
      },
      boxShadow: {
        button: '2px 2px 6px 0px hsla(var(--shadow-primary))',
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require('tailwindcss-animate')],
} satisfies Config;