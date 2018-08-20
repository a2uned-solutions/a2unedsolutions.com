import React, { Component } from 'react';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import CheckIcon from '@material-ui/icons/Check';

class ContactForm extends Component {

  submittingTimer = null;

  constructor(props) {
    super(props);
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
          this.submittingTimer = setTimeout(() => {
            this.setState({
              submitting: false,
              success: true,
            });
            this.props.toggleContactFormCompleted();
          }, 2000);
        }
      );
    }

    // fetch('/api/form-submit-url', {
    //   method: 'POST',
    //   body: JSON.stringify(formData),
    //   headers: {
    //     "Content-Type": "application/json",
    //     // "Content-Type": "application/x-www-form-urlencoded",
    //   }
    // }).then(res => res.json())
    //   .then(response => console.log('Success:', response))
    //   .catch(error => console.error('Error:', error));
  }

  render() {

    const { formData, success, error, submitting } = this.state;
    const { toggleDrawer, toggleContactFormCompleted, contactFormCompleted, isMobileForm } = this.props;

    return (
      <ValidatorForm
        onSubmit={this.handleSubmit}
        instantValidate={false}
      >
        <div className={`form-container success-${success} completed-${contactFormCompleted}`}>
          <div className="form-inner">
            {!contactFormCompleted && (
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
                  type="email"
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
                  <p>Error processing the form. Please try again.</p>
                )}
                {submitting && !error && (
                  <CircularProgress color={`primary`} size={40} />
                )}
              </li>
            </ul>
            )}
          </div>
          {((success && !error) || contactFormCompleted) && (
            <div className="success-message">
              <div className="success-check">
                <CheckIcon />
              </div>
              <div className="success-content">
                <h3>Thank You.</h3>
                <p>We'll get back to you as soon as possible.</p>
                <Button variant="raised" color="primary" onClick={toggleDrawer(isMobileForm ? 'mobileDrawer' : 'contactDrawer', false)}>Close</Button>
                {!success && (
                <div className="reset-form">
                  <Button variant="raised" color="secondary" onClick={toggleContactFormCompleted}>Reset Form</Button>
                </div>
                )}
              </div>
            </div>
          )}
        </div>
      </ValidatorForm>
    );
  }
}

export default ContactForm;
