import {
  KeyboardTypeOptions,
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
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
  placeholder?: string;
  secureTextEntry?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
  keyboardType?: KeyboardTypeOptions;
}

export default function TextInputWithLabel({
  label,
  value,
  onChangeText,
  placeholder,
  secureTextEntry,
  containerStyle,
  inputStyle,
  keyboardType,
}: TextInputWithLabelProps) {
  const [isFocus, setIsFocus] = useState(false);
  const eye = useEyeVisibility();

  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={[styles.input, isFocus && styles.inputFocus, inputStyle]}
        placeholderTextColor={Colors.gray500}
        placeholder={placeholder}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry && !eye.isVisible}
        keyboardType={keyboardType}
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
    height: 50,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: Colors.gray400,
    borderRadius: 16,
    paddingHorizontal: 16,
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
