import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import type { Preview } from "@storybook/html-vite";
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
    (Story, { args, globals }) => {
      return (
        <BottomSheetModalProvider>
          <Story args={{ ...args }} />
        </BottomSheetModalProvider>
      );
    },
  ],
};

export default preview;
