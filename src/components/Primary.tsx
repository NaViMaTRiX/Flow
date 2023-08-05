import { useContext } from "react";
import PauseButton from "./Buttons/PauseButton";
import PlayButton from "./Buttons/PlayButton";
import Timer from "./Timer";
import SettingsContext from "./SettingsContext";

function Primary() {

    const settingsInfo = useContext(SettingsContext);

    return (
        <div className="main">
            <p>Flow</p>
            <Timer />
            <div className="play">
                {settingsInfo.isPause
                    ? <PlayButton onClick={() => { settingsInfo.setIsPause(false); settingsInfo.setStateChangeMinutes(false)}} />
                    : <PauseButton onClick={() => { settingsInfo.setIsPause(true) }} />}
            </div>
        </div>
    );
}

export default Primary;