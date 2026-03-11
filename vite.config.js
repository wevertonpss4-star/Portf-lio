import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Ajuste base para GitHub Pages
export default defineConfig({
  plugins: [react()],
  base: "/Portf-lio/",
});
