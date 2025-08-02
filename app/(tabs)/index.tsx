import { Text, View } from "react-native";
import PrimaryButton from "../../components/PrimaryButton";
import QrCodeSvg from "../../components/assets/QrCodeSvg";
import { useRouter } from "expo-router";

export default function OverviewTabScreen() {
  const router = useRouter()
  return (
    <View style={{ flex: 1 }}>
      <Text>Visão Geral</Text>
      <PrimaryButton icon={<QrCodeSvg />} text="Escanear Qrcode" onPress={() =>router.push('/new-delivery/123')}/>
    </View>
  );
}
