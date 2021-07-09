import React, { useState } from "react";
import { SideLinked } from "./theme";
import { useDispatch, useSelector } from "react-redux";
import { filterLanguage } from "../redux/actions/actions";
//import {filterLanguage} from '../redux/actions/actionContant'

export default function SideMenu() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.Codes.theme);
  let languages = [
    "All Languages",
    "Javascript",
    "CSS",
    "Java",
    "Python",
    "C++",
    "C#",
    "HTML",
    "Go",
    "Dart",
    "React",
  ];
  const [selected, setSelected] = useState(0);

  const handleFilter = (index) => {
    dispatch(filterLanguage(languages[index]));
    setSelected(index);
  };

  return (
    <SideLinked>
      <h4 className="side-menu">Languages</h4>
      {languages.map((item, index) => {
        return (
          <p
            key={index}
            className={
              selected === index
                ? theme
                  ? "side-menu-list active-white"
                  : "side-menu-list active-black"
                : "side-menu-list"
            }
            onClick={() => handleFilter(index)}
          >
            {item}
          </p>
        );
      })}
    </SideLinked>
  );
}
