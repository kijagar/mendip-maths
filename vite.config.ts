import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Served at the custom domain https://mendip-maths.com/ (site root).
// If it ever moves back to the github.io project URL, set base to "/mendip-maths/".
export default defineConfig({
  base: "/",
  plugins: [react()],
});
