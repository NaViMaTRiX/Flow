import DiagrammButton from "../Buttons/DiagramButton.tsx";
import ReloadButton from "../Buttons/ReloadButton.tsx";
import SettingsButton from "../Buttons/SettingsButton.tsx";

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