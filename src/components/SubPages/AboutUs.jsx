import React from 'react';

import Button from '@material-ui/core/Button';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import micah from '../../images/micah.jpg';
import nathan from '../../images/nathan.jpg';

const AboutUs = (props) => {
  return (
    <div className="page-content" id="main-content">
      <div className="page-intro">
        <p>Over ten years of experience in the Information Technology industry. We've worked with Fortune 500 companies, medium sized businesses, and Ma & Pa Shops. <strong>Founded in 2017.</strong></p>
        <p>There isn't much we can't handle or provide a solution for. We're willing to go the distance for great clients.</p>
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
                <a href="https://www.linkedin.com/in/nathanolmstead/" target="_blank" rel="noopener noreferrer"  title="LinkedIn">
                  <i className="fab fa-linkedin-in" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="https://twitter.com/disruptingnate/" target="_blank" rel="noopener noreferrer"  title="Twitter">
                  <i className="fab fa-twitter" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/nathanolmstead/" target="_blank" rel="noopener noreferrer"  title="GitHub">
                  <i className="fab fa-github"></i>
                </a>
              </li>
            </ul>
          </div>
          <ExpansionPanel className="expansion-panel">
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} className="expansion-title">More About Nathan</ExpansionPanelSummary>
            <ExpansionPanelDetails className="expansion-details">
              Designer, developer, and chef are his favorite hats to wear. Attempting to keep up with the pace of change Nathan is always eager to learn and peak into the next rabbit hole.
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </li>
        <li>
          <div className="member-image" style={{ backgroundImage: `url(${micah})` }} />
          <div className="member-info">
            <h2>Micah Lunt</h2>
            <h3>Partner</h3>
            <p>Engineer, database wrangler, and point guard are just a few of his skills. A former project manager who developed a passion for learning new technologies and building things.</p>
            <ul className="social">
              <li>
                <a href="https://www.linkedin.com/in/micah-lunt-8322a752/" target="_blank" rel="noopener noreferrer"  title="LinkedIn">
                  <i className="fab fa-linkedin-in" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="https://github.com/micahlunt" target="_blank" rel="noopener noreferrer"  title="GitHub">
                  <i className="fab fa-github"></i>
                </a>
              </li>
            </ul>
          </div>
          <ExpansionPanel className="expansion-panel">
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} className="expansion-title">More About Micah</ExpansionPanelSummary>
            <ExpansionPanelDetails className="expansion-details">
              Engineer, database wrangler, and point guard are just a few of his skills. A former project manager who developed a passion for learning new technologies and building things.
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </li>
      </ul>
      <div className="secondary-content">
        <p>We are a of team of two partners with a track record of delivering quality products & services for some amazing businesses. Modern design and development patterns make us tick. We also work with a variety of industry subject matter experts; Art Directors, Information Architects, DevOps, and Quality Assurance. All trusted individuals we've worked with for many years. <Button variant="contained" color="primary" onClick={props.toggleDrawer('contactDrawer', true)}>Contact Us</Button></p>
      </div>
    </div>
  )
};

export default AboutUs;
