import React from 'react';
import { NavLink } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <header className="App-header">
        <nav className="navbar navbar-default">
          <div className="main-nav-container-white">
            <div className="navbar-header">
              <NavLink className="nav-item nav-link" to="/">
                Jonny Pillar
              </NavLink>
            </div>
            <ul className="nav navbar-nav navbar-right">
              <NavLink activeClassName='is-active' className="nav-item nav-link" to="/now">
                Now
              </NavLink>
              <NavLink activeClassName='is-active' className="nav-item nav-link" to="/projects">
                Projects
              </NavLink>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
