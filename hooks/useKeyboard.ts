import { useEffect, useState } from "react";
import { Keyboard } from "react-native";

export default function useKeyboard() {
  const [keyboardIsVisible, setKeyboardIsVisible] = useState(false);
  useEffect(() => {
    Keyboard.addListener("keyboardDidShow", () => setKeyboardIsVisible(true));
    Keyboard.addListener("keyboardDidHide", () => setKeyboardIsVisible(false));

    return () => {
      Keyboard.removeAllListeners("keyboardDidShow");
      Keyboard.removeAllListeners("keyboardDidHide");
    };
  }, []);

  return { keyboardIsVisible };
}
