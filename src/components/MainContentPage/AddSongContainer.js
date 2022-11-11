import React, { useState } from "react";

import "./maincontent.css";

export default function AddSongContainer({ sendData }) {
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [genre, setGenre] = useState("pop");
  const [rating, setRating] = useState("3");

  function handleChange(event) {
    const { name, value } = event.target;

    switch (name) {
      case "title":
        setTitle(value);

        break;
      case "artist":
        setArtist(value);

        break;
      case "genre":
        setGenre(value);
        break;
      case "rating":
        setRating(value);
        break;
    }
  }

  function handleBtn() {
    sendData({
      id: Math.random(),
      title: title,
      artist: artist,
      genre: genre,
      rating: rating,
    });

    setTitle("");
    setArtist("");
    setGenre("pop");
  }

  return (
    <div className="add-song-container">
      <input
        type="text"
        placeholder="title"
        name="title"
        onChange={handleChange}
        value={title}
      />
      <input
        type="text"
        placeholder="artist"
        name="artist"
        onChange={handleChange}
        value={artist}
      />
      <label>Choose a genre:</label>
      <select onChange={handleChange} name="genre" value={genre}>
        <option value="pop">Pop</option>
        <option value="rock">Rock</option>
        <option value="hiphop">Hiphop</option>
        <option value="jazz">Jazz</option>
        <option value="classical">Classical</option>
      </select>
      <h4>Select a rating: </h4>
      <label>
        <input type="radio" name="rating" value="1" onChange={handleChange} />1
        star
      </label>
      <label>
        <input type="radio" name="rating" value="2" onChange={handleChange} />2
        stars
      </label>
      <label>
        <input
          type="radio"
          name="rating"
          value="3"
          onChange={handleChange}
          defaultChecked={true}
        />
        3 stars
      </label>
      <label>
        <input type="radio" name="rating" value="4" onChange={handleChange} />4
        stars
      </label>
      <label>
        <input type="radio" name="rating" value="5" onChange={handleChange} />5
        stars
      </label>
      <button onClick={handleBtn} className="addBtn">
        Add song
      </button>
    </div>
  );
}
