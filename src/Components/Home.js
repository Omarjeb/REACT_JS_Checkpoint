import React from "react";
import vd from "../Porsche 911.1 GT3 EDIT.mp4";
import "./Home.css";
import Typical from 'react-typical'
const Home = () => {
  return (
    <div className="home">
      <div className="overlay">
        <video src={vd} autoPlay loop muted />
        <div className="content">
        <p className="p-home">
            The Porsche 991 is the internal designation for the seventh
            generation of the Porsche 911 sports car, which was unveiled at the
            2011 Frankfurt Motor Show on 15 September as the replacement for the
       <Typical
        steps={['tunis', 1000, 'france', 500]}
        loop={Infinity}
        wrapper="p"
      />  997. The 991 was an entirely new platform
          </p>
          <div className="buttons-home">
            <button class="button-17" style={{ backgroundColor: "orange" }}>
              BUY NOW
            </button>
            <button class="button-17" style={{ color: "orange" }}>
              MORE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
