import React, { useState } from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

export const RootLayout = () => {
  const [mode, setMode] = useState("light");
  const toggle = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#343a40";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <div>
      <Navbar title="Grammarly" home="Home" mode={mode} toggle={toggle} />
      <Outlet context={[mode, setMode]} />
       </div>
  );
};
