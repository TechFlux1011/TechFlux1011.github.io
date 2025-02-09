// src/components/Header.js
import React from 'react';
import './Header.css'; // Create a corresponding CSS file for styles

const Header = () => {
  return (
    <header className="header">
      <h1>Hi, I’m Marshall Morrison</h1>
      <p>A Full-Stack Software Developer</p>
      <nav>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
