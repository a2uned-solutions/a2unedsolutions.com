import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';
import logo from '../images/a2uned_solutions_logo.svg';

class Header extends Component {
  render() {
    return (
      <header className="app-header">
        <p className="branding">
          <Link to="/">
            <img src={logo} className="logo" alt="A2uned Solutions" />
          </Link>
        </p>
        <nav>
          <ul>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/clients">Clients</Link>
            </li>
            <li>
              <Link to="/about-us">About Us</Link>
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
