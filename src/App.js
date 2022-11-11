import "./App.css";
import React, { useState } from "react";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function AboutUs() {
  return (
    <>
      <Header />
      <AboutUsContent />
    </>
  );
}

function AboutUsContent() {
  return (
    <>
      <h1>About me and us and everyone!</h1>
    </>
  );
}

function NavBar() {
  return (
    <nav>
      <Link to="/MainPage">Main</Link> |{" "}
      <Link to="/AboutUsContent">About us</Link>
    </nav>
  );
}

function Header() {
  return (
    <div className="Header">
      <h1>Songsaver</h1>
      <NavBar />
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

function DeleteBtn({ onclick, btnText }) {
  return <button onClick={onclick}>{btnText}</button>;
}

function PlaylistContainer(props) {
  return (
    <>
      <h2>my playlist</h2>
      <ul>
        {props.playList.map((e) => {
          return (
            <li key={Math.random()} id={e.id}>
              Title: {e.title} <br />
              Artist: {e.artist} <br />
              Genre: {e.genre} <br />
              Rating: {e.rating} star(s) <br />
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
    </>
  );
}

function MainContent() {
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
    <>
      <AddSongContainer sendData={sendData} />
      <PlaylistContainer playList={playList} onclick={onclick} />
    </>
  );
}

function MainPage() {
  return (
    <>
      <Header />
      <MainContent />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="MainPage" element={<MainPage />} />
        <Route path="AboutUsContent" element={<AboutUs />} />
      </Routes>
      <div className="App"></div>
    </Router>
  );
}

export default App;
