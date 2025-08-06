import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../styles/Colors";
import { FontFamily } from "../styles/FontFamily";
import { Step } from "./DeliveryRouteSummary";

interface DeliveryRouteStepProps extends Step {
  tag: "collect" | "delivery";
}

export default function DeliveryRouteStep({
  location,
  distance,
  tag,
}: DeliveryRouteStepProps) {
  const isTagDelivery = tag === "delivery";
  const HALF_CIRCLE_OUTLINE = styles.circleOutline.width / 2;

  return (
    <View style={[styles.container, { paddingTop: isTagDelivery ? 20 : 40 }]}>
      <View style={styles.verticalLine} />
      <View style={[styles.titleContainer]}>
        <View style={styles.circleFill} />
        <Text style={styles.titleText}>
          {isTagDelivery ? "Entrega" : "Coleta"}
        </Text>
      </View>
      <View style={styles.descriptionContainer}>
        {isTagDelivery ? (
          <View
            style={{
              alignSelf: "stretch",
              backgroundColor: Colors.white,
              paddingTop: 4,
            }}
          >
            <View
              style={[
                styles.verticalLine,
                {
                  left: HALF_CIRCLE_OUTLINE,
                  height: HALF_CIRCLE_OUTLINE,
                },
              ]}
            />
            <View style={styles.circleOutline} />
          </View>
        ) : (
          <View style={styles.circleOutline} />
        )}
        <Text style={styles.descriptionText}>
          {location}
          {"\n"}
          Distância: {distance}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingLeft: 12,
    marginBottom: 6,
  },
  descriptionContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingLeft: 15,
  },
  verticalLine: {
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
  circleFill: {
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
  titleText: {
    fontSize: 18,
    lineHeight: 27,
    fontFamily: FontFamily.Poppins.medium,
    color: Colors.orange500,
  },
  descriptionText: {
    flex: 1,
    fontFamily: FontFamily.Poppins.regular,
    fontSize: 14,
    color: Colors.gray600,
    flexShrink: 1,
  },
});
