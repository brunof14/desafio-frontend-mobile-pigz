import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../styles/Colors";
import { FontFamily } from "../styles/FontFamily";
import DeliveryDinningSvg from "./assets/DeliveryDinningSvg";

type Step = {
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
    <View style={styles.container}>
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
            Percurso Total: {totalDistance}
          </Text>
        </View>
      </LinearGradient>

      <View>
        <View style={[styles.stepContainer, { paddingTop: 40 }]}>
          <View style={styles.timeline} />
          <View style={styles.stepTitleContainer}>
            <View style={styles.circle} />
            <Text style={styles.stepTitleText}>Coleta</Text>
          </View>
          <View style={styles.stepDescriptionContainer}>
            <View style={styles.circleOutline} />
            <Text style={styles.stepDescriptionText}>
              {collect.location}
              {"\n"}
              Distância: {collect.distance}
            </Text>
          </View>
        </View>

        <View style={[styles.stepContainer, { paddingTop: 20 }]}>
          <View style={styles.timeline} />
          <View style={[styles.stepTitleContainer, { marginBottom: 8 }]}>
            <View style={styles.circle} />
            <Text style={styles.stepTitleText}>Entrega</Text>
          </View>
          <View style={[styles.stepDescriptionContainer]}>
            <View
              style={{
                backgroundColor: Colors.white,
                alignSelf: "stretch",
                paddingTop: 5,
              }}
            >
              <View
                style={{
                  position: "absolute",
                  borderStyle: "solid",
                  borderLeftColor: Colors.gray400,
                  borderLeftWidth: 1,
                  height: 5,
                  top: 0,
                  left: "50%",
                  transform: [{ translateX: "-50%" }],
                }}
              />
              <View style={styles.circleOutline} />
            </View>
            <Text style={styles.stepDescriptionText}>
              {delivery.location}
              {"\n"}
              Distância: {delivery.distance}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  timeline: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 20,
    borderStyle: "solid",
    borderLeftColor: Colors.gray400,
    borderLeftWidth: 1,
    zIndex: 0,
    transform: [{ translateX: "-50%" }],
  },
  cardDeliveryContainer: {
    height: 50,
    paddingHorizontal: 20,
    borderRadius: 16,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  stepContainer: {
    position: "relative",
  },
  stepTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingLeft: 12,
  },
  stepDescriptionContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingLeft: 15,
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
  circle: {
    height: 16,
    width: 16,
    borderRadius: "50%",

    backgroundColor: Colors.orange500Alt,
  },
  circleOutline: {
    height: 10,
    width: 10,
    borderRadius: "50%",
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: Colors.orange500,
  },
  stepTitleText: {
    fontSize: 18,
    lineHeight: 27,
    fontFamily: FontFamily.Poppins.medium,
    color: Colors.orange500,
  },
  stepDescriptionText: {
    flex: 1,
    fontFamily: FontFamily.Poppins.regular,
    fontSize: 14,
    color: Colors.gray600,
    flexShrink: 1,
  },
});
