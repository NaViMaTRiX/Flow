import { appWindow } from "@tauri-apps/api/window";
import { useState } from "react";

function PinButton(props: any) {

    const [onTop, setStateOnTop] = useState<boolean>(false);

    function Switch(): boolean {
        setStateOnTop(!onTop);
        return onTop;
    }


    return (
        <button {...props} onClick={async () => await appWindow.setAlwaysOnTop(Switch())}>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M3.72 0.219986C3.8353 0.105187 3.9848 0.0309951 4.14596 0.00860267C4.30711 -0.0137897 4.47118 0.0168318 4.61341 0.0958479C4.75564 0.174864 4.86832 0.297989 4.93444 0.446649C5.00057 0.59531 5.01656 0.761442 4.98 0.919986L8.31 4.24999H10.794C11.908 4.24999 12.465 5.59599 11.678 6.38399L9.767 8.29499L13.487 12.43C13.8174 12.7973 14.0001 13.2739 14 13.768V14H13.767C13.2733 13.9999 12.7971 13.8171 12.43 13.487L8.295 9.76599L6.384 11.676C5.596 12.464 4.25 11.906 4.25 10.793V8.30999L0.92 4.97999C0.761257 5.01689 0.594815 5.00108 0.445859 4.93495C0.296903 4.86882 0.173541 4.75597 0.0944414 4.61348C0.0153416 4.47098 -0.0151912 4.3066 0.00746346 4.14521C0.0301181 3.98382 0.104727 3.83419 0.22 3.71899L0.823 3.11499L3.116 0.821986L3.72 0.218986V0.219986Z" fill="white" />
            </svg>
        </button>
    );
}

export default PinButton;