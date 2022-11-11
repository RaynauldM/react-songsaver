import React from "react";

import "./maincontent.css";

import DeleteBtn from "./DeleteBtn";

export default function PlaylistContainer(props) {
  return (
    <div className="playlist-container">
      <h2>My Playlist</h2>
      <ul className="list">
        {props.playList.map((e) => {
          return (
            <li key={Math.random()} id={e.id}>
              Title: {e.title} <br />
              Artist: {e.artist} <br />
              Genre: {e.genre} <br />
              Rating: {e.rating} {e.rating === "1" ? "star" : "stars"} <br />
              <DeleteBtn onclick={props.onclick} btnText="delete this song" />
            </li>
          );
        })}
      </ul>
      {props.playList.length > 0 ? (
        <DeleteBtn onclick={props.onclick} btnText="Delete all" />
      ) : (
        <p>It feels a bit empty in here...</p>
      )}
    </div>
  );
}
