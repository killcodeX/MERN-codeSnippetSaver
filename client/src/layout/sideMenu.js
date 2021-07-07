import React, { useState } from "react";
import { SideLinked } from "./theme";

export default function SideMenu() {
  return (
    <>
      <SideLinked>
        <h4 className="side-menu">Languages</h4>
        <p className="side-menu-list">JavaScript</p>
        <p className="side-menu-list">CSS</p>
        <p className="side-menu-list">Java</p>
        <p className="side-menu-list">Python</p>
        <p className="side-menu-list">C++</p>
        <p className="side-menu-list">C#</p>
      </SideLinked>
    </>
  );
}
