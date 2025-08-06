import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../styles/Colors";
import { FontFamily } from "../styles/FontFamily";
import DeliveryDinningSvg from "./assets/DeliveryDinningSvg";
import DeliveryRouteStep from "./DeliveryRouteStep";

export type Step = {
  location: string;
  distance: string;
};

interface DeliveryRouteSummaryProps {
  totalDistance: string;
  collect: Step;
  delivery: Step;
}

export default function DeliveryRouteSummary({
  totalDistance,
  collect,
  delivery,
}: DeliveryRouteSummaryProps) {
  return (
    <View>
      <DeliveryTotalDistanceCard totalDistance={totalDistance} />
      <DeliveryRouteStep tag="collect" {...collect} />
      <DeliveryRouteStep tag="delivery" {...delivery} />
    </View>
  );
}

const DeliveryTotalDistanceCard = ({
  totalDistance: distance,
}: {
  totalDistance: string;
}) => (
  <LinearGradient
    style={styles.cardDeliveryContainer}
    colors={[Colors.orange400, Colors.orange500Alt]}
    start={{ x: 0, y: 0.5 }}
    end={{ x: 1, y: 0.5 }}
  >
    <DeliveryDinningSvg />
    <View>
      <Text style={styles.cardTitleText}>Entrega</Text>
      <Text style={styles.cardTotalDistanceText}>
        Percurso Total: {distance}
      </Text>
    </View>
  </LinearGradient>
);

const styles = StyleSheet.create({
  cardDeliveryContainer: {
    height: 50,
    paddingHorizontal: 20,
    borderRadius: 16,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  cardTitleText: {
    fontFamily: FontFamily.Roboto.medium,
    fontSize: 18,
    lineHeight: 18,
    color: Colors.white,
  },
  cardTotalDistanceText: {
    fontFamily: FontFamily.Roboto.regular,
    fontSize: 12,
    color: Colors.white,
  },
});
