import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,js,jsx,mdx}"],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({

        // Inline link

        ".link-inline": {
          color: "#7858ff",
          textDecoration: "underline",
          textUnderlineOffset: "2px",
          textDecorationThickness: "1px",
          display: "inline-block",
          padding: "0.5rem 0.25rem",
          transition: "color 0.2s",
          "&:hover": {
            color: "#6230f7",
          },
          "&:focus-visible": {
            outline: "2px solid #b9b1ff",
            outlineOffset: "2px",
          },
          "&:focus:not(:focus-visible)": {
            outline: "none",
          },
          "&:active": {
            color: "#0e0e0e",
          },
          "&:visited": {
            color: "#5a42cc",
          },
        },

        // Standalone link

        ".link-standalone": {
          color: "#7858ff",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "0.25rem",
          minHeight: "44px",
          padding: "0 0.5rem",
          transition: "color 0.2s",
          "&:hover": {
            textDecoration: "underline",
            color: "#6230f7",
          },
          "&:focus-visible": {
            outline: "2px solid #b9b1ff",
            outlineOffset: "2px",
          },
          "&:focus:not(:focus-visible)": {
            outline: "none",
          },
          "&:active": {
            color: "#0e0e0e",
          },
          "&:visited": {
            color: "#220b6a",
          },
        },

      });
    }),
  ],
};

export default config;
