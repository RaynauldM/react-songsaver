import "./header.css";

import React from "react";
import NavBar from "./NavBar";

export default function Header() {
  return (
    <div className="Header">
      <h1>Songsaver</h1>
      <NavBar />
    </div>
  );
}
