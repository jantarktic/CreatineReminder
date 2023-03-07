import React from "react";
import {WindowContainer, WindowDiv, WindowDetails, WindowName, WindowCross} from "./WindowStyles.js";

const Window = () => {
  return (
    <WindowContainer>
      <WindowDiv>
        <WindowDetails>
          <WindowName>System Message</WindowName>
        </WindowDetails>
      </WindowDiv>
    </WindowContainer>
  )
}

export default Window;