import React from "react";

import TopBar from "./TopBar";
import Menu from "./Menu";
import Cards from "./Cards";

export default function App() {
  return (
    <div className="ui container" style={{ marginTop: "1.5vh" }}>
      <TopBar
        name="Alex Zhang"
        description="Current UNSW undergraduate student"
      />
      <Menu />
      <Cards />
    </div>
  );
}
