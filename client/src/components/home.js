import React from "react";
import { Header, SideMenu } from '../layout';
import AllSnippets from "./allSnippets";

export default function Home() {
  return (
    <React.Fragment>
      <SideMenu />
      <AllSnippets />
    </React.Fragment>
  );
}
