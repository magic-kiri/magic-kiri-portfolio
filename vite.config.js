import { defineConfig } from "vite";

export default defineConfig({
  // Use relative paths so the site renders correctly on GitHub Pages
  // (both custom domains and /<repo>/ project pages).
  base: "/magic-kiri-portfolio",
  build: {
    outDir: "dist",
  },
  publicDir: "public",
});
