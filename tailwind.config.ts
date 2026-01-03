import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontSize: {
        '12xl': '7.5rem',
        '15xl': '9.375rem',
        '18xl': '11.25rem',
      },
      typography: {
        'display': {
          fontSize: '4.5rem',
          lineHeight: '1.1',
          fontWeight: '800',
        },
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
    },
  },
  plugins: [],
};
export default config;

