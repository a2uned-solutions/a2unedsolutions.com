import React, { Component } from 'react';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import ContactForm from './ContactForm';
import { NavLink } from 'react-router-dom'

class MobileMenu extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    const { toggleDrawer, toggleContactFormCompleted, mobileDrawer, contactFormCompleted } = this.props;

    return (
      <aside className="mobile-menu">
        <Button onClick={toggleDrawer('mobileDrawer', true)}>
          <i className="fas fa-ellipsis-v"></i>
        </Button>
        <Drawer anchor="right" className="drawer" open={mobileDrawer} onClose={toggleDrawer('mobileDrawer', false)}>
          <div
            tabIndex={0}
            className="nav-drawer drawer-container"
          >
            <i className="fas fa-times close" title="Close" onClick={toggleDrawer('mobileDrawer', false)}></i>
            <h2>Navigation</h2>
            <nav>
              <ul className="no-list" onClick={toggleDrawer('mobileDrawer', false)}>
                <li >
                  <NavLink to="/" exact={true} activeClassName="active">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/services" activeClassName="active">Services</NavLink>
                </li>
                <li>
                  <NavLink to="/clients" activeClassName="active">Clients</NavLink>
                </li>
                <li>
                  <NavLink to="/about-us" activeClassName="active">About Us</NavLink>
                </li>
              </ul>
            </nav>
            <h2>Contact Us</h2>
            <div className="contact-form-mobile form-drawer">
              <ContactForm
                toggleDrawer={toggleDrawer}
                toggleContactFormCompleted={toggleContactFormCompleted}
                contactFormCompleted={contactFormCompleted}
                isMobileForm={true} />
            </div>
          </div>
        </Drawer>
      </aside>
    );
  }
}

export default MobileMenu;
