import "./App.css";
import React, { useState } from "react";

function Header() {
  return (
    <div className="Header">
      <h1>Songsaver</h1>
    </div>
  );
}

function AddSongContainer({ sendData }) {
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
    // console.log("title: ", title);
    // console.log("artist: ", artist);
    // console.log("genre: ", genre);
    // console.log("rating: ", rating, " star(s)");

    sendData({
      title: title,
      artist: artist,
      genre: genre,
      rating: rating,
    });

    setTitle("");
    setArtist("");
    setGenre("pop");
    setRating("3");
  }

  return (
    <>
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
      <button onClick={handleBtn}>Add song</button>
    </>
  );
}

function PlaylistContainer(props) {
  return (
    <>
      <h2>my playlist</h2>
      <ul>
        {props.playList.map((e) => {
          return (
            <li key={Math.random()}>
              Title: {e.title} <br />
              Artist: {e.artist} <br />
              Genre: {e.genre} <br />
              Rating: {e.rating} star(s)
            </li>
          );
        })}
      </ul>
    </>
  );
}

function MainContent() {
  const [playList, setPlayList] = useState([]);

  function sendData(e) {
    let newList = playList.concat(e);
    setPlayList(newList);
  }

  return (
    <>
      <AddSongContainer sendData={sendData} />
      <PlaylistContainer playList={playList} />
    </>
  );
}

function App() {
  return (
    <div className="App">
      <Header />
      <MainContent />
    </div>
  );
}

export default App;
