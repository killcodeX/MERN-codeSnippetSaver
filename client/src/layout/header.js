import React, { useState } from "react";
import { NavLinked, HeaderSearch, SearchButton } from "./theme";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { themeChange, filterSearch, logOut } from "../redux/actions/actions";
import Toggle from "react-toggle";
import "react-toggle/style.css";

export default function Header() {
  const dispatch = useDispatch();
  const history = useHistory();
  const state = useSelector((state) => state.Auth);
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

  const handleLogOut = () => {
    dispatch(logOut())
    history.push('/login')
  }

  return (
    <NavLinked>
      <h2 style={{ fontFamily: "Lobster" }}>Code Snippet Saver</h2>
      {state.isAuthenticated == true ? (
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
      ) : null}
      <Toggle
        className="DarkToggle"
        checked={isDark}
        onChange={(e) => handleThemeChange(e)}
        icons={{ checked: "🔆", unchecked: "🌙" }}
        aria-label="Dark mode"
      />
      <div className="user-Login d-flex">
        {state.isAuthenticated == true ? (
          <>
            <div title={state.googleUser.name}>
              <img className='rounded-circle w-50' src={state.googleUser.imageUrl} alt={state.googleUser.givenName}/>
            </div>
            <div title="Logout" className="logoutArea" onClick={handleLogOut}>
              <i className="fas fa-sign-out-alt"></i>
            </div>
          </>
        ) : null}
      </div>
    </NavLinked>
  );
}
