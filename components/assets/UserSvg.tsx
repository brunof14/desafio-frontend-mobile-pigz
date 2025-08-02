import * as React from "react";
import Svg, { SvgProps, G, Path } from "react-native-svg";
const UserSvg = (props: SvgProps) => (
  <Svg width={28} height={28} {...props}>
    <G data-name="Grupo 3686">
      <Path
        fill={props.color ?? "#9f9f9f"}
        d="M17.695 14.716a6 6 0 1 0-7.42 0 10 10 0 0 0-6.22 8.18 1.006 1.006 0 1 0 2 .22 8 8 0 0 1 15.9 0 1 1 0 0 0 1 .89h.11a1 1 0 0 0 .88-1.1 10 10 0 0 0-6.25-8.19Zm-3.71-.71a4 4 0 1 1 4-4 4 4 0 0 1-4 4Z"
      />
      <Path fill="none" d="M0 0h28v28H0z" data-name="Ret\xE2ngulo 5668" />
    </G>
  </Svg>
);
export default UserSvg;
