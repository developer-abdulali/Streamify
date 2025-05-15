import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "/pages": "/src/pages", // Map absolute /pages to src/pages if used
    },
  },
});
