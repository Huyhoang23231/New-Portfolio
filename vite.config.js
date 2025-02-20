import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite"; // Kiểm tra dòng này

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  esbuild: {
    jsxInject: `import React from 'react'`, // Giúp nhận diện JSX trong .js
  },
});
