import React, {useState, useEffect, useRef} from "react";
import {TimerText} from "./TimerStyles.js";

const Timer = () => {
    const initialTimer = localStorage.getItem("timer") ?? 86400;
    const timeoutId = useRef(null);
    const [timer, setTimer] = useState(initialTimer);

    const countTimer = React.useCallback(() => {
        if (timer <= 0) {
            localStorage.clear("timer");
        } else {
            setTimer(timer - 1);
            localStorage.setItem("timer", timer);
        }
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

    return (
      <TimerText>Next Creatine Dose in {formatTime(timer)}</TimerText>);
}

export default Timer;