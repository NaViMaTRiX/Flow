import { useContext, useEffect } from "react";
import SettingsContext from "./main/SettingsContext.tsx";

function Timer() {

    const settingsInfo = useContext(SettingsContext);
    const song = new Audio('src/audio/song1.mp3');

    useEffect(() => {
        const comparisonSecondsLeft: boolean = settingsInfo.breakMinutes * 60 === settingsInfo.secondsLeft || settingsInfo.workMinutes * 60 === settingsInfo.secondsLeft;

       if (settingsInfo.stateChangeMinutes) {
          if (!comparisonSecondsLeft) {
             settingsInfo.setSecondsLeft((settingsInfo.mode === "work" ? settingsInfo.workMinutes : settingsInfo.breakMinutes) * 60);
             if(!settingsInfo.isPause){
               settingsInfo.setIsPause(true)
             }
          }
       }
    }, [settingsInfo.stateChangeMinutes])

    // function initTimer() {
    //     // данные из локольного хранилища инитятся при запуске
    // }
   // console.log(settingsInfo.stateChangeMinutes)

    function switchMode() { // change mode with work or break
        const nextMode = settingsInfo.mode === 'work' ? 'break' : 'work';
        const nextSeconds = (nextMode === 'work' ? settingsInfo.workMinutes : settingsInfo.breakMinutes) * 60;

        settingsInfo.setMode(nextMode);
        settingsInfo.setSecondsLeft(nextSeconds);

       song.volume = 0.2;
       song.play().then();
    }

    function tick() {
        settingsInfo.setSecondsLeft(settingsInfo.secondsLeft--);
    }

    useEffect(() => {
        const interval = setInterval(() => {

            if (settingsInfo.isPause) {
                return;
            }

            if (settingsInfo.secondsLeft === 0) {
               settingsInfo.setIsPause(true)
               return switchMode();
            }
            tick();
        }, 1000);
        return () => clearInterval(interval);
    }, [settingsInfo.isPause, settingsInfo.mode])

    const minutesString = String(Math.floor(settingsInfo.secondsLeft / 60)).padStart(2, "0");
    const secondsString = String(settingsInfo.secondsLeft % 60).padStart(2, "0");


    return (
        <>
            <time dateTime="{minutesString}:{secondsString}" id='timer' className='timer'>{minutesString}:{secondsString}</time>
        </>
    );
}

export default Timer;
