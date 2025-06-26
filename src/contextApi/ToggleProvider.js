import { useState } from "react";
import { ToggleContext } from "./ToggleContext";

const ToggleProvider = ({ children }) => {
    const [toggle, setToggle] = useState(false);
    const toggleSidebar = () => {
        setToggle(!toggle);
    }; 
    return (
    <ToggleContext.Provider value={{toggle, setToggle, toggleSidebar}}>
      {children}
    </ToggleContext.Provider>
  );
}