import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class ContactForm extends Component {

  state = {
    name : '',
    company : '',
    email : '',
    message : ''
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
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
          <li>
            <TextField
              id="company"
              label="Company"
              value={this.state.company}
              onChange={this.handleChange('company')}
              margin="normal"
            />
          </li>
          <li>
            <TextField
              id="email"
              label="Email"
              value={this.state.email}
              onChange={this.handleChange('email')}
              margin="normal"
            />
          </li>
          <li>
            <TextField
              id="message"
              label="How can we help you?"
              value={this.state.message}
              onChange={this.handleChange('message')}
              margin="normal"
              multiline
              rowsMax="8"
              rows="4"
            />
          </li>
          <li>
            <Button variant="raised" color="primary">Submit</Button>
          </li>
        </ul>
      </form>
    );
  }
}

export default ContactForm;
