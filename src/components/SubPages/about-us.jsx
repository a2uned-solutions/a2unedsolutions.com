import React, { Component } from "react";
import { ExpansionList, ExpansionPanel } from 'react-md';
import ContactFormDrawer from '../ContactForm/index';
import micah from '../../../static/assets/micah.jpg';
import michigan from '../../../static/assets/michigan.svg';
import nathan from '../../../static/assets/nathan.jpg';

class AboutUs extends Component {
  render() {
    return (
      <div className="page-content" id="main-content">
        <div className="page-intro">
          <p>Over ten years of experience in the Information Technology industry. We've worked with Fortune 500 companies, medium sized businesses, and Ma & Pa Shops.</p>
          <p>There isn't much we can't handle or provide a solution for. We're willing to go the distance for great clients.</p>
          <h2 className="made-in-michigan">
            <strong>
              <span>Founded in 2017. Proudly Made in Michigan</span>
              <img src={michigan} alt="Ann Arbor, Michigan" />
            </strong>
          </h2>
        </div>
        <ul className="grid-list">
          <li>
            <div className="member-image" style={{ backgroundImage: `url(${nathan})` }} />
            <div className="member-info">
              <h2>Nathan Olmstead</h2>
              <h3>Partner</h3>
              <p>Designer, developer, and chef are his favorite hats to wear. Attempting to keep up with the pace of change Nathan is always eager to learn and peak into the next rabbit hole.</p>
              <ul className="social">
                <li>
                  <a href="https://www.linkedin.com/in/nathanolmstead/" title="LinkedIn">
                    <i className="fa fa-linkedin" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/disruptingnate/" title="Twitter">
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/nathanolmstead" title="GitHub">
                    <i className="fa fa-github"></i>
                  </a>
                </li>
              </ul>
            </div>
            <ExpansionList>
              <ExpansionPanel className="expansion-panel" label="More About Nathan" footer={null}>
                <p className="expansion-details">
                  Designer, developer, and chef are his favorite hats to wear. Attempting to keep up with the pace of change Nathan is always eager to learn and peak into the next rabbit hole.
                </p>
              </ExpansionPanel>
            </ExpansionList>
          </li>
          <li>
            <div className="member-image" style={{ backgroundImage: `url(${micah})` }} />
            <div className="member-info">
              <h2>Micah Lunt</h2>
              <h3>Partner</h3>
              <p>Engineer, database wrangler, and point guard are just a few of his skills. A former project manager who developed a passion for learning new technologies and building things.</p>
              <ul className="social">
                <li>
                  <a href="https://www.linkedin.com/in/micah-lunt-8322a752/" title="LinkedIn">
                    <i className="fa fa-linkedin" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/micahlunt" title="GitHub">
                    <i className="fa fa-github"></i>
                  </a>
                </li>
              </ul>
            </div>
            <ExpansionList>
              <ExpansionPanel className="expansion-panel" label="More About Micah" footer={null}>
                <p className="expansion-details">
                  Engineer, database wrangler, and point guard are just a few of his skills. A former project manager who developed a passion for learning new technologies and building things.
                </p>
              </ExpansionPanel>
            </ExpansionList>
          </li>
        </ul>
        <div className="secondary-content">
          <p>
            We are a of team of two partners with a track record of delivering quality products & services for some amazing businesses. Modern design and development patterns make us tick. We also work with a variety of industry subject matter experts; Art Directors, Information Architects, DevOps, and Quality Assurance. All trusted individuals we've worked with for many years.
          </p>
          <ContactFormDrawer button="true" />
        </div>
      </div>
    );
  }
}

export default AboutUs;
