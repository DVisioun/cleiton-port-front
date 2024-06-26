import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class', '[data-mode="dark"]'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backgroundColor: {
        primary: 'var(--color-bg-primary)',
        opacity: 'var(--color-bg-primary-opacity)',
        secondary: 'var(--color-bg-secondary)',
        content: 'var(--secondary)',
      },
      textColor: {
        primary: 'var(--color-text-primary)',
        secondary: 'var(--color-text-secondary)',
        hover: 'var(--color-text-hover)',
      },
      boxShadow: {
        header: 'var(--box-shadow-primary)',
        shadow: 'var(--box-shadow-secondary)',
        card: 'var(--box-shadow-card)',
        software: 'var(--box-shadow-software)',
      },
      fontFamily: {
        sans: 'var(--font-poppins)',
        alt: 'var(--font-qwigley)',
      },
      screens: {
        'sm-cardPortfolio-0': { min: '635px' },
        'sm-0.1': { max: '320px' },
        'sm-0.2': { max: '350px' },
        'sm-0': { max: '480px' },
        'sm-1.0': { max: '520px' },
        'sm-1': { max: '640px' },
        'sm-2': { max: '767px' },
        'sm-2.1': { max: '885px' },
        'md-1': { max: '991px' },
        'md-1.5': { max: '1055px' },
        'md-2': { max: '1215px' },
        'md-2.5': { max: '1400px' },
        'md-3': { min: '1400px' },
        'md-3.5': { min: '1800px' },
      },
    },
  },
  plugins: [],
}
export default config
