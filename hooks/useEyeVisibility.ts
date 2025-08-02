import { useState } from "react";

type EyeVisibilityState = "visible" | "hidden";
export default function useEyeVisibility(
  initialState: EyeVisibilityState = "hidden"
) {
  const [isVisible, setIsVisible] = useState(initialState === "visible");

  function toggleVisibility() {
    setIsVisible((prev) => !prev);
  }

  return {
    isVisible,
    toggleVisibility,
  };
}
