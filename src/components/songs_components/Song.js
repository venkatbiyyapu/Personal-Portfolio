import React, { useState, useEffect, useRef } from 'react';
import {
  PlayCircleFill,
  PauseCircleFill,
  SkipStartFill,
  VolumeDownFill,
  VolumeUpFill,
  SkipEndFill,
} from 'react-bootstrap-icons';

const Player = ({
  currentSong,
  currentIndex,
  songs,
  nextSongHandler,
  prevSongHandler,
  timeUpdateHandler,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(1);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [totalDuration, setTotalDuration] = useState(0);
  const audioRef = useRef(null);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    audioRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    audioRef.current.volume = newVolume;
  };

  const increaseVolume = () => {
    setVolume((prevVolume) => {
      const newVolume = Math.min(prevVolume + 0.1, 1);
      audioRef.current.volume = newVolume;
      return newVolume;
    });
  };

  const decreaseVolume = () => {
    setVolume((prevVolume) => {
      const newVolume = Math.max(prevVolume - 0.1, 0);
      audioRef.current.volume = newVolume;
      return newVolume;
    });
  };

  const handleProgressChange = (e) => {
    const newProgress = parseFloat(e.target.value);
    setProgress(newProgress);
    const newTime = (newProgress / 100) * totalDuration;
    setCurrentTime(newTime);
    audioRef.current.currentTime = newTime;
  };

  const calculateProgress = () => {
    const currentTime = audioRef.current.currentTime;
    const duration = audioRef.current.duration;

    if (!isNaN(duration)) {
      const progressPercentage = (currentTime / duration) * 100;
      setProgress(progressPercentage);
      setCurrentTime(currentTime);
      setTotalDuration(duration);
    }
  };

  const handleSongEnd = () => {
    nextSongHandler();
  };

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, currentIndex]);

  useEffect(() => {
    audioRef.current.addEventListener('timeupdate', calculateProgress);
    audioRef.current.addEventListener('ended', handleSongEnd);

    return () => {
      audioRef.current.removeEventListener('timeupdate', calculateProgress);
      audioRef.current.removeEventListener('ended', handleSongEnd);
    };
  }, [currentIndex, songs]);

  useEffect(() => {
    audioRef.current.src = currentSong.source;
    if (isPlaying) {
      audioRef.current.play();
    }
  }, [currentSong]);

  const playPreviousSong = () => {
    const currentPlaybackTime = audioRef.current.currentTime;
    if (currentPlaybackTime <=2) {
      prevSongHandler();
      setIsPlaying(true);
    } else {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }
  };

  return (
    <div className="player-card">
      <img src={currentSong.img} alt={currentSong.title} className="song-image" />
      <div className="song-details">
        <h4>{currentSong.title}</h4>
        <p>{currentSong.artist}</p>
      </div>
      <audio ref={audioRef} src={currentSong.source}></audio>
      <div className="timer-indicator">
        <input
          type="range"
          min="0"
          max="100"
          step="0.1"
          value={progress}
          onChange={handleProgressChange}
          className="progress-bar"
        />
        <div className="time-info">
          <span>{formatTime(currentTime)}</span> / <span>{formatTime(totalDuration)}</span>
        </div>
      </div>
      <div className="player-controls">
        <button onClick={playPreviousSong}>
          <SkipStartFill />
        </button>

        <button onClick={togglePlay}>
          {isPlaying ? <PauseCircleFill /> : <PlayCircleFill />}
        </button>

        <button onClick={nextSongHandler}>
          <SkipEndFill />
        </button>
      </div>

      <div className="volume-control">
        <button onClick={decreaseVolume}>
          <VolumeDownFill />
        </button>
        <input
          type="range"
          min="0"
          max="1"
          step="0.1"
          value={volume}
          onChange={handleVolumeChange}
        />
        <button onClick={increaseVolume}>
          <VolumeUpFill />
        </button>
      </div>
    </div>
  );
};

const formatTime = (timeInSeconds) => {
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = Math.floor(timeInSeconds % 60);
  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
};
export default Player;
