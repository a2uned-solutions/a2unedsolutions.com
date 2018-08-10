import React from 'react';
import micah from '../../images/micah.jpg';
import nathan from '../../images/nathan.jpg';

const AboutUs = () => {
  return (
    <div className="page-content">
      <div className="page-intro">
        <p>Over ten years of experience in the Information Technology industry. We've worked with Fortune 500 companies, medium sized businesses, and Ma & Pa Shops. Founded in 2017</p>
        <p>We are a of team of two partners with a track record of delivering quality products & services for some amazing businesses. Modern design and development patterns make us tick. We also work with a variety of industry subject matter experts; Art Directors, Information Architects, DevOps, and Quality Assurance. All trusted individuals we've worked with for many years.</p>
        <p>There isn't much we can't handle or provide a solution for. We're willing to go the distance for great clients.</p>
      </div>
      <ul className="grid-list">
        <li>
          <div className="member-image">
            <img src={nathan} alt="Nathan Olmstead" />
          </div>
          <div className="member-info">
            <h2>Nathan Olmstead</h2>
            <h3>Partner</h3>
            <p>Designer, developer, and chef are his favorite hats to wear. Attempting to keep up with the pace of change Nathan is always eager to learn and peak in the next rabbit hole.</p>
            <ul className="social">
              <li>
                <a href="https://www.linkedin.com/in/nathanolmstead/" target="_blank" rel="noopener noreferrer"  title="LinkedIn">
                  <i className="fab fa-linkedin-in" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/nathanolmstead/" target="_blank" rel="noopener noreferrer"  title="LinkedIn">
                  <i className="fab fa-github"></i>
                </a>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <div className="member-image">
            <img src={micah} alt="Micah Lunt" />
          </div>
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
                <a href="https://www.linkedin.com/in/nathanolmstead/" target="_blank" rel="noopener noreferrer"  title="LinkedIn">
                  <i className="fab fa-github"></i>
                </a>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  )
};

export default AboutUs;
