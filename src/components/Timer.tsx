import { useContext, useEffect, useRef } from "react";
import SettingsContext from "./SettingsContext";

function Timer() {

    const settingsInfo = useContext(SettingsContext);

    // const secondsLeftRef = useRef(settingsInfo.secondsLeft);
    // const isPauseRef = useRef(settingsInfo.isPause);

    const modeRef = useRef(settingsInfo.mode);

    useEffect(() => {
          // secondsLeftRef.current = (modeRef.current === 'work' ? settingsInfo.workMinutes : settingsInfo.breakMinutes) * 60;
          // settingsInfo.setSecondsLeft(secondsLeftRef.current)

          const comparisonSecondsLeft: boolean = settingsInfo.breakMinutes * 60 === settingsInfo.secondsLeft;

          if (settingsInfo.stateChangeMinutes) {
             if (!comparisonSecondsLeft) {
                return settingsInfo.setSecondsLeft((modeRef.current === "work" ? settingsInfo.workMinutes : settingsInfo.breakMinutes) * 60);
             }
          }
          console.log("stateChangeMinutes:", settingsInfo.stateChangeMinutes, comparisonSecondsLeft)
       },
       [settingsInfo.stateChangeMinutes])

    function initTimer() {
        // if (!(settingsInfo.secondsLeft === secondsLeftRef.current)) {
        //     settingsInfo.setSecondsLeft((modeRef.current === 'work' ? settingsInfo.workMinutes : settingsInfo.breakMinutes) * 60);
        // }
    }

    function switchMode() { // change mode with work or break
        const nextMode = modeRef.current === 'work' ? 'break' : 'work';
        const nextSeconds = (nextMode === 'work' ? settingsInfo.workMinutes : settingsInfo.breakMinutes) * 60;

        settingsInfo.setMode(nextMode);
        modeRef.current = nextMode;

        settingsInfo.setSecondsLeft(nextSeconds);

        // secondsLeftRef.current = nextSeconds;
    }

    function tick(){
        // secondsLeftRef.current--;
        // settingsInfo.setSecondsLeft(secondsLeftRef.current);

        settingsInfo.setSecondsLeft(settingsInfo.secondsLeft--);
    }

    useEffect(() => {
        initTimer();
        const interval = setInterval(() => {
            if (settingsInfo.isPause) {
                return;
            }

            if (/*secondsLeftRef.current*/settingsInfo.secondsLeft === 0) {
                return switchMode();
            }
            tick();
        }, 1000);
        return () => clearInterval(interval);
    }, [settingsInfo.isPause])

    const minutesString = String(Math.floor(settingsInfo.secondsLeft / 60)).padStart(2, "0");
    const secondsString = String(settingsInfo.secondsLeft % 60).padStart(2, "0");

    return (
        <>
            {/* <h1>{minutesString}:{secondsString}</h1> */}

            <time dateTime="45:00">{minutesString}:{secondsString}</time>
        </>
    );
}

export default Timer;
