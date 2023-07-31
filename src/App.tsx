import Titlebar from "./components/Titlebar";
import { useState } from "react";
import Primary from "./components/Primary";
import Header from "./components/Header";
import Settings from "./components/Settings";
import SettingsContext from "./components/SettingsContext";


function App() {

    const [showSettings, setShowSettings] = useState<boolean>(false);
    const [workMinutes, setWorkMinutes] = useState<number | 0>(45);
    const [breakMinutes, setBreakMinutes] = useState<number | 0>(15);
    const [secondsLeft, setSecondsLeft] = useState<number | 0>(0);
    const [isPause, setIsPause] = useState<boolean>(false);
    const [mode, setMode] = useState<string | null>('work')

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

                    setWorkMinutes,
                    setBreakMinutes,
                    setShowSettings,
                    setIsPause,
                    setSecondsLeft,
                    setMode
                }} >
                    <Header />
                    {showSettings ? <Settings /> : <Primary />}
                </SettingsContext.Provider>
            </div>
        </main>
    );
}
export default App;
