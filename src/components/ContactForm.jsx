import React, { Component } from 'react';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import CheckIcon from '@material-ui/icons/Check';

class ContactForm extends Component {

  timer = null;

  constructor() {
    super();
    this.state = {
      formData : {
        name: '',
        company: '',
        email: '',
        message: ''
      },
      submitting : false,
      success : false,
      error : false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  handleChange(event) {
    const { formData } = this.state;
    formData[event.target.name] = event.target.value;
    this.setState({ formData });
  }

  handleSubmit() {
    const { formData } = this.state;

    console.log(formData);

    if (!this.state.submitting) {
      this.setState(
        {
          submitting: true,
          success: false,
        },
        () => {
          this.timer = setTimeout(() => {
            this.setState({
              submitting: false,
              success: true,
            });
          }, 2000);
        },
      );
    }

    // fetch('/api/form-submit-url', {
    //   method: 'POST',
    //   body: formData,
    // });
  }

  render() {
    const { formData, success, error, submitting } = this.state;
    return (
      <ValidatorForm
        onSubmit={this.handleSubmit}
        instantValidate={false}
      >
        <div className={`form-container success-${success}`}>
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
                label="Message"
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
              {!success && !submitting && (
                <Button variant="raised" color="primary" type="submit">Submit</Button>
              )}
              {error && (
                <p>Error processing the form</p>
              )}
              {submitting && !error && (
                <CircularProgress color={`primary`} size={40} />
              )}
            </li>
          </ul>
        </div>
        {success && !error && (
          <div className="success-message">
            {/*<div className="success-content">*/}
              {/*<h3>Thank You.</h3>*/}
              {/*<p></p>*/}
            {/*</div>*/}
            <div className="success-check">
              <CheckIcon />
            </div>
          </div>
        )}
      </ValidatorForm>
    );
  }
}

export default ContactForm;
