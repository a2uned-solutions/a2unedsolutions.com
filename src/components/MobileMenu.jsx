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

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  render() {

    const { toggleContactFormCompleted, contactFormCompleted } = this.props;

    return (
      <aside className="mobile-menu">
        <Button onClick={this.toggleDrawer('right', true)}>
          <i className="fas fa-ellipsis-v"></i>
        </Button>
        <Drawer anchor="right" className="drawer" open={this.state.right} onClose={this.toggleDrawer('right', false)}>
          <div
            tabIndex={0}
            className="nav-drawer drawer-container"
          >
            <i className="fas fa-times close" title="Close" onClick={this.toggleDrawer('right', false)}></i>
            <h2>Navigation</h2>
            <nav>
              <ul className="no-list" onClick={this.toggleDrawer('right', false)}>
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
                toggleContactDrawer={this.toggleDrawer}
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
