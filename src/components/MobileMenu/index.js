import React, { Component } from 'react';
import { Button, Drawer } from 'react-md';
import ContactForm from '../ContactForm/ContactForm';
import { Link } from "gatsby";

class MobileMenu extends Component {

  constructor(props) {
    super(props);
    this.state = {
      mobileDrawer : false,
      contactFormCompleted: false
    };
  }

  toggleContactFormCompleted = () => {
    this.setState({
      contactFormCompleted : !this.state.contactFormCompleted,
    });
  };

  toggleDrawer = (drawerName, open) => () => {
    this.setState({
      [drawerName]: open,
    });
  };

  render() {

    const { mobileDrawer, contactFormCompleted } = this.state;

    return (
      <aside className="mobile-menu">
        <Button flat onClick={this.toggleDrawer('mobileDrawer', true)}>
          <i className="fa fa-ellipsis-v"></i>
        </Button>
        <Drawer
          position="right"
          className="drawer"
          visible={mobileDrawer}
          onVisibilityChange={this.toggleDrawer('contactDrawer', false)}
          onClose={this.toggleDrawer('mobileDrawer', false)}>
          <div
            tabIndex={0}
            className="nav-drawer drawer-container"
          >
            <i className="fa fa-times close" title="Close" onClick={this.toggleDrawer('mobileDrawer', false)}></i>
            <h2>Navigation</h2>
            <nav>
              <ul className="no-list" onClick={this.toggleDrawer('mobileDrawer', false)}>
                <li >
                  <Link to="/" exact="true" activeClassName="active">Home</Link>
                </li>
                <li>
                  <Link to="/services" activeClassName="active">Services</Link>
                </li>
                <li>
                  <Link to="/clients" activeClassName="active">Clients</Link>
                </li>
                <li>
                  <Link to="/about-us" activeClassName="active">About Us</Link>
                </li>
              </ul>
            </nav>
            <h2>Contact Us</h2>
            <div className="contact-form-mobile form-drawer">
              <ContactForm
                toggleDrawer={this.toggleDrawer}
                toggleContactFormCompleted={this.toggleContactFormCompleted}
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
