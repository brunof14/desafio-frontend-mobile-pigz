import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { CardShadow } from "../styles/Shadow";
import { Colors } from "../styles/Colors";
import TextInputWithLabel from "./TextInputWithLabel";
import { useState } from "react";
import { FontFamily } from "../styles/FontFamily";
import PrimaryButton from "./PrimaryButton";
import QrCodeSvg from "./assets/QrCodeSvg";
import { useRouter } from "expo-router";

export default function NewDeliveryCard() {
  const router = useRouter();
  const [deliveryId, setDeliveryId] = useState("");
  const buttonIsDisable = deliveryId === "";

  function handlePressNewDelivery() {
    if (!deliveryId) return;
    const id = deliveryId;
    setDeliveryId("");
    router.push(`/new-delivery/${id}`);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Iniciar Nova Entrega</Text>
      <View style={styles.inputDeliveryContainer}>
        <TextInputWithLabel
          label="Número de Identificação"
          value={deliveryId}
          onChangeText={setDeliveryId}
          onSubmitEditing={handlePressNewDelivery}
          containerStyle={{ flex: 1 }}
          inputStyle={{
            height: 46,
          }}
          keyboardType="numeric"
        />
        <TouchableOpacity
          style={[
            styles.buttonContainer,
            buttonIsDisable && styles.buttonDisabled,
          ]}
          onPress={handlePressNewDelivery}
          disabled={buttonIsDisable}
        >
          <Text style={styles.buttonText}>OK</Text>
        </TouchableOpacity>
      </View>
      <PrimaryButton text="Escanear Qrcode" icon={<QrCodeSvg />} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...CardShadow,
    borderRadius: 16,
    backgroundColor: Colors.white,
    paddingTop: 16,
    paddingBottom: 24,
    paddingHorizontal: 14,
  },
  titleText: {
    fontFamily: FontFamily.Poppins.bold,
    fontSize: 16,
    color: Colors.gray800,
    marginBottom: 8,
  },
  inputDeliveryContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
    gap: 12,
    marginBottom: 18,
  },
  buttonContainer: {
    height: 46,
    width: 64,
    borderRadius: 16,
    backgroundColor: Colors.orange500,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonDisabled: {
    backgroundColor: Colors.gray500,
  },
  buttonText: {
    fontFamily: FontFamily.Poppins.medium,
    fontSize: 17,
    color: Colors.white,
  },
});
