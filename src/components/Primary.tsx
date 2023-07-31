import { useContext, useRef } from "react";
import PauseButton from "./Buttons/PauseButton";
import PlayButton from "./Buttons/PlayButton";
import Timer from "./Timer";
import SettingsContext from "./SettingsContext";

function Primary() {

    const settingsInfo = useContext(SettingsContext);
    const isPauseRef = useRef(settingsInfo.isPause);

    return (
        <div className="main">
            <p>Flow</p>
            <Timer />
            <div className="play">
                {settingsInfo.isPause
                    ? <PlayButton onClick={async () => { settingsInfo.setIsPause(false); isPauseRef.current = false }} />
                    : <PauseButton onClick={async () => { settingsInfo.setIsPause(true); isPauseRef.current = true }} />}
            </div>
        </div>
    );
}

export default Primary;