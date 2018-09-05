import React, { Component } from 'react';
import { Button, Drawer } from 'react-md';
import ContactForm from './ContactForm';

class ContactFormDrawer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      contactDrawer : false,
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

    const { contactDrawer, contactFormCompleted } = this.state;
    const { button, buttonLabel } = this.props;

    return (
      <div className="drawer-toggle">
        {contactDrawer && <div className="mask" onClick={this.toggleDrawer('contactDrawer', false)} />}
        {button && (
          <Button raised={true} primary onClick={this.toggleDrawer('contactDrawer', true)}>
            { buttonLabel || 'Contact Us' }
          </Button>
        )}
        {!button && (
        <span className="toggle-btn" onClick={this.toggleDrawer('contactDrawer', true)}>
          {!contactFormCompleted && ( <i className="fa fa-envelope"></i> )}
          {contactFormCompleted && (<i className="fa fa-check-circle" title="Thank you for contacting us"></i> )}
        </span>
        )}
        <Drawer
          position="right"
          className="drawer"
          visible={contactDrawer}
          onVisibilityChange={this.toggleDrawer('contactDrawer', false)}
          onClose={this.toggleDrawer('contactDrawer', false)}>
          <div className="form-drawer drawer-container">
            <i className="fa fa-times close" title="Close" onClick={this.toggleDrawer('contactDrawer', false)}></i>
            {!contactFormCompleted && <h2>How can we help?</h2>}
            <ContactForm
              toggleDrawer={this.toggleDrawer}
              toggleContactFormCompleted={this.toggleContactFormCompleted}
              contactFormCompleted={contactFormCompleted} />
          </div>
        </Drawer>
      </div>
    );
  }
}

export default ContactFormDrawer;
