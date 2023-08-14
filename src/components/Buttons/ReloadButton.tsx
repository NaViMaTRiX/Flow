import { useContext } from "react";
import SettingsContext from "../main/SettingsContext.tsx";

function ReloadButton(props: any) {
    const settingsInfo = useContext(SettingsContext);

    return (
        <button {...props}
            onClick={() => {
                settingsInfo.setSecondsLeft((settingsInfo.mode === 'work' ? settingsInfo.workMinutes : settingsInfo.breakMinutes) * 60)
            }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29" fill="none">
                <path d="M4.91428 15.7579C5.14246 17.4978 5.83997 19.1428 6.932 20.5165C8.02404 21.8901 9.4694 22.9406 11.1131 23.5553C12.7568 24.1699 14.5368 24.3255 16.2622 24.0054C17.9876 23.6853 19.5933 22.9016 20.9071 21.7383C22.221 20.575 23.1933 19.0759 23.72 17.402C24.2466 15.728 24.3077 13.9423 23.8965 12.2363C23.4854 10.5303 22.6177 8.96836 21.3863 7.71804C20.155 6.46773 18.6065 5.57619 16.907 5.13903C12.1957 3.9307 7.31887 6.35582 5.51845 10.875" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4.83333 4.83313V10.8748H10.875" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </button>
    );
}

export default ReloadButton;