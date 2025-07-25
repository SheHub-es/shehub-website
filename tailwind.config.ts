import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,js,jsx,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ['Ubuntu', 'sans-serif'],
        alt: ['Nunito', 'sans-serif'],
      },
      fontSize: {
        '1000': '60px',
        '900': '48px',
        '800': '36px',
        '700': '30px',
        '600': '24px',
        '500': '20px',
        '400': '18px',
        '300': '16px',
        '200': '14px',
        '100': '12px',
      },
      lineHeight: {
        'heading-1': '72px',
        'heading-2': '60px',
        'heading-3': '44px',
        'heading-4': '36px',
        'heading-5': '28px',
        'heading-6': '24px',
        'body-1': '32px',
        'body-2': '28px',
        'body-3': '24px',
        'label-1': '24px',
        'label-2': '20px',
        'label-3': '16px',
        'label-4': '12px',
      },
      fontWeight: {
        default: '400',
        medium: '500',
        heavy: '700',
      },
    },
  },
  plugins: [],
};

export default config;

