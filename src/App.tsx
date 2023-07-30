import Titlebar from "./components/Titlebar";
import { useState } from "react";
import Primary from "./components/Primary";
import Header from "./components/Header";
import Settings from "./components/Settings";
import SettingsContext from "./components/SettingsContext";


function App() {

    const [showSettings, setShowSettings] = useState(true);
    const [workMinutes, setWorkMinutes] = useState<number | 0>(45);
    const [breakMinutes, setBreakMinutes] = useState<number | 0>(15);


    return (
        <main>
            <Titlebar />
            <div className="prim">
                <SettingsContext.Provider value={{ workMinutes, breakMinutes, setWorkMinutes, setBreakMinutes }} >
                    <Header />
                    {showSettings ? <Settings /> : <Primary />}
                </SettingsContext.Provider>
            </div>
        </main>
    );
}
export default App;
