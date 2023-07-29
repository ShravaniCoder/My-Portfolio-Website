import "./Footer.css";
import React from "react";
import { FaGithub, FaHome, FaLinkedin, FaMailBulk } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <h4>About Me</h4>
          <p>
            "Hello World, I am a creative designer and developer, who aims to
            work with small businesses and marginalized communities to bring
            their passions to life. I offer both design and development services
            of web applications and websites! I have always been interested in
            web development and I have the necessary skills required for the
            role. I have a good understanding of HTML, CSS, JavaScript and
            React. I am currently improving my web app development skills by
            learning various new technologies."
          </p>
                  <div className="social">
                      <h4>
            <FaLinkedin
              size={20}
              style={{ color: "#fff", marginRight: "2rem" }}
            />
            <FaGithub
              size={20}
              style={{ color: "#fff", marginRight: "2rem" }}
                          />
                          </h4>
          </div>
        </div>

        <div className="right">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>Mumbai.</p>
              <p>INDIA.</p>
            </div>
          </div>
          <div className="email">
            <h3>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              shravanichendwankar@gmail.com
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
