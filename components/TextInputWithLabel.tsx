import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { FontFamily } from "../styles/FontFamily";
import { Colors } from "../styles/Colors";
import { useState } from "react";
import useEyeVisibility from "../hooks/useEyeVisibility";
import Ionicons from "@expo/vector-icons/Ionicons";

interface TextInputWithLabelProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
}

export default function TextInputWithLabel({
  label,
  value,
  onChangeText,
  secureTextEntry,
}: TextInputWithLabelProps) {
  const [isFocus, setIsFocus] = useState(false);
  const eye = useEyeVisibility();

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={[styles.input, isFocus && styles.inputFocus]}
        placeholderTextColor={Colors.gray500}
        placeholder="example"
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry && !eye.isVisible}
      />
      {secureTextEntry && (
        <TouchableOpacity
          style={styles.eyeIconButton}
          onPress={eye.toggleVisibility}
        >
          <Ionicons
            name={eye.isVisible ? "eye-outline" : "eye-off-outline"}
            size={24}
            color={Colors.orange600}
          />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  label: {
    fontFamily: FontFamily.Poppins.regular,
    color: Colors.gray700,
    fontSize: 13,
    marginBottom: 6,
  },
  input: {
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: Colors.gray400,
    borderRadius: 16,
    padding: 16,
    fontFamily: FontFamily.Poppins.regular,
    color: Colors.gray750,
  },
  inputFocus: {
    borderColor: Colors.orange500Alt,
  },
  eyeIconButton: {
    position: "absolute",
    top: "50%",
    right: 16,
  },
});
