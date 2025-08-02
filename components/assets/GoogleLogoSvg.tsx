import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const GoogleLogoSvg = (props: SvgProps) => (
  <Svg width={20} height={20} {...props}>
    <Path
      fill="#4285f4"
      fillRule="evenodd"
      d="M19.6 10.227a11.49 11.49 0 0 0-.182-2.045H10v3.868h5.382a4.6 4.6 0 0 1-2 3.018v2.509h3.232a9.753 9.753 0 0 0 2.986-7.35Z"
    />
    <Path
      fill="#34a853"
      fillRule="evenodd"
      d="M10 20a9.547 9.547 0 0 0 6.618-2.423l-3.232-2.509a6.033 6.033 0 0 1-8.98-3.168H1.063v2.59A10 10 0 0 0 10 20Z"
      data-name="Shape"
    />
    <Path
      fill="#fbbc05"
      fillRule="evenodd"
      d="M4.4 11.9a5.912 5.912 0 0 1 0-3.8V5.509H1.064a10.013 10.013 0 0 0 0 8.982L4.4 11.9Z"
      data-name="Shape"
    />
    <Path
      fill="#ea4335"
      fillRule="evenodd"
      d="M10 3.977a5.4 5.4 0 0 1 3.823 1.5L16.691 2.6A9.61 9.61 0 0 0 10 0a10 10 0 0 0-8.937 5.509L4.406 8.1a5.96 5.96 0 0 1 5.6-4.123Z"
      data-name="Shape"
    />
    <Path fill="none" d="M0 0h20v20H0Z" data-name="Shape" />
  </Svg>
)
export default GoogleLogoSvg
