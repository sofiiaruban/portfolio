import logo from './logo.png';
import './Header.css';
import React from 'react';

class Header extends React.Component {
    render(){
        return (
            <header className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <nav id = "about"className="navbar">
                <ul className= "nav-menu">
                    <li className="nav-item">
                        <a href="#navbar" className="nav-link">About me </a> 
                    </li>
                    <li className="nav-item">
                        <a href="#skills" className="nav-link">My skills</a> 
                    </li>
                    <li className="nav-item">
                        <a href="#projects" className="nav-link">Projects</a> 
                    </li>
                    <li className="nav-item">
                        <a href="#contact" className="nav-link">Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
        )
    }
}



export default Header;