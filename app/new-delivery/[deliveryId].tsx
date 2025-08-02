import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function NewDeliveryScreen() {
  const { deliveryId } = useLocalSearchParams();
  return (
    <View style={{ flex: 1 }}>
      <Text>deliveryId: {deliveryId}</Text>
    </View>
  );
}
