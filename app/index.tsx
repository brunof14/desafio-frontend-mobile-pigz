import { Text, View } from "react-native";
import { FontFamily } from "../styles/fontFamily";

export default function LoginScreen() {
  return (
    <View style={{ flex: 1 }}>
      <Text style={{ fontFamily: FontFamily.Poppins.semiBold, fontSize: 32 }}>
        Login Screen
      </Text>
    </View>
  );
}
