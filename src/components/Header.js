import React, { Component } from 'react';
import Constants from '../Constants';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <header className="l-header">
        <div className="l-container">
          <div className="logo"><a href="/">{Constants.site_name}</a></div>
          <div className="ops">
            <a href="#">Me</a>
            <a href="#">Projects</a>
            <a href="#">Works</a>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
