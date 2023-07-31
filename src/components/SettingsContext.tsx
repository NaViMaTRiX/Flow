import { createContext } from "react";

type SettingsContextType = {
    workMinutes: number | 0
    breakMinutes: number | 0
    showSettings: boolean
    isPause: boolean
    secondsLeft: number | 0
    mode: string | null

    setWorkMinutes: (newValue: number) => void
    setBreakMinutes: (newValue: number) => void
    setShowSettings: (newValue: boolean) => void
    setIsPause: (newValue: boolean) => void
    setSecondsLeft: (newValue: number) => void
    setMode: (newValue: string) => void
}

const iSettingsContextState = {
    workMinutes: 45,
    breakMinutes: 45,
    showSettings: true,
    isPause: false,
    secondsLeft: 0,
    mode: "",

    setWorkMinutes: () => undefined,
    setBreakMinutes: () => undefined,
    setShowSettings: () => undefined,
    setIsPause: () => undefined,
    setSecondsLeft: () => undefined,
    setMode: () => undefined
}

const SettingsContext = createContext<SettingsContextType>(iSettingsContextState)

export default SettingsContext;

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





