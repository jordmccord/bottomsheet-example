import path from "node:path";
import { defineConfig } from "vite";
import { rnw } from "vite-plugin-rnw";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    rnw({
      jsxRuntime: "automatic",
      jsxImportSource: "nativewind",
      babel: {
        presets: ["nativewind/babel"],
        plugins: [
          "@babel/plugin-proposal-export-namespace-from",
          "react-native-worklets/plugin",
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
