import { createContext } from "react";

type SettingsContextType = {
    workMinutes: number | 0
    breakMinutes: number | 0
    secondsLeft: number | 0

    showSettings: boolean
    isPause: boolean
    stateChangeMinutes: boolean

    mode: string | null

    setWorkMinutes: (newValue: number) => void
    setSecondsLeft: (newValue: number) => void
    setBreakMinutes: (newValue: number) => void

    setShowSettings: (newValue: boolean) => void
    setIsPause: (newValue: boolean) => void
    setStateChangeMinutes: (newValue: boolean) => void

    setMode: (newValue: string) => void
}

const iSettingsContextState= {
    workMinutes: 45,
    breakMinutes: 45,
    secondsLeft: 0,

    showSettings: true,
    isPause: false,
    stateChangeMinutes: false,

    mode: "",

    setWorkMinutes: () => undefined,
    setBreakMinutes: () => undefined,
    setShowSettings: () => undefined,
    setIsPause: () => undefined,
    setSecondsLeft: () => undefined,
    setMode: () => undefined,
    setStateChangeMinutes: () => undefined,
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





