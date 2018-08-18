import React, { Component } from 'react';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import Button from '@material-ui/core/Button';

class ContactForm extends Component {

  constructor() {
    super();
    this.state = {
      formData : {
        name: '',
        company: '',
        email: '',
        message: ''
      },
      submitted : false,
      submitting : false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { formData } = this.state;
    formData[event.target.name] = event.target.value;
    this.setState({ formData });
  }

  handleSubmit() {
    const { formData } = this.state;

    console.log(formData);

    this.setState({ submitted : true });

    // fetch('/api/form-submit-url', {
    //   method: 'POST',
    //   body: formData,
    // });
  }

  render() {
    const { formData, submitted } = this.state;
    return (
      <ValidatorForm
        onSubmit={this.handleSubmit}
        instantValidate={false}
      >
        <ul className="no-list form-list">
          <li>
            <TextValidator
              ref="name"
              label="Name"
              onChange={this.handleChange}
              name="name"
              value={formData.name}
              validators={['required']}
              errorMessages={['this field is required']}
              required={true}
              margin="normal"
            />
          </li>
          <li>
            <TextValidator
              ref="company"
              label="Company"
              onChange={this.handleChange}
              name="company"
              value={formData.company}
              margin="normal"
            />
          </li>
          <li>
            <TextValidator
              ref="email"
              label="Email"
              onChange={this.handleChange}
              name="email"
              value={formData.email}
              validators={['required', 'isEmail']}
              errorMessages={['this field is required', 'email is not valid']}
              required={true}
              margin="normal"
            />
          </li>
          <li>
            <TextValidator
              ref="message"
              label="How can we help?"
              onChange={this.handleChange}
              name="message"
              value={formData.message}
              validators={['required']}
              errorMessages={['this field is required']}
              multiline
              rowsMax="5"
              rows="3"
              required={true}
              margin="normal"
            />
          </li>
          <li className="submit-container">
            <Button variant="raised" color="primary" type="submit">Submit</Button>
          </li>
        </ul>
        {(submitted && 'Your form is submitted!') ||
        (!submitted && '')}
      </ValidatorForm>
    );
  }
}

export default ContactForm;
