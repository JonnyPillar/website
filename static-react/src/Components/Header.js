import React from 'react';
import {  Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <header className="App-header">
        <Link to="/">
          <h1 className="App-title">Jonny Pillar</h1>
        </Link>
        <Link to="/now">
          Now
        </Link>
        <Link to="/projects">
          Projects
        </Link>
      </header>
    );
  }
}

export default Header;
