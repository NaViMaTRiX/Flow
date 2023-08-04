import { useContext, useState } from "react";
import SettingsContext from "./SettingsContext";

function Settings() {

   const settingsInfo = useContext(SettingsContext);
   const [stateWorkMinutes, setStateWorkMinutes] = useState<boolean>(false );
   const [stateBreakMinutes, setStateBreakMinutes] = useState<boolean>(false);


   function WorkMinMax(): number {
      settingsInfo.workMinutes < 1 ? settingsInfo.setWorkMinutes(1) : settingsInfo.workMinutes;
      settingsInfo.workMinutes > 120 ? settingsInfo.setWorkMinutes(120) : settingsInfo.workMinutes;
      return settingsInfo.workMinutes;
   }

   function BreakMinMax(): number {
      settingsInfo.breakMinutes < 1 ? settingsInfo.setBreakMinutes(1) : settingsInfo.breakMinutes;
      settingsInfo.breakMinutes > 120 ? settingsInfo.setBreakMinutes(120) : settingsInfo.breakMinutes;
      return settingsInfo.breakMinutes;
   }

   console.log("stateWorkMinutes",settingsInfo.stateWorkMinutes, "stateBreakMinutes",  settingsInfo.stateBreakMinutes, "stateChangeMinutes:", settingsInfo.stateChangeMinutes)

   settingsInfo.setStateChangeMinutes(stateWorkMinutes || stateBreakMinutes)

   return (
      <div className="settings">
         <label>work minutes: {settingsInfo.workMinutes}</label>
         <input
            type="number"
            placeholder="Numbers.."
            value={String(settingsInfo.workMinutes).padStart(1)}
            maxLength={3}
            max={120}
            min={1}
            tabIndex={1}
            onBlur={WorkMinMax}
            onChange={event => {settingsInfo.setWorkMinutes(Number(event.target.value));
               if(!(settingsInfo.workMinutes === event.target.value)) {
                  setStateWorkMinutes((): boolean => true)
               }
            }}

         />
         <span></span>

         <label>break minutes: {settingsInfo.breakMinutes}</label>
         <input
            type="number"
            placeholder="Numbers.."
            value={String(settingsInfo.breakMinutes).padStart(1)}
            maxLength={3}
            max={120}
            min={1}
            onBlur={BreakMinMax}
            onChange={event => { settingsInfo.setBreakMinutes(Number(event.target.value));
               if(!(settingsInfo.workMinutes === event.target.value)) {
                  setStateBreakMinutes(():boolean => true)
               }
            }}
         />
         <span></span>
      </div>
   );
}

export default Settings;