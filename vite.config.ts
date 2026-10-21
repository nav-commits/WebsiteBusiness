import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/", // Set to "/your-repo-name/" if needed
  server: {
    proxy: {
      // Only public dataset queries are proxied, never mutations or credentials.
      "^/sanity-preview/v[0-9-]+/data/query/production": {
        target: "https://kxqwhynb.api.sanity.io",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/sanity-preview/, ""),
        configure: (proxy) => {
          proxy.on("proxyReq", (request) => {
            request.removeHeader("origin");
            request.removeHeader("cookie");
            request.removeHeader("authorization");
          });
        },
      },
    },
  },
  ssr: {
    noExternal: ["react-helmet-async"],
  },
});
