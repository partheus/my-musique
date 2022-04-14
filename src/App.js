import { useState, useEffect } from "react";
import "./App.css";
import Player from "./components/Player";
import React from "react";

const App = () => {
  const [songs] = useState([
    {
      title: "Monke",
      artist: "Parth",
      img_src: "./track_images/Album-Cover-Temi-Coker6.png",
      src: "./tracks/daft.wav",
    },
    {
      title: "Hurlywurly",
      artist: "Parth",
      img_src: "./track_images/Album-Cover-Temi-Coker3.png",
      src: "./tracks/bday.wav",
    },
    {
      title: "Janglebop",
      artist: "Parth",
      img_src: "./track_images/Album-Cover-Temi-Coker01.png",
      src: "./tracks/janglebop.wav",
    },
        {
      title: "Wavyexport",
      artist: "Parth",
      img_src: "./track_images/Album-Cover-Temi-Coker5.png",
      src: "./tracks/wavyexport.wav",
    },
    {
      title: "Synthpop",
      artist: "Parth",
      img_src: "./track_images/Album-Cover-Temi-Coker2.png",
      src: "./tracks/synthpop.wav",
    },
    {
      title: "Funkjam",
      artist: "Parth",
      img_src: "./track_images/Album-Cover-Temi-Coker4.png",
      src: "./tracks/funkjam.wav",
    },
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);

  return (
    <div className="App">
      <div className="navbar">
        <h1 className="pagetitle">Parth's Music</h1>
        <div className="navlinks">
          <a href="https://github.com/partheus/my-musique" target="_blank">view sauce/</a>
          <a href="https://parth.ninja" target="_blank">view main page/</a>
        </div>
        <p style="text-align: center;">Is your device volume high?</p>
      </div>
      <Player
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
        songs={songs}
      />
    </div>
  );
};

export default App;
