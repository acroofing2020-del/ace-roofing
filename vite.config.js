import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  preview: {
    port: 10000,
    host: "0.0.0.0",
    allowedHosts: ["ace-roofing.onrender.com"]  // 👈 add your Render URL here
  },
  server: {
    host: "0.0.0.0",
    port: 10000
  }
});
