import DiagrammButton from "./Buttons/DiagramButton";
import ReloadButton from "./Buttons/ReloadButtoh";
import SettingsButton from "./Buttons/SettingsButton";

function Header() {
   return (
      <div className="header">
         <div className="header-button">
            <ReloadButton />
         </div>
         <div className="header-button">
            <DiagrammButton />
         </div>
         <div className="header-button end">
            <SettingsButton />
         </div>
      </div>
   );
}

export default Header;