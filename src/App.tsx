import CloseButton from "./components/CloseButton";
import DashButton from "./components/DashButton";
import PinButton from "./components/PinButton";
import ReloadButton from "./components/ReloadButtoh";
import DiagramButton from "./components/DiagramButton.tsx";
import TreeDotButton from "./components/TreeDotButton";
import PlayButton from "./components/PlayButton";
import PauseButton from "./components/PauseButton";
import Timer from "./components/Timer";

function App() {


    return (
        <main>
            <div data-tauri-drag-region className="titlebar">
                <div className="titlebar-button">
                    <CloseButton />
                </div>
                <div className="titlebar-button">
                    <DashButton />
                </div>
                <div className="titlebar-button">
                    <PinButton />
                </div>
            </div>
            <div className="header">
                <div className="header-button">
                    <ReloadButton />
                </div>
                <div className="header-button">
                    <DiagramButton />
                </div>
                <div className="header-button">
                    <TreeDotButton />
                </div>
            </div>
            <div className="main">
                <p>Flow</p>
                <Timer />
                <PlayButton />
                <PauseButton />
            </div>
        </main >
    );
}
export default App;
