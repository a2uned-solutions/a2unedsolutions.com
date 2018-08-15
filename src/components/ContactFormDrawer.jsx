import React, { Component } from 'react';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import ContactForm from './ContactForm';

class ContactFormDrawer extends Component {

  state = {
    name : 'Your name'
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  render() {
    return (
      <aside>
        <Button onClick={this.toggleDrawer('right', true)}>
          <i className="fas fa-envelope"></i>
        </Button>
        <Drawer anchor="right" className="drawer" open={this.state.right} onClose={this.toggleDrawer('right', false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('right', false)}
            onKeyDown={this.toggleDrawer('right', false)}
            className="form-drawer drawer-container"
          >
            <ContactForm />
          </div>
        </Drawer>
      </aside>
    );
  }
}

export default ContactFormDrawer;
