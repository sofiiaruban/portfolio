import logo from "./logo.png";
import "./Header.css";
import React from "react";

class Header extends React.Component {
  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <nav id="about" className="navbar">
          <ul className="nav-menu">
            <li className="nav-item">
              <a href="#navbar" className="nav-link">
                ABOUT ME
              </a>
            </li>
            <li className="nav-item">
              <a href="#skills" className="nav-link">
                MY SKILLS
              </a>
            </li>
            <li className="nav-item">
              <a href="#projects" className="nav-link">
                PROJECTS
              </a>
            </li>
            <li className="nav-item">
              <a href="#contacts" className="nav-link">
                CONTACTS
              </a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
