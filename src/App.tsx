import Titlebar from "./components/Titlebar";
import { useState } from "react";
import Primary from "./components/Primary";
import Header from "./components/Header";
import Settings from "./components/Settings";
import SettingsContext from "./components/SettingsContext";

function App() {

    const [showSettings, setShowSettings] = useState<boolean>(false);
    const [isPause, setIsPause] = useState<boolean>(true);
    const [stateChangeMinutes, setStateChangeMinutes] = useState<boolean>(false);

   const [workMinutes, setWorkMinutes] = useState<number | 0>(45);
   const [breakMinutes, setBreakMinutes] = useState<number | 0>(15);

    const localMode = String(JSON.parse(localStorage.getItem("mode")!))
    const [mode, setMode] = useState<string>(localMode);

    const localSecondsLeft = Number(JSON.parse(localStorage.getItem('secondsLeft')!));
    const [secondsLeft, setSecondsLeft] = useState<number | 0>(localSecondsLeft);

    console.log(mode)
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
