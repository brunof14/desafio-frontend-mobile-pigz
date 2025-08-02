import {
  ColorValue,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Colors } from "../styles/Colors";

import { baseButton, baseTextButton } from "../styles/Button";
import GoogleLogoSvg from "./assets/GoogleLogoSvg";

interface SecondaryButtonProps {
  onPress?: () => void;
}

export default function SecondaryButton({ onPress }: SecondaryButtonProps) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.logoContainer}>
        <GoogleLogoSvg />
      </View>
      <Text style={styles.text}>Continuar com o Google</Text>
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
  logoContainer: {
    position: "absolute",
    left: 16,
  },
});
