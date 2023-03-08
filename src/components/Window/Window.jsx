import React, { useState, useEffect } from "react";
import { WindowContainer, WindowDiv, WindowDetails, WindowName, WindowCross, WindowText, ButtonWrapper, WindowButton } from "./WindowStyles.js";
import Timer from "../Timer/Timer"

const Window = () => {
  const [isRunning, setIsRunning] = useState(() => {
    const savedIsRunning = localStorage.getItem("isRunning");
    return savedIsRunning !== null ? JSON.parse(savedIsRunning) : false;
  });

  const [permission, setPermission] = useState(false)

  useEffect(() => {
    localStorage.setItem('isRunning', JSON.stringify(isRunning));
  }, [isRunning]);

  // useEffect(() => {
  //   if (isRunning & Notification.permission === "granted" & !localStorage.getItem("timer")) {
  //     new Notification("It's time to take your creatine!");
  //   };
  // })

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
          setPermission(true)
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
          <WindowText>Oh hell yeah, you're going to be jacked and I'm not going to let you forget!</WindowText>
          <Timer isRunning={isRunning} />
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