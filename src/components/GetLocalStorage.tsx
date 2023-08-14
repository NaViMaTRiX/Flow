import { useContext } from "react";
import settingsContext from "./main/SettingsContext.tsx";


export function GetData() {
   const settingsInfo = useContext(settingsContext);

   const workMinutes: number = settingsInfo.workMinutes
   const localWorkMinutes: number = workMinutes === 0 ? 45 : workMinutes
   localStorage.setItem("workMinutes", JSON.stringify(localWorkMinutes))

   const breakMinutes: number = settingsInfo.breakMinutes
   const localBreakMinutes: number = breakMinutes === 0 ? 15 : breakMinutes
   localStorage.setItem("breakMinutes", JSON.stringify(localBreakMinutes))

   const mode: string = settingsInfo.mode!
   const localMode: string = mode === "" ? "work" : mode
   localStorage.setItem("mode", JSON.stringify(localMode))

   const timerSeconds: number = settingsInfo.secondsLeft
   const localSecondsLeft: number = timerSeconds === 0 ? settingsInfo.workMinutes * 60 : timerSeconds
   localStorage.setItem("secondsLeft", JSON.stringify(localSecondsLeft))
}

