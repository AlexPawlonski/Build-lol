import { defineConfig, loadEnv } from "vite";
import svgr from "vite-plugin-svgr";
import react from "@vitejs/plugin-react";
import Unfonts from "unplugin-fonts/vite";

export default defineConfig({
  plugins: [
    react(),
    svgr(),
    Unfonts({
      custom: {
        families: [
          {
            name: "BeaufortforLOL",
            local: "BeaufortforLOL",
            src: "./src/font/*.ttf",
            transform(font) {
              if (font.basename === "BeaufortforLOL-Bold") {
                font.weight = 700;
              }
              return font;
            },
          },
        ],
      },
    }),
  ],
  server: {
    port: 3000,
  },
});
