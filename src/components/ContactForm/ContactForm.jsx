import React, { Component } from 'react';
import { Button, CircularProgress, FontIcon, TextField } from 'react-md';
import ReCAPTCHA from "react-google-recaptcha";

class ContactForm extends Component {

  submittingTimer = null;

  constructor(props) {
    super(props);
    this.state = {
      formData : {
        name: '',
        company: '',
        email: '',
        message: '',
      },
      recaptchaToken: false,
      submitting : false,
      success : false,
      error : false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onCaptchaChange = this.onCaptchaChange.bind(this);
  }

  componentDidMount() {
    this.intervalId = setInterval(this.closingTimer.bind(this), 1000);
  }

  componentWillUnmount() {
    clearTimeout(this.submittingTimer);
    clearInterval(this.intervalId);
  }

  closingTimer() {
    this.setState({
      timeToClosing: this.state.timeToClosing - 1
    })
    if(this.state.timeToClosing < 1) {
      clearInterval(this.intervalId);
    }
  }

  handleChange(value, event) {
    const { formData } = this.state;
    formData[event.target.name] = value;
    this.setState({ formData });
  }

  onCaptchaChange(value) {
    // TODO: This needs to be handled better
    this.setState({ recaptchaToken: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { formData } = this.state;

    if (!this.state.submitting) {
      this.setState(
        {
          submitting: true,
          success: false,
        },
        () => {
          this.submittingTimer = setTimeout(() => {
            fetch('https://api.formbucket.com/f/buk_CYpxYEp4NrEWzTwbSKA2wyYN', {
              method: 'POST',
              body: JSON.stringify(formData),
              headers: {
                "Content-Type": "application/json",
              }
            }).then(res => res.json())
              .then(response => {
                this.setState({
                  submitting: false,
                  success: true,
                  error: false
                });
                this.props.toggleContactFormCompleted();
                // console.log(response);
              })
              .catch(error => {
                this.setState({
                  submitting: false,
                  error: true,
                });
                // console.error(error)
              });
          }, 800);
        }
      );
    }
  }

  render() {

    const { formData, success, error, submitting, recaptchaToken } = this.state;
    const { toggleDrawer, toggleContactFormCompleted, contactFormCompleted, isMobileForm } = this.props;

    return (
      <form onSubmit={this.handleSubmit}>
        <div className={`form-container success-${success} completed-${contactFormCompleted}`}>
          <div className="form-inner">
            {!contactFormCompleted && (
              <ul className="no-list form-list">
                <li>
                  <TextField
                    id="name"
                    label="Name"
                    onChange={this.handleChange}
                    name="name"
                    value={formData.name}
                    errorText={'this field is required'}
                    required={true}
                    margin="normal"
                  />
                </li>
                <li>
                  <TextField
                    id="company"
                    label="Company"
                    onChange={this.handleChange}
                    name="company"
                    value={formData.company}
                    margin="normal"
                  />
                </li>
                <li>
                  <TextField
                    id="email"
                    label="Email"
                    onChange={this.handleChange}
                    name="email"
                    value={formData.email}
                    errorText={'this field is required'}
                    required={true}
                    margin="normal"
                    type="email"
                  />
                </li>
                <li>
                  <TextField
                    id="message"
                    label="Message"
                    onChange={this.handleChange}
                    name="message"
                    value={formData.message}
                    errorText={'this field is required'}
                    multiline="true"
                    rows={3}
                    required={true}
                    margin="normal"
                  />
                </li>
                <li>
                  <ReCAPTCHA
                    sitekey="6LeO5UIUAAAAACCsW6qumjMSNLAouM1y9bdEDJnS"
                    onChange={this.onCaptchaChange}
                  />
                </li>
                <li className="submit-container">
                  {!success && !submitting && (
                    <Button raised={true} primary type="submit" disabled={!recaptchaToken}>Submit</Button>
                  )}
                  {error && (
                    <p className="error">The message didn't go through. Please try again.</p>
                  )}
                  {submitting && !error && (
                    <CircularProgress id="progress-circle" color={`primary`} size={40} />
                  )}
                </li>
              </ul>
            )}
          </div>
          {((success && !error) || contactFormCompleted) && (
            <div className="success-message">
              <div className="success-check">
                <FontIcon>check</FontIcon>
              </div>
              <div className="success-content">
                <h3>Thank You.</h3>
                <p>We'll get back to you as soon as possible.</p>
                <Button raised={true} primary onClick={toggleDrawer(isMobileForm ? 'mobileDrawer' : 'contactDrawer', false)}>Close</Button>
                {!success && (
                  <div className="reset-form">
                    <Button raised={true} secondary onClick={toggleContactFormCompleted}>Reset Form</Button>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </form>
    );
  }
}

export default ContactForm;
