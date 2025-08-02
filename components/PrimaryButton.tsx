import { LinearGradient } from "expo-linear-gradient";
import { TouchableOpacity, StyleSheet, Text } from "react-native";
import { Colors } from "../styles/Colors";

import { baseButton, baseTextButton } from "../styles/Button";

interface PrimaryButtonProps {
  text: string;
  icon?: React.ReactNode;
  onPress?: () => void;
}

export default function PrimaryButton({
  text,
  icon,
  onPress,
}: PrimaryButtonProps) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <LinearGradient
        style={styles.container}
        colors={[Colors.orange400, Colors.orange500Alt]}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
      >
        {icon && icon}
        <Text style={styles.text}>{text}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    ...baseButton,
  },
  text: {
    ...baseTextButton,
  },
});
