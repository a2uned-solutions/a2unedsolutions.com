import React, { Component } from "react";
import SubPage from '../layout/subpage';
import Layout from '../layout';
import AboutUs from '../components/SubPages/about-us';

import config from "../../data/SiteConfig";

class AboutPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      key: 'about-us',
      title: 'About Us',
      seoTitle: config.seo.aboutUs.title,
      seoDescription: config.seo.aboutUs.description,
      canonical: `${config.siteUrl}/about/`,
      component: <AboutUs/>
    };
  }

  render() {

    const { location } = this.props;

    return (
      <Layout location={location}>
        <SubPage pageData={this.state} location={location} />
      </Layout>
    );
  }
}

export default AboutPage;
