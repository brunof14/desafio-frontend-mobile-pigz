import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Colors } from "../styles/Colors";
import { LinearGradient } from "expo-linear-gradient";
import { FontFamily } from "../styles/FontFamily";
import Ionicons from "@expo/vector-icons/Ionicons";
import useEyeVisibility from "../hooks/useEyeVisibility";
import { dateFormatter } from "../utils/dateFormatter";
import { moneyFormatter } from "../utils/moneyFormatter";

interface EarningsOfDayCardProps {
  earnings: number;
  date: Date | string | number;
}

export default function EarningsOfDayCard({
  earnings,
  date,
}: EarningsOfDayCardProps) {
  const eye = useEyeVisibility("visible");

  return (
    <LinearGradient
      style={styles.container}
      colors={[Colors.orange400, Colors.orange500Alt]}
      start={{ x: 0, y: 0.5 }}
      end={{ x: 1, y: 0.5 }}
    >
      <View style={styles.headerContainer}>
        <Text style={styles.text}>Ganhos do dia</Text>
        <Text style={styles.text}>{dateFormatter.format(date)}</Text>
      </View>

      <View style={styles.contentContainer}>
        <Text style={styles.earnings}>
          {eye.isVisible ? moneyFormatter.real(earnings) : "----"}
        </Text>
        <TouchableOpacity onPress={eye.toggleVisibility}>
          <Ionicons
            name={eye.isVisible ? "eye-outline" : "eye-off-outline"}
            size={28}
            color={Colors.white}
          />
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderRadius: 16,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  contentContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    fontFamily: FontFamily.Poppins.medium,
    fontSize: 16,
    color: Colors.white,
  },
  earnings: {
    fontFamily: FontFamily.Roboto.bold,
    fontSize: 30,
    color: Colors.white,
  },
});
