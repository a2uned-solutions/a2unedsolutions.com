import React, { Component } from 'react';
import {
  Link,
  NavLink
} from 'react-router-dom';
import logo from '../images/a2uned_solutions_logo.svg';
import ContactForm from './ContactForm';
import MobileMenu from './MobileMenu';

class Header extends Component {
  render() {
    return (
      <header className="app-header">
        <p className="branding">
          <Link to="/">
            <img src={logo} className="logo" alt="A2uned Solutions" />
          </Link>
        </p>
        <a href="#main-content" className="skip-nav">Go to main page content</a>
        <nav className="desktop-nav">
          <ul>
            <li>
              <NavLink to="/services" activeClassName="active">Services</NavLink>
            </li>
            <li>
              <NavLink to="/clients" activeClassName="active">Clients</NavLink>
            </li>
            <li>
              <NavLink to="/about-us" activeClassName="active">About Us</NavLink>
            </li>
            {/*<li>*/}
              {/*<ContactForm/>*/}
            {/*</li>*/}
          </ul>
        </nav>
        <MobileMenu/>
      </header>
    );
  }
}

export default Header;
