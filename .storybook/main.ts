/** @type { import('@storybook/react-native-web-vite').StorybookConfig } */
const config = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [],
  framework: {
    name: "@storybook/react-native-web-vite",
    options: {
      pluginReactOptions: {
        babel: {
          plugins: [
            "@babel/plugin-proposal-export-namespace-from",
            "react-native-worklets/plugin",
          ],
        },
      },
    },
  },
};
export default config;
