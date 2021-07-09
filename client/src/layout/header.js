import React, { useState } from "react";
import { NavLinked, HeaderSearch } from "./theme";
import { useDispatch } from "react-redux";
import {themeChange} from '../redux/actions/actions'
import Toggle from "react-toggle";
import "react-toggle/style.css";

export default function Header() {
  const dispatch = useDispatch();
  const [inputData, setInputData] = useState("");
  const [isDark, setIsDark] = useState(false);

  const handleThemeChange = (e) => {
    setIsDark(e.target.checked)
    dispatch(themeChange())
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
