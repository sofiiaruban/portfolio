import React from "react";
import "./Main.css";
import logo_app from "./logo_app.png";
import keyboard_app from "./keyboard_app.png";
import todolist from "./todolist.png";
import calendar_app from "./calendar_app.png";
import rick_and_morty from "./rick-and-morty.png";
import password_checker from "./password_checker.png";
import job_app from "./job_app.png";
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
            <li>TypeScript</li>
            <li>React, Redux</li>
            <li>Bootstrap, MUI, Tailwind</li>
            <li>Git</li>
            <li>Graphics Editor &#40;Photoshop, Figma&#41;</li>
          </ul>
        </div>
        <div id="projects" className="projects">
          <h2>Projects</h2>
          <div className="gallery">
            <a href="https://sofiiaruban.github.io/adaptive-project/">
              <img src={logo_app} alt="project"></img>
            </a>
            <a href="https://sofiiaruban.github.io/keyboard-app/">
              <img src={keyboard_app} alt="project"></img>
            </a>
            <a href="https://sofiiaruban.github.io/todo-list/">
              <img src={todolist} alt="project"></img>
            </a>
            <a href="https://sofiiaruban.github.io/meeting-booking-app/">
              <img src={calendar_app} alt="project"></img>
            </a>
            <a href="https://sofiiaruban.github.io/rick-and-morty-app/">
              <img src={rick_and_morty} alt="project"></img>
            </a>
            <a href="https://sofiiaruban.github.io/passwords-strength-checker">
              <img src={password_checker} alt="project"></img>
            </a>
            <a href="https://sofiiaruban.github.io/job-app">
              <img src={job_app} alt="project"></img>
            </a>
          </div>
        </div>
        <div id="contacts" className="contact">
          <h2>Contacts</h2>
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
