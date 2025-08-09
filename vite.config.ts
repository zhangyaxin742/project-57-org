import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { componentTagger } from "lovable-tagger";
import mdx from "@mdx-js/rollup";
import remarkGfm from "remark-gfm";
import remarkFrontmatter from "remark-frontmatter";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  // Force a fresh Vite cache between dev and preview builds
  cacheDir: mode === "production" ? "node_modules/.vite-prod" : "node_modules/.vite",
  plugins: [
    mdx({
      development: false,
      jsxImportSource: "react",
      remarkPlugins: [remarkGfm, remarkFrontmatter],
    }),
    react(),
    mode === 'development' && componentTagger(),
  ].filter(Boolean),
  // Ensure automatic JSX runtime consistency
  esbuild: {
    jsx: "automatic",
    jsxImportSource: "react",
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
