import { useContext } from "react";
import PauseButton from "./Buttons/PauseButton";
import PlayButton from "./Buttons/PlayButton";
import Timer from "./Timer";
import SettingsContext from "./SettingsContext";

function Primary() {

    const settingsInfo = useContext(SettingsContext);
    const titleString: string = settingsInfo.mode === "work" ? "Work Minutes" : "Break Minutes"

    return (
        <div className="main">
            <p>Flow</p>
            <p className="mode" style={{color: settingsInfo.mode === "work" ? "yellow" : "green"}}>{titleString}</p>
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