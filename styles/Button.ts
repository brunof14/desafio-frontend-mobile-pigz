import { TextStyle, ViewStyle } from "react-native";
import { Colors } from "./Colors";
import { FontFamily } from "./FontFamily";

export const baseButton: ViewStyle = {
  width: "100%",
  height: 48,
  borderRadius: 16,
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  gap: 6,
} as const;

export const baseTextButton: TextStyle = {
  fontFamily: FontFamily.Poppins.medium,
  fontSize: 16,
  color: Colors.white,
};
