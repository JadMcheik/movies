import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";
const SearchIcon = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} {...props}>
    <Circle
      cx={13}
      cy={13}
      r={9}
      style={{
        fill: "none",
        stroke: "#FFF",
        strokeWidth: 2,
        strokeMiterlimit: 10,
      }}
    />
    <Path
      d="m26 26-6.563-6.563"
      style={{
        fill: "none",
        stroke: "#FFF",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeMiterlimit: 10,
      }}
    />
  </Svg>
);
export default SearchIcon;
