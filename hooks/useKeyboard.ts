import { useFocusEffect } from "expo-router";
import { useCallback, useEffect, useState } from "react";
import { Keyboard } from "react-native";

export default function useKeyboard() {
  const [keyboardIsVisible, setKeyboardIsVisible] = useState(false);
  useFocusEffect(
    useCallback(() => {
      setKeyboardIsVisible(false);
      Keyboard.addListener("keyboardDidShow", () => setKeyboardIsVisible(true));
      Keyboard.addListener("keyboardDidHide", () =>
        setKeyboardIsVisible(false)
      );

      return () => {
        Keyboard.removeAllListeners("keyboardDidShow");
        Keyboard.removeAllListeners("keyboardDidHide");
      };
    }, [])
  );

  return { keyboardIsVisible };
}
