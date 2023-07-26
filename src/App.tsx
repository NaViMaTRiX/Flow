import Titlebar from "./components/Titlebar";
import SettingsButton from "./components/Buttons/SettingsButton";
import ReloadButton from "./components/Buttons/ReloadButtoh";
import DiagrammButton from "./components/Buttons/DiagrammButton";
import PlayButton from "./components/Buttons/PlayButton";
import PauseButton from "./components/Buttons/PauseButton";
import Timer from "./components/Timer";
import { useState } from "react";


function App() {

    const setMinutes: any = 45;

    const [showSettings, setshowSettings] = useState(false);

    return (
        <main>
            <Titlebar />
            <div className="header">
                <div className="header-button">
                    <ReloadButton />
                </div>
                <div className="header-button">
                    <DiagrammButton />
                </div>
                <div className="header-button">
                    <SettingsButton />
                </div>
            </div>
            <div className="main">
                <p>Flow</p>
                <Timer value={setMinutes} />
                <div className="play">
                    <PlayButton />
                    <PauseButton />
                </div>
            </div>
        </main>
    );
}
export default App;
