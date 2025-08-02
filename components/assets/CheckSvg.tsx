import * as React from "react";
import Svg, { SvgProps, G, Circle, Path } from "react-native-svg";
const CheckSvg = (props: SvgProps) => (
  <Svg width={24} height={24} {...props}>
    <G data-name="Grupo 9637" transform="translate(-49.247 -296.247)">
      <Circle
        cx={12}
        cy={12}
        r={12}
        fill="none"
        data-name="Elipse 13"
        transform="translate(49.247 296.247)"
      />
      <Path
        fill="none"
        d="M49.753 296.753H72.74v22.987H49.753Z"
        data-name="Caminho 1253"
      />
      <Path
        fill="#fff"
        d="m58.373 312.24-3.994-3.994-1.36 1.351 5.354 5.354 11.493-11.494-1.35-1.35Z"
        data-name="Caminho 1254"
      />
    </G>
  </Svg>
);
export default CheckSvg;
