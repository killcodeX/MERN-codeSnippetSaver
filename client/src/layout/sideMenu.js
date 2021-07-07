import React, { useState } from "react";
import { SideLinked } from "./theme";
import { useDispatch } from "react-redux";
import { filterLanguage } from "../redux/actions/actions";
//import {filterLanguage} from '../redux/actions/actionContant'

export default function SideMenu() {
  let languages = ["All Languages","Javascript", "CSS", "Java", "Python", "C++", "C#"];
  const [selected, setSelected] = useState(0);
  const dispatch = useDispatch();

  const handleFilter = index => {
    dispatch(filterLanguage(languages[index]));
    setSelected(index)
  };

  return (
    <SideLinked>
      <h4 className="side-menu">Languages</h4>
      {languages.map((item, index) => {
        return (
          <p
            className={
              selected == index ? "side-menu-list active" : "side-menu-list"
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
