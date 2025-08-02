import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const CloseSvg = (props: SvgProps) => (
  <Svg  width={24} height={24} {...props}>
    <Path fill="none" d="M0 0h24v24H0Z" data-name="Caminho 1269" />
    <Path
      fill="#e8453e"
      d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12Z"
      data-name="Caminho 1270"
    />
  </Svg>
)
export default CloseSvg
