import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Colors } from "../styles/Colors";
import { FontFamily } from "../styles/FontFamily";

const ADDITIONAL_PADDING_TOP = 8;

interface NavigationHeaderProps {
  options: { title?: string };
}
export default function NavigationHeader({ options }: NavigationHeaderProps) {
  const router = useRouter();
  const safeAreaInsents = useSafeAreaInsets();

  function handlePressGoBack() {
    if (router.canGoBack()) router.back();
  }

  return (
    <View
      style={[
        styles.container,
        { marginTop: safeAreaInsents.top + ADDITIONAL_PADDING_TOP },
      ]}
    >
      <Pressable style={styles.backIconContainer} onPress={handlePressGoBack}>
        <Ionicons name="arrow-back" size={24} color={Colors.orange500Alt} />
      </Pressable>

      <Text style={styles.title}>{options.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    paddingHorizontal: 16,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  backIconContainer: {
    position: "absolute",
    top: "50%",
    left: 16,
    transform: [{ translateY: "-50%" }],
  },
  title: {
    fontFamily: FontFamily.Poppins.medium,
    fontSize: 18,
    color: Colors.gray900,
  },
});
