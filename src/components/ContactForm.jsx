import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
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
      <form>
        <ul className="no-list form-list">
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
    );
  }
}

export default ContactForm;
