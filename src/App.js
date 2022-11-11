import React from "react";
import { Routes, Route } from "react-router-dom";

import MainPage from "./components/MainContentPage/MainPage";
import AboutUs from "./components/AboutUs/AboutUs";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="MainPage" element={<MainPage />} />
        <Route path="AboutUsContent" element={<AboutUs />} />
      </Routes>
    </>
  );
}

export default App;
