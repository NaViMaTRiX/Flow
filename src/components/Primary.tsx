import { useContext } from "react";
import PauseButton from "./Buttons/PauseButton";
import PlayButton from "./Buttons/PlayButton";
import Timer from "./Timer";
import SettingsContext from "./SettingsContext";

function Primary() {

    const setMinutes: any = 45;

    const settingsInfo = useContext(SettingsContext);

    return (
        <div className="main">
            <p>Flow</p>
            <Timer value={setMinutes} />
            <div className="play">
                {settingsInfo.isPause ?
                    <PlayButton onClick={() => settingsInfo.setIsPause(false)} /> :
                    <PauseButton onClick={() => settingsInfo.setIsPause(true)} />}
            </div>
        </div>
    );
}

export default Primary;