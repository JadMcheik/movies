import * as React from "react";
import Svg, { Path } from "react-native-svg";
const PlayVideo = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width={50}
    height={50}
    viewBox="0 0 528 528"
    {...props}
  >
    <Path
      d="M264 511.624c136.752 0 248-111.088 248-247.624S400.752 16.376 264 16.376 16 127.464 16 264s111.248 247.624 248 247.624zm-71.504-356.696 195.624 104.44L192.496 363.8V154.928z"
      style={{
        fill: "#0e86d4",
      }}
    />
  
    <Path
      d="M192.496 154.928V363.8L388.12 259.368z"
      style={{
        fill: "#fff",
      }}
    />
  </Svg>
)
export default PlayVideo
