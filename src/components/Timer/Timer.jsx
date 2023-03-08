import React, { useState, useEffect, useRef, useCallback } from "react";
import { TimerText } from "./TimerStyles.js";

const Timer = () => {
  const initialTimer = localStorage.getItem("timer") ?? 86400; //86400
  const timeoutId = useRef(null);
  const [timer, setTimer] = useState(initialTimer);
  const [timeChecked, setTimeChecked] = useState(false);

  const countTimer = useCallback(() => {
    if (timer <= 0) {
      localStorage.clear("timer");
    } else if (!timeChecked) {
      storeCurrentTime()
    } else {
      setTimer(timer - 1);
      if (timer === 1) {
        setTimer(86400)
        new Notification("It's time to take your creatine!")
      }
      localStorage.setItem("timer", timer);
    };
  }, [timer]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    const formattedMinutes = formatMinutes(minutes);

    return `${formattedMinutes}:${String(remainingSeconds).padStart(2, '0')}`;
  };

  const formatMinutes = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;

    const formattedHours = String(hours).padStart(2, '0');
    const formattedMinutes = String(remainingMinutes).padStart(2, '0');

    return `${formattedHours}:${formattedMinutes}`;
  };

  useEffect(() => {
    timeoutId.current = window.setTimeout(countTimer, 1000);
    // cleanup function
    return () => window.clearTimeout(timeoutId.current);
  }, [timer, countTimer]);

  const storeCurrentTime = () => {
    if (!localStorage.getItem("currentTime")) {
      const currentTime = new Date();
      localStorage.setItem("currentTime", currentTime.toISOString())
      setTimer(timer => { return timer - 1 })
      setTimeChecked(true)
    } else if (localStorage.getItem("currentTime") && !timeChecked) {
      const currentTime = new Date().toISOString();
      const currentSeconds = Date.parse(currentTime) / 1000;
      const prevSeconds = Date.parse(localStorage.getItem("currentTime")) / 1000;
      const timeDifference = Math.round(currentSeconds - prevSeconds);
      localStorage.setItem("currentTime", currentTime)
      const newTimer = timer - timeDifference
      console.log(newTimer);
      setTimer(prevTimer => {
        const newTimer = prevTimer - timeDifference;
        console.log(newTimer);
        if (newTimer <= 0) {
          new Notification("It's time to take your creatine!");
          return 86400;
        } else {
          localStorage.setItem("timer", newTimer);
          return newTimer;
        }
      });
      setTimeChecked(true);
    };
  };

  return (
    <TimerText>Next Creatine Dose in {formatTime(timer)}</TimerText>);
}

export default Timer;