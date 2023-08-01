import CloseButton from "./Buttons/CloseButton";
import DashButton from "./Buttons/DashButton";
import PinButton from "./Buttons/PinButton";
import { appWindow } from "@tauri-apps/api/window";

function Titlebar() {

    const isFocus = appWindow.isFocused();
    console.log(isFocus)
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
        </div >
    );
}

export default Titlebar;