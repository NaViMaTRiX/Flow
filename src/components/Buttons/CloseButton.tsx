import { appWindow } from "@tauri-apps/api/window";
import { useContext } from "react";
import settingsContext from "../SettingsContext.tsx";

function CloseButton(props: any) {
   const settingsInfo = useContext(settingsContext);

    return (
       <button {...props} onClick={async () => {
          const mode: string = settingsInfo.mode!
          const localMode: string = mode === "" ? "work" : mode
          localStorage.setItem("mode", JSON.stringify(localMode))
          console.log(mode)

          const timerSeconds: number[] = document.querySelector('.timer')!.textContent!.split(":").map(Number)
          const sumSecondsLeft: number = timerSeconds[0] * 60 + timerSeconds[1];
          const localSecondsLeft: number = sumSecondsLeft === 0 ? settingsInfo.workMinutes * 60 : sumSecondsLeft
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