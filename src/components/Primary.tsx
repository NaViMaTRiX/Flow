import PauseButton from "./Buttons/PauseButton";
import PlayButton from "./Buttons/PlayButton";
import Timer from "./Timer";

function Primary() {

    const setMinutes: any = 45;

    return (
        <div className="main">
            <p>Flow</p>
            <Timer value={setMinutes} />
            <div className="play">
                <PlayButton />
                <PauseButton />
            </div>
        </div>
    );
}

export default Primary;