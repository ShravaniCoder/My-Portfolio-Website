import './Heroimg.css';
import IntroImg from "../assets/intro-bg.jpg";
import React from 'react';
import { Link } from 'react-router-dom';

function Heroimg() {
    return (
      <div className="hero">
        <div className="mask">
          <img className="intro-img" src={IntroImg} alt="IntroImg" />
        </div>
        <div className="content">
          <p>HI, I'M Shravani Chendwankar.</p>
          <h1>Web Developer</h1>
          <div>
            <Link to="/project" className="btn">
              Projects
            </Link>
            <Link to="/contact" className="btn btn-light">
              Contact
            </Link>
          </div>
        </div>
      </div>
    );
}

export default Heroimg;