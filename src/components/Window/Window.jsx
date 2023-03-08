import React from "react";
import { WindowContainer, WindowDiv, WindowDetails, WindowName, WindowCross, WindowText, ButtonWrapper, WindowButton } from "./WindowStyles.js";
import Timer from "../Timer/Timer"

const Window = () => {
  const timer = true

  return (
    <WindowContainer>
      <WindowDiv>
        <WindowDetails>
          <WindowName>System Message</WindowName>
          <WindowCross src="./assets/cross.svg" alt="cross" />
        </WindowDetails>
        {timer ? (<>
        <WindowText>Oh hell yeah, you're going to be jacked and I'm not going to let you forget!</WindowText>
          <Timer />
        </>): (
          <>
            <WindowText>Take your damn creatine! When you have done so, click okay so you will never forget again.</WindowText>
            <ButtonWrapper>
              <WindowButton onClick={handleStartClick()}>Ok</WindowButton>
            </ButtonWrapper>
          </>
        )}

      </WindowDiv>
    </WindowContainer>
  )
}

export default Window;