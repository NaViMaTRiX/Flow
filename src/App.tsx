import Titlebar from "./components/Titlebar";
import { useState } from "react";
import Primary from "./components/Primary";
import Header from "./components/Header";
import Settings from "./components/Settings";
import SettingsContext from "./components/SettingsContext";


function App() {

    const [showSettings, setShowSettings] = useState<boolean>(false);
    const [workMinutes, setWorkMinutes] = useState<number | 1>(45);
    const [breakMinutes, setBreakMinutes] = useState<number | 1>(15);
    const [isPause, setIsPause] = useState<boolean>(true);
    const [mode, setMode] = useState<string>('work');
    const [stateChangeMinutes, setStateChangeMinutes] = useState<boolean>(false);

   const localSecondsLeft = JSON.parse(localStorage.getItem('secondsLeft')!)
   const [secondsLeft, setSecondsLeft] = useState<number>(localSecondsLeft === null ? workMinutes * 60 : localSecondsLeft); // default workMinutes


    return (
        <main>
            <Titlebar />
            <div className="prim">
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
                    <Header />
                    {showSettings ? <Settings /> : <Primary />}
                </SettingsContext.Provider>
            </div>
        </main>
    );
}
export default App;
