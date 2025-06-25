import React from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Main/Main";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <div>
      <div className="gemini-wrapper">
        {/* === Header === */}
        <Header/>
        {/* === Sidebar === */}
        
        <Sidebar/>
        {/* === Chat area === */}
        <Main/>
      </div>
    </div>
  );
};

export default App;
