//Player.js

import React, { useState, useRef, useEffect } from "react";
import PlayerDetails from "./PlayerDetails";
import PlayerControls from "./PlayerControls";

function Player(props) {
  const audioElement = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (isPlaying) {
      audioElement.current.play();
    } else {
      audioElement.current.pause();
    }
  });

  const SkipSong = (forwards = true) => {
    if (forwards) {
      props.setCurrentSongIndex(() => {
        let temp = props.currentSongIndex;
        temp++;

        if (temp > props.songs.length - 1) {
          temp = 0;
        }

        return temp;
      });
    } else {
      props.setCurrentSongIndex(() => {
        let temp = props.currentSongIndex;
        temp--;

        if (temp < 0) {
          temp = props.songs.length - 1;
        }

        return temp;
      });
    }
  };

  return (
    <React.Fragment>
      <div className="music-player">
        <audio
          src={props.songs[props.currentSongIndex].src}
          ref={audioElement}
        ></audio>
        <PlayerDetails song={props.songs[props.currentSongIndex]} />

        <PlayerControls
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          SkipSong={SkipSong}
        />

      </div>



      <div className="player-ui">
        <div className="nextsong">
          <strong>Upcoming Song: </strong>
        </div>

        <div className="nextsong-details">
          <img
            src={props.songs[props.nextSongIndex].img_src}
            alt={props.songs[props.nextSongIndex].title}
            style={{ width: "4em", height: "4em" }}
          />
          <p>
            <b>{props.songs[props.nextSongIndex].title} </b>&nbsp; by &nbsp;
            <b>{props.songs[props.nextSongIndex].artist}</b>

          </p>
        </div>
        
      </div>
      </React.Fragment>
  );
}
export default Player;