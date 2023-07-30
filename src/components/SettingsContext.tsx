import { createContext } from "react";

type SettingsContextType = {
    workMinutes: number | 0,
    breakMinutes: number | 0,

    setWorkMinutes: React.Dispatch<React.SetStateAction<number | null>>
    setBreakMinutes: React.Dispatch<React.SetStateAction<number | null>>
}

const iSettingsContextState = {
    workMinutes: 45,
    breakMinutes: 15,

    setWorkMinutes: () => { },
    setBreakMinutes: () => { }
}

const SettingsContext = createContext<SettingsContextType>(iSettingsContextState)

// const SettingsContext = createContext<{
//     workMinutes: number | 0,
//     breakMinutes: number | 0,

//     setWorkMinutes: (newValue: number) => void,
//     setBreakMinutes: (newValue: number) => void
// }>({
//     workMinutes: 0,
//     breakMinutes: 0,

//     setWorkMinutes: () => undefined,
//     setBreakMinutes: () => undefined,
// });

export default SettingsContext;



