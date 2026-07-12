import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Served from https://kijagar.github.io/mendip-maths/ (GitHub Pages project site).
// If the site moves to a custom domain, change base to "/".
export default defineConfig({
  base: "/mendip-maths/",
  plugins: [react()],
});
