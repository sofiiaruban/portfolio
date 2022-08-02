import React from "react";
import "./Main.css";
import logo_app from "./logo_app.png";
import keyboard_app from "./keyboard_app.PNG";
import weather_app from "./weather_app.PNG";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import { FiMail } from "react-icons/fi";

class Main extends React.Component {
  render() {
    return (
      <main className="hero">
        <div id="about" className="about">
          <h1>Hello, my name is Sofia. I am a Front-End Developer</h1>
        </div>
        <div id="skills" className="skills">
          <h2>My skills</h2>
          <ul>
            <li>HTML</li>
            <li>CSS and CSS preprocessor &#40;Sass, SCSS&#41;</li>
            <li>JavaScript</li>
            <li>Bundler &#40;Gulp, Webpack&#41;</li>
            <li>Git</li>
            <li>Graphics Editor &#40;Photoshop, Figma&#41;</li>
            <li>React</li>
          </ul>
        </div>
        <div id="projects" className="projects">
          <h2>Projects</h2>
          <div className="gallery">
            <a href="https://sofiiaruban.github.io/adaptive-project/">
              <img src={logo_app}></img>
            </a>
            <a href="https://sofiiaruban.github.io/keyboard-app/">
              <img src={keyboard_app}></img>
            </a>
            <a href="https://sofiiaruban.github.io/weather-app/">
              <img src={weather_app}></img>
            </a>
          </div>
        </div>
        <div id="contact" className="contact">
          <h2>Contact</h2>
          <ul className="contact-list">
            <li>
              <BsFillTelephoneOutboundFill />
              <a href="tel:+38(093)6986247">+38(093)6986247</a>
            </li>
            <li>
              <FiMail />
              <a href="mailto:sofiiaruban@outlook.com">
                sofiiaruban@outlook.com
              </a>
            </li>
            <li></li>
          </ul>
        </div>
      </main>
    );
  }
}
export default Main;
