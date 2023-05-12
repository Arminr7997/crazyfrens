import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import { resolve } from "path";

export default defineConfig({
  base: "https://arminr7997.github.io/crazyfrens/dist",
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  plugins: [reactRefresh()],
});
