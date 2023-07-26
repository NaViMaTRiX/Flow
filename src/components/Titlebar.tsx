import CloseButton from "./Buttons/CloseButton";
import DashButton from "./Buttons/DashButton";
import PinButton from "./Buttons/PinButton";

function Titlebar() {
    return (
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
    );
}

export default Titlebar;