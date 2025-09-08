import { Text } from "react-native";

export const SkiaLoader = () => {
  // return (
  //   <WithSkiaWeb
  //     opts={{ locateFile: () => "/canvaskit.wasm" }}
  //     getComponent={async () => import("./skia")}
  //     fallback={<Text>Loading Skia...</Text>}
  //   />
  // );
  return <Text>Skia disabled</Text>;
};
