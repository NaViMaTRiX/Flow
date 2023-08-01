import { useContext } from "react";
import SettingsContext from "./SettingsContext";

function Settings() {

   const settingsInfo = useContext(SettingsContext);

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
            onChange={event => settingsInfo.setWorkMinutes(Number(event.target.value))}

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
            onChange={event => settingsInfo.setBreakMinutes(Number(event.target.value))}
         />
         <span></span>
      </div>
   );
}

export default Settings;