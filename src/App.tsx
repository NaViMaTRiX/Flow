import Titlebar from "./components/main/Titlebar.tsx";
import { useState } from "react";
import Primary from "./components/main/Primary.tsx";
import Header from "./components/main/Header.tsx";
import Settings from "./components/main/Settings.tsx";
import SettingsContext from "./components/main/SettingsContext.tsx";

function App() {

    const [showSettings, setShowSettings] = useState<boolean>(false);
    const [isPause, setIsPause] = useState<boolean>(true);
    const [stateChangeMinutes, setStateChangeMinutes] = useState<boolean>(false);

    const localWorkMinutes: number = Number(JSON.parse(localStorage.getItem("workMinutes")!))
    const [workMinutes, setWorkMinutes] = useState<number | 0>(localWorkMinutes);

    const localBreakMinutes: number = Number(JSON.parse(localStorage.getItem("breakMinutes")!))
    const [breakMinutes, setBreakMinutes] = useState<number | 0>(localBreakMinutes);

    const localMode: string = String(JSON.parse(localStorage.getItem("mode")!))
    const [mode, setMode] = useState<string>(localMode);

    const localSecondsLeft: number = Number(JSON.parse(localStorage.getItem('secondsLeft')!));
    const [secondsLeft, setSecondsLeft] = useState<number>(localSecondsLeft);


    return (
        <main>
            <SettingsContext.Provider value={{
                workMinutes,
                breakMinutes,
                showSettings,
                isPause,
                secondsLeft,
                mode,
                stateChangeMinutes,

                setWorkMinutes,
                setBreakMinutes,
                setShowSettings,
                setIsPause,
                setSecondsLeft,
                setMode,
                setStateChangeMinutes,
            }} >
                <Titlebar />
                <div className="prim">
                   <Header />
                   {showSettings ? <Settings /> : <Primary />}
                </div>
            </SettingsContext.Provider>
        </main>
    );
}
export default App;
