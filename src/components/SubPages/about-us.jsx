import React, { Component } from "react";
import { ExpansionList, ExpansionPanel } from 'react-md';
import ContactFormDrawer from '../ContactForm/index';
import bryan from '../../../static/assets/bryan.jpg';
import micah from '../../../static/assets/micah.jpg';
import michigan from '../../../static/assets/michigan.svg';
import nathan from '../../../static/assets/nathan.jpg';
import contractors from '../../../static/assets/contractors.jpg';

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
              <p>Designer, Developer, and Chef are his favorite hats to wear. Attempting to keep up with the pace of change Nathan is always eager to learn and peak into the next rabbit hole. He's built more UI configurators than you count on one hand.</p>
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
                  Designer, Developer, and Chef are his favorite hats to wear. Attempting to keep up with the pace of change Nathan is always eager to learn and peak into the next rabbit hole.
                </p>
              </ExpansionPanel>
            </ExpansionList>
          </li>
          <li>
            <div className="member-image" style={{ backgroundImage: `url(${micah})` }} />
            <div className="member-info">
              <h2>Dan Shields</h2>
              <h3>Partner</h3>
              <p>Technical Delivery Leader, Solution Architect, and Football Coach are some of this code whisperers skills. Dan has developed, managed, and delivered multiple large scale ecommerce builds and complex custom applications.</p>
              <ul className="social">
                <li>
                  <a href="https://www.linkedin.com/in/danshields/" title="LinkedIn">
                    <i className="fa fa-linkedin" aria-hidden="true"></i>
                  </a>
                </li>
              </ul>
            </div>
            <ExpansionList>
              <ExpansionPanel className="expansion-panel" label="More About Dan" footer={null}>
                <p className="expansion-details">
                  Technical Delivery Leader, Solution Architect, and Football Coach are some of this code whisperers skills. Dan has developed, managed, and delivered multiple large scale ecommerce builds and complex custom applications.
                </p>
              </ExpansionPanel>
            </ExpansionList>
          </li>
          <li>
            <div className="member-image" style={{ backgroundImage: `url(${bryan})` }} />
            <div className="member-info">
              <h2>Bryan Sabolich</h2>
              <h3>Partner</h3>
              <p>Front end code wrangler, Certified Scrum Master, and Grill Master are just a few of the items Bryan brings to the table. With dozens of ecommerce builds and countless features delivered his track record speaks for it's self.</p>
              <ul className="social">
                <li>
                  <a href="https://www.linkedin.com/in/bryansabolich/" title="LinkedIn">
                    <i className="fa fa-linkedin" aria-hidden="true"></i>
                  </a>
                </li>
              </ul>
            </div>
            <ExpansionList>
              <ExpansionPanel className="expansion-panel" label="More About Bryan" footer={null}>
                <p className="expansion-details">
                  Front end code wrangler, Certified Scrum Master, and Grill Master are just a few of the items Bryan brings to the table. With dozens of ecommerce builds and countless features delivered his track record speaks for itself.
                </p>
              </ExpansionPanel>
            </ExpansionList>
          </li>
          <li>
            <div className="member-image" style={{ backgroundImage: `url(${contractors})` }} />
            <div className="member-info">
              <h2>Trusted, Talented, Local</h2>
              <h3>Contractors</h3>
              <p>Information Architects, Art Directors, User Experience Designers, SEO Analyst, Quality Assurance Analyst, Engineers, and more. <strong>We've met some amazing people over the years that we still love working with.</strong></p>
            </div>
            <ExpansionList>
              <ExpansionPanel className="expansion-panel" label="More About Our Friends" footer={null}>
                <p className="expansion-details">
                  Information Architects, Art Directors, User Experience Designers, SEO Analyst, Quality Assurance Analyst, Engineers, and more. <strong>We've met some amazing people over the years that we still love working with.</strong>
                </p>
              </ExpansionPanel>
            </ExpansionList>
          </li>
        </ul>
        <div className="secondary-content">
          <p>
            We are an experienced team of industry leaders, with a track record of delivering quality products & services for some amazing businesses. This team has delivered multiple custom solutions. Including product configurators, advanced reporting interfaces, and highly branded interfaces. Modern design and development patterns make us tick. We also work with a variety of industry subject matter experts. Team Leaders, Art Directors, Information Architects, DevOps, and Quality Assurance. All trusted individuals we consider friends and have worked with for many years.
          </p>
          <ContactFormDrawer button="true" />
        </div>
      </div>
    );
  }
}

export default AboutUs;
