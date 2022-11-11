import React, { useState } from "react";

import "./maincontent.css";

import AddSongContainer from "./AddSongContainer";
import PlaylistContainer from "./PlaylistContainer";

export default function MainContent() {
  const [playList, setPlayList] = useState([]);

  function sendData(e) {
    let newList = playList.concat(e);
    setPlayList(newList);
  }

  function onclick(event) {
    let self = event.target;
    if (self.textContent === "Delete all") {
      setPlayList([]);
    } else {
      let parentOfSelf = self.parentNode;
      let parentId = parentOfSelf.id;

      let newPlayList = playList.filter((i) => i.id != parentId);
      setPlayList(newPlayList);
    }
  }

  return (
    <div className="main-container">
      <AddSongContainer sendData={sendData} />
      <PlaylistContainer playList={playList} onclick={onclick} />
    </div>
  );
}
