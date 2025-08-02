import { ColorValue } from "react-native";

type Colors = {
  [key: string]: ColorValue;
};
export const Colors = {
  white: "#fff",
  gray50: "#F9F9F9",
  gray100: "#F0F0F0",
  gray300: "#CCCCCC",
  gray400: "#BABABA",
  gray500: "#9F9F9F",
  gray600: "#707070",
  gray700: "#676767",
  gray750: "#4B4B4B",
  gray800: "#333333",
  gray900: "#222222",
  orange400: "#FF881F",
  orange400_30: "#fe671f4d",
  orange500: "#FA641F",
  orange500Alt: "#FA641E",
  orange600: "#FF671F",
  red500: "#E8453E",
  black_7: "#00000012",
  black_8: "#00000014",
  black_5: "#0000000D",
  black_16: "#00000029",
  black: "#000000",
} as const;
