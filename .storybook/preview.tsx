import type { Preview } from "@storybook/react-vite";
import { Easing } from "react-native-reanimated";

console.log("Easing", Easing.out(Easing.exp));

import "../src/global.css";
const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story, { args }) => {
      return <Story args={{ ...args }} />;
    },
  ],
};

export default preview;
