import React, { Component } from 'react';
import logo from '../images/a2uned_solutions_logo.svg';

class Header extends Component {
  render() {
    return (
      <header className="app-header">
        <p className="branding">
          <img src={logo} className="logo" alt="A2uned Solutions" />
        </p>
        <nav>
          <ul>
            <li>
              <a href={'/'}>Services</a>
            </li>
            <li>
              <a href={'/'}>Clients</a>
            </li>
            <li>
              <a href={'/'}>About Us</a>
            </li>
            <li>
              <a href={'/'}>
                <i className="fas fa-envelope"></i>
              </a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
