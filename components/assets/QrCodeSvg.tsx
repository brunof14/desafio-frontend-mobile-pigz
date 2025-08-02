import * as React from "react"
import Svg, { SvgProps, G, Path } from "react-native-svg"
const QrCodeSvg = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    {...props}
  >
    <G data-name="Grupo 9638">
      <Path
        fill="#fff"
        d="M8.208 4.925v3.283H4.925V4.925h3.283M9.85 3.283H3.283V9.85H9.85V3.283Zm-1.642 10.4v3.283H4.925V13.68h3.283m1.642-1.642H3.283V18.6H9.85v-6.562Zm7.114-7.114v3.283H13.68V4.925h3.283M18.6 3.283h-6.562V9.85H18.6V3.283Zm-6.566 8.755h1.646v1.642h-1.642Zm1.646 1.642h1.642v1.642H13.68Zm1.642-1.642h1.642v1.642h-1.642Zm-3.283 3.283h1.641v1.642h-1.642Zm1.642 1.642h1.642V18.6H13.68Zm1.642-1.642h1.642v1.642h-1.643Zm1.642-1.642H18.6v1.642h-1.637Zm0 3.283H18.6V18.6h-1.637Zm4.923-11.49H19.7V2.189h-3.284V0h5.472Zm0 16.416v-5.472H19.7V19.7h-3.284v2.189ZM0 21.888h5.472V19.7H2.189v-3.284H0ZM0 0v5.472h2.189V2.189h3.283V0Z"
        data-name="Caminho 1271"
      />
    </G>
  </Svg>
)
export default QrCodeSvg
