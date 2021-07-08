import React, { useState } from "react";
import { NavLinked, HeaderSearch } from "./theme";
import Toggle from "react-toggle";
import "react-toggle/style.css";

export default function Header() {
  const [inputData, setInputData] = useState("");
  const [isDark, setIsDark] = useState(false);

  const handleThemeChange = (e) => {
    setIsDark(e.target.checked)
    console.log('theme change', isDark)
  }

  return (
    <NavLinked>
      <h2 style={{fontFamily: "Lobster"}}>Code Snippet Saver</h2>
      <HeaderSearch
        placeholder="Search title"
        value={inputData}
        onChange={(e) => setInputData(e.target.value)}
      />
      <Toggle
        className="DarkToggle"
        checked={isDark}
        onChange={(e) => handleThemeChange(e)}
        icons={{ checked: "🔆", unchecked: "🌙" }}
        aria-label="Dark mode"
      />
      <div className='user-Login'><i className="far fa-user-circle"></i></div>
    </NavLinked>
  );
}
