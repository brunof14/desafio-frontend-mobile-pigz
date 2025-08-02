import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { Colors } from "../styles/Colors";
import TextInputWithLabel from "../components/TextInputWithLabel";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { FontFamily } from "../styles/FontFamily";
import { useState } from "react";
import PigzLogoSvg from "../components/assets/PigzLogoSvg";

export default function LoginScreen() {
  const safeAreaInsets = useSafeAreaInsets();
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={[styles.container, { paddingTop: safeAreaInsets.top }]}>
      <View style={styles.headerLogoContainer}>
        <PigzLogoSvg />
        <Text style={styles.headerLogoText}>Para entregadores</Text>
      </View>
      <View>
        <Text style={[styles.loginText, { marginBottom: 16 }]}>Login</Text>
        <TextInputWithLabel
          label="Email ou Telefone"
          value={emailOrPhone}
          onChangeText={setEmailOrPhone}
          containerStyle={{ marginBottom: 16 }}
        />
        <TextInputWithLabel
          label="Senha"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TouchableOpacity style={styles.forgetPasswordContainer}>
          <Text style={styles.forgetPasswordText}>Esqueci minha senha</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    backgroundColor: Colors.white,
  },
  headerLogoContainer: {
    alignItems: "center",
    gap: 8,
    marginTop: 80,
    marginBottom: 36,
  },
  forgetPasswordContainer: {
    marginVertical: 24,
  },
  headerLogoText: {
    fontFamily: FontFamily.Poppins.semiBold,
    fontSize: 18,
    textAlign: "center",
    color: Colors.gray800,
  },
  loginText: {
    fontFamily: FontFamily.Poppins.semiBold,
    fontSize: 16,
    color: Colors.gray900,
  },
  forgetPasswordText: {
    fontFamily: FontFamily.Poppins.regular,
    fontSize: 13,
    color: Colors.gray700,
    textDecorationLine: "underline",
  },
});
