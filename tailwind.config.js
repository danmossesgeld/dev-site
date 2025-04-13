import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        primary: 'hsl(var(--primary) / <alpha-value>)',
        secondary: 'hsl(var(--secondary) / <alpha-value>)',
        accent: 'hsl(var(--accent) / <alpha-value>)',
        neutral: 'hsl(var(--neutral) / <alpha-value>)',
        'base-100': 'hsl(var(--base-100) / <alpha-value>)',
        'base-200': 'hsl(var(--base-200) / <alpha-value>)',
        'base-300': 'hsl(var(--base-300) / <alpha-value>)',
        'base-content': 'hsl(var(--base-content) / <alpha-value>)',
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        dark: {
          primary: '#d4af37',
          secondary: '#d4af37',
          accent: '#d4af37',
          neutral: '#ffffff',
          'base-100': '#000000',
          'base-200': '#0f0f0f',
          'base-300': '#1a1a1a',
          'base-content': '#ffffff',
        },
      },
    ],
    darkTheme: "dark",
    base: true,
    styled: true,
    utils: true,
  },
} 