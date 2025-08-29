import { defineConfig } from "vite";

// yeah i don't know
import path from "node:path";
import { rnw } from "vite-plugin-rnw";

// https://vite.dev/config/
export default defineConfig({
  optimizeDeps: {
    include: ["@gorhom/bottom-sheet"],
  },
  plugins: [
    rnw({
      jsxRuntime: "automatic",
      jsxImportSource: "nativewind",
      babel: {
        presets: ["nativewind/babel"],
        plugins: [
          "@babel/plugin-proposal-export-namespace-from",
          "react-native-reanimated/plugin",
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      // required for skia web
      "react-native/Libraries/Image/AssetRegistry": path.resolve(
        __dirname,
        "./stub.js"
      ),
    },
  },
});
