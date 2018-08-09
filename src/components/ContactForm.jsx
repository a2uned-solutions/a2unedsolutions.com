import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';

class ContactForm extends Component {

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
        <Drawer anchor="right" open={this.state.right} onClose={this.toggleDrawer('right', false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('right', false)}
            onKeyDown={this.toggleDrawer('right', false)}
          >
            <form>
              <ul>
                <li>
                  <TextField
                    id="name"
                    label="Name"
                    value={this.state.name}
                    onChange={this.handleChange('name')}
                    margin="normal"
                  />
                </li>
              </ul>
            </form>
          </div>
        </Drawer>
      </aside>
    );
  }
}

export default ContactForm;
