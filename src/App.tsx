import Titlebar from "./components/Titlebar";
import { useState } from "react";
import Primary from "./components/Primary";
import Header from "./components/Header";
import Settings from "./components/Settings";
import SettingsContext from "./components/SettingsContext";


function App() {

   const [showSettings, setShowSettings] = useState(true);
   const [workMinutes, setWorkMinutes] = useState<number | 0>(45);
   const [breakMinutes, setBreakMinutes] = useState<number | 0>(15);

   // function WorkMinMax(): number {
   //    workMinutes < 1 ? setWorkMinutes(1) : workMinutes;
   //    workMinutes > 120 ? setWorkMinutes(120) : workMinutes;
   //    return workMinutes;
   // }

   // function BreakMinMax(): number {
   //    breakMinutes < 1 ? setBreakMinutes(1) : breakMinutes;
   //    breakMinutes > 120 ? setBreakMinutes(120) : breakMinutes;
   //    return breakMinutes;
   // }

   return (
      <main>
         <Titlebar />
         <div className="prim">
            <SettingsContext.Provider value={{ workMinutes, breakMinutes, setWorkMinutes, setBreakMinutes }} >
               <Header />
               {showSettings ? <Settings /> : <Primary />}
            </SettingsContext.Provider>
         </div>
      </main>
   );
}
export default App;
