import React from "react";
import "./Cards.css"
import vid from "../Porsche 911.1 GT3 EDIT.mp4"
import HoverVideoPlayer from 'react-hover-video-player';
const Cards = () => {
  return (
    <div className="cards">
      <div className="card">
      <HoverVideoPlayer
      videoSrc={vid}
      pausedOverlay={
        <img
          src="https://w.forfun.com/fetch/00/00c59480ac71120379b0fa2b82a03968.jpeg"
          alt=""
          style={{
            // Make the image expand to cover the video's dimensions
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      }
    />
      </div>
      <div className="card">
      <HoverVideoPlayer
      videoSrc={vid}
      pausedOverlay={
        <img
          src="https://images.unsplash.com/photo-1580274455191-1c62238fa333?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cG9yc2NoZXxlbnwwfHwwfHw%3D&w=1000&q=80"
          alt=""
          style={{
            // Make the image expand to cover the video's dimensions
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      }
    />
      </div>
      <div className="card">
      <HoverVideoPlayer
      videoSrc={vid}
      pausedOverlay={
        <img
          src="https://w0.peakpx.com/wallpaper/215/305/HD-wallpaper-porsche-ice.jpg"
          alt=""
          style={{
            // Make the image expand to cover the video's dimensions
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      }
    />
      </div>
      <div className="card">
      <HoverVideoPlayer
      videoSrc={vid}
      pausedOverlay={
        <img
          src="https://wallpapercrafter.com/desktop/301749-Vehicles-Porsche-Cayman-GT4-Phone-Wallpaper.jpg"
          alt=""
          style={{
            // Make the image expand to cover the video's dimensions
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      }
    />
      </div>
    </div>
    
  );
};

export default Cards;
