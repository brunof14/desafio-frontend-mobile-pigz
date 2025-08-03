import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { useRouter } from "expo-router";
import { useRef, useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import PigzLogoSvg from "../components/assets/PigzLogoSvg";
import GoogleSignButton from "../components/GoogleSignButton";
import PrimaryButton from "../components/PrimaryButton";
import TextInputWithLabel from "../components/TextInputWithLabel";
import useKeyboard from "../hooks/useKeyboard";
import { Colors } from "../styles/Colors";
import { FontFamily } from "../styles/FontFamily";

export default function LoginScreen() {
  const passwordRef = useRef<TextInput>(null);
  const safeAreaInsets = useSafeAreaInsets();
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const { keyboardIsVisible } = useKeyboard();
  const router = useRouter();

  function handlePressSubmit() {
    router.push("/(tabs)");
  }

  return (
    <View style={[styles.container, { paddingTop: safeAreaInsets.top }]}>
      <View
        style={[
          styles.headerLogoContainer,
          keyboardIsVisible && styles.headerLogoContainerWhenKeyboardOpen,
        ]}
      >
        <PigzLogoSvg />
        <Text style={styles.headerLogoText}>Para entregadores</Text>
      </View>
      <View style={{ marginBottom: 32 }}>
        <Text style={[styles.loginText, { marginBottom: 16 }]}>Login</Text>
        <TextInputWithLabel
          label="Email ou Telefone"
          placeholder="example@pigz.com.br"
          value={emailOrPhone}
          onChangeText={setEmailOrPhone}
          containerStyle={{ marginBottom: 16 }}
          onSubmitEditing={() => passwordRef.current?.focus()}
          submitBehavior="submit"
          returnKeyType="next"
        />
        <TextInputWithLabel
          label="Senha"
          placeholder="*****"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          onSubmitEditing={handlePressSubmit}
          ref={passwordRef}
        />
        <TouchableOpacity style={styles.forgetPasswordContainer}>
          <Text style={styles.forgetPasswordText}>Esqueci minha senha</Text>
        </TouchableOpacity>

        <PrimaryButton text="Entrar" onPress={handlePressSubmit} />

        <TouchableOpacity style={styles.createAccountLinkContainer}>
          <Text style={styles.createAccountText}>
            Não tem uma Conta?{" "}
            <Text style={{ color: Colors.orange500Alt }}>Criar agora!</Text>
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <View style={[styles.signInWithContainer, { marginBottom: 24 }]}>
          <Text style={styles.signInWithText}>Entrar com</Text>
          <View style={styles.bar} />
        </View>
        <GoogleSignButton />
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
  headerLogoContainerWhenKeyboardOpen: {
    marginTop: 40,
  },
  forgetPasswordContainer: {
    marginVertical: 24,
  },
  createAccountLinkContainer: {
    marginTop: 16,
    padding: 16,
  },
  signInWithContainer: {
    gap: 6,
    flexDirection: "row",
    alignItems: "center",
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
  createAccountText: {
    fontFamily: FontFamily.Poppins.regular,
    fontSize: 13,
    textAlign: "center",
  },
  signInWithText: {
    fontFamily: FontFamily.Poppins.semiBold,
    fontSize: 13,
    color: Colors.gray600,
  },
  bar: {
    flex: 1,
    height: 1,
    borderStyle: "solid",
    borderTopColor: Colors.gray600,
    borderTopWidth: 1,
  },
});
