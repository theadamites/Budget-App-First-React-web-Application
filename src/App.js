import React, { useState } from "react";
import User from "./user";
import Admin from "./admin";
import ValidLog from "./userLogin";
import "./styles.css";

export default function App() {
  const [currentView, setCurrentView] = useState("none"); // Initial view is "none"

  const switchToView = (view) => {
    setCurrentView(view);
  };

  return (
    <div className="App">
      <div >
        <button onClick={() => switchToView("ValidLog")}>Profile Login</button>
        <button onClick={() => switchToView("user")}>Create an Account</button>
        <button onClick={() => switchToView("admin")}>Auto Admin View</button>
      </div>

      {currentView === "user" ? <User /> : null}
      {currentView === "admin" ? <Admin /> : null}
      {currentView === "ValidLog" ? <ValidLog /> : null}
    </div>
  );
}
