import daisyui from 'daisyui';
import daisyuiThemes from 'daisyui/src/theming/themes';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        light: {
          ...daisyuiThemes['light'],
          primary: '#3b82f6',
          secondary: '#1e40af',
          accent: '#37cdbe',
          neutral: '#3d4451',
          'base-100': '#ffffff',
        },
        dark: {
          ...daisyuiThemes['dark'],
          primary: '#3b82f6',
          secondary: '#1e40af',
          accent: '#37cdbe',
          neutral: '#3d4451',
          'base-100': '#1f2937',
        },
      },
    ],
  },
} 