import React, { useState, useEffect } from "react";
import { WindowContainer, WindowDiv, WindowDetails, WindowName, WindowCross, WindowText, GifWrapper, ButtonWrapper, WindowButton } from "./WindowStyles.js";
import Timer from "../Timer/Timer"

const Window = () => {
  const [isRunning, setIsRunning] = useState(() => {
    const savedIsRunning = localStorage.getItem("isRunning");
    return savedIsRunning !== null ? JSON.parse(savedIsRunning) : false;
  });

  useEffect(() => {
    localStorage.setItem('isRunning', JSON.stringify(isRunning));
  }, [isRunning]);

  const handleClick = () => {
    setIsRunning(true);

    if (!("Notification" in window)) {
      alert("This browser does not support desktop notification");
    } else if (Notification.permission === "granted") {
      setPermission(true)
      new Notification("Creatine taken!");
    } else if (Notification.permission !== "denied") {
      Notification.requestPermission().then(permission => {
        if (permission === "granted") {
          new Notification("Creatine taken!");
        }
      });
    }
  };

  return (
    <WindowContainer>
      <WindowDiv>
        <WindowDetails>
          <WindowName>System Message</WindowName>
          <WindowCross src="./assets/cross.svg" alt="cross" />
        </WindowDetails>
        {isRunning ? (<>
          <WindowText>Oh hell yeah. You're going to be jacked and I'm not going to let you forget!</WindowText>
          <Timer isRunning={isRunning} />
          <GifWrapper>
            <iframe src="https://giphy.com/embed/ujygH8l79xR9m" width="100%" height="100%" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
            <iframe src="https://giphy.com/embed/LVFI2mSmR7SdG" width="100%" height="100%" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
          </GifWrapper>
        </>) : (
          <>
            <WindowText>Take your damn creatine! When you have done so, click okay so you will never forget again.</WindowText>
            <ButtonWrapper>
              <WindowButton onClick={handleClick}>Ok</WindowButton>
            </ButtonWrapper>
          </>
        )}

      </WindowDiv>
    </WindowContainer>
  )
}

export default Window;