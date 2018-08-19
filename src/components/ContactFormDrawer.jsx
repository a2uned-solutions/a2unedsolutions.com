import React, { Component } from 'react';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import ContactForm from './ContactForm';

class ContactFormDrawer extends Component {
  render() {

    const { toggleContactDrawer, contactDrawerOpen } = this.props;

    return (
      <aside>
        <Button onClick={toggleContactDrawer('contactDrawerOpen', true)}>
          <i className="fas fa-envelope"></i>
        </Button>
        <Drawer anchor="right" className="drawer" open={contactDrawerOpen} onClose={toggleContactDrawer('contactDrawerOpen', false)}>
          <div
            tabIndex={0}
            className="form-drawer drawer-container"
          >
            <h2>How can we help?</h2>
            <ContactForm toggleContactDrawer={toggleContactDrawer} />
          </div>
        </Drawer>
      </aside>
    );
  }
}

export default ContactFormDrawer;
