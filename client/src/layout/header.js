import React, { useState } from "react";
import { NavLinked, HeaderSearch, SearchButton } from "./theme";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { themeChange, filterSearch } from "../redux/actions/actions";
import Toggle from "react-toggle";
import "react-toggle/style.css";

export default function Header() {
  const dispatch = useDispatch();
  const [inputData, setInputData] = useState("");
  const [isDark, setIsDark] = useState(false);

  const handleThemeChange = (e) => {
    setIsDark(e.target.checked);
    dispatch(themeChange());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputData != "") {
      dispatch(filterSearch(inputData));
      setInputData("");
    } else {
      alert("Enter some text !!");
    }
  };

  return (
    <NavLinked>
      <h2 style={{ fontFamily: "Lobster" }}>Code Snippet Saver</h2>
      <form className="searchbar" onSubmit={handleSubmit}>
        <HeaderSearch
          placeholder="Search title ...."
          value={inputData}
          onChange={(e) => setInputData(e.target.value)}
        />
        <SearchButton type="submit">
          <i class="fas fa-search"></i>
        </SearchButton>
      </form>
      <Toggle
        className="DarkToggle"
        checked={isDark}
        onChange={(e) => handleThemeChange(e)}
        icons={{ checked: "🔆", unchecked: "🌙" }}
        aria-label="Dark mode"
      />
      <div className="user-Login">
        <i className="far fa-user-circle"></i>
        <i className="fas fa-sign-out-alt"></i>
      </div>
    </NavLinked>
  );
}
