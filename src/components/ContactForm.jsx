import React, { Component } from 'react';
import logo from '../images/a2uned_solutions_logo.svg';
import TextField from '@material-ui/core/TextField';

class ContactForm extends Component {

  state = {
    name : 'Your name'
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    return (
      <aside>
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
      </aside>
    );
  }
}

export default ContactForm;
