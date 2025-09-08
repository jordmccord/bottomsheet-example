import { Pressable, Text } from "react-native";

export function NWButton({
  onPress,
  text,
}: {
  onPress: () => void;
  text: string;
}) {
  return (
    <Pressable onPress={onPress}>
      <Text className="text-white font-bold">{text}</Text>
    </Pressable>
  );
}
