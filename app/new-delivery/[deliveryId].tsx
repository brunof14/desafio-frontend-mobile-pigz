import { useLocalSearchParams, useRouter } from "expo-router";
import { StyleSheet, View } from "react-native";
import DeliveryRouteSummary from "../../components/DeliveryRouteSummary";
import InfoItem from "../../components/InfoItem";
import PrimaryButton from "../../components/PrimaryButton";
import SecondaryButton from "../../components/SecondaryButton";
import CheckSvg from "../../components/assets/CheckSvg";
import CloseSvg from "../../components/assets/CloseSvg";
import { Colors } from "../../styles/Colors";
import { moneyFormatter } from "../../utils/moneyFormatter";

const deliverySummaryMockData = {
  totalDistance: "8km",
  collect: {
    location: "Restaurante Recanto da Peixada",
    distance: "2km",
  },
  delivery: {
    location: "Av: Cabo dos Soldados - Caranã",
    distance: "6km",
  },
};

export default function NewDeliveryScreen() {
  const router = useRouter();
  const { deliveryId } = useLocalSearchParams();

  function handlePressReject() {
    if (router.canGoBack()) router.back();
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <InfoItem label="Tempo Estimado" value="30 Min" />
        <InfoItem label="Número de ID" value={`#${deliveryId}`} />
      </View>
      <View style={{ marginTop: 20, marginBottom: 35 }}>
        <InfoItem
          label="Valor da Entrega"
          value={moneyFormatter.real(13.75)}
          variant="big"
        />
      </View>
      <DeliveryRouteSummary {...deliverySummaryMockData} />

      <View style={styles.buttonsContainer}>
        <PrimaryButton text="Aceitar" icon={<CheckSvg />} />
        <SecondaryButton
          text="Rejeitar"
          icon={<CloseSvg />}
          color={Colors.red500}
          onPress={handlePressReject}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    paddingHorizontal: 24,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingBottom: 12,
    borderBottomColor: Colors.gray600,
    borderBottomWidth: 1,
    borderStyle: "solid",
  },
  buttonsContainer: {
    marginTop: 36,
    gap: 16,
  },
});
