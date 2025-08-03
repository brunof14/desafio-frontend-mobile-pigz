import { StyleSheet, Text, View } from "react-native";
import { FontFamily } from "../styles/FontFamily";
import { Colors } from "../styles/Colors";

interface InfoItemProps {
  label: string;
  value: string;
  variant?: "big";
}
export default function InfoItem({ label, value, variant }: InfoItemProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.labelText}>{label}</Text>
      <Text style={[styles.valueText, variant === "big" && styles.bigText]}>
        {value}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  labelText: {
    fontFamily: FontFamily.Poppins.regular,
    fontSize: 14,
    color: Colors.gray600,
  },
  valueText: {
    fontFamily: FontFamily.Poppins.bold,
    fontSize: 20,
    color: Colors.orange500,
  },
  bigText: {
    fontSize: 35,
    lineHeight: 40,
  },
});
