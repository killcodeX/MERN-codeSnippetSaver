import React,{useState} from 'react'
import styled from 'styled-components';
import {NavLinked} from './theme';
import Toggle from "react-toggle";
import "react-toggle/style.css";

export default function Header() {

    const [isDark, setIsDark] = useState(false)

    return (
        <NavLinked>
            <h2>Code Snippet Saver</h2>
            <Toggle
                className="DarkToggle"
                checked={isDark}
                onChange={(event) => setIsDark(event.target.checked)}
                icons={{ checked: "🔆", unchecked: "🌙" }}
                aria-label="Dark mode"
            />
        </NavLinked>
    )
}
