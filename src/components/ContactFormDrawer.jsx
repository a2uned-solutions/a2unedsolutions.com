import React, { Component } from 'react';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import ContactForm from './ContactForm';

class ContactFormDrawer extends Component {
  render() {

    const { toggleContactDrawer, toggleContactFormCompleted, contactDrawerOpen, contactFormCompleted } = this.props;

    return (
      <aside>
        <Button onClick={toggleContactDrawer('contactDrawerOpen', true)}>
          {!contactFormCompleted && ( <i className="fas fa-envelope"></i> )}
          {contactFormCompleted && (<i className="fas fa-check-circle" title="Thank you for contacting us"></i> )}
        </Button>
        <Drawer anchor="right" className="drawer" open={contactDrawerOpen} onClose={toggleContactDrawer('contactDrawerOpen', false)}>
          <div
            tabIndex={0}
            className="form-drawer drawer-container"
          >
            <i className="fas fa-times close" title="Close" onClick={toggleContactDrawer('contactDrawerOpen', false)}></i>
            {!contactFormCompleted && <h2>How can we help?</h2>}
            <ContactForm
              toggleContactDrawer={toggleContactDrawer}
              toggleContactFormCompleted={toggleContactFormCompleted}
              contactFormCompleted={contactFormCompleted} />
          </div>
        </Drawer>
      </aside>
    );
  }
}

export default ContactFormDrawer;
