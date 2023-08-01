import { useContext, useEffect, useRef } from "react";
import SettingsContext from "./SettingsContext";

function Timer() {

    const settingsInfo = useContext(SettingsContext);

    const secondsLeftRef = useRef(settingsInfo.secondsLeft);
    // const isPauseRef = useRef(settingsInfo.isPause);
    const modeRef = useRef(settingsInfo.mode);

    function initTimer() {
        settingsInfo.setSecondsLeft(settingsInfo.workMinutes * 60); // set time in timer
    }

    function switchMode() { // change mode with work or break
        const nextMode = modeRef.current === 'work' ? 'break' : 'work';
        const nextSeconds = (nextMode === 'work' ? settingsInfo.workMinutes : settingsInfo.breakMinutes) * 60;

        settingsInfo.setMode(nextMode);
        modeRef.current = nextMode;

        settingsInfo.setSecondsLeft(nextSeconds);
        secondsLeftRef.current = nextSeconds;
    }

    function tick() {
        secondsLeftRef.current--;
        settingsInfo.setSecondsLeft(secondsLeftRef.current);
    }

    useEffect(() => {
        initTimer();
        const interval = setInterval(() => {
            if (settingsInfo.isPause) {
                return;
            }

            if (secondsLeftRef.current === 0) {
                return switchMode();
            }
            tick();
        }, 1000);

        return () => clearInterval(interval);
    }, [settingsInfo])

    const minutesString = String(Math.floor(secondsLeftRef.current / 60)).padStart(2, "0");
    const secondsString = String(secondsLeftRef.current % 60).padStart(2, "0");

    return (
        <>
            <h1>{minutesString}:{secondsString}</h1>
        </>
    );
}

export default Timer;
