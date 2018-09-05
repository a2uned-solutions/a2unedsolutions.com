import React, { Component } from 'react';
import { Link } from "gatsby";
import logo from '../../../static/assets/a2uned_solutions_logo.svg';
import ContactFormDrawer from '../ContactForm/index';
import MobileMenu from '../MobileMenu';

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
              <Link to="/services" activeClassName="active">Services</Link>
            </li>
            <li>
              <Link to="/clients" activeClassName="active">Clients</Link>
            </li>
            <li>
              <Link to="/about-us" activeClassName="active">About Us</Link>
            </li>
            <li>
              <ContactFormDrawer button={false} />
            </li>
          </ul>
        </nav>
        <MobileMenu />
      </header>
    );
  }
}

export default Header;
