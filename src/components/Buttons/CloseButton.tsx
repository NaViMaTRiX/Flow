import { appWindow } from "@tauri-apps/api/window";
import { useContext } from "react";
import settingsContext from "../SettingsContext.tsx";

function CloseButton(props: any) {
   const settingsInfo = useContext(settingsContext);


    return (
       <button {...props} onClick={async () => {
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

          await appWindow.close();
       }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M6.4 19L5 17.6L10.6 12L5 6.4L6.4 5L12 10.6L17.6 5L19 6.4L13.4 12L19 17.6L17.6 19L12 13.4L6.4 19Z" fill="white" />
            </svg>
        </button>
    );
}

export default CloseButton;