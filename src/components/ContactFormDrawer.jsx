import React, { Component } from 'react';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import ContactForm from './ContactForm';

class ContactFormDrawer extends Component {
  render() {

    const { toggleDrawer, toggleContactFormCompleted, contactDrawer, contactFormCompleted } = this.props;

    return (
      <aside>
        <Button onClick={toggleDrawer('contactDrawer', true)}>
          {!contactFormCompleted && ( <i className="fas fa-envelope"></i> )}
          {contactFormCompleted && (<i className="fas fa-check-circle" title="Thank you for contacting us"></i> )}
        </Button>
        <Drawer anchor="right" className="drawer" open={contactDrawer} onClose={toggleDrawer('contactDrawer', false)}>
          <div
            tabIndex={0}
            className="form-drawer drawer-container"
          >
            <i className="fas fa-times close" title="Close" onClick={toggleDrawer('contactDrawer', false)}></i>
            {!contactFormCompleted && <h2>How can we help?</h2>}
            <ContactForm
              toggleDrawer={toggleDrawer}
              toggleContactFormCompleted={toggleContactFormCompleted}
              contactFormCompleted={contactFormCompleted} />
          </div>
        </Drawer>
      </aside>
    );
  }
}

export default ContactFormDrawer;
