import react from "@vitejs/plugin-react";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";
import { defineConfig, loadEnv } from "vite";
import svgr from "vite-plugin-svgr";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig(({ mode }) => {
  Object.assign(process.env, loadEnv(mode, process.cwd(), ""));

  return {
    root: path.resolve(__dirname, "src"),
    build: {
      outDir: "../dist",
    },
    publicDir: "../public",

    plugins: [
      svgr({
        include: "**/*.svg",
      }),
      react(),
    ],

    css: {
      modules: {
        localsConvention: "camelCase",
      },
      preprocessorOptions: {
        scss: {
          additionalData: `
                        @import '${path.resolve(__dirname, "src/assets/styles/utils/mixins.scss")}';
                        @import '${path.resolve(__dirname, "src/assets/styles/utils/colors.scss")}';
                        @import '${path.resolve(__dirname, "src/assets/styles/utils/variables.scss")}';
                    `,
        },
      },
    },

    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
  };
});
