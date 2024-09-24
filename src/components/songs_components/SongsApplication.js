import React, { useState, useRef } from 'react';
import '../../App.css';
import Player from './Song';
import SongsData from "./SongsData"

function SongsApplication() {
  const [songs, setSongs] = useState(SongsData);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);

  const nextSongHandler = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex + 1) % songs.length);
  };

  const prevSongHandler = () => {
    setCurrentSongIndex((prevIndex) =>
      prevIndex === 0 ? songs.length - 1 : prevIndex - 1
    );
  };


  return (
    <div className="App">
      <Player
        currentSong={songs[currentSongIndex]}
        currentIndex={currentSongIndex}
        nextSongHandler={nextSongHandler}
        prevSongHandler={prevSongHandler}
        songs={songs}
      />
    </div>
  );
}

export default SongsApplication;
