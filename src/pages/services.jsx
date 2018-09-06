import React, { Component } from "react";
import SubPage from '../layout/subpage';
import Layout from '../layout';
import Services from '../components/SubPages/services';

import config from "../../data/SiteConfig";

class ServicesPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      key: 'services',
      title: 'Services',
      seoTitle: config.seo.services.title,
      seoDescription: config.seo.services.description,
      canonical: `${config.siteUrl}/services/`,
      component: <Services/>
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

export default ServicesPage;
