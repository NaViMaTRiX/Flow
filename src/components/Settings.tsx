import { useContext, useState } from "react";
import SettingsContext from "./SettingsContext";

function Settings() {

   const settingsInfo = useContext(SettingsContext);
   const [stateWorkMinutes, setStateWorkMinutes] = useState<boolean>(false );
   const [stateBreakMinutes, setStateBreakMinutes] = useState<boolean>(false);


   function WorkOrBreakMinMax(minutes: number, set: (a: number) => void) : number{
      minutes < 1 ? set(1) : minutes;
      minutes > 120 ? set(120) : minutes;
      return minutes;
   }

   // console.log(settingsInfo.stateChangeMinutes) true

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
            onBlur={() => WorkOrBreakMinMax(settingsInfo.workMinutes, settingsInfo.setWorkMinutes)}
            onChange={event => {settingsInfo.setWorkMinutes(Number(event.target.value));
               if(!(settingsInfo.workMinutes === Number(event.target.value))) {
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
            onBlur={() => WorkOrBreakMinMax(settingsInfo.breakMinutes, settingsInfo.setBreakMinutes)}
            onChange={event => { settingsInfo.setBreakMinutes(Number(event.target.value));
               if(!(settingsInfo.workMinutes === Number(event.target.value))) {
                  setStateBreakMinutes(():boolean => true)
               }
            }}
         />
         <span></span>
      </div>
   );
}

export default Settings;