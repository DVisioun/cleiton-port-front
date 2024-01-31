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
        'sm-0.1': { max: '320px' },
        'sm-0': { max: '480px' },
        'sm-1': { max: '640px' },
      },
    },
  },
  plugins: [],
}
export default config
