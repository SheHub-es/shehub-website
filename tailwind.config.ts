import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{ts,tsx,js,jsx,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // PRIMITIVE TOKENS
        purple: {
          50: "#f4f2ff",
          100: "#e9e8ff",
          200: "#d6d4ff",
          300: "#b9b1ff",
          400: "#9685ff",
          500: "#7858ff",
          600: "#6230f7",
          700: "#551ee3",
          800: "#4618bf",
          900: "#3b169c",
          950: "#220b6a",
        },
        pink: {
          50: "#fef1f7",
          100: "#fee5f0",
          200: "#fecce3",
          300: "#ffa2cb",
          400: "#fe68a6",
          500: "#f83c85",
          600: "#e81a60",
          700: "#ca0c47",
          800: "#a70d3b",
          900: "#8b1034",
          950: "#55021a",
        },
        orange: {
          50: "#fff6eb",
          100: "#ffecd0",
          200: "#fed4a1",
          300: "#feb565",
          400: "#fd8927",
          500: "#f76702",
          600: "#e45004",
          700: "#bb3a05",
          800: "#941d0c",
          900: "#77280d",
          950: "#411104",
        },
        neutral: {
          50: "#fefefe",
          100: "#f6f6f6",
          200: "#e7e7e7",
          300: "#d1d1d1",
          400: "#b0b0b0",
          500: "#888888",
          600: "#6d6d6d",
          700: "#5d5d5d",
          800: "#454545",
          900: "#3d3d3d",
          950: "#292929 ",
        },
        green: {
          50: "#edfcf5",
          100: "#d3f8e4",
          200: "#aceece",
          300: "#75e0b3",
          400: "#3dca92",
          500: "#1aaf7a",
          600: "#0d875e",
          700: "#0b7151",
          800: "#0b5a42",
          900: "#0a4a37",
          950: "#042a20",
        },
        yellow: {
          50: "#fefce8",
          100: "#fef9c3",
          200: "#feef8a",
          300: "#fcdf48",
          400: "#f9ca16",
          500: "#f1b709",
          600: "#c98905",
          700: "#a16107",
          800: "#854c0e",
          900: "#713e12",
          950: "#422006",
        },
        red: {
          50: "#fef3f2",
          100: "#fee4e2",
          200: "#fecdca",
          300: "#fbaba6",
          400: "#f77b72",
          500: "#ec3e32",
          600: "#db3327",
          700: "#b8271d",
          800: "#98241c",
          900: "#7e241e",
          950: "#450e0a",
        },
        white: "#ffffff",
        black: "#0e0e0e",

        // SEMANTIC TOKENS
        "background-light": "#fefefe",
        "background-dark": "#292929",
        "background-footer": "#e9e8ff",
        foreground: "#292929",
        primary: "#7858ff",
        "primary-hover": "#e9e8ff",
        secondary: "#f83c85",
        "secondary-hover": "#fee5f0",
        tertairy: "#f76702",
        "tertairy-hover": "#ffecd0",
        accent: "#7858ff",
        success: "#0d875e",
        warning: "#f1b709",
        error: "#db3327",
        muted: "#888888",
        disabled: "#e7e7e7",
        border: "#fefefe",

        // COMPONENTS TOKENS

        //Buttons
        "button-primary-primary-bg-default": "#7858ff",
        "button-primary-primary-bg-hover": "#e9e8ff",
        "button-primary-primary-bg-focus": "#7858ff",
        "button-primary-primary-text": "#ffffff",
        "button-primary-primary-text-hover": "#0e0e0e",

        "button-secondary-primary-bg-default": "#fefefe",
        "button-secondary-primary-bg-hover": "#e9e8ff",
        "button-secondary-primary-bg-focus": "#fefefe",
        "button-secondary-primary-text": "#0e0e0e",
        "button-secondary-primary-border": "#7858ff",

        "button-primary-secondary-bg-default": "#f83c85",
        "button-primary-secondary-bg-hover": "#e9e8ff",
        "button-primary-secondary-bg-focus": "#7858ff",
        "button-primary-secondary-text": "#0e0e0e",

        "button-secondary-secondary-bg-default": "#fefefe",
        "button-secondary-secondary-bg-hover": "#fee5f0",
        "button-secondary-secondary-bg-focus": "#fefefe",
        "button-secondary-secondary-text": "#0e0e0e",
        "button-secondary-secondary-border": "#f83c85",

        "button-primary-tertairy-bg-default": "#f76702",
        "button-primary-tertairy-bg-hover": "#ffecd0",
        "button-primary-tertairy-bg-focus": "#f76702",
        "button-primary-tertairy-text": "#0e0e0e",

        "button-secondary-tertairy-bg-default": "#fefefe",
        "button-secondary-tertairy-bg-hover": "#ffecd0",
        "button-secondary-tertairy-bg-focus": "#fefefe",
        "button-secondary-tertairy-text": "#0e0e0e",
        "button-secondary-tertairy-border": "#f76702",

        "button-disabled-bg": "#d1d1d1",
        "button-disabled-text": "#6b6b6b",
        "button-disabled-border": "#d1d1d1",

        //Toggle
        "toggle-bg-default": "#f5f5f5",
        "toggle-bg-hover": "#e9e8ff",
        "toggle-bg-active": "#7858ff",
        "toggle-bg-disabled": "#d1d1d1",

        "toggle-text-default": "#0e0e0e",
        "toggle-text-active": "#ffffff",
        "toggle-text-disabled": "#6b6b6b",

        "toggle-border-default": "#d1d1d1",
        "toggle-border-active": "#7858ff",
        "toggle-border-focus": "#7858ff",

        //Navigation Menu
        "navigationmenu-label": "#0e0e0e",
        "navigationmenu-hover": "#7858ff",
        "navigationmenu-current-underline": "#0e0e0e",
        "navigationmenu-focus-outline": "#b9b1ff",
        "navigationmenu-container-bg": "transparent",

        //Header
        "header-bg": "#fefefe",
        "header-shadow": "0px 4px 16px rgba(0, 0, 0, 0.08)",

        //Avatar 
        "avatar-default-bg": "#7858ff",
        "avatar-default-disabled": "#6d6d6d",
        "avatar-default-text": "#ffffff",
        "avatar-default-border-focus": "#b9b1ff",

        "avatar-primary-variant-bg": "#e9e8ff",
        "avatar-primary-variant-border-focus": "#b9b1ff",

        "avatar-secondary-variant-bg": "#fee5f0",
        "avatar-secondary-border-focus": "#ffa2cb",

        "avatar-tertairy-variant-bg": "#ffecd0",
        "avatar-tertairy-variant-border-focus": "#feb565",

        "avatar-variant-text": "#0e0e0e",
        "avatar-variant-disabled": "#e7e7e7",

        //Card
        "card-white-bg-default": "#ffffff",
        "card-white-bg-hover": "#fefefe",
        "card-white-icon": "#7858ff",
        "card-white-title": "#0e0e0e",
        "card-white-text": "#6d6d6d",

        "card-clickable-purple-bg-default": "#b9b1ff",
        "card-clickable-purple-bg-hover": "#d6d4ff",

        "card-non-clickable-purple-bg": "#7858ff",
        "card-non-clickable-purple-text": "#ffffff",
        "card-non-clickable-purple-icon": "#0e0e0e",

        "card-non-clickable-light-purple-bg": "#d6d4ff",
        "card-non-clickable-light-purple-text": "#0e0e0e",
        "card-non-clickable-light-purple-icon": "#7858ff",

        "card-bg-disabled": "#e7e7e7",

        "card-shadow-default": "0px 4px 16px rgba(0, 0, 0, 0.08)",
        "card-shadow-hover": "0px 4px 16px rgba(0, 0, 0, 0.16)",

        //Image Placeholder
        "image-container-bg": "#d6d4ff",
        "image-stroke-icon": "#6230f7",

        //Footer
        "footer-bg": "#e9e8ff",

        //Text Link
        "textlink-default": "#7858ff",
        "textlink-hover": "#4618bf",
        "textlink-hover-underline": "#4618bf",
        "textlink-focus": "#7858ff",
        "textlink-focus-outline": "#b9b1ff",
        "textlink-active": "#0e0e0e",
        "textlink-visited": "#220b6a",

        //Icons
        "icon-default": "#292929",
        "icon-hover": "#e9e8ff",

        // Accordion
        "accordion-bg-default": "#ffffff",
        "accordion-text": "#0e0e0e",
        "accordion-header-border-default": "#d1d1d1",
        "accordion-focus-area": "#b9b1ff",

        // Timeline
        "timeline-line": "#d1d1d1",
        "timeline-dot": "#7858ff",
        "timeline-heading-text": "#0e0e0e",
        "timeline-day-label-text": "#6d6d6d",
        "timeline-description-text": "#0e0e0e",

        // Carousel
        "carousel-bg": "#ffffff",
        "carousel-text-main": "#6d6d6d",
        "carousel-text-sub": "#0e0e0e", 
        "carousel-text-highlight": "#7858ff",
      
        "carousel-dot-default": "rgba(14, 14, 14, 0.2)",
        "carousel-dot-active": "#0e0e0e",

        "carousel-arrow-default": "#0e0e0e", 
        "carousel-arrow-disabled": "#e7e7e7"

      },

      fontFamily: {
        sans: ["Ubuntu", "sans-serif"],
        alt: ["Nunito", "sans-serif"],
      },

      fontSize: {
        "font-size-1000": "60px",
        "font-size-900": "48px",
        "font-size-800": "36px",
        "font-size-700": "30px",
        "font-size-600": "24px",
        "font-size-500": "20px",
        "font-size-400": "18px",
        "font-size-300": "16px",
        "font-size-200": "14px",
        "font-size-100": "12px",
      },

      lineHeight: {
        "heading-1": "72px",
        "heading-2": "60px",
        "heading-3": "44px",
        "heading-4": "36px",
        "heading-5": "28px",
        "heading-6": "24px",

        "body-1": "32px",
        "body-2": "28px",
        "body-3": "24px",

        "label-1": "24px",
        "label-2": "20px",
        "label-3": "16px",
        "label-4": "12px",
      },

      fontWeight: {
        default: "400",
        medium: "500",
        heavy: "700",
      }

    },

  },
  plugins: [],
};


export default config;
