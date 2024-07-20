import { resolve } from "path";
import react from "@vitejs/plugin-react";

export default {
  plugins: [react()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
};
