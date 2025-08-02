import { ColorValue, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Colors } from "../styles/Colors";

import { baseButton, baseTextButton } from "../styles/Button";

interface SecondaryButtonProps {
  text: string;
  icon?: React.ReactNode;
  onPress?: () => void;
  color?: ColorValue;
}

export default function SecondaryButton({
  text,
  icon,
  color,
  onPress,
}: SecondaryButtonProps) {
  return (
    <TouchableOpacity
      style={[styles.container, { borderColor: color }]}
      onPress={onPress}
    >
      {icon && icon}
      <Text style={[styles.text, { color }]}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    ...baseButton,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: Colors.gray700,
  },
  text: {
    ...baseTextButton,
    color: Colors.gray700,
  },
});
